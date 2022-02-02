const chevron = document.querySelector('.chevron');
const navLinks = document.querySelector('.nav-links');

let navStatus = "desktop"

chevron.addEventListener('click', (e) => {
  gsap.fromTo('nav', { background: 'rgba(255,255,255, .6)'}, {background: 'rgba(255,255,255, .85)' })
  gsap.fromTo('.mobile', { display: 'none', height: '0', background: 'rgba(255,255,255, .6)' }, { display: 'flex', height: '156px', justifyContent: 'space-evenly', background: 'rgba(255,255,255, .85)' }, '<')
})
