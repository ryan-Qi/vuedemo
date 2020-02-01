<template>
    <div>
        <h2>About</h2>
        <p>{{msg}}</p>
        <input type="text">
    </div>
</template>

<script>
    //跳转页面
   // window.location.href =url
    export default {
        props:{
            msg:String
        }
    }
</script>

<style scoped>

</style>