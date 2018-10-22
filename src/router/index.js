import Vue from 'vue'
import Router from 'vue-router'
import home from 'views/home.vue'
import login from 'views/login.vue'
import register from 'views/register.vue'

const user = resolve =>{ require(['views/user/user.vue'], resolve)}
const category = resolve =>{ require(['views/category/category.vue'], resolve)}
const movie = resolve =>{ require(['views/movie/movie.vue'], resolve)}

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: '登录页',
            component: login,
            hidden:true
        },
         {
            path: '/register',
            name: '注册页',
            component: register,
            hidden:true
        },
        {
            path: '/',
            // leaf:true,
            name: '用户管理',
            component: home,
            icon: 'el-icon-edit',
            redirect: '/user',
            children:[
                { path: '/user', name: '用户列表', component: user},
                { path: '/user', name: '用户列表', component: user},
            ]
        },
        {
            path: '/',
            leaf:true,
            name: '分类管理',
            component: home,
            icon: 'el-icon-document',
            redirect: '/category',
            children:[
                { path: '/category', name: '分类列表', component: category},
            ]
        },
        {
            path: '/',
            leaf:true,
            name: '电影管理',
            component: home,
            icon: 'el-icon-picture',
            redirect: '/movie',
            children:[
                { path: '/movie', name: '电影列表', component: movie},
            ]
        },
    ]
})
