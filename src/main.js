import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';

import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css';                           //icons

const app = createApp(App);
app.use(PrimeVue);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Checkbox', Checkbox);

app.mount('#app');

