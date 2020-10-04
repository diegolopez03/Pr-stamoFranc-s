// Calcula las cuotas basadas en el método francés
// couta = (capital * i) / (1 - (i + 1) ^ -n)
// i = interés
// n = períodos (en meses)
exports.calcularMetodoFrances = (capital, tasaInteres, plazo) => {
    let cuota = 0;
    let mes = 0;
    let interes = 0;
    let tasaInteresDecimal = tasaInteres / 100;
    const cuotas = [];
    let deuda = 0;
  
    // Transformar los años en meses
    plazo = Math.round(plazo * 12);
  
    // Calcular la cuota
    cuota =
      (capital * tasaInteresDecimal) / (1 - (1 + tasaInteresDecimal) ** -plazo);
  
    cuota = cuota.toFixed(2);
    console.log(cuota);

    console.log('mes'+' '+'capital'+' '+ 'interes'+' '+'cuota'+' '+'deuda');
    // for
  for (let i = 1; i <= plazo; i++) {
      interes = capital * tasaInteresDecimal;
      deuda = cuota - interes; 
      capital = capital - deuda;
      interes = interes.toFixed(2);
      capital = capital.toFixed(2);
      deuda = deuda .toFixed(2);
      
      console.log(i+' '+deuda+' '+interes+' '+cuota+' '+capital );
    
    }


  };