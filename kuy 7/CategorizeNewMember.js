function openOrSenior(data){
    let result = [];
    for (let i = 0; i < data.length; i++) {
      let arrI = data[i];     
      if (arrI[0] >= 55 && arrI[1] > 7) {
        result.push('Senior')
      } else {
        result.push('Open')
      } 
    }
    return result;
  }