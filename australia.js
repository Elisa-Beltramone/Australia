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
document.getElementById('currency-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    const url = `https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.rates[toCurrency]) {
                const result = (amount * data.rates[toCurrency]).toFixed(2);
                document.getElementById('result-container').textContent = `Resultado: ${result} ${toCurrency}`;
            } else {
                document.getElementById('result-container').textContent = 'No se encontró la tasa de cambio para la moneda de destino.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result-container').textContent = 'Error al convertir la divisa. Por favor, inténtalo de nuevo.';
        });
});
