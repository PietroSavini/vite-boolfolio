<script >
import axios from 'axios';

export default{
  data(){
    return{
      projects: [],
      imgLink : "http://localhost:8000/storage/"
    }
  },
  mounted(){
    this.getProjects();
    
  },

  methods:{
   
    getProjects(){
      axios.get('http://localhost:8000/api/projects').then((resp) =>{
        this.projects = resp.data.results;
        console.log(this.projects);
      });
    }

  },

}
</script>

<template>
  <main>
    <div class="container py-4">
    <div class="row">
      <div v-for="project in projects" class="col-md-6 col-xl-4 col-sm-12 d-flex justify-content-center ">
        <div class="card mb-3" style="width: 18rem;">
          <img v-if="project.image !== null " class="card-img-top" :src="`${imgLink}${project.image}`" :alt="project.title">
          <div class="card-body">
            <h5 class="card-title">{{project.title}}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a href="#" class="btn btn-primary">vedi progetto</a>
          </div>
        </div>
      </div>
    </div>  
  </div>
  </main>
  

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
