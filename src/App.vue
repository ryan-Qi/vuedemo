<template>
    <div>
    <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header"><h2>Router Basic</h2></div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
                <router-link to="/about" class="list-group-item">About</router-link>
                <router-link to="/home" class="list-group-item">Home</router-link>
                <!--<a href="#/about" class="list-group-item router-link-exact-active activeClass">About</a>
                <a href="#/home" class="list-group-item">Home</a>-->
            </div>
        </div>
        <div class="col-xs-6">
            <div class="panel">
                <div class="panel-body">
                    <keep-alive>
                        <router-view msg="abc"></router-view>
                    </keep-alive>
                    <!--<div>
                        <h2>about组件</h2>
                        <p>接受外部数据：ryan</p> <input type="text">
                    </div>-->
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    /*import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.min.js'*/
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>