/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   First part:
   In this part we create  a list of 10 student per page.
   54/10 = 5.4 +1 = 6.4. the last page only display 4.
***/
    let list = document.getElementsByClassName('student-item cf');
    let page = 1;
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
   Second Part:
   start manipulating the dom with javascript, creating  and adding elements .
   event handlers to remove and active class in the pages.
   showing and hiding elements by dom manipulations.
***/
    const appendPageLinks = (list) =>{
     const numbPage= Math.ceil(list.length / 10+1);
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
      listThree.addEventListener('click', (event) =>{
            event.preventDefault();
            showPage(list, i);
      });
    }

      var removeClass = document.querySelector('.pagination');
      function myFunction(e) {
      
      for(let i=1; i< removeClass.length;i++){
      if(removeClass)
        removeClass[i].classList.remove('active');
      } 
        event.target.classList.add('active');
       }
    }
        appendPageLinks(list);  
