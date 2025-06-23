

// instead of defining a function and the using the on click attribute in the html document 
// we can use this on click attrribute so that we separate the html and js functionslity



// Create two letiables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = [];



const inputEl =document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const tabBtn = document.getElementById('tab-btn')

let inputBtn =  document.getElementById('input-btn');




const deleteBtn = document.getElementById('delete-btn');

console.log(deleteBtn)
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads') )
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads=[];
    renderLeads(myLeads)

   
    


})


// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console


tabBtn.addEventListener('click',function(){

    //  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // });

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){

        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))

    
       renderLeads(myLeads) 

    })


})




inputBtn.addEventListener('click'/* this click means the acton/ event it listens for
     it takes there. Doesnt have to be a click event there are other several events*/, function() /*this defines what we are going to do if someone clicks the button doesnt really have 
     to be a function */{
       

        myLeads.push(inputEl.value);
        inputEl.value=""
        localStorage.setItem('myLeads', JSON.stringify(myLeads))


        
        

        

        renderLeads(myLeads)

        



        


     })



function renderLeads(leads){
    let listItems = '';
    for (let i = 0; i < leads.length; i++){
       // listItems +='<li><a href ="" target= "_blank">' +  myLeads[i] +'</a>' + '</li>' 

        listItems += `<li>
                <a target= "_blank" href ="${leads[i]}" >
                ${leads[i]}
                </a>
          </li>`

        

        


        
    }

    ulEl.innerHTML = listItems


    


}

renderLeads(myLeads)



