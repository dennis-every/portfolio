const menuBars = document.getElementById('menu-bars');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileLinks = document.getElementById('mobile-links');

const preventDefaultHandler = (e) => {
  e.preventDefault();
};

const openMenuHandler = () => {
  mobileMenu.classList.replace('d-none', 'd-flex');
  document.body.classList.add('stop-scrolling');
  document.body.addEventListener('touchmove', preventDefaultHandler);
};

function closeMenuHandler() {
  mobileMenu.classList.replace('d-flex', 'd-none');
  document.body.classList.remove('stop-scrolling');
  document.body.removeEventListener('touchmove', preventDefaultHandler);
}

menuBars.addEventListener('click', openMenuHandler);
closeMenuBtn.addEventListener('click', closeMenuHandler);
mobileLinks.addEventListener('click', closeMenuHandler);

const worksArray = [
  {
    title: 'Tonic',
    experiences: ['Canopy', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    url: 'images/work_1.jpg',
    alt: 'work_tonic_daily_personalized_reads',
    live: 'https://dennis-every.github.io/',
    source: 'https://github.com/dennis-every/portfolio',
  },
  {
    title: 'Multi-Post Stories',
    experiences: ['Canopy', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    url: 'images/work_2.jpg',
    alt: 'work_multi-post_stories_daily_personalized_reads',
    live: 'https://dennis-every.github.io/',
    source: 'https://github.com/dennis-every/portfolio',
  },
  {
    title: 'Tonic',
    experiences: ['Canopy', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    url: 'images/work_3.jpg',
    alt: 'work_tonic_daily_personalized_reads',
    live: 'https://dennis-every.github.io/',
    source: 'https://github.com/dennis-every/portfolio',
  },
  {
    title: 'Multi-Post Stories',
    experiences: ['Canopy', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    url: 'images/work_4.jpg',
    alt: 'work_multi-post_stories_daily_personalized_reads',
    live: 'https://dennis-every.github.io/',
    source: 'https://github.com/dennis-every/portfolio',
  },
];
console.log(worksArray);
