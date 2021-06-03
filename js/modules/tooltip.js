export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(item => {
        item.addEventListener('mouseover', onMouseOver);
    });

    function onMouseOver(event) {
        const tooltibBox = criarTooltip(this);


        onMouseMove.tooltibBox = tooltibBox;
        onMouseLeave.tooltibBox = tooltibBox;
        onMouseLeave.element = this;

        this.addEventListener('mouseleave', onMouseLeave);
        this.addEventListener('mousemove', onMouseMove);
    }

    const onMouseLeave = {
        handleEvent(){
            this.tooltibBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }

    const onMouseMove = {
        handleEvent(){
            this.tooltibBox.style.top = event.pageY + 15 + 'px',
            this.tooltibBox.style.left = event.pageX + 15 + 'px'
        }
    }

    function criarTooltip(element){
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }
}