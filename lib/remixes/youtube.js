'use strict';

// Generate Youtube iframe
var SERVICE_YOUTUBE = /(youtube.com(?:\/#)?\/watch\/[t=]?)|(youtu\.be\/[A-Z0-9-_]+[t=]?)/i;

exports.process = function (media, remix, options) {
  if (!remix.isMatched && media.match(SERVICE_YOUTUBE)) {
    var youtubeId = '';
    var url = media.split('/');
    

    try {
      remix.isMatched = true;
      if (media.indexOf('youtu.be') > -1) {
        youtubeId = url[url.length - 1];
      } else {
        youtubeId = url[url.length - 1].split('v=')[1].split('&')[0];
      }

      remix.result = '<div class="object-wrapper"><iframe width="' + options.width + '" height="' +
        options.height + '" src="//www.youtube.com/embed/' + youtubeId +
        '?wmode=transparent&start=' + options.startTime + '" frameborder="0" allowfullscreen></iframe></div>';

      return remix;

    } catch(err) {
      return remix;
    }
  }

  return remix;
};
