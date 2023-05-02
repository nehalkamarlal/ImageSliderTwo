const images=[
    'https://images.unsplash.com/photo-1681217684376-82f841d33f18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1680114015093-b1975c470331?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1681064163182-bf94305ed41a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1680987082559-6b0f763913e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1680984580142-37e1ad42ea83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60'

];


const container=document.getElementById('container');
const flexcontainer=document.getElementById('flex-container');
const leftbtn=document.getElementById('left-btn');
const rightbtn=document.getElementById('right-btn');
const carouselnav=document.getElementById('carousel-nav');

const n=images.length;
const containerWidth=80;
const flexContainerwidth=n*containerWidth;
flexcontainer.style.width=flexContainerwidth;


for(let i=0;i<n;i++)
{
    const newImg=document.createElement('img');
    newImg.src=images[i];
    const dotDiv=document.createElement('div');
    dotDiv.classList.add('carousel-dot');
    carouselnav.appendChild(dotDiv);
    dotDiv.addEventListener('click',(event)=>{
        const index=[...carouselnav.children].indexOf(event.target);
        // console.log(index);
        // curPosition=index;
        showImg(index);

    })
    newImg.classList.add('img-style');
    flexcontainer.appendChild(newImg);
}
let curPosition=0;
showImg(0);
leftbtn.addEventListener('click',()=>{
if(curPosition>0)
{
showImg(curPosition-1);
}else{
    showImg(n-1);
}
})
rightbtn.addEventListener('click',()=>{
    if(curPosition<n-1)
    {
        showImg(curPosition+1)
    }else{
        showImg(0);
    }
    })

    function showImg(position){
        const prevDot=carouselnav.children[curPosition];
        prevDot.classList.remove('active');
        curPosition=position;
        const curDot=carouselnav.children[curPosition];
        curDot.classList.add('active');
        const translateXDistance=-curPosition*containerWidth;
        flexcontainer.style.transform=`translate(${translateXDistance}vw)`;
    }