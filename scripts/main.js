const myHeading = document.querySelector('h1')
myHeading.textContent = 'Low Cost Therapy In NYC'
myHeading.addEventListener('click',function () {
    alert('Welcome to Thearpy NY')
})

const myImage = document.querySelector('img')
myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src')
    if(mySrc === 'assets/therapy2.jpg'){
        myImage.setAttribute('src','assets/therapy1.jpg')
    }else{
        myImage.setAttribute('src','assets/therapy2.jpg')
    }
}