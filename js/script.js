function removeButton(button) {
    // Obten el div padre del botón
    var divParent = button.closest('.column');
    // Verifica si se encontró un div padre
    if (divParent) {
        // Elimina el div padre del boton
        divParent.parentNode.removeChild(divParent);
    }
}

//funcion puntaje ninjas
const nameNinjas = document.querySelector(".score");
const scoreElement = document.querySelector(".score");

// Variable para almacenar el puntaje actual
let score = parseInt(scoreElement.textContent);

// Agrega un evento de clic al elemento h2
nameNinjas.addEventListener("click", function () {
    // Incrementa el puntaje
    score += 1;

    // Actualiza el contenido del span con el nuevo puntaje
    scoreElement.textContent = score;
});

//funcion puntaje piratas
const namePirates = document.querySelector(".score2");
const scoreElement1 = document.querySelector(".score2");

// Variable para almacenar el puntaje actual
let score2 = parseInt(scoreElement1.textContent);

// Agrega un evento de clic al elemento h2
namePirates.addEventListener("click", function () {
    // Incrementa el puntaje
    score2 += 1;

    // Actualiza el contenido del span con el nuevo puntaje
    scoreElement1.textContent = score2;
});


  // Función para mostrar la alerta después de 13 segundos
  function mostrarAlerta() {
    setTimeout(function() {
        alert("The ninjas have Won!");
    }, 13000); // 13000 milisegundos (13 segundos)
}

// Llama a la función cuando se cargue la página
window.onload = mostrarAlerta;
