import { SlideDeck } from './slidedeck.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([18.3333, -64.8167], 12);

// ## The Base Tile Layer
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamluaGVuZ2MiLCJhIjoiY21mZWNtczV2MDVlNjJqb2xjYzIzaG1vYyJ9.3RSRjdENKBwjuf8_hhAqUA', {
    maxZoom: 20,
    zoomOffset: -1,
    tileSize: 512,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
window.map = map;


// ## Interface Elements
const container = document.querySelector('.slide-section');
const slides = document.querySelectorAll('.slide');

const slideOptions = {
  'title-slide': {
    style: (feature) => {
      return {
        color: 'blue',
        weight: 0.5,
        opacity:0.5,
        fillColor: 'blue',
        fillOpacity: 0.5,
      };
    },
  },
  'second-slide': {
    style: (feature) => {
      return {
        color: 'blue',
        weight: 0.5,
        opacity:0.5,
        fillColor: 'blue',
        fillOpacity: 0.5,
      };
    },
  },
  'third-slide': {
    style: (feature) => {
      return {
        color: 'blue',
        weight: 0.5,
        opacity:0.5,
        fillColor: 'blue',
        fillOpacity: 0.5,
      };
    },
  },
};

// ## The SlideDeck object
const deck = new SlideDeck(container, slides, map, slideOptions);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
