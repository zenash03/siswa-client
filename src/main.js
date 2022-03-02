import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { applyStyles } from '@popperjs/core';

const app = createApp(App);

app.use(router)
app.mount('#app')
