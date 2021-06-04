import outsideClick from './outside-click.js';

export default function initDtropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach(item => {
        ['touchstart', 'click'].forEach(userEvent => {
            item.addEventListener(userEvent, hadleClick)
        });
    });

    function hadleClick(event) {
        event.preventDefault();
        this.classList.add('active');

        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');
        });
    }
}