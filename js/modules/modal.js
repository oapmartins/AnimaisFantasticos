export default class Modal {
    constructor(botaoAbrir, botaoFechar, containerModal){
        this.botaoAbrir = document.querySelector(botaoAbrir);
        this.botaoFechar = document.querySelector(botaoFechar);
        this.containerModal = document.querySelector(containerModal);

        // Bind this callback para fazer a referência ao objeto da classe.
        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.clickForaModal = this.clickForaModal.bind(this);
    }

    // Abre ou fecha o Modal.
    togleModal() {
        this.containerModal.classList.toggle('ativo');
    }

    // Adiciona o evento de teoggle ao modal.
    eventToggleModal(event){
        event.preventDefault();
        this.togleModal();
    }

    // Fecha o modal ao clicar na parte de fora.
    clickForaModal(event) {
        if (event.target === this.containerModal) {
            this.togleModal(event)
        }
    }

    // Adiciona os eventos aos elementos do modal.
    addModalEvent(){
        this.botaoAbrir.addEventListener('click', this.eventToggleModal);
        this.botaoFechar.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.clickForaModal);
    }

    init(){
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvent();
            return this;
        }
    }
}