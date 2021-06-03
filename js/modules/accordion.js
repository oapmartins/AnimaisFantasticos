export default function initAccordion() {
    const accordinonList = document.querySelectorAll('[data-anime="accordion"] dt');
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