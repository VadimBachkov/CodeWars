function geometricSequenceElements(a, r, n){
    let str = '';
    for(let i = 0; i < n; i++){
      str += a*(r**i);
      if(i === n-1){}
      else{str += ', ';}
    }
    return str;
  }