;/*FB_PKG_DELIM*/

__d("CometDefaultKeyCommands",["fbt","CometKeys","gkx"],(function(a,b,c,d,e,f,g,h){"use strict";a=Object.freeze(babelHelpers["extends"]({global:{label:h._("__JHASH__vTbx5ula3Ub__JHASH__"),shortcuts:{search:{command:{key:c("CometKeys").SLASH},description:h._("__JHASH__65GAtmpimeL__JHASH__"),singleCharDescription:h._("__JHASH__HqO0KsGMlbJ__JHASH__")},toggleDarkMode:{command:{alt:!0,key:c("CometKeys").M},description:h._("__JHASH__DFgslFbdJR5__JHASH__"),isHiddenCommand:c("gkx")("22802")?void 0:!0},toggleNub:{command:{key:c("CometKeys").QUESTION,shift:!0},description:h._("__JHASH__w4u2XmGo_LN__JHASH__")},toggleNubFunctionKey:{command:{key:c("CometKeys").F1},description:h._("__JHASH__w4u2XmGo_LN__JHASH__")}}},groups:{label:h._("__JHASH__5ycXpLiowDK__JHASH__"),shortcuts:{groupSearch:{command:{command:!0,key:c("CometKeys").SLASH},description:h._("__JHASH__UwVHz4hi5qC__JHASH__"),order:6},newGroupEvent:{command:{key:c("CometKeys").E},description:h._("__JHASH__bXPAFcKoHVs__JHASH__"),order:1,singleCharDescription:h._("__JHASH__B9NoOgWqa7a__JHASH__")},viewNextPinnedGroup:{command:{alt:!0,key:c("CometKeys").DOWN},description:h._("__JHASH__ryvFG_XPxff__JHASH__"),order:5},viewNextVideo:{command:{alt:!0,key:c("CometKeys").RIGHT},description:h._("__JHASH__Co4R3_i3LJX__JHASH__"),order:3},viewPreviousPinnedGroup:{command:{alt:!0,key:c("CometKeys").UP},description:h._("__JHASH__ghiGJdiPxiO__JHASH__"),order:4},viewPreviousVideo:{command:{alt:!0,key:c("CometKeys").LEFT},description:h._("__JHASH___UWyiXo4b1A__JHASH__"),order:2}}},newsfeed:{label:h._("__JHASH__3bhd46OOtgQ__JHASH__"),shortcuts:{commentStory:{command:{key:c("CometKeys").C},description:h._("__JHASH__S60IOgnbCS6__JHASH__"),singleCharDescription:h._("__JHASH__8eG9xxpUBK___JHASH__")},likeStory:{command:{key:c("CometKeys").L},description:h._("__JHASH__DX2kjgJe1lw__JHASH__"),singleCharDescription:h._("__JHASH__qzjRCdVl8UB__JHASH__")},newPost:{command:{key:c("CometKeys").P},description:h._("__JHASH__gCb4Qn8jJYV__JHASH__"),singleCharDescription:h._("__JHASH__rWgYV326oik__JHASH__")},openAttachment:{command:{key:c("CometKeys").O},description:h._("__JHASH__PENXVObp6HH__JHASH__"),shouldStopPropagation:!1,singleCharDescription:h._("__JHASH__9ZqYYIUi2ux__JHASH__")},scrollNext:{command:{key:c("CometKeys").J},description:h._("__JHASH__WOloUQmdmos__JHASH__"),singleCharDescription:h._("__JHASH__pjB1urhcDtz__JHASH__")},scrollPrevious:{command:{key:c("CometKeys").K},description:h._("__JHASH__8Xw825Irnyt__JHASH__"),singleCharDescription:h._("__JHASH__X1clBpl2A59__JHASH__")},searchContacts:{command:{key:c("CometKeys").Q},description:h._("__JHASH__tNIUJ6lgcTQ__JHASH__"),singleCharDescription:h._("__JHASH__ZOEvffglsxE__JHASH__")},seeMore:{command:{key:c("CometKeys").ENTER},description:h._("__JHASH__xSvc24O-mfg__JHASH__"),singleCharDescription:h._("__JHASH__2JfkN_FFXsH__JHASH__")},shareStory:{command:{key:c("CometKeys").S},description:h._("__JHASH__B_iW89OoYd8__JHASH__"),singleCharDescription:h._("__JHASH__Z6OsPJdfk0___JHASH__")}}},photoViewer:{label:h._("__JHASH__BXWDUC-L-Ri__JHASH__"),shortcuts:{fullscreen:{command:{key:c("CometKeys").F},description:h._("__JHASH__B9xS9GGbzeo__JHASH__"),singleCharDescription:h._("__JHASH__3gvTTPZFuR6__JHASH__")},like:{command:{key:c("CometKeys").L},description:h._("__JHASH__fPWFoO_4sHL__JHASH__"),singleCharDescription:h._("__JHASH__6boa--Dsc86__JHASH__")},viewNext:{command:{key:c("CometKeys").K},description:h._("__JHASH__Cwg8ChuUCza__JHASH__"),singleCharDescription:h._("__JHASH__D5hbXD4Qvlf__JHASH__")},viewPrevious:{command:{key:c("CometKeys").J},description:h._("__JHASH__5PUjENdCJD1__JHASH__"),singleCharDescription:h._("__JHASH__ap7P4LUMQ-g__JHASH__")}}},search:{label:h._("__JHASH__E00LcbSnfXh__JHASH__"),shortcuts:{scrollNextResult:{command:{key:c("CometKeys").J},description:h._("__JHASH__bmPeLBy-eKQ__JHASH__"),singleCharDescription:h._("__JHASH___N3WTKcqt3k__JHASH__")},scrollPreviousResult:{command:{key:c("CometKeys").K},description:h._("__JHASH__66y7Uf7htWH__JHASH__"),singleCharDescription:h._("__JHASH__G1e3rdFAKxh__JHASH__")}}}},c("gkx")("22803")&&{chats:{label:h._("__JHASH__er63PmpxxU9__JHASH__"),shortcuts:{forwardMessage:{command:{key:c("CometKeys").F},description:h._("__JHASH__BoPi-Cj1ZgB__JHASH__"),order:3,singleCharDescription:h._("__JHASH__sAzlvATWOJK__JHASH__")},jumpToChatList:{command:{alt:!0,key:c("CometKeys").C},description:h._("__JHASH__yEELQaU6ZJv__JHASH__"),order:6,singleCharDescription:h._("__JHASH__ruOmPk73z78__JHASH__"),triggerFromInputs:!0},likeMessage:{command:{key:c("CometKeys").L},description:h._("__JHASH__92Cxpl6anqS__JHASH__"),order:1,singleCharDescription:h._("__JHASH__9GZYcHNSXWM__JHASH__")},removeMessage:{command:{key:c("CometKeys").X},description:h._("__JHASH__r-tRfkmegvn__JHASH__"),order:4,singleCharDescription:h._("__JHASH__rCo38Z3GsLf__JHASH__")},replyToMessage:{command:{key:c("CometKeys").R},description:h._("__JHASH__2livKuCsmS6__JHASH__"),order:2,singleCharDescription:h._("__JHASH__HlXWG9dX1DN__JHASH__")},writeMessageToCurrentChat:{command:{alt:!0,key:c("CometKeys").W},description:h._("__JHASH__260-EYyZSfn__JHASH__"),order:5,singleCharDescription:h._("__JHASH__98yCRWkkRKQ__JHASH__"),triggerFromInputs:!0}}}}));b=a;a;g["default"]=b}),98);
__d("cometGetKeyCommandConfig",["fbt","cr:2011405","cr:2011406","gkx","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i={command:null,description:h._("__JHASH__b304p5m3LLr__JHASH__"),handler:function(){return void 0},isHiddenCommand:!0};function j(a,b,d,e,f){if(e==null){c("recoverableViolation")(f,"comet_ax");return i}if(!Object.prototype.hasOwnProperty.call(e,a)||!Object.prototype.hasOwnProperty.call(e[a].shortcuts,b)){c("recoverableViolation")("Missing default key command config for "+a+" and "+b,"comet_ax");return i}f=e[a].shortcuts[b];e=f.command;var g=f.description;return e!=null&&g!=null?{command:e,commandID:b,description:g,groupID:a,handler:d,isHiddenCommand:f.isHiddenCommand,singleCharDescription:f.singleCharDescription,triggerFromInputs:f.triggerFromInputs}:i}function a(a,c,d){return j(a,c,d,b("cr:2011405"),"getCometKeyCommandConfig should only be used in Comet")}function d(a,d,e){var f=c("gkx")("20836")?b("cr:2011406"):b("cr:2011405");return j(a,d,e,f,"Reached unreachable code")}g.getKeyCommandConfig=j;g.getCometKeyCommandConfig=a;g.getCometAndGeminiKeyCommandConfig=d}),98);
__d("SubscriptionsHandler",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function i(a){return a.remove||a.reset||a.unsubscribe||a.cancel||a.dispose}function j(a){i(a).call(a)}a=function(){function a(){this.$1=[]}var b=a.prototype;b.addSubscriptions=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];b.every(i)||h(0,3659);this.$1!=null?this.$1=this.$1.concat(b):b.forEach(j)};b.engage=function(){this.$1==null&&(this.$1=[])};b.release=function(){this.$1!=null&&(this.$1.forEach(j),this.$1=null)};b.releaseOne=function(a){var b=this.$1;if(b==null)return;var c=b.indexOf(a);c!==-1&&(j(a),b.splice(c,1),b.length===0&&(this.$1=null))};return a}();g["default"]=a}),98);
__d("UFI2UserActivityIdleTimeout",[],(function(a,b,c,d,e,f){"use strict";a=3e4;f["default"]=a}),66);
__d("CometUserActivityMonitor",["ErrorGuard","ExecutionEnvironment","SubscriptionsHandler","UFI2UserActivityIdleTimeout","UserActivity","Visibility"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=[],k=!1,l=(h||(h=c("ExecutionEnvironment"))).canUseDOM&&c("UserActivity").isOnTab()&&c("UserActivity").isActive(c("UFI2UserActivityIdleTimeout"))?"ACTIVE":"INACTIVE",m=[],n;function o(a){k=!0;m.push.apply(m,j);var b=function(){var b=m.shift();(i||(i=c("ErrorGuard"))).applyWithGuard(function(){return b(a)},null,[],{name:"CometUserActivityMonitor"})};while(m.length)b();k=!1}function p(a){var b=l;l=a;b!==a&&o(a)}function a(){return l}d=function(){n==null&&(n=new(c("SubscriptionsHandler"))(),n.addSubscriptions(c("UserActivity").subscribe(function(a,b){a=b.event;if(/^mouse(enter|leave|move|over|out)$/.test(a.type)&&c("UserActivity").isOnTab()===!1)return;p("ACTIVE")}),function(){var a=function(){p("INACTIVE")};window.addEventListener("blur",a,{passive:!0});return{remove:function(){return window.removeEventListener(a,{passive:!0})}}}(),c("Visibility").addListener(c("Visibility").HIDDEN,function(){p("INACTIVE")})))};function b(a){j.push(a);k&&m.push(a);var b=!1;return{remove:function(){if(b)return;var c=j.indexOf(a);c!==-1&&j.splice(c,1);if(k){c=m.indexOf(a);c!==-1&&m.splice(c,1)}b=!0}}}(h||(h=c("ExecutionEnvironment"))).canUseDOM&&d();g.getActivityState=a;g.init=d;g.subscribe=b}),98);
__d("CometVPVDUserActivityMonitor",["CometUserActivityMonitor"],(function(a,b,c,d,e,f,g){"use strict";a={isUserActive:function(){return d("CometUserActivityMonitor").getActivityState()==="ACTIVE"},subscribe:function(a){var b=d("CometUserActivityMonitor").subscribe(function(b){b=b==="ACTIVE";a&&a(b)});return function(){b&&b.remove()}}};g["default"]=a}),98);
__d("isIntersectionObserverEntryVPVDVisible",["intersectionObserverEntryIsIntersecting"],(function(a,b,c,d,e,f,g){"use strict";var h=200,i={height:0};function a(a,b){b===void 0&&(b=h);var d=c("intersectionObserverEntryIsIntersecting")(a);if(d===!1)return!1;d=a.boundingClientRect;var e=a.intersectionRect,f=a.rootBounds;d=d||i;e=e||i;f=f||i;return e.height>=b||e.height>=f.height/2||e.height===d.height||a.intersectionRatio>.95}g["default"]=a}),98);
__d("vpvdConstants",[],(function(a,b,c,d,e,f){"use strict";a=250;b=200;f.DEFAULT_MIN_VISIBLE_TIME_MS=a;f.DEFAULT_MIN_VISIBLE_PX=b}),66);
__d("useVPVDImpression",["CometVPVDUserActivityMonitor","cr:921407","isIntersectionObserverEntryVPVDVisible","react","useVisibilityObserver","vpvdConstants"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback;function a(a){var e=a.isLite,f=a.minVisiblePx;f=f===void 0?d("vpvdConstants").DEFAULT_MIN_VISIBLE_PX:f;var g=a.minVisibleTimeMs,h=g===void 0?d("vpvdConstants").DEFAULT_MIN_VISIBLE_TIME_MS:g,j=a.onVPVDEnd;g=a.onVPVDStart;a=b("cr:921407")();var k=a[0];a=a[1];var l=i(function(a){if(a.visibleDuration<h)return;j(a)},[h,j]),m=e===!0?1:f;f=i(function(a){return c("isIntersectionObserverEntryVPVDVisible")(a,m)},[m]);e=e===!0?null:{thresholdOverride:"EXPENSIVE"};f=babelHelpers["extends"]({activityMonitorOverride:c("CometVPVDUserActivityMonitor"),isEntryInViewport:f},e);e=c("useVisibilityObserver")({onHidden:l,onVisibilityDurationUpdated:a,onVisible:g,options:f});return[e,k]}g["default"]=a}),98);
__d("CometScrollAnchorContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometScreenReaderHeading.react",["BaseHeading.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={visuallyHidden:{clip:"xzpqnlu",clipPath:"x1hyvwdk",height:"xjm9jq1",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x10l6tqk",width:"x1i1rx1s",$$css:!0}};function a(a){return i.jsx(c("BaseHeading.react"),babelHelpers["extends"]({xstyle:j.visuallyHidden},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometProgressStepper.react",["fbt","react","stylex","testID"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l={completedPrimary:{backgroundColor:"xtvsq51",$$css:!0},completedSecondary:{backgroundColor:"x1qhmfi1",$$css:!0},root:{alignItems:"x1qjc9v5",borderBottomStyle:"x1q0q8m5",borderBottomWidth:"x1qhh985",borderEndStyle:"xu3j5b3",borderEndWidth:"xcfux6l",borderStartStyle:"x26u7qi",borderStartWidth:"xm0m39n",borderTopStyle:"x13fuv20",borderTopWidth:"x972fbf",boxSizing:"x9f619",display:"x78zum5",flexDirection:"x1q0g3np",flexGrow:"x1iyjqo2",flexShrink:"xs83m0k",flexWrap:"xozqiw3",justifyContent:"x1szn6h9",marginBottom:"xat24cr",marginEnd:"x11i5rnm",marginLeft:null,marginRight:null,marginStart:"x1mh8g0r",marginTop:"xdj266r",minHeight:"x2lwn1j",minWidth:"xeuugli",paddingBottom:"x18d9i69",paddingEnd:"x4uap5",paddingLeft:null,paddingRight:null,paddingStart:"xkhd6sd",paddingTop:"xexx8yu",position:"x1n2onr6",width:"xh8yej3",zIndex:"x1ja2u2z",$$css:!0},step:{backgroundColor:"xmjcpbm",height:"xdk7pt",$$css:!0},stepFirst:{borderBottomStartRadius:"x10y3i5r",borderTopStartRadius:"x1lcm9me",$$css:!0},stepLast:{borderBottomEndRadius:"xrt01vj",borderTopEndRadius:"x1yr5g0i",$$css:!0},stepSpacedOut:{borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",borderTopEndRadius:"x1yr5g0i",borderTopStartRadius:"x1lcm9me",$$css:!0},stepWrapper:{boxSizing:"x9f619",$$css:!0},stepWrapperSpacedOut:{paddingEnd:"xg83lxy",paddingLeft:null,paddingRight:null,paddingStart:"x1h0ha7o",$$css:!0},stepWrapperSpacedOutFirst:{paddingStart:"xkhd6sd",paddingLeft:null,paddingRight:null,$$css:!0},stepWrapperSpacedOutLast:{paddingEnd:"x4uap5",paddingLeft:null,paddingRight:null,$$css:!0}};function a(a){var b=a.color,d=b===void 0?"primary":b;b=a.label;var e=a.roundCorners,f=e===void 0?!0:e,g=a.step;e=a.testid;var j=a.totalSteps;a=a.type;var m=a===void 0?"default":a;b!=null?a=h._("__JHASH__qUj1_MOMmvT__JHASH__",[h._param("name of the progress stepper",b),h._param("current step",g),h._param("total number of steps",j)]):a=h._("__JHASH__-5fm9CgU_fQ__JHASH__",[h._param("current step",g),h._param("total number of steps",j)]);return k.jsx("div",babelHelpers["extends"]({},c("testID")(e),{"aria-label":a,className:"x1qjc9v5 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1q0g3np x1iyjqo2 xs83m0k xozqiw3 x1szn6h9 xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x18d9i69 x4uap5 xkhd6sd xexx8yu x1n2onr6 xh8yej3 x1ja2u2z",role:"img",children:Array(j).fill().map(function(a,b){a=b<g;return k.jsx("div",{className:(i||(i=c("stylex")))(l.stepWrapper,m==="spaced-out"&&l.stepWrapperSpacedOut,m==="spaced-out"&&b===0&&l.stepWrapperSpacedOutFirst,m==="spaced-out"&&b===j-1&&l.stepWrapperSpacedOutLast),style:{width:"calc(100% / "+j+")"},children:k.jsx("div",{className:i(l.step,b===0&&f&&l.stepFirst,b===j-1&&f&&l.stepLast,m==="spaced-out"&&f&&l.stepSpacedOut,a&&d==="primary"&&l.completedPrimary,a&&d==="secondary"&&l.completedSecondary)})},b)})}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FDSTextWithBadge.react",["FDSTextWithIcon.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.badgeAfter,d=a.badgeBefore,e=a.badgeOverrideVerticalStyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["badgeAfter","badgeBefore","badgeOverrideVerticalStyle"]);return i.jsx(c("FDSTextWithIcon.react"),babelHelpers["extends"]({},a,{iconAfter:b,iconBefore:d,iconOverrideVerticalStyle:e,observeDirectionality:!0}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("debounceCore",["TimeSlice"],(function(a,b,c,d,e,f,g){function a(a,b,d,e,f,g){d===void 0&&(d=null);e===void 0&&(e=setTimeout);f===void 0&&(f=clearTimeout);g===void 0&&(g=!1);var h,i=!0;function j(){for(var k=arguments.length,l=new Array(k),m=0;m<k;m++)l[m]=arguments[m];var n;if(g){n=c("TimeSlice").guard(function(){i=!0,h=null},"debounceCore");if(!i){f(h);h=e(n,b);return}i=!1;a.apply(d,l)}else j.reset(),n=c("TimeSlice").guard(function(){h=null,a.apply(d,l)},"debounceCore");n.__SMmeta=a.__SMmeta;h=e(n,b)}j.reset=function(){f(h),h=null,i=!0};j.isPending=function(){return h!=null};return j}g["default"]=a}),98);
__d("debounce",["clearTimeout","debounceCore","setTimeout"],(function(a,b,c,d,e,f,g){function a(a,b,d,e,f){b===void 0&&(b=100);var g=function(a,b,d){return c("setTimeout")(a,b,d,!e)};return c("debounceCore")(a,b,d,g,c("clearTimeout"),f)}g["default"]=a}),98);
__d("useCometScrollAnchor",["BaseDOMContainer.react","BaseViewportMarginsContext","CometScrollAnchorContext","ExecutionEnvironment","HiddenSubtreePassiveContext","react","recoverableViolation","scrollTo"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;d=e.createContext;var k=e.useContext,l=e.useEffect,m=e.useMemo,n=e.useRef,o=e.useState,p=16,q=d(null);function a(a,b,d){d=(d=d)!=null?d:{};var e=d.arbitraryMargin,f=e===void 0?p:e;e=d.verticalAlign;var g=e===void 0?"top":e,h=babelHelpers.objectWithoutPropertiesLoose(d,["arbitraryMargin","verticalAlign"]),i=n(null),j=k(c("CometScrollAnchorContext")),r=m(function(){return b!==null&&a===(j==null?void 0:j.key)&&b===(j==null?void 0:j.value)},[a,j==null?void 0:j.key,j==null?void 0:j.value,b]),s=k(c("HiddenSubtreePassiveContext"));e=o(!s.getCurrentState().hiddenOrBackgrounded);var t=e[0],u=e[1],v=k(c("BaseViewportMarginsContext")),w=n(null),x=k(q),y=function(){var a=i.current;if(a!=null){var b=document.documentElement;if(b==null){c("recoverableViolation")("There is no documentElement accessible on document","comet_ui");return}b=b.clientHeight;a=a.getBoundingClientRect();var d=0;switch(g){case"top":d=a.top-f-v.top;break;case"center":d=a.top-v.top-(b-v.top-v.bottom)/2+a.height/2;break;case"bottom":d=a.bottom-b+f+v.bottom;break}a=window.pageYOffset+d;b=document.body;d=(d=x)!=null?d:b;if((j==null?void 0:j.disableScrollFixer)!==!0&&b!=null&&d!=null&&b.scrollHeight<a+window.innerHeight){var e=w.current=document.createElement("div");e.className="x1n2onr6 x1i1rx1s x8knxv4";e.style.marginTop="-"+(b.scrollHeight-a)+"px";e.style.height=window.innerHeight+"px";d.appendChild(e)}c("scrollTo")(babelHelpers["extends"]({},h,{top:a}))}},z=n(y);l(function(){z.current=y});l(function(){if(r)if(t){z.current();return function(){var a=w.current;a!=null&&a.parentNode!=null&&(a.parentNode.removeChild(a),w.current=null)}}else{var a=s.subscribeToChanges(function(a){a=a.hiddenOrBackgrounded;return u(!a)});return function(){return a.remove()}}},[s,r,t]);return i}function b(a){a=a.children;var b=m(function(){return(h||(h=c("ExecutionEnvironment"))).canUseDOM?document.createElement("div"):null},[]);return j.jsxs(j.Fragment,{children:[j.jsx(q.Provider,{value:b,children:a}),j.jsx(c("BaseDOMContainer.react"),{node:b})]})}b.displayName=b.name+" [from "+f.id+"]";g.CometScrollAnchorMountingPointContext=q;g.useCometScrollAnchor=a;g.CometScrollFixerRoot=b}),98);
__d("ChevronDownFilled16.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 16 16",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("g",{fillRule:"evenodd",transform:"translate(-448 -544)",children:i.jsx("path",{fillRule:"nonzero",d:"M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("ChevronDownFilled16IconSvg.react",["ChevronDownFilled16.svg.react","SVGIcon"],(function(a,b,c,d,e,f,g){"use strict";a=d("SVGIcon").svgIcon(c("ChevronDownFilled16.svg.react"));g["default"]=a}),98);
__d("CometFeedAdsProductContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({adId:null,minGapRule:null,minGapType:null});g["default"]=b}),98);
__d("CometFeedCurrentGroupContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext();g["default"]=b}),98);
__d("useNoopDebuggingInfoComponent",[],(function(a,b,c,d,e,f){"use strict";var g=function(){};function a(){return[null,g]}f["default"]=a}),66);
__d("CometFeedStoryFeedLocationContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext();g["default"]=b}),98);
__d("CometFeedARIAProperties.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(Object.freeze({}));g["default"]=b}),98);
__d("CometHero.react",["hero-tracing-placeholder"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=d("hero-tracing-placeholder").HeroComponent}),98);
__d("CometThrottle",["clearTimeout","setTimeout","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d){d=d===void 0?{}:d;var e=d.leading,f=d.trailing,g,h,i,j=null,k=0,l=function(){var b=g;g=null;var d=h;h=null;if(b==null)throw c("unrecoverableViolation")("It should be impossible for `cachedArgs` to be `null` at the moment we invoke the throttled function. Investigate why this is the case.","comet_infra");else return a.apply(d,b)},m=function(){k=e===!1?0:new Date(),j=null,i=l()};d=function(){g=h=null,j!=null&&(c("clearTimeout")(j),j=null)};function n(){var a=new Date();!k&&e===!1&&(k=a);var d=b-(a-k);d<=0?(c("clearTimeout")(j),j=null,k=a,g=arguments,h=this,i=l()):f!==!1&&(g=arguments,h=this,j==null&&(j=c("setTimeout")(m,d)));return i}n.cancel=d;return n}g["default"]=a}),98);
__d("CometUserActivity",["BaseEventEmitter"],(function(a,b,c,d,e,f,g){"use strict";var h=5e3,i=500,j=-5,k=Date.now(),l=k,m=!1,n=Date.now(),o=document.hasFocus?document.hasFocus():!0,p=0,q=Date.now(),r=-1,s=-1,t=!1,u=!1,v=new(c("BaseEventEmitter"))();function b(a){var b=w(function(c,d){b.unsubscribe(),a(d)});return b}function w(a){var b=v.addListener("user_activity",function(b){return a("user_activity",b)});return{unsubscribe:function(){return b.remove()}}}function d(a){return new Date().getTime()-k<(a!=null?a:h)}function e(){return o}function f(){return m}function x(){o=!0,m=!1}function y(){return n}function z(){return k}function A(a){p=a}function B(){return q}function C(){return t}function D(){return u}function E(){return l}function F(){k=Date.now(),l=k,m=!1,n=Date.now(),o=document.hasFocus?document.hasFocus():!0,p=0,q=Date.now(),r=-1,s=-1,t=!1,u=!1}function G(a){a.unsubscribe()}function H(a){J(a,i)}function I(a){J(a,0)}function J(b,c){c===void 0&&(c=0);var d=a.MouseEvent,e=a.KeyboardEvent;if(d&&b instanceof d){if(/^mouse(enter|leave|move|out|over)$/.test(b.type)&&b.pageX==r&&b.pageY==s)return;r=b.pageX;s=b.pageY}else e&&b instanceof e&&(u=!0);(b.type==="click"||b.type==="dblclick"||b.type==="contextmenu")&&(t=!0);k=Date.now();d=k-l;d>=c?(l=k,o||(q=k),d>=(p||h)&&(m=!0,n=k),v.emit("user_activity",{event:b,idleness:d,last_inform:l})):d<j&&(l=k)}function K(a){o=!0,n=Date.now(),I(a)}function L(){o=!1,m=!0,q=Date.now()}window.addEventListener("scroll",H,{capture:!0,passive:!0});window.addEventListener("focus",K,{capture:!1,passive:!0});window.addEventListener("blur",L,{capture:!1,passive:!0});(function(){var a=document.documentElement;if(a==null)return;["keydown","mouseover","mousemove","click"].forEach(function(b){a.addEventListener(b,H,{capture:!0,passive:!0})})})();g.EVENT_INTERVAL_MS=i;g.subscribeOnce=b;g.subscribe=w;g.isActive=d;g.isOnTab=e;g.hasBeenInactive=f;g.resetActiveStatus=x;g.getLastInActiveEnds=y;g.getLastActive=z;g.setIdleTime=A;g.getLastLeaveTime=B;g.hasClicked=C;g.hasInteractedWithKeyboard=D;g.getLastInformTime=E;g.reset=F;g.unsubscribe=G}),98);
__d("CastingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);c=a.createContext(null);e=a.createContext(null);f=a.createContext(null);g.CastingStateContext=b;g.CastingExperienceStateContext=c;g.SetCastingControllerContext=e;g.CastingControllerContext=f}),98);
__d("CometPictureInPictureExpContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({pictureInPictureExpConfig:{isInPictureInPictureExp:!1,isInPictureInPictureExpControlGroup:!1,isSkipAndChainingDisabled:!1},setPictureInPictureExpConfig:function(){}});g["default"]=b}),98);
__d("VideoPlayerPortalingPlaceInfoProvider.react",["emptyFunction","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;d=e.createContext;var j=e.useContext,k=e.useEffect,l=e.useMemo,m=d(null);function a(a){var b=a.children,c=a.currentPlaceID,d=a.currentVideoID,e=a.portalingEnabled,f=a.previousPlaceMetaData,g=a.thisPlaceID;a=l(function(){return{currentPlaceID:c,currentVideoID:d,portalingEnabled:e,previousPlaceMetaData:f,thisPlaceID:g}},[c,d,e,f,g]);return i.jsx(m.Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";var n=c("emptyFunction");function b(){var a=j(m);n(a);return a==null?{currentPlaceID:null,currentVideoID:null,portalingEnabled:!1,previousPlaceMetaData:null,thisPlaceID:null}:a}g.VideoPlayerPortalingPlaceInfoProvider=a;g.useVideoPlayerPortalingPlaceInfo=b}),98);
__d("CometSetWatchAndScrollVideoContext",["react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(function(){c("recoverableViolation")("No provider of CometSetWatchAndScrollVideoContext exists","comet_video_player")});g["default"]=b}),98);
__d("CometWatchAndScrollVideoContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometWatchAndScrollSoundContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({muted:null,setMuted:function(){},setVolume:function(){},volume:null});g["default"]=b}),98);
__d("TrustedTypesNoOpPolicy_DO_NOT_USE",["TrustedTypes","TrustedTypesUtils"],(function(a,b,c,d,e,f,g){"use strict";a={createScriptURL:d("TrustedTypesUtils").noop,createHTML:d("TrustedTypesUtils").noop,createScript:d("TrustedTypesUtils").noop};b=c("TrustedTypes").createPolicy("noop-do-not-use",a);e=b;g["default"]=e}),98);
__d("TrustedTypesLinkTagHTMLPolicy",["TrustedTypes","err"],(function(a,b,c,d,e,f,g){"use strict";a={createHTML:function(a){if(a==="<link />")return a;throw c("err")("Violating Trusted Type policies. Only works for '<link />' strings.")}};b=c("TrustedTypes").createPolicy("link-tag-html",a);d=b;g["default"]=d}),98);
__d("getMarkupWrap",["invariant","ExecutionEnvironment","TrustedTypesLinkTagHTMLPolicy"],(function(a,b,c,d,e,f,g,h){var i,j=(i||c("ExecutionEnvironment")).canUseDOM?document.createElement("div"):null,k={};b=[1,'<select multiple="true">',"</select>"];d=[1,"<table>","</table>"];e=[3,"<table><tbody><tr>","</tr></tbody></table>"];var l=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],m={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:b,option:b,caption:d,colgroup:d,tbody:d,tfoot:d,thead:d,td:e,th:e};f=["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"];f.forEach(function(a){m[a]=l,k[a]=!0});function a(a){a=a;!j&&h(0,144);Object.prototype.hasOwnProperty.call(m,a)||(a="*");Object.prototype.hasOwnProperty.call(k,a)||(a==="*"?j.innerHTML=c("TrustedTypesLinkTagHTMLPolicy").createHTML("<link />"):j.innerHTML="<"+a+"></"+a+">",k[a]=!j.firstChild);return k[a]?m[a]:null}g["default"]=a}),98);
__d("createNodesFromMarkup",["invariant","ExecutionEnvironment","TrustedTypesNoOpPolicy_DO_NOT_USE","getMarkupWrap"],(function(a,b,c,d,e,f,g,h){var i,j=(i||c("ExecutionEnvironment")).canUseDOM?document.createElement("div"):null,k=/^\s*<(\w+)/;function l(a){a=a.match(k);return a&&a[1].toLowerCase()}function a(a,b){var d=j;!j&&h(0,5001);var e=l(a);e=e&&c("getMarkupWrap")(e);if(e){d.innerHTML=e[1]+a+e[2];e=e[0];while(e--)d=d.lastChild}else d.innerHTML=c("TrustedTypesNoOpPolicy_DO_NOT_USE").createHTML(a);e=d.getElementsByTagName("script");e.length&&(b||h(0,5002),Array.from(e).forEach(b));a=Array.from(d.childNodes);while(d.lastChild)d.removeChild(d.lastChild);return a}g["default"]=a}),98);
__d("evalGlobal",[],(function(a,b,c,d,e,f){function a(a){if(typeof a!=="string")throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");if(!a)return;var b=document.createElement("script");try{b.appendChild(document.createTextNode(a))}catch(c){b.text=a}a=document.getElementsByTagName("head")[0]||document.documentElement;a.appendChild(b);a.removeChild(b)}f["default"]=a}),66);
__d("HTML",["invariant","Bootloader","FBLogger","createNodesFromMarkup","emptyFunction","evalGlobal"],(function(a,b,c,d,e,f,g){var h=/(<(\w+)[^>]*?)\/>/g,i={abbr:!0,area:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0};a=function(){"use strict";function a(c){c&&typeof c.__html==="string"&&(c=c.__html);if(!(this instanceof a))return c instanceof a?c:new a(c);if(c){var d=typeof c;d==="string"||g(0,277,d)}this._markup=c||"";this._defer=!1;this._nodes=null;this._inlineJS=b("emptyFunction");this._rootNode=null;this._hasInlineJs=!1}var c=a.prototype;c.toString=function(){return this._markup};c.getContent=function(){return this._markup};c.getNodes=function(){this._fillCache();return this._nodes};c.getRootNode=function(){this._rootNode&&g(0,278);var a=this.getNodes();if(a.length===1)this._rootNode=a[0];else{var b=document.createDocumentFragment();for(var c=0;c<a.length;c++)b.appendChild(a[c]);this._rootNode=b}return this._rootNode};c.getAction=function(){var a=this;this._fillCache();var b=function(){a._inlineJS()};return this._defer?function(){setTimeout(b,0)}:b};c._fillCache=function(){if(this._nodes!==null)return;if(!this._markup){this._nodes=[];return}var a=this._markup.replace(h,function(a,b,c){return i[c.toLowerCase()]?a:b+"></"+c+">"}),c=null;a=b("createNodesFromMarkup")(a,function(a){b("FBLogger")("staticresources").warn("HTML: encountered script node while parsing, hasSrc=%s, type=%s",Boolean(a.src),a.type==null||a.type===""?"<unknown>":a.type),a.type!=="application/ld+json"&&a.type!=="application/json"&&(c=c||[],c.push(a.src?b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"),a.src):b("evalGlobal").bind(null,a.innerHTML)),a.parentNode.removeChild(a))});c&&(this._hasInlineJs=!0,this._inlineJS=function(){for(var a=0;a<c.length;a++)c[a]()});this._nodes=a};c.setDeferred=function(a){this._defer=!!a;return this};c.hasInlineJs=function(){return this._hasInlineJs};a.isHTML=function(b){return!!b&&(b instanceof a||b.__html!==void 0)};a.replaceJSONWrapper=function(b){return b&&b.__html!==void 0?new a(b.__html):b};return a}();e.exports=a}),null);
__d("useEffectOnce",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useEffect;function a(a){return i(a,[])}g["default"]=a}),98);
__d("useTimeout",["clearTimeout","react","setTimeout","useEffectOnce","useUnsafeRef_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h,i;b=i||d("react");var j=b.useCallback,k=b.useState;function a(a,b){b===void 0&&(b=!0);var d=(h||(h=c("useUnsafeRef_DEPRECATED")))(null),e=k(b),f=e[0],g=e[1],i=j(function(){g(!1),c("clearTimeout")(d.current)},[]),l=j(function(){g(!0),d.current=c("setTimeout")(function(){g(!1)},a)},[a]);e=j(function(){c("clearTimeout")(d.current),l()},[l]);c("useEffectOnce")(function(){b&&l();return i});return{pending:f,clear:i,restart:e}}g["default"]=a}),98);
__d("scrollIntoView",["debounce","emptyFunction","recoverableViolation","scrollTo"],(function(a,b,c,d,e,f,g){"use strict";var h={center:"center",top:"start",bottom:"end",closest:"nearest"};function a(a,b){b===void 0&&(b=Object.freeze({}));var d=b,e=d.behavior;e=e===void 0?"auto":e;var f=d.onScrollComplete,g=f===void 0?c("emptyFunction"):f;f=d.onScrollStart;f=f===void 0?c("emptyFunction"):f;var j=d.force;j=j===void 0?!1:j;d=d.localScroll;d=d===void 0?!1:d;var k=a.getBoundingClientRect();d=d&&a instanceof HTMLElement?i(a):document.documentElement;if(d==null){c("recoverableViolation")("There is no scrolling element accessible on document, something is seriously wrong and I couldn't imagine the situation you have found yourself in","comet_ui");return{dispose:c("emptyFunction")}}var l=d.clientHeight,m=k.top<=l&&k.bottom>=0;f();if(!j&&m){g!=null&&g();return{dispose:c("emptyFunction")}}j=(f=b.verticalAlign)!=null?f:"closest";try{m="scrollBehavior"in d.style;if(m){a.scrollIntoView({behavior:e,block:j!=null?h[j]:void 0});var n,o=!1;g!=null&&(n=c("debounce")(function(){o=!0,window.removeEventListener("scroll",n,{capture:!0}),g()},200),window.addEventListener("scroll",n,{passive:!0,capture:!0}),window.dispatchEvent(new Event("scroll")));return{dispose:function(){if(o)return;n&&n.reset();window.removeEventListener("scroll",n,{capture:!0});window.scrollTo(window.pageYOffset,window.pageXOffset)}}}}catch(a){}j==="closest"&&(k.top>=l?j="bottom":j="top");var p;switch(j){case"top":p=window.pageYOffset+k.top;break;case"bottom":p=window.pageYOffset+k.bottom-l;break;case"center":p=window.pageYOffset+k.bottom-l+(l-k.height)/2;break}return c("scrollTo")({behavior:e,top:p,onScrollComplete:g})}function i(a){if(a==null||!(a.parentElement instanceof HTMLElement))return document.documentElement;if(a.scrollHeight>a.clientHeight)return a;else return i(a.parentElement)}g["default"]=a}),98);
__d("compactArray",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=[];for(var c=0;c<a.length;++c){var d=a[c];d!=null&&b.push(d)}return b}f["default"]=a}),66);