# 31-hana-maca-final

# 31-hana-maca-final

1. Změněno menu

- odstraněno dynamické menu z html - přidána třída "sticky-menu", která se přídá k <nav class="header_main_navbar" id="menu"> pokud window.scrollY > 100
- přidáno blurred background
- přidán div - viditelnost se zapíná při scrollování
    <div class="main_descp" id="menuDescp">
        <img src="images\logo_landingPage.svg" alt="" class="descp_logo">
        <p class="descp_text">31. pluk</p>
    </div>
- přidána funkce showUnderlineOnScroll
- k zobrazování underline v breakpointech jsou proměnné SCROLL_BREAK 1-5

2. Landing page

- upraveno pozadí, aby nebyl uříznutý vědcovoják
- upraveno bg-main-secondary.svg, aby byl nadpis pořád ve středu a fungoval gradient

3. detaily

- scrollbar: barva upravena na --text
- mapa: barva:hover upravena na #49422f

4. kontakt půlka



02.06.2023

1. U mobilního menu už se nezobrazuje logo pluku které tam nemělo být. 

2. Detaily?
- změnil jsem logo odkazu vojenský akademie, přijde mi vhodnější.
- přidal jsem odkaz na Benefity pro Vojáky AČR
- změnil jsem barvu pozadí sekce odkazy (špatně čitelný benefity pro vojáky, tak si to případně dolaď)

- přidat i odkaz na Benefity pro veterány??? 

3. dodělaná sekce s odkazy + sekce s kontaktem + přidána mapka s polohou z mapy.cz (testuju)
- mapka se pod 1000px nezobrazuje, adresa pluku == link na mapy.cz
- u odkazů jsem dal pryč <div class="contact_row2"> místo toho jsem použil grid a vyrovnal odkazy do 3 sloupců u většího zobrazení a do dvou sloupců pod 1000px

- nakonec jsem zkusil prohodit odkazy s kontakty, nevypadá to zle a myslim že by se to tak dalo použít


