const dropdowns = document.querySelectorAll(".displayName select") ;
const button = document.querySelector("button") ;
const fromCurrency = document.querySelector(".left select") ;
const toCurrency = document.querySelector(".right select") ;
const result = document.querySelector(".convert") ;

window.addEventListener("load" , () => {
    updateRate() ;
})

dropdowns.forEach(value => {
    for ( let currencyCode in countryList) {

        let newOption = document.createElement("option") ;
        newOption.innerText = `${countryList[currencyCode].country} (${currencyCode})` ;
        newOption.value = currencyCode ;

        if (value.name === "from" && currencyCode === "USD") {
            newOption.selected = "selected";
        } else if (value.name === "to" && currencyCode === "INR") {
            newOption.selected = "selected"; 
        }

        value.append(newOption) ;
    }

    value.addEventListener("change", (event) => {
        updateFlag(event) ;
    })
})

const updateFlag = (element) => {
    let currencyCode = element.target.value ;
    let countryCode = countryList[currencyCode].code ;
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png` ;

    let image = element.target.parentElement.querySelector("img") ;
    image.src = newSrc ;
}

button.addEventListener("click", () => {
    updateRate() ;
})

const updateRate = async () => {
    let amount = document.querySelector("input") ;
    let amountValue = amount.value ;
    if ( amountValue === "" || amountValue < 1 ) {
        amountValue = 1 ;
    }
    

    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json` ;
    let response = await fetch(url) ;
    let data = await response.json() ;
    let rate = data[toCurrency.value.toLowerCase()]
    
    let finalAmount = (rate * amountValue).toFixed(2) ;

    result.innerHTML = `<h2>${amountValue} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}</h2>`

    amount.value = "" ;
}