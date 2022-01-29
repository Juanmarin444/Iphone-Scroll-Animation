// First Page: Pin and pinSpacing

const tlIntro =  gsap.timeline({
  scrollTrigger: {
    trigger: '.first-page',
    pin: true,
    pinSpacing: false,
    // markers: {
    //   startColor: 'mediumorchid',
    //   endColor: 'mediumorchid'
    // },
    start: '0%',
    end: '100%',
  }
})

// Second Page: Fade in and out Highlight
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    markers: {
      startColor: 'dodgerblue',
      endColor: 'dodgerblue'
    },
    scrub: true,
    start: '-40%',
    end: '40%'
  }
})

tlH.fromTo('.highlight', { color: 'rgba(255,255,255, 0.4)' },{ color: 'rgba(255,255,255, 1)', stagger: 1 });

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    markers: {
      startColor: 'firebrick',
      endColor: 'firebrick'
    },
    scrub: true,
    start: '-15%',
    end: '65%'
  }
})

tlHRemove.to('.highlight', { color: 'rgba(255,255,255, .4)', stagger: 1 });

// Third Page: Phone size fade in

const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    start: '-30%',
    end: '10%',
    scrub: true,
    markers: {
      startColor: 'lawngreen',
      endColor: 'lawngreen'
    }
  }
})

tlSplit.fromTo('.large-phone', { x: '40%' }, {x: '20%'});
tlSplit.fromTo('.small-phone', { x: '-40%' }, { x: '-20%'}, '<');
tlSplit.fromTo('.product-text-left', {x: 50, opacity: 0}, {x: 0, opacity: 1}, '<')
tlSplit.fromTo('.product-text-right', {x: -50, opacity: 0}, {x: 0, opacity: 1}, '<')

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    start: '0%',
    end: '100%',
    pin: true,
    pinSpacing: false,
    scrub: true,
    markers: {
      startColor: 'blueviolet',
      endColor: 'blueviolet'
    }
  }
})

// Fourth Page: Carolsel
const swatches = document.querySelectorAll('.swatches img');
const gallery = document.querySelector('.phone-gallery');
const slides = document.querySelectorAll('.phone-gallery-container');
const nav = document.querySelector('nav');

let currentSwatch = 'blue';
let topIndex = 2;
let navZindex = 10;

swatches.forEach((swatch, index) => {
  const coord = slides[index].getBoundingClientRect().left;

  swatch.addEventListener('click', (e) => {
    let swatchName = e.target.getAttribute('swatch');
    let closeUpImg = document.querySelector('.' + swatchName);
    // Check Current Swatch
    if (currentSwatch === swatchName) return;

    gsap.set(closeUpImg, {zIndex: topIndex})
    gsap.fromTo(closeUpImg, {opacity:0}, {opacity: 1, duration: 1})

    // Gallery Slide
    gsap.to(gallery, {x: -coord, duration: 1, ease: "slow(0.1, 0.4, false)"})

    // Raise navBar z-index
    gsap.set('nav', {zIndex: navZindex})

    topIndex++;
    navZindex++;
    currentSwatch = swatchName;
  });
});

// Fifth Page: Scroll video
const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: '.fifth-page',
    start: '0%',
    end: '150%',
    scrub: true,
    pin: true,
    markers: {
      startColor: 'steelblue',
      endColor: 'steelblue'
    }
  }
})

tlVideo.fromTo('.product-video', { currentTime: '0' }, { currentTime: '3.007', duration: 1 })
tlVideo.fromTo('.product-info-container h3', { opacity: 0 }, { opacity: 1, stagger: .25, duration: .5 }, '<')

// Sixth Page: parallax
const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: '.sixth-page',
    start: '-25%',
    end: '50%',
    scrub: true
  }
});

tlParallax.fromTo('.photo-description', { y: 0 }, { y: -40 })
tlParallax.fromTo('.portrait-container', { y: 0 }, { y: -40 }, '<')
tlParallax.fromTo('.phone-video', { y: 0, scale: .8 }, { y: -100, scale: 1 }, '<')








//
