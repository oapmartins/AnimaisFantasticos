export default class Tooltip {

    constructor(tooltips) {
        this.tooltips = document.querySelectorAll(tooltips);
        // Bind do objeto da classe aos objetos.
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    // Move a tooltip com base nos estilos, de acordo com a posição do mouse.
    onMouseMove(event) {
        this.tooltipBox.style.top = `${event.pageY + 15}px`;

        if (event.pageX + 240 > window.innerWidth) {
            this.tooltipBox.style.left = `${event.pageX - 190}px`;
        } else {
            this.tooltipBox.style.left = `${event.pageX + 15}px`;
        }
    }

    // Remove a Tooltip e os eventos de Mousemove e Mouseleave.
    onMouseLeave({ currentTarget }) {
        this.tooltipBox.remove();
        currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
        currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }

    // Cria a tooltip box e coloca no body
    criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        this.tooltipBox = tooltipBox;
    }

    // Cria a tooltip box e adiciona os eventos de Mousemove e Mouseleave ao target.
    onMouseOver({ currentTarget }) {

        // Cria a tooltip box e coloca em uma propriedade.
        this.criarTooltipBox(currentTarget);

        currentTarget.addEventListener('mousemove', this.onMouseMove);
        currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    }

    // Adiciona os Eventos de mouseover a cada tooltip.
    addTooltipsEvents() {
        this.tooltips.forEach(item => {
            item.addEventListener('mouseover', this.onMouseOver);
        });
    }

    init() {
        if (this.tooltips.length) {
            this.addTooltipsEvents();
        }
        return this;
    }
}