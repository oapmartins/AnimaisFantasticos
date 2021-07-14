export default class Accordion {

    constructor(list) {
        this.accordinonList = document.querySelectorAll(list);
        this.activeClass = 'ativo';
    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeClass);
        item.nextElementSibling.classList.toggle(this.activeClass);
    }

    // Adiciona os eventos ao accordion.
    addAccordionEvent() {
        this.accordinonList.forEach((item) => {
            item.addEventListener('click', () => this.toggleAccordion(item));
        });
    }

    // Iniciar função.
    init() {
        if (this.accordinonList.length) {
            // Ativar primeiro item.
            this.toggleAccordion(this.accordinonList[0]);
            this.addAccordionEvent();
        }
    }
}