import {gsap} from "gsap"

const section1TL = gsap.timeline()

export function section1Animation(){

section1TL.from("#section-1 img",{duration:7, alpha:0})
  .from("#section-1 #blood img",{duration:8, alpha:0, rotation: 120});
  
}