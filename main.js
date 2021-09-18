const navBar = document.getElementById('nav_bar'),
      toggleBtn = document.getElementById('toggleId'),
      closeBtn = document.getElementById('closeId'),
      nav = document.querySelectorAll('.navLink');

toggleBtn.addEventListener('click', ()=>{
    navBar.classList.add('showNavBar')
})      
closeBtn.addEventListener('click', ()=>{
    navBar.classList.remove('showNavBar')
}) 

function removeEachLink(){
    navBar.classList.remove('showNavBar')
}
nav.forEach(n=>n.addEventListener('click', removeEachLink))


let launchDate = new Date("Jan 1, 2028 12:00:00").getTime();
let timer = setInterval(tick, 1000)


function tick (){
let now = new Date().getTime();
let t = launchDate - now;

if (t > 0){
    // Algorith to calculate days...
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10){
        days  = "0" + days;
    }

// Algorith to calculate hours....
    let hrs = Math.floor((t % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    if (hrs < 10){
        hrs  = "0" + hrs;
    }
// Algorith to calculate Minutes ....
    let mins = Math.floor((t % (1000 * 60 * 60 )) / (1000 * 60));
    if (mins < 10){
        mins  = "0" + mins;
    }

// Algorithm to calculate Seconds....
   let secs = Math.floor((t % (1000 * 60)) / (1000));
   if (secs < 10){
    secs  = "0" + secs;
}

let time = `${days} Days  |   ${hrs}  Hrs   |    ${mins} Mins  |  ${secs}  Sec`;

    document.querySelector('.countdown').innerHTML = time;
}
}

// Hey i am stack with adding item to cart, i ceated an addItemToCart function and created a new element method to but still can not getting items to cart, i don't know where i am messing up with the code. Please help! Below are the code lines and in the main.html is the dom code, ii also created a new file for the page you can access it by clicking the cart icon in the header. Thanks.


let allButtons = document.querySelectorAll('.toCartBtn');
let cartItem = document.querySelector('.cartItem')[0];
for (let i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener('click', addItemToCart)
}

function addItemToCart(event){
    let clickedButton = event.target;
    let buttonParent = clickedButton.parentElement.parentElement;
   let buttonDescParent = buttonParent.parentElement;
   let buttonMainParent = buttonDescParent.parentElement;
   let itemName = buttonDescParent.children[2].innerText
   let itemImg = buttonMainParent.children[0].src;
   let itemPrice = buttonParent.children[0].innerText;
   let itemGrams = buttonDescParent.children[3].innerText;

   let itemContainer = document.createElement('div')
   itemContainer.innerHTML = `<div class="itemImg">
   <img src="${itemImg}" alt="Food Image" class="cartImg">
</div>
<div class="itemInfo">
   <div class="description">
       <span class="itemName">${itemName}</span>
       <i class='bx bx-x closeIcon icon' ></i>
   </div>
   <span class="itemDesc">Size: ${itemGrams}</span>
   <div class="priceDiv">
       <span class="itemPrice">$ ${itemPrice}</span>
       <div class="qtyControl">
           <i class='bx bx-minus icon minusIcon'></i>
           <span class="qnty">1</span>
           <i class='bx bx-plus icon plusIcon' ></i>
       </div>
   </div>
</div>`
cartItem.append(itemContainer)

}


