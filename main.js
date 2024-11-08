const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    document.addEventListener("click", (event)=>{
        if(!event.composedPath().includes(searchBtn) && !event.composedPath().includes(searchForm)  ){
            searchForm.classList.remove("active");
        } 
    });
});


const cartItem = document.querySelector(".cart-items-container");
const cartBtn = document.querySelector(".cart-btn");

cartBtn.addEventListener("click", () => {
    cartItem.classList.toggle("active");
    document.addEventListener("click", (event)=>{
        if(!event.composedPath().includes(cartBtn) && !event.composedPath().includes(cartItem)){
            cartItem.classList.remove("active");
        } 
    });
});

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    document.addEventListener("click", (event)=>{
        if(!event.composedPath().includes(menuBtn) && !event.composedPath().includes(navbar)  ){
            navbar.classList.remove("active");
        } 
    });
});



