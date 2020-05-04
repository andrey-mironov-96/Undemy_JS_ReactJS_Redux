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
                console.log(t);
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

});

// let deadline = '2018-11-21';

// function getTimeRemaining(endtime) {
//     let t = Date.parse(endtime) - Date.parse(new Date()),
//     seconds = Math.floor((t/1000) % 60),
//     minutes = Math.floor((t/1000/60) % 60),
//     hours = Math.floor((t/(1000*60*60)));

//     return {
//         'total' : t,
//         'hours' : hours,
//         'minutes' : minutes,
//         'seconds' : seconds
//     };
// }

// function setClock(id, endtime) {
//     let timer = document.getElementById(id),
//         hours = timer.querySelector('.hours'),
//         minutes = timer.querySelector('.minutes'),
//         seconds = timer.querySelector('.seconds'),
//         timeInterval = setInterval(updateClock, 1000);
        
//     function updateClock() {
//         let t = getTimeRemaining(endtime);

//         function addZero(num){
//                     if(num <= 9) {
//                         return '0' + num;
//                     } else return num;
//                 };

//         hours.textContent = addZero(t.hours);
//         minutes.textContent = addZero(t.minutes);
//         seconds.textContent = addZero(t.seconds);

//         if (t.total <= 0) {
//             clearInterval(timeInterval);
//             hours.textContent = '00';
//             minutes.textContent = '00';
//             seconds.textContent = '00';
//         }
//     }

// }

// setClock('timer', deadline);
// });