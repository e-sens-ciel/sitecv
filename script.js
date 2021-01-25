import './style.scss';
/* Code for the signature. */
import ScrollMagic from 'scrollmagic';
// import $ from 'jquery';
// SVG ANIMATION
function setTextAnimation(
  delay,
  duration,
  strokeWidth,
  timingFunction,
  strokeColor,
  repeat,
) {
  const paths = document.querySelectorAll('path');
  const mode = repeat ? 'infinite' : 'forwards';
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const length = path.getTotalLength();
    path.style['stroke-dashoffset'] = `${length}px`;
    path.style['stroke-dasharray'] = `${length}px`;
    path.style['stroke-width'] = `${strokeWidth}px`;
    path.style.stroke = `${strokeColor}`;
    path.style.animation = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
    path.style['animation-delay'] = `${i * delay}s`;
  }
}
setTextAnimation(0.1, 3.5, 2, 'linear', '#ffffff', true);
// END OF SVG ANIMATION

// Images animation
const controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: '#trigger1',
  triggerHook: 0.9, // show, when scrolled 10% into view
  duration: '80%', // hide 10% before exiting view (80% + 10% from bottom)
  offset: 50, // move trigger to center of element
})
  .setClassToggle('#reveal1', 'visible') // add class to reveal
  .addTo(controller);

// Skills section
// $(() => {
//   $('progress').each(function () {
//     const max = $(this).val();
//     $(this)
//       .val(0)
//       .animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
//   });
// });
