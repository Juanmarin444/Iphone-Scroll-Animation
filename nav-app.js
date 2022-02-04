const chevron = document.querySelector('.chevron');

let navStatus = "closed"

const mNavTl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" }})

chevron.addEventListener('click', (e) => {
  if (navStatus === "opened") {

    mNavTl.fromTo('.cover', { opacity: .4 }, { opacity: 0 });
    mNavTl.fromTo('.mobile a', {y: -10, opacity: 1}, {y: -40, opacity: 0, stagger: .1, duration: .50, ease: "power2.out"}, '<');


    mNavTl.fromTo('nav', { background: 'rgba(255,255,255, .85)'}, {background: 'rgba(255,255,255, .6)' });

    mNavTl.fromTo('.mobile', {
      display: 'flex', height: '156px', justifyContent: 'space-evenly', background: 'rgba(255,255,255, .85)'
    }, {
      display: 'none', height: '0', background: 'rgba(255,255,255, .6)'
    }, '<');


    navStatus = "closed"
  } else if (navStatus === "closed") {


    mNavTl.fromTo('nav', { background: 'rgba(255,255,255, .6)'}, {background: 'rgba(255,255,255, .85)' });

    mNavTl.fromTo('.mobile', {
      display: 'none', height: '0', background: 'rgba(255,255,255, .6)'
    }, {
      display: 'flex', height: '156px', justifyContent: 'space-evenly', background: 'rgba(255,255,255, .85)'
    }, '<');

    mNavTl.fromTo('.cover', { opacity: 0 }, { opacity: .4 });

    mNavTl.fromTo('.mobile a', {y: -40, opacity: 0}, {y: -10, opacity: 1, stagger: .1, duration: .50, ease: "power2.out"}, '<');

    navStatus = "opened"
  }
})
