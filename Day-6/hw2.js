var Books = [
    {
      author: 'Bill',
      title: 'The Road Ahead',
      haveRead: true,
      dateOfRead: new Date(2020, 10, 10)
    },
    {
      author: 'Steve',
      title: 'Walter Isaacson',
      haveRead: true,
      dateOfRead: new Date(2020, 10, 5)
    },
    {
      author: 'Jhon',
      title:  'The Hunger Games',
      haveRead: false,
      dateOfRead: NaN
    },
  ];
  
  function readingStatus(books) {
    try{
    for (const book of books) {
      if(typeof book !== 'object'){
        throw new Error("Element must be object")
      }
      if (book.haveRead) {
          Object.defineProperty(book, "daysAgo",{
            get(){
            const today = new Date();
            const diffTime = today - book.dateOfRead;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
            return `${diffDays} days ago`;
            }
          })
        console.log(`${book.author} have read ${book.title} book ${book.daysAgo}`);
      } else {
        console.log(`${book.author} haven't read ${book.title} book yet`);
      }
    }
  }catch (e){
    console.log(e.name+": "+e.message);
  }
  }
  
  readingStatus(Books);
  