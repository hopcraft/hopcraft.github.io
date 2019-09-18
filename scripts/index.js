// if (window.location !== window.top.location || window.location.href && !window.location.href.match(/https:\/\/hypersca\.pe|neave\.local|192\.168/)) { top.location.href = 'https://hopcraft.github.io'; }
// (function (i, s, o, g, r, a, m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'); (function () {
//   var id = 'UA-56095-22', clientId = 'ga:clientId'; if (window.localStorage) { ga('create', id, 'auto', { 'storage': 'none', 'clientId': localStorage.getItem(clientId) }); ga(function (tracker) { localStorage.setItem(clientId, tracker.get('clientId')); }); } else { ga('create', id, 'auto'); }
//   ga('set', 'anonymizeIp', true); ga('send', 'pageview');
// }()); function trackEvent(category, action, label, value) { ga('send', 'event', category, action, label, value); }
// window.onerror = function (message, file, line) {
//   if (message) { trackEvent('Error', message, file && line ? ('[' + file + ':' + line + ']') : '', true); }
//   return false;
// }; 

window.requestAnimationFrame = window.requestAnimationFrame 
  || window.webkitRequestAnimationFrame 
  || window.mozRequestAnimationFrame 
  || window.msRequestAnimationFrame 
  || function (callback) { 
    setTimeout(callback, 1000 / 60); 
  }; 

function fallbackToGIF(video, gif) { 
  var img = new Image(); 
  img.src = gif; 
  if (img) { 
    video.parentNode.replaceChild(img, video); 
  } 
}

(function () {
  'use strict'; 
  var meteors = [], scale = 1; 
  function Meteor() { 
    this.element = document.createElement('div'); 
    this.element.classList.add('meteor'); 
    this.x = 0; 
    this.y = 0; 
    this.scale = 1; 
    this.speed = 0; 
    this.reset(); 
    this.y = Math.random() * -75; 
    this.move(); 
  }
  Meteor.prototype.reset = function () { 
    this.x = Math.random() * (window.innerWidth || 1000); 
    this.y = 0; 
    this.scale = Math.random() * 0.6 + 0.4; 
    this.speed = this.scale * this.scale * 2.5; 
  }; 

  Meteor.prototype.move = function () { 
    this.y += this.speed; 
    var transform = 'translate3d(' + this.x + 'px,' + 
      (this.y - 198) + 'px,0) scale(' + this.scale * scale + ')';
    this.element.style.webkitTransform = transform
    this.element.style.transform = transform
    var opacity = 1.4 - this.y / 340; 
    this.element.style.opacity = opacity; 
    if (opacity <= 0) { 
      this.reset(); 
    } 
  }; 
  
  function update() {
    for (var i = meteors.length; i--;) { 
      meteors[i].move(); 
    }
    requestAnimationFrame(update);
  }

  function onClickLink(event) {
    var link = event.target.dataset.link; 
    if (event.target.closest) { 
      link = event.target.closest('a').dataset.link; 
    }
    trackEvent('Link', link);
  }
  function init() {
    var links = document.querySelectorAll('a[data-link]'); 
    for (var i = links.length; i--;) { 
      links[i].addEventListener('click', onClickLink, true); 
    }
    var container = document.querySelector('.meteors'); 
    var smallWidth = window.screen.availWidth <= 812; 
    var total = smallWidth ? 15 : 25; 
    scale = smallWidth ? 0.8 : 1; 

    for (i = total; i--;) { 
      var meteor = new Meteor(); 
      meteors.push(meteor); container.appendChild(meteor.element); 
    }

    update();
  }
  document.addEventListener('DOMContentLoaded', init, false);
})();