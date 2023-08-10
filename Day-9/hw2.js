class DB{
    
    #usersmap;
    constructor(){
        this.#usersmap=new Map()
    }
    create(obj){
        if(typeof obj !=="object" || Array.isArray(obj)===true){
            throw new Error("parameter should be object")
        }
        this.#typeChack(obj)
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

        
        this.#typeChack(updateField)



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

    #typeChack(obj){
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

    find(query) {
        const validFields = new Set(["name", "age", "country", "salary"]);
        const validOperators = new Set(["min", "max"]);

        for (const field in query) {
            if (!validFields.has(field)) {
                throw new Error(`Invalid field in query: ${field}`);
            }

            if (field === "name" || field === "country") {
                if (typeof query[field] !== "string") {
                    throw new Error(`${field} must be a string`);
                }
            } else if (field === "age" || field === "salary") {
                const value = query[field];
                if (typeof value === "object") {
                    const keys = Object.keys(value);

                    if (keys.length < 1 || keys.length > 2) {
                        throw new Error(`Invalid object format for ${field}`);
                    }

                    for (const key of keys) {
                        if (!validOperators.has(key)) {
                            throw new Error(`Invalid operator in ${field} query: ${key}`);
                        }
                    }
                } else {
                    throw new Error(`Invalid value for ${field}`);
                }
            }
        }

        const filteredUsers = Array.from(this.#usersmap.values()).filter(user => {
            if (query.name && user.name !== query.name) {
                return false;
            }

            if (query.country && user.country !== query.country) {
                return false;
            }

            if (query.age) {
                const { min, max } = query.age;
                if ((min && user.age < min) || (max && user.age > max)) {
                    return false;
                }
            }

            if (query.salary) {
                const { min, max } = query.salary;
                if ((min && user.salary < min) || (max && user.salary > max)) {
                    return false;
                }
            }

            return true;
        });

        return filteredUsers;
    }
}


const db = new DB();

const person = {
    name: 'zura',       // required field with type string
    age: 10,            // required field with type number
    country: 'ua',      // required field with type string
    salary: 350,        // required field with type number
    // surname:"doe"
};
const person2 = {
    name: 'luka',       // required field with type string
    age: 25,            // required field with type number
    country: 'ua',      // required field with type string
    salary: 550,        // required field with type number
    // surname:"doe"
};

const id = db.create(person);
const id2 =db.create(person2)

const query = {
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};
const customers = db.find(query);
console.log(customers);


