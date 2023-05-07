const data = {
  "positions": [
    {
      "name": "Kuchař",
      "rank": "cetar",
      "index": 0,
      "description1": "She is the leader of the team.",
      "description2": "She is brave and smart.",
      "description3": "She likes to solve puzzles."
    },
    {
      "name": "Spojař",
      "rank": "desatnik",
      "index": 1,
      "description1": "He is the second in command.",
      "description2": "He is strong and loyal.",
      "description3": "He likes to shoot targets."
    },
    {
      "name": "Právník",
      "rank": "kapitan",
      "index": 2,
      "description1": "He is the newest member of the team.",
      "description2": "He is fast and agile.",
      "description3": "He likes to hack computers."
    },
      {
      "name": "Provianťák",
      "rank": "nadporucik",
      "index": 3,
      "description1": "She is the leader of the team.",
      "description2": "She is brave and smart.",
      "description3": "She likes to solve puzzles."
    },
    {
      "name": "Řidič",
      "rank": "rotny",
      "index": 4,
      "description1": "He is the second in command.",
      "description2": "He is strong and loyal.",
      "description3": "He likes to shoot targets."
    },
  ]
}

const BREAKPOINT_TABLET = 1000;
const BREAKPOINT_MOBILE = 700;

const swiperCareer = document.getElementById("swiperCareer");

let jobs = document.querySelectorAll(".job");   

window.addEventListener("load", () => {

    if (window.innerWidth < BREAKPOINT_TABLET) {
      swiperCareer.setAttribute("slides-per-view", "2");
    } 
    
    if (window.innerWidth < BREAKPOINT_MOBILE) {
      swiperCareer.setAttribute("slides-per-view", "1");
    }

    jobs.forEach((job, jobsIndex) => {

    let position = job.querySelector(".swiperItem_position");
    let rank = job.querySelector(".swiperItem_rank");
    let description1 = job.querySelector(".swiperItem_description1");
    let description2 = job.querySelector(".swiperItem_description2");
    let description3 = job.querySelector(".swiperItem_description3");

    position.textContent = data.positions[jobsIndex].name;
    rank.src = `images\\hodnosti\\${data.positions[jobsIndex].rank}.svg`;
    description1.textContent = data.positions[jobsIndex].description1;
    description2.textContent = data.positions[jobsIndex].description2;
    description3.textContent = data.positions[jobsIndex].description3;
    });
});

