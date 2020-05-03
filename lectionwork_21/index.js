let btn = document.querySelectorAll('button');



// btn[0].addEventListener('click',(event)=>{
//     let target = event.target;
//     // console.log('произошло событие: ' + event.type + ' на элементе ' + event.target);
//     target.style.display = 'none';
//     console.log(event);
// });

btn.forEach((item)=>{
    item.addEventListener('mouseleave',()=>{
        console.log('Вышли')
    });
});
// btn[0].addEventListener('click',()=>{
//     alert('2');
// });
// btn[0].addEventListener('mouseenter', () => {
//     alert('Вы навели на первую кнопку');
// });
