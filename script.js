// Selección de elementos del DOM
const textArea = document.querySelector('.text-area');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const rectanguloContenedor = document.querySelector('.rectangulo-contenedor');
const titulo = document.querySelector('.titulo');
const texto = document.querySelector('.texto');
const imagen = document.querySelector('.imagen');

// Función para encriptar el texto
function encriptarTexto(texto) {
    const mapaEncriptacion = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return texto.replace(/[eioua]/g, match => mapaEncriptacion[match]);
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    const mapaDesencriptacion = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return texto.replace(/enter|imes|ai|ober|ufat/g, match => mapaDesencriptacion[match]);
}

// Evento para encriptar el texto
btnEncriptar.addEventListener('click', () => {
    const textoEncriptado = encriptarTexto(textArea.value);
    textArea.value = '';  // Limpia el área de texto
    mostrarResultado(textoEncriptado);
});

// Evento para desencriptar el texto
btnDesencriptar.addEventListener('click', () => {
    const textoDesencriptado = desencriptarTexto(texto.textContent);
    textArea.value = '';  // Limpia el área de texto
    mostrarResultado(textoDesencriptado);
});

// Función para mostrar el resultado en la pantalla
function mostrarResultado(resultado) {
    imagen.style.display = 'none';
    titulo.textContent = "Texto procesado";
    texto.textContent = resultado;

    // Verificar si el botón de copiar ya existe
    let botonCopiar = document.querySelector('.copiar');
    if (!botonCopiar) {
        // Crear el botón de copiar si no existe
        botonCopiar = document.createElement('button');
        botonCopiar.textContent = 'Copiar';
        botonCopiar.classList.add('copiar');
        rectanguloContenedor.appendChild(botonCopiar);
    }

    // Evento para copiar el texto
    botonCopiar.addEventListener('click', () => {
        navigator.clipboard.writeText(resultado).then(() => {
            alert('Texto copiado al portapapeles');
        });
        textArea.value = resultado;  // Pega el texto copiado en el área de texto
    });
}