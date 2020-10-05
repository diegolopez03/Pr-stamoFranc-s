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
    let capitalSiguiente = 0;
  
  
    // Transformar los años en meses
    plazo = Math.round(plazo * 12);
  
    // Calcular la cuota
    cuota =
      (capital * tasaInteresDecimal) / (1 - (1 + tasaInteresDecimal) ** -plazo);
  
    cuota = cuota.toFixed(2);
    //console.log(cuota);

    //Cálculo de todas las cuotas con ciclo for 
    console.log('Mes'+' '+'Capital'+' '+ 'iInterés'+' '+'Cuota'+' '+'Deuda');
    
  for (let i = 1; i <= plazo; i++) {
      interes = capital * tasaInteresDecimal;
      capitalSiguiente = cuota - interes; 
      capital = Math.round(capital - capitalSiguiente);
      interes = interes.toFixed(2);
      capital = capital.toFixed(2);
      capitalSiguiente = capitalSiguiente .toFixed(2);
      
      console.log(i+'  '+capitalSiguiente+' '+interes+' '+cuota+' '+capital );
    
    }


  };