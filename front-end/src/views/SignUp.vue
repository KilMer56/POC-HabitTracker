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
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FormInput from '../components/FormInput.vue';
//import { userStore } from '../store/User';

@Options({
  components: {
    FormInput,
  },
})
export default class SignUp extends Vue {
    errors: any = {};
    form: any = {
        firsname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    async onSubmit() {
        this.errors = {};
    }

    validate() {
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