;/*FB_PKG_DELIM*/

__d("PolarisProfileReelsTabContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"7191572580905225",metadata:{},name:"PolarisProfileReelsTabContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisProfileTaggedTabContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"7289408964443685",metadata:{},name:"PolarisProfileTaggedTabContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisArchivePageRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisArchivePageRoot.react").__setRef("PolarisArchivePageRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisProfileReelsTabRoot.entrypoint",["JSResourceForInteraction","PolarisProfileReelsTabContentQuery$Parameters","buildPolarisProfileRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildPolarisProfileRoute.entrypoint")(c("JSResourceForInteraction")("PolarisProfileReelsTabRoot.react").__setRef("PolarisProfileReelsTabRoot.entrypoint"),function(a){a=a.routeProps;return{queries:{contentQuery:{options:{},parameters:c("PolarisProfileReelsTabContentQuery$Parameters"),variables:{data:{include_feed_video:!0,page_size:12,target_user_id:a.id}}}}}});g["default"]=a}),98);
__d("PolarisProfileTaggedTabRoot.entrypoint",["JSResourceForInteraction","PolarisProfileTaggedTabContentQuery$Parameters","buildPolarisProfileRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildPolarisProfileRoute.entrypoint")(c("JSResourceForInteraction")("PolarisProfileTaggedTabRoot.react").__setRef("PolarisProfileTaggedTabRoot.entrypoint"),function(a){a=a.routeProps;return{queries:{contentQuery:{options:{},parameters:c("PolarisProfileTaggedTabContentQuery$Parameters"),variables:{count:12,user_id:a.id}}}}});g["default"]=a}),98);