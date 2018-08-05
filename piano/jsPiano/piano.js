'use strict';
let mode = document.getElementsByClassName('set')[0]; 
let key = document.getElementsByTagName('li'); 
let sound = document.getElementsByTagName('audio'); 
let keyArray = Array.from(key); //Массив клавиш

let lower = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];
let higher = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];
let middle = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];


function octave(event){
     
	if (event.shiftKey){ 
        mode.classList.remove('middle');
        mode.classList.remove('higher');
        mode.classList.add('lower');
    let lowerKey = lower[keyArray.indexOf(this)];
        sound[keyArray.indexOf(this)].src = `sounds/lower/${lowerKey}`;
        sound[keyArray.indexOf(this)].play(); 
        
	}else if (event.altKey){
        
		mode.classList.remove('middle');  
		mode.classList.remove('lower');
		mode.classList.add('higher');
    let higherKey = higher[keyArray.indexOf(this)];
		sound[keyArray.indexOf(this)].src = `sounds/higher/${higherKey}`;  
		sound[keyArray.indexOf(this)].play(); 
        
	}else{ 
        
        mode.classList.remove('lower');
		mode.classList.remove('higher');
		mode.classList.add('middle');
    let middleKey = middle[keyArray.indexOf(this)];
		sound[keyArray.indexOf(this)].src = `sounds/middle/${middleKey}`;
		sound[keyArray.indexOf(this)].play();
	}
}
 for (const key of keyArray){ 
	key.addEventListener('click', octave); 
} 
