class MyString{
    reverse(str){
        let arr = str.split("")
        let reversed = arr.reverse()
        return reversed.join("")
    }
    ucFirst(str){
        return str[0].toUpperCase()+str.substring(1)
    }   
    ucWords(str){
        let arr = str.split(" ");
        let ansArr=[]
        for(let key of arr){
            key= key[0].toUpperCase()+key.substring(1)
            ansArr.push(key)
        }
        return ansArr
    }
}


let str = new MyString()
console.log(str.reverse('abcde')); 
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'
