/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/let list = document.getElementsByTagName('li');
   let page = 1;
   
   /*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (list, page) => {
  const higher = page * 10;
  const lower = higher - 10;
  for(let i =0; i < list.length; i++){
    if(i < lower || i >= higher){
    list[i].style.display ='none';
  }else {
    list[i].style.display ='block';
   
  }
  
}
          
}       
    showPage(list, page); 
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons
***/
    const appendPageLinks = (list) =>{
     const numbPage= Math.ceil(list.length / 10);
     let newLocal = document.getElementsByClassName("page")[0];
     let newDiv = document.createElement('div');
     let textNod = document.createTextNode(''); 
     newLocal.appendChild(newDiv);
     newDiv.appendChild(textNod);
     newDiv.classList.add('pagination');
     
     const listTwo = document.createElement('ul');
     newDiv.appendChild(listTwo);
     
     for (let i=1; i< numbPage; i++){ 
      const listThree = document.createElement('li');
      const addAnchor = document.createElement('a');

     const button = document.createElement('button');
     button.textContent='';
     addAnchor.appendChild(button);

        
      addAnchor.href="#";
      addAnchor.textContent = i;
      
      listTwo.appendChild(listThree);
      listThree.appendChild(addAnchor);
      addAnchor.className ='active';
      listThree.addEventListener('click', (e) =>{
            showPage(list, i);
      });
    function myFunction(e) {
      var removeClass = document.querySelectorAll(".active");
      for(let i=1; i< removeClass.length;i++)
      if(removeClass){
        removeClass.classList.remove("active");
      } else{
        e.target.className = "active";
       }
     }
    }
      
        
     
    }
        appendPageLinks(list);  
