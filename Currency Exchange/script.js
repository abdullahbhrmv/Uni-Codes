function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var currency = document.getElementById('currency').value;

    var url = `https://api.exchangerate-api.com/v4/latest/TRY`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var rates = data.rates;
            var rate = rates[currency];
            var convertedAmount = amount * rate;
            document.getElementById('result').innerText = amount + ' TRY = ' + convertedAmount.toFixed(2) + ' ' + currency;
        })
        .catch(error => {
            console.log(error);
            document.getElementById('result').innerText = 'Failed to fetch exchange rates.';
        });
}