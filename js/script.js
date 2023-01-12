console.log("Udanego kalkulowania");

let amountInPlnElement = document.querySelector(".js-amountInPln");
let foreignsCurrencyElement = document.querySelector(".js-foreignsCurrency");
let amountAfterConvertElement = document.querySelector(".js-amountAfterConvert");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amountInPln = amountInPlnElement.value; 
    let foreignsCurrency = foreignsCurrencyElement.value;
    let rate;
    switch (foreignsCurrency) {
        case "EUR":
            rate = 4.69;
            break;
            case "USD":
                rate = 4.40;
                break;
                case "GBP":
                    rate = 5.35;
    }
   let amountAfterConvert = amountInPln / rate;
   amountAfterConvertElement.value = `${amountAfterConvert.toFixed(2)}`; 
});

formElement.addEventListener("reset", () => {
    console.log(`Formularz został zresetwowany.`);
});


