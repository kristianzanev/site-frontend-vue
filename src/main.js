import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

fetch('http://localhost:3000', {
  method: 'GET',
  credentials: 'include',
}).then(async (res) => {
  const data = await res.json();
  console.warn(data);
});
