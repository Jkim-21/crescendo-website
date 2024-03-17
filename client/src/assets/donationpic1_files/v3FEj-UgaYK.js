;/*FB_PKG_DELIM*/

__d("PolarisVpvdImpressionActionForCarousel_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{plural:!0},name:"PolarisVpvdImpressionActionForCarousel_media",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"pk"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisVpvdImpressionActionForClip_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisVpvdImpressionActionForClip_media",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"pk"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisVpvdImpressionActionForPost_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisVpvdImpressionActionForPost_media",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"pk"},{alias:null,args:null,kind:"ScalarField",name:"media_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inventory_source",storageKey:null},{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisFollowerListDialogContentWrapperQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"6753527828092175",metadata:{},name:"PolarisFollowerListDialogContentWrapperQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisVpvdImpressionAction.next.react",["CometRelay","InstagramAdVpvdImpFalcoEvent","InstagramOrganicCarouselVpvdImpFalcoEvent","InstagramOrganicVpvdImpFalcoEvent","PolarisContainerModuleUtils","PolarisLoggerUtils","PolarisNavChain","PolarisViewpointActionUtils","PolarisVpvdImpressionActionForCarousel_media.graphql","PolarisVpvdImpressionActionForClip_media.graphql","PolarisVpvdImpressionActionForPost_media.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l=(k||d("react")).unstable_useMemoCache,m=250,n=500,o=new Map(),p=new Map(),q=new Set();function r(a,b){var c=o.get(a);b.percentVisible>=.5&&c==null&&o.set(a,b.snapshotTime);if(b.percentVisible<.5&&c!=null){c=b.snapshotTime-c;p.set(a,c+((c=p.get(a))!=null?c:0));o["delete"](a)}c=(c=p.get(a))!=null?c:0;if(b.state==="exited"&&c>=m){p["delete"](a);return c}return null}function s(a){return a>=n?a:null}function a(a,e,f,g){var i=l(8);a=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisVpvdImpressionActionForPost_media.graphql"),a);var j=a.inventory_source,k=a.media_type,m=a.pk,n=a.user;i[0]!==f||i[1]!==g||i[2]!==m||i[3]!==j||i[4]!==n||i[5]!==k||i[6]!==e?(a=function(a){var b,h=f!=null&&g!=null,i=m;h&&f!=null&&g!=null&&(i=f);a=r(i,a);if(a==null)return;var l={client_sub_impression:q.has(i),inventory_source:j,legacy_duration_ms:s(a),m_pk:d("PolarisViewpointActionUtils").getMPKForFeedMediaDict(m,n==null?void 0:n.id),m_t:(b=k==null?void 0:k.toString())!=null?b:"",max_duration_ms:a,nav_chain:(b=c("PolarisNavChain").getInstance())==null?void 0:b.getNavChainForSend(),pigeon_reserved_keyword_module:d("PolarisContainerModuleUtils").getContainerModule(e),pk:n==null?void 0:n.id,sum_duration_ms:a};h&&f!=null&&g!=null?c("InstagramAdVpvdImpFalcoEvent").log(function(){var a;return babelHelpers["extends"]({},l,{ad_id:f,m_pk:(a=l.m_pk)!=null?a:"",max_duration_ms:l.max_duration_ms.toString(),tracking_token:g})}):c("InstagramOrganicVpvdImpFalcoEvent").log(function(){return babelHelpers["extends"]({},l)});q.add(i)},i[0]=f,i[1]=g,i[2]=m,i[3]=j,i[4]=n,i[5]=k,i[6]=e,i[7]=a):a=i[7];return a}function e(a,e,f,g,h){var j=l(8);e=d("CometRelay").useFragment(i!==void 0?i:i=b("PolarisVpvdImpressionActionForCarousel_media.graphql"),e);if(e==null){var k;j[0]===Symbol["for"]("react.memo_cache_sentinel")?(k=[],j[0]=k):k=j[0];return k}var m=e[0].pk;j[1]!==m||j[2]!==g||j[3]!==h||j[4]!==a||j[5]!==f||j[6]!==e?(k=e.map(function(b,e){var i=b.pk;return function(b){var j=r(i,b);if(j==null)return;c("InstagramOrganicCarouselVpvdImpFalcoEvent").log(function(){var b;return{carousel_cover_media_id:d("PolarisLoggerUtils").getFormattedMediaID(m,(b=g)!=null?b:""),carousel_index:e.toString(),carousel_media_id:d("PolarisLoggerUtils").getFormattedMediaID(i,(b=g)!=null?b:""),carousel_starting_media_id:m,client_sub_impression:q.has(i),inventory_source:h,legacy_duration_ms:s(j),m_pk:d("PolarisLoggerUtils").getFormattedMediaID(a,(b=g)!=null?b:""),max_duration_ms:j,nav_chain:(b=c("PolarisNavChain").getInstance())==null?void 0:b.getNavChainForSend(),pigeon_reserved_keyword_module:d("PolarisContainerModuleUtils").getContainerModule(f),sum_duration_ms:j}});q.add(i)}}),j[1]=m,j[2]=g,j[3]=h,j[4]=a,j[5]=f,j[6]=e,j[7]=k):k=j[7];return k}function f(a,b,e,f,g,h,i,j,k){return function(l){var m=d("PolarisContainerModuleUtils").getContainerModule(h);if(b==null)return;var n=r(b,l);if(n==null)return;c("InstagramOrganicVpvdImpFalcoEvent").log(function(){var d;return{client_sub_impression:q.has(b),is_stories_pog_impression:!j,legacy_duration_ms:s(n),m_pk:b,max_duration_ms:n,nav_chain:(d=c("PolarisNavChain").getInstance())==null?void 0:d.getNavChainForSend(),pigeon_reserved_keyword_module:(d=i)!=null?d:m,reel_id:a,reel_position:e.toString(),sum_duration_ms:n,tray_session_id:f,viewer_session_id:g}});q.add(b);j===!1&&k(!0)}}function t(a,e,f){var g=l(4);a=d("CometRelay").useFragment(j!==void 0?j:j=b("PolarisVpvdImpressionActionForClip_media.graphql"),a);var h=a.pk;g[0]!==h||g[1]!==f||g[2]!==e?(a=function(a){var b=r(h,a);if(b==null)return;c("InstagramOrganicVpvdImpFalcoEvent").log(function(){var a;return{client_sub_impression:q.has(h),legacy_duration_ms:s(b),m_pk:h,max_duration_ms:b,nav_chain:(a=c("PolarisNavChain").getInstance())==null?void 0:a.getNavChainForSend(),pigeon_reserved_keyword_module:d("PolarisContainerModuleUtils").getContainerModule(f),reel_id:h,reel_position:e.toString(),sum_duration_ms:b}});q.add(h)},g[0]=h,g[1]=f,g[2]=e,g[3]=a):a=g[3];return a}g.getDwellTime=r;g.usePostVpvdImpressionAction=a;g.useCarouselVpvdImpressionAction=e;g.makeStoriesVpvdImpressionAction=f;g.useClipVpvdImpressionAction=t}),98);