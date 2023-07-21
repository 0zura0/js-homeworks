function reverse(arr){
    if(!Array.isArray(arr)){
        throw new Error("Parameter must be an array.")
    }
    if(arr.length===0){
        throw new Error("array shouldn't be empty")
    }
for(let i=0;i<Math.round(arr.length/2);i++){
    let temp=arr[i]
    arr[i]=arr[arr.length-i-1]
    arr[arr.length-i-1]=temp
}
    return arr
}
const a = [1,2,3,4,5,6,7]
try{
    console.log(reverse(a));
}catch (e){
 console.log(e.name+": "+e);
}
  