const burgerMenu = document.querySelector('.burgerMenu')
const navigation = document.querySelector('.navigations')
console.log(navigation)


let change = true   

burgerMenu.addEventListener('click',(event)=>{  
    
     if(change){                           
     navigation.style=`position: absolute;left: 0px`;
     event.preventDefault();
     change = false
     console.log(change)
     }else{ navigation.style=`background-color: none; `;
      change = true;
      event.preventDefault();
      console.log(change)
    }
    })