;/*FB_PKG_DELIM*/

__d("usePolarisExploreGridItemSrcSet_imageCandiates.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{plural:!0},name:"usePolarisExploreGridItemSrcSet_imageCandiates",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},action:"THROW",path:"url"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},action:"THROW",path:"width"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},action:"THROW",path:"height"}],type:"XDTImageCandidate",abstractKey:null};e.exports=a}),null);
__d("usePolarisMediaVPVDImpressionLogger_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisMediaVPVDImpressionLogger_media",selections:[a,{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inventory_source",storageKey:null}],type:"XDTMediaDict",abstractKey:null}}();e.exports=a}),null);
__d("useSingleVPVDImpression",["react","useVPVDImpression","vpvdConstants"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useRef;function a(a){var b=a.isLite,e=a.minVisiblePx;e=e===void 0?d("vpvdConstants").DEFAULT_MIN_VISIBLE_PX:e;var f=a.minVisibleTimeMs;f=f===void 0?d("vpvdConstants").DEFAULT_MIN_VISIBLE_TIME_MS:f;var g=a.onVPVDEnd,h=a.onVPVDStart,k=j(!1),l=j(!1);a=i(function(a){if(l.current===!0)return;g&&g(a);l.current=!0},[g]);var m=i(function(a){if(k.current===!0)return;h&&h(a);k.current=!0},[h]);return c("useVPVDImpression")({isLite:b,minVisiblePx:e,minVisibleTimeMs:f,onVPVDEnd:a,onVPVDStart:m})}g["default"]=a}),98);
__d("usePolarisExploreGridItemSrcSet",["CometRelay","PolarisMediaConstants","err","react","usePolarisExploreGridItemSrcSet_imageCandiates.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).unstable_useMemoCache;function k(a){var b;return{configHeight:(b=a.height)!=null?b:0,configWidth:(b=a.width)!=null?b:0,src:(b=a.url)!=null?b:""}}var l=h!==void 0?h:h=b("usePolarisExploreGridItemSrcSet_imageCandiates.graphql");function a(a,b,e){var f=j(4);b=d("CometRelay").useFragment(l,b);e=d("CometRelay").useFragment(l,e);if(a===d("PolarisMediaConstants").MediaTypes.CAROUSEL_V2&&e!=null){f[0]!==e?(a=e.map(function(a){return k({height:a.height,url:a.url,width:a.width})}),f[0]=e,f[1]=a):a=f[1];return a}else if(b!=null){f[2]!==b?(e=b.map(function(a){return k({height:a.height,url:a.url,width:a.width})}),f[2]=b,f[3]=e):e=f[3];return e}throw c("err")("image candidates cannot be null.")}g["default"]=a}),98);
__d("usePolarisMediaVPVDImpressionLogger",["CometRelay","PolarisNavChain","react","requireDeferred","usePolarisMediaVPVDImpressionLogger_media.graphql","useSingleVPVDImpression"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).unstable_useMemoCache,k=c("requireDeferred")("InstagramOrganicVpvdImpFalcoEvent").__setRef("usePolarisMediaVPVDImpressionLogger");function a(a,e){var f=j(7),g=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisMediaVPVDImpressionLogger_media.graphql"),a),i=g.pk;if(f[0]!==g.user){a=(a=g.user)==null?void 0:a.pk;f[0]=g.user;f[1]=a}else a=f[1];var l=a;f[2]!==i||f[3]!==l||f[4]!==g.inventory_source||f[5]!==e?(a=function(a){var b=a.visibleDuration;if(i==null||l==null)return;k.onReady(function(a){a=a.log;a(function(){var a;return{client_sub_impression:!1,inventory_source:g.inventory_source,m_pk:i+"_"+l,max_duration_ms:b,module_name:e,nav_chain:(a=c("PolarisNavChain").getInstance())==null?void 0:a.getNavChainForSend()}})})},f[2]=i,f[3]=l,f[4]=g.inventory_source,f[5]=e,f[6]=a):a=f[6];f=c("useSingleVPVDImpression")({onVPVDEnd:a});a=f[0];return a}g["default"]=a}),98);