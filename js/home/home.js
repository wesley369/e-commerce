const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');


menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  
});

const toggleButtons = document.getElementsByClassName('dark-mode-toggle');


if (localStorage.getItem('darkMode') === 'true') {
  enableDarkMode();
}


Array.from(toggleButtons).forEach(function(button) {
  button.addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
});

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'true');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'false');
}




let fonteOriginal = {};

const aumentarFonteBtns = document.getElementsByClassName("aumentarFonteBtn");
for (let i = 0; i < aumentarFonteBtns.length; i++) {
  aumentarFonteBtns[i].addEventListener("click", aumentarFonte);
}

function aumentarFonte() {
  const elementos = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, input[placeholder]");

  if (isEmpty(fonteOriginal)) {
    elementos.forEach(elemento => {
      fonteOriginal[elemento.tagName] = parseInt(getComputedStyle(elemento).fontSize);
    });
  }

  elementos.forEach(elemento => {
    const tagName = elemento.tagName;
    const fontSize = parseInt(getComputedStyle(elemento).fontSize);

    if (fontSize === fonteOriginal[tagName]) {
      elemento.style.fontSize = (fontSize + 3) + "px";
    } else {
      elemento.style.fontSize = fonteOriginal[tagName] + "px";
    }
  });
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function verificarTamanhoTela() {
  const larguraTela = window.innerWidth;
  const divIconBox = document.querySelector(".icon-box");

  if (larguraTela < 767) {
    divIconBox.classList.add("hide");
  } else {
    divIconBox.classList.remove("hide"); 
  }
}


window.addEventListener("resize", verificarTamanhoTela);


verificarTamanhoTela();






  
