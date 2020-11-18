<template>
  <div class="big center">
    <div class="card flat-shadow">
      <h1 class="text-center title">Sign In</h1>
      <form novalidate @submit.prevent="onSubmit">
        <FormInput label="Email" :errorMessage="errors['email']">
          <input type="email" v-model="form.email" />
        </FormInput>
        <FormInput label="Password" :errorMessage="errors['password']">
          <input type="password" v-model="form.password" />
        </FormInput>
        <div class="center">
          <button class="primary" type="submit" style="margin-right: 20px">Sign In</button>
          <button class="secondary" @click="$router.push('/signup')">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FormInput from '../components/FormInput.vue';
import { userStore } from '../store/User';

@Options({
  components: {
    FormInput,
  },
})
export default class SignIn extends Vue {
  errors: any = {};
  form: any = {
    email: "",
    password: ""
  };

  async onSubmit() {
    this.errors = {};
    this.validate();

    if(Object.keys(this.errors).length == 0){
      let success = await userStore.connect();
      
      if(success){
        console.log("connected");
      }
    }
  }

  validate() {
    if(this.form.email == null && this.validEmail(this.form.email)){
      this.errors['email'] = "The email should be valid"; 
    }
    if(this.form.password == null || this.form.password.length < 5){
      this.errors['password'] = "The password length should be superior than 5"; 
    }
  }

  validEmail(email: string): boolean {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
</script>

<style scoped>
</style>
