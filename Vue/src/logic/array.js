export const toggleElement = (arr, v) => {
  const index = arr.indexOf(v);
  if (index === -1) {
    arr.push(v);
  } else {
    arr.splice(index, 1);
  }
};
export const countInteger=(arr) => {
    let count=0;
    arr.forEach((v)=>{
        if(Number.isInteger(v)){
            count++;
        }
    })
    return count;
}
export const countNotInteger=(arr)=>{
    let count = 0;
    arr.forEach((v)=>{
        if(!Number.isInteger(v)){
            count++;
        }
    })
    return count;
}