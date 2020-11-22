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
          <input type="password" v-model="confirmPassword" />
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
import { mixins, Vue } from 'vue-class-component';
import { Toast } from '../mixins/toast.mixin';
import { Form } from '../mixins/form.mixin';

import { Response } from "../types/service.type"
import { SignUpParams, SessionInfo } from "../types/user.type"

import UserService from '../services/user.service';
import UserStore from '../store/user.store';

export default class SignUp extends mixins(Toast, Form) {
    confirmPassword = '';

    form: SignUpParams = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };

    async onSubmit() {
      this.errors = {};
      this.validate();

      if (this.hasErrors()) {
        console.log(this.form)
        const response : Response<SessionInfo> = await UserService.signUp(this.form);

        if (!response.isError && response.data != null) {
          this.toast.success(response.message);
          UserStore.setToken(response.data.access_token);

          this.$router.push("/dashboard");
        }
        else {
          this.toast.error(response.message);
        }
      }
    }

    validate() {
      if (this.form.firstname == null || this.form.firstname.length == 0) {
        this.errors.firstname = 'Required';
      }
      if (this.form.lastname == null || this.form.lastname.length == 0) {
        this.errors.lastname = 'Required';
      }
      if (this.form.email == null || !this.validEmail(this.form.email)) {
        this.errors.email = 'The email should be valid';
      }
      if (this.form.password == null || this.form.password.length < 5) {
        this.errors.password = 'The password length should be superior than 5';
      }
      if (this.confirmPassword !== this.form.password) {
        this.errors.confirmPassword = 'Both passwords are different';
      }
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
