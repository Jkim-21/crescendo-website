;/*FB_PKG_DELIM*/

__d("PolarisAutomaticPreviewsDisabledContextProviderFragment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisAutomaticPreviewsDisabledContextProviderFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"disabled",storageKey:null}],type:"XDTGetIGDAutomaticPreviewsDisabledResponse",abstractKey:null};e.exports=a}),null);
__d("IGDAvatarGlimmer.react",["IGDSGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k={container:{position:"x1n2onr6",$$css:!0},glimmer:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x5yr21d",width:"xh8yej3",$$css:!0}};function l(a,b){if(b==="tiny")return"32px";if(b==="medium")if(a)return"32px";else return"44px";else if(b==="XXL")if(a)return"56px";else return"96px";else if(b==="micro")return"14px";else return"56px"}function a(a){var b=i(9),d=a.isMobile;a=a.size;d=d===void 0?!1:d;var e;b[0]!==d||b[1]!==a?(e=l(d,a),b[0]=d,b[1]=a,b[2]=e):e=b[2];d=e;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(a="x1n2onr6",b[3]=a):a=b[3];b[4]!==d?(e={height:d,width:d},b[4]=d,b[5]=e):e=b[5];b[6]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:k.glimmer}),b[6]=d):d=b[6];b[7]!==e?(a=j.jsx("div",{className:a,style:e,children:d}),b[7]=e,b[8]=a):a=b[8];return a}g["default"]=a}),98);
__d("IGDIsCompactModeContext.react",["IGDProfessionalIGFolderContext.react","react","useMatchMedia"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;f=e.createContext;var j=e.useContext,k=e.unstable_useMemoCache,l="900px",m=f(!1);function a(a){var b=k(6);a=a.children;var e=c("useMatchMedia")("(max-width: "+l+")"),f=d("IGDProfessionalIGFolderContext.react").useIsProfessionalIGD(),g;b[0]!==e||b[1]!==f?(g=e&&!f,b[0]=e,b[1]=f,b[2]=g):g=b[2];b[3]!==g||b[4]!==a?(e=i.jsx(m.Provider,{value:g,children:a}),b[3]=g,b[4]=a,b[5]=e):e=b[5];return e}function b(){return j(m)}g.IGDIsCompactModeContextProvider=a;g.useIsCompactMode=b}),98);
__d("IGDSectionHeaderLayout.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).unstable_useMemoCache,k=i,l={endAdornment:{display:"x78zum5",justifyContent:"x13a6bvl",paddingStart:"x1ye3gou",paddingLeft:null,paddingRight:null,$$css:!0},noBottomBorder:{borderBottomWidth:"x1qhh985",$$css:!0},root:{alignItems:"x6s0dn4",borderBottomColor:"x1bs97v6",borderBottomStyle:"x1q0q8m5",borderBottomWidth:"xso031l",boxSizing:"x9f619",display:"x78zum5",flexDirection:"x1q0g3np",height:"xr931m4",marginBottom:"xat24cr",minHeight:"x4lt0of",paddingStart:"x1swvt13",paddingLeft:null,paddingRight:null,paddingEnd:"x1pi30zi",width:"xh8yej3",$$css:!0},rootMobile:{height:"xn3w4p2",minHeight:"x1gg8mnh",paddingStart:"x1swvt13",paddingLeft:null,paddingRight:null,paddingEnd:"x1pi30zi",$$css:!0},startAdornment:{display:"x78zum5",$$css:!0}};function a(a){var b=j(7),d=a.children,e=a.isMobile,f=a.noBottomBorder;a=a.xstyle;e=e===void 0?!1:e;f=f===void 0?!1:f;e=e?l.rootMobile:!1;f=f?l.noBottomBorder:!1;var g;b[0]!==e||b[1]!==f||b[2]!==a?(g=(h||(h=c("stylex")))(l.root,e,f,a),b[0]=e,b[1]=f,b[2]=a,b[3]=g):g=b[3];b[4]!==g||b[5]!==d?(e=k.jsx("div",{className:g,children:d}),b[4]=g,b[5]=d,b[6]=e):e=b[6];return e}function b(a){var b=j(3);a=a.children;var c;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(c="x78zum5",b[0]=c):c=b[0];b[1]!==a?(c=k.jsx("div",{className:c,children:a}),b[1]=a,b[2]=c):c=b[2];return c}function e(a){var b=j(3);a=a.children;var c;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(c="x78zum5 x13a6bvl x1ye3gou",b[0]=c):c=b[0];b[1]!==a?(c=k.jsx("div",{className:c,children:a}),b[1]=a,b[2]=c):c=b[2];return c}g.Container=a;g.StartAdornment=b;g.EndAdornment=e}),98);
__d("IGDListCellPlaceholder.react",["IGDAvatarGlimmer.react","IGDIsCompactModeContext.react","IGDSGlimmer.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).unstable_useMemoCache,k=i,l={compactRoot:{display:"x78zum5",paddingStart:"xbbxn1n",paddingLeft:null,paddingRight:null,paddingEnd:"xxbr6pl",paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",$$css:!0},root:{display:"x78zum5",paddingStart:"xbbxn1n",paddingLeft:null,paddingRight:null,paddingEnd:"xxbr6pl",paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",width:"xxsgkw5",$$css:!0},subtitleGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xlup9mm",width:"x1oux285",$$css:!0},textContainer:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",flexShrink:"xs83m0k",justifyContent:"xl56j7k",paddingStart:"x1ye3gou",paddingLeft:null,paddingRight:null,$$css:!0},textGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xmix8c7",marginBottom:"x1e56ztr",width:"x1f9tj09",$$css:!0}};function a(a){var b=j(10);a=a.avatarSize;a=a===void 0?"large":a;var e=d("IGDIsCompactModeContext.react").useIsCompactMode(),f=e?l.compactRoot:l.root,g;b[0]!==f?(g=(h||(h=c("stylex")))(f),b[0]=f,b[1]=g):g=b[1];b[2]!==a?(f=k.jsx(c("IGDAvatarGlimmer.react"),{size:a}),b[2]=a,b[3]=f):f=b[3];b[4]!==e?(a=!e&&k.jsxs("div",{className:"x78zum5 xdt5ytf x1iyjqo2 xs83m0k xl56j7k x1ye3gou",children:[k.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:l.textGlimmer}),k.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:l.subtitleGlimmer})]}),b[4]=e,b[5]=a):a=b[5];b[6]!==g||b[7]!==f||b[8]!==a?(e=k.jsxs("div",{className:g,children:[f,a]}),b[6]=g,b[7]=f,b[8]=a,b[9]=e):e=b[9];return e}g["default"]=a}),98);
__d("IGDInboxLeftColumnPlaceholder.react",["IGDListCellPlaceholder.react","IGDSGlimmer.react","IGDSectionHeaderLayout.react","cr:4690","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).unstable_useMemoCache,k=i,l={leftColumn:{backgroundColor:"xvbhtw8",borderEndColor:"xopu45v",borderEndStyle:"xu3j5b3",borderEndWidth:"xm81vs4",height:"x5yr21d",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},mobile:{borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",height:"x1dr59a3",$$css:!0},sectionHeaderIconGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"x1fgtraw",marginTop:"x1xmf6yo",marginEnd:"x1emribx",marginBottom:"x1e56ztr",marginStart:"x1i64zmx",width:"xvy4d1p",$$css:!0},usernameGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"x1ta3ar0",width:"xh8yej3",$$css:!0}};function m(){var a=j(1),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=k.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:l.usernameGlimmer}),a[0]=b):b=a[0];return b}function n(){var a=j(11),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=k.jsx(c("IGDListCellPlaceholder.react"),{}),a[0]=b):b=a[0];var d;a[1]===Symbol["for"]("react.memo_cache_sentinel")?(d=k.jsx(c("IGDListCellPlaceholder.react"),{}),a[1]=d):d=a[1];var e;a[2]===Symbol["for"]("react.memo_cache_sentinel")?(e=k.jsx(c("IGDListCellPlaceholder.react"),{}),a[2]=e):e=a[2];var f;a[3]===Symbol["for"]("react.memo_cache_sentinel")?(f=k.jsx(c("IGDListCellPlaceholder.react"),{}),a[3]=f):f=a[3];var g;a[4]===Symbol["for"]("react.memo_cache_sentinel")?(g=k.jsx(c("IGDListCellPlaceholder.react"),{}),a[4]=g):g=a[4];var h;a[5]===Symbol["for"]("react.memo_cache_sentinel")?(h=k.jsx(c("IGDListCellPlaceholder.react"),{}),a[5]=h):h=a[5];var i;a[6]===Symbol["for"]("react.memo_cache_sentinel")?(i=k.jsx(c("IGDListCellPlaceholder.react"),{}),a[6]=i):i=a[6];var l;a[7]===Symbol["for"]("react.memo_cache_sentinel")?(l=k.jsx(c("IGDListCellPlaceholder.react"),{}),a[7]=l):l=a[7];var m;a[8]===Symbol["for"]("react.memo_cache_sentinel")?(m=k.jsx(c("IGDListCellPlaceholder.react"),{}),a[8]=m):m=a[8];var n;a[9]===Symbol["for"]("react.memo_cache_sentinel")?(n=k.jsx(c("IGDListCellPlaceholder.react"),{}),a[9]=n):n=a[9];a[10]===Symbol["for"]("react.memo_cache_sentinel")?(b=k.jsxs(k.Fragment,{children:[b,d,e,f,g,h,i,l,m,n,k.jsx(c("IGDListCellPlaceholder.react"),{})]}),a[10]=b):b=a[10];return b}function a(a){var e=j(16);a=a.isMobile;a=a===void 0?!1:a;var f=a?l.mobile:!1,g;e[0]!==f?(g=(h||(h=c("stylex")))(l.leftColumn,f),e[0]=f,e[1]=g):g=e[1];e[2]!==a?(f=a?k.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:l.sectionHeaderIconGlimmer}):null,e[2]=a,e[3]=f):f=e[3];var i;e[4]!==f?(i=k.jsx(d("IGDSectionHeaderLayout.react").StartAdornment,{children:f}),e[4]=f,e[5]=i):i=e[5];e[6]===Symbol["for"]("react.memo_cache_sentinel")?(f=k.jsx(m,{}),e[6]=f):f=e[6];var o;e[7]===Symbol["for"]("react.memo_cache_sentinel")?(o=k.jsx(d("IGDSectionHeaderLayout.react").EndAdornment,{children:k.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:l.sectionHeaderIconGlimmer})}),e[7]=o):o=e[7];e[8]!==a||e[9]!==i?(f=k.jsxs(d("IGDSectionHeaderLayout.react").Container,{isMobile:a,noBottomBorder:!0,children:[i,f,o]}),e[8]=a,e[9]=i,e[10]=f):f=e[10];e[11]===Symbol["for"]("react.memo_cache_sentinel")?(o=b("cr:4690")!==null&&k.jsx(b("cr:4690"),{}),e[11]=o):o=e[11];e[12]===Symbol["for"]("react.memo_cache_sentinel")?(a=k.jsx(n,{}),e[12]=a):a=e[12];e[13]!==g||e[14]!==f?(i=k.jsxs("div",{className:g,children:[f,o,a]}),e[13]=g,e[14]=f,e[15]=i):i=e[15];return i}g.IGDInboxLeftColumnPlaceholderUsernameGlimmer=m;g.IGDInboxLeftColumnPlaceholderThreadListLayout=n;g.IGDInboxLeftColumnPlaceholder=a}),98);
__d("PolarisAutomaticPreviewsDisabledContext.react",["CometRelay","PolarisAutomaticPreviewsDisabledContextProviderFragment.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useContext,l=e.useRef,m=e.unstable_useMemoCache,n=j.createContext(null);function a(a){var c=m(5),e=a.children;a=a.responseFragment;a=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisAutomaticPreviewsDisabledContextProviderFragment.graphql"),a);if(c[0]!==a.disabled){var f;f=(f=a.disabled)!=null?f:1;c[0]=a.disabled;c[1]=f}else f=c[1];a=l(f);c[2]!==a||c[3]!==e?(f=j.jsx(n.Provider,{value:a,children:e}),c[2]=a,c[3]=e,c[4]=f):f=c[4];return f}function c(){return k(n)}g.PolarisAutomaticPreviewsDisabledContextProvider=a;g.usePolarisAutomaticPreviewsDisabledContext=c}),98);
__d("CometSSRSuspendOnServer.react",["ExecutionEnvironment","react","suspendOrThrowIfUsedInSSR"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j;j||d("react");function a(a){a=a.children;if((h||(h=c("ExecutionEnvironment"))).canUseDOM)return a;(i||(i=c("suspendOrThrowIfUsedInSSR")))("CometSSRSuspendOnServer: This component is marked to be client rendered")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometRelativeTimestamp.react",["fbt","react","react-strict-dom","useServerTime"],(function(a,b,c,d,e,f,g,h){"use strict";var i;e=i||d("react");function j(a,b){if(b==="minimized")return h._("__JHASH__fwsgSNrW38G__JHASH__");else if(b==="shortened")return h._("__JHASH__R3_UwncmzVK__JHASH__");return h._("__JHASH__n-vdMzQYLNI__JHASH__")}function k(a,b){return b==="minimized"?h._("__JHASH__-b-qMPARzNx__JHASH__"):h._("__JHASH__7tk0E3psPN9__JHASH__")}function l(a,b){if(b==="minimized")return h._("__JHASH__-dvS8T7Zewj__JHASH__",[h._param("minutes",a,[0])]);else if(b==="shortened")return h._("__JHASH__pJYDYNmcCNm__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__Cf0HUgiMq4T__JHASH__",[h._plural(a,"number")])}function m(a,b){if(b==="minimized")return h._("__JHASH__aQr_BY-obs4__JHASH__",[h._param("minutes",a,[0])]);else if(b==="shortened")return h._("__JHASH__c6NQLZH4ANd__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__hSOa9acW7bb__JHASH__",[h._plural(a,"number")])}function n(a,b){if(b==="minimized")return h._("__JHASH__dJku-irc6Vq__JHASH__",[h._param("hours",a)]);else if(b==="shortened")return h._("__JHASH__fgynbiSDJGc__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__6moQMMAESbv__JHASH__",[h._plural(a,"number")])}function o(a,b){if(b==="minimized")return h._("__JHASH__my9Q52IIrzO__JHASH__",[h._param("hours",a)]);else if(b==="shortened")return h._("__JHASH__aKe8M_AKzI3__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__KshjW5ZSXeJ__JHASH__",[h._plural(a,"number")])}function p(a,b){if(b==="minimized")return h._("__JHASH__7vrBSek8hqf__JHASH__",[h._param("days",a)]);else if(b==="shortened")return h._("__JHASH__U_-41liQBf___JHASH__",[h._plural(a,"number")]);return h._("__JHASH__eOrU59mir58__JHASH__",[h._plural(a,"number")])}function q(a,b){if(b==="minimized")return h._("__JHASH__nR1BpT4JZ-1__JHASH__",[h._param("days",a)]);else if(b==="shortened")return h._("__JHASH__XM9woDyI0RI__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__e25sv98iazf__JHASH__",[h._plural(a,"number")])}function r(a,b){if(b==="minimized")return h._("__JHASH__89wyXCUcNcD__JHASH__",[h._param("weeks",a)]);else if(b==="shortened")return h._("__JHASH__LzV87OP-cnH__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__8Tz4WwYqyWe__JHASH__",[h._plural(a,"number")])}function s(a,b){if(b==="minimized")return h._("__JHASH__6jpt3ZiMeNm__JHASH__",[h._param("weeks",a)]);else if(b==="shortened")return h._("__JHASH__FZjvF7iUhS2__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__KYxoF9she7V__JHASH__",[h._plural(a,"number")])}function t(a,b){if(b==="minimized")return h._("__JHASH__pydgq6srngO__JHASH__",[h._param("years",a)]);else if(b==="shortened")return h._("__JHASH__qHsnROIs1Rn__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__4VLiJAQbl5i__JHASH__",[h._plural(a,"number")])}function u(a,b){if(b==="minimized")return h._("__JHASH__PO71EECf0Ar__JHASH__",[h._param("years",a)]);else if(b==="shortened")return h._("__JHASH__HQno8zOlCSY__JHASH__",[h._plural(a,"number")]);return h._("__JHASH__lP1YxrqVkce__JHASH__",[h._plural(a,"number")])}var v=60,w=60,x=24,y=7,z=365;function A(a,b,c){c===void 0&&(c="normal");a=(a.valueOf()-b.valueOf())/1e3;if(a<v)return j(a,c);b=a/v;a=Math.floor(b);if(a<w)return l(a,c);a=b/w;b=Math.floor(a);if(b<x)return n(b,c);b=a/x;a=Math.floor(b);if(a<y)return p(a,c);else if(b<z){a=Math.floor(b/y);return r(a,c)}a=Math.floor(b/z);return t(a,c)}function a(a,b,c){c===void 0&&(c="normal");b=(b.valueOf()-a.valueOf())/1e3;if(b<v)return k(b,c);a=b/v;b=Math.floor(a);if(b<w)return m(b,c);b=a/w;a=Math.floor(a/w);if(a<x)return o(a,c);a=b/x;b=Math.floor(a);if(b<y)return q(b,c);else if(a<z){b=Math.floor(a/y);return s(b,c)}b=Math.floor(a/z);return u(b,c)}function b(a){var b=a.date;a=a.format;var d=c("useServerTime")();d=A(d,b,a);return d}b.displayName=b.name+" [from "+f.id+"]";b.getRelativeTimestamp=A;b.getRelativeTimestampInFuture=a;g["default"]=b}),98);