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
