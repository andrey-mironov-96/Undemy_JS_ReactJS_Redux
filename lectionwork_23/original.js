document.addEventListener('DOMContentLoaded',()=>{
    let btn = document.querySelector('.btn'),
    box = document.querySelector('.box');
    let reverse = false;
function myAnimation(){
    
    let pos = 0;
    let id = setInterval(frame,10);

    function frame(){
        if(pos == 300){
            clearInterval(id);

        }else{
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }

}
function reverseAnimation(){
    let pos = 300;
    let id = setInterval(frame,10);

    function frame(){
        
        if(pos == 0){
            clearInterval(id);
        }else{
            pos--;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click',()=>{
    if (reverse){
        reverse = !reverse;
        btn.innerHTML = 'animation';
        reverseAnimation();
    }else{
        reverse = !reverse;
        btn.innerHTML = 'reverse animation';
        myAnimation();
    }
    
});

});
