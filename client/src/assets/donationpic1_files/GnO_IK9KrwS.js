;/*FB_PKG_DELIM*/

__d("PolarisProfileTaggedTabContentQuery_connection.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"},{defaultValue:null,kind:"LocalArgument",name:"user_id"}],b=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"},{kind:"Variable",name:"user_id",variableName:"user_id"}],c={alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"media_type",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},g={alias:null,args:null,concreteType:"XDTImageVersion2",kind:"LinkedField",name:"image_versions2",plural:!1,selections:[{alias:null,args:null,concreteType:"XDTImageCandidate",kind:"LinkedField",name:"candidates",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i={alias:null,args:null,concreteType:"XDTIconSpec",kind:"LinkedField",name:"icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon_glyph",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"icon_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"src",storageKey:null}],storageKey:null},j=[{alias:null,args:null,kind:"ScalarField",name:"dark",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"light",storageKey:null}];j=[{alias:null,args:null,kind:"ScalarField",name:"action",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"action_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"button_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_chevron",storageKey:null},i,{alias:null,args:null,kind:"ScalarField",name:"is_text_centered",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_text",storageKey:null},{alias:null,args:null,concreteType:"XDTTextColorSpec",kind:"LinkedField",name:"secondary_text_color",plural:!1,selections:j,storageKey:null},f,{alias:null,args:null,concreteType:"XDTTextColorSpec",kind:"LinkedField",name:"text_color",plural:!1,selections:j,storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"PolarisProfileTaggedTabContentQuery_connection",selections:[{args:null,kind:"FragmentSpread",name:"PolarisProfileTaggedTabContentFragment"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"PolarisProfileTaggedTabContentQuery_connection",selections:[{alias:null,args:b,concreteType:"XDTProfileFeedConnection",kind:"LinkedField",name:"xdt_api__v1__usertags__user_id__feed_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"XDTProfileFeedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"XDTMediaDict",kind:"LinkedField",name:"node",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"code",storageKey:null},d,{alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null},{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"owner",plural:!1,selections:[e],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},{alias:null,args:null,concreteType:"XDTCommentDict",kind:"LinkedField",name:"caption",plural:!1,selections:[c,f],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"audience",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"carousel_media_count",storageKey:null},{name:"client__srcSet",args:null,fragment:{kind:"InlineFragment",selections:[d,{alias:null,args:null,concreteType:"XDTMediaDict",kind:"LinkedField",name:"carousel_media",plural:!0,selections:[g,e],storageKey:null},g],type:"XDTMediaDict",abstractKey:null},kind:"RelayResolver",storageKey:null,isOutputType:!1},{alias:null,args:null,concreteType:"XDTMediaCroppingInfo",kind:"LinkedField",name:"media_cropping_info",plural:!1,selections:[{alias:null,args:null,concreteType:"XDTMediaCroppingCoordinates",kind:"LinkedField",name:"square_crop",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"crop_bottom",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"crop_left",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"crop_right",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"crop_top",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTMediaOverlayPayloadSchema",kind:"LinkedField",name:"media_overlay_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"overlay_layout",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_type",storageKey:null},h,{alias:null,args:null,concreteType:"XDTButtonSpec",kind:"LinkedField",name:"banner",plural:!1,selections:j,storageKey:null},{alias:null,args:null,concreteType:"XDTBloksRenderResponse",kind:"LinkedField",name:"bloks_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"layout",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTButtonSpec",kind:"LinkedField",name:"buttons",plural:!0,selections:j,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},i,{alias:null,args:null,kind:"ScalarField",name:"misinformation_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_applied_timestamp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sub_category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"preview",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"product_type",storageKey:null},{alias:null,args:null,concreteType:"XDTSpritesheetInfo",kind:"LinkedField",name:"thumbnails",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"sprite_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sprite_urls",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sprite_width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"timeline_pinned_user_ids",storageKey:null},{alias:null,args:null,concreteType:"XDTUpcomingEventDict",kind:"LinkedField",name:"upcoming_event",plural:!1,selections:[h,e],storageKey:null},{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[c,e],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"like_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"like_and_view_counts_disabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"comment_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"comments_disabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"view_count",storageKey:null},e,h],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTPageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_previous_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"start_cursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:b,filters:["user_id","count"],handle:"connection",key:"PolarisProfileTaggedTabContentQuery_xdt_api__v1__usertags__user_id__feed_connection",kind:"LinkedHandle",name:"xdt_api__v1__usertags__user_id__feed_connection"}]},params:{id:"6933349160067627",metadata:{},name:"PolarisProfileTaggedTabContentQuery_connection",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("PolarisProfileTaggedTabContentFragment.graphql",["PolarisProfileTaggedTabContentQuery_connection.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["xdt_api__v1__usertags__user_id__feed_connection"];return{argumentDefinitions:[{kind:"RootArgument",name:"after"},{kind:"RootArgument",name:"before"},{kind:"RootArgument",name:"count"},{kind:"RootArgument",name:"first"},{kind:"RootArgument",name:"last"},{kind:"RootArgument",name:"user_id"}],kind:"Fragment",metadata:{connection:[{count:null,cursor:null,direction:"bidirectional",path:a}],refetch:{connection:{forward:{count:"first",cursor:"after"},backward:{count:"last",cursor:"before"},path:a},fragmentPathInResult:[],operation:b("PolarisProfileTaggedTabContentQuery_connection.graphql")}},name:"PolarisProfileTaggedTabContentFragment",selections:[{alias:"xdt_api__v1__usertags__user_id__feed_connection",args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"user_id",variableName:"user_id"}],concreteType:"XDTProfileFeedConnection",kind:"LinkedField",name:"__PolarisProfileTaggedTabContentQuery_xdt_api__v1__usertags__user_id__feed_connection_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"XDTProfileFeedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"XDTMediaDict",kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"PolarisProfilePostsGrid_media"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTPageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_previous_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"start_cursor",storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null}}();e.exports=a}),null);
__d("PolarisProfileTaggedTabContentQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"after"},b={defaultValue:null,kind:"LocalArgument",name:"before"},c={defaultValue:null,kind:"LocalArgument",name:"count"},d={defaultValue:null,kind:"LocalArgument",name:"first"},e={defaultValue:null,kind:"LocalArgument",name:"last"},f={defaultValue:null,kind:"LocalArgument",name:"user_id"},g=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"},{kind:"Variable",name:"user_id",variableName:"user_id"}],h={alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"media_type",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},l={alias:null,args:null,concreteType:"XDTImageVersion2",kind:"LinkedField",name:"image_versions2",plural:!1,selections:[{alias:null,args:null,concreteType:"XDTImageCandidate",kind:"LinkedField",name:"candidates",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},n={alias:null,args:null,concreteType:"XDTIconSpec",kind:"LinkedField",name:"icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon_glyph",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"icon_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"src",storageKey:null}],storageKey:null},o=[{alias:null,args:null,kind:"ScalarField",name:"dark",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"light",storageKey:null}];o=[{alias:null,args:null,kind:"ScalarField",name:"action",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"action_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"button_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_chevron",storageKey:null},n,{alias:null,args:null,kind:"ScalarField",name:"is_text_centered",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_text",storageKey:null},{alias:null,args:null,concreteType:"XDTTextColorSpec",kind:"LinkedField",name:"secondary_text_color",plural:!1,selections:o,storageKey:null},k,{alias:null,args:null,concreteType:"XDTTextColorSpec",kind:"LinkedField",name:"text_color",plural:!1,selections:o,storageKey:null}];return{fragment:{argumentDefinitions:[a,b,c,d,e,f],kind:"Fragment",metadata:null,name:"PolarisProfileTaggedTabContentQuery",selections:[{args:null,kind:"FragmentSpread",name:"PolarisProfileTaggedTabContentFragment"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[f,c,d,e,b,a],kind:"Operation",name:"PolarisProfileTaggedTabContentQuery",selections:[{alias:null,args:g,concreteType:"XDTProfileFeedConnection",kind:"LinkedField",name:"xdt_api__v1__usertags__user_id__feed_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"XDTProfileFeedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"XDTMediaDict",kind:"LinkedField",name:"node",plural:!1,selections:[h,{alias:null,args:null,kind:"ScalarField",name:"code",storageKey:null},i,{alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null},{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"owner",plural:!1,selections:[j],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},{alias:null,args:null,concreteType:"XDTCommentDict",kind:"LinkedField",name:"caption",plural:!1,selections:[h,k],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"audience",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"carousel_media_count",storageKey:null},{name:"client__srcSet",args:null,fragment:{kind:"InlineFragment",selections:[i,{alias:null,args:null,concreteType:"XDTMediaDict",kind:"LinkedField",name:"carousel_media",plural:!0,selections:[l,j],storageKey:null},l],type:"XDTMediaDict",abstractKey:null},kind:"RelayResolver",storageKey:null,isOutputType:!1},{alias:null,args:null,concreteType:"XDTMediaCroppingInfo",kind:"LinkedField",name:"media_cropping_info",plural:!1,selections:[{alias:null,args:null,concreteType:"XDTMediaCroppingCoordinates",kind:"LinkedField",name:"square_crop",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"crop_bottom",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"crop_left",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"crop_right",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"crop_top",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTMediaOverlayPayloadSchema",kind:"LinkedField",name:"media_overlay_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"overlay_layout",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_type",storageKey:null},m,{alias:null,args:null,concreteType:"XDTButtonSpec",kind:"LinkedField",name:"banner",plural:!1,selections:o,storageKey:null},{alias:null,args:null,concreteType:"XDTBloksRenderResponse",kind:"LinkedField",name:"bloks_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"layout",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTButtonSpec",kind:"LinkedField",name:"buttons",plural:!0,selections:o,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},n,{alias:null,args:null,kind:"ScalarField",name:"misinformation_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_applied_timestamp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sub_category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"preview",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"product_type",storageKey:null},{alias:null,args:null,concreteType:"XDTSpritesheetInfo",kind:"LinkedField",name:"thumbnails",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"sprite_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sprite_urls",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sprite_width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"timeline_pinned_user_ids",storageKey:null},{alias:null,args:null,concreteType:"XDTUpcomingEventDict",kind:"LinkedField",name:"upcoming_event",plural:!1,selections:[m,j],storageKey:null},{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[h,j],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"like_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"like_and_view_counts_disabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"comment_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"comments_disabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"view_count",storageKey:null},j,m],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTPageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_previous_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"start_cursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:g,filters:["user_id","count"],handle:"connection",key:"PolarisProfileTaggedTabContentQuery_xdt_api__v1__usertags__user_id__feed_connection",kind:"LinkedHandle",name:"xdt_api__v1__usertags__user_id__feed_connection"}]},params:{id:"7289408964443685",metadata:{},name:"PolarisProfileTaggedTabContentQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("PolarisProfileTaggedTabRoot.react",["CometPlaceholder.react","PolarisProfileTabContentSpinner.react","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisProfileTaggedTabContent.react").__setRef("PolarisProfileTaggedTabRoot.react"));function a(a){var b=i(4),d=a.props;a=a.queries;var e;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=j.jsx(c("PolarisProfileTabContentSpinner.react"),{}),b[0]=e):e=b[0];b[1]!==a.contentQuery||b[2]!==d.userID?(e=j.jsx(c("CometPlaceholder.react"),{fallback:e,children:j.jsx(k,{contentQuery:a.contentQuery,userID:d.userID})}),b[1]=a.contentQuery,b[2]=d.userID,b[3]=e):e=b[3];return e}g["default"]=a}),98);
__d("PolarisProfileTaggedTabContent.react",["CometRelay","PolarisProfileEmptyState.react","PolarisProfileEmptyStateTypes","PolarisProfilePostsGrid.react","PolarisProfileTaggedTabContentFragment.graphql","PolarisProfileTaggedTabContentQuery.graphql","react","usePolarisProfileTabNextPageLoader","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react"));e=j;e.useMemo;var l=e.useState,m=e.unstable_useMemoCache,n=h!==void 0?h:h=b("PolarisProfileTaggedTabContentQuery.graphql");function a(a){var e=m(12),f=a.contentQuery;a=a.userID;var g=c("usePolarisViewer")();g=(g==null?void 0:g.id)===a;a=d("CometRelay").usePreloadedQuery(n,f);f=l(!1);var h=f[0];f=f[1];a=d("CometRelay").usePaginationFragment(i!==void 0?i:i=b("PolarisProfileTaggedTabContentFragment.graphql"),a);var j=a.data,o=a.hasNext,p=a.isLoadingNext;a=a.loadNext;if(e[0]!==j.xdt_api__v1__usertags__user_id__feed_connection.edges){var q;e[2]===Symbol["for"]("react.memo_cache_sentinel")?(q=function(a){a=a.node;return a},e[2]=q):q=e[2];q=j.xdt_api__v1__usertags__user_id__feed_connection.edges.flatMap(q);e[0]=j.xdt_api__v1__usertags__user_id__feed_connection.edges;e[1]=q}else q=e[1];j=q;q=j;j=c("usePolarisProfileTabNextPageLoader")({loadNext:a,setIsLoadingError:f});e[3]!==q||e[4]!==o||e[5]!==p||e[6]!==g||e[7]!==h||e[8]!==j?(a=q.length===0&&!o&&!p?k.jsx(c("PolarisProfileEmptyState.react"),{type:g?d("PolarisProfileEmptyStateTypes").PROFILE_EMPTY_STATE_KEYS.OWN_PROFILE_TAGGED:d("PolarisProfileEmptyStateTypes").PROFILE_EMPTY_STATE_KEYS.TAGGED}):k.jsx(c("PolarisProfilePostsGrid.react"),{analyticsContext:g?"selfProfilePage":"profilePage",hasNext:o,isLoadingError:h,isLoadingNext:p,media$key:q,onLoadNext:j}),e[3]=q,e[4]=o,e[5]=p,e[6]=g,e[7]=h,e[8]=j,e[9]=a):a=e[9];e[10]!==a?(f=k.jsx("div",{children:a}),e[10]=a,e[11]=f):f=e[11];return f}g["default"]=a}),98);