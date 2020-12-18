const burgerMenu = document.querySelector('.burgerMenu')
const navigation = document.querySelector('.navigations')
console.log(navigation)


let change = true   

// burgerMenu.addEventListener('click',(event)=>{  
    
//      if(change){                           
//      navigation.style=`position: fixed;left: 0px;transition: transform 0.3s ease-in-out;`;
//      event.preventDefault();
//      change = false
//      console.log(change)
//      }else{ navigation.style=`position: fixed;left: -320px;transition: transform 0.3s ease-in-out;`;
//       change = true;
//       event.preventDefault();
//       console.log(change)
//     }
//     })


    //elem.classList.toggle(cls)

    burgerMenu.addEventListener('click',(event)=>{
      navigation.classList.toggle(navigationsActive)
    })