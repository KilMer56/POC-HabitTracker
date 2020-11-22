<template>
  <div class="input">
    <label>{{label}}</label>
    <slot/>
    <div v-if="errorMessage && errorMessage.length > 0" class="errorDiv">
        <img src="../assets/icons/warning.png"/>
        <span class="errorMessage">{{errorMessage}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    label: String,
    errorMessage: String,
  },
})
export default class FormInput extends Vue {}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}

.errorDiv {
    color: #E66E66;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.errorDiv img {
    width: 20px;
    margin-right: 10px;
}
</style>
