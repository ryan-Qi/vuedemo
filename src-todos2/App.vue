<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!--<TodoHeader @addTodo="addTodo"/>--><!--给todoheader标签对象绑定addTodo-->
            <TodoHeader ref="header"/>
            <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
            <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
            <todo-footer>
                <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
                <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
                <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
            </todo-footer>
        </div>
    </div>
</template>

<script>
    import TodoHeader from "@/components/TodoHeader";
    import TodoFooter from "@/components/TodoFooter";
    import TodoList from "@/components/TodoList";
    import storgeUtil from "@/util/storgeUtil";
    export default {
        data(){
            return {
                /*todos:[
                    {title:"吃饭",complete:false},
                    {title:"睡觉",complete:true},
                    {title:"coding",complete:false}
                ]*/
                todos:storgeUtil.readTodos()
            }
        },

        computed:{
            completeSize(){
                return this.todos.reduce((preTotal,todo)=>preTotal+(todo.complete?1:0),0)
            },

            isAllCheck:{
                get(){
                    return this.completeSize===this.todos.length && this.completeSize>0
                },

                set(value){//value是当前checkbox的最新的值
                    this.selectAllTodos(value)
                }
            }
        },

        mounted() {//执行异步代码
            //给<TodoHeader/>绑定addTodo事件监听
            //this.$on('addTodo',this.addTodo)//不正确，给app绑定而不是header
            this.$ref.header.$on('addTodo',this.addTodo)

        },

        methods:{
            addTodo(todo){
                this.todos.unshift(todo)
            },
            deleteTodo(index){
                this.todos.splice(index,1)
            },

            //删除所有选中的todo
            deleteCompleteTodos(){
                this.todos = this.todos.filter(todo=>!todo.complete)
            },

            //全选/全不选
            selectAllTodos(check){
                this.todos.forEach(todo=>todo.complete=check)
            }
        },

        watch:{//深度监视
            todos:{
                deep:true,//深度监视
                /*handler:function (value) {
                    //将todos最新的值的json数据，保存到localStorge
                    //缓存到本地
                    storgeUtil.saveTodos(value)
                }*/
                handler:storgeUtil.saveTodos
            }
        },

        components:{
            TodoHeader,
            TodoList,
            TodoFooter
        }
    }
</script>

<style scoped>
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>