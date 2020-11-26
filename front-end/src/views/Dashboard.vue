<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Dashboard extends Vue {}
</script>

<style scoped>
.dashboard {
  padding: 2rem 3rem;
}

.dashboard h1 {
  margin: 0;
}
</style>