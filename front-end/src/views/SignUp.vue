<template>
  <div class="big center">
    <div class="card flat-shadow">
      <h1 class="text-center title">Sign Up</h1>
      <form novalidate @submit.prevent="onSubmit">
        <div class="names">
            <FormInput class="half" label="Firstname" :errorMessage="errors['firstname']">
                <input type="text" v-model="form.firstname" />
            </FormInput>
            <FormInput class="half" label="Lastname" :errorMessage="errors['lastname']">
                <input type="text" v-model="form.lastname" />
            </FormInput>
        </div>
        <FormInput label="Email" :errorMessage="errors['email']">
          <input type="email" v-model="form.email" />
        </FormInput>
        <FormInput label="Password" :errorMessage="errors['password']">
          <input type="password" v-model="form.password" />
        </FormInput>
        <FormInput label="Confirm password" :errorMessage="errors['confirmPassword']">
          <input type="password" v-model="form.confirmPassword" />
        </FormInput>
        <div class="center">
          <button class="secondary" @click="$router.go(-1)" style="margin-right: 20px">Return</button>
          <button class="primary" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import validEmail from "../components/utils";
import FormInput from '../components/FormInput.vue';
import { userStore } from '../store/User';

@Options({
  components: {
    FormInput,
  },
})
export default class SignUp extends Vue {
    errors: any = {};
    form: any = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    async onSubmit() {
        this.errors = {};
        this.validate();

        if(Object.keys(this.errors).length == 0){
          await userStore.signUp(this.form);
        }
    }

    validate() {
      if(this.form.firstname == null || this.form.firstname.length == 0){
        this.errors['firstname'] = "Required"; 
      }
      if(this.form.lastname == null || this.form.lastname.length == 0){
        this.errors['lastname'] = "Required"; 
      }
      if(this.form.email == null || !validEmail(this.form.email)){
        this.errors['email'] = "The email should be valid"; 
      }
      if(this.form.password == null || this.form.password.length < 5){
        this.errors['password'] = "The password length should be superior than 5"; 
      }
      if(this.form.confirmPassword !== this.form.password){
        this.errors['confirmPassword'] = "Both passwords are different"; 
      }

      console.log(this.errors)
    }
}
</script>

<style scoped>
.names {
    display: flex;
    justify-content: space-between;
}

.half {
    width: 48%;
}
</style>