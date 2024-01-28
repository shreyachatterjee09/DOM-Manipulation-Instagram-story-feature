var arr=[
    
    {dp:"https://media.istockphoto.com/id/636152092/photo/elegant-beautiful-woman-in-a-black-dress-and-hat.jpg?s=1024x1024&w=is&k=20&c=cRwK0eAwqEhmGOWT_V38IApa5f6kszcWSRLOWgS41_M=",story:"https://media.istockphoto.com/id/1350431068/photo/young-beautiful-woman-wearing-beige-sweater.jpg?s=612x612&w=0&k=20&c=JWEa1yJzbmZ-Vdj4CKXZPcVWuw5jBA8L4b0Twck8cZk="},
    {dp:"https://media.istockphoto.com/id/1774861806/photo/beautiful-woman.jpg?s=612x612&w=is&k=20&c=EI75u4oYjLY06S85UroZijqpqWmWy9EeMj6nJAGN0Aw=",story:"https://media.istockphoto.com/id/1417970357/photo/beautiful-woman-posing-in-black-top-and-pink-skirt.jpg?s=612x612&w=0&k=20&c=2BAbumFdBnEB2eBOUA6uDGlj3-gvmAiltkOdwUs3IU4="},
    {dp:"https://media.istockphoto.com/id/1176521551/photo/beautiful-girl.jpg?s=1024x1024&w=is&k=20&c=YvMJT9kcoBHRMxAG74NuMPFa6YQnpV0QIQrqJkxqcHY=",story:"https://media.istockphoto.com/id/1451126063/photo/beautiful-modern-middle-aged-female-smiling-portrait-dressed-black-dress-and-sunglasses-with.jpg?s=612x612&w=is&k=20&c=u0xYX-yuUjaNmR1UWG9HeISRwJ0O4XSylY91YCoPB-g="},
    {dp:"https://media.istockphoto.com/id/883559468/photo/girl-reading-by-the-river.jpg?s=612x612&w=0&k=20&c=QE0Duqd-QOV4qfTh2sjr81Tpk4GTWYDsiE_fq2QLcwE=",story:"https://media.istockphoto.com/id/1215119911/photo/looking-directly-up-at-the-skyline-of-the-financial-district-in-central-london-stock-image.jpg?s=612x612&w=0&k=20&c=ZPJgugElAHw-rgXKTid6p5oLwEHhmzqTMu-c4rlMTyw="}
]


var clutter=""

arr.forEach(function(elem,idx){
   clutter+=` <div class="story">
   <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

document.querySelector("#instastory").innerHTML=clutter

document.querySelector("#instastory").addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },3000)
})