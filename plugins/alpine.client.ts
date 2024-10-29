import Alpine from 'alpinejs';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
    window.Alpine = Alpine;
    Alpine.start();
});
