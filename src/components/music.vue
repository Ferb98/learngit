<template>
    <div id="music">
    <div id="a"><ul>
    <li><router-link to="/">吉他</router-link></li>
    </ul>
    </div>
    <div id="right"><router-view></router-view></div>    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
#right{
    float: left;
    border:1px solid blue;
    text-align: center;
    width:80%;
    height: 100%;
}
#a{
    float:left;
    border:1px solid;
    margin: 10px;
    height: 100%;
}
ul{
  list-style-type: none;
}
li{
  display:block;
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
</style>
