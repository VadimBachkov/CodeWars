function getCount(str) {
    let arr=str.toLowerCase().split('');
       let lowels="aeiou";
    
       let r = arr.reduce( (sum, val) => {
          if (lowels.indexOf (val) !==-1) { 
             sum++;
          }
          return sum;
       }, 0); 
       return r;
    }