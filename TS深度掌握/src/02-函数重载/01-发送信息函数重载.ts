// 消息类型
type MessageType = 'image' | 'audio' | string;

// 消息格式
type Message = {
  id: number;
  type: MessageType;
  sendMessage: string;
};

// 消息列表
let messageList: Message[] = [
  {
    id: 1,
    type: 'image',
    sendMessage: '你好啊,今晚咱们一起去三里屯吧',
  },
  {
    id: 2,
    type: 'audio',
    sendMessage: '朝辞白帝彩云间，千里江陵一日还',
  },
  {
    id: 3,
    type: 'audio',
    sendMessage: '你好！张无忌',
  },
  {
    id: 4,
    type: 'image',
    sendMessage: '刘老根苦练舞台绝技！',
  },
  {
    id: 5,
    type: 'image',
    sendMessage: '今晚王牌对王牌节目咋样?',
  },
];

// 重载签名
function getMessage(id: number): Message;
function getMessage(type: MessageType): Message[];
// 实现签名
function getMessage(value: any): Message | undefined | Message[] {
  if (typeof value === 'number') {
    return messageList.find(msg => value === msg.id);
  } else {
    return messageList.filter(msg => value === msg.type);
  }
}

getMessage(1);
getMessage('image');
console.log('getMessage(1): ', getMessage(1));
console.log('getMessage("image"): ', getMessage('image'));

export {};
