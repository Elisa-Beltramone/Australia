// Estados de Australia
const estados = ['Western', 'Queensland', 'Victoria', 'Northern', 'New', 'Tasmania', 'South'];

estados.forEach(estado => {
    const map = document.getElementById(`map${estado}`);
    const contenedor = document.getElementById(`card${estado}`);

    map.addEventListener('mouseover', () => {
        contenedor.classList.add('hovered');
    });

    map.addEventListener('mouseout', () => {
        contenedor.classList.remove('hovered');
    });

    contenedor.addEventListener('mouseover', () => {
        map.classList.add('hovered');
    });
    
    contenedor.addEventListener('mouseout', () => {
        map.classList.remove('hovered');
    });

});

// conversor divisas
const form = document.getElementById('currency-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    
    const apiKey = 'API_KEY'; // Reemplaza 'API_KEY' con tu propia clave de API de ExchangeRate-API.io
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const rate = data.rates[toCurrency];
        const result = (amount * rate).toFixed(2);
        
        resultDiv.textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
        console.error('Error:', error);
        resultDiv.textContent = 'Error al convertir la divisa. Por favor, inténtalo de nuevo.';
    }
});
