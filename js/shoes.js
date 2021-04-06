let slideIndex = 0;
let slider = document.getElementById('slider');
let slides = document.getElementsByClassName('slide');
let slideControl = document.getElementById('slide-control');
let slideControlItems = slideControl.getElementsByClassName('slide-control-item');
slider.style.marginTop = `-${slideIndex}00vh`;
slideControlItems[slideIndex].classList.add('active');
slides[slideIndex].classList.add('active');
        
let size = slides[slideIndex].querySelector('.size-wrapper>div:first-child');
let color = slides[slideIndex].querySelector('.color-wrapper>div:first-child');

size.classList.add('active');
color.classList.add('active');

chooseProduct = (index) => {
    if (slideIndex === index) return
    slideIndex = index;
    let currSlideControl = document.querySelector('.slide-control-item.active');
    let currSlide = document.querySelector('.slide.active');
    currSlideControl.classList.remove('active');
    currSlide.classList.remove('active');



    setTimeout(() => {
        slider.style.marginTop = `-${slideIndex}00vh`;
        slides[slideIndex].classList.add('active');
        slideControlItems[slideIndex].classList.add('active');
    }, 1600)

        
    let size = slides[slideIndex].querySelector('.size-wrapper>div:first-child');
    let color = slides[slideIndex].querySelector('.color-wrapper>div:first-child');
    let currSize = document.querySelector('.size-wrapper>div.active');
    let currColor = document.querySelector('.color-wrapper>div.active');
    currSize.classList.remove('active');
    currColor.classList.remove('active');
    size.classList.add('active');
    color.classList.add('active');
}
Array.from(slideControlItems).forEach((el, index) =>{
    el.onclick = function(){
        chooseProduct(index);
    }
})

let modal = document.getElementById('modal');
let closeBtn = document.getElementById('modal-close');
closeBtn.onclick = () => {
    modal.style.display = "none";
}
let moreImgs = document.getElementsByClassName('more-imgs-item');
let previewImgs = document.getElementsByClassName('img-prevew');

Array.from(moreImgs).forEach((el) => {
    el.onclick = () => {
        let imgItems = el.parentNode.getElementsByTagName('img');
        Array.from(imgItems).forEach((item, index) => {
            previewImgs[index].src = item.src;
        })

        let img = el.querySelector('img');
        modal.style.display = 'block';

        let modalContent = modal.querySelector('.modal-content');
        modalContent.src = img.src;

        let temp = modalContent.cloneNode(true);
        modalContent.parentNode.replaceChild(temp, modalContent);
    }
})

let sizeSelect = document.querySelectorAll('.size-wrapper>div');
let colorSelect = document.querySelectorAll('.color-wrapper>div');

sizeSelect.forEach((e) => {
    e.onclick = () => {
        let currSizeSelect = document.querySelector('.size-wrapper>div.active');
        currSizeSelect.classList.remove('active');
        e.classList.add('active');
    }
})
colorSelect.forEach((e) => {
    e.onclick = () => {
        let currColorSelect = document.querySelector('.color-wrapper>div.active');
        currColorSelect.classList.remove('active');
        e.classList.add('active');

        let colorActive = e.querySelector('div[class^=bg-]').className.slice(3);
        let imgColor = document.querySelector('.slide.active .img-col');
        let className = `col-6 fullheight img-col linear-gradient-${colorActive}`;
        imgColor.className = className;
    }
})