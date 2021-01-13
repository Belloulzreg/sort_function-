function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());  
        } else {
            arr.push(right.shift()) ;
        }
    }
    
    return [ ...arr, ...left, ...right ];
}
function SortAList(arr) {
    const half = arr.length / 2
     if(arr.length < 2){
      return arr 
    }
    
    const left = arr.splice(0, half)
    return merge(SortAList(left),SortAList(arr))
  }
  const list = [55, 25, 66, 99, 15, 0.5, 0.99, 1000]
  const sortedList = SortAList(list)
  console.log(sortedList);