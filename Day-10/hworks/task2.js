class Countries{
    #url
    constructor(url){
      if(typeof url !=='string'){
        throw new Error('url should be string')
      }
        this.#url = url;
    }
    send(region){
      if(typeof region !=='string'){
        throw new Error('url should be string')
      }
        return new Promise((resolve,reject)=>{
           let url = this.#url+`?region=${region}`
            fetch(url)
            .then((data)=>data.json())
            .then((json)=> {
            let statusCode = json["status-code"]
            if(statusCode===200){
            resolve(json.data)
        }else{
            reject(`We have error, status code: ${statusCode}`)
        }
    })
        })
    }
}
const url = "https://api.first.org/data/v1/countries";
const countries = new Countries(url);

(async () => {
  try {
    const data = await countries.send('africa');
    console.log(data); // Data.
  } catch (error) {
    console.log(error);
  }
})();