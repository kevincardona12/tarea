
const body = document.getElementById('body');
const section = document.getElementById('cards');
const btnCalcular = document.getElementById("btnCalcular");

function generarCard() {
  const nombre = document.getElementById("nombre");
  const cargo = document.getElementById("cargo")
  const valorHora = document.getElementById("valorHora");
  const cantidadHora = document.getElementById("cantidadHora");
  const card = document.createElement('section');
  const salario = document.createElement('p');
  const parrafo = document.createElement('p');
  const imagen = document.createElement('img');
  

 /* poner imagen */
  const numeroRandom = Math.floor(Math.random() * (12 - 1) + 1);
 /*  imgcliente.src = `./clientes/${numeroRandom}.png`;
  imgcliente.classList.add('img') */
 /*  imagen.src = 'cliente/1.png`; */
  card.classList.add('card');
  card.append(imagen, parrafo, salario);
  section.append(card);
}


btnCalcular.addEventListener("click", () => {
  const nombre = document.getElementById("nombre");
  const cargo = document.getElementById("cargo")
   const valorHora = document.getElementById("valorHora");
   const cantidadHora = document.getElementById("cantidadHora");
   const card = document.createElement('section');
   const salario = document.createElement('p');
   const parrafo = document.createElement('p');
   const nom = document.createElement('p');
   const imagen = document.createElement('img');
   const numeroRandom = Math.floor(Math.random() * (12 - 1) + 1);
  
   
   nom.textContent = `Nombre Empleado: ${nombre.value}`;
   parrafo.textContent = `cargo Empleado: ${cargo.value}`;
   salario.textContent = `Su salario es: $${valorHora.value*cantidadHora.value}`;
   imagen.src =`./clientes/${numeroRandom}.png`;
   card.classList.add('card');
   card.append(imagen,nom, parrafo, salario);
   section.append(card);
});