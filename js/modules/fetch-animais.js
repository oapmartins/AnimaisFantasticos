import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {

    // Cria informações com o total de animais.
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }

    // Preencher cada Animal no DOM.
    const numerosGrid = document.querySelector(target);
    function preencherAnimais(animal){
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
    }

    // Anima o número de cada animal.
    function animaAnimaisNumero(){
        const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
        animaNumeros.init();
    }

    // Puxa os animais através de um arquivo Json. Cria cada animal, utilziando create animal.
    async function criarAnimais() {

        try {
            // Fetch espera resposta e transforma a resposta em Json
            const animaisResponse = await fetch(url);
            const animaisJSON = await animaisResponse.json();

            // Após a transformação Ativa a função para preencher e animar os números.
            animaisJSON.forEach(animal => preencherAnimais(animal));
            animaAnimaisNumero();

        } catch (error) {
            console.log(error);
        }
    }

    return criarAnimais();
}