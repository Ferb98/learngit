<template>
    <div id='profile'>
    <div id='a'>
        <ul>
    <li><router-link to='/'>我的工作</router-link></li>
    <li>
        <router-link to='/profile3'><p>{{message2}}</p></router-link>
        </li>
    <li><router-link to='/profile4'>{{msg}}</router-link></li>
    <button @click='change'>改变我的学校</button><br>
    <button @click='change2'>变回我的学校</button>
    </ul>
    </div>
    <div id='right'>
        <children id="children" @child-event="showment" @child-event2="showment2"></children>
        <router-view>
        </router-view></div>    </div>
</template>
<style scoped>
#profile{
    border:1px solid;
}
#child{
    float:right;
    border:1px solid;
}
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
    width:10%;
    height: 100%;
}
ul{
  list-style-type: none;
  padding:10px;
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
<script>
import Children from '@/components/anniu';
export default {
  data () {
    return {
      msg: '我的学校',
      message2:'我的爱好'}
  },
  components:{
      Children
  },
  methods: {
    change: function () {
      this.msg= '我的学校改变了' },
    change2: function () {
      this.msg= '我的学校' },
    showment:function(data){
       this.message2=data
      },showment2:function(data){
       this.message2=data 
      }  
  }
}
</script>
