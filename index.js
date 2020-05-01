let money,time;
let start = () =>{
    money = +prompt("Ваш бюджет на месяц?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
    while(isNaN(money) || money == '' || money == null){   
    }
};

let appData = {
    budget:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData:time,
    savings:true,
    chooseExpenses:function(){
        for (let i = 0; i<2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце",''),
                b = prompt('Во сколько это обойдется?','');
        
            if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
                a != ''  && b != '' && a.length < 50){
                    console.log('done');
                    appData.expenses[a] = b;
                }else
                {
                    i=i-1;
                }
        }
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневнй бюджет: " +appData.moneyPerDay);
    },
    chooseOptExpenses:function(){
        for (let i = 0; i < 3; i++) {
            let value = prompt("Статья необязательных расходов?");
    
            if(value.length>0){
                appData.optionalExpenses[i+1] = value;
            }
            
        }
    },
    detectLevel:function(){
        if(appData.moneyPerDay < 100){
            console.log('Минимальный уровень достатка');
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log('Средний уровень достатка');
        }else if(appData.moneyPerDay > 2000){
            console.log('Высокий уровень достатка');
        }else{
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function(){
        if(appData.savings === true){
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    detectDayBudget:function(){
        let dayBudget = (appData.dayBudget/30).toFixed();
        alert("Ваш ежедневный бюджет состовялет: " + dayBudget);
    },
    chooseIncome:function(){
        let whileFlag = true;
        do{
        let items = prompt("Что принесет дополнительный доход (перечислите через запятую)",'');
        if(items.indexOf(',') != -1){
            appData.income = items.split(',');
            appData.income.push(prompt('Может что-то ещё?'));
            appData.income.sort();
            whileFlag = false;
        }
        }while(whileFlag);
       
        let income = '';
        appData.income.forEach(function(item,i){
            income+=i+1 + ": " +item +'\n';
        });
        console.log(income);
    }

};

start();
console.log('Наша программа включает в себя данные: ');
for(let key in appData){
    console.log('- '+key);
}






