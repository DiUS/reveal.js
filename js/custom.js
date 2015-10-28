Reveal.initialize({

  width: 960,
  height: 700,
  margin: 0.03,
  minScale: 0.2,
  maxScale: 1.5,

  controls: false,
  progress: true,
  history: true,
  center: false,
  transition: 'slide', // none/fade/slide/convex/concave/zoom
  transitionSpeed: 'fast',

  dependencies: [
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/zoom-js/zoom.js', async: true },
    { src: 'plugin/notes/notes.js', async: true }
  ]
});

// https://gist.github.com/jbrown123/9445384733c9f289d6e8
function SlideChangedHandler (event) {
  // first time called, remember what the default theme is
  if (!SlideChangedHandler.defaultTheme)
    SlideChangedHandler.defaultTheme = document.getElementById('theme').getAttribute('href');

  // is this slide part of a verticle stack?  check for parent theme override & apply to this slide
  if (!event.currentSlide.dataset.theme && event.currentSlide.parentNode.nodeName == 'SECTION' && event.currentSlide.parentNode.dataset.theme)
    event.currentSlide.dataset.theme = event.currentSlide.parentNode.dataset.theme;

  // if this slide has a data-theme attribute, set it as the theme
  if (event.currentSlide.dataset.theme)
    document.getElementById('theme').setAttribute('href','css/theme/' + event.currentSlide.dataset.theme + '.css');

  // if the previous slide had a custom theme and this slide does not (hence the else), reset the theme
  else if (event.previousSlide && event.previousSlide.dataset.theme)
    document.getElementById('theme').setAttribute('href', SlideChangedHandler.defaultTheme);
}

Reveal.addEventListener('slidechanged', SlideChangedHandler);
Reveal.addEventListener('ready', SlideChangedHandler);
