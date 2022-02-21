// Fourth Page: Carolsel
const swatches = document.querySelectorAll('.swatches img');
const gallery = document.querySelector('.phone-gallery');
const slides = document.querySelectorAll('.phone-gallery-container');
const nav = document.querySelector('nav');

let isMobile = window.innerWidth >= 834 ? false : true;

let currentSwatch = 'blue';
let topIndex = 2;
let navZindex = 10;

swatches.forEach((swatch, index) => {
  let currentWindowWidth = window.innerWidth;
  let coord = slides[index].getBoundingClientRect().left;
  let mobileToDesk = false;
  let deskToMobile = false;

  // Immediately updates the current slide on window resize.
  window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;

    if(currentWindowWidth !==  windowWidth && isMobile === false) {
      if (currentSwatch === 'blue' && index === 0) {
        let offset = (windowWidth - currentWindowWidth) * 0;
        gsap.to(gallery, {x: -(coord + offset), duration: .01});
      }
      if (currentSwatch === 'silver' && index === 1) {
        let offset = (windowWidth - currentWindowWidth) * .5;
        gsap.to(gallery, {x: -(coord + offset), duration: .01});
      }
      if (currentSwatch === 'gold' && index === 2) {
        let offset = (windowWidth - currentWindowWidth) * 1;
        gsap.to(gallery, {x: -(coord + offset), duration: .01});
      }
      if (currentSwatch === 'graphite' && index === 3) {
        let offset = (windowWidth - currentWindowWidth) * 1.5;
        gsap.to(gallery, {x: -(coord + offset), duration: .01});
      }
    } else if(currentWindowWidth !==  windowWidth && isMobile) {
      if (currentSwatch === 'blue' && index === 0) {
        let offset = (windowWidth - currentWindowWidth) * 0;
        gsap.to(gallery, {x: -(coord + offset), duration: .01});
      }
      if (currentSwatch === 'silver' && index === 1) {
        let offset = (windowWidth - currentWindowWidth) * 1;
        gsap.to(gallery, {x: -(coord + offset), duration: .01});
      }
      if (currentSwatch === 'gold' && index === 2) {
        let offset = (windowWidth - currentWindowWidth) * 2;
        gsap.to(gallery, {x: -(coord + offset), duration: .01});
      }
      if (currentSwatch === 'graphite' && index === 3) {
        let offset = (windowWidth - currentWindowWidth) * 3;
        gsap.to(gallery, {x: -(coord + offset), duration: .01});
      }
    }

    // Updates the current slide on window resize while going from mobile to desktop
    if(windowWidth > 834 && currentWindowWidth <= 834) {
      isMobile = false;
      mobileToDesk = true;
      deskToMobile = false;
      currentWindowWidth = windowWidth;
      if (index === 0) {
        coord = 0;
      }
      if (index === 1) {
        coord = (windowWidth - 17) * .5;
      }
      if (index === 2) {
        coord = (windowWidth - 17) * 1;
      }
      if (index === 3) {
        coord = (windowWidth - 17) * 1.5;
      }
    }
    // Updates the current slide on window resize while going from desktop to mobile
    if (windowWidth <= 834 && currentWindowWidth > 834) {
      isMobile = true;
      deskToMobile = true;
      mobileToDesk = false;
      currentWindowWidth = windowWidth;
      if (index === 0) {
        coord = 0;
      }
      if (index === 1) {
        coord = windowWidth - 17;
      }
      if (index === 2) {
        coord = (windowWidth - 17) * 2;
      }
      if (index === 3) {
        coord = (windowWidth - 17) * 3;
      }
    }
  })

  swatch.addEventListener('click', (e) => {
    let swatchName = e.target.getAttribute('swatch');
    let closeUpImg = document.querySelector('.' + swatchName);

    // Offsetting coord onClick when window has been resized.
    let coordOffset = 0;
    let windowWidth = window.innerWidth;
    if(currentWindowWidth !==  windowWidth && isMobile === false) {
      if (index === 0) {
        coordOffset = (windowWidth - currentWindowWidth) * 0;
      }
      if (index === 1) {
        coordOffset = (windowWidth - currentWindowWidth) * .5;
      }
      if (index === 2) {
        coordOffset = (windowWidth - currentWindowWidth) * 1;
      }
      if (index === 3) {
        coordOffset = (windowWidth - currentWindowWidth) * 1.5;
      }
    } else if(currentWindowWidth !==  windowWidth && isMobile) {
      if (index === 0) {
        coordOffset = (windowWidth - currentWindowWidth) * 0;
      }
      if (index === 1) {
        coordOffset = (windowWidth - currentWindowWidth) * 1;
      }
      if (index === 2) {
        coordOffset = (windowWidth - currentWindowWidth) * 2;
      }
      if (index === 3) {
        coordOffset = (windowWidth - currentWindowWidth) * 3;
      }
    }

    // Check Current Swatch
    if (currentSwatch === swatchName) return;
    gsap.set(closeUpImg, {zIndex: topIndex});
    gsap.fromTo(closeUpImg, {opacity:0}, {opacity: 1, duration: 1});

    // Gallery Slide
    gsap.to(gallery, {x: -(coord + coordOffset), duration: 1, ease: "slow(0.1, 0.4, false)"});

    // Raise navbar & mobile navbar cover z-index
    gsap.set('nav', {zIndex: navZindex});
    gsap.set('.cover', {zIndex: navZindex});

    topIndex++;
    navZindex++;
    currentSwatch = swatchName;
  });
});



































// Mobile NavBar
const chevron = document.querySelector('.chevron');
let navStatus = "closed"
const mNavTl = gsap.timeline({ defaults: { duration: 0.25, ease: "power4.out" }})
chevron.addEventListener('click', (e) => {
  if (navStatus === "opened") {
    mNavTl.fromTo('.cover', { opacity: .4 }, { opacity: 0 });
    mNavTl.fromTo('.mobile a', { y: -10, opacity: 1 }, { y: -40, opacity: 0, stagger: .1, duration: .50, ease: "power2.out" }, '<');

    mNavTl.set('.cover', {display: 'none'});

    mNavTl.fromTo('nav', { background: 'rgba(250,250,250, .85)', 'borderBottom': 'none' }, { background: 'rgba(250,250,250, .6)', 'borderBottom': 'solid rgb(193, 193, 193) 1px' }, '<');

    mNavTl.fromTo('.mobile', { display: 'flex', height: '156px', justifyContent: 'space-evenly' }, { display: 'none', height: '0' }, '<');
    mNavTl.fromTo('.mobile', { background: 'rgba(250,250,250, .85)' }, { background: 'rgba(255,255,255, .6)', ease: "elastic.out(2, 0.5)" }, '<')

    navStatus = "closed"
  } else if (navStatus === "closed") {


    mNavTl.fromTo('nav', { background: 'rgba(250,250,250, .6)', 'borderBottom': 'solid rgb(193, 193, 193) 1px' }, { background: 'rgba(250,250,250, .85)', 'borderBottom': 'none' });

    mNavTl.fromTo('.mobile', {
      display: 'none', height: '0', background: 'rgba(250,250,250, .6)'
    }, {
      display: 'flex', height: '156px', justifyContent: 'space-evenly', background: 'rgba(250,250,250, .85)'
    }, '<');

    mNavTl.fromTo('.cover', { opacity: 0 }, { opacity: .4 });

    mNavTl.fromTo('.mobile a', {y: -40, opacity: 0}, {y: -10, opacity: 1, stagger: .1, duration: .50, ease: "power2.out"}, '<');

    gsap.set('.cover', {display: 'block'});
    navStatus = "opened"
  }
})
