const price = {
    laptopone : '1000$',
    laptoptwo : '1200$',
    laptopthree : '1500$',
    laptopfour : '1700$'
}

const removeClass = (className) =>{
className.forEach((ele)=>{
    ele.classList.remove('active');
})
}
const colors = document.querySelectorAll('.colors');
colors.forEach((box)=>{
    box.addEventListener('click',()=>{
        removeClass(colors);
        box.classList.add('active');
    })
})

const laptopPrice = document.querySelector('.price');
const specifications = document.querySelectorAll('.specifications');
specifications.forEach((box)=>{
    box.addEventListener('click',()=>{
       removeClass(specifications);
        box.classList.add('active');
        laptopPrice.innerHTML =`Buy At : ${price[box.dataset.info]}`;
    })
})

const smallimage =  document.querySelectorAll('.sm-img');
const bigimage = document.querySelector('.mn-img');

smallimage.forEach((img)=>{
    img.addEventListener('click',()=>{
        removeClass(smallimage);
        img.classList.add('active');
        bigimage.src = img.src;
    })
})