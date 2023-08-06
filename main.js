fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then(console.log)

    //state variables
    let toDoListArray =[];
    //ui variables
    const form  = document.querySelector(".form");
    const input = document.querySelector(".form__input");
    const ul = document.querySelector("toDoList")

    //event listeners
    form.addEventListener("submit",e => {
        //prevent  default behaviour -page reload
        e.preventDefault();
        //give item a unique ID
        let itemId = String(Date.now());
        //get/assign input value    
        let toDoItem = input.value ;
        //pass Id and Item into  functions
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        //clear the input  box, (this is default behaviour  but we  got rid of  that)
        input.value =" ";
    });
    ul.addEventListener("click", e=> {
            let id = e.target.getAttribute("data-id");
            if (!id) return
            removeItemFromDOM(id);
            removeItemFromArray(id);
    });
    
    //function
    function addItemToDOM(itemId,  toDoItem) {
        //create an li
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        //add toDoItem text to  li
        li.innerText= toDoItem
        //add li to  the DOM
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        // add item  to array  as an object  with an ID  so we  can find and delete   it later
        toDoListArray.push({itemId, toDoItem})
        console.log(toDoListArray)
    }

    function removeItemFromDOM(id) {
        //get  the list  item  by data  ID
        var li  = document.querySelector(` [data-id = " ` +id +' " ] ');
        //remove list  item
        ul.removeChild(li);

    }
    
    function removeItemFromArray(id) {
        //create a toDoListArray  with  all li 's that  don't  match the ID
        toDoListArray =toDoListArray.filter((item)=> {
            return item.itemId !==id
        });
        console.log(toDoListArray);
    }

