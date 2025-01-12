'use strict';

let state = {
    index: 0,
    play: false
};

const photos = [
    {
        src: '/1.jpg',
        legend: 'Freres pandas'
    },
    {
        src: '2.jpg',
        legend: 'Yoga on the top'
    },
    {
        src: '3.jpg',
        legend: 'Coucher de soleil'
    },
    {
        src: '4.jpg',
        legend: 'Ciel etoile'
    },
    {
        src: '5.jpg',
        legend: 'Gouter'
    },
    {
        src: '6.jpg',
        legend: 'Tiramisu'
    }
]

function toolbarToggle() {
    document.querySelector('.toolbar ul').classList.toggle('hide');
    document.querySelector('#toolbar-toggle i').classList.toggle('fa-rotate-90');
}

function refreshSlider() {
    document.querySelector('#slider img').src = `images/${photos[state.index].src}`;
    document.querySelector('#slider img').alt = `images/${photos[state.index].legend}`;
    document.querySelector('#slider figcaption').textContent = photos[state.index].legend;
}

function nextPhoto() {
    state.index += 1;
    if (state.index === photos.length) {
        state.index = 0;
    }
    refreshSlider();
}

function prevPhoto() {
    state.index -= 1;
    if (state.index < 0) {
        state.index = photos.length - 1;
    }
    refreshSlider();
}

function randomPhoto() {
    const newIndex = getRandomInteger();
    if (newIndex != state.index) {
        state.index = newIndex;
    } else {
        randomPhoto();
    }
    refreshSlider();
}

function play() {
    state.play = setInterval(nextPhoto, 1000);
}

function stopPlay() {
    clearInterval(state.play);
    state.play = false;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#toolbar-toggle').addEventListener('click', function() {
        refreshSlider();
        toolbarToggle();
    });
    document.querySelector('#slider-next').addEventListener('click', nextPhoto);
    document.querySelector('#slider-previous').addEventListener('click', prevPhoto);
    document.querySelector('#slider-random').addEventListener('click', randomPhoto);
    document.querySelector('#slider-toggle').addEventListener('click', function() {

        if (state.play) {
            stopPlay();
            document.querySelector('#slider-toggle i').classList.remove('fa-pause');
            document.querySelector('#slider-toggle i').classList.add('fa-play');
            this.title = 'Démarrer le carrousel';
        } else {
            play();
            document.querySelector('#slider-toggle i').classList.remove('fa-play');
            document.querySelector('#slider-toggle i').classList.add('fa-pause');
            this.title = 'Arrêter le carrousel';
        }
    })
})
