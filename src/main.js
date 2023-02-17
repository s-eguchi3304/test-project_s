import { createApp } from 'vue';
/*import './style.css'*/
import App from './App.vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import router from './router';

createApp(App).use(router).use(createPinia()).mount('#app');
