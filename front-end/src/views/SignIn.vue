<template>
  <div class="center">
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
import { mixins, Vue } from 'vue-class-component';
import { Toast } from '../mixins/toast.mixin';
import { Form } from '../mixins/form.mixin';

import { SignInParams, SessionInfo } from "../types/user.type"
import { Response } from "../types/service.type"

import UserService from '../services/user.service';
import UserStore from '../store/user.store';

export default class SignIn extends mixins(Toast, Form) {
  form: SignInParams = {
    email: '',
    password: '',
  };

  async onSubmit() {
    this.errors = {};
    this.validate();

    if (this.hasErrors()) {
      const response : Response<SessionInfo> = await UserService.signIn(this.form);

      if (!response.isError && response.data != null) {
        this.toast.success(response.message);
        UserStore.setToken(response.data.access_token);

        this.$router.push("/dashboard");
      }
      else {
        this.toast.error("Your credentials are not valid");
      }
    }
  }

  validate() {
    if (this.form.email == null || !this.validEmail(this.form.email)) {
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
