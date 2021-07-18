import outsideClick from './outside-click.js';

export default class MenuMobile {

    constructor(buttons, list, events) {
        this.menuButton = document.querySelector(buttons);
        this.menuList = document.querySelector(list);
        this.activeClass = 'active';

        // Define touchstart e click como argumento padrão de events caso o usuário não defina.
        if (events === undefined) this.events = ['touchstart', 'click'];
        else this.events = events;

        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        event.preventDefault();
        this.menuList.classList.add(this.activeClass);
        this.menuButton.classList.add(this.activeClass);

        outsideClick(this.menuList, this.events, () => {
            this.menuList.classList.remove(this.activeClass);
            this.menuButton.classList.remove(this.activeClass);
        })
    }

    addMenuMobileEvents(){
        this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
    }

    init(){
        if(this.menuButton && this.menuList){
            this.addMenuMobileEvents();
        }
    }
}