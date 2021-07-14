export default class initTabNav {
    constructor(menu, content){
        this.tabMenu = document.querySelectorAll(menu);
        this.tabContent = document.querySelectorAll(content);
        this.activeClasse = 'ativo';
    }

    // Ativa a tab de acordo com o indice da mesma.
    activeTab(index) {
        this.tabContent.forEach((section) => {
            section.classList.remove(this.activeClasse);
        });

        const direcao = this.tabContent[index].dataset.anime;
        this.tabContent[index].classList.add(this.activeClasse, direcao);
    }

    // Adiciona os eventos as tabs.
    addTabNavEvent(){
        this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => this.activeTab(index));
        });
    }

    init(){
        if (this.tabMenu.length && this.tabContent.length) {
            // Ativar o primeiro item.
            this.activeTab(0)
            this.addTabNavEvent();
            return this;
        }
    }
}