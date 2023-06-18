<script>
export default{
    name: "AppHeader",
    data(){
        return{

        }
    }
}
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light px-2">
    <div class="container d-flex justify-content-between">
        <div>
            <a class="navbar-brand" href="#">Savini Pietro Dev</a>
        </div>
        <ul class="">
            <li >
            <routerLink :to="{name:'home'}" href="#">Home</routerLink>
            </li>
            <li >
            <router-link :to="{name:'projects'}"  href="#">Projects</router-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<style scoped lang="scss">
ul{
    padding: 0;
    margin: 0;
    li{
    display: inline-block;
    margin-right:15px ;

        a{
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>