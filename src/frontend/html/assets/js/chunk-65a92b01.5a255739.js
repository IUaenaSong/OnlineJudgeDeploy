(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65a92b01"],{"8b49":function(t,e,s){},"953a":function(t,e,s){"use strict";var n=s("5530"),a=(s("a434"),s("3228")),o=s("ffb0"),r=s("9a36"),i=s("2f62"),c=s("c1df"),l=s.n(c),d=s("8935");e["a"]={methods:Object(n["a"])(Object(n["a"])({init:function(){var t=this;this.contestID=this.$route.params.contestID,this.CONTEST_TYPE_REVERSE=Object.assign({},r["d"]),this.CONTEST_STATUS=Object.assign({},r["a"]),this.CONTEST_STATUS_REVERSE=Object.assign({},r["b"]),this.RULE_TYPE=Object.assign({},r["p"]);var e=Object(r["u"])(this.contestID);this.concernedList=d["a"].get(e)||[],this.loading.info=!0,this.$store.dispatch("getScoreBoardContestInfo").then((function(e){t.contestEnded||(t.autoRefresh=!0,t.handleAutoRefresh(!0)),t.changeDomTitle({title:e.data.data.title});var s=e.data.data.contest,n=l()(s.endTime);t.loading.info=!1,n.isAfter(l()(s.now))&&(t.timer=setInterval((function(){t.$store.commit("nowAdd1s")}),1e3))}),(function(e){t.loading.info=!1}))},getContestOutsideScoreboard:function(){var t=this,e={cid:this.$route.params.contestID,forceRefresh:!!this.forceUpdate,removeStar:!this.showStarUser,concernedList:this.concernedList};this.loading.rank=!0,a["a"].getContestOutsideScoreboard(e).then((function(e){t.applyToTable(e.data.data),t.loading.rank=!1}),(function(e){t.loading.rank=!1,t.refreshFunc&&(t.autoRefresh=!1,clearInterval(t.refreshFunc))}))},handleAutoRefresh:function(t){var e=this;1==t?this.refreshFunc=setInterval((function(){e.getContestOutsideScoreboard()}),3e4):clearInterval(this.refreshFunc)}},Object(i["b"])(["changeDomTitle"])),{},{formatTooltip:function(t){return-1==this.contest.status?"00:00:00":0==this.contest.status?o["a"].secondFormat(this.BeginToNowDuration):o["a"].secondFormat(this.contest.duration)},updateConcernedList:function(t,e){if(e)this.concernedList.push(t);else{var s=this.concernedList.indexOf(t);s>-1&&this.concernedList.splice(s,1)}var n=Object(r["u"])(this.contestID);d["a"].set(n,this.concernedList),this.getContestOutsideScoreboard()}}),computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(i["d"])({contest:function(t){return t.contest.contest},now:function(t){return t.contest.now},contestProblems:function(t){return t.contest.contestProblems}})),Object(i["c"])(["countdown","BeginToNowDuration","isContestAdmin","userInfo"])),{},{forceUpdate:{get:function(){return this.$store.state.contest.forceUpdate},set:function(t){this.$store.commit("changeRankForceUpdate",{value:t})}},showStarUser:{get:function(){return!this.$store.state.contest.removeStar},set:function(t){this.$store.commit("changeRankRemoveStar",{value:!t})}},concernedList:{get:function(){return this.$store.state.contest.concernedList},set:function(t){this.$store.commit("changeConcernedList",{value:t})}},progressValue:{get:function(){return this.$store.getters.progressValue},set:function(){}},timeStep:function(){return 100/this.contest.duration},countdownColor:function(){if(this.contest.status)return"color:"+r["b"][this.contest.status].color},contestEnded:function(){return this.contest.status==r["a"].ENDED}}),beforeDestroy:function(){clearInterval(this.refreshFunc),clearInterval(this.timer),this.$store.commit("clearContest")}}},a434:function(t,e,s){"use strict";var n=s("23e7"),a=s("da84"),o=s("23cb"),r=s("5926"),i=s("07fa"),c=s("7b0b"),l=s("65f0"),d=s("8418"),u=s("1dde"),f=u("splice"),h=a.TypeError,m=Math.max,p=Math.min,_=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var s,n,a,u,f,v,w=c(this),C=i(w),b=o(t,C),S=arguments.length;if(0===S?s=n=0:1===S?(s=0,n=C-b):(s=S-2,n=p(m(r(e),0),C-b)),C+s-n>_)throw h(g);for(a=l(w,n),u=0;u<n;u++)f=b+u,f in w&&d(a,u,w[f]);if(a.length=n,s<n){for(u=b;u<C-n;u++)f=u+n,v=u+s,f in w?w[v]=w[f]:delete w[v];for(u=C;u>C-n+s;u--)delete w[u-1]}else if(s>n)for(u=C-n;u>b;u--)f=u+n-1,v=u+s-1,f in w?w[v]=w[f]:delete w[v];for(u=0;u<s;u++)w[u+b]=arguments[u+2];return w.length=C-n+s,a}})},b71b:function(t,e,s){"use strict";s("8b49")},e92e:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",[s("el-col",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{span:24}},[s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading.info,expression:"loading.info"}],attrs:{shadow:""}},[s("div",{staticClass:"contest-title"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"panel-title"},[t._v(t._s(t.contest.title))])])]),s("el-row",{staticStyle:{"margin-top":"10px"}},[s("el-col",{staticClass:"text-align:left",attrs:{span:12}},[null!=t.contest.auth&&void 0!=t.contest.auth?s("el-tooltip",{attrs:{content:t.$t("m."+t.CONTEST_TYPE_REVERSE[t.contest.auth]["tips"]),placement:"top"}},[s("el-tag",{attrs:{type:t.CONTEST_TYPE_REVERSE[t.contest.auth]["color"],effect:"plain"},on:{"update:type":function(e){return t.$set(t.CONTEST_TYPE_REVERSE[t.contest.auth],"color",e)}}},[t._v(" "+t._s(t.$t("m."+t.CONTEST_TYPE_REVERSE[t.contest.auth]["name"]))+" ")])],1):t._e()],1),s("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[t.contest.count?s("el-button",{attrs:{size:"small",plain:""}},[s("i",{staticClass:"el-icon-user-solid",staticStyle:{color:"rgb(48, 145, 242)"}}),t._v("x"+t._s(t.contest.count)+" ")]):t._e(),0==t.contest.type?[s("el-button",{attrs:{size:"small",type:"primary"}},[s("i",{staticClass:"fa fa-trophy"}),t._v(" "+t._s(t._f("parseContestType")(t.contest.type))+" ")])]:[s("el-tooltip",{attrs:{content:t.$t("m.Contest_Rank")+"："+("Recent"==t.contest.oiRankScoreType?t.$t("m.Based_on_The_Recent_Score_Submitted_Of_Each_Problem"):t.$t("m.Based_on_The_Highest_Score_Submitted_For_Each_Problem")),placement:"top"}},[s("el-button",{attrs:{size:"small",type:"warning"}},[s("i",{staticClass:"fa fa-trophy"}),t._v(" "+t._s(t._f("parseContestType")(t.contest.type))+" ")])],1)]],2)],1),s("div",{staticClass:"contest-time"},[s("el-row",[s("el-col",{staticClass:"left",attrs:{xs:24,md:12}},[s("p",[s("i",{staticClass:"fa fa-hourglass-start",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.$t("m.StartAt"))+"："+t._s(t._f("localtime")(t.contest.startTime))+" ")])]),s("el-col",{staticClass:"right",attrs:{xs:24,md:12}},[s("p",[s("i",{staticClass:"fa fa-hourglass-end",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.$t("m.EndAt"))+"："+t._s(t._f("localtime")(t.contest.endTime))+" ")])])],1)],1),s("div",{staticClass:"slider"},[s("el-slider",{attrs:{"format-tooltip":t.formatTooltip,step:t.timeStep},model:{value:t.progressValue,callback:function(e){t.progressValue=e},expression:"progressValue"}})],1),s("el-row",[s("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[s("el-tag",{style:t.countdownColor,attrs:{effect:"dark",size:"medium"}},[s("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.countdown)+" ")])],1)],1)],1)],1),s("el-col",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{span:24}},[s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading.rank,expression:"loading.rank"}],attrs:{shadow:""}},[s("div",{staticClass:"contest-rank-switch"},[s("span",{staticStyle:{float:"right"}},[s("span",[t._v(t._s(t.$t("m.Auto_Refresh"))+"(30s)")]),s("el-switch",{attrs:{disabled:t.contestEnded},on:{change:t.handleAutoRefresh},model:{value:t.autoRefresh,callback:function(e){t.autoRefresh=e},expression:"autoRefresh"}})],1),t.isContestAdmin?s("span",{staticStyle:{float:"right"}},[s("span",[t._v(t._s(t.$t("m.Force_Update")))]),s("el-switch",{on:{change:t.getContestOutsideScoreboard},model:{value:t.forceUpdate,callback:function(e){t.forceUpdate=e},expression:"forceUpdate"}})],1):t._e(),s("span",{staticStyle:{float:"right"}},[s("span",[t._v(t._s(t.$t("m.Star_User")))]),s("el-switch",{on:{change:t.getContestOutsideScoreboard},model:{value:t.showStarUser,callback:function(e){t.showStarUser=e},expression:"showStarUser"}})],1)]),s("vxe-table",{ref:"OIContestRank",attrs:{round:"",border:"","auto-resize":"",size:"medium",align:"center",data:t.dataRank,"cell-class-name":t.cellClassName}},[s("vxe-table-column",{attrs:{field:"rank",width:"50",fixed:"left",title:t.$t("m.Contest_Rank_Seq")},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[t._v(" "+t._s(-1==s.rank?"*":s.rank)+" ")]}}])}),t.isMobileView?s("vxe-table-column",{attrs:{field:"username","min-width":"280",title:t.$t("m.User"),"header-align":"center",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[n[t.contest.rankShowName]?s("avatar",{attrs:{username:n[t.contest.rankShowName],inline:!0,size:37,color:"#FFF",src:n.avatar,title:n[t.contest.rankShowName]}}):t._e(),s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(n.isConcerned?t.$t("m.Unfollow"):t.$t("m.Top_And_Follow"))+" ")]),s("span",{staticClass:"contest-rank-concerned",on:{click:function(e){return t.updateConcernedList(n.uid,!n.isConcerned)}}},[n.isConcerned?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",width:"16",height:"16"}},[s("path",{attrs:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",fill:"red"}})]):s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",width:"16",height:"16"}},[s("path",{attrs:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3C200.7 23 111.4 15.6 53.6 64.3C-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9c14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7c38.9-32.7 98.9-27.8 136.5 10.5l35 35.7l35-35.7c37.8-38.5 97.8-43.2 136.5-10.6c51.1 43.1 43.5 113.9 7.3 150.8z",fill:"currentColor"}})])])]),s("span",{staticStyle:{float:"right","text-align":"right"}},[s("a",{on:{click:function(e){return t.getUserHomeByUsername(n.uid,n.username)}}},[s("span",{staticClass:"contest-username"},[-1==n.rank?s("span",{staticClass:"contest-rank-flag"},[t._v("Star")]):t._e(),"female"==n.gender?s("span",{staticClass:"contest-rank-flag"},[t._v("Girl")]):t._e(),t._v(" "+t._s(n[t.contest.rankShowName]))]),n.school?s("span",{staticClass:"contest-school"},[t._v(t._s(n.school))]):t._e()])])]}}])}):s("vxe-table-column",{attrs:{field:"username",fixed:"left","min-width":"280",title:t.$t("m.User"),"header-align":"center",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[n[t.contest.rankShowName]?s("avatar",{attrs:{username:n[t.contest.rankShowName],inline:!0,size:37,color:"#FFF",src:n.avatar,title:n[t.contest.rankShowName]}}):t._e(),s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(n.isConcerned?t.$t("m.Unfollow"):t.$t("m.Top_And_Follow"))+" ")]),s("span",{staticClass:"contest-rank-concerned",on:{click:function(e){return t.updateConcernedList(n.uid,!n.isConcerned)}}},[n.isConcerned?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",width:"16",height:"16"}},[s("path",{attrs:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",fill:"red"}})]):s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",width:"16",height:"16"}},[s("path",{attrs:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3C200.7 23 111.4 15.6 53.6 64.3C-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9c14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7c38.9-32.7 98.9-27.8 136.5 10.5l35 35.7l35-35.7c37.8-38.5 97.8-43.2 136.5-10.6c51.1 43.1 43.5 113.9 7.3 150.8z",fill:"currentColor"}})])])]),s("span",{staticStyle:{float:"right","text-align":"right"}},[s("a",{on:{click:function(e){return t.getUserHomeByUsername(n.uid,n.username)}}},[s("span",{staticClass:"contest-username"},[-1==n.rank?s("span",{staticClass:"contest-rank-flag"},[t._v("Star")]):t._e(),"female"==n.gender?s("span",{staticClass:"contest-rank-flag"},[t._v("Girl")]):t._e(),t._v(" "+t._s(n[t.contest.rankShowName]))]),n.school?s("span",{staticClass:"contest-school"},[t._v(t._s(n.school))]):t._e()])])]}}],null,!1,2501145567)}),s("vxe-table-column",{attrs:{field:"totalScore",title:t.$t("m.Total_Score"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[s("span",{staticStyle:{"font-size":"14px"}},[s("a",{staticStyle:{color:"rgb(87, 163, 243)"}},[t._v(t._s(n.totalScore))]),s("br"),s("span",{staticClass:"problem-time"},[t._v(t._s(n.totalTime)+"ms")])])]}}])}),t._l(t.contestProblems,(function(e){return s("vxe-table-column",{key:e.displayId,attrs:{width:"64"},scopedSlots:t._u([{key:"header",fn:function(){return[s("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(e.displayId+". "+e.displayTitle)+" "),s("br"),t._v(" "+t._s("Accepted: "+e.ac)+" "),s("br"),t._v(" "+t._s("Rejected: "+e.error)+" ")]),s("div",[e.color?s("span",{staticStyle:{"vertical-align":"middle"}},[s("svg",{staticClass:"icon",attrs:{t:"1633685184463",viewBox:"0 0 1088 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5840",width:"25",height:"25"}},[s("path",{attrs:{d:"M575.872 849.408c-104.576 0-117.632-26.56-119.232-31.808-6.528-22.528 32.896-70.592 63.744-96.768l-1.728-2.624c137.6-42.688 243.648-290.112 243.648-433.472A284.544 284.544 0 0 0 478.016 0a284.544 284.544 0 0 0-284.288 284.736c0 150.4 116.352 415.104 263.744 438.336-25.152 29.568-50.368 70.784-39.104 108.928 12.608 43.136 62.72 63.232 157.632 63.232 7.872 0 11.52 9.408 4.352 19.52-21.248 29.248-77.888 63.424-167.68 63.424V1024c138.944 0 215.936-74.816 215.936-126.528a46.72 46.72 0 0 0-16.32-36.608 56.32 56.32 0 0 0-36.416-11.456zM297.152 297.472c0 44.032-38.144 25.344-38.144-38.656 0-108.032 85.248-195.712 190.592-195.712 62.592 0 81.216 39.232 38.08 39.232-105.152 0.064-190.528 87.04-190.528 195.136z",fill:e.color,"p-id":"5841"}})])]):t._e(),s("span",{staticClass:"emphasis",staticStyle:{color:"#495060"}},[t._v(t._s(e.displayId)+" "),s("br"),s("span",[t._v(t._s(e.ac))])])])])]},proxy:!0},{key:"default",fn:function(n){var a=n.row;return[a.submissionInfo[e.displayId]?s("div",[s("span",[t._v(t._s(a.submissionInfo[e.displayId]))]),s("br"),a.timeInfo&&null!=a.timeInfo[e.displayId]?s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(a.timeInfo[e.displayId])+"ms")]):t._e()]):t._e()]}}],null,!0)})}))],2)],1)],1)],1)},a=[],o=(s("d3b7"),s("159b"),s("b64b"),s("4a89")),r=s.n(o),i=s("953a"),c={name:"OIContestRank",components:{Avatar:r.a},mixins:[i["a"]],data:function(){return{contestID:"",dataRank:[],autoRefresh:!1,loading:{info:!1,rank:!1},timer:null,CONTEST_STATUS:{},CONTEST_STATUS_REVERSE:{},CONTEST_TYPE_REVERSE:{},RULE_TYPE:{}}},created:function(){this.init()},mounted:function(){this.getContestOutsideScoreboard()},computed:{isMobileView:function(){return window.screen.width<768}},methods:{cellClassName:function(t){var e=t.row,s=(t.rowIndex,t.column),n=t.columnIndex;return"username"===s.property&&e.userCellClassName?e.userCellClassName:"rank"!==s.property&&"totalScore"!==s.property&&"username"!==s.property?e.cellClassName[[this.contestProblems[n-3].displayId]]:e.isConcerned&&"username"!==s.property?"bg-concerned":void 0},getUserHomeByUsername:function(t,e){this.$router.push({name:"UserHome",query:{username:e,uid:t}})},applyToTable:function(t){var e=this;t.forEach((function(s,n){var a=s.submissionInfo,o=s.timeInfo,r={};-1!=e.concernedList.indexOf(s.uid)&&(t[n].isConcerned=!0),Object.keys(a).forEach((function(e){t[n][e]=a[e];var s=a[e];null!=o&&void 0!=o[e]?r[e]="oi-100":0==s?r[e]="oi-0":null!=s&&(r[e]="oi-between")})),t[n].cellClassName=r,-1==t[n].rank&&(t[n].userCellClassName="bg-star"),"female"==t[n].gender&&(t[n].userCellClassName="bg-female")})),this.dataRank=t}}},l=c,d=(s("b71b"),s("2877")),u=Object(d["a"])(l,n,a,!1,null,"d7e3da88",null);e["default"]=u.exports}}]);