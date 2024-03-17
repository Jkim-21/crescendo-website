;/*FB_PKG_DELIM*/

__d("PolarisMediaShareButton_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisMediaShareButton_media",selections:[{alias:null,args:null,kind:"ScalarField",name:"inventory_source",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"logging_info_token",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_reshare",storageKey:null},{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_private",storageKey:null},a],storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"product_type",storageKey:null},{args:null,kind:"FragmentSpread",name:"usePolarisIsMediaShareable_media"}],type:"XDTMediaDict",abstractKey:null}}();e.exports=a}),null);
__d("PolarisPhotoOverlayLikes_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisPhotoOverlayLikes_media",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"pk"},{alias:null,args:null,kind:"ScalarField",name:"has_liked",storageKey:null},{args:null,kind:"FragmentSpread",name:"usePolarisLikeMedia_media"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisPhotoOverlay_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisPhotoOverlay_media",selections:[{alias:null,args:null,concreteType:"XDTUserTagInfosDict",kind:"LinkedField",name:"usertags",plural:!1,selections:[{alias:null,args:null,concreteType:"XDTUserTagInfoDict",kind:"LinkedField",name:"in",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"PolarisPhotoUserTags_tags"}],storageKey:null}],storageKey:null}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisPhotoUserTags_tags.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{plural:!0},name:"PolarisPhotoUserTags_tags",selections:[{alias:null,args:null,kind:"ScalarField",name:"position",storageKey:null},{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null}],type:"XDTUserTagInfoDict",abstractKey:null};e.exports=a}),null);
__d("PolarisImmersiveViewerMediaOverlay_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisImmersiveViewerMediaOverlay_media",selections:[{args:null,kind:"FragmentSpread",name:"PolarisImmersiveViewerMediaHeader_media"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisImmersiveMediaViewerCommentsButton_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisImmersiveMediaViewerCommentsButton_media",selections:[{alias:null,args:null,kind:"ScalarField",name:"comment_count",storageKey:null}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisImmersiveMediaViewerMoreButton_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisImmersiveMediaViewerMoreButton_media",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"pk"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisImmersiveMediaViewerUserFeedback_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisImmersiveMediaViewerUserFeedback_media",selections:[{args:null,kind:"FragmentSpread",name:"PolarisClipsDesktopLikeButtonFragment_media"},{args:null,kind:"FragmentSpread",name:"PolarisMediaShareButton_media"},{args:null,kind:"FragmentSpread",name:"PolarisImmersiveMediaViewerCommentsButton_media"},{args:null,kind:"FragmentSpread",name:"PolarisImmersiveMediaViewerMoreButton_media"},{args:null,kind:"FragmentSpread",name:"PolarisMediaSaveButton_media"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisImmersiveMediaViewerCommentInput.react",["PolarisLexicalCommentInput.react","PolarisLexicalCommentInputWrapper.react","PolarisPostDetailsSectionProvider.react","emptyFunction","react","usePolarisLexicalCommentInputState","usePolarisSelector"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(17),e=a.isSidecar,f=a.isVideo,g=a.ownerId,h=a.postId,k=a.viewerId;a=a.viewerProfilePicture;var l=d("PolarisPostDetailsSectionProvider.react").usePolarisPostDetailsSectionProvider(),m;b[0]!==h?(m=function(a){return(a=a.pendingComments[h])!=null?a:{}},b[0]=h,b[1]=m):m=b[1];m=c("usePolarisSelector")(m);var n=m.repliedToCommentAuthorId,o=m.repliedToCommentId,p=m.repliedToCommentParentId;m=m.repliedToUsername;var q;b[2]!==l||b[3]!==e||b[4]!==f||b[5]!==g||b[6]!==h||b[7]!==n||b[8]!==o||b[9]!==p||b[10]!==m||b[11]!==k||b[12]!==a?(q={analyticsContext:l,clearCurrentReply:c("emptyFunction"),isSidecar:e,isVideo:f,ownerId:g,postId:h,repliedToCommentAuthorId:n,repliedToCommentId:o,repliedToCommentParentId:p,repliedToUsername:m,viewerId:k,viewerProfilePicture:a},b[2]=l,b[3]=e,b[4]=f,b[5]=g,b[6]=h,b[7]=n,b[8]=o,b[9]=p,b[10]=m,b[11]=k,b[12]=a,b[13]=q):q=b[13];b[14]===Symbol["for"]("react.memo_cache_sentinel")?(l=j.jsx(c("PolarisLexicalCommentInputWrapper.react"),{children:j.jsx(c("PolarisLexicalCommentInput.react"),{initialCommentText:"",initialFocus:!1})}),b[14]=l):l=b[14];b[15]!==q?(e=j.jsx(d("usePolarisLexicalCommentInputState").PolarisLexicalCommentInputStateProvider,{value:q,children:l}),b[15]=q,b[16]=e):e=b[16];return e}g["default"]=a}),98);
__d("PolarisMediaShareButton.react",["fbt","CometPressable.react","CometRelay","DirectReshareButtonTapFalcoEvent","FBLogger","IGDSDirectPanoOutlineIcon.react","IGDSecureShareSheetDialogPlaceholder.react","JSResourceForInteraction","PolarisConfig","PolarisContainerModuleUtils","PolarisLoggerUtils","PolarisMediaShareButton_media.graphql","PolarisNavChain","gkx","qex","react","useIGDSLazyDialog","useIGDShareSheetOnSubmitPost","usePolarisAnalyticsContext","usePolarisIsMediaShareable","uuidv4"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));e=j;e.useCallback;e.useMemo;var l=e.unstable_useMemoCache,m=c("JSResourceForInteraction")("IGDSecureShareSheetDialog.react").__setRef("PolarisMediaShareButton.react"),n={button:{":hover_opacity":"x1mywscw",$$css:!0}};function a(a){var e,f,g=l(24);a=a.media;var j=d("CometRelay").useFragment(i!==void 0?i:i=b("PolarisMediaShareButton_media.graphql"),a);a=c("usePolarisIsMediaShareable")(j);e=(j==null?void 0:(e=j.user)==null?void 0:e.is_private)!==!0&&j.can_viewer_reshare===!0;f=(j==null?void 0:(f=j.user)==null?void 0:f.is_private)===!0&&c("qex")._("398");f===!0&&(e=a);g[0]===Symbol["for"]("react.memo_cache_sentinel")?(f=function(a){return k.jsx(c("IGDSecureShareSheetDialogPlaceholder.react"),{onClose:a})},g[0]=f):f=g[0];a=c("useIGDSLazyDialog")(m,f);var o=a[0];f=a[1];var p=c("usePolarisAnalyticsContext")();g[1]!==j?(a=j==null?void 0:j.pk,g[1]=j,g[2]=a):a=g[2];var q=a;if(g[3]!==j){a=j==null?void 0:(a=j.user)==null?void 0:a.pk;g[3]=j;g[4]=a}else a=g[4];var r=a;j==null?void 0:j.product_type;if(g[5]!==q){a=(a=q)!=null?a:"";g[5]=q;g[6]=a}else a=g[6];if(g[7]!==r){var s;s=(s=r)!=null?s:"";g[7]=r;g[8]=s}else s=g[8];var t;g[9]!==j?(t=j==null?void 0:j.product_type,g[9]=j,g[10]=t):t=g[10];a={id:a,loggingInfoToken:j.logging_info_token,mediaOverlayInfo:null,owner:{id:s},productType:t};var u=a,v=c("useIGDShareSheetOnSubmitPost")(u);g[11]!==q||g[12]!==r||g[13]!==j.inventory_source||g[14]!==j.logging_info_token||g[15]!==p||g[16]!==o||g[17]!==v||g[18]!==u?(s=function(){if(d("PolarisConfig").isLoggedIn()){var a;if(q==null||r==null){c("FBLogger")("ig_web").mustfix("Unable to open share sheet - empty post id or user id");return}var b=c("uuidv4")();a=(a=c("gkx")("25289")&&c("qex")._("340"))!=null?a:!1;a&&c("DirectReshareButtonTapFalcoEvent").log(function(){var a;return{a_pk:r,canonical_nav_chain:(a=c("PolarisNavChain").getInstance())==null?void 0:a.getNavChainForSend(),inventory_source:j.inventory_source,m_pk:d("PolarisLoggerUtils").getFormattedMediaID(q,r),pigeon_reserved_keyword_module:d("PolarisContainerModuleUtils").getContainerModule(p),ranking_info_token:j.logging_info_token,share_sheet_session_id:b}});o({flowInstanceId:b,onSubmit:v,post:u})}},g[11]=q,g[12]=r,g[13]=j.inventory_source,g[14]=j.logging_info_token,g[15]=p,g[16]=o,g[17]=v,g[18]=u,g[19]=s):s=g[19];t=s;if(e===!1)return null;g[20]===Symbol["for"]("react.memo_cache_sentinel")?(a=k.jsx(c("IGDSDirectPanoOutlineIcon.react"),{alt:h._("__JHASH__dCpyyTpkyrM__JHASH__"),size:24}),g[20]=a):a=g[20];g[21]!==t||g[22]!==f?(s=k.jsx(c("CometPressable.react"),{hideFocusOverlay:!0,hideHoverOverlay:!0,onPress:t,overlayPressedStyle:null,ref:f,xstyle:n.button,children:a}),g[21]=t,g[22]=f,g[23]=s):s=g[23];return s}g["default"]=a}),98);
__d("PolarisPhotoUserTags.react",["CometRelay","IGDSButton.react","IGDSTooltip.react","PolarisPhotoUserTags_tags.graphql","XPolarisProfileControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).unstable_useMemoCache,k=i;function a(a){var e=j(7),f=a.tags,g=a.visible;f=(a=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisPhotoUserTags_tags.graphql"),f))!=null?a:[];if(e[0]!==g||e[1]!==f){e[3]!==g?(a=function(a,b){var d,e;d=(d=a.user)==null?void 0:d.username;return d==null?null:k.jsx("div",{className:"x10l6tqk",style:{left:((e=(e=a.position)==null?void 0:e[0])!=null?e:0)*100+"%",top:((a=(e=a.position)==null?void 0:e[1])!=null?a:0)*100+"%"},children:k.jsx(c("IGDSTooltip.react"),{align:"middle",color:"black",isVisible:g,position:"below",tooltip:k.jsx(c("IGDSButton.react"),{href:c("XPolarisProfileControllerRouteBuilder").buildURL({username:d}),label:d,variant:"white_link"}),useFadeTransition:!0,children:k.jsx("div",{})})},b)},e[3]=g,e[4]=a):a=e[4];a=f.map(a);e[0]=g;e[1]=f;e[2]=a}else a=e[2];e[5]!==a?(f=k.jsx(k.Fragment,{children:a}),e[5]=a,e[6]=f):f=e[6];return f}g["default"]=a}),98);
__d("PolarisPhotoOverlay.react",["CometRelay","PolarisDoubleTappable","PolarisLikeAnimation.react","PolarisMediaTaggedUserIndicator.react","PolarisPhotoOverlayLikes_media.graphql","PolarisPhotoOverlay_media.graphql","PolarisPhotoUserTags.react","PolarisPostDetailsSectionProvider.react","react","useIntersectionObserver","usePolarisLikeMedia"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react"));e=j;e.useCallback;var l=e.useState,m=e.unstable_useMemoCache,n={overlayRoot:{height:"x5yr21d",position:"x10l6tqk",start:"x17qophe",left:null,right:null,top:"x13vifvy",width:"xh8yej3",$$css:!0},taggedUserIndicator:{position:"x10l6tqk",start:"x16q8cke",left:null,right:null,top:"xomnu4r",$$css:!0}};function a(a){var e=m(25),f=a.containerRef,g=a.mediaItemQueryRef;a=a.parentMediaItemQueryRef;g=(g=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisPhotoOverlay_media.graphql"),g).usertags)==null?void 0:g["in"];var j=d("CometRelay").useFragment(i!==void 0?i:i=b("PolarisPhotoOverlayLikes_media.graphql"),a);a=l(!1);var o=a[0],p=a[1];e[0]!==o?(a=function(){p(!o)},e[0]=o,e[1]=a):a=e[1];a=a;var q;e[2]===Symbol["for"]("react.memo_cache_sentinel")?(q=function(){p(!1)},e[2]=q):q=e[2];q=q;var r=d("PolarisPostDetailsSectionProvider.react").usePolarisPostDetailsSectionProvider(),s=l(0),t=s[0],u=s[1],v=c("usePolarisLikeMedia")({analyticsContext:r,mediaFragmentKey:j,sourceOfLike:"double_tap_media"});e[3]!==j.pk||e[4]!==j.has_liked||e[5]!==v||e[6]!==t?(s=function(){j.pk!=null&&j.has_liked!==!0&&v(j.pk,!0),u(t+1)},e[3]=j.pk,e[4]=j.has_liked,e[5]=v,e[6]=t,e[7]=s):s=e[7];r=s;e[8]!==f?(s=function(){var a;return(a=f==null?void 0:f.current)!=null?a:null},e[8]=f,e[9]=s):s=e[9];q=c("useIntersectionObserver")(q,{root:s,threshold:1});e[10]!==g||e[11]!==o?(s=g!=null&&k.jsx(c("PolarisPhotoUserTags.react"),{tags:g,visible:o}),e[10]=g,e[11]=o,e[12]=s):s=e[12];var w;e[13]!==g||e[14]!==a||e[15]!==q?(w=g!=null&&g.length>0&&k.jsx("div",{className:"x10l6tqk x16q8cke xomnu4r",ref:q,children:k.jsx(c("PolarisMediaTaggedUserIndicator.react"),{onPress:a})}),e[13]=g,e[14]=a,e[15]=q,e[16]=w):w=e[16];e[17]!==t?(g=k.jsx(c("PolarisLikeAnimation.react"),{likeEventCount:t},t),e[17]=t,e[18]=g):g=e[18];e[19]!==r||e[20]!==a||e[21]!==s||e[22]!==w||e[23]!==g?(q=k.jsxs(d("PolarisDoubleTappable").DoubleTappable,{onDoubleClick:r,onSingleClick:a,role:"button",xstyle:n.overlayRoot,children:[s,w,g]}),e[19]=r,e[20]=a,e[21]=s,e[22]=w,e[23]=g,e[24]=q):q=e[24];return q}g["default"]=a}),98);
__d("usePolarisMediaShowSavedToastHandler",["fbt","IGDSButton.react","PolarisSavedPostsTypes","XPolarisSavedCollectionsControllerRouteBuilder","react","useIGDSToaster","usePolarisViewer"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react"));b=i;b.useCallback;var k=b.unstable_useMemoCache;function a(){var a=k(3),b=c("usePolarisViewer")(),e=c("useIGDSToaster")(),f=e.add;a[0]!==b||a[1]!==f?(e=function(){var a;a=c("XPolarisSavedCollectionsControllerRouteBuilder").buildUri({collection_id:d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE.ALL_MEDIA_AUTO_COLLECTION,slug:d("PolarisSavedPostsTypes").ALL_POSTS_SAVED_COLLECTION_PATH,username:(a=b==null?void 0:b.username)!=null?a:""});f({actionComponent:j.jsx(c("IGDSButton.react"),{display:"block",href:a.toString(),label:h._("__JHASH__vD_V0nwq90r__JHASH__"),variant:"primary_link"}),message:h._("__JHASH__Ohp7zsmQCxJ__JHASH__"),target:"bottom"},{duration:3e3})},a[0]=b,a[1]=f,a[2]=e):e=a[2];b==null?void 0:b.username;return e}g["default"]=a}),98);
__d("PolarisImmersiveViewerMediaOverlay.react",["CometRelay","PolarisImmersiveViewerMediaHeader.react","PolarisImmersiveViewerMediaOverlay_media.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).unstable_useMemoCache,k=i;function a(a){var e=j(5);a=a.queryReference;a=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisImmersiveViewerMediaOverlay_media.graphql"),a);var f,g;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(f="x19st51t x1ey2m1c x78zum5 x3ieub6 x6dqz5g x47corl x10l6tqk x17qophe xh8yej3",g=function(a){return a.stopPropagation()},e[0]=f,e[1]=g):(f=e[0],g=e[1]);var i;e[2]===Symbol["for"]("react.memo_cache_sentinel")?(i="xqui205 xqmxbcd x1hq5gj4 xmupa6y x1rife3k x1t2a60a x123j3cw x67bb7w x65xoit",e[2]=i):i=e[2];e[3]!==a?(f=k.jsx("div",{className:f,onWheel:g,children:k.jsx("div",{className:i,children:k.jsx(c("PolarisImmersiveViewerMediaHeader.react"),{isOverMedia:!0,queryReference:a})})}),e[3]=a,e[4]=f):f=e[4];return f}g["default"]=a}),98);
__d("usePolarisImmersiveViewerCommentInputFocusEffect",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useState,k=b.unstable_useMemoCache;function a(a,b){var c=k(5),d=j(!1),e=d[0],f=d[1],g;c[0]!==e||c[1]!==a||c[2]!==b?(d=function(){e===!0&&a&&(b(),f(!1))},g=[b,a,e],c[0]=e,c[1]=a,c[2]=b,c[3]=d,c[4]=g):(d=c[3],g=c[4]);i(d,g);return f}g["default"]=a}),98);
__d("PolarisImmersiveMediaViewerCommentsButton.react",["fbt","CometPressable.react","CometRelay","IGDSBox.react","IGDSCommentPanoOutlineIcon.react","IGDSText.react","PolarisImmersiveMediaViewerCommentsButton_media.graphql","PolarisImmersiveMediaViewerLayoutContext.react","PolarisImmersiveViewerCommentInputRefContext.react","react","usePolarisImmersiveViewerCommentInputFocusEffect"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));e=j;e.useCallback;var l=e.useEffect,m=e.useRef,n=e.unstable_useMemoCache,o={commentsButton:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"xdt5ytf",":hover_opacity":"x1mywscw",$$css:!0}};function a(a){var e=n(12);a=a.media;a=d("CometRelay").useFragment(i!==void 0?i:i=b("PolarisImmersiveMediaViewerCommentsButton_media.graphql"),a);var f=d("PolarisImmersiveMediaViewerLayoutContext.react").usePolarisImmersiveMediaViewerLayout(),g=d("PolarisImmersiveViewerCommentInputRefContext.react").usePolarisImmersiveViewerCommentInputRef(),j=m(null),p;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(p=function(){return function(){if(j.current!=null){j.current=null;return window.clearTimeout(j.current)}}},e[0]=p):p=e[0];l(p);var q=function(){(g==null?void 0:g.current)!=null&&(g==null?void 0:g.current.focus())},r=d("PolarisImmersiveMediaViewerLayoutContext.react").usePolarisIsImmersiveViewerFullScreen()===!1,s=c("usePolarisImmersiveViewerCommentInputFocusEffect")(r,q);e[1]!==r||e[2]!==f||e[3]!==s||e[4]!==q?(p=function(){r===!1&&(f==null?void 0:f.dispatch({type:"toggleSidePannel"}),s(!0)),q(),j.current==null&&(f==null?void 0:f.dispatch({hasCommentInputAnimation:!0,type:"commentInputAnimation"}),j.current=window.setTimeout(function(){return f==null?void 0:f.dispatch({hasCommentInputAnimation:!1,type:"commentInputAnimation"})},3e3))},e[1]=r,e[2]=f,e[3]=s,e[4]=q,e[5]=p):p=e[5];p=p;var t;e[6]===Symbol["for"]("react.memo_cache_sentinel")?(t=k.jsx(c("IGDSCommentPanoOutlineIcon.react"),{alt:h._("__JHASH__j7fL_QYzq4H__JHASH__"),size:24}),e[6]=t):t=e[6];var u;e[7]!==a.comment_count?(u=k.jsx(c("IGDSBox.react"),{marginTop:2,children:k.jsx(c("IGDSText.react").Body2,{color:"primaryText",children:a.comment_count})}),e[7]=a.comment_count,e[8]=u):u=e[8];e[9]!==p||e[10]!==u?(a=k.jsxs(c("CometPressable.react"),{hideFocusOverlay:!0,hideHoverOverlay:!0,onPress:p,overlayPressedStyle:null,xstyle:o.commentsButton,children:[t,u]}),e[9]=p,e[10]=u,e[11]=a):a=e[11];return a}g["default"]=a}),98);
__d("PolarisImmersiveMediaViewerMoreButton.react",["fbt","CometPressable.react","CometRelay","IGDSEntryPointPopoverTrigger.react","IGDSMoreHorizontalPanoOutlineIcon.react","PolarisBaseOptionsMenuFallback.react","PolarisImmersiveMediaViewerMoreButton_media.graphql","PolarisMediaOptionsMenu.entrypoint","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=(j||(j=d("react"))).unstable_useMemoCache,l=j,m={button:{flexDirection:"xdt5ytf",":hover_opacity":"x1mywscw",$$css:!0}};function a(a){var e=k(11);a=a.media;a=d("CometRelay").useFragment(i!==void 0?i:i=b("PolarisImmersiveMediaViewerMoreButton_media.graphql"),a);var f;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(f=function(a){return a.stopPropagation()},e[0]=f):f=e[0];var g;e[1]!==a.pk?(g={mediaPK:a.pk},e[1]=a.pk,e[2]=g):g=e[2];e[3]===Symbol["for"]("react.memo_cache_sentinel")?(a={},e[3]=a):a=e[3];e[4]!==g?(a={routeParams:g,routeProps:a},e[4]=g,e[5]=a):a=e[5];var j;e[6]===Symbol["for"]("react.memo_cache_sentinel")?(g=l.jsx(c("PolarisBaseOptionsMenuFallback.react"),{}),j={},e[6]=g,e[7]=j):(g=e[6],j=e[7]);var n;e[8]===Symbol["for"]("react.memo_cache_sentinel")?(n=function(a,b,d){return l.jsx(c("CometPressable.react"),{hideFocusOverlay:!0,hideHoverOverlay:!0,onPress:function(){return b()},overlayPressedStyle:null,ref:a,xstyle:m.button,children:l.jsx(c("IGDSMoreHorizontalPanoOutlineIcon.react"),{alt:h._("__JHASH__vsPR1PMxOLr__JHASH__"),size:24})})},e[8]=n):n=e[8];e[9]!==a?(f=l.jsx("div",{onWheel:f,children:l.jsx(c("IGDSEntryPointPopoverTrigger.react"),{align:"end",entryPointParams:a,fallback:g,otherProps:j,popoverEntryPoint:c("PolarisMediaOptionsMenu.entrypoint"),position:"above",preloadTrigger:"button",children:n})}),e[9]=a,e[10]=f):f=e[10];return f}g["default"]=a}),98);
__d("PolarisImmersiveMediaViewerUserFeedback.react",["CometPlaceholder.react","CometRelay","IGDSBox.react","PolarisClipsDesktopLikeButton.react","PolarisImmersiveMediaViewerCommentsButton.react","PolarisImmersiveMediaViewerMoreButton.react","PolarisImmersiveMediaViewerUserFeedback_media.graphql","PolarisMediaSaveButton.react","PolarisMediaShareButton.react","react","usePolarisMediaShowSavedToastHandler"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).unstable_useMemoCache,k=i;function a(a){var e=j(18);a=a.media;var f=c("usePolarisMediaShowSavedToastHandler")();a=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisImmersiveMediaViewerUserFeedback_media.graphql"),a);var g;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(g="x1y0lptx x78zum5 xcdomlo xdt5ytf x10l6tqk x100vrsf",e[0]=g):g=e[0];var i;e[1]!==a?(i=k.jsx(c("CometPlaceholder.react"),{fallback:null,children:k.jsx(c("PolarisClipsDesktopLikeButton.react"),{fragmentKey:a,iconColor:"ig-primary-icon",shadow:!1})}),e[1]=a,e[2]=i):i=e[2];var l;e[3]!==a?(l=k.jsx(c("IGDSBox.react"),{marginBottom:5,children:k.jsx(c("CometPlaceholder.react"),{fallback:null,children:k.jsx(c("PolarisImmersiveMediaViewerCommentsButton.react"),{media:a})})}),e[3]=a,e[4]=l):l=e[4];var m;e[5]!==a?(m=k.jsx(c("IGDSBox.react"),{alignItems:"center",marginBottom:7,children:k.jsx(c("CometPlaceholder.react"),{fallback:null,children:k.jsx(c("PolarisMediaShareButton.react"),{media:a})})}),e[5]=a,e[6]=m):m=e[6];var n;e[7]!==a||e[8]!==f?(n=k.jsx(c("IGDSBox.react"),{alignItems:"center",marginBottom:7,children:k.jsx(c("CometPlaceholder.react"),{fallback:null,children:k.jsx(c("PolarisMediaSaveButton.react"),{mediaFragmentKey:a,onShowToast:f})})}),e[7]=a,e[8]=f,e[9]=n):n=e[9];e[10]!==a?(f=k.jsx(c("IGDSBox.react"),{alignItems:"center",marginBottom:7,children:k.jsx(c("CometPlaceholder.react"),{fallback:null,children:k.jsx(c("PolarisImmersiveMediaViewerMoreButton.react"),{media:a})})}),e[10]=a,e[11]=f):f=e[11];e[12]!==i||e[13]!==l||e[14]!==m||e[15]!==n||e[16]!==f?(a=k.jsxs("div",{className:g,children:[i,l,m,n,f]}),e[12]=i,e[13]=l,e[14]=m,e[15]=n,e[16]=f,e[17]=a):a=e[17];return a}g["default"]=a}),98);