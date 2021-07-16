import outsideClick from './outside-click.js';

export default class DropdownMenu {

    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);

        // Define touchstart e click como argumento padrão de events caso o usuário não defina.
        if(events === undefined) this.events = ['touchstart', 'click'];
        else this.events = events;

        this.activeClass = 'active';
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }

    // Ativa o dropdown menu e ativa a opção que observa o click fora dele.
    activeDropdownMenu(event) {
        event.preventDefault();
        const element = event.currentTarget;

        element.classList.add(this.activeClass);

        outsideClick(element, this.events, () => {
            element.classList.remove(this.activeClass);
        });
    }

    // Adiciona os eventos ao dropdown menu.
    addDropdownMenusEvent() {
        this.dropdownMenus.forEach(item => {
            this.events.forEach(userEvent => {
                item.addEventListener(userEvent, this.activeDropdownMenu)
            });
        });
    }

    init() {
        if (this.dropdownMenus.length) {
            this.addDropdownMenusEvent();
            return this;
        }
    }
}