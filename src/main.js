import { createApp } from 'vue';
import App from './views/App.vue';
import router from './route/index.js';

createApp(App).use(router).mount('#app');
