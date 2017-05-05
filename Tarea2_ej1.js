function reverseArray(myArray){
  var invertedArray = []
  j = myArray.length - 1
  for (i=0; i<myArray.length; i++){
    invertedArray[i] = myArray[j]
    j--
  }
  return invertedArray
}

reverseArray([1,2,3,4,5])
