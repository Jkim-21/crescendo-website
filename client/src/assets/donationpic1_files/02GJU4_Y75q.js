;/*FB_PKG_DELIM*/

__d("LSMarkBumpedThreadsSeen",["LSIssueNewFireAndForgetTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.islc(c.filter(c.db.table(9).fetchDesc([[[a[0]]],"secondaryParentThreadKeyLastActivityTimestampMs"]),function(b){return c.i64.eq(b.secondaryParentThreadKey,a[0])&&[c.i64.cast([0,18]),c.i64.cast([0,23]),c.i64.cast([0,21])].some(function(a){return c.i64.eq(b.threadType,a)})}),0,c.i64.to_float(c.i64.cast([0,1]))).next().then(function(e,f){var g=e.done;e=e.value;return g?0:(f=e.item,d[0]=f.lastActivityTimestampMs,c.i64.gt(d[0],c.i64.cast([0,0]))?c.db.table(35).fetch([[[a[0]]]]).next().then(function(f,h){var e=f.done;f=f.value;return e?c.sequence([function(b){return c.db.table(35).add({parentThreadKey:a[0],lastSeenRequestTimestampMs:d[0]})},function(e){return d[2]=new c.Map(),d[2].set("parent_thread_key",a[0]),d[2].set("last_seen_time_ms",d[0]),d[3]=c.toJSON(d[2]),c.storedProcedure(b("LSIssueNewFireAndForgetTask"),"fire_forget",c.i64.cast([0,6]),d[3])}]):(h=f.item,c.i64.lt(h.lastSeenRequestTimestampMs,d[0])?c.sequence([function(b){return c.db.table(35).add({parentThreadKey:a[0],lastSeenRequestTimestampMs:d[0]})},function(e){return d[2]=new c.Map(),d[2].set("parent_thread_key",a[0]),d[2].set("last_seen_time_ms",d[0]),d[3]=c.toJSON(d[2]),c.storedProcedure(b("LSIssueNewFireAndForgetTask"),"fire_forget",c.i64.cast([0,6]),d[3])}]):c.resolve())}):c.resolve())})},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSMarkBumpedThreadsSeenStoredProcedure",["LSMarkBumpedThreadsSeen","cr:8709"],(function(a,b,c,d,e,f,g){function a(a,b){var d=[];d[0]=b.secondaryParentThreadKey;return c("LSMarkBumpedThreadsSeen").apply(void 0,d.concat([a]))}g["default"]=a}),98);
__d("MWCMMarkBumpedThreadsSeen",["LSFactory","LSMarkBumpedThreadsSeenStoredProcedure","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return h.apply(this,arguments)}function h(){h=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b){a!=null&&(yield c("LSMarkBumpedThreadsSeenStoredProcedure")(c("LSFactory")(b),{secondaryParentThreadKey:a}))});return h.apply(this,arguments)}g.MWCMMarkBumpedThreadsSeen=a}),98);