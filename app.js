const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  
  
    let n = numbers.length;
    let primeArray = [];
  
    for(let i=0; i<n; i++){
      let count =0;
      for(j=0; j<n; j++){
        if(numbers[i]%j ==0){
          count ++;
        }
        
      }
  
    
  if (count ==2){
    console.log(numbers[i])
    }
  }
  let arr = [];
       
       let min = arr[0];
       for(let i=0; i<n; i++){
         if(numbers[i]<min){
           min = numbers[i]
         }
       }
    
     let max = arr[0];
       for(let i=0; i<n; i++){
         if(numbers[i]<min){
           max = numbers[i]
         }
       }