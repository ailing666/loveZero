
import { makeAutoObservable } from 'mobx'
class TaskStore {
  list = [
    {
      id: 1,
      name: '学习react',
      isDone: true
    },
    {
      id: 2,
      name: '搞定mobx',
      isDone: false
    },
    {
      id: 3,
      name: '学习react3',
      isDone: true
    },
    {
      id: 4,
      name: '搞定mobx4',
      isDone: false
    }
  ]
  constructor() { makeAutoObservable(this) }

  // 获取已完成的数量
  get isFinished () {
    return this.list.filter(item => item.isDone).length
  }

  // 计算是否全选中
  get isAll () {
    return this.list.every(item => item.isDone)
  }

  // 全选功能
  allCheck = (e) => {
    this.list.forEach(item => item.isDone = e.target.checked)
  }

  // 单选功能
  setIsDone = (id) => {
    let res = this.list.find(item => item.id === id)
    res.isDone = !res.isDone
  }

  // 删除功能
  delItem = (id) => {
    this.list = this.list.filter(item => item.id !== id)
  }

  // 添加todo项
  addTodo = (v) => {
    this.list.push(v)
  }
}
export default TaskStore
