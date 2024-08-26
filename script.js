// Define static conversion rates
const rates = {
    'USD': {
        'EUR': 0.85, 'JPY': 110.53, 'GBP': 0.76, 'CNY': 7.15, 'INR': 83.27, 'AED': 3.67, 'BDT': 109.49, 'LKR': 320.55, 'PKR': 294.84,
    },
    'EUR': {
        'USD': 1.18, 'JPY': 129.53, 'GBP': 0.89, 'CNY': 7.87, 'INR': 98.03, 'AED': 4.33, 'BDT': 128.76, 'LKR': 377.12, 'PKR': 346.93,
    },
    'CNY': {
        'USD': 0.14, 'EUR': 0.13, 'JPY': 16.47, 'GBP': 0.11, 'INR': 11.64, 'AED': 0.51, 'BDT': 16.35, 'LKR': 47.97, 'PKR': 42.65,
    },
    'INR': {
        'USD': 0.012, 'EUR': 0.010, 'JPY': 1.33, 'GBP': 0.0091, 'CNY': 0.086, 'AED': 0.044, 'BDT': 1.32, 'LKR': 3.84, 'PKR': 3.54,
    },
    'AED': {
        'USD': 0.27, 'EUR': 0.23, 'JPY': 30.14, 'GBP': 0.21, 'CNY': 1.94, 'INR': 22.69, 'BDT': 29.89, 'LKR': 86.91, 'PKR': 80.27,
    },
    'BDT': {
        'USD': 0.0091, 'EUR': 0.0078, 'JPY': 1.01, 'GBP': 0.0070, 'CNY': 0.061, 'INR': 0.76, 'AED': 0.033, 'LKR': 2.91, 'PKR': 2.69,
    },
    'LKR': {
        'USD': 0.0031, 'EUR': 0.0027, 'JPY': 0.35, 'GBP': 0.0024, 'CNY': 0.021, 'INR': 0.26, 'AED': 0.011, 'BDT': 0.34, 'PKR': 0.93,
    },
    'PKR': {
        'USD': 0.0034, 'EUR': 0.0029, 'JPY': 0.39, 'GBP': 0.0027, 'CNY': 0.023, 'INR': 0.28, 'AED': 0.012, 'BDT': 0.37, 'LKR': 1.08,
    },
    'JPY': {
        'USD': 0.0091, 'EUR': 0.0077, 'GBP': 0.0069, 'CNY': 0.061, 'INR': 0.75, 'AED': 0.033, 'BDT': 1.00, 'LKR': 2.86, 'PKR': 2.56,
    },
    'GBP': {
        'USD': 1.32, 'EUR': 1.12, 'JPY': 144.53, 'CNY': 8.87, 'INR': 98.03, 'AED': 4.86, 'BDT': 133.87, 'LKR': 392.12, 'PKR': 359.93,
    },
};

document.getElementById('converter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});

function convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) {
        return amount;
    }

    const rate = rates[fromCurrency][toCurrency];
    if (rate) {
        return amount * rate;
    } else {
        alert('Conversion rate not available for the selected currencies.');
        return 0;
    }
}
