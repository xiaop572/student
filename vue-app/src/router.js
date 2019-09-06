import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Learn from './views/Learn'
import Community from './views/Community'
import Student from './views/Student'
import Err from './views/err'
import Question from './views/question'
import One from './components/learn/one'
import Two from './components/learn/two'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      name:'home',
      components:{
        default:Home,
        'wenti':One
      },
      children:[
      ]
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    {
      path:'/learn',
      name:'learn',
      component:Learn
    },
    {
      path:'/community',
      name:'community',
      redirect:'/community/one',
      component:Community,
      children:[
        {
          path:'one',
          name:'one',
          component:One
        },
        {
          path:'two',
          name:'two',
          component:Two
        }
      ]
    },{
      path:'/student',
      name:'student',
      component:Student
    },
    {
      path:'/question/:id',
      name:'question',
      component:Question
    },
    {
      path:'/err.html',
      name:'err',
      component:Err
    },{
      path:'*',
      redirect(to){
        if(to.path=='/'){
          return '/home'
        }else{
          return {name:'err'}
        }
      }
    }
  ],
  mode:'history',
  linkActiveClass:'active',
  linkExactActiveClass:'exact'
})
