;/*FB_PKG_DELIM*/

__d("usePolarisMediaImpressionLogger_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisMediaImpressionLogger_media",selections:[a,{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inventory_source",storageKey:null}],type:"XDTMediaDict",abstractKey:null}}();e.exports=a}),null);
__d("usePolarisStoriesV3MediaType_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisStoriesV3MediaType_media",selections:[{alias:null,args:null,kind:"ScalarField",name:"media_type",storageKey:null}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisStoriesV3ViewingOwnStory_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisStoriesV3ViewingOwnStory_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null}],type:"XDTUserDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisStoriesV3ViewingOwnStory_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisStoriesV3ViewingOwnStory_viewer",selections:[{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null}],storageKey:null}],type:"XDTViewer",abstractKey:null};e.exports=a}),null);
__d("UFI2UserActivityIdleTimeout",[],(function(a,b,c,d,e,f){"use strict";a=3e4;f["default"]=a}),66);
__d("CometUserActivityMonitor",["ErrorGuard","ExecutionEnvironment","SubscriptionsHandler","UFI2UserActivityIdleTimeout","UserActivity","Visibility"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=[],k=!1,l=(h||(h=c("ExecutionEnvironment"))).canUseDOM&&c("UserActivity").isOnTab()&&c("UserActivity").isActive(c("UFI2UserActivityIdleTimeout"))?"ACTIVE":"INACTIVE",m=[],n;function o(a){k=!0;m.push.apply(m,j);var b=function(){var b=m.shift();(i||(i=c("ErrorGuard"))).applyWithGuard(function(){return b(a)},null,[],{name:"CometUserActivityMonitor"})};while(m.length)b();k=!1}function p(a){var b=l;l=a;b!==a&&o(a)}function a(){return l}d=function(){n==null&&(n=new(c("SubscriptionsHandler"))(),n.addSubscriptions(c("UserActivity").subscribe(function(a,b){a=b.event;if(/^mouse(enter|leave|move|over|out)$/.test(a.type)&&c("UserActivity").isOnTab()===!1)return;p("ACTIVE")}),function(){var a=function(){p("INACTIVE")};window.addEventListener("blur",a,{passive:!0});return{remove:function(){return window.removeEventListener(a,{passive:!0})}}}(),c("Visibility").addListener(c("Visibility").HIDDEN,function(){p("INACTIVE")})))};function b(a){j.push(a);k&&m.push(a);var b=!1;return{remove:function(){if(b)return;var c=j.indexOf(a);c!==-1&&j.splice(c,1);if(k){c=m.indexOf(a);c!==-1&&m.splice(c,1)}b=!0}}}(h||(h=c("ExecutionEnvironment"))).canUseDOM&&d();g.getActivityState=a;g.init=d;g.subscribe=b}),98);
__d("CometVPVDUserActivityMonitor",["CometUserActivityMonitor"],(function(a,b,c,d,e,f,g){"use strict";a={isUserActive:function(){return d("CometUserActivityMonitor").getActivityState()==="ACTIVE"},subscribe:function(a){var b=d("CometUserActivityMonitor").subscribe(function(b){b=b==="ACTIVE";a&&a(b)});return function(){b&&b.remove()}}};g["default"]=a}),98);
__d("isIntersectionObserverEntryVPVDVisible",["intersectionObserverEntryIsIntersecting"],(function(a,b,c,d,e,f,g){"use strict";var h=200,i={height:0};function a(a,b){b===void 0&&(b=h);var d=c("intersectionObserverEntryIsIntersecting")(a);if(d===!1)return!1;d=a.boundingClientRect;var e=a.intersectionRect,f=a.rootBounds;d=d||i;e=e||i;f=f||i;return e.height>=b||e.height>=f.height/2||e.height===d.height||a.intersectionRatio>.95}g["default"]=a}),98);
__d("vpvdConstants",[],(function(a,b,c,d,e,f){"use strict";a=250;b=200;f.DEFAULT_MIN_VISIBLE_TIME_MS=a;f.DEFAULT_MIN_VISIBLE_PX=b}),66);
__d("useVPVDImpression",["CometVPVDUserActivityMonitor","cr:921407","isIntersectionObserverEntryVPVDVisible","react","useVisibilityObserver","vpvdConstants"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback;function a(a){var e=a.isLite,f=a.minVisiblePx;f=f===void 0?d("vpvdConstants").DEFAULT_MIN_VISIBLE_PX:f;var g=a.minVisibleTimeMs,h=g===void 0?d("vpvdConstants").DEFAULT_MIN_VISIBLE_TIME_MS:g,j=a.onVPVDEnd;g=a.onVPVDStart;a=b("cr:921407")();var k=a[0];a=a[1];var l=i(function(a){if(a.visibleDuration<h)return;j(a)},[h,j]),m=e===!0?1:f;f=i(function(a){return c("isIntersectionObserverEntryVPVDVisible")(a,m)},[m]);e=e===!0?null:{thresholdOverride:"EXPENSIVE"};f=babelHelpers["extends"]({activityMonitorOverride:c("CometVPVDUserActivityMonitor"),isEntryInViewport:f},e);e=c("useVisibilityObserver")({onHidden:l,onVisibilityDurationUpdated:a,onVisible:g,options:f});return[e,k]}g["default"]=a}),98);
__d("useNoopDebuggingInfoComponent",[],(function(a,b,c,d,e,f){"use strict";var g=function(){};function a(){return[null,g]}f["default"]=a}),66);
__d("usePolarisMediaImpressionLogger",["CometRelay","InstagramOrganicImpressionFalcoEvent","PolarisNavChain","react","usePolarisMediaImpressionLogger_media.graphql","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).unstable_useMemoCache,k=new Set();function a(a,e,f){var g=j(8),i=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisMediaImpressionLogger_media.graphql"),a),l=i.pk;if(g[0]!==i.user){a=(a=i.user)==null?void 0:a.pk;g[0]=i.user;g[1]=a}else a=g[1];var m=a;g[2]!==l||g[3]!==m||g[4]!==e||g[5]!==i.inventory_source||g[6]!==f?(a=function(){var a;if(l==null||m==null)return;a=String((a=e)!=null?a:"")+"_"+l;if(k.has(a))return;k.add(a);c("InstagramOrganicImpressionFalcoEvent").log(function(){var a;return babelHelpers["extends"]({inventory_source:i.inventory_source,m_pk:l+"_"+m,module_name:String(e),nav_chain:(a=c("PolarisNavChain").getInstance())==null?void 0:a.getNavChainForSend(),pigeon_reserved_keyword_module:String(e)},f)})},g[2]=l,g[3]=m,g[4]=e,g[5]=i.inventory_source,g[6]=f,g[7]=a):a=g[7];return c("useSinglePartialViewImpression")({onImpressionStart:a})}g["default"]=a}),98);
__d("PolarisStoriesV3HighlightsPageVariant",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum").Mirrored(["Gallery","Standalone"]);c=a;f["default"]=c}),66);
__d("PolarisStoriesV3MediaType",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({Image:1,Video:2});c=a;f["default"]=c}),66);
__d("PolarisStoriesV3Root.react",["PolarisStoriesV3Page.react","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisStoriesV3ReelPage.react").__setRef("PolarisStoriesV3Root.react"));function a(a){var b=i(7),d=a.props;a=a.queries;var e=d.routeParams;d=d.routeProps;var f=e.initial_media_id;e=e.username;d=d.user_id;var g;b[0]!==a?(g=a.galleryQuery!=null?{gallery:a.galleryQuery}:{standalone:a.standaloneQuery},b[0]=a,b[1]=g):g=b[1];a=g;b[2]!==f||b[3]!==a||b[4]!==d||b[5]!==e?(g=j.jsx(c("PolarisStoriesV3Page.react"),{children:j.jsx(k,{mediaId:f,query:a,userId:d,username:e})}),b[2]=f,b[3]=a,b[4]=d,b[5]=e,b[6]=g):g=b[6];return g}g["default"]=a}),98);
__d("PolarisStoriesV3NavigationContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({hasNext:!1,hasPrev:!1,loadingNext:!1,loadingPrev:!1,next:c("emptyFunction"),prev:c("emptyFunction")});g["default"]=b}),98);
__d("PolarisStoriesV3LoggingUtils",[],(function(a,b,c,d,e,f){"use strict";function g(a){return parseFloat(a.toFixed(2))}function a(a){return g(a/1e3)}f.roundFloat=g;f.msToS=a}),66);
__d("PolarisStoriesV3LoggingSession",["PolarisStoriesV3LoggingUtils","PolarisStoriesV3MediaType"],(function(a,b,c,d,e,f,g){"use strict";var h=function(){function a(){this.$1=null,this.$2=null,this.$3=0}var b=a.prototype;b.play=function(){this.$1==null&&(this.$1=Date.now());var a=this.$2;a!=null&&(this.$3+=Date.now()-a,this.$2=null)};b.pause=function(){this.$2==null&&(this.$2=Date.now())};b.getPauseDuration=function(){var a=this.$2;return a!=null?this.$3+Date.now()-a:this.$3};b.getTimeElapsed=function(){var a=this.$1,b=this.getPauseDuration();a=a!=null?Date.now()-a:0;return a-b};return a}();a=function(){function a(){this.$1=null,this.$2=null,this.$3=0,this.$4=0,this.$5=0,this.$6=new h(),this.$7=new h()}var b=a.prototype;b.startReel=function(a){if(this.$1===a)return;this.$1=a;this.$2=null;this.$5++;this.$6=new h();this.$6.play()};b.startMedia=function(a,b){if(this.$2===a)return;this.$2=a;switch(b){case c("PolarisStoriesV3MediaType").Image:this.$3++;break;case c("PolarisStoriesV3MediaType").Video:this.$4++;break}this.$7=new h();this.$7.play()};b.pause=function(){this.$6.pause(),this.$7.pause()};b.play=function(){this.$6.play(),this.$7.play()};b.getPhotosConsumed=function(){return this.$3};b.getVideosConsumed=function(){return this.$4};b.getViewerSessionMediaConsumed=function(){return this.$3+this.$4};b.getViewerSessionReelsConsumed=function(){return this.$5};b.getReelPauseDuration=function(){return d("PolarisStoriesV3LoggingUtils").msToS(this.$6.getPauseDuration())};b.getReelTimeElapsed=function(){return d("PolarisStoriesV3LoggingUtils").msToS(this.$6.getTimeElapsed())};b.getMediaPauseDuration=function(){return d("PolarisStoriesV3LoggingUtils").msToS(this.$6.getPauseDuration())};b.getMediaTimeElapsed=function(){return d("PolarisStoriesV3LoggingUtils").msToS(this.$6.getTimeElapsed())};b.getMediaTimeRemaining=function(a){return Math.max(0,d("PolarisStoriesV3LoggingUtils").roundFloat(a-this.getMediaTimeElapsed()))};return a}();g["default"]=a}),98);
__d("PolarisStoriesV3ViewerLoggingContext",["PolarisStoriesV3ContainerModule","PolarisStoriesV3LoggingSession","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({getAction:c("emptyFunction").thatReturns("unknown"),getTrayPosition:c("emptyFunction").thatReturns(-1),hasLoggedReelPlaybackEntry:c("emptyFunction").thatReturnsFalse,initialNewReelCount:-1,initialViewedReelCount:-1,loggingSession:new(c("PolarisStoriesV3LoggingSession"))(),module:c("PolarisStoriesV3ContainerModule").Unknown,previewImpressions:new Set(),setAction:c("emptyFunction"),setLoggedReelPlaybackEntry:c("emptyFunction"),traySessionId:"",viewerSessionId:""});g["default"]=b}),98);
__d("PolarisStoriesV3HighlightsRoot.react",["PolarisStoriesV3HighlightsPageVariant","PolarisStoriesV3Page.react","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisStoriesV3HighlightsPage.react").__setRef("PolarisStoriesV3HighlightsRoot.react"));function a(a){var b,d=i(8),e=a.extraProps,f=a.props;a=a.queries;f=f.routeProps;f=f.highlight_id;a=a.query;b=(b=e==null?void 0:e.initialHighlightId)!=null?b:f;if(d[0]!==e){var g;g=(g=c("PolarisStoriesV3HighlightsPageVariant").cast(e==null?void 0:e.variant))!=null?g:c("PolarisStoriesV3HighlightsPageVariant").Standalone;d[0]=e;d[1]=g}else g=d[1];g=g;e=e==null?void 0:e.highlightIds;var h;d[2]!==f||d[3]!==e||d[4]!==b||d[5]!==a||d[6]!==g?(h=j.jsx(c("PolarisStoriesV3Page.react"),{children:j.jsx(k,{highlightId:f,highlightIds:e,initialHighlightId:b,query:a,variant:g})}),d[2]=f,d[3]=e,d[4]=b,d[5]=a,d[6]=g,d[7]=h):h=d[7];return h}g["default"]=a}),98);
__d("usePolarisStoriesV3MediaType",["CometRelay","PolarisStoriesV3MediaType","err","react","usePolarisStoriesV3MediaType_media.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).unstable_useMemoCache;function a(a){var e=j(2);a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisStoriesV3MediaType_media.graphql"),a);var f;e[0]!==a.media_type?(f=c("PolarisStoriesV3MediaType").cast(a.media_type),e[0]=a.media_type,e[1]=f):f=e[1];a=f;if(a==null)throw c("err")("Unsupported story media_type");return a}g["default"]=a}),98);
__d("usePolarisStoriesV3NavigationContext",["PolarisStoriesV3NavigationContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("PolarisStoriesV3NavigationContext"))}g["default"]=a}),98);
__d("usePolarisStoriesV3ViewerLoggingContext",["PolarisStoriesV3ViewerLoggingContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("PolarisStoriesV3ViewerLoggingContext"))}g["default"]=a}),98);
__d("usePolarisStoriesV3ViewingOwnStory",["CometRelay","usePolarisStoriesV3ViewingOwnStory_user.graphql","usePolarisStoriesV3ViewingOwnStory_viewer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a,c){a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisStoriesV3ViewingOwnStory_user.graphql"),a);c=d("CometRelay").useFragment(i!==void 0?i:i=b("usePolarisStoriesV3ViewingOwnStory_viewer.graphql"),c);return a.pk===((a=c.user)==null?void 0:a.pk)}g["default"]=a}),98);