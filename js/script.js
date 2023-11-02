var paraEl = document.querySelectorAll("[data-speed]");
		function parallax() {
			paraEl.forEach(e => {
				var rect = e.getBoundingClientRect();
				var transY = e.dataset.offset || 0;
				var posiOrigin = rect.top - transY + rect.height / 2;
				var offset = (posiOrigin - window.innerHeight / 2) * e.dataset.speed;

				if (rect.top < window.innerHeight ||
					offset < window.innerHeight / 2) {
					e.dataset.offset = offset;
					e.style.transform = `translateY(${offset}px)`;
				}
			})
		}
		window.addEventListener("scroll", parallax, { passive: true });
		parallax(); 



function contact(info) 
{ 
    document.querySelector(".contact").classList.toggle("montrer")
}

window.addEventListener('scroll', titreScroll);

        function titreScroll() {
            var elements = document.querySelectorAll('.taillemin'); 
            elements.forEach(function (element) {
                if (element.getBoundingClientRect().top >=0 && element.getBoundingClientRect().top <=(window.innerHeight || document.documentElement.clientHeight)) {
                    element.classList.add('projet'); 
                }
                else
                    element.classList.remove('projet');
            });
        }