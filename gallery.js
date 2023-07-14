let galleryImgs = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "building.png"
]

const firstContainer = document.getElementById("swiperContainer1");
const secondContainer = document.getElementById("swiperContainer2");

galleryImgs.map((img, i) => {
    const swiperSlide = document.createElement("swiper-slide")

    const anchor = document.createElement("a")
    anchor.setAttribute("href", `images/gallery/${img}`)
    anchor.setAttribute("data-lightbox", "photos")

    const image = document.createElement("img")
    image.src = `images/gallery/${img}`
    
    anchor.appendChild(image)
    swiperSlide.appendChild(anchor)

    firstContainer.appendChild(swiperSlide);
}) 

galleryImgs.map((img, i) => {
    const swiperSlide = document.createElement("swiper-slide")


    const image = document.createElement("img")
    image.src = `images/gallery/${img}`
    image.className = "mini"

    swiperSlide.appendChild(image)

    secondContainer.appendChild(swiperSlide);

}) 