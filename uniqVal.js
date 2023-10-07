function removeDublicates(arr) {
  return [...new Set(arr)]
}
console.log(removeDublicates([1,2,2,2,3,3,3,1,5,6,7,8,8,8,8]));