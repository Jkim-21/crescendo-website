;/*FB_PKG_DELIM*/

__d("IGDSThumbDownPanoOutline24Icon.react",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(3),d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx("path",{d:"M10.47 23a2 2 0 0 1-1.68-.91c-.783-1.201-2.55-4.045-3.84-6.121a242.263 242.263 0 0 0-1.429-2.29c-1.493-2.29-1.888-4.62-1.173-6.927C3.398 3.365 6.715 1 10.414 1h6.442a4.02 4.02 0 0 1 3.96 3.435l1.141 6.98A4.002 4.002 0 0 1 17.999 16h-5.093l.727 2.087a3.693 3.693 0 0 1-.264 3.063 3.697 3.697 0 0 1-2.496 1.809c-.135.027-.27.04-.403.04Zm-.005-2.003.015.002a1.701 1.701 0 0 0 1.267-2.244l-1.191-3.427A.998.998 0 0 1 11.5 14h6.499a2.001 2.001 0 0 0 1.98-2.283l-1.14-6.98A2.014 2.014 0 0 0 16.856 3h-6.442C7.582 3 5.051 4.786 4.258 7.344c-.537 1.735-.23 3.45.94 5.242.143.22.718 1.146 1.451 2.327 1.285 2.068 3.044 4.901 3.816 6.084Z"}),b[0]=d):d=b[0];b[1]!==a?(d=j.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:d})),b[1]=a,b[2]=d):d=b[2];return d}b=j.memo(a);g["default"]=b}),98);
__d("IGDSThumbUpPanoOutline24Icon.react",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(3),d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx("path",{d:"M16.856 23h-6.442c-3.7 0-7.017-2.365-8.066-5.752-.715-2.308-.32-4.638 1.173-6.928.142-.216.708-1.127 1.43-2.289 1.29-2.076 3.056-4.92 3.838-6.12a1.997 1.997 0 0 1 2.084-.871 3.703 3.703 0 0 1 2.757 4.883L12.906 8H18a4.002 4.002 0 0 1 3.961 4.566l-1.147 7.019C20.537 21.523 18.834 23 16.856 23ZM10.473 3c-.006 0-.008.002-.008.004-.772 1.182-2.531 4.015-3.816 6.083a266.26 266.26 0 0 1-1.452 2.326c-1.17 1.793-1.476 3.508-.94 5.243C5.052 19.214 7.583 21 10.415 21h6.442c.99 0 1.84-.738 1.98-1.718l1.146-7.018A2.001 2.001 0 0 0 18 10h-6.5a.998.998 0 0 1-.944-1.328l1.188-3.416A1.701 1.701 0 0 0 10.48 3h-.007Z"}),b[0]=d):d=b[0];b[1]!==a?(d=j.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:d})),b[1]=a,b[2]=d):d=b[2];return d}b=j.memo(a);g["default"]=b}),98);
__d("BotFeedbackKind",[],(function(a,b,c,d,e,f){a=Object.freeze({BOT_FEEDBACK_POSITIVE:0,BOT_FEEDBACK_NEGATIVE_GENERIC:1,BOT_FEEDBACK_NEGATIVE_HELPFUL:2,BOT_FEEDBACK_NEGATIVE_INTERESTING:3,BOT_FEEDBACK_NEGATIVE_ACCURATE:4,BOT_FEEDBACK_NEGATIVE_SAFE:5,BOT_FEEDBACK_NEGATIVE_OTHER:6,BOT_FEEDBACK_NEGATIVE_REFUSED:7,BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING:8,BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT:9});f["default"]=a}),66);
__d("LSSubmitGenAIBotFeedback",["LSIssueNewTaskWithExtraOperations"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(e){return d[0]=new c.Map(),d[0].set("bot_feedback_kind",a[0]),d[0].set("bot_response_id",a[2]),d[0].set("feedback_kind_type",a[0]),d[1]=c.toJSON(d[0]),c.storedProcedure(b("LSIssueNewTaskWithExtraOperations"),"submit_gen_ai_bot_feedback",c.i64.cast([0,756]),d[1],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),void 0,c.i64.cast([0,0]))},function(b){return c.db.table(315).fetch([[[a[2]]]]).next().then(function(a,b){var e=a.done;a=a.value;return e?d[2]=c.i64.cast([0,0]):(b=a.item,d[2]=b.feedbackSubmissionStatus)})},function(b){return c.i64.eq(d[2],c.i64.cast([0,0]))?c.db.table(315).add({botResponseId:a[2],feedbackSubmissionStatus:c.i64.cast([0,1]),feedbackKindType:a[0]}):c.forEach(c.db.table(315).fetch([[[a[2]]]]),function(b){var d=b.update;b.item;return d({feedbackSubmissionStatus:c.i64.cast([0,1]),feedbackKindType:a[0]})})}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSSubmitGenAIBotFeedbackStoredProcedure",["LSSubmitGenAIBotFeedback","cr:8709"],(function(a,b,c,d,e,f,g){function a(a,b){var d=[];d[0]=b.botFeedbackKind;d[1]=b.feedbackKindType;d[2]=b.botResponseId;return c("LSSubmitGenAIBotFeedback").apply(void 0,d.concat([a]))}g["default"]=a}),98);
__d("useMWV2SubmitFeedbackAction",["LSFactory","LSIntEnum","LSSubmitGenAIBotFeedbackStoredProcedure","promiseDone","react","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=(j||d("react")).useCallback;function a(a,b){var e=(h||(h=c("useReStore")))();return k(function(f){c("promiseDone")(e.runInTransaction(function(b){return c("LSSubmitGenAIBotFeedbackStoredProcedure")(c("LSFactory")(b),{botFeedbackKind:(i||(i=d("LSIntEnum"))).ofNumber(f),botResponseId:a||"",feedbackKindType:i.ofNumber(f)})},"readwrite"),b)},[e,a,b])}g["default"]=a}),98);