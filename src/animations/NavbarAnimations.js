import { gsap, TweenMax } from "gsap";

const dropDownMenu = async () => {
  const tl = gsap.timeline({ duration: 0.5 });
  tl.from(".dropDownMenu", {
    x: 420,
    ease: "circ",
  });
  tl.from(".li-link", {
    opacity: 0.2,
  });
};
const dropDownMenuOut = async () => {
  const tl = gsap.timeline({ duration: 1 });
  tl.from(".li-link", {
    opacity: 0.5,
  });
  tl.from(".dropDownMenu", {
    y: 200,
    ease: "circ",
  });
};
export { dropDownMenu, dropDownMenuOut };
