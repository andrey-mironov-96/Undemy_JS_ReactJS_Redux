window.addEventListener('DOMContentLoaded',()=>{

    
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
   
        /*
        *Функция скрытия контент
        */
       let hidetabContent = (a)=>{
           
           for(let i = a; i<tabContent.length; i++){
               tabContent[i].classList.remove('show');
               tabContent[i].classList.add('hide');
           }
       };

    hidetabContent(1);

       /**
        * Функция отображения контента
        */
       let showTabContent = b=>{
            if(tabContent[b].classList.contains('hide')){
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
       };

       info.addEventListener('click',(event)=>{
          
            let target = event.target;
            if(target && target.classList.contains('info-header-tab')){
                console.log(event);
                for(let i = 0; i<tab.length; i++){
                    if(target == tab[i]){
                        hidetabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
       });

       //Timer

       let deadline = '2020-05-05';

       let getTimeRemaining = (endtime)=>{
            let t =  Date.parse(endtime)-Date.parse(new Date()),
                seconds = Math.floor((t / 1000) % 60),
                minuts = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t/(1000 * 60 * 60)));
               
            return{
                'total':t,
                'hours':hours,
                'minuts':minuts,
                'seconds':seconds
            };
        };

        let setClock = (id, endTime)=>{
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minuts = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock,1000);

            function addTime(_hours,_minuts,_seconds){
                hours.textContent = addZero(_hours);
                minuts.textContent = addZero(_minuts);
                seconds.textContent = addZero(_seconds);
            }
            function addZero(number){
                if (number <= 9){
                    return '0'+number;
                }
                return number;
            }
            function updateClock (){
                let t = getTimeRemaining(endTime);
                addTime(t.hours,t.minuts,t.seconds);
               

                if(t.total <=0){
                    
                    clearInterval(timeInterval);
                    addTime('00','00','00');
                    
                }
            }
        };

        setClock('timer',deadline);

        //Modal

    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    more.addEventListener('click',function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click',function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.owerflow = '';
    });

    //homework

    let age = document.getElementById('age');
   
    function showUser(surname, name) {
	    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
    showUser.apply(age,['Андрей',"Миронов"]);

    class options{
        constructor(height,width,bg,fontSize,textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createDiv(){
            let div = document.createElement('div');
            console.log(this.textAlign);
            div.style.cssText = `width: ${this.width}px;
                                height: ${this.height}px;
                                fontSize: ${this.fontSize}px;
                                text-align: ${this.textAlign};
                                background-color: ${this.bg};
             `;
             div.textContent='Проверка стилей';

             let social = document.getElementsByClassName('social')[0];
             social.appendChild(div);

        }
    }
    let opt1 = new options(100,500,'red',50,'right');
    opt1.createDiv();
    
    
    //Form

    let message = {
        loading:'Загрузка...',
        success:'Спасибо! Скоро мы с вами свяжемся!',
        fuilure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        form.addEventListener('submit',(event)=>{
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST','server.php');
            request.setRequestHeader('Content-type','application/json; charset=utf-8');
            let obj = {};
           
            let formData = new FormData(form);
            formData.forEach((value,key)=>{
                obj[key]=value;
            });

            console.log(obj);
            let json = JSON.stringify(obj);
            request.send(json);

            request.addEventListener('readystatechange',()=>{
                if(request.readyState < 4){
                    statusMessage.innerHTML = message.loading;
                }else if(request.readyState == 4 && request.status == 200){
                    statusMessage.innerHTML = message.success;
                }else{
                    statusMessage.innerHTML = message.fuilure;
                }
            });
            for(let i = 0; i< input.length; i++){
                input[i].value = '';
            }
        });

});



