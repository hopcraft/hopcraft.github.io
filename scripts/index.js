
window.requestAnimationFrame = window.requestAnimationFrame 
  || window.webkitRequestAnimationFrame 
  || window.mozRequestAnimationFrame 
  || window.msRequestAnimationFrame 
  || function (callback) { 
    setTimeout(callback, 1000 / 60)
  };

(function () {
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
    var transform = 'translate3d(' + this.x + 'px,' + (this.y - 198) + 'px,0) scale(' + this.scale * scale + ')';
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

  function init() {
    var container = document.querySelector('.meteors'); 
    var smallWidth = window.screen.availWidth <= 812; 
    var total = smallWidth ? 15 : 25; 
    scale = smallWidth ? 0.8 : 1; 

    for (var i = total; i--;) { 
      var meteor = new Meteor(); 
      meteors.push(meteor); container.appendChild(meteor.element); 
    }

    update();
  }
  document.addEventListener('DOMContentLoaded', init, false);
})();