let books=[];
function addBook(){
    const bookName=document.getElementById('bookName').value;
    const autherName=document.getElementById('authorName').value;
    const bookDescription=document.getElementById('bookDescription').value;
    const pagesNumber=document.getElementById('pagesNumber').value;

    if(bookName && autherName && bookDescription && !isNaN(pagesNumber)){
        const book={
            name:bookName,
            autherName:autherName,
            bookDescription:bookDescription,
            pagesNumber:pagesNumber
        }
        books.push(book);
       showbooks();
       clearinputs();
      
        
    }else{
        alert('please fill in all fields correctly.')
    }

}

function showbooks(){
    const bookDiv=books.map((book,index)=>
        `<h1>book Number : ${index +1}</h1>
    <p><strong>Book Name:</strong> <input value='${book.name}'/></p>
    <p><strong>Auther Name:</strong><input value='${book.autherName}'/> </p>
    <p><strong>Book Description:</strong> <input value='${book.bookDescription}'/></p>
    <p><strong>No. of  Pages:</strong><input value='${book.pagesNumber}'/>page(s)</p>
    <button onClick="editbook($index)">Edit</button>

    `
);
document.getElementById('books').innerHTML=bookDiv.join('');
}

function editbook(index){
    const book=books[index];
    document.getElementById('bookName').value=book.name;
    document.getElementById('authorName').value=book.autherName;
    document.getElementById('bookDescription').value=book.bookDescription;
    document.getElementById('pagesNumber').value=book.pagesNumber;

    books.splice(index,1);
    showbooks();

}

function clearinputs(){
    document.getElementById('bookName').value='';
      document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
}