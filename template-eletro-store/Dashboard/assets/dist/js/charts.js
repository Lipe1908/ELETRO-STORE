var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 380,
    height: 250,
    type: 'pie',
  },
  title: {
    text: 'Mais Vendidos',
    align: 'center'
  },
  labels: ['Desktops ', 'Laptops', 'Mouses', 'Teclados', 'Aparelhos de som'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  
  var options2 = {
    series: [{
      name: "Vendas",
      data: [58, 78, 235, 178, 510, 220, 330, 550, 748]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Vendas Anuais',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
  }
  };

  var charts = new ApexCharts(document.querySelector("#charts"), options2);
  charts.render();

      
  var options = {
    series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  title: {
    text: 'Filiais',
    align: 'left'
  },
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Guarantã', 'Fernão', 'Vera Cruz', 'Júlio Mesquita', 'Gália', 'Álvario de Carvalho', 'Bauru',
      'Marilia', 'Jafa', 'Garça'
    ],
  }
  };

  var charte = new ApexCharts(document.querySelector("#charte"), options);
  charte.render();


  var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 380,
    height: 250,
    type: 'pie',
  },
  title: {
    text: 'Financias',
    align: 'left'
  },
  labels: ['Funcionarios ', 'Site', 'Fornecedores', 'Aluguel', 'Frete'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chartr = new ApexCharts(document.querySelector("#chartr"), options);
  chartr.render();

  new DataTable('#example');