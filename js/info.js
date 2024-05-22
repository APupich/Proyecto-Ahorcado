let lista = id('lista');
palabras.forEach(element => {
    let li = document.createElement('li');
    li.innerHTML = ` <b>${element.palabra}: </b>${element.referencia} <br><br>`;
    lista.appendChild(li);
});