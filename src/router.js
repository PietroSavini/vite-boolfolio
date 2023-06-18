import {createRouter, createWebHistory} from "vue-router";
import home from "./pages/home.vue";
import projects from"./pages/projects.vue"
import singleProject from "./pages/singleProject.vue"

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
            component: projects
        },
        {
            path:"/projects/:slug",
            name:"singleProject",
            component: singleProject,
        }


    ],
    
});

export{router};