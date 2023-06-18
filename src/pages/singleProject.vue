<script>

import axios from 'axios';

export default{
    name:"singleProject",
    data(){
       return{
        dbUrl: "http://localhost:8000",
        project : {},
        imgLink: "http://localhost:8000/storage/"
       }
    },
    mounted(){
        const currentSlug = this.$route.params.slug;
        axios.get(`${this.dbUrl}/api/projects/${currentSlug}`).then((resp) => {
                this.project = resp.data.results;
                console.log(this.project)
            });
    },
    methods:{
       
    }

}
</script>

<template>
    <div class="container text-center py-5">
        <img v-if="project.img !== null" class="w-100 mb-3" :src="`${imgLink}${project.image}`" alt="">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>

    </div>
</template>

<style scoped lang="scss">
</style>