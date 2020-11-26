<template>
  <div class="sidebar content" v-if="user">
    <div class="content" style="flex: 1">
      <p class="firstname">{{user.firstname}}</p>
      <p class="lastname">{{user.lastname}}</p>
    </div>
    <button type="button" class="secondary" @click="disconnect">Log Out</button>
  </div>
</template>

<script lang="ts">
import { Toast } from '../mixins/toast.mixin';
import { mixins, Vue } from 'vue-class-component';
import { Response } from "../types/service.type"
import { UserInfo } from '../types/user.type';

import UserStore from '../store/user.store';
import UserService from '../services/user.service';

export default class Sidebar extends mixins(Toast) {
  async beforeMount(){
    if(this.user == null){
      const response: Response<UserInfo> = await UserService.getProfile();

      if(!response.isError && response.data != null){
        UserStore.setUser(response.data);
      }
    }
  }

  get user(): UserInfo {
    return UserStore.getUser();
  }

  get state(): any {
    return UserStore.getState();
  }

  disconnect(){
    UserStore.clean();
    this.toast.success("Logged Out successfully")
    this.$router.push('/');
  }
}
</script>

<style scoped>
.sidebar {
  padding: 2rem;
  background-color: white; 
  width: 300px;
  -webkit-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.1); 
  box-shadow: 0px 0px 30px 8px rgba(0,0,0,0.1);
}

.content {
  display: flex;
  flex-direction: column;
}

.sidebar p {
  margin: 1rem 0 0 0 ;
}

.firstname {
  font-size: 250%;
  font-weight: bold;
}

.lastname {
  font-size: 150%;
}
</style>