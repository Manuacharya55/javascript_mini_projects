const ctx = document.querySelector('.graph-holder').getContext('2d');

let billsTotal = 0;
let foodAndDrinksTotal = 0;
let entertainmentTotal = 0;
let transportationTotal = 0;
let shoppingTotal = 0;
let othersTotal = 0;


expensesArray.forEach(expense => {

    switch (expense.category) {
        case 'Bills':
            billsTotal += parseFloat(expense.amount);
            break;
        case 'Food And Drinks':
            foodAndDrinksTotal += parseFloat(expense.amount);
            break;
        case 'Entertainment':
            entertainmentTotal += parseFloat(expense.amount);
            break;
        case 'Transport':
            transportationTotal += parseFloat(expense.amount);
            break;
        case 'Shopping':
            shoppingTotal += parseFloat(expense.amount);
            break;
        case 'Others':
            othersTotal += parseFloat(expense.amount);
            break;
        default:
            break;
    }
});


const data = {
    labels: ['Bills', 'Food And Drinks', 'Entertainment','Transport','Shopping','Others'],
    datasets: [{
      label: 'My Expenses Tracker',
      data: [billsTotal, foodAndDrinksTotal, entertainmentTotal, transportationTotal, shoppingTotal, othersTotal],
      borderColor: '#1AA7EC',
      borderWidth: 2,
      fill: false 
    }]
  };
  

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true 
      }
    }
  };
  

  const myLineChart = new Chart(ctx, {
    type: 'line', 
    data: data,
    options: options
  });
 