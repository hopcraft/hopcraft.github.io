webpackJsonp([2],{10:function(a,e,o){"use strict";o.d(e,"a",function(){return t});var t={wallTop:o(6),btnHistory:o(56),arrowLeft:o(57),arrowRight:o(58),winCup:o(59),background:o(5)}},5:function(a,e,o){a.exports=o.p+"assets/background-1c5775f5.png"},54:function(a,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(a){function e(){f.a.loadPage()}var t=o(10),f=o(60);o(1),o(55);var n=o(2),A=[];for(var c in t.a)t.a.hasOwnProperty(c)&&A.push(t.a[c]);var r=new n({resources:[].concat(A),perMinTime:1e3});r.addProgressListener(function(a,e){console.log("loaded",a,e,a/e)}),r.addCompletionListener(function(){a("#o2_loading").remove(),a("#o2_main").removeClass("hide"),e()}),r.start()}.call(e,o(0))},55:function(a,e){},56:function(a,e,o){a.exports=o.p+"assets/btn-history-42c8fc0c.png"},57:function(a,e){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAMAAACaYWzBAAAAgVBMVEUAAABbfI9afI9VeYlJbY5LanlYeo1XeopbfI9bfI9Zeo5Ze41bfI9ae49ae49TfY1afI9ZfI5be45afI9bfI9be49aeo9be45afI9aeo9YeY9bfI9bfI9bfI9bfI5ae49afI9afI9ae45afI5Zeo9afI9afI9ZeJBbe45Ye45bfI9PAM9xAAAAKnRSTlMA8eoKBQMaEuTgJiD1uVsN80XZwLCefHdPPxXMx6eimIFvYlQ80Y02aDSiQlaYAAAAzElEQVQoz3WSWa6DMAxFY2cmCWUsU6G08Mb9L7D5qwiuP491pOsrM2LGbX5czvjyczdFo1LMs9V625YixdcKTDtoecDCRYxNr9kRq+cNMORKprjGM5YqrxGmXyWOWJcNwlfnTrg1EWc8ObNfjK/WiJPZa/9vNqIBHhvwoSc2TPcBzHcmzhvpOltMz5GQeBkA550Tkuoqbx+Kkv5ahHkgQ+STt6sjQojsjsUt15S01YAfkl9tlEZJhNgbwGUgJKaiFByjkg/L+6+SIpx8ATkFDDUYMLgLAAAAAElFTkSuQmCC"},58:function(a,e){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAaCAMAAABrajdMAAAAeFBMVEUAAABbfI9bfI9Ue4pHeIhbfI9bfI9bfI9afI5Ye49Ze45afI9ZfI5WepBYfY1afI9ae49afI9be49bfI9be49bfI5ae45bfI9ZfZBYeo1Ze49aeo1Vd4hbfI9bfI9ZfI5bfI9be49ae49bfI9bfI9be5Bae45bfI+62+qgAAAAKHRSTlMA8eAJBef0qHIdFOswFw3CeV082MqjkIRENSciD69oTf3UvZmKVyxUI7tmoAAAALxJREFUKM9tkUcWwyAMRC1hio17xbjHJfe/YcgWMcv589AIRZkcbRxRbQhlnVPfqg603FMC2KxO4NIEiL1R8N4shBTTgAKHrCBkcQTwDpFGcsDxZYSk+8qhVQkhcf4n3RYizwd0qd6IkGw9jlYR2w468DFp3QmskthbfOo5yMbfIanQhf0nmHFN+oZ581wYujr1531L4OMc+50vLsqnIOVOgSTMsktrWm6uWtFu9PAKQbpyRFOvkiigxQTtHxp0CvCMLqWBAAAAAElFTkSuQmCC"},59:function(a,e,o){a.exports=o.p+"assets/win-cup-bd6a4af4.png"},6:function(a,e,o){a.exports=o.p+"assets/wall-top-69706318.png"},60:function(a,e,o){"use strict";(function(a){function t(){a(".wall-top").attr({src:c.a.wallTop}),a(".month-bar > img").attr({src:c.a.btnHistory}),a(".date-bar > img:first-of-type").attr({src:c.a.arrowLeft}).click(n),a(".date-bar > div").click(f),a(".date-bar > img:last-of-type").attr({src:c.a.arrowRight}).click(A),a(".list .left > img:first-of-type").attr({src:c.a.winCup}),a(".background").attr({src:c.a.background})}function f(){console.log("onClickDate")}function n(){console.log("onClickLeft")}function A(){console.log("onClickRight")}var c=o(10);e.a={loadPage:t}}).call(e,o(0))}},[54]);