class DB{
    
    #usersmap;
    constructor(){
        this.#usersmap=new Map()
    }
    create(obj){
        if(typeof obj !=="object" || Array.isArray(obj)===true){
            throw new Error("parameter should be object")
        }
        this.typeChack(obj)
        let {name,age,country,salary,...rest} = obj
        if(Array.from(Object.keys(rest)).length!==0){
            throw new Error(`there is more filed in user object`)
        }

        if(!name){
            throw new Error('name must be provided')
        }
        if(!age){
            throw new Error('age must be provided')
        }
        if(!country){
            throw new Error('country must be provided')
        }
        if(!salary){
            throw new Error('salary must be provided')
        }
        let id;
        let temp = true;
        while(temp){
            id = Math.floor(Math.random() * 1000000)
            if(this.#usersmap.has(id)){
                continue;
            }else{
                obj.id = id.toString()
                this.#usersmap.set(id.toString(),obj)
                temp=false
            }   
        }
        return id.toString()
    }

    read(id){
        if(!id){
            throw new Error("you shoud pass argument id")
        }
        if(typeof id !== "string"){
            throw new Error("id must be string")
        }
        return this.#usersmap.has(id)?this.#usersmap.get(id) : null;
    }

    readAll(...args){
        if(args.length!==0){
            throw new Error("you must not pass argunet to readAll function")
        }
        return Array.from(this.#usersmap.values());
    }

    update(id, updateField){
        if(arguments.length!==2){
            throw new Error("you should pass 2 argument")
        }

        
        this.typeChack(updateField)



        let obj = this.read(id)
        if(obj === null){
            throw new Error("there is not person with that id")
        }

        let {name, age, country, salary,...rest} = updateField;
        if(Array.from(Object.keys(rest)).length!==0){
            throw new Error(`there is more filed in user object`)
        }
        if(name===undefined && age===undefined&&country===undefined&&salary===undefined){
            throw new Error("there is not such property in persons database")
        }
    
         obj = {...obj,...updateField}
         this.#usersmap.set(id,obj)
    }
    delete(id){
        if(!id){
            throw new Error("you shoud pass argument id")
        }
        if (typeof id !== 'string' || !this.#usersmap.has(id)){
            throw new Error('Invalid user id');
        }
        this.#usersmap.delete(id)
            return true
    }

    typeChack(obj){
        let{name,age,country,salary}=obj;
        const characterPattern = /[a-zA-Z]/;
        const charactersOnly = /^[a-zA-Z]+$/;
        if (name){
            if(!characterPattern.test(name)){
                throw new Error("name is not valid")
            }
        }
        if (age){
            if(!(typeof age === 'number' && !isNaN(age))){
                throw new Error("age is not valid")
            }
        }
        if(country){
            if(!charactersOnly.test(country)){
                throw new Error("country is not valid")
            }
        }
        if (salary){
            if(!(typeof salary === 'number' && !isNaN(salary))){
                throw new Error("salary is not valid")
            }
        }
        
    }
}


const db = new DB();

const person = {
    name: 'zura',       // required field with type string
    age: 12,            // required field with type number
    country: 'ge',      // required field with type string
    salary: 500,        // required field with type number
    // surname:"doe"
};

const id = db.create(person);
console.log(id);
const customer = db.read(id);
console.log(customer);
const customers = db.readAll();
console.log(customers);
db.update(id, { age: 22 }); 
console.log(db.readAll());
console.log(db.delete(id));



