;/*FB_PKG_DELIM*/

__d("IGDSChevronRightPanoFilledIcon.react",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(3),d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx("polyline",{fill:"none",points:"8.351 3.354 17 12 8.351 20.646",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3"}),b[0]=d):d=b[0];b[1]!==a?(d=j.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:d})),b[1]=a,b[2]=d):d=b[2];return d}b=j.memo(a);g["default"]=b}),98);
__d("PolarisStoriesV3PauseReason",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum").Mirrored(["None","Hidden","LongPress","MediaOverlayCTA","PauseButton","Press","Reply","Sticker"]);c=a;f["default"]=c}),66);
__d("PolarisStoriesV3PlayingState",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum").Mirrored(["NotStarted","Playing","Stalling","Paused","Ended"]);c=a;f["default"]=c}),66);
__d("PolarisStoriesV3PlayerControllerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("usePolarisStoriesV3PlayerController",["PolarisStoriesV3PlayerControllerContext","err","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){var a=i(c("PolarisStoriesV3PlayerControllerContext"));if(a==null)throw c("err")("PolarisStoriesV3PlayerControllerContext is empty");return a}g["default"]=a}),98);
__d("usePolarisStoriesV3PausePlayer",["PolarisStoriesV3PlayingState","react","usePolarisStoriesV3PlayerController"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.unstable_useMemoCache;function a(a){var b=j(4),d=c("usePolarisStoriesV3PlayerController")(),e,f;b[0]!==d||b[1]!==a?(e=function(){var b=d.getPlayingState();if(b===c("PolarisStoriesV3PlayingState").Playing){d.pause(a);return function(){d.play()}}},f=[d,a],b[0]=d,b[1]=a,b[2]=e,b[3]=f):(e=b[2],f=b[3]);i(e,f)}g["default"]=a}),98);