let btn = document.getElementsByClassName('btn')[1],
    box = document.getElementsByClassName('box')[1];
    
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
console.log(box);
myAnimation();