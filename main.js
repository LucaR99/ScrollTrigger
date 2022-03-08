import './style.css'

import gsap from 'gsap'

import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const image = document.querySelectorAll('.img')

image.forEach((img)=>{
  gsap.to(img, {
    scale: 1.2,
    scrollTrigger: {
        trigger: img,
        start: "20% 70%",
        end: "70% 20%",
        //markers:true,
        scrub: true
    }
  })
})

//let zoomValue = 1

// image.forEach((img) => {
//   ScrollTrigger.create({
//     trigger: img,
//     markers: false,
//     start: "20% 70%",
//     end: "80% 30%",
//     scrub: 2,
//     // onEnter: () => img.classList.add("scale"),
//     // onLeave: () => img.classList.remove("scale"),
//     onUpdate: self => {

//         if(self.direction > 0 >=1)
//         {
//           img.style.transform = "scale(" + zoomValue + ")"
//           zoomValue += 0.05
//         }

//         if(self.direction < 0 && zoomValue >= 1)
//         {
//           img.style.transform = "scale(" + zoomValue + ")"
//           zoomValue -= 0.05
//         }
//     },
//     // onEnterBack: () => img.classList.add("scale"),
//     // onLeaveBack: () => img.classList.remove("scale"),
//   });
// })




