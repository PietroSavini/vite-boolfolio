<script >
import axios from 'axios';

export default{
  data(){
    return{
      projects:[],
    }
  },
  mounted(){
    this.getProjects();
  },

  methods:{
   
    getProjects(){
      axios.get('http://localhost:8000/Api/Project').then((resp) =>{
        this.projects = resp.results;
        console.log(results);
      });
    }

  },

}
</script>

<template>
  
</template>

<style scoped lang="scss">

</style>
