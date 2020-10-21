import {gsap} from "gsap"

var bloodAnimationTL = gsap.timeline()
// var MorganAnimationTL = gsap.timeline()

bloodAnimationTL.from("#section-1 #blood img",{duration:.06, alpha:0})
    .from("#section-1 img",{duration:4, alpha:0}, "frist")
    .to("#section-1 #blood img",{duration:2, alpha:2, y: 90})
    .to("#section-1",{duration:2, alpha: 0})
    .to("#section-2 h1", {duration:1, color: "black"})
    .to("#section-2 p", {duration:1, color: "#A62722"});
    


