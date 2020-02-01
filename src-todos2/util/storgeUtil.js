/*
使用localStorage存储数据的工具模块
1.函数
2.对象
需要向外暴露一个功能还是多个功能
一个用函数，多个用对象
 */
const TODOS_Key='todos_key'

export default {
    saveTodos(todos){
        window.localStorage.setItem(TODOS_Key,JSON.stringify(todos))
    },
    readTodos(){
        return JSON.parse(window.localStorage.getItem(TODOS_Key)||'[]')
    }
}