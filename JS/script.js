// Selecciona el botón y el cuerpo del documento
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Agrega un evento para alternar entre los temas
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
});


// Selecciona el contenedor de las tarjetas y los botones
const scrollableCards = document.querySelector('.scrollable-cards');
const prevButton = document.querySelector('.btn1.prev');
const nextButton = document.querySelector('.btn1.next');

// Ancho de desplazamiento por clic
const scrollAmount = 300; // Ajusta según el tamaño de tus tarjetas

// Evento para desplazar hacia la izquierda
prevButton.addEventListener('click', () => {
    scrollableCards.scrollBy({
        left: -scrollAmount, // Desplazar hacia la izquierda
        behavior: 'smooth'
    });
});

// Evento para desplazar hacia la derecha
nextButton.addEventListener('click', () => {
    scrollableCards.scrollBy({
        left: scrollAmount, // Desplazar hacia la derecha
        behavior: 'smooth'
    });
});






const stack = document.querySelector(".stack");
const cards = Array.from(stack.children)
  .reverse()
  .filter((child) => child.classList.contains("card"));

cards.forEach((card) => stack.appendChild(card));

function moveCard() {
  const lastCard = stack.lastElementChild;
  if (lastCard.classList.contains("card")) {
    lastCard.classList.add("swap");

    setTimeout(() => {
      lastCard.classList.remove("swap");
      stack.insertBefore(lastCard, stack.firstElementChild);
    }, 1200);
  }
}

let autoplayInterval = setInterval(moveCard, 4000);

stack.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (card && card === stack.lastElementChild) {
    card.classList.add("swap");

    setTimeout(() => {
      card.classList.remove("swap");
      stack.insertBefore(card, stack.firstElementChild);
    }, 1200);
  }
});

document.getElementById('explore-btn').addEventListener('click', function() {
  // Desplazarse hacia la sección del carousel
  document.getElementById('carousel-section').scrollIntoView({
      behavior: 'smooth',  // Desplazamiento suave
      block: 'start'       // Alinear al inicio de la sección
  });
});
