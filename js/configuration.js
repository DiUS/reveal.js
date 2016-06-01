Reveal.initialize({

  width: 960,
  height: 700,
  margin: 0.1,
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
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'plugin/zoom-js/zoom.js', async: true },
    { src: 'plugin/notes/notes.js', async: true }
  ]
});
