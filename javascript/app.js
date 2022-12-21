const menuBars = document.getElementById('menu-bars');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileLinks = document.getElementById('mobile-links');
const workModal = document.getElementById('work-modal');
const closeWorkModalBtn = document.getElementById('close-modal-btn');

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
    id: 0,
    title: 'Tonic',
    experiences: ['Canopy', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    urlMobile: '/images/work_1.jpg',
    urlDesktop: '/images/work_1_lg.png',
    alt: 'work_tonic_daily_personalized_reads',
    live: 'https://dennis-every.github.io/',
    source: 'https://github.com/dennis-every/portfolio',
  },
  {
    id: 1,
    title: 'Multi-Post Stories',
    experiences: ['Canopy', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    urlMobile: 'images/work_2.jpg',
    urlDesktop: 'images/work_2_lg.png',
    alt: 'work_multi-post_stories_daily_personalized_reads',
    live: 'https://dennis-every.github.io/',
    source: 'https://github.com/dennis-every/portfolio',
  },
  {
    id: 2,
    title: 'Tonic',
    experiences: ['Canopy', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    urlMobile: 'images/work_3.jpg',
    urlDesktop: 'images/work_3_lg.png',
    alt: 'work_tonic_daily_personalized_reads',
    live: 'https://dennis-every.github.io/',
    source: 'https://github.com/dennis-every/portfolio',
  },
  {
    id: 3,
    title: 'Multi-Post Stories',
    experiences: ['Canopy', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    urlMobile: 'images/work_4.jpg',
    urlDesktop: 'images/work_4_lg.png',
    alt: 'work_multi-post_stories_daily_personalized_reads',
    live: 'https://dennis-every.github.io/',
    source: 'https://github.com/dennis-every/portfolio',
  },
];

const worksLoadHandler = () => {
  const works = document.getElementById('works');
  worksArray.forEach((work) => {
    const workCard = document.createElement('li');
    workCard.classList.add('work-card');
    workCard.innerHTML = `
      <article class='work-card__article'>
        <div class='work-card__header'>
          <picture>
            <source srcset=${work.urlDesktop} media='(min-width: 768px)' />
            <img
              src=${work.urlMobile}
              alt=${work.alt}
            />
          </picture>
        </div>
        <div class='work-card__body'>
          <div class='elements'>
            <header class='work-card__title'>${work.title}</header>
            <div>
              <ul class='work-card__experience'>
                <li>${work.experiences[0]}</li>
                <li>&#x2022;</li>
                <li>${work.experiences[1]}</li>
                <li>&#x2022;</li>
                <li>${work.experiences[2]}</li>
              </ul>
            </div>
            <p class='work-card__description'>${work.description}</p>
            <div>
              <ul class='work-card__technologies'>
                <li>${work.technologies[0]}</li>
                <li>${work.technologies[1]}</li>
                <li>${work.technologies[2]}</li>
              </ul>
            </div>
            <div class='btn-container'>
              <button type='button' class='btn'>
                <a href=${work.live}>See Project</a>
              </button>
            </div>
          </div>
        </div>
      </article>`;
    works.appendChild(workCard);
  });
};

const cardClickHandler = (id) => {
  workModal.classList.replace('d-none', 'd-flex');
  document.body.classList.add('stop-scrolling');
  document.body.addEventListener('touchmove', preventDefaultHandler);
  const workCard = document.createElement('div');
  workCard.classList.add('work-card');
  workCard.classList.add('bg-white');
  workCard.innerHTML = `
    <article class='work-card__article'>
      <div class='work-card__header'>
        <picture>
          <source srcset=${worksArray[id].urlDesktop} media='(min-width: 768px)' />
          <img
            src=${worksArray[id].urlMobile}
            alt=${worksArray[id].alt}
          />
        </picture>
      </div>
      <div class='work-card__body'>
        <div class='elements'>
          <header class='work-card__title'>${worksArray[id].title}</header>
          <div>
            <ul class='work-card__experience'>
              <li>${worksArray[id].experiences[0]}</li>
              <li>&#x2022;</li>
              <li>${worksArray[id].experiences[1]}</li>
              <li>&#x2022;</li>
              <li>${worksArray[id].experiences[2]}</li>
            </ul>
          </div>
          <p class='work-card__description'>${worksArray[1].description}</p>
          <div>
            <ul class='work-card__technologies'>
              <li>${worksArray[id].technologies[0]}</li>
              <li>${worksArray[id].technologies[1]}</li>
              <li>${worksArray[id].technologies[2]}</li>
            </ul>
          </div>
          <div class='btn-container'>
            <button type='button' class='btn'>
              <a href=${worksArray[id].live}>See Project</a>
            </button>
          </div>
        </div>
      </div>
    </article>
    <div class="d-flex justify-content-center p-2">
      <div id="black-bar"></div>
    </div>`;
  workModal.appendChild(workCard);
};

const closeWorkModalHandler = () => {
  workModal.classList.replace('d-flex', 'd-none');
  document.body.classList.remove('stop-scrolling');
  document.body.removeEventListener('touchmove', preventDefaultHandler);
};

closeWorkModalBtn.addEventListener('click', closeWorkModalHandler);

const worksActivateLinkHandler = () => {
  const workCards = document.querySelectorAll('.work-card');
  workCards.forEach((card, index) => {
    card.addEventListener('click', () => cardClickHandler(index));
  });
};

window.onload = () => {
  worksLoadHandler();
  worksActivateLinkHandler();
};
