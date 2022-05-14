const humberger = document.getElementById('hamburger-icon');
humberger.addEventListener('click', () => {
  humberger.classList.toggle('open');
});
const projects = [
  {
    id: 0,
    place: 'CANOPY',
    title: 'Back End Dev',
    year: '2015',
    name: 'Tonic',
    name1: 'Tonic',
    mobile_description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    card_description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'javascript'],
    technologies1: ['html', 'css', 'javascript', 'Ruby', 'github', 'Boostrap'],
    image: {
      link: 'Snapshoot.svg',
      alt: 'Project Screenshot',
    },
    image1: {
      link: 'card-work.svg',
      alt: 'card_wowrk',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    name1: 'Tonic',
    place: 'Facebook',
    title: 'Full Stack Dev',
    year: '2015',
    mobile_description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    card_description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'javascript'],
    technologies1: ['html', 'css', 'javascript', 'Ruby', 'github', 'Boostrap'],
    image: {
      link: 'Snapshoot1.svg',
      alt: 'Multi-Post Stories screenshot',
    },
    image1: {
      link: 'card-work1.svg',
      alt: 'card_wowrk',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 2,
    name: 'Facebook 360',
    name1: 'Tonic',
    place: 'Facebook',
    title: 'Full Stack Dev',
    year: '2015',
    mobile_description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    card_description: 'Exploring the future of media in Facebook`s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'javascript'],
    technologies1: ['html', 'css', 'javascript', 'Ruby', 'github', 'Boostrap'],
    image: {
      link: 'Snapshoot2.svg',
      alt: 'Facebook 360screenshot',
    },
    image1: {
      link: 'card-work3.svg',
      alt: 'card_wowrk',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 3,
    name: 'Uber',
    name1: 'Tonic',
    place: 'Uber',
    title: 'Lead Developer',
    year: '2018',
    mobile_description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    card_description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'javascript'],
    technologies1: ['html', 'css', 'javascript', 'Ruby', 'github', 'Boostrap'],
    image: {
      link: 'Snapshoot3.svg',
      alt: 'Uber Navigation screenshot',
    },
    image1: {
      link: 'card-work4.svg',
      alt: 'card_wowrk',
    },
    liveSource: '#',
    sourceCode: '#',
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
    <h1 class= "headtitle">${projects[projectIndex].name}</h1>
    <div class="frame1">
            <p>${projects[projectIndex].place}</p>
            <img src="Counter.png" alt="counter" />
            <p class="p1">${projects[projectIndex].title}</p>
            <img src="Counter.png" alt="counter" />
            <p class="p1">${projects[projectIndex].year}</p>
          </div>
    <div class="closeDetails" id="closeDetails">&times;</div>
    </div>
      <img class="project-image" src="${projects[projectIndex].image.link}" alt="${projects[projectIndex].image.alt}" />
       <div class="s1">
      <p class="description">
        ${projects[projectIndex].description}
       </p>
        <div class="tech-and-buttons">
          <div class="card-languages">
          <ul>
            ${(function usedTech() {
    return projects[projectIndex].technologies1
      .map((tech) => `<li class="language">${tech}</li>`)
      .join('');
  }())}    </ul>
          </div>
          <div class="buttons">
            <a href="${
  projects[projectIndex].liveSource
}" class="btn green-button">
<div class ="it">See Live</div>
<div class="image"><img src="arrow.svg"></div>
 </a>
             <a href="${
  projects[projectIndex].sourceCode
}" class="btn green-button"><div class ="it">See source</div>
<div class="image"><img src="github.svg"></div>
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
  });
}
const portfolioDynamic = document.getElementById('work1');
const projectList = document.createElement('ul');
projectList.className = 'work1';
portfolioDynamic.appendChild(projectList);
/*   cards */
let projectsCard = '';
for (let j = 0; j < projects.length; j += 1) {
  projectsCard += `
  <div class="card-work card-work${projects[j].id}">
        <div class="card-image">
          <img src="${projects[j].image.link}" alt="my portfolio">
        </div>
        <div class="left-block">
          <h2 class="h2">${projects[j].name}</h2>
          <div class="frame1">
            <p class="c">${projects[j].place}</p>
            <img src="Counter.png" alt="counter">
            <p class="p1">${projects[j].title}</p>
            <img src="Counter.png" alt="counter">
            <p class="p1">${projects[j].year}</p>
          </div>
          <p class="primary1">
            ${projects[j].card_description}
          </p>
          <ul>
          ${projects[j].technologies.map((lang) => `<li>${lang}</li>`).join('')}
          </ul>
          <p class="action details-btn" data-id="${
  projects[j].id
}">See Project</p>
        </div>
      </div>`;
}
projectList.innerHTML = projectsCard;
const showButton = document.querySelectorAll('.details-btn');
showButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
  });
});

/* mobile */
const portfolioDynamic1 = document.getElementById('work');
const projectList1 = document.createElement('ul');
projectList1.className = 'work';
portfolioDynamic1.appendChild(projectList1);
let projectsCard1 = '';
for (let j = 0; j < projects.length; j += 1) {
  projectsCard1 += `
<div class="card-work">
        <div class="card-image">
          <img src="${projects[j].image1.link}" alt="my portfolio">
        </div>
        <div class="left-block">
          <h2 class="h2">${projects[j].name1}</h2>
          <div class="frame1">
            <p class="c">${projects[j].place}</p>
            <img src="./images/Counter.png" alt="counter">
            <p class="p1">${projects[j].title}</p>
            <img src="./images/Counter.png" alt="counter">
            <p class="p1">${projects[j].year}</p>
          </div>
          <p class="primary1">
            ${projects[j].mobile_description}
          </p>
          <ul>
          ${projects[j].technologies.map((lang) => `<li>${lang}</li>`).join('')}
          </ul>
          <p class="action details-btn" data-id="${
  projects[j].id
}">See Project</p>
        </div>
      </div>
`;
}
projectList1.innerHTML = projectsCard1;

function showDetails1(projectIndex) {
  const projectsCode = `
  <div class="details-container">
    <div class="details-container-content">
    <div class="headc">
    <h1 class= "headtitle">${projects[projectIndex].name}</h1>
    <div class="frame1">
            <p>${projects[projectIndex].place}</p>
            <img src="Counter.png" alt="counter" />
            <p class="p1">${projects[projectIndex].title}</p>
            <img src="Counter.png" alt="counter" />
            <p class="p1">${projects[projectIndex].year}</p>
    </div>
    <div class="closeDetails" id="closeDetails1">&times;</div>
    </div>
      <img class="project-image" src="${projects[projectIndex].image.link}" alt="${projects[projectIndex].image.alt}" />
       <div class="s1">
      <p class="description">
        ${projects[projectIndex].description}
       </p>
        <div class="tech-and-buttons">
          <div class="card-languages">
          <ul>
            ${(function usedTech() {
    return projects[projectIndex].technologies1
      .map((tech) => `<li class="language">${tech}</li>`)
      .join('');
  }())}    </ul>
          </div>
          <div class="buttons">
            <a href="${
  projects[projectIndex].liveSource
}" class="btn green-button">
<div class ="it">See Live</div>
<div class="image"><img src="arrow.svg"></div>
 </a>
             <a href="${
  projects[projectIndex].sourceCode
}" class="btn green-button"><div class ="it">See source</div>
<div class="image"><img src="github.svg"></div>
 </a>
          </div>
          </div>
    </div>
  </div>`;
  modalDetails.innerHTML += projectsCode;
  document.body.appendChild(modalDetails);
  document.getElementById('closeDetails1').addEventListener('click', () => {
    modalDetails.innerHTML = '';
    document.body.removeChild(modalDetails);
  });
}

const showButton1 = document.querySelectorAll('.details-btn');
showButton1.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails1(event.target.dataset.id);
  });
});

let person = {};

document.getElementById('form').addEventListener('change', (e) => {
  const nameValue = document.getElementById('name').value;
  const emailValue = document.getElementById('email').value;
  const messageValue = document.getElementById('message').value;

  person = {
    name: nameValue,
    email: emailValue,
    message: messageValue,
  };

  const emailError = document.getElementById('error-msg');
  const validate = emailValue.toLowerCase();
  if (emailValue == validate) {
    emailError.textContent = '';
    localStorage.setItem('person', JSON.stringify(person));
  } else {
    e.preventDefault();
    emailError.textContent = '!Email should be typed in lowercase';
  }
});

const nameField = document.getElementById('name');
const emailField = document.getElementById('mail');
const messageField = document.getElementById('message');

if (localStorage.getItem('person') !== null) {
  const retrievedPerson = JSON.parse(localStorage.getItem('peerson'));
  nameField.value = retrievedPerson.name;
  emailField.value = retrievedPerson.email;
  messageField.value = retrievedPerson.message;
}
