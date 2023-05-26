var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var btnClose = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery-inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0


function showgallery(){

    currentIndex== images.length-1
    ? next.classList.add("hide")
    : next.classList.remove("hide")


    currentIndex == 0
    ? prev.classList.add("hide")
    : prev.classList.remove("hide")
    //display
    gallery.classList.add('show')
    galleryImg.src = images[currentIndex].src
}

images.forEach((item,index)=>{
    item.addEventListener('click',function(){
        currentIndex = index
        showgallery()
    })
})

btnClose.addEventListener('click',function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){

        gallery.classList.remove('show')
    }
})

prev.addEventListener('click',function(){
    if(currentIndex>0)
    {
        currentIndex--
        showgallery()
    }
})
next.addEventListener('click',function(){
    if(currentIndex<images.length-1)
    {
        currentIndex++
        showgallery()
    }
})

