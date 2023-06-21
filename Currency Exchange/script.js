function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var currency = document.getElementById('currency').value;
    var convertedAmountInput = document.getElementById('convertedAmount');

    var url = `https://api.exchangerate-api.com/v4/latest/TRY`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var rates = data.rates;
            var rate = rates[currency];
            var convertedAmount = amount * rate;
            convertedAmountInput.value = amount + ' TRY = ' + convertedAmount.toFixed(2) + ' ' + currency;
        })
        .catch(error => {
            console.log(error);
            convertedAmountInput.value = 'Failed to fetch exchange rates.';
        });
}
