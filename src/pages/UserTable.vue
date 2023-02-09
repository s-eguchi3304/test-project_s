<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <div>検索：<input type="text" v-model="search" /></div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">e-mail</th>
          <th scope="col">address</th>
          <th scope="col">phone</th>
          <th scope="col">website</th>
          <th scope="col">company</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in search_users" :key="user.id">
          <th scope="col">{{ user.id }}</th>
          <td scope="col">{{ user.username }}</td>
          <td scope="col">{{ user.email }}</td>
          <td scope="col">
            {{ user.address.street }}<br />
            {{ user.address.suite }}<br />
            {{ user.address.city }}<br />
            {{ user.address.zipcode }}<br />
            {{ user.address.geo.lng }}<br />
            {{ user.address.geo.lat }}<br />
          </td>
          <td>{{ user.phone }}</td>
          <td>
            <a :href="`https://${user.website}`">{{ user.website }}</a>
          </td>
          <td>
            {{ user.company.name }}<br />
            {{ user.company.catchPhrase }}<br />
            {{ user.company.bs }}
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
      message: 'JSONデータ取得して一覧に表示',
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
          user.address.street
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          user.address.suite
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          user.address.city.toLowerCase().includes(this.search.toLowerCase()) ||
          user.address.zipcode
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          user.address.geo.lng
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          user.address.geo.lat
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          user.phone.toLowerCase().includes(this.search.toLowerCase()) ||
          user.website.toLowerCase().includes(this.search.toLowerCase()) ||
          user.company.name.toLowerCase().includes(this.search.toLowerCase()) ||
          user.company.catchPhrase
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          user.company.bs.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped></style>
