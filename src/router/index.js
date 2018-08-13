import Vue from 'vue'
import Router from 'vue-router'
import profile from '@/components/profile'
import music from '@/components/music'
import music1 from '@/components/music1'
import profile2 from '@/components/profile2'
import profile3 from '@/components/profile3'
import profile4 from '@/components/profile4'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', component: profile,
      children: [
        {path: '/', component: profile2},
        {path: 'profile3', component: profile3},
        {path: 'profile4', component: profile4}]
    },
    {path: '/music', component: music,
      children: [
        {path: '/', component: music1}
      ]
    }
  ]
})
