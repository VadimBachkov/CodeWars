function findShort(s){
    let arr = []
      arr = s.split(' ');
      short = arr[0].length;
      arr.forEach((item)=> {
          if(item.length < short){
              short = item.length			
          };
      })
      return short;
  }