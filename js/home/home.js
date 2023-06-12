const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');


menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  
});

const toggleButton = document.getElementById('dark-mode-toggle');

// Verificar o estado atual do modo noturno no armazenamento local (se existir)
if (localStorage.getItem('darkMode') === 'true') {
  enableDarkMode();
}

// Alternar entre o modo claro e escuro ao clicar no botão de alternância
toggleButton.addEventListener('click', function() {
  if (document.body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
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

const aumentarFonteBtn = document.getElementById("aumentarFonteBtn");
aumentarFonteBtn.addEventListener("click", aumentarFonte);

function aumentarFonte() {
  const elementos = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, input[placeholder]");
  
  if (isEmpty(fonteOriginal)) {
    // Salva as fontes originais
    elementos.forEach(elemento => {
      fonteOriginal[elemento.tagName] = parseInt(getComputedStyle(elemento).fontSize);
    });
  }
  
  elementos.forEach(elemento => {
    const tagName = elemento.tagName;
    const fontSize = parseInt(getComputedStyle(elemento).fontSize);
    
    if (fontSize === fonteOriginal[tagName]) {
      // Aumenta a fonte em 10px
      elemento.style.fontSize = (fontSize + 3) + "px";
    } else {
      // Retorna à fonte original
      elemento.style.fontSize = fonteOriginal[tagName] + "px";
    }
  });
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}



function handleIntersection(entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);

        
        var nextCarousel = entry.target.nextElementSibling;
        if (nextCarousel && nextCarousel.classList.contains('carrousel')) {
          observer.observe(nextCarousel);
        }
      }
    });
  }

  var carousels = document.querySelectorAll('.carrousel');
  var observer = new IntersectionObserver(handleIntersection);

  carousels.forEach(function (carousel) {
    observer.observe(carousel);
  });

 
  
  observer.observe(document.getElementById('ofertas'));




  
