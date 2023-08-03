Object.defineProperty(Object.prototype, 'mergeDeepRight', {
    value: function (source) {
        function isObject(item) {
            return item && typeof item === 'object' && !Array.isArray(item);
        }
        for (let key of Object.getOwnPropertyNames(source)) {
            if (isObject(source[key])) {
                if (this[key]) {
                    this[key].mergeDeepRight(source[key])
                } else {
                    this[key] = { ...source[key] }
                }
            }else if (Array.isArray(source[key])) {
                if (this[key]) {
                    this[key] = [...this[key], ...source[key]]
                } else {
                    this[key] = [...source[key]]
                }
            } else if (!isObject(source[key])) {
                console.log(source[key]);
                this[key] = source[key]
            }
      }
    },
    enumerable: false,
});

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important'],
        },
    },
};

data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip'],
        },
    },
});

// const obj ={
//     age: 40,
//     contact: {
//       email: 'baa@example.com',
//       favorite: true,
//       meta: {
//         tags: ['vip'],
//       },
//     },
//   }

//   Object.defineProperty(obj.contact,'email',{
//     enumerable:false,
//   })

//   data.mergeDeepRight(obj)
  console.log(data);
  console.log(data.contact.meta.tags);
