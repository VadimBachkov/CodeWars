function disemvowel(str) {
    for(let n =0; n<str.length; n++){
         str =str.replace(/[aeiou]/gi, '');
     }
     return str;
 }