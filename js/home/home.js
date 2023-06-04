const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');


menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  
});


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


  
