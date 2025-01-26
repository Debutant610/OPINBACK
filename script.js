document.addEventListener('DOMContentLoaded', function () {
  // Configurer les données pour le graphique
  const ctx = document.getElementById('salesChart').getContext('2d');
  const salesChart = new Chart(ctx, {
    type: 'line', // Type de graphique
    data: {
      labels: ['00:00', '05:00', '10:00', '15:00', '20:00'], // Horaires
      datasets: [{
        label: 'Ventes (€)',
        data: [0, 5, 0, 10, 7], // Données de vente fictives
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
