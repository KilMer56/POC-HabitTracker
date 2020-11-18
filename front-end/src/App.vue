<template>
  <Login />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Login from './components/Login.vue';

@Options({
  components: {
    Login,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.text-center {
  text-align: center;
}

.big {
  width: 100%;
  height: 100%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flat-shadow {
  border-radius: 50px;
  background: #ededed;
  box-shadow:  20px 20px 60px #c9c9c9, 
              -20px -20px 60px #ffffff;
}

label {
  margin: 0 0 10px 10px;
  font-size: 20px;
  display: block;
}

input {
  width: 100%;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
  padding: 15px;
  border: 0;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  border-radius: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  color: #707070;
}

input:focus{
  outline: none;
  border: 1px #c9c9c9;
}

.half {
  width: 50%;
}

button {
  background-color: #45b3f7;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
}
</style>
