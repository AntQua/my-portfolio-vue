<template>
    <div>
      <h2>Project: {{ projectId }}</h2>
      <!-- Project details here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectDetail',
    props: {
      id: String
    },
    computed: {
      projectId() {
        return this.$route.params.id;
      }
    }
  };
  </script>
  
  <style scoped>
  /* CSS specific to this component */
  </style>
  