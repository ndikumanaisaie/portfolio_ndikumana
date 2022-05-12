const humberger = document.getElementById('hamburger-icon');
humberger.addEventListener('click', () => {
  humberger.classList.toggle('open');
});

const myData = [
  {
    id: 1,
    card_image: '../images/Snapshoot-Portfolio.png',
    heading: 'Tonic',
    live_version: 'see live',
    source: 'see source',
    card_description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popup_description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the
    releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s,
    when an unknown printer took a galley of type veris lapoa todoe.`,
    technologies: ['html', 'css', 'javascript'],
    brands: ['conopy', 'Back End Dev', '2020'],
    technologies1: ['html', 'css', 'javascript', 'Ruby on rails', 'bootstrap', 'github'],
  },

  {
    id: 2,
    card_image: '../images/Snapshoot-Portfolio1.png',
    heading: 'Multi-Post Stories',
    live_version: 'see live',
    source: 'see source',
    card_description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    popup_description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the
    releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s,
    when an unknown printer took a galley of type veris lapoa todoe.`,
    technologies: ['html', 'css', 'javascript'],
    technologies1: ['html', 'css', 'javascript', 'Ruby on rails', 'bootstrap', 'github'],
  },

  {
    id: 3,
    card_image: '../images/Snapshoot-Portfolio2.png',
    heading: 'Facebook 360',
    live_version: 'see live',
    source: 'see source',
    card_description: `Exploring the future of media in Facebook's first Virtual Reality
     app; a place to discover and enjoy 360 photos and videos on Gear VR.`,
    popup_description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the
    releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s,
    when an unknown printer took a galley of type veris lapoa todoe.`,
    technologies: ['html', 'css', 'javascript'],
    technologies1: ['html', 'css', 'javascript', 'Ruby on rails', 'bootstrap', 'github'],
  },

  {
    id: 4,
    card_image: '../images/Snapshoot-Portfolio3.png',
    heading: 'Uber Navigation',
    live_version: 'see live',
    source: 'see source',
    card_description: `A smart assistant to make driving more safe, efficient, 
    and fun by unlocking your most expensive computer: your car..`,
    popup_description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the
    releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s,
    when an unknown printer took a galley of type veris lapoa todoe.`,
    technologies: ['html', 'css', 'javascript'],
    technologies1: ['html', 'css', 'javascript', 'Ruby on rails', 'bootstrap', 'github'],
  },
];

const modalDetails = document.createElement('div');
modalDetails.id = 'modal-details';
modalDetails.className = 'project-details';

function showDetails(projectIndex) {
  const projectsCode = `
  <div class="details-container">
    <div class="details-container-content">
    <div class="headc">
    <h1 class= "headtitle">${myData[projectIndex].name}</h1>
    <div class="works__card__subtitle flex">
              <p class="works__card__subtitle-1 c1">
              <b>${myData[projectIndex].place}</b>
              </p>
              <ul class="works__card__subtitle-ul flex">
                <li class="works__card__subtitle-li c2">
                ${myData[projectIndex].title}
                </li>
                <li class="works__card__subtitle-li c2"> 
                ${myData[projectIndex].year}
                </li>
              </ul>
            </div>
    <div class="closeDetails" id="closeDetails">&times;</div>
    </div>
      <img class="project-image" src="${myData[projectIndex].image.link}" alt="${myData[projectIndex].image.alt}" />
       <div class="s1"> 
      <p class="description">
        ${myData[projectIndex].description}
       </p>
        <div class="tech-and-buttons">
          <div class="card-languages">
            ${(function usedTech() {
    return myData[projectIndex].technologies
      .map((tech) => `<li class="language">${tech}</li>`)
      .join('');
  }())}
          </div>
          <div class="buttons">
            <a href="${
  myData[projectIndex].liveSource
}" class="btn green-button">
<div class ="it">See Live</div>
<div class="image"><img src="logos/Icon.png"></div>
 </a>
             <a href="${
  myData[projectIndex].sourceCode
}" class="btn green-button"><div class ="it">See source</div>
<div class="image"><img src="logos/Vector.png"></div>
 </a>
          </div>
          </div>
    </div>
  </div>`;

  modalDetails.innerHTML += projectsCode;
  document.body.appendChild(modalDetails);
  document.getElementById('closeDetails').addEventListener('click', () => {
    modalDetails.innerHTML = '';
    document.body.removeChild(modalDetails);
    document.getElementById('hero').style.filter = 'none';
  });
}

const portfolioDynamic = document.getElementById('work1');
const projectList = document.createElement('ul');
projectList.className = 'works__cards ul grid';
portfolioDynamic.appendChild(projectList);

let projectsCard = '';
for (let j = 0; j < myData.length; j += 1) {
  projectsCard += `
  <div class="card-work">
        <div class="card-image">
          <img src="./images/Snapshoot-Portfolio.png" alt="my portfolio">
        </div>
        <div class="left-block">
          <h2 class="h2">Tonic</h2>
          <div class="frame1">
            <p class="c">conopy</p>
            <img src="./images/Counter.png" alt="counter">
            <p class="p1">Back End Dev</p>
            <img src="./images/Counter.png" alt="counter">
            <p class="p1">2020</p>
          </div>
          <p class="primary1">
            A daily selection of privately personalized reads; 
            no accounts or sign-ups required.
          </p>
          <ul>
            <li class="html"><a href="#">html</a></li>
            <li class="css"><a href="#">css</a></li>
            <li class="javascript"><a href="#">javascript</a></li>
          </ul>
          <p class="action">See Project</p>
        </div>
      </div>`;
}
projectList.innerHTML = projectsCard;

const showButton = document.querySelectorAll('.details-btn');
showButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
    document.getElementById('hero').style.filter = 'blur(1.9rem)';
  });
});