;/*FB_PKG_DELIM*/

__d("BehaviorsMixin",[],(function(a,b,c,d,e,f){var g=function(){function a(a){this.$1=a,this.$2=!1}var b=a.prototype;b.enable=function(){this.$2||(this.$2=!0,this.$1.enable())};b.disable=function(){this.$2&&(this.$2=!1,this.$1.disable())};return a}(),h=1;function i(a){a.__BEHAVIOR_ID||(a.__BEHAVIOR_ID=h++);return a.__BEHAVIOR_ID}a={enableBehavior:function(a){this._behaviors||(this._behaviors={});var b=i(a);this._behaviors[b]||(this._behaviors[b]=new g(new a(this)));this._behaviors[b].enable();return this},disableBehavior:function(a){if(this._behaviors){a=i(a);this._behaviors[a]&&this._behaviors[a].disable()}return this},enableBehaviors:function(a){a.forEach(this.enableBehavior,this);return this},destroyBehaviors:function(){if(this._behaviors){for(var a in this._behaviors)this._behaviors[a].disable();this._behaviors={}}},hasBehavior:function(a){return this._behaviors&&i(a)in this._behaviors}};b=a;f["default"]=b}),66);
__d("getVendorPrefixedName",["invariant","ExecutionEnvironment","UserAgent","camelize"],(function(a,b,c,d,e,f,g,h){var i,j={},k=["Webkit","ms","Moz","O"],l=new RegExp("^("+k.join("|")+")"),m=(i||(i=c("ExecutionEnvironment"))).canUseDOM?document.createElement("div").style:{};function n(a){for(var b=0;b<k.length;b++){var c=k[b]+a;if(c in m)return c}return null}function o(a){switch(a){case"lineClamp":return c("UserAgent").isEngine("WebKit >= 315.14.2")||c("UserAgent").isEngine("Blink")?"WebkitLineClamp":null;default:return null}}function a(a){var b=c("camelize")(a);if(j[b]===void 0){var d=b.charAt(0).toUpperCase()+b.slice(1);l.test(d)&&h(0,957,a);(i||(i=c("ExecutionEnvironment"))).canUseDOM?j[b]=b in m?b:n(d):j[b]=o(b)}return j[b]}g["default"]=a}),98);
__d("shield",[],(function(a,b,c,d,e,f){function a(a,b){for(var c=arguments.length,d=new Array(c>2?c-2:0),e=2;e<c;e++)d[e-2]=arguments[e];if(typeof a!=="function")throw new TypeError("shield expects a function as the first argument");return function(){return a.apply(b,d)}}f["default"]=a}),66);
__d("BrowserSupportCore",["getVendorPrefixedName"],(function(a,b,c,d,e,f){"use strict";a={hasCSSAnimations:function(){return!!b("getVendorPrefixedName")("animationName")},hasCSSTransforms:function(){return!!b("getVendorPrefixedName")("transform")},hasCSS3DTransforms:function(){return!!b("getVendorPrefixedName")("perspective")},hasCSSTransitions:function(){return!!b("getVendorPrefixedName")("transition")}};c=a;f["default"]=c}),66);
__d("BrowserSupport",["BrowserSupportCore","ExecutionEnvironment","UserAgent_DEPRECATED","getVendorPrefixedName","memoize"],(function(a,b,c,d,e,f,g){var h,i,j,k=null;function l(){if((j||(j=c("ExecutionEnvironment"))).canUseDOM){k||(k=document.createElement("div"));return k}return null}b=function(a){return c("memoize")(function(){var b=l();return!b?!1:a(b)})};e=b(function(a){a.style.cssText="position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;";return/sticky/.test(a.style.position)});f=b(function(a){return"scrollSnapType"in a.style||"webkitScrollSnapType"in a.style||"msScrollSnapType"in a.style});var m=b(function(a){return"scrollBehavior"in a.style});b=b(function(a){if(!("pointerEvents"in a.style))return!1;a.style.cssText="pointer-events:auto";return a.style.pointerEvents==="auto"});var n=(h=c("memoize"))(function(){return!(d("UserAgent_DEPRECATED").webkit()&&!d("UserAgent_DEPRECATED").chrome()&&d("UserAgent_DEPRECATED").windows())&&"FileList"in window&&"FormData"in window}),o=h(function(){return!!a.blob}),p=h(function(){return(j||(j=c("ExecutionEnvironment"))).canUseDOM&&document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","foreignObject").toString().includes("SVGForeignObject")}),q=h(function(){return!!window.MutationObserver});h=h(function(){var a={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd"},b=c("getVendorPrefixedName")("transition");return a[b]||null});var r=function(){return!!window.CanvasRenderingContext2D};g.hasCSSAnimations=(i=c("BrowserSupportCore")).hasCSSAnimations;g.hasCSSTransforms=i.hasCSSTransforms;g.hasCSS3DTransforms=i.hasCSS3DTransforms;g.hasCSSTransitions=i.hasCSSTransitions;g.hasPositionSticky=e;g.hasScrollSnapPoints=f;g.hasScrollBehavior=m;g.hasPointerEvents=b;g.hasFileAPI=n;g.hasBlobFactory=o;g.hasSVGForeignObject=p;g.hasMutationObserver=q;g.getTransitionEndEvent=h;g.hasCanvasRenderingContext2D=r}),98);