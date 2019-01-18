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
const pageOne = document.createElement('div');
     document.body.appendChild(pageOne);
     pageOne.classList.add('pagination');
     const listTwo = document.createElement('ul');
     pageOne.appendChild(listTwo);
  for (let i=0; i<6; i++){ 
     const button = document.createElement('button');
     button.textContent='clicked';
     listTwo.appendChild(button);
       
   
   const listThree = document.createElement('li');
   const addAnchor = document.createElement('a');
   addAnchor.setAttribute('href',"#");
   addAnchor.textContent =  "";
   button.appendChild(listThree);
   listThree.appendChild(addAnchor);
   
   
}
   const addClass = document.querySelector('a');
   addClass.className ='active';
    
   
   
   const appendPageLinks = (list) =>{
   showPage();
   showpage = 10;
   const numberItems =54;
   const totalPages = numberItems/showpage;
   pages =totalPages;

   button.innerHTML=pages;
   }

   

   

   
  


  
// Remember to delete the comments that came with this file, and replace them with your own code comments.