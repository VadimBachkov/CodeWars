function addOrChangeUrlParameter (url, param) {
       if (url.includes('?')) {
          if (url.includes(param.split('=')[0])) {
              return url.split('?')[0] + '?' + param
          } else {
              return url + '&' + param
          }
      } else {
          if (param) {
              return url + '?' + param
          } else {
              return url
          }
      }
    
  }