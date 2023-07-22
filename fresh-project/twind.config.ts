import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        'venice-blue': {
        '50': '#eff9ff',
        '100': '#def2ff',
        '200': '#b5e9ff',
        '300': '#74d7ff',
        '400': '#2ac4ff',
        '500': '#00adf9',
        '600': '#008bd5',
        '700': '#006dad',
        '800': '#005d8e',
        '900': '#05507a',
        '950': '#03314e',
        },
      }
    }
  }
} as Options;
