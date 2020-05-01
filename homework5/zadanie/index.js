
let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    userPrompt = document.getElementById('prompt');



let task_1 = () =>{
    menu.insertBefore(menuItem[2],menuItem[1]);
    menuItem_li = document.createElement('li');
    menuItem_li.classList.add('menu-item');
    menuItem_li.textContent = 'Пятный элемент';
    menu.appendChild(menuItem_li);
}
task_1();
let task_2 = () =>{
    title.textContent = "Мы продаем только подлинную технику Apple";
}
task_2();
let task_3 = () =>{
    adv.remove();
}
task_3();
let task_4 = () =>{
    let quastion = prompt("Ваше отношение к технике apple",'');
    userPrompt.innerHTML = '<h3>'+quastion+'</h3>';
}
task_4();

