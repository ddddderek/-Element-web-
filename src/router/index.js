import Vue from 'vue'
import Router from 'vue-router'
import home from 'views/home.vue'

const table = resolve =>{ require(['views/table/table.vue'], resolve)}
const chart = resolve =>{ require(['views/chart/chart.vue'], resolve)}
const form = resolve =>{ require(['views/form/form.vue'], resolve)}

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            // leaf:true,
            name: '主页',
            component: home,
            icon: 'el-icon-edit',
            redirect: '/table',
            children:[
                { path: '/table', name: '表格展示页', component: table},
                { path: '/chart', name: '图表展示页', component: chart}
            ]
        },
         {
            path: '/',
            leaf:true,
            name: '表单',
            component: home,
            icon: 'el-icon-document',
            redirect: '/form',
            children:[
                { path: '/form', name: '表单展示页', component: form},
            ]
        },
    ]
})
