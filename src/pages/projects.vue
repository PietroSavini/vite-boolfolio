<script>
import axios from 'axios';
import Card from '../components/card.vue';

export default{
    name:"projectsList",
    data(){
        return{
            projects: [],
            imgLink: "http://localhost:8000/storage/",
            dbUrl: "http://localhost:8000",
            currentPage: 1,
            lastPage:null,
            totalProjects:0,
        }
    },
    mounted() {
    this.getProjects();

    },
    methods: {
        getProjects(page = 1) {
            axios.get(`${this.dbUrl}/api/projects`,{
              params:{
                page : page
              }
            }).then((resp) => {
                this.projects = resp.data.results.data;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalProjects = resp.data.results.total;
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
      <!-- pagination -->
      <nav v-if="lastPage" aria-label="Page navigation example" class=" d-flex justify-content-center">
        <ul class="pagination">
          <li :class="{'disabled' : currentPage === 1}" class="page-item"><a  @click.prevent="getProjects(currentPage - 1)"  class="page-link" href="#">Previous</a></li>
          <li v-for="pageNum in lastPage" class="page-item" :class="{ 'active': pageNum === currentPage }" ><a  @click.prevent="getProjects(pageNum)"  class="page-link" href="#">{{pageNum}}</a></li>
          <li :class="{'disabled' : currentPage === lastPage}" class="page-item"><a  @click.prevent="getProjects(currentPage + 1)" class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
      <!-- /pagination -->
    </div>
</main>
</template>

<style scoped lang="scss">

</style>