initTabNav();
initAccordion();
initScrollSuave();
initAnimacaoScroll();

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}

function initAccordion() {
    const accordinonList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    if (accordinonList.length) {
        accordinonList[0].classList.add(activeClass);
        accordinonList[0].nextElementSibling.classList.add(activeClass);

        accordinonList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
    }
}

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.5;
        animaScroll();

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo');
                }
            });
        }
        window.addEventListener('scroll', animaScroll);
    }
}