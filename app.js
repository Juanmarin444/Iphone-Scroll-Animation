// First Page: Pin and pinSpacing

const tlIntro =  gsap.timeline({
  scrollTrigger: {
    trigger: '.first-page',
    pin: true,
    pinSpacing: false,
    markers: {
      startColor: 'orange',
      endColor: 'orange'
    },
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
      startColor: 'red',
      endColor: 'red'
    },
    scrub: true,
    start: '-15%',
    end: '65%'
  }
})

tlHRemove.to('.highlight', { color: 'rgba(255,255,255, .4)', stagger: 1 });

// Third Page

const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    start: '-30%',
    end: '10%',
    scrub: true,
    markers: {
      startColor: 'green',
      endColor: 'green'
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
      startColor: 'purple',
      endColor: 'purple'
    }
  }
})
