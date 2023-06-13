const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCadrWidth = carousel.querySelector(".card").offsetwidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildren = [...carousel.Children];

let isDragging = false , isAutoPlay = true , startX, startScrollLeft, timeoutId;
//get the number of cards that can fit in the carousel at once
let cardPerView = math.round(carousel.offsetWidth / firstCardWidth);
//insert copies of the last fiew card to beginning of caousel for imfinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin",card.outerHTML);
});
//insert copies of the last fiew card to end of caousel for imfinite scrolling 
carouselChildrens.slice(0, cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("beforeend",card.outerHTML);
});
//scrool the carousel at appropiate position to hide first few duplicate cards on firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
//add event listeners for the arrow button to scroll the carousel left and right
arrowBtns.forEach ( btn => {
    btn.addEventListener("click". () => {
        carousel.scrollLeft += btn.id =="left" ? -firstCadrWidth : firstCadrWidth ;
    });
});
const dragStart = (e) => {
    isDragging = true ;
    carousel.classList.add("dragging");
    //records the initial cursor and scroll position of thecarousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    //records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e)=>{
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = faşlse;
    carousel.classList.remove("dragging");
    }
const  infiniteScroll=() =>{
    if(carousel.scrollLeft === 0){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    else if (Math.ceil(carousel.scrollLeft)=== carousel.scrollWidth -carousel.offsetWidt) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) isAutoPlay();
    }
    const autoPlay = ()=> {
        if(window.innerWidth < 800 || ! isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCadrWidth,2500);
    }
    autoPlay();
    carousel.addEventListener("mousedown",dragStart);
    carousel.addEventListener("mousemove",dragging);
    document.addEventListener("mouseup",dragStop);
    carousel.addEventListener("scroll",infiniteScroll);
    wrapper.addEventListener("mouseenter",()=> clearTimeout(timeoutId));
    wrapper.addEventListener("moveleave",autoPlay);