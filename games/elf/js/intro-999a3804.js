webpackJsonp([1],{43:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(t){function r(){o.a.loadPage(),o.a.getScoreList()}var n=e(9),o=e(50);e(1),e(44);var i=e(2),a=[];for(var c in n.a)n.a.hasOwnProperty(c)&&a.push(n.a[c]);var u=new i({resources:[].concat(a),perMinTime:1e3});u.addProgressListener(function(t,r){console.log("loaded",t,r,t/r)}),u.addCompletionListener(function(){t("#o2_loading").remove(),t("#o2_main").removeClass("hide"),r()}),u.start()}.call(r,e(0))},44:function(t,r){},45:function(t,r,e){t.exports=e.p+"assets/rule-bb6eb515.png"},46:function(t,r,e){t.exports=e.p+"assets/btn-history-2d856442.png"},47:function(t,r,e){t.exports=e.p+"assets/btn-start-45c2f510.png"},48:function(t,r,e){t.exports=e.p+"assets/my-score-4083835c.png"},49:function(t,r,e){t.exports=e.p+"assets/score-board-14fd84ca.png"},5:function(t,r,e){t.exports=e.p+"assets/background-1c5775f5.png"},50:function(t,r,e){"use strict";(function(t){function n(){t(".rule").attr({src:p.a.rule}),t(".btn-start").attr({src:p.a.btnStart}).click(a),t(".btn-score").attr({src:p.a.btnScore}).click(c),t(".score-board").attr({src:p.a.scoreBoard}),t(".btn-history").attr({src:p.a.btnHistory}).click(u),t(".background").attr({src:p.a.background})}function o(){return i.apply(this,arguments)}function i(){return i=h()(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("加载排名列表");case 1:case"end":return t.stop()}},t)})),i.apply(this,arguments)}function a(){console.log("onClickStart")}function c(){console.log("onClickMyScore")}function u(){console.log("onClickHistory")}var s=e(51),f=e.n(s),l=e(53),h=e.n(l),p=e(9);r.a={loadPage:n,getScoreList:o}}).call(r,e(0))},51:function(t,r,e){t.exports=e(52)},52:function(t,r,e){var n=function(t){"use strict";function r(t,r,e,o){var i=r&&r.prototype instanceof n?r:n,a=Object.create(i.prototype),c=new h(o||[]);return a._invoke=u(t,e,c),a}function e(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function n(){}function o(){}function i(){}function a(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function c(t){function r(n,o,i,a){var c=e(t[n],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&g.call(s,"__await")?Promise.resolve(s.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}function n(t,e){function n(){return new Promise(function(n,o){r(t,e,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=n}function u(t,r,n){var o=L;return function(i,a){if(o===k)throw new Error("Generator is already running");if(o===_){if("throw"===i)throw a;return y()}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=s(c,n);if(u){if(u===P)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===L)throw o=_,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=k;var f=e(t,r,n);if("normal"===f.type){if(o=n.done?_:E,f.arg===P)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=_,n.method="throw",n.arg=f.arg)}}}function s(t,r){var n=t.iterator[r.method];if(n===d){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=d,s(t,r),"throw"===r.method))return P;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return P}var o=e(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,P;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=d),r.delegate=null,P):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,P)}function f(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function l(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function p(t){if(t){var r=t[w];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(g.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=d,r.done=!0,r};return n.next=n}}return{next:y}}function y(){return{value:d,done:!0}}var d,v=Object.prototype,g=v.hasOwnProperty,m="function"==typeof Symbol?Symbol:{},w=m.iterator||"@@iterator",b=m.asyncIterator||"@@asyncIterator",x=m.toStringTag||"@@toStringTag";t.wrap=r;var L="suspendedStart",E="suspendedYield",k="executing",_="completed",P={},S={};S[w]=function(){return this};var O=Object.getPrototypeOf,j=O&&O(O(p([])));j&&j!==v&&g.call(j,w)&&(S=j);var G=i.prototype=n.prototype=Object.create(S);return o.prototype=G.constructor=i,i.constructor=o,i[x]=o.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===o||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(G),t},t.awrap=function(t){return{__await:t}},a(c.prototype),c.prototype[b]=function(){return this},t.AsyncIterator=c,t.async=function(e,n,o,i){var a=new c(r(e,n,o,i));return t.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},a(G),G[x]="Generator",G[w]=function(){return this},G.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=p,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.method="next",this.arg=d,this.tryEntries.forEach(l),!t)for(var r in this)"t"===r.charAt(0)&&g.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=d)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=d),!!n}if(this.done)throw t;for(var e=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),c=g.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,P):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),P},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),l(e),P}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;l(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:p(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=d),P}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},53:function(t,r){function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise(function(o,i){function a(t){e(u,o,i,a,c,"next",t)}function c(t){e(u,o,i,a,c,"throw",t)}var u=t.apply(r,n);a(void 0)})}}t.exports=n},9:function(t,r,e){"use strict";e.d(r,"a",function(){return n});var n={rule:e(45),background:e(5),btnHistory:e(46),btnStart:e(47),btnScore:e(48),scoreBoard:e(49)}}},[43]);