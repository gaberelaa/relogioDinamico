function trocar() {
    const hours = document.querySelector('#hour');
    const img = document.querySelector('#image');
    const greetings = document.querySelector('#saudacao');
    const emoji = document.querySelector('#emoji');

    let date = new Date();
    let hour = date.getHours();

    //alteração de frase principal (horas).
    let paragrafo = document.createElement('p');
    paragrafo.innerHTML = `São ${hour} horas.`
    hours.appendChild(paragrafo);

    //alteração de saudação, emoji, alteração de imagem e cor de fundo.
    if(hour >= 5 && hour <= 12) {
        greetings.innerText = 'Bom dia!'
        emoji.innerText = '😊'
        img.src='src/images/morning.jpg'
        document.body.style.background = '#88A66A'
    } else if (hour > 12 && hour <= 17 ) {
        greetings.innerText = 'Boa tarde!'
        emoji.innerText = '😀'
        img.src='src/images/afternoon.jpg'
        document.body.style.background = '#617355'
    } else {
        greetings.innerText = 'Boa noite!'
        emoji.innerText = '😴'
        document.body.style.background = '#354024'
    }
}
