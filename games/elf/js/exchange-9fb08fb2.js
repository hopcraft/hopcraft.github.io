webpackJsonp([4],[,,,,,,,function(n,t,o){"use strict";o.d(t,"a",function(){return e});var e={background:o(18),frontground:o(19),rule:o(20),product:o(21),btnSave:o(22)}},,,,,,,,,function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(n){function t(){r.a.loadPage()}var e=o(7),r=o(23);o(1),o(17);var a=o(2),c=[];for(var s in e.a)e.a.hasOwnProperty(s)&&c.push(e.a[s]);var u=new a({resources:[].concat(c),perMinTime:1e3});u.addProgressListener(function(n,t){console.log("loaded",n,t,n/t)}),u.addCompletionListener(function(){n("#o2_loading").remove(),n("#o2_main").removeClass("hide"),t()}),u.start()}.call(t,o(0))},function(n,t){},function(n,t,o){n.exports=o.p+"assets/background-ed65f680.png"},function(n,t,o){n.exports=o.p+"assets/frontground-873e897e.png"},function(n,t,o){n.exports=o.p+"assets/rule-4a46bb94.png"},function(n,t,o){n.exports=o.p+"assets/product-14c59dde.png"},function(n,t,o){n.exports=o.p+"assets/btn-save-0d91c27f.png"},function(n,t,o){"use strict";(function(n){function e(){n(".background").attr({src:a.a.background}),n(".content-background").attr({src:a.a.frontground}),n(".rule").attr({src:a.a.rule}),n(".obtain > img").attr({src:a.a.product}),n(".btn-save").attr({src:a.a.btnSave}).click(r)}function r(){console.log("onClickSave")}var a=o(7);t.a={loadPage:e}}).call(t,o(0))}],[16]);