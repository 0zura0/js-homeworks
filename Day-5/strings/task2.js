function reverseCase(sentence){
    try{
    if (typeof sentence !== "string") {
        throw new Error("Input parameter must be a string.");
      }
    let newstr='';
    for(let i=0; i<sentence.length;i++){
       if(sentence[i].charCodeAt()>=65 && sentence[i].charCodeAt()<=90 ){
        newstr+=sentence[i].toLowerCase();
       }else if(sentence[i].charCodeAt()>=97 && sentence[i].charCodeAt()<=122){
        newstr+=sentence[i].toUpperCase();
       }else{
        newstr+=sentence[i]
       }
    }
    console.log(newstr);
    return newstr
    }catch(e){
        console.log(e.name+": "+e.message);
    }
}

reverseCase('Hello theRe') // expected: 'hELLO THErE'

reverseCase('BIG @hafuhUSHCU') // expected: 'big letters'

reverseCase("") // expected: ''
