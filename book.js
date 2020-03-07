var submit = document.getElementById("submit");
var titleInput = document.getElementById("title");
var authorInput = document.getElementById("author");
var pagesInput = document.getElementById("pages");
var readCB = document.getElementById("cb");
var book = document.getElementsByClassName("book");
var title = document.getElementsByClassName("titleBook");
var author = document.getElementsByClassName("authorBook");
var pages = document.getElementsByClassName("numPages");
var readButton = document.getElementById("read");
var deleteButton = document.getElementById("delete");
var list = document.getElementById("list");

var books = document.getElementsByClassName("book");

var add = document.getElementById("add");

var addButton = document.getElementById("addButton");

let myLibrary = [];

submit.addEventListener("click", function(event) {
    var a = titleInput.value;
    var b = authorInput.value;
    var c = pagesInput.value;
    var x = readCB.checked;
    var d = ""; 
    (x === true ? d = "Yes" : d = "No");
    let bk = new Book(a, b, c, d);
    addBookToLibrary(bk);
    addToDisplayListInit(a, b, c, d);

    console.log(myLibrary);

});

//change yes/no data to list
///expand add book segment


document.addEventListener("click", function(event) {


    
    if(event.target.className === "delete" && event.target.parentElement.className === "book") {
        
        for(var i = 0; i < myLibrary.length; i++) {
            if((event.target.parentElement.id - 1) === i) {
                myLibray = myLibrary.splice(i, 1);
            }
        }
        removeParentElement();
        assignDOMId();
        console.log(myLibrary);
    }

});

document.addEventListener("click", function(event) {

        if(event.target.className === "read") {
            if(event.target.innerText === "Yes") {
                event.target.innerText = "No";
                var v = event.target.parentElement.id;
                myLibrary[v - 1].read = "No";
            }
            else if(event.target.innerText === "No") {
                event.target.innerText = "Yes";
                var v = event.target.parentElement.id;
                myLibrary[v - 1].read = "Yes";
            }
        }
    });

function removeParentElement() {
    event.target.parentElement.remove();
}

function Book(title, author, numPages, read, id) {
    this.title = title,
    this.author = author,
    this.numPages = numPages,
    this.read = read;
}

/*
var bk = new Book("Lord of the Rings", "JRR Tolkien", 300, "Yes");
addBookToLibrary(bk);
var book2 = new Book("heart of the sea", "john smith", 200, "Yes");
addBookToLibrary(book2);
*/

function  addBookToLibrary(book) {
    myLibrary.push(book);
    //console.log(myLibrary);
}


function addToDisplayListInit(title, author, pages, read) {


        var k = document.createElement("div");
        k.className = "book";
        k.id = myLibrary.length;

        var tl = document.createElement("a");
        addContents(tl, "titleBook", title);
   
        var aut = document.createElement("a");
        addContents(aut, "authorBook", author);
 
        var pgs = document.createElement("a");
        addContents(pgs, "numPages", pages);
     
        var rd = document.createElement("button");
        addContents(rd, "read", read);

        var dl = document.createElement("button");
        addContents(dl, "delete", "Delete");

        addToDisplayListAppend(k, tl, aut, pgs, rd, dl);

   };

   function addToDisplayListAppend(book, title, author, pages, read, del) {
        
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        book.appendChild(del);
        list.appendChild(book); 
   };

   function addContents(varName, className, display) {
        varName.className = className;   
        varName.innerHTML = display;
   }

   function assignDOMId() {
       for(var i = 1; i < books.length; i++) {
           book[i].id = i;
       }
   }

   /*addButton.addEventListener("click", function(event) {
       if(add.height === "0") {
        inputExpand();
       } else {
           inputCollapse();
       }
       
   });*/

   function inputExpand() {
        add.style.height = "400px";
        add.style.marginLeft = "250px";
   }

   function inputCollapse() {
        add.style.height = "0";
        add.style.marginLeft = "0";
   }