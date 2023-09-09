const scrollBtn = document.getElementById("scrollBtn");
const menuDescp = document.getElementById("menuDescp");

let displayWidth = window.innerWidth;

document.addEventListener("DOMContentLoaded", setMultiplier);

function setMultiplier() {
  document.documentElement.style.setProperty("--multiplier", displayWidth / 1000);
}

// scroll to display "scroll to top btn" & sticky menu 
const scrollContainer = () => {
    return document.documentElement || document.body;
  };
  
document.addEventListener("scroll", () => {
  if (window.innerWidth > 1000) {
      if (window.scrollY < 100) {
      menu.classList.remove("sticky-menu");
      menuDescp.style.display = "none";
  } else {
      menu.classList.add("sticky-menu");
      menuDescp.style.display = "flex";
      } 
  }
    if (scrollContainer().scrollTop > 900) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
  });

// underlining menu items on scroll

const menu_li_list = document.querySelectorAll(".menu_li");

const scrollPositions = {
  about: document.querySelector("#about").offsetTop,
  history: document.querySelector("#history").offsetTop,
  career: document.querySelector("#career").offsetTop,
  gallery: document.querySelector("#gallery").offsetTop,
  contact: document.querySelector("#footer").offsetTop,
};

menu_li_list.forEach((li) => {
  li.addEventListener("click", () => {
    li.style.transition = "none";
    menu_li_list.forEach((li) => {
      li.classList.remove("menu-transition");
    });
  });
});

function showUnderlineOnScroll() {
  const scrollTop = scrollContainer().scrollTop;
  const windowHeight = window.innerHeight;

  menu_li_list.forEach((li) => {
    li.classList.remove("underline");
    li.classList.add("menu-transition");
  });

  if (scrollTop < scrollPositions.about - windowHeight / 2) {
    // You're at the top of the page
  } else if (scrollTop < scrollPositions.history - windowHeight / 2) {
    menu_li_list[0].classList.add("underline"); // About
  } else if (scrollTop < scrollPositions.career - windowHeight / 2) {
    menu_li_list[1].classList.add("underline"); // History
  } else if (scrollTop < scrollPositions.gallery - windowHeight / 2) {
    menu_li_list[2].classList.add("underline"); // Career
  } else if (scrollTop < scrollPositions.contact - windowHeight / 2) {
    menu_li_list[3].classList.add("underline"); // Gallery
  } else {
    menu_li_list[4].classList.add("underline"); // Contact
  }
}

showUnderlineOnScroll();

document.addEventListener("scroll", showUnderlineOnScroll);


// for showing mobile menu
const hamburgerBtn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("menu");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    menu.classList.toggle("shown");
});

// close menu onclick outside
document.addEventListener('click', event => {
  const isClickInside = menu.contains(event.target);
  const btnClick = hamburgerBtn.contains(event.target);
  if (btnClick && hamburgerBtn.classList.contains("active")) {
      hamburgerBtn.classList.add("active");
      menu.classList.add("shown");

  } else if (!isClickInside || event.target === hamburgerBtn) {
    hamburgerBtn.classList.remove("active");
    menu.classList.remove("shown");
  }
});

// swipe to close menu 
let touchStart, touchEnd;

menu.addEventListener(
  'touchstart',
  e => (touchStart = e.targetTouches[0].clientX)
);

menu.addEventListener(
  'touchmove',
  e => (touchEnd = e.targetTouches[0].clientX)
);

menu.addEventListener('touchend', e => {
  if (touchEnd - touchStart > 45) {
    hamburgerBtn.classList.remove("active");
    menu.classList.remove('shown');
  }
})

  // ♦♦♦♦♦♦♦♦♦ ♦♦♦♦♦♦♦♦♦ ♦♦♦♦♦♦♦♦♦ ♦♦♦♦♦♦♦♦♦

 

  const historyData = {
    chemVojsko: {
        title: "Chemické vojsko",
        content: `
        <article class="history_content_data">
        <h4>1919-1945</h4>
        
        <p>Zkušenosti s bojovými chemickými látkami během 1. světové války vedly k vytvoření československé armády a urychlenému řešení potřebných ochranných prostředků. V roce 1919 byla založena zkušební a opravárenská jednotka, která se zabývala vývojem a testováním nových ochranných prostředků. Ústav pro plynovou službu v Olomouci, založený v roce 1921, se stal základem výstavby československého chemického vojska. V počátcích se armáda opírala o ochranné masky z výzbroje armád bojujících na frontách 1. světové války, včetně francouzské masky ARS a německých kožených masek. V roce 1923 byla do výzbroje zavedena první československá vojenská ochranná maska, a to maska vz. 23, vyvinutá firmou Horák Praha. V roce 1935 se stal první chemickou jednotkou 401. dělostřelecký oddíl v Olomouci, a v první polovině 30. let byly vyvinuty dvě nové prototypy vojenských ochranných masek, maska vz. 33 a maska vz. 35, která se stala standardní armádní maskou s výrobou téměř 1,5 milionu kusů.</p>
        </article>
        
        <article class="history_content_data">
        <h4>1945-1989</h4>
        
        <p>V květnu 1945 byla vytvořena skupina zvláštních bojových prostředků a obnoven byl Vojenský chemický ústav. Pplk. gšt. Oskar Schreiber navrhl v roce 1945 zřízení chemického vojska, ale tento nápad byl realizován až v roce 1949. Hlavními součástmi chemického vojska byly chemický prapor 101 v Jaroměři a 103 v Šafárikově. V roce 1952 byl zřízen 105. plamenometný prapor v Liberci. Po druhé světové válce byly v československé armádě nejčastěji používané trofejní německé ochranné masky vz. 30N a vz. 38N, ale později byly vyvinuty domácí masky, jako například maska ŠM-41 a M52. Od 2. poloviny 50. let byla koncepce činnosti chemického vojska zaměřena na předpoklad masového použití zbraní hromadného ničení. V roce 1968 byl v Liberci ustaven 105. pluk chemické ochrany a v roce 1972 byla zahájena výroba nové masky M10.</p>
        </article>`,
        imgs: ["lbc_vojsko.png", "lbc_vojsko1.png", "lbc_vojsko2.png"]
    },

    lbcVojsko: {
        title: "Vojsko v Liberci",
        content: `<article class="history_content_data">
        <h4>VZNIK ČESKOSLOVENSKÉHO CHEMICKÉHO VOJSKA</h4>
        
        <p>V květnu 1945 byla založena Skupina zvláštních bojových prostředků a obnoven Vojenský chemický ústav. V srpnu 1945 navrhl velitel Skupiny zvláštních bojových prostředků, Oskar Schreiber, zřízení samostatného chemického vojska. Nicméně bylo to až v roce 1949, kdy prezident republiky podepsal dekret, kterým bylo založeno chemické vojsko. Toto vojsko se skládalo z chemických praporů 101 a 103. V roce 1952 byl zřízen 105. plamenometný prapor a věnována pozornost radiologické ochraně. V roce 1957 byla založena 1. brigáda chemické ochrany a v roce 1977 102. brigáda chemické ochrany. V Liberci byl dislokován 51. prapor chemické ochrany, 61. prapor odmořování v terénu a 103. prapor chemické ochrany.</p>
        </article>

        <article class="history_content_data">
        <h4>CHEMICKÉ VOJSKO PO ROCE 1989</h4>
        
        <p>Po roce 1989 pokračovalo chemické vojsko v činnosti, včetně účasti v Perském zálivu v letech 1990-1991. Po rozdělení Československa v roce 1993 se stala Výcviková a mobilizační základna chemického vojska v Liberci reprezentantem chemického vojska v ČR. Po úspěšné účasti v mezinárodních operacích se vstupem ČR do NATO se stala součástí sil okamžité reakce NATO a 9. roty chemické ochrany. V roce 2005 vznikla 31. brigáda radiační, chemické a biologické ochrany, která se 1. prosince 2013 zreorganizovala na 31. pluk radiační, chemické a biologické ochrany. Jedná se o jediný specializovaný svazek Armády České republiky určený pro řešení úkolů chemického zabezpečení a odstraňování následků po použití zbraní hromadného ničení. Chemické jednotky se účastnily operací v Saúdské Arábii, Kuvajtu, Iráku, Afghánistánu, Bosně a Hercegovině, Kosovu, a při ochraně olympijských her v Řecku a Summitu NATO v Turecku. Současné chemické vojsko navazuje na tradice armádních chemiků v meziválečném období a příslušníci se stále nasazují v mírových misích a proti mezinárodnímu terorismu.</p>
        </article>`,
        imgs: ["lbc_vojsko3.png", "lbc_vojsko4.png", "lbc_vojsko5.png"]
    },

    kasarna: {
        title: "Kasárna",
        content: `<article class="history_content_data">
        <h4>DOLNÍ KASÁRNA</h4>
        
        <p>Kasárna císaře Františka Josefa v Liberci byla postavena v letech 1891-1893 a sloužila jako sídlo 94. pěšího pluku rakousko-uherské armády. V době krize byly do Liberce přemístěny další jednotky. Po okupaci Německem byla kasárna obsazena německými vojáky. Po druhé světové válce byl pěší pluk přejmenován na 30. pěší pluk a kasárna získala název Kasárna 6. října. Kasárenský komplex se skládá z osmi budov a čtyř menších, přičemž dominantou je novorománská budova štábu zdůrazněná čtyřbokou věží. V roce 1944 se československé jednotky poprvé dostaly na československé území při Karpatsko-Dukelské operaci, která trvala od 8. září do 1. listopadu 1944.</p>
        </article>

        <article class="history_content_data">
        <h4>HORNÍ KASÁRNA</h4>
        
        <p>Kasárna "Erzherzog Franz Ferdinand a Infanterie Kaserne" byla postavena v letech 1911-1912 pro oddíly dělostřelectva rakousko-uherské armády. Kasárna se skládá ze 8 budov v pozdně secesní architektuře, s různými vnitřními prostory, jako stáje, věznice a světnice. Název "Kasárna Jana Žižky" byl přidělen až po druhé světové válce. Jan Žižka byl významný husitský vojevůdce, považovaný za otce husitské vojenské doktríny a autora defenzivní bojové techniky. Účastnil se mnoha bitvách a kampaní, včetně tažení proti řádu německých rytířů a bojů s katolickou šlechtou. Jan Žižka se účastnil první české defenestrace a stal se hejtmanem Tábora. Poranění obou očí ho nakonec zcela oslepila, ale i tak pokračoval v boji. Zemřel v roce 1424 na hlíznaté onemocnění při obléhání hradu v Přibyslavi.</p>
        </article>`,
        imgs: ["lbc_vojsko6.png", "lbc_vojsko7.png", "lbc_vojsko8.png"]
    }
}


