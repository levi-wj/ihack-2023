import { writable } from 'svelte/store';

export const progress = writable(JSON.parse(localStorage.getItem('collections') || '[]'));

progress.subscribe((value) => localStorage.setItem('collections', JSON.stringify(value)));