function sortArray(myArray){
  console.log('Input = ' + myArray)
  var tempval
  for (j=0; j<myArray.length; j++){
    for (i=0; i<myArray.length; i++){
      if(myArray[i] > myArray[i+1]) {
        tempval = myArray[i]
        myArray[i]=myArray[i+1]
        myArray[i+1] = tempval
      }
    }
  }
  return(myArray)
}

sortArray([Math.round(Math.random()*100),
            Math.round(Math.random()*100),
            Math.round(Math.random()*100),
            Math.round(Math.random()*100),
            Math.round(Math.random()*100),
            Math.round(Math.random()*100),
            Math.round(Math.random()*100),
            Math.round(Math.random()*100),
            Math.round(Math.random()*100),
            Math.round(Math.random()*100)])
