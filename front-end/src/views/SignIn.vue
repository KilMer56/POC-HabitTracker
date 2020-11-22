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
import { useToast } from 'vue-toastification';
import { validEmail } from '../utils/index';

import { Response } from "../types/service.type"
import { SignInParams, SessionInfo } from "../types/user.type"

import FormInput from '../components/FormInput.vue';
import UserService from '../services/user.service';
import UserStore from '../store/user.store';

@Options({
  components: {
    FormInput,
  },
})
export default class SignIn extends Vue {
  errors: any = {};

  form: SignInParams = {
    email: '',
    password: '',
  };

  toast = useToast();

  async onSubmit() {
    this.errors = {};
    this.validate();

    if (Object.keys(this.errors).length == 0) {
      const response : Response<SessionInfo> = await UserService.signIn(this.form);

      if (!response.isError && response.data != null) {
        this.toast.info(response.message);
        UserStore.setToken(response.data.access_token);
      }
    }
  }

  validate() {
    if (this.form.email == null || !validEmail(this.form.email)) {
      this.errors.email = 'The email should be valid';
    }
    if (this.form.password == null || this.form.password.length < 5) {
      this.errors.password = 'The password length should be superior than 5';
    }
  }
}
</script>

<style scoped>
</style>
