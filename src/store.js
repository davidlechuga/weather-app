import { writable } from 'svelte/store'

export const title = writable('...')

export const currentWeather = writable({
    id: 0,
    temp: '-',
    humidity: '',
    windSpeed: ''
})
