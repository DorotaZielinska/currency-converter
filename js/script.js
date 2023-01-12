console.log("Udanego kalkulowania");

let amountInPlnElement = document.querySelector(".js-amountInPln");
let foreignCurrencyElement = document.querySelector(".js-foreignCurrency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amountInPln = amountInPlnElement.value; 
    let foreignCurrency = foreignCurrencyElement.value;
    let rate;

    switch (foreignCurrency) {
        case "EUR":
            rate = 4.69;
            break;
            case "USD":
                rate = 4.40;
                break;
                case "GBP":
                    rate = 5.35;
    }

   let result = amountInPln / rate;
   resultElement.value = `${result.toFixed(2)}`; 
});

formElement.addEventListener("reset", () => {
    console.log(`Formularz został zresetwowany.`);
});


