;/*FB_PKG_DELIM*/

__d("LSUpdateCommunityThreadStaleState",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.filter(b.db.table(9).fetch([[[a[0]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&([b.i64.cast([0,23]),b.i64.cast([0,21]),b.i64.cast([0,18]),b.i64.cast([0,26])].some(function(a){return b.i64.eq(c.threadType,a)})||b.i64.eq(c.threadType,b.i64.cast([0,152])))}).next().then(function(c,d){d=c.done;c=c.value;return d?0:(c.item,b.db.table(294).fetch([[[a[0]]]]).next().then(function(c,d){d=c.done;c=c.value;return d?b.db.table(294).add({threadKey:a[0],threadQueueSequenceId:b.i64.cast([0,0]),isStale:a[1]}):(c.item,b.forEach(b.db.table(294).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({isStale:a[1]})}))}))})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSUpdateSelectiveSyncState",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.filter(b.db.table(9).fetch([[[a[0]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&([b.i64.cast([0,23]),b.i64.cast([0,21]),b.i64.cast([0,18]),b.i64.cast([0,26])].some(function(a){return b.i64.eq(c.threadType,a)})||b.i64.eq(c.threadType,b.i64.cast([0,152])))}).next().then(function(c,d){d=c.done;c=c.value;return d?b.db.table(294).add({threadKey:a[0],threadQueueSequenceId:b.i64.cast([0,0]),lastSelectiveSyncTimestampMs:a[1]}):(c.item,b.forEach(b.db.table(294).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({lastSelectiveSyncTimestampMs:a[1]})}))})},function(a){return b.resolve(c)}])}e.exports=a}),null);