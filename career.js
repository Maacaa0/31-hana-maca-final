// const data = {
//   "positions": [
//     {
//       "name": "Kuchař",
//       "rank": "cetar",
//       "index": 0,
//       "description1": "She is the leader of the team.",
//       "description2": "She is brave and smart.",
//       "description3": "She likes to solve puzzles."
//     },
//     {
//       "name": "Spojař",
//       "rank": "desatnik",
//       "index": 1,
//       "description1": "He is the second in command.",
//       "description2": "He is strong and loyal.",
//       "description3": "He likes to shoot targets."
//     },
//     {
//       "name": "Právník",
//       "rank": "kapitan",
//       "index": 2,
//       "description1": "He is the newest member of the team.",
//       "description2": "He is fast and agile.",
//       "description3": "He likes to hack computers."
//     },
//       {
//       "name": "Provianťák",
//       "rank": "nadporucik",
//       "index": 3,
//       "description1": "She is the leader of the team.",
//       "description2": "She is brave and smart.",
//       "description3": "She likes to solve puzzles."
//     },
//     {
//       "name": "Řidič",
//       "rank": "rotny",
//       "index": 4,
//       "description1": "He is the second in command.",
//       "description2": "He is strong and loyal.",
//       "description3": "He likes to shoot targets."
//     },
//   ]
// };


// const BREAKPOINT_TABLET = 1000;
// const BREAKPOINT_MOBILE = 700;

// function handleScreenWidth() {
//   if (window.innerWidth < BREAKPOINT_MOBILE) {
//     swiperCareer.setAttribute("slides-per-view", "1");
//   } else if (window.innerWidth < BREAKPOINT_TABLET) {
//     swiperCareer.setAttribute("slides-per-view", "2");
//   } else {
//     swiperCareer.setAttribute("slides-per-view", "3");
//   }
// }

// window.addEventListener("resize", handleScreenWidth);


// const swiperCareer = document.getElementById("swiperCareer");

// let jobsContainer = document.querySelector(".mySwiper");   

// window.addEventListener("load", () => {

   

//     data.positions.map((job, jobsIndex) => {

//       const swiperSlide = document.createElement("swiper-slide");
//       swiperSlide.className = "career_swiperItem job";

//       const swiperItemHeader = document.createElement("div");
//       swiperItemHeader.className = "swiperItem_header";

//       const swiperItemPosition = document.createElement("p");
//       swiperItemPosition.className = "swiperItem_position";
//       swiperItemPosition.textContent = data.positions[jobsIndex].name;

//       const swiperItemRank = document.createElement("img");
//       swiperItemRank.className = "swiperItem_rank";
//       swiperItemRank.src = `images/hodnosti/${data.positions[jobsIndex].rank}.svg`;


//       const positionDescription = document.createElement("p");
//       positionDescription.className = "swiperItem_description";
//       positionDescription.textContent = `${data.positions[jobsIndex].description1}
//                                          ${data.positions[jobsIndex].description2}
//                                          ${data.positions[jobsIndex].description3}`

//       swiperItemHeader.appendChild(swiperItemPosition);
//       swiperItemHeader.appendChild(swiperItemRank);
//       swiperSlide.appendChild(swiperItemHeader);
//       swiperSlide.appendChild(positionDescription);

//       jobsContainer.appendChild(swiperSlide);

//     });
// });
