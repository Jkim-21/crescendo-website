;/*FB_PKG_DELIM*/

__d("PolarisSuggestedUserListQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"6934450413267510",metadata:{},name:"PolarisSuggestedUserListQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisFeedTimelineRootV2Query$Parameters",["PolarisShareMenu.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"7620256754673611",metadata:{},name:"PolarisFeedTimelineRootV2Query",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__PolarisShareMenurelayprovider:b("PolarisShareMenu.relayprovider")}}};e.exports=a}),null);
__d("PolarisPanavisionFeedRoot.entrypoint",["JSResourceForInteraction","PolarisFeedTimelineRootV2Query$Parameters","PolarisFeedVariants","PolarisStoriesV3TrayQuery$Parameters","PolarisSuggestedUserListQuery$Parameters","gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeParams;a=a.routeProps;var d=c("PolarisFeedVariants").cast(b.variant),e=d!=null&&d!=="home"?{pagination_source:String(d)}:{};a={polarisFeedTimelineQuery:{options:{},parameters:c("PolarisFeedTimelineRootV2Query$Parameters"),variables:{data:babelHelpers["extends"]({},e,{device_id:a.device_id,is_async_ads_double_request:"0",is_async_ads_in_headload_enabled:"0",is_async_ads_rti:"0",rti_delivery_backend:"0"}),variant:(e=b.variant)!=null?e:String("home")}}};c("gkx")("25302")&&(a=babelHelpers["extends"]({},a,{polarisSuggestedUserListQuery:{options:{},parameters:c("PolarisSuggestedUserListQuery$Parameters"),variables:{data:{max_id:"",max_number_to_display:5,module:"discover_people",paginate:!0}}}}));b=d==null||d==="home";b=b||d==="following"&&c("qex")._("838")===!0;b=b&&c("gkx")("600");b&&(a=babelHelpers["extends"]({},a,{storiesTrayQuery:{options:{},parameters:c("PolarisStoriesV3TrayQuery$Parameters"),variables:{data:{is_following_feed:d==="following"}}}}));return{queries:a}},root:c("JSResourceForInteraction")("PolarisFeedRoot.next.react").__setRef("PolarisPanavisionFeedRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisAccountStatusRootQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6299060110206363"}),null);