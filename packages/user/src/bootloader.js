import { createApp } from 'vue';
import App from './App.vue';

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(App);
  app.mount(el); // this a function from Vue.
};

// We are running through container and we should export the mount function
export { mount };