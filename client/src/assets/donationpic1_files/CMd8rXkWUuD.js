;/*FB_PKG_DELIM*/

__d("DirectRequestsDeclineMultipleButtonFalcoEventDeferred",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("DirectRequestsDeclineMultipleButtonFalcoEvent").__setRef("DirectRequestsDeclineMultipleButtonFalcoEventDeferred");function a(a){var b=a.e_counter_channel,c=a.is_interop;h.onReady(function(a){return a.log(function(){return{e_counter_channel:b,is_interop:c}})})}g.logDirectRequestsDeclineMultipleButtonFalcoEvent=a}),98);
__d("DirectRequestsDeclineMultipleConfirmFalcoEventDeferred",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("DirectRequestsDeclineMultipleConfirmFalcoEvent").__setRef("DirectRequestsDeclineMultipleConfirmFalcoEventDeferred");function a(a){var b=a.all_used,c=a.e_counter_channel,d=a.is_interop,e=a.num_requests_visible,f=a.num_selected;h.onReady(function(a){return a.log(function(){return{all_used:b,e_counter_channel:c,is_interop:d,num_requests_visible:e,num_selected:f}})})}g.logDirectRequestsDeclineMultipleConfirmFalcoEvent=a}),98);
__d("IGDConfirmBulkDeleteMessageRequestsLogger",["DirectRequestsDeclineMultipleConfirmFalcoEventDeferred"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){d("DirectRequestsDeclineMultipleConfirmFalcoEventDeferred").logDirectRequestsDeclineMultipleConfirmFalcoEvent({all_used:a===b,e_counter_channel:"",is_interop:!1,num_requests_visible:a.toString(),num_selected:b.toString()})}g.logConfirmBulkDeleteMessageRequests=a}),98);
__d("IGDOpenBulkDeleteOpenMessageRequestsDialogLogger",["DirectRequestsDeclineMultipleButtonFalcoEventDeferred"],(function(a,b,c,d,e,f,g){"use strict";function a(){d("DirectRequestsDeclineMultipleButtonFalcoEventDeferred").logDirectRequestsDeclineMultipleButtonFalcoEvent({e_counter_channel:"",is_interop:!1})}g.logOpenBulkDeleteOpenMessageRequestsDialog=a}),98);
__d("IGDBulkDeleteMessageRequestsButton.react",["fbt","I64","IGDBaseButton.react","IGDConfirmBulkDeleteMessageRequestsLogger","IGDOpenBulkDeleteOpenMessageRequestsDialogLogger","IGDSText.react","JSResourceForInteraction","LSIntEnum","LSMessagingThreadTypeUtil","MWPThreadsForThreadList","MWThreadListSupportedThreadTypes","MWXacGating","ODS","ReQL","ReQLSuspense","emptyFunction","isMWXacGroupThread","react","useIGDSLazyDialog","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l,m,n=m||(m=d("react"));b=m;b.useCallback;var o=b.useState,p=b.unstable_useMemoCache;function a(){var a=p(23),b=(i||(i=c("useReStore")))(),e;a[0]!==b.tables.threads_ranges_v2__generated?(e=function(){return d("ReQL").fromTableAscending(b.tables.threads_ranges_v2__generated).getKeyRange((j||(j=d("LSIntEnum"))).ofNumber(-1))},a[0]=b.tables.threads_ranges_v2__generated,a[1]=e):e=a[1];var g;a[2]!==b?(g=[b],a[2]=b,a[3]=g):g=a[3];var m=d("ReQLSuspense").useFirst(e,g,f.id+":45");a[4]!==b||a[5]!==m?(e=function(){return d("MWPThreadsForThreadList").createIterable(b,(j||(j=d("LSIntEnum"))).ofNumber(-1),m,["threadType","capabilities","capabilities2","capabilities3","capabilities4","threadKey"]).filter(function(a){return c("MWThreadListSupportedThreadTypes").findIndex(function(b){return(k||(k=d("I64"))).equal(a.threadType,b)})!==-1}).filter(function(a){if(d("MWXacGating").isGroupsEnabled())return!0;else return!c("isMWXacGroupThread")(a)})},g=[b,m],a[4]=b,a[5]=m,a[6]=e,a[7]=g):(e=a[6],g=a[7]);var q=d("ReQLSuspense").useArray(e,g,f.id+":52");a[8]===Symbol["for"]("react.memo_cache_sentinel")?(e=function(a,b){return d("LSMessagingThreadTypeUtil").isSecure(b.threadType)?a:a+1},a[8]=e):e=a[8];var r=q.reduce(e,0);g=q.length;e=o(!1);var s=e[0],t=e[1];a[9]===Symbol["for"]("react.memo_cache_sentinel")?(e=h._("__JHASH__VNroKOFZj79__JHASH__"),a[9]=e):e=a[9];e=e;var u;a[10]===Symbol["for"]("react.memo_cache_sentinel")?(u=c("JSResourceForInteraction")("IGDBulkDeleteMessageRequestsDialog.react").__setRef("IGDBulkDeleteMessageRequestsButton.react"),a[10]=u):u=a[10];u=c("useIGDSLazyDialog")(u);var v=u[0];a[11]!==v||a[12]!==r||a[13]!==q?(u=function(){v({onDeleteFulfill:function(){t(!1),r>0&&d("IGDConfirmBulkDeleteMessageRequestsLogger").logConfirmBulkDeleteMessageRequests(r,r)},onDeleteStart:function(){return t(!0)},threads:q},c("emptyFunction")),(l||(l=d("ODS"))).bumpEntityKey(3185,"igd.message_requests","delete_bulk"),r>0&&d("IGDOpenBulkDeleteOpenMessageRequestsDialogLogger").logOpenBulkDeleteOpenMessageRequestsDialog()},a[11]=v,a[12]=r,a[13]=q,a[14]=u):u=a[14];u=u;var w;a[15]===Symbol["for"]("react.memo_cache_sentinel")?(w="x1yrsyyn x10b6aqq",a[15]=w):w=a[15];var x;a[16]!==g||a[17]!==s?(x=g===0||s,a[16]=g,a[17]=s,a[18]=x):x=a[18];a[19]===Symbol["for"]("react.memo_cache_sentinel")?(g=n.jsx(c("IGDSText.react"),{color:"errorOrDestructive",size:"label",textAlign:"start",children:e}),a[19]=g):g=a[19];a[20]!==x||a[21]!==u?(s=n.jsx("div",{className:w,children:n.jsx(c("IGDBaseButton.react"),{disabled:x,onClick:u,children:g})}),a[20]=x,a[21]=u,a[22]=s):s=a[22];return s}g["default"]=a}),98);
__d("IGDMessageRequestLeftRail.react",["fbt","CometTransientDialogProvider.react","I64","IGDBulkDeleteMessageRequestsButton.react","IGDListCell.react","IGDMessageRequestLeftRailLayout.react","IGDMobileNavigationButton.react","IGDNavigation","IGDRouteProvider.react","IGDSBox.react","IGDSButton.react","IGDSChevronIcon.react","IGDSEyeOffOutlineIcon.react","IGDSText.react","IGDSectionHeader.react","IGDThreadList.react","LSIntEnum","MWPActor.react","MWPThreadsForThreadList","MWVerticalRhythm","ReQL","ReQLSuspense","react","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l,m=(l||(l=d("react"))).unstable_useMemoCache,n=l;function o(a){var b=(i||(i=c("useReStore")))(),e=d("MWPActor.react").useActor(),g=d("ReQLSuspense").useFirst(function(){return d("ReQL").fromTableAscending(b.tables.threads_ranges_v2__generated).getKeyRange((j||(j=d("LSIntEnum"))).ofNumber(a))},[b],f.id+":47");return d("ReQLSuspense").useFirst(function(){return d("MWPThreadsForThreadList").createIterable(b,(j||(j=d("LSIntEnum"))).ofNumber(a),g,[])},[b,e,g],f.id+":55")!=null}var p={avatarBackground:{backgroundColor:"x19g9edo",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"xnnlda6",width:"x15yg21f",$$css:!0},messageSettingsButton:{marginTop:"x14vqqas",$$css:!0}};function q(a){var b=m(22),e=a.hasRequests,f=a.hiddenRequestsListItem,g=a.info,i=a.isMobile,l=a.onNavigate,o=a.onReturn,q=a.parentThreadKey;a=a.title;var r;b[0]!==o?(r=n.jsx(c("IGDMobileNavigationButton.react"),{onClick:o}),b[0]=o,b[1]=r):r=b[1];b[2]!==a?(o=n.jsx(c("IGDSText.react"),{size:"headline2",weight:"semibold",children:a}),b[2]=a,b[3]=o):o=b[3];var s,t;b[4]!==i||b[5]!==r||b[6]!==o||b[7]!==g||b[8]!==e||b[9]!==q||b[10]!==l?(s=n.jsx(c("IGDSectionHeader.react"),{isMobile:i,noBottomBorder:!0,startAdornment:r,children:o}),t=g!=null&&e?n.jsxs(d("IGDMessageRequestLeftRailLayout.react").InfoBox,{children:[n.jsx(c("IGDSText.react"),{color:"secondaryText",size:"footnote",children:g}),e&&(k||(k=d("I64"))).equal(q,(j||(j=d("LSIntEnum"))).ofNumber(-1))?n.jsx(c("IGDSButton.react"),{"data-testid":void 0,label:h._("__JHASH__j8Zdz4qFETd__JHASH__"),onClick:l,variant:"primary_link",xstyle:p.messageSettingsButton}):null]}):null,b[4]=i,b[5]=r,b[6]=o,b[7]=g,b[8]=e,b[9]=q,b[10]=l,b[11]=s,b[12]=t):(s=b[11],t=b[12]);i=e?f:void 0;r=e?void 0:f;b[13]!==i||b[14]!==r||b[15]!==a||b[16]!==q?(o=n.jsx(c("IGDThreadList.react"),{afterContent:i,beforeContent:r,gridLabel:a,isMessageRequestRoute:!0,parentThreadKey:q}),b[13]=i,b[14]=r,b[15]=a,b[16]=q,b[17]=o):o=b[17];b[18]!==s||b[19]!==t||b[20]!==o?(g=n.jsxs(n.Fragment,{children:[s,t,o]}),b[18]=s,b[19]=t,b[20]=o,b[21]=g):g=b[21];return g}function r(a){var b=m(24);a=a.isMobile;var e=d("IGDNavigation").useIGDNavigation(),f=o(-1),g;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=n.jsx(c("IGDSChevronIcon.react"),{alt:"Chevron icon to indicate entering the hidden requests window",color:"ig-primary-text",direction:"next",size:16}),b[0]=g):g=b[0];var i;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(i=n.jsx(c("IGDSBox.react"),{alignItems:"center",direction:"row",justifyContent:"center",xstyle:p.avatarBackground,children:n.jsx(c("IGDSEyeOffOutlineIcon.react"),{alt:"Eye-off icon for the hidden requests",color:"ig-primary-text",size:24})}),b[1]=i):i=b[1];var k;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(k=n.jsx(c("MWVerticalRhythm"),{height:19}),b[2]=k):k=b[2];var l;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(l=n.jsx(c("IGDSText.react"),{color:"primaryText",maxLines:1,size:"body",weight:"normal",children:h._("__JHASH__X7L8UEukC2K__JHASH__")}),b[3]=l):l=b[3];b[4]===Symbol["for"]("react.memo_cache_sentinel")?(k=n.jsxs(n.Fragment,{children:[k,l,n.jsx(c("MWVerticalRhythm"),{height:19})]}),b[4]=k):k=b[4];b[5]!==e?(l=n.jsx(c("IGDListCell.react"),{addOnEnd:g,addOnStart:i,content:k,onPress:function(){return e.openHiddenRequests()},size:"large"}),b[5]=e,b[6]=l):l=b[6];b[7]===Symbol["for"]("react.memo_cache_sentinel")?(g=h._("__JHASH__X3k5rT9Tdly__JHASH__"),b[7]=g):g=b[7];b[8]!==e?(i=function(){return e.goToMessageSettings()},k=function(){return e.goToNullState()},b[8]=e,b[9]=i,b[10]=k):(i=b[9],k=b[10]);var r,s;b[11]===Symbol["for"]("react.memo_cache_sentinel")?(r=(j||(j=d("LSIntEnum"))).ofNumber(-1),s=h._("__JHASH__1t-ijjLolTC__JHASH__"),b[11]=r,b[12]=s):(r=b[11],s=b[12]);b[13]!==f||b[14]!==l||b[15]!==a||b[16]!==i||b[17]!==k?(g=n.jsx(q,{entryPoint:"inboxThreadList",hasRequests:f,hiddenRequestsListItem:l,info:g,isMobile:a,onNavigate:i,onReturn:k,parentThreadKey:r,title:s}),b[13]=f,b[14]=l,b[15]=a,b[16]=i,b[17]=k,b[18]=g):g=b[18];b[19]!==f?(r=f?n.jsx(d("IGDMessageRequestLeftRailLayout.react").Footer,{children:n.jsx(c("IGDBulkDeleteMessageRequestsButton.react"),{})}):null,b[19]=f,b[20]=r):r=b[20];b[21]!==g||b[22]!==r?(s=n.jsxs(n.Fragment,{children:[g,r]}),b[21]=g,b[22]=r,b[23]=s):s=b[23];return s}function s(a){var b=m(9);a=a.isMobile;var c=d("IGDNavigation").useIGDNavigation(),e=o(-3),f;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(f=h._("__JHASH__NsXO8SOtUEO__JHASH__"),b[0]=f):f=b[0];var g;b[1]!==c?(g=function(){return c.openPendingInbox()},b[1]=c,b[2]=g):g=b[2];var i,k;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(i=(j||(j=d("LSIntEnum"))).ofNumber(-3),k=h._("__JHASH__NUWCEJOzzXk__JHASH__"),b[3]=i,b[4]=k):(i=b[3],k=b[4]);b[5]!==e||b[6]!==a||b[7]!==g?(f=n.jsx(q,{entryPoint:"inboxThreadList",hasRequests:e,info:f,isMobile:a,onReturn:g,parentThreadKey:i,title:k}),b[5]=e,b[6]=a,b[7]=g,b[8]=f):f=b[8];return f}function a(a){var b=m(6);a=a.isMobile;a=a===void 0?!1:a;var e=d("IGDRouteProvider.react").useIsCurrentRouteMessageHiddenRequests(),f;b[0]!==e||b[1]!==a?(f=e?n.jsx(s,{isMobile:a}):n.jsx(r,{isMobile:a}),b[0]=e,b[1]=a,b[2]=f):f=b[2];e=f;b[3]!==a||b[4]!==e?(f=n.jsx(c("CometTransientDialogProvider.react"),{children:n.jsx(d("IGDMessageRequestLeftRailLayout.react").Container,{isMobile:a,children:e})}),b[3]=a,b[4]=e,b[5]=f):f=b[5];return f}g["default"]=a}),98);
__d("PolarisSwitchAccountsModalLegacyConstants",[],(function(a,b,c,d,e,f){"use strict";a=50;b=72;f.FOOTER_HEIGHT=a;f.ITEM_HEIGHT=b}),66);
__d("PolarisSwitchAccountsModalLegacyBody.react",["IGDSBox.react","IGDSCheckbox.react","IGDSListItem.react","IGDSSpinner.react","PolarisAuthActionConstants","PolarisAuthFormCard.react","PolarisFXSSOActions","PolarisIGCoreConstants","PolarisLoginActionLoginWithFBJSSDK","PolarisLoginActionOneTapLogin","PolarisOneTapLoginStorage","PolarisReactRedux.react","PolarisSwitchAccountsModalLegacyConstants","PolarisUA","PolarisUserAvatar.react","react","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k="accountSwitcherModal",l=2*d("PolarisSwitchAccountsModalLegacyConstants").ITEM_HEIGHT+8,m=5*d("PolarisSwitchAccountsModalLegacyConstants").ITEM_HEIGHT+8;function a(a){var b=i(8),e=a.fbConnectedUsers,f=a.igConnectedUsers;a=a.oneTapUserIds;var g=d("PolarisReactRedux.react").useDispatch(),h=c("usePolarisViewer")(),o;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(o=function(a){return a.auth.authType},b[0]=o):o=b[0];o=d("PolarisReactRedux.react").useSelector(o);var p;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(p=function(a){return a==null?void 0:(a=a.fb)==null?void 0:(a=a.authResponse)==null?void 0:a.userID},b[1]=p):p=b[1];var q=d("PolarisReactRedux.react").useSelector(p),r=d("PolarisOneTapLoginStorage").getLoginNonces();switch(o){case d("PolarisAuthActionConstants").AUTH.fbLogin:case d("PolarisAuthActionConstants").AUTH.fbAccountPicker:case d("PolarisAuthActionConstants").AUTH.oneTapLogin:p=(h==null?void 0:h.profilePictureUrl)!=null&&(h==null?void 0:h.username)!=null&&j.jsx(c("IGDSListItem.react"),{addOnEnd:j.jsx(c("IGDSCheckbox.react"),{checkboxShape:"circle",isChecked:!0,name:"SwitchAccountsModalCheckbox",onChange:function(){}}),addOnStart:j.jsx(c("PolarisUserAvatar.react"),{isLink:!1,profilePictureUrl:h==null?void 0:h.profilePictureUrl,size:c("PolarisIGCoreConstants").AVATAR_SIZES.large,username:h==null?void 0:h.username}),title:h==null?void 0:h.username});o=e!=null&&(e==null?void 0:e.length)!==0&&q!=null&&e.map(function(a){return j.jsx(n,{onClick:function(){return g(d("PolarisLoginActionLoginWithFBJSSDK").loginWithFBJSSDK({source:k},a.username))},profilePictureUrl:a.profilePictureUrl,userId:q,username:a.username},a.username)});h=a.map(function(a){var b=r[a],c=b.nonce,e=b.profilePicUrl;b=b.username;var f=function b(){g(d("PolarisLoginActionOneTapLogin").switchAccountLogin({loginNonce:c,retry:b,userId:a}))};return j.jsx(n,{onClick:f,profilePictureUrl:e,userId:a,username:b},a)});e=f!=null&&(f==null?void 0:f.length)!==0&&f.map(function(a){return j.jsx(n,{onClick:function(){return g(d("PolarisFXSSOActions").loginWithIGSSO(a.username))},profilePictureUrl:a.profilePictureUrl,userId:null,username:a.username},a.username)});b[2]!==p||b[3]!==o||b[4]!==h||b[5]!==e?(a=j.jsxs(c("IGDSBox.react"),{flex:"grow",maxHeight:d("PolarisUA").isDesktop()?m:void 0,minHeight:d("PolarisUA").isDesktop()?l:void 0,overflow:"auto",position:"relative",children:[p,o,h,e]}),b[2]=p,b[3]=o,b[4]=h,b[5]=e,b[6]=a):a=b[6];return a;case d("PolarisAuthActionConstants").AUTH.login:case d("PolarisAuthActionConstants").AUTH.twoFactor:case d("PolarisAuthActionConstants").AUTH.signup:b[7]===Symbol["for"]("react.memo_cache_sentinel")?(f=j.jsx(c("IGDSBox.react"),{alignItems:"center",maxHeight:800,overflow:"auto",position:"relative",children:j.jsx(c("PolarisAuthFormCard.react"),{hideAppUpsells:!0,hideBorder:!0,pageIdentifier:k,style:"modal",useMobileFooterPadding:!1})}),b[7]=f):f=b[7];return f;default:return null}}function n(a){var b=i(23),e=a.onClick,f=a.profilePictureUrl,g=a.userId;a=a.username;var h;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(h=function(a){var b;return((b=a.auth.login)==null?void 0:b.requestInFlight)||((b=a.auth.twoFactor)==null?void 0:b.requestInFlight)||!1},b[0]=h):h=b[0];h=d("PolarisReactRedux.react").useSelector(h);var k;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(k=function(a){return(a=a.auth.login)==null?void 0:a.userId},b[1]=k):k=b[1];k=d("PolarisReactRedux.react").useSelector(k);var l;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(l=function(a){return(a=a.auth.login)==null?void 0:a.igUsername},b[2]=l):l=b[2];l=d("PolarisReactRedux.react").useSelector(l);var m;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(m=function(a){return a.fxSSO.requestInFlight},b[3]=m):m=b[3];m=d("PolarisReactRedux.react").useSelector(m);var n;b[4]===Symbol["for"]("react.memo_cache_sentinel")?(n=function(a){return a.fxSSO.ssoUsername},b[4]=n):n=b[4];n=d("PolarisReactRedux.react").useSelector(n);var o;b[5]!==h||b[6]!==g||b[7]!==k||b[8]!==l||b[9]!==a||b[10]!==m||b[11]!==n?(o=h&&g!==null&&k===g&&(l==null||l===a)||m&&a===n?j.jsx(c("IGDSSpinner.react"),{}):void 0,b[5]=h,b[6]=g,b[7]=k,b[8]=l,b[9]=a,b[10]=m,b[11]=n,b[12]=o):o=b[12];b[13]!==f||b[14]!==a?(h=j.jsx(c("PolarisUserAvatar.react"),{isLink:!1,profilePictureUrl:f,size:c("PolarisIGCoreConstants").AVATAR_SIZES.large,username:a}),b[13]=f,b[14]=a,b[15]=h):h=b[15];b[16]!==e?(g=function(){e()},b[16]=e,b[17]=g):g=b[17];b[18]!==o||b[19]!==h||b[20]!==g||b[21]!==a?(k=j.jsx(c("IGDSListItem.react"),{addOnEnd:o,addOnStart:h,onPress:g,title:a}),b[18]=o,b[19]=h,b[20]=g,b[21]=a,b[22]=k):k=b[22];return k}g["default"]=a}),98);
__d("PolarisSwitchAccountsModalLegacyFooter.react",["IGDSBox.react","IGDSButton.react","IGDSDivider.react","PolarisAuthActionConstants","PolarisAuthActions","PolarisNavigationStrings","PolarisReactRedux.react","PolarisSignupTypes","PolarisSwitchAccountsModalLegacyConstants","PolarisUA","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(9);a=a.numAccounts;var e=d("PolarisReactRedux.react").useDispatch(),f;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(f=function(a){return a.auth.authType},b[0]=f):f=b[0];f=d("PolarisReactRedux.react").useSelector(f);var g;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(g=function(a){return(a=a.auth.signup)==null?void 0:a.step},b[1]=g):g=b[1];g=d("PolarisReactRedux.react").useSelector(g);var h;b[2]!==e?(h=function(a){e(d("PolarisAuthActions").switchAuthType(a))},b[2]=e,b[3]=h):h=b[3];var k=h,l;bb10:switch(f){case d("PolarisAuthActionConstants").AUTH.fbLogin:case d("PolarisAuthActionConstants").AUTH.fbAccountPicker:case d("PolarisAuthActionConstants").AUTH.oneTapLogin:b[4]!==k?(h=j.jsx(c("IGDSButton.react"),{display:"block",label:d("PolarisNavigationStrings").LOG_IN_EXISTING_ACCOUNT,onClick:function(){return k(d("PolarisAuthActionConstants").AUTH.login)},variant:"primary_link"}),b[4]=k,b[5]=h):h=b[5];l=h;break bb10;case d("PolarisAuthActionConstants").AUTH.signup:if(g!==d("PolarisSignupTypes").STEP.base)return null;case d("PolarisAuthActionConstants").AUTH.login:case d("PolarisAuthActionConstants").AUTH.twoFactor:default:return null}b[6]!==l||b[7]!==a?(f=l!=null?j.jsxs(j.Fragment,{children:[(d("PolarisUA").isDesktop()||d("PolarisUA").isMobile()&&a>1)&&j.jsx(c("IGDSDivider.react"),{}),j.jsx(c("IGDSBox.react"),{alignItems:"center",height:d("PolarisSwitchAccountsModalLegacyConstants").FOOTER_HEIGHT,justifyContent:"center",position:"relative",children:l})]}):null,b[6]=l,b[7]=a,b[8]=f):f=b[8];return f}g["default"]=a}),98);
__d("PolarisSwitchAccountsModalLegacyHeader.react",["IGDSBox.react","IGDSDivider.react","IGDSIconButton.react","IGDSXPanoFilledIcon.react","PolarisAuthActionConstants","PolarisAuthStrings","PolarisGenericStrings","PolarisIGCoreModalHeader.react","PolarisIGCoreText","PolarisReactRedux.react","PolarisUA","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(8);a=a.onClose;var e;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=function(a){return a.auth.authType},b[0]=e):e=b[0];e=d("PolarisReactRedux.react").useSelector(e);switch(e){case d("PolarisAuthActionConstants").AUTH.fbLogin:case d("PolarisAuthActionConstants").AUTH.fbAccountPicker:case d("PolarisAuthActionConstants").AUTH.oneTapLogin:if(d("PolarisUA").isDesktop()){b[1]!==a?(e=j.jsx(c("PolarisIGCoreModalHeader.react"),{onClose:a,truncateText:!0,children:d("PolarisAuthStrings").SWITCH_ACCOUNTS}),b[1]=a,b[2]=e):e=b[2];return e}b[3]===Symbol["for"]("react.memo_cache_sentinel")?(e=j.jsx(c("IGDSBox.react"),{marginBottom:1,paddingX:4,paddingY:3,position:"relative",children:j.jsx(c("PolarisIGCoreText"),{display:"truncated",size:"label",weight:"semibold",children:d("PolarisAuthStrings").SWITCH_ACCOUNTS})}),b[3]=e):e=b[3];b[4]===Symbol["for"]("react.memo_cache_sentinel")?(e=j.jsxs(c("IGDSBox.react"),{alignItems:"center",position:"relative",children:[e,j.jsx(c("IGDSDivider.react"),{})]}),b[4]=e):e=b[4];return e;case d("PolarisAuthActionConstants").AUTH.login:case d("PolarisAuthActionConstants").AUTH.twoFactor:case d("PolarisAuthActionConstants").AUTH.signup:if(d("PolarisUA").isMobile())return null;b[5]===Symbol["for"]("react.memo_cache_sentinel")?(e=j.jsx(c("IGDSXPanoFilledIcon.react"),{alt:d("PolarisGenericStrings").CLOSE_TEXT,size:18}),b[5]=e):e=b[5];b[6]!==a?(e=j.jsx(c("IGDSBox.react"),{alignItems:"end",marginTop:3,paddingX:3,position:"relative",children:j.jsx(c("IGDSIconButton.react"),{onClick:a,children:e})}),b[6]=a,b[7]=e):e=b[7];return e;default:return null}}g["default"]=a}),98);
__d("PolarisSwitchAccountsModalLegacy.react",["IGCoreModal.react","IGDSBox.react","PolarisAccountSwitcherActions","PolarisAuthActionConstants","PolarisAuthActions","PolarisFBConnectHelpers","PolarisIGCoreSheet.react","PolarisOneTapLoginStorage","PolarisReactRedux.react","PolarisSwitchAccountsModalLegacyBody.react","PolarisSwitchAccountsModalLegacyConstants","PolarisSwitchAccountsModalLegacyFooter.react","PolarisSwitchAccountsModalLegacyHeader.react","PolarisUA","Promise","react","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).unstable_useMemoCache,k=i,l=1,m=69;function n(a){var b=window.innerHeight;a=a*d("PolarisSwitchAccountsModalLegacyConstants").ITEM_HEIGHT+m+(d("PolarisSwitchAccountsModalLegacyConstants").FOOTER_HEIGHT+l);a=a/b*100;return Math.round(a)+1}function a(){var a,e=j(29),f=d("PolarisReactRedux.react").useDispatch(),g=c("usePolarisViewer")(),i;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(i=function(a){return a.auth.authType},e[0]=i):i=e[0];i=d("PolarisReactRedux.react").useSelector(i);var l;e[1]!==f?(l=function(){(h||(h=b("Promise"))).resolve(f(d("PolarisAccountSwitcherActions").closeAccountSwitcher())).then(function(){return f(d("PolarisAuthActions").resetAuth())})},e[1]=f,e[2]=l):l=e[2];l=l;var m=(a=d("PolarisReactRedux.react").useSelector(function(a){return a.fb.igProfiles}))==null?void 0:a.filter(function(a){return a.username!==(g==null?void 0:g.username)&&d("PolarisFBConnectHelpers").isFBCUnique(a.username)});a=(a=d("PolarisReactRedux.react").useSelector(function(a){return a.fxSSO.igProfiles}))==null?void 0:a.filter(function(a){return a.username!==(g==null?void 0:g.username)&&d("PolarisFBConnectHelpers").isFBCUnique(a.username)&&(!m||!m.some(function(b){return b.username===a.username}))});if(e[3]!==g){var o=d("PolarisOneTapLoginStorage").getLoginNonces();o=Object.keys(o).filter(function(a){return a!==(g==null?void 0:g.id)});e[3]=g;e[4]=o}else o=e[4];o=o;var p=(g!=null?1:0)+(m!=null?m.length:0)+o.length+(a!=null?a.length:0),q;e[5]!==l?(q=k.jsx(c("PolarisSwitchAccountsModalLegacyHeader.react"),{onClose:l}),e[5]=l,e[6]=q):q=e[6];var r;e[7]!==m||e[8]!==a||e[9]!==o?(r=k.jsx(c("PolarisSwitchAccountsModalLegacyBody.react"),{fbConnectedUsers:m,igConnectedUsers:a,oneTapUserIds:o}),e[7]=m,e[8]=a,e[9]=o,e[10]=r):r=e[10];e[11]!==p?(a=k.jsx(c("PolarisSwitchAccountsModalLegacyFooter.react"),{numAccounts:p}),e[11]=p,e[12]=a):a=e[12];e[13]!==q||e[14]!==r||e[15]!==a?(o=k.jsxs(c("IGDSBox.react"),{"data-testid":void 0,height:"100%",children:[q,r,a]}),e[13]=q,e[14]=r,e[15]=a,e[16]=o):o=e[16];q=o;if(d("PolarisUA").isDesktop()||d("PolarisUA").isMobile()&&(i===d("PolarisAuthActionConstants").AUTH.login||i===d("PolarisAuthActionConstants").AUTH.twoFactor)){e[17]!==l||e[18]!==q?(r=k.jsx(c("IGCoreModal.react"),{closeButtonPosition:d("PolarisUA").isMobile()?"background":void 0,disablePopInAnimation:!0,onClose:l,children:q}),e[17]=l,e[18]=q,e[19]=r):r=e[19];return r}a=n(p);if(a>=100){e[20]===Symbol["for"]("react.memo_cache_sentinel")?(o=["100%"],e[20]=o):o=e[20];i=o}else if(p<=3||a<=50){r=a+"%";e[21]!==r?(o=[r],e[21]=r,e[22]=o):o=e[22];i=o}else{p=a+"%";e[23]!==p?(r=["50%",p],e[23]=p,e[24]=r):r=e[24];i=r}e[25]!==l||e[26]!==i||e[27]!==q?(o=k.jsx(c("PolarisIGCoreSheet.react"),{onClose:l,stops:i,children:q}),e[25]=l,e[26]=i,e[27]=q,e[28]=o):o=e[28];return o}g["default"]=a}),98);
__d("PolarisSwitchAccountsModal.react",["PolarisSwitchAccountsModalLegacy.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(){var a=i(1),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx(c("PolarisSwitchAccountsModalLegacy.react"),{}),a[0]=b):b=a[0];return b}g["default"]=a}),98);
__d("MessengerAppColorMode",[],(function(a,b,c,d,e,f){a=Object.freeze({NORMAL:1,DARK:2,NONE:3});f["default"]=a}),66);
__d("useCheckMessageIntegrityForSecureThreadNoOp",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback;function a(a,b,c,d,e){return i(function(a,b){},[])}g["default"]=a}),98);