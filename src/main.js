import { createApp } from 'vue';
/*import './style.css'*/
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';
import router from './router';

createApp(App).use(router).mount('#app');
