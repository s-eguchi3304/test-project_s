<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <div>検索：<input type="text" v-model="search" /></div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">e-mail</th>
          <th scope="col">address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in search_users" :key="user.id">
          <th scope="col">{{ user.id }}</th>
          <td scope="col">{{ user.username }}</td>
          <td scope="col">{{ user.email }}</td>
          <td scope="col">
            {{ user.address.street }}<br />
            {{ user.address.suite }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: 'Search/Filter In Table',
      users: [],
      search: '',
    };
  },
  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => (this.users = response.data));
  },
  computed: {
    search_users() {
      let searchWord = this.search.trim();

      if (searchWord === '') return this.users;

      return this.users.filter((user) => {
        return (
          user.username.toLowerCase().includes(this.search.toLowerCase()) ||
          user.email.toLowerCase().includes(this.search.toLowerCase()) ||
          user.address.street.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
};
</script>
