function rmHtmlTags(str){
    try{
    if (typeof str !== "string") {
        throw new Error("Input parameter must be a string.");
      }
    const pattern = /<[^>]*>/g;
    return str.replace(pattern,"");
    }catch (e){
        console.log(e.name+": "+e.message);
    }
}


console.log(rmHtmlTags("<li>Item 3</li>"));
console.log(rmHtmlTags("<p><strong><em>Content</em></strong></p>"));
rmHtmlTags(123)
console.log("just text");