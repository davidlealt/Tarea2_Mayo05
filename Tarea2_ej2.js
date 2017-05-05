function removeFromArray(myArray,removeThis){
  for (i=0; i<myArray.length; i++){
    if (myArray[i] == removeThis){
      myArray.splice(i,1)
    }
  }
  return myArray
}

removeFromArray(['a','b','c','d'],'b')
