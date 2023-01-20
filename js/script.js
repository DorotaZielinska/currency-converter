{
    const welcome = () => {
        console.log("Udanego kalkulowania");
    }
    welcome();





    const calculateResult = (amountInPln, foreignCurrency) => {
        const rateEUR = 4.69;
        const rateUSD = 4.40;
        const rateGBP = 5.35;

        switch (foreignCurrency) {
            case "EUR":
                return amountInPln / rateEUR;
            case "USD":
                return amountInPln / rateUSD;
            case "GBP":
                return amountInPln / rateGBP;
        }
    }
    const updateResultText = (amountInPln, result, foreignCurrency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.value = `${result.toFixed(2)}`;
    }
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountInPlnElement = document.querySelector(".js-amountInPln");
        const foreignCurrencyElement = document.querySelector(".js-foreignCurrency");


        const amountInPln = +amountInPlnElement.value;
        const foreignCurrency = foreignCurrencyElement.value;

        const result = calculateResult(amountInPln, foreignCurrency);

        updateResultText(amountInPln, result, foreignCurrency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", () => {
            console.log(`Formularz został zresetwowany.`);
        });

    }
    init();
    


}


