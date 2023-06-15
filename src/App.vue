<script >
import axios from 'axios';
import Card from './components/card.vue';

export default{
    data() {
        return {
            projects: [],
            imgLink: "http://localhost:8000/storage/",
            dbUrl: "http://localhost:8000"
        };
    },
    mounted() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.dbUrl}/api/projects`).then((resp) => {
                this.projects = resp.data.results;
                console.log(this.projects);
            });
        }
    },
    components: { Card }
}
</script>

<template>
  <main>
    <div class="container py-4">
      <div class="row">
        <div v-for="project in projects" class="col-md-6 col-xl-4 col-sm-12 d-flex justify-content-center">
          <Card :project="project"/>
        </div>
      </div>  
    </div>
  </main>
  

</template>

<style lang="scss">
@use "./styles/general.scss" as *;

</style>
