<script >
import axios from 'axios';

export default{
  data(){
    return{
      projects: [],
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
  <div class="container">
    <div v-for="project in projects" class="card">
    ciao</div>
  </div>

</template>

<style scoped lang="scss">

</style>
