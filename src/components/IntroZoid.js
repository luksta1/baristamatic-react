import zoid from 'zoid';

window.IntroZoidComponent = zoid.create({

  // The html tag used to render my component

  tag: 'baristamatic-app',

  // The url that will be loaded in the iframe or popup, when someone includes my component on their page

  url: 'http://localhost:3000/',
  autoResize: true,
  dimensions: {
    height: '100%',
    width: '100%',
  },
});
