export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    function togleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
    }

    function clickForaModal(event) {
        if (event.target === this) {
            togleModal(event)
        }
    }

    if (botaoAbrir && botaoFechar && containerModal) {

        botaoAbrir.addEventListener('click', togleModal)
        botaoFechar.addEventListener('click', togleModal);
        containerModal.addEventListener('click', clickForaModal);
    }
}