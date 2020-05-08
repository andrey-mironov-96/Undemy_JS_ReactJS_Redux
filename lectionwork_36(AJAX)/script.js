document.addEventListener('DOMContentLoaded',()=>{

    let currencyRUB = document.querySelector('#currencyRUB'),
        currencyUSD = document.querySelector('#currencyUSD');
            
    currencyRUB.addEventListener('input',()=>{
        let request = new XMLHttpRequest();
        request.open('GET','currency.json');
        request.setRequestHeader('Content-type','application/json','charset=utf-8');
        request.send();

        request.addEventListener('readystatechange',()=>{
            if(request.readyState === 4 && request.status == 200){
                let data = JSON.parse(request.response)
                currencyUSD.value = currencyRUB.value/data.USD;
            }
        });
    });
    currencyUSD.addEventListener('input',()=>{
        let request = new XMLHttpRequest();
        request.open("GET",'currency.json');
        request.setRequestHeader('Content-type','application/json','charset=utf-8');
        request.send();
        request.addEventListener('readystatechange',()=>{
            if(request.readyState === 4 && request.status == 200){
                let data = JSON.parse(request.response);
                currencyRUB.value = currencyUSD.value * data.USD;
            }
        })
    });
});