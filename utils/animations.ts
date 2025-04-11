// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// export const certificateAnimation = (bg1: HTMLElement | null, imgContainer: HTMLElement | null, img: HTMLElement | null) => {
//   if (!bg1 || !imgContainer || !img) return;

//   ScrollTrigger.create({
//     trigger: bg1,
//     pin: bg1,
//     pinSpacing: false,
//     start: "top top",
//     endTrigger: ".last",
//     end: "bottom bottom",
//   });

//   gsap.timeline({
//     scrollTrigger: {
//       trigger: imgContainer,
//       pin: imgContainer,
//       scrub: true,
//       start: "0% 0%",
//     },
//   }).to(img, { transform: "translateZ(2200px)" });
// };
