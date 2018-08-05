'use strict'; 
const choicePhoto = document.getElementById('view');
const miniature = document.getElementsByTagName('a');
function choice(event){
	event.preventDefault(); 	
	choicePhoto.src = this.href; 
	if (this.classList.contains('gallery-current')){ 
		return; 
	};
	for (const link of miniature){ 
		link.classList.remove('gallery-current'); 
		  };
	this.classList.add('gallery-current'); 
};

Array.from(miniature).forEach(link => link.addEventListener('click', choice));
