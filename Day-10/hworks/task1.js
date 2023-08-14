function send(url){
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then((res)=>res.json())
        .then((json)=>{
            statusCode = json["status-code"]
            if(statusCode===200){
            resolve(json.data)
        }else{
            reject(`We have error, status code: ${statusCode}`)
        }
        })
    })
}


const url = "https://api.first.org/data/v1/countries";
send(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });