<script>
export default{
    name: 'ProjectCard',
    props:{
        project: Object
    },
    
    data(){
        return{
            imgLink: "http://localhost:8000/storage/",

        }
    }
}
</script>

<template>

<div class="card mb-3" style="width: 18rem;">
    <img v-if="project.image !== null " class="card-img-top" :src="`${imgLink}${project.image}`" :alt="project.title">
    <div class="card-body">
        <h5 class="card-title">{{project.title}}</h5>
        <p class="card-text">{{ project.description }}</p>
        <router-link  :to="{name:'singleProject', params:{slug: project.slug}}" class="btn btn-primary">vedi progetto</router-link>
    </div>
</div>

</template>

<style scoped lang="scss">
</style>