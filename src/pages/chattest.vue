<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { supabase } from '/supabase';

const MAX_MESSAGE_COUNT = 10;

const messages = ref([]);
const inputName = ref('');
const inputMessage = ref('');

const sendMessage = async () => {
  await supabase.from('message').insert({
    message: inputMessage.value,
    name: inputName.value,
  });
  inputMessage.value = '';
};

const getMessages = async () => {
  let { data: message } = await supabase
    .from('message')
    .select('*')
    .limit(MAX_MESSAGE_COUNT)
    .order('created_at', { ascending: false });
  messages.value = message;
};

/*const subscribeMessage = () => {
  supabase
    .from('message')
    .on('INSERT', ({ new: newMessage }) => {
      messages.value = [newMessage, ...messages.value].slice(
        0,
        MAX_MESSAGE_COUNT
      );
    })
    .subscribe();
};

const unsubscribeMessage = () => {
  supabase.removeAllsubscriptions();
};*/

onMounted(() => {
  getMessages();
  /*subscribeMessage();*/
});

/*onBeforeUnmount(() => {
  unsubscribeMessage();
});*/
</script>

<template>
  <form @submit.prevent="sendMessage">
    <input type="text" v-model="inputName" placeholder="名前" /><br />
    <input type="text" v-model="inputMessage" placeholder="メッセージ" /><br />
    <button type="submit">送信</button>
  </form>

  <ul>
    <li v-for="message in messages" :key="message.id">
      <b>{{ message.name }}</b
      >{{ message.message }}
    </li>
  </ul>
</template>
