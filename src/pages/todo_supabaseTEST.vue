<script setup>
import { ref } from 'vue';
import { supabase } from '/supabase';

const tasks = ref([]);

const getTasks = async () => {
  let { data: todos, error, status } = await supabase.from('todos').select('*');
  tasks.value = todos;
};

getTasks();

/*const signUpUser = async () => {
  const { user, session, error } = await supabase.auth.signUp({
    email: 's-eguchi@point-inc.jp',
    password: 'password',
  });
  console.log(user);
  console.log(session);
  console.log(error);
};

signUpUser();*/
</script>

<template>
  <div class="container mt-5 mb-5">
    <h1>Vue3でsupabase</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.task }}</li>
    </ul>
  </div>
</template>
