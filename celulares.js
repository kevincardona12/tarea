
const body = document.getElementById('body');
const section = document.getElementById('cards');
const btnCalcular = document.getElementById("btnCalcular");

function generarCard() {
  const nombre = document.getElementById("nombre");
  const cantidad = document.getElementById("cantidad")
  const valor = document.getElementById("valor");
  const referencia = document.getElementById("referencia");
  const card = document.createElement('section');
  const totalPagar = document.createElement('p');
  const parrafo = document.createElement('p');
  const imagen = document.createElement('img');
  

 /* /* /* poner imagen */
 /*  const numeroRandom = Math.floor(Math.random() * (12 - 1) + 1);
   imgcliente.src = `./clientes/${numeroRandom}.png`;
  imgcliente.classList.add('img') 
   imagen.src = 'cliente/1.png`;  */
  card.classList.add('card');
  card.append(imagen, parrafo, totalPagar);
  section.append(card);
}


btnVender.addEventListener("click", () => {
  const nombre = document.getElementById("nombre");
  const referencia = document.getElementById("referencia")
   const valor = document.getElementById("valor");
   const cantidad = document.getElementById("cantidad");
   const card = document.createElement('section');
   const totalPagar = document.createElement('p');
   const parrafo = document.createElement('p');
   const nom = document.createElement('p');
   const cant = document.createElement('p');
   const val = document.createElement('p');
   const imagen = document.createElement('img');
   const numeroRandom = Math.floor(Math.random() * (16 - 1) + 1);
  
   
   nom.textContent = `Nombre: ${nombre.value}`;
   parrafo.textContent = `Referencia: ${referencia.value}`;
   cant.textContent = `cantidad: ${cantidad.value}`;
   val.textContent = `valor Uni: ${valor.value}`;
   totalPagar.textContent = `total a pagar: ${cantidad.value*valor.value}`
   imagen.src =`./celulares/${numeroRandom}.jpg`;
   card.classList.add('card');
   card.append(imagen,nom, parrafo,val,cant, totalPagar);
   section.append(card);
});