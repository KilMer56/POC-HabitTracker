<template>
  <div class="big center">
    <div class="card flat-shadow">
      <h1 class="text-center title">Sign In</h1>
      <form novalidate @submit.prevent="onSubmit">
        <FormInput label="Login" :errorMessage="errors['login']">
          <input type="text" v-model="login" />
        </FormInput>
         <FormInput label="Password" :errorMessage="errors['password']">
          <input type="password" v-model="password" />
        </FormInput>
        <div class="center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FormInput from './common/FormInput.vue';
import { userStore } from '../store/User';

@Options({
  components: {
    FormInput,
  },
})
export default class HelloWorld extends Vue {
  errors: any = {};
  login: string = "";
  password: string = "";

  async onSubmit() {
    this.errors = {};
    this.validate();

    if(Object.keys(this.errors).length == 0){
      await userStore.connect();
      
      if(userStore.getState().isConnected){
        console.log("connected");
      }
    }
  }

  validate() {
    if(this.login == null || this.login.length < 4){
      this.errors['login'] = "The login length should be superior than 3"; 
    }
    if(this.password == null || this.password.length < 5){
      this.errors['password'] = "The password length should be superior than 5"; 
    }
  }
}
</script>

<style scoped>
.card {
  padding: 2rem;
  width: 25%;
}

.title {
  margin-bottom: 2.5rem;
  color: #474747;
}
</style>
