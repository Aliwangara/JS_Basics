

// instead of defining a function and the using the on click attribute in the html document 
// we can use this on click attrribute so that we separate the html and js functionslity



// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = [];
const inputEl =document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

let inputBtn =  document.getElementById('input-btn');


inputBtn.addEventListener('click'/* this click means the acton/ event it listens for
     it takes there. Doesnt have to be a click event there are other several events*/, function() /*this defines what we are going to do if someone clicks the button doesnt really have 
     to be a function */{
        myLeads.push(inputEl.value)
        
        renderLeads()


     })



function renderLeads(){
    let listItems = '';
    for (let i = 0; i < myLeads.length; i++){
       // listItems +='<li><a href ="" target= "_blank">' +  myLeads[i] +'</a>' + '</li>' 

        listItems += `<li>
                <a target= "_blank" href ="${myLeads[i]}" >
                ${myLeads[i]}
                </a>
          </li>`

        


        
    }

    ulEl.innerHTML = listItems
    inputEl.value=""


}



