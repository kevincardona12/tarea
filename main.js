 const body = document.getElementById('body');
const section = document.getElementById('cards');
const btnCalcular = document.getElementById("btnCalcular");

function generarCard() {
    const marca = document.getElementById("marca");
    const ram = document.getElementById("ram")
    const valor = document.getElementById("valor");
    const referencia = document.getElementById("referencia");
    const procesador = document.getElementById("procesador");
    const discoDuro = document.getElementById("discoDuro");
    const card = document.createElement('section');
    const parrafo = document.createElement('p');
    const imagen = document.createElement('img');


    card.classList.add('card');
    card.append(imagen, parrafo);
    section.append(card);
}

btnVender.addEventListener("click", () => {
     const marca = document.getElementById("marca");
     const referencia = document.getElementById("referencia")
     const valor = document.getElementById("valor");
     const ram = document.getElementById("ram");
     const procesador = document.getElementById("procesador");
     const discoDuro = document.getElementById("discoDuro");
     const card = document.createElement('section');
     const parrafo = document.createElement('p');
     const nom = document.createElement('p');
     const val = document.createElement('p');
     const ra = document.createElement('p');
     const procesa = document.createElement('p');
     const disco = document.createElement('p');
     const imagen = document.createElement('img');
     const numeroRandom = Math.floor(Math.random() * (12 - 1) + 1);
    
     
     nom.textContent = `Marca: ${marca.value}`;
     parrafo.textContent = `Referencia: ${referencia.value}`;
     ra.textContent = `RAM: ${ram.value}`;
     procesa.textContent = `Procesador: ${procesador.value}`;
     disco.textContent = `Disco Duro: ${discoDuro.value}`;
     val.textContent = `valor: ${valor.value}`;
     imagen.src =`./portatiles/${numeroRandom}.jpg`;

     card.classList.add('card');
     card.append(imagen, nom, parrafo, val, ra, procesa, disco);
     section.append(card);
  }); 
  
