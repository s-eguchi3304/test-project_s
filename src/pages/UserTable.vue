<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';

const message = ref('JSONデータ取得して一覧に表示');
const users = ref([]);
const search = ref('');

onMounted(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => (users.value = response.data))
    .catch((error) => console.log(error));
});

const search_users = computed(() => {
  let searchWord = search.value.trim();

  if (searchWord === '') return users.value;

  return users.value.filter((user) => {
    return (
      user.username.toLowerCase().includes(search.value.toLowerCase()) ||
      user.email.toLowerCase().includes(search.value.toLowerCase()) ||
      user.address.street.toLowerCase().includes(search.value.toLowerCase()) ||
      user.address.suite.toLowerCase().includes(search.value.toLowerCase()) ||
      user.address.city.toLowerCase().includes(search.value.toLowerCase()) ||
      user.address.zipcode.toLowerCase().includes(search.value.toLowerCase()) ||
      user.address.geo.lng.toLowerCase().includes(search.value.toLowerCase()) ||
      user.address.geo.lat.toLowerCase().includes(search.value.toLowerCase()) ||
      user.phone.toLowerCase().includes(search.value.toLowerCase()) ||
      user.website.toLowerCase().includes(search.value.toLowerCase()) ||
      user.company.name.toLowerCase().includes(search.value.toLowerCase()) ||
      user.company.catchPhrase
        .toLowerCase()
        .includes(search.value.toLowerCase()) ||
      user.company.bs.toLowerCase().includes(search.value.toLowerCase())
    );
  });
});
</script>

<template>
  <div class="container mt-5">
    <h1>{{ message }}</h1>
    <div>検索：<input type="text" v-model="search" /></div>
    <div class="table-responsive">
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
              <a :href="`http://${user.website}`">{{ user.website }}</a>
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
  </div>
</template>

<!--<script>
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
      .then((response) => (this.users = response.data))
      .catch((error) => console.log(error));
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
</script>-->

<style scoped></style>
