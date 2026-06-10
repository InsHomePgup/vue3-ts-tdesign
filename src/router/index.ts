import { createRouter, createWebHashHistory} from 'vue-router'

import HomeView from '@/pages/home.vue'
import AboutView from '@/pages/about.vue'
import UserView from '@/pages/user.vue'
import BaseLayout from '@/Layout/BaseLayout.vue'
import CardView from '@/pages/About/Card.vue'

const routes = [
    { 
        path: '/', 
        component: BaseLayout,
        children: [
            { path: '', component: HomeView },
            { 
                path: 'about', 
                component: AboutView,
                // 添加嵌套路由
                children: [
                    {
                        path: 'card',
                        component: CardView
                    }
                ]
            },
            { path: 'user/:id', component: UserView },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
