export default function fetchBitcoin(url, target) {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        const btnPreco = document.querySelector(target);
        btnPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
    })
    .catch(error =>{
        console.log(error);
    }); 
}



