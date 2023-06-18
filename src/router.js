import {createRouter, createWebHistory} from "vue-router";
import home from "./pages/home.vue";
import projects from"./pages/projects.vue"

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name: "home",
            component: home,
        },
        {
            path:"/projects",
            name:"projects",
            component:projects
        }

    ],
    
});

export{router};