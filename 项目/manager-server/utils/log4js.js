// 导入包
const log4js = require("log4js");

// 定义 level
const levels = {
  trace: log4js.levels.TRACE,
  debug: log4js.levels.DEBUG,
  info: log4js.levels.INFO,
  warn: log4js.levels.WARN,
  error: log4js.levels.ERROR,
  fatal: log4js.levels.FATAL,
};

log4js.configure({
  // 附加器
  appenders: {
    // 控制台打印
    console: { type: "console" },
    // 生成独立的文件，文件夹位置和名称都是固定的
    info: {
      type: "file",
      filename: "logs/all-logs.log",
    },
    // 以天为单位滚动日志文件
    error: {
      type: "dateFile",
      filename: "logs/log",
      pattern: "yyyy-MM-dd.log",
      // 设置文件名称为 filename + pattern
      alwaysIncludePattern: true,
    },
  },
  // 类型
  categories: {
    // 默认是 debug 级别，以 console 的形式记录
    default: { appenders: ["console"], level: "debug" },
    // info 级别，以 info 和 console 的形式记录
    info: {
      appenders: ["info", "console"],
      level: "info",
    },
    error: {
      appenders: ["error", "console"],
      level: "error",
    },
  },
});

/**
 * 日志输出，level为debug
 * @param {string} content
 */
exports.debug = (content) => {
  let logger = log4js.getLogger();
  logger.level = levels.debug;
  logger.debug(content);
};

/**
 * 日志输出，level为info
 * @param {string} content
 */
exports.info = (content) => {
  let logger = log4js.getLogger("info");
  logger.level = levels.info;
  logger.info(content);
};

/**
 * 日志输出，level为error
 * @param {string} content
 */
exports.error = (content) => {
  let logger = log4js.getLogger("error");
  logger.level = levels.error;
  logger.error(content);
};
