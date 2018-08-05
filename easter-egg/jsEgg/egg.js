'use strict';
const navigation = document.getElementsByTagName('nav')[0];
const secretDiv = document.getElementsByClassName('secret')[0];
let netology = 'KeyY,KeyT,KeyN,KeyJ,KeyK,KeyJ,KeyU,KeyB,KeyZ';
let arr = [];

function menu(){
    if (event.ctrlKey && event.altKey && event.code === 'KeyT'){
        navigation.classList.toggle('visible');
    };
};
/*function func(event){
menu();
};
document.addEventListener('keydown' , func);*/

function secret(){
    arr.push(event.code);
    if(arr.join().search(netology) != -1){
    secretDiv.classList.add('visible');
    return arr = [];
}else{
   secretDiv.classList.remove('visible'); 
};
};
function func(event){
    menu();
    secret();
};
document.addEventListener('keydown' , func);