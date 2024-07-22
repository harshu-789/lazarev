function navAnimation(){
    let nav = document.querySelector("#nav")
    nav.addEventListener("mouseenter", function(){
        let tl = gsap.timeline()
        tl.to("#nav-bottom", {
            height: "25vh",
            duration : 0.5
        })
        tl.to("#nav-part2 h5", {
            display: "block",
            duration: 0.1
        })
        tl.to("#nav-part2 h5 span" , {
            y: 0,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to("#nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to("#nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

navAnimation()


function page2Animation(){
    let rightEle = document.querySelectorAll(".right-elem")

    rightEle.forEach(function (elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3], {
                opacity : 1, 
                scale : 1
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3], {
                opacity : 0, 
                scale : 0
            })
    })

    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - 10,
            y: dets.y - elem.getBoundingClientRect().y - 150
        })
    })
})
}


page2Animation()

function page3Animation(){
    let page3 = document.querySelector(".page3-center")
    let video = document.querySelector("#page3 video")

    page3.addEventListener("click", function(){
        video.play()
        gsap.to(video, {
            transform: "scaleX(1)  scaleY(1)",
            opacity: 1 ,
            borderRadius:0
        })
    })
    video.addEventListener("click", function(){
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7)  scaleY(0)",
            opacity: 0 ,
            borderRadius:"30px"
        })
        })
}
page3Animation()

var sections = document.querySelectorAll(".sec-right")

sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadingAnimation()