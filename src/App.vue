<template>
<div>
    <div id="app">
    <ul>
        <li><router-link to="/">我的个人简介</router-link></li>
        <li><router-link to="/music">我的音乐</router-link></li>
    </ul>
            </div>
        <router-view></router-view>
</div>
</template>
<script>
export default{
  name: 'App'
}
</script>
<style scoped>
#app{
    text-align: center;
    border:1px solid red;
}
ul{
  list-style-type: none;
}
li{
  display: inline;
  font-family: 'Courier New', Courier, monospace;
}
a{
       text-decoration:none;
}   
a:link{
        color:black;
}
a:visited{
        color:black;
}
a:hover{
        color:wheat;
}
a:active{
        color:black;
}
#left{
  float: left;
  border:1px solid;
  width:100%;
  height: 100%;
}
</style>
