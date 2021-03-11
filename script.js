import './style.scss';
// import ScrollMagic from 'scrollmagic';
import $ from 'jquery';
// import ScrollReveal from 'scrollreveal';

window.location = '#start';

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
// const controller = new ScrollMagic.Controller();
// new ScrollMagic.Scene({
//   triggerElement: '#trigger1',
//   triggerHook: 0.9, // show, when scrolled 10% into view
//   duration: '80%', // hide 10% before exiting view (80% + 10% from bottom)
//   offset: 50, // move trigger to center of element
// })
//   .setClassToggle('#reveal1', 'visible') // add class to reveal
//   .addTo(controller);

//= ====================================//
//= ============= PROJECTS  =============//
//= ====================================//
//= ====================================//
$(document).ready(() => {
  let zindex = 10;

  $('div.card').click(function (e) {
    e.preventDefault();

    let isShowing = false;

    if ($(this).hasClass('show')) {
      isShowing = true;
    }

    if ($('div.cards').hasClass('showing')) {
      // a card is already in view
      $('div.card.show').removeClass('show');

      if (isShowing) {
        $('button').click(() => {
          console.log('asupprimer');
          $('gitkeylog').attr(
            'href',
            'https://github.com/e-sens-ciel/keylogger',
          );
        });
        // this card was showing - reset the grid
        $('div.cards').removeClass('showing');
      } else {
        // this card isn't showing - get in with it
        $(this).css({ zIndex: zindex }).addClass('show');
      }

      zindex++;
    } else {
      // no cards in view
      $('div.cards').addClass('showing');
      $(this).css({ zIndex: zindex }).addClass('show');

      zindex++;
    }
  });
});

// $(document).ready(() => {
//   $('btn').click(() => {
//     $('gitkeylog').attr('href', 'https://github.com/e-sens-ciel/keylogger');
//   });
// });
