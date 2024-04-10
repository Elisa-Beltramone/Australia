// conversor divisas
const form = document.getElementById('currency-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if(data.error) {
            throw new Error(data.error);
        }

        const rate = data.rates[toCurrency];
        if (!rate) {
            throw new Error(`No se encontró la tasa de cambio para ${toCurrency}`);
        }

        const result = (amount * rate).toFixed(2);
        
        resultDiv.textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
        console.error('Error:', error);
        resultDiv.textContent = 'Error al convertir la divisa. Por favor, inténtalo de nuevo.';
    }
});