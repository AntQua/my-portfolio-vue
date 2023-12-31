<template>
  <div v-if="project">
    <section class="intro">
      <h1 class="section__title section__title--intro">
        {{ project.title1 }} <strong>{{ project.title2 }}</strong>
      </h1>
      <p class="section__subtitle section__subtitle--intro">{{ project.subtitle }}</p>
      <img :src="project.img1" alt="" class="intro__img">
    </section>

    <div class="portfolio-item-individual">
      <p v-html="project.description1"></p>
      <p v-html="project.description2"></p>
      <img :src="project.img2" alt="">
      <p v-html="project.description3"></p>
      <p v-html="project.description4"></p>
      <p v-html="project.description5"></p>
      <p>To explore the project, visit the
        <a :href="project.urlProj" target="_blank">
          <strong>{{ project.title1 }}</strong> <i class="fa-solid fa-link"></i>
        </a> website.
      </p>
      <p>For a deeper look into the project's codebase, you can check out the <a :href="project.urlGitHub"
          target="_blank"><i class="fa-brands fa-github"></i>
          GitHub repository.</a></p>
    </div>
  </div>
</template>
  
<script>
import { ref, watch, nextTick } from 'vue';
import projectData from '../projects-data.js';

export default {
  name: 'ProjectDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const project = ref(null);

    // Function to reset scroll position
    function resetScrollPosition() {
      nextTick(() => {
        window.scrollTo(0, 0);
      });
    }

    // Watcher on the project data
    watch(
      () => props.id,
      (newId) => {
        project.value = projectData.find(p => p.id === newId);
        resetScrollPosition();
      },
      { immediate: true } // Run watcher immediately on component mount
    );

    return { project };
  }
};
</script>



<style scoped>
.portfolio-item-individual {
  text-align: justify;
  padding: 0 2em 2em;
  max-width: 1000px;
  margin: 0 auto;
}

.portfolio-item-individual p {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.portfolio-item-individual img {
  width: 100%;
  height: 30em;
  /* Adjust this height as needed */
  margin-top: 2em;
  margin-bottom: 2em;
  box-shadow: var(--bs);
}

.portfolio-item-individual ul {
  padding-left: 200px;
}
</style>
  