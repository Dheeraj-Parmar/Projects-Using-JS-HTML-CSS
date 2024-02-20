const inputIncome = document.querySelector('.incomeEntry') ;
const buttonIncome = document.querySelector('.buttonIncome') ;

let incomeArr = [] ;
let incomeHtml = '' ;

buttonIncome.addEventListener('click', () => {
    let incomeValue = parseFloat(inputIncome.value);
    incomeArr.push(incomeValue);   
    inputIncome.value = '' ;
    incomeOutcome();
    totalIncome();
})

const incomeOutcome = () => {
    incomeHtml = '' ;
    incomeArr.forEach((value,i) => {
        incomeHtml += `<p>${i+1} : ${value}  <button onclick="incomeRemove(${i})"><i class="fa-solid fa-trash"></i></button></p>`
    })

    document.querySelector('.income').innerHTML = incomeHtml ;
}

const incomeRemove = (i) => {
    incomeArr.splice(i,1);
    incomeOutcome();
    totalIncome();
}

const inputExpence = document.querySelector('.expenceEntry') ;
const buttonExpence = document.querySelector('.buttonExpence') ;

let expenceArr = [] ;
let expenceHtml = '' ;

buttonExpence.addEventListener('click', () => {
    let expenceValue = parseFloat(inputExpence.value)
    expenceArr.push(expenceValue);   
    inputExpence.value = '' ;
    expenceOutcome();
    totalExpence();
})

const expenceOutcome = () => {
    expenceHtml = '' ;
    expenceArr.forEach((value,i) => {
        expenceHtml += `<p>${i+1} : ${value}  <button onclick="expenceRemove(${i})"><i class="fa-solid fa-trash"></i></button></p>`
    })

    document.querySelector('.expence').innerHTML = expenceHtml ;
}

const expenceRemove = (i) => {
    expenceArr.splice(i,1);
    expenceOutcome();
    totalExpence();
}

let totalinc = 0 ;
const totalIncome = () => {
    totalinc = 0 ;
    incomeArr.forEach((value,i) => {
        totalinc += value ;
    })
    netBalance();
}

let totalexp = 0 ;
const totalExpence = () => {
    totalexp = 0 ;
    expenceArr.forEach((value,i) => {
        totalexp += value ;
    })
    netBalance();
}

const netBalance = () => {
    let netBal = totalinc - totalexp ;

    document.querySelector('.netBalance').innerHTML = `<h1>Net Balance = ${netBal} Rs</h1>` ;
}