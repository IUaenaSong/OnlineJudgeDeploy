(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4183dce0"],{"04d1":function(t,e,s){var n=s("342f"),a=n.match(/firefox\/(\d+)/i);t.exports=!!a&&+a[1]},"4e82":function(t,e,s){"use strict";var n=s("23e7"),a=s("e330"),o=s("59ed"),r=s("7b0b"),i=s("07fa"),l=s("577e"),c=s("d039"),u=s("addb"),d=s("a640"),m=s("04d1"),p=s("d998"),h=s("2d00"),f=s("512ce"),w=[],v=a(w.sort),g=a(w.push),b=c((function(){w.sort(void 0)})),C=c((function(){w.sort(null)})),_=d("sort"),y=!c((function(){if(h)return h<70;if(!(m&&m>3)){if(p)return!0;if(f)return f<603;var t,e,s,n,a="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:s=3;break;case 68:case 71:s=4;break;default:s=2}for(n=0;n<47;n++)w.push({k:e+n,v:s})}for(w.sort((function(t,e){return e.v-t.v})),n=0;n<w.length;n++)e=w[n].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}})),k=b||!C||!_||!y,x=function(t){return function(e,s){return void 0===s?-1:void 0===e?1:void 0!==t?+t(e,s)||0:l(e)>l(s)?1:-1}};n({target:"Array",proto:!0,forced:k},{sort:function(t){void 0!==t&&o(t);var e=r(this);if(y)return void 0===t?v(e):v(e,t);var s,n,a=[],l=i(e);for(n=0;n<l;n++)n in e&&g(a,e[n]);u(a,x(t)),s=a.length,n=0;while(n<s)e[n]=a[n++];while(n<l)delete e[n++];return e}})},"512ce":function(t,e,s){var n=s("342f"),a=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!a&&+a[1]},"7a32":function(t,e,s){},"9e7d":function(t,e,s){"use strict";s("dc42")},a434:function(t,e,s){"use strict";var n=s("23e7"),a=s("da84"),o=s("23cb"),r=s("5926"),i=s("07fa"),l=s("7b0b"),c=s("65f0"),u=s("8418"),d=s("1dde"),m=d("splice"),p=a.TypeError,h=Math.max,f=Math.min,w=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!m},{splice:function(t,e){var s,n,a,d,m,g,b=l(this),C=i(b),_=o(t,C),y=arguments.length;if(0===y?s=n=0:1===y?(s=0,n=C-_):(s=y-2,n=f(h(r(e),0),C-_)),C+s-n>w)throw p(v);for(a=c(b,n),d=0;d<n;d++)m=_+d,m in b&&u(a,d,b[m]);if(a.length=n,s<n){for(d=_;d<C-n;d++)m=d+n,g=d+s,m in b?b[g]=b[m]:delete b[g];for(d=C;d>C-n+s;d--)delete b[d-1]}else if(s>n)for(d=C-n;d>_;d--)m=d+n-1,g=d+s-1,m in b?b[g]=b[m]:delete b[g];for(d=0;d<s;d++)b[d+_]=arguments[d+2];return b.length=C-n+s,a}})},bd1f:function(t,e,s){"use strict";s("7a32")},d998:function(t,e,s){var n=s("342f");t.exports=/MSIE|Trident/.test(n)},dc42:function(t,e,s){},f753:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s(t.currentView,{tag:"component"})],1)},a=[],o=s("5530"),r=s("2f62"),i=s("9a36"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",[s("el-col",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{span:24}},[s("el-card",{attrs:{shadow:""}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"panel-title"},[t._v(t._s(t.$t("m.Contest_Rank")))]),s("span",{staticStyle:{float:"right","font-size":"20px"}},[s("el-popover",{attrs:{trigger:"hover",placement:"left-start"}},[s("i",{staticClass:"el-icon-s-tools",attrs:{slot:"reference"},slot:"reference"}),s("div",{attrs:{id:"switches"}},[s("p",[s("span",[t._v(t._s(t.$t("m.Chart")))]),s("el-switch",{model:{value:t.showChart,callback:function(e){t.showChart=e},expression:"showChart"}})],1),s("p",[s("span",[t._v(t._s(t.$t("m.Table")))]),s("el-switch",{model:{value:t.showTable,callback:function(e){t.showTable=e},expression:"showTable"}})],1),s("p",[s("span",[t._v(t._s(t.$t("m.Star_User")))]),s("el-switch",{on:{change:function(e){return t.getContestRankData(t.page)}},model:{value:t.showStarUser,callback:function(e){t.showStarUser=e},expression:"showStarUser"}})],1),s("p",[s("span",[t._v(t._s(t.$t("m.Auto_Refresh"))+"(10s)")]),s("el-switch",{attrs:{disabled:t.refreshDisabled},on:{change:t.handleAutoRefresh},model:{value:t.autoRefresh,callback:function(e){t.autoRefresh=e},expression:"autoRefresh"}})],1),t.isContestAdmin?[s("p",[s("span",[t._v(t._s(t.$t("m.Force_Update")))]),s("el-switch",{on:{change:function(e){return t.getContestRankData(t.page)}},model:{value:t.forceUpdate,callback:function(e){t.forceUpdate=e},expression:"forceUpdate"}})],1)]:t._e(),t.isContestAdmin?[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.downloadRankCSV}},[t._v(t._s(t.$t("m.Download_as_CSV")))])]:t._e()],2)])],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showChart,expression:"showChart"}],staticClass:"echarts"},[s("ECharts",{ref:"chart",attrs:{options:t.options,autoresize:!0}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showTable,expression:"showTable"}]},[s("vxe-table",{ref:"ACMContestRank",attrs:{round:"",border:"","auto-resize":"",size:"medium",align:"center",data:t.dataRank,"cell-class-name":t.cellClassName},on:{"cell-click":t.getUserProblemSubmission}},[s("vxe-table-column",{attrs:{field:"rank",width:"50",fixed:"left",title:t.$t("m.Contest_Rank_Seq")},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[t._v(" "+t._s(-1==s.rank?"*":s.rank)+" ")]}}])}),t.isMobileView?s("vxe-table-column",{attrs:{field:"username","min-width":"280",title:t.$t("m.User"),"header-align":"center",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[n[t.contest.rankShowName]?s("avatar",{attrs:{username:n[t.contest.rankShowName],inline:!0,size:37,color:"#FFF",src:n.avatar,title:n[t.contest.rankShowName]}}):t._e(),s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(n.isConcerned?t.$t("m.Unfollow"):t.$t("m.Top_And_Follow"))+" ")]),s("span",{staticClass:"contest-rank-concerned",on:{click:function(e){return t.updateConcernedList(n.uid,!n.isConcerned)}}},[n.isConcerned?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",width:"16",height:"16"}},[s("path",{attrs:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",fill:"red"}})]):s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",width:"16",height:"16"}},[s("path",{attrs:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3C200.7 23 111.4 15.6 53.6 64.3C-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9c14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7c38.9-32.7 98.9-27.8 136.5 10.5l35 35.7l35-35.7c37.8-38.5 97.8-43.2 136.5-10.6c51.1 43.1 43.5 113.9 7.3 150.8z",fill:"currentColor"}})])])]),s("span",{staticStyle:{float:"right","text-align":"right"}},[s("a",{on:{click:function(e){return t.getUserHomeByUsername(n.uid,n.username)}}},[s("span",{staticClass:"contest-username"},[n.uid==t.userInfo.uid?s("span",{staticClass:"contest-rank-flag"},[t._v("Me")]):t._e(),-1==n.rank?s("span",{staticClass:"contest-rank-flag"},[t._v("Star")]):t._e(),"female"==n.gender?s("span",{staticClass:"contest-rank-flag"},[t._v("Girl")]):t._e(),t._v(" "+t._s(n[t.contest.rankShowName]))]),n.school?s("span",{staticClass:"contest-school"},[t._v(t._s(n.school))]):t._e()])])]}}])}):s("vxe-table-column",{attrs:{field:"username",fixed:"left","min-width":"280",title:t.$t("m.User"),"header-align":"center",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[n[t.contest.rankShowName]?s("avatar",{attrs:{username:n[t.contest.rankShowName],inline:!0,size:37,color:"#FFF",src:n.avatar,title:n[t.contest.rankShowName]}}):t._e(),s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(n.isConcerned?t.$t("m.Unfollow"):t.$t("m.Top_And_Follow"))+" ")]),s("span",{staticClass:"contest-rank-concerned",on:{click:function(e){return t.updateConcernedList(n.uid,!n.isConcerned)}}},[n.isConcerned?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",width:"16",height:"16"}},[s("path",{attrs:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",fill:"red"}})]):s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",width:"16",height:"16"}},[s("path",{attrs:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3C200.7 23 111.4 15.6 53.6 64.3C-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9c14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7c38.9-32.7 98.9-27.8 136.5 10.5l35 35.7l35-35.7c37.8-38.5 97.8-43.2 136.5-10.6c51.1 43.1 43.5 113.9 7.3 150.8z",fill:"currentColor"}})])])]),s("span",{staticStyle:{float:"right","text-align":"right"}},[s("a",{on:{click:function(e){return t.getUserHomeByUsername(n.uid,n.username)}}},[s("span",{staticClass:"contest-username"},[n.uid==t.userInfo.uid?s("span",{staticClass:"contest-rank-flag"},[t._v("Me")]):t._e(),-1==n.rank?s("span",{staticClass:"contest-rank-flag"},[t._v("Star")]):t._e(),"female"==n.gender?s("span",{staticClass:"contest-rank-flag"},[t._v("Girl")]):t._e(),t._v(" "+t._s(n[t.contest.rankShowName]))]),n.school?s("span",{staticClass:"contest-school"},[t._v(t._s(n.school))]):t._e()])])]}}],null,!1,200133354)}),t.isContestAdmin?s("vxe-table-column",{attrs:{field:"realname",width:"96",title:t.$t("m.RealName"),"show-overflow":""}}):t._e(),s("vxe-table-column",{attrs:{field:"rating",title:t.$t("m.AC"),width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[s("span",[s("a",{staticStyle:{color:"rgb(87, 163, 243)","font-weight":"600","font-size":"14px"},on:{click:function(e){return t.getUserACSubmit(n.username)}}},[t._v(t._s(n.ac)+" ")])])]}}])}),s("vxe-table-column",{attrs:{field:"totalTime",title:t.$t("m.TotalTime"),width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[s("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(t.parseTimeToSpecific(n.totalTime))+" ")]),s("span",{staticStyle:{"font-size":"14px"}},[t._v(t._s(parseInt(n.totalTime/60)))])])]}}])}),t._l(t.contestProblems,(function(e){return s("vxe-table-column",{key:e.displayId,attrs:{width:"64",field:e.displayId},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.row;return[a.submissionInfo[e.displayId]?s("span",{staticClass:"submission-hover"},[s("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(a.submissionInfo[e.displayId].specificTime)+" ")]),a.submissionInfo[e.displayId].isAC?s("span",{staticClass:"submission-time"},[t._v(t._s(a.submissionInfo[e.displayId].ACTime)),s("br")]):t._e()]),null==a.submissionInfo[e.displayId].tryNum&&0!=a.submissionInfo[e.displayId].errorNum?s("span",{staticClass:"submission-error"},[t._v(" "+t._s(a.submissionInfo[e.displayId].errorNum>1?a.submissionInfo[e.displayId].errorNum+" tries":a.submissionInfo[e.displayId].errorNum+" try")+" ")]):t._e(),null!=a.submissionInfo[e.displayId].tryNum?s("span",[a.submissionInfo[e.displayId].errorNum>0?[t._v(" "+t._s(a.submissionInfo[e.displayId].errorNum)+"+")]:t._e(),t._v(t._s(a.submissionInfo[e.displayId].tryNum)+t._s(a.submissionInfo[e.displayId].errorNum+a.submissionInfo[e.displayId].tryNum>1?" tries":" try")+" ")],2):t._e()],1):t._e()]}}],null,!0)},[s("template",{slot:"header"},[s("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(e.displayId+". "+e.displayTitle)+" "),s("br"),t._v(" "+t._s("Accepted: "+e.ac)+" "),s("br"),t._v(" "+t._s("Rejected: "+e.error)+" ")]),s("div",[e.color?s("span",{staticStyle:{"vertical-align":"middle"}},[s("svg",{staticClass:"icon",attrs:{t:"1633685184463",viewBox:"0 0 1088 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5840",width:"25",height:"25"}},[s("path",{attrs:{d:"M575.872 849.408c-104.576 0-117.632-26.56-119.232-31.808-6.528-22.528 32.896-70.592 63.744-96.768l-1.728-2.624c137.6-42.688 243.648-290.112 243.648-433.472A284.544 284.544 0 0 0 478.016 0a284.544 284.544 0 0 0-284.288 284.736c0 150.4 116.352 415.104 263.744 438.336-25.152 29.568-50.368 70.784-39.104 108.928 12.608 43.136 62.72 63.232 157.632 63.232 7.872 0 11.52 9.408 4.352 19.52-21.248 29.248-77.888 63.424-167.68 63.424V1024c138.944 0 215.936-74.816 215.936-126.528a46.72 46.72 0 0 0-16.32-36.608 56.32 56.32 0 0 0-36.416-11.456zM297.152 297.472c0 44.032-38.144 25.344-38.144-38.656 0-108.032 85.248-195.712 190.592-195.712 62.592 0 81.216 39.232 38.08 39.232-105.152 0.064-190.528 87.04-190.528 195.136z",fill:e.color,"p-id":"5841"}})])]):t._e(),s("span",[s("a",{staticClass:"emphasis",staticStyle:{color:"#495060"},on:{click:function(s){return t.getContestProblemById(e.displayId)}}},[t._v(t._s(e.displayId)+" ")]),s("br"),s("span",[t._v(t._s(e.ac))])])])])],1)],2)}))],2)],1),s("Pagination",{attrs:{total:t.total,"page-size":t.limit,"page-sizes":[10,30,100,500,1e3,1e4],current:t.page,layout:"prev, pager, next, sizes"},on:{"update:pageSize":function(e){t.limit=e},"update:page-size":function(e){t.limit=e},"update:current":function(e){t.page=e},"on-change":t.getContestRankData,"on-page-size-change":function(e){return t.getContestRankData(1)}}})],1)],1)],1)},c=[];function u(t){if(Array.isArray(t))return t}s("a4d3"),s("e01a"),s("d3b7"),s("d28b"),s("3ca3"),s("ddb0");function d(t,e){var s=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=s){var n,a,o=[],r=!0,i=!1;try{for(s=s.call(t);!(r=(n=s.next()).done);r=!0)if(o.push(n.value),e&&o.length===e)break}catch(l){i=!0,a=l}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return o}}var m=s("06c5");s("d9e2");function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t,e){return u(t)||d(t,e)||Object(m["a"])(t,e)||p()}var f=s("b85c"),w=(s("159b"),s("b64b"),s("4e82"),s("99af"),s("4a89")),v=s.n(w),g=s("c1df"),b=s.n(g),C=s("ffb0"),_=s("90b9"),y=(s("a434"),s("3228")),k=s("8935"),x={methods:{initConcernedList:function(){var t=Object(i["u"])(this.$route.params.contestID);this.concernedList=k["a"].get(t)||[]},getContestRankData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.showChart&&!s&&this.$refs.chart.showLoading({maskColor:"rgba(250, 250, 250, 0.8)"});var n={currentPage:e,limit:this.limit,cid:this.$route.params.contestID,forceRefresh:!!this.forceUpdate,removeStar:!this.showStarUser,concernedList:this.concernedList};y["a"].getContestRank(n).then((function(n){t.showChart&&!s&&t.$refs.chart.hideLoading(),t.total=n.data.data.total,1===e&&t.applyToChart(n.data.data.records),t.applyToTable(n.data.data.records)}))},handleAutoRefresh:function(t){var e=this;1==t?this.refreshFunc=setInterval((function(){e.$store.dispatch("getContestProblems"),e.getContestRankData(e.page,!0)}),1e4):clearInterval(this.refreshFunc)},updateConcernedList:function(t,e){if(e)this.concernedList.push(t);else{var s=this.concernedList.indexOf(t);s>-1&&this.concernedList.splice(s,1)}var n=Object(i["u"])(this.contestID);k["a"].set(n,this.concernedList),this.getContestRankData(this.page,!0)}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["c"])(["isContestAdmin","userInfo"])),Object(r["d"])({contest:function(t){return t.contest.contest},contestProblems:function(t){return t.contest.contestProblems}})),{},{showChart:{get:function(){return this.$store.state.contest.itemVisible.chart},set:function(t){this.$store.commit("changeContestItemVisible",{chart:t})}},showStarUser:{get:function(){return!this.$store.state.contest.removeStar},set:function(t){this.$store.commit("changeRankRemoveStar",{value:!t})}},showTable:{get:function(){return this.$store.state.contest.itemVisible.table},set:function(t){this.$store.commit("changeContestItemVisible",{table:t})}},forceUpdate:{get:function(){return this.$store.state.contest.forceUpdate},set:function(t){this.$store.commit("changeRankForceUpdate",{value:t})}},concernedList:{get:function(){return this.$store.state.contest.concernedList},set:function(t){this.$store.commit("changeConcernedList",{value:t})}},refreshDisabled:function(){return this.contest.status==i["a"].ENDED}}),beforeDestroy:function(){clearInterval(this.refreshFunc)}},I=function(){return s.e("chunk-48bf8d0f").then(s.bind(null,"5072"))},S={name:"ACMContestRank",mixins:[x],components:{Pagination:I,Avatar:v.a},data:function(){return{total:0,page:1,limit:30,autoRefresh:!1,contestID:"",dataRank:[],options:{title:{text:this.$i18n.t("m.Top_10_Teams"),left:"center",top:0},dataZoom:[{type:"inside",filterMode:"none",xAxisIndex:[0],start:0,end:100}],toolbox:{show:!0,feature:{saveAsImage:{show:!0,title:this.$i18n.t("m.save_as_image")}},right:"0"},tooltip:{trigger:"axis",axisPointer:{type:"cross",axis:"x"}},legend:{orient:"horizontal",x:"center",top:"8%",right:0,data:[],formatter:function(t){return _["a"].breakLongWords(t,16)},textStyle:{fontSize:12}},grid:{x:80,x2:100,left:"5%",top:"25%",right:"5%",bottom:"10%"},xAxis:[{type:"time",splitLine:!1,axisPointer:{show:!0,snap:!0}}],yAxis:[{type:"category",boundaryGap:!1,data:[0]}],series:[]}}},created:function(){this.initConcernedList()},mounted:function(){this.contestID=this.$route.params.contestID,this.getContestRankData(1),this.addChartCategory(this.contestProblems),this.refreshDisabled||(this.autoRefresh=!0,this.handleAutoRefresh(!0))},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["getContestProblems"])),{},{getUserACSubmit:function(t){this.$router.push({name:"ContestSubmissionList",query:{username:t,status:0}})},getUserHomeByUsername:function(t,e){this.$router.push({name:"UserHome",query:{username:e,uid:t}})},getContestProblemById:function(t){this.$router.push({name:"ContestProblemDetails",params:{contestID:this.contestID,problemID:t}})},getUserProblemSubmission:function(t){var e=t.row,s=t.column;"rank"!=s.property&&"rating"!=s.property&&"totalTime"!=s.property&&"username"!=s.property&&"realname"!=s.property&&e[s.property]&&this.$router.push({name:"ContestSubmissionList",query:{username:e.username,problemID:s.property}})},cellClassName:function(t){var e=t.row,s=(t.rowIndex,t.column),n=t.columnIndex;return e.username!=this.userInfo.username||"rank"!=s.property&&"rating"!=s.property&&"totalTime"!=s.property&&"username"!=s.property&&"realname"!=s.property?"username"==s.property&&e.userCellClassName?e.userCellClassName:"rank"!=s.property&&"rating"!=s.property&&"totalTime"!=s.property&&"username"!=s.property&&"realname"!=s.property?this.isContestAdmin?e.cellClassName[[this.contestProblems[n-5].displayId]]:e.cellClassName[[this.contestProblems[n-4].displayId]]:e.isConcerned&&"username"!==s.property?"bg-concerned":void 0:"own-submit-row"},applyToTable:function(t){var e=this;t.forEach((function(s,n){var a=s.submissionInfo,o={};-1!=e.concernedList.indexOf(s.uid)&&(t[n].isConcerned=!0),Object.keys(a).forEach((function(s){t[n][s]=a[s],null!=t[n][s].ACTime&&(t[n][s].errorNum+=1,t[n][s].specificTime=e.parseTimeToSpecific(t[n][s].ACTime),t[n][s].ACTime=parseInt(t[n][s].ACTime/60));var r=a[s];r.isFirstAC?o[s]="first-ac":r.isAC?o[s]="ac":null!=r.tryNum&&r.tryNum>0?o[s]="try":0!=r.errorNum&&(o[s]="wa")})),t[n].cellClassName=o,-1==t[n].rank&&(t[n].userCellClassName="bg-star"),"female"==t[n].gender&&(t[n].userCellClassName="bg-female")})),this.dataRank=t},addChartCategory:function(t){for(var e=[],s=0;s<=t.length;++s)e.push(s);this.options.yAxis[0].data=e},applyToChart:function(t){var e=this,s=[],n=[],a=t.length,o=this.concernedList.length||0;t.length>0&&t[0].uid==this.userInfo.uid&&o++;for(var r=function(a){var o=t[a];s.push(o[e.contest.rankShowName]);var r=o.submissionInfo,i=[];Object.keys(r).forEach((function(t){r[t].isAC&&i.push(r[t].ACTime)})),i.sort((function(t,e){return t-e}));var l=[];l.push([e.contest.startTime,0]);var c,u=Object(f["a"])(i.entries());try{for(u.s();!(c=u.n()).done;){var d=h(c.value,2),m=d[0],p=d[1],w=b()(e.contest.startTime).add(p,"seconds").format();l.push([w,m+1])}}catch(v){u.e(v)}finally{u.f()}n.push({name:o[e.contest.rankShowName],type:"line",data:l})},i=o;i<a&&i<o+10;i++)r(i);this.options.legend.data=s,this.options.series=n},parseTimeToSpecific:function(t){return C["a"].secondFormat(t)},downloadRankCSV:function(){_["a"].downloadFile("/api/file/download-contest-rank?cid=".concat(this.$route.params.contestID,"&forceRefresh=").concat(!!this.forceUpdate))}}),watch:{contestProblems:function(t,e){0!=t.length&&this.addChartCategory(this.contestProblems)}},computed:{contest:function(){return this.$store.state.contest.contest},isMobileView:function(){return window.screen.width<768}}},$=S,T=(s("bd1f"),s("2877")),R=Object(T["a"])($,l,c,!1,null,"315c2480",null),A=R.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",[s("el-col",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{span:24}},[s("el-card",{attrs:{shadow:""}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"panel-title"},[t._v(t._s(t.$t("m.Contest_Rank"))+"（"+t._s("Recent"==t.contest.oiRankScoreType?t.$t("m.Based_on_The_Recent_Score_Submitted_Of_Each_Problem"):t.$t("m.Based_on_The_Highest_Score_Submitted_For_Each_Problem"))+"）")]),s("span",{staticStyle:{float:"right","font-size":"20px"}},[s("el-popover",{attrs:{trigger:"hover",placement:"left-start"}},[s("i",{staticClass:"el-icon-s-tools",attrs:{slot:"reference"},slot:"reference"}),s("div",{attrs:{id:"switches"}},[s("p",[s("span",[t._v(t._s(t.$t("m.Chart")))]),s("el-switch",{model:{value:t.showChart,callback:function(e){t.showChart=e},expression:"showChart"}})],1),s("p",[s("span",[t._v(t._s(t.$t("m.Table")))]),s("el-switch",{model:{value:t.showTable,callback:function(e){t.showTable=e},expression:"showTable"}})],1),s("p",[s("span",[t._v(t._s(t.$t("m.Star_User")))]),s("el-switch",{on:{change:function(e){return t.getContestRankData(t.page)}},model:{value:t.showStarUser,callback:function(e){t.showStarUser=e},expression:"showStarUser"}})],1),s("p",[s("span",[t._v(t._s(t.$t("m.Auto_Refresh"))+"(10s)")]),s("el-switch",{attrs:{disabled:t.refreshDisabled},on:{change:t.handleAutoRefresh},model:{value:t.autoRefresh,callback:function(e){t.autoRefresh=e},expression:"autoRefresh"}})],1),t.isContestAdmin?[s("p",[s("span",[t._v(t._s(t.$t("m.Force_Update")))]),s("el-switch",{on:{change:function(e){return t.getContestRankData(t.page)}},model:{value:t.forceUpdate,callback:function(e){t.forceUpdate=e},expression:"forceUpdate"}})],1)]:t._e(),t.isContestAdmin?[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.downloadRankCSV}},[t._v(t._s(t.$t("m.Download_as_CSV")))])]:t._e()],2)])],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showChart,expression:"showChart"}],staticClass:"echarts"},[s("ECharts",{ref:"chart",attrs:{options:t.options,autoresize:!0}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showTable,expression:"showTable"}]},[s("vxe-table",{ref:"OIContestRank",attrs:{round:"",border:"","auto-resize":"",size:"medium",align:"center",data:t.dataRank,"cell-class-name":t.cellClassName},on:{"cell-click":t.getUserProblemSubmission}},[s("vxe-table-column",{attrs:{field:"rank",width:"50",fixed:"left",title:t.$t("m.Contest_Rank_Seq")},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[t._v(" "+t._s(-1==s.rank?"*":s.rank)+" ")]}}])}),t.isMobileView?s("vxe-table-column",{attrs:{field:"username",fixed:"left","min-width":"280",title:t.$t("m.User"),"header-align":"center",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[n[t.contest.rankShowName]?s("avatar",{attrs:{username:n[t.contest.rankShowName],inline:!0,size:37,color:"#FFF",src:n.avatar,title:n[t.contest.rankShowName]}}):t._e(),s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(n.isConcerned?t.$t("m.Unfollow"):t.$t("m.Top_And_Follow"))+" ")]),s("span",{staticClass:"contest-rank-concerned",on:{click:function(e){return t.updateConcernedList(n.uid,!n.isConcerned)}}},[n.isConcerned?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",width:"16",height:"16"}},[s("path",{attrs:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",fill:"red"}})]):s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",width:"16",height:"16"}},[s("path",{attrs:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3C200.7 23 111.4 15.6 53.6 64.3C-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9c14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7c38.9-32.7 98.9-27.8 136.5 10.5l35 35.7l35-35.7c37.8-38.5 97.8-43.2 136.5-10.6c51.1 43.1 43.5 113.9 7.3 150.8z",fill:"currentColor"}})])])]),s("span",{staticStyle:{float:"right","text-align":"right"}},[s("a",{on:{click:function(e){return t.getUserHomeByUsername(n.uid,n.username)}}},[s("span",{staticClass:"contest-username"},[n.uid==t.userInfo.uid?s("span",{staticClass:"contest-rank-flag"},[t._v("Me")]):t._e(),-1==n.rank?s("span",{staticClass:"contest-rank-flag"},[t._v("Star")]):t._e(),"female"==n.gender?s("span",{staticClass:"contest-rank-flag"},[t._v("Girl")]):t._e(),t._v(" "+t._s(n[t.contest.rankShowName]))]),n.school?s("span",{staticClass:"contest-school"},[t._v(t._s(n.school))]):t._e()])])]}}])}):s("vxe-table-column",{attrs:{field:"username",fixed:"left","min-width":"280",title:t.$t("m.User"),"header-align":"center",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[n[t.contest.rankShowName]?s("avatar",{attrs:{username:n[t.contest.rankShowName],inline:!0,size:37,color:"#FFF",src:n.avatar,title:n[t.contest.rankShowName]}}):t._e(),s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(n.isConcerned?t.$t("m.Unfollow"):t.$t("m.Top_And_Follow"))+" ")]),s("span",{staticClass:"contest-rank-concerned",on:{click:function(e){return t.updateConcernedList(n.uid,!n.isConcerned)}}},[n.isConcerned?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",width:"16",height:"16"}},[s("path",{attrs:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",fill:"red"}})]):s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",width:"16",height:"16"}},[s("path",{attrs:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3C200.7 23 111.4 15.6 53.6 64.3C-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9c14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7c38.9-32.7 98.9-27.8 136.5 10.5l35 35.7l35-35.7c37.8-38.5 97.8-43.2 136.5-10.6c51.1 43.1 43.5 113.9 7.3 150.8z",fill:"currentColor"}})])])]),s("span",{staticStyle:{float:"right","text-align":"right"}},[s("a",{on:{click:function(e){return t.getUserHomeByUsername(n.uid,n.username)}}},[s("span",{staticClass:"contest-username"},[n.uid==t.userInfo.uid?s("span",{staticClass:"contest-rank-flag"},[t._v("Me")]):t._e(),-1==n.rank?s("span",{staticClass:"contest-rank-flag"},[t._v("Star")]):t._e(),"female"==n.gender?s("span",{staticClass:"contest-rank-flag"},[t._v("Girl")]):t._e(),t._v(" "+t._s(n[t.contest.rankShowName]))]),n.school?s("span",{staticClass:"contest-school"},[t._v(t._s(n.school))]):t._e()])])]}}],null,!1,200133354)}),t.isContestAdmin?s("vxe-table-column",{attrs:{field:"realname",width:"96",title:t.$t("m.RealName"),"show-overflow":""}}):t._e(),s("vxe-table-column",{attrs:{field:"totalScore",title:t.$t("m.Total_Score"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[s("span",{staticStyle:{"font-size":"14px"}},[s("a",{staticStyle:{color:"rgb(87, 163, 243)"},on:{click:function(e){return t.getUserTotalSubmit(n.username)}}},[t._v(t._s(n.totalScore))]),s("br"),s("span",{staticClass:"problem-time"},[t._v(t._s(n.totalTime)+"ms")])])]}}])}),t._l(t.contestProblems,(function(e){return s("vxe-table-column",{key:e.displayId,attrs:{width:"64",field:e.displayId},scopedSlots:t._u([{key:"header",fn:function(){return[s("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(e.displayId+". "+e.displayTitle)+" "),s("br"),t._v(" "+t._s("Accepted: "+e.ac)+" "),s("br"),t._v(" "+t._s("Rejected: "+e.error)+" ")]),s("div",[e.color?s("span",{staticStyle:{"vertical-align":"middle"}},[s("svg",{staticClass:"icon",attrs:{t:"1633685184463",viewBox:"0 0 1088 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5840",width:"25",height:"25"}},[s("path",{attrs:{d:"M575.872 849.408c-104.576 0-117.632-26.56-119.232-31.808-6.528-22.528 32.896-70.592 63.744-96.768l-1.728-2.624c137.6-42.688 243.648-290.112 243.648-433.472A284.544 284.544 0 0 0 478.016 0a284.544 284.544 0 0 0-284.288 284.736c0 150.4 116.352 415.104 263.744 438.336-25.152 29.568-50.368 70.784-39.104 108.928 12.608 43.136 62.72 63.232 157.632 63.232 7.872 0 11.52 9.408 4.352 19.52-21.248 29.248-77.888 63.424-167.68 63.424V1024c138.944 0 215.936-74.816 215.936-126.528a46.72 46.72 0 0 0-16.32-36.608 56.32 56.32 0 0 0-36.416-11.456zM297.152 297.472c0 44.032-38.144 25.344-38.144-38.656 0-108.032 85.248-195.712 190.592-195.712 62.592 0 81.216 39.232 38.08 39.232-105.152 0.064-190.528 87.04-190.528 195.136z",fill:e.color,"p-id":"5841"}})])]):t._e(),s("span",[s("a",{staticClass:"emphasis",staticStyle:{color:"#495060"},on:{click:function(s){return t.getContestProblemById(e.displayId)}}},[t._v(t._s(e.displayId)+" ")]),s("br"),s("span",[t._v(t._s(e.ac))])])])])]},proxy:!0},{key:"default",fn:function(n){var a=n.row;return[a.submissionInfo[e.displayId]?s("div",{staticClass:"submission-hover"},[s("span",{staticStyle:{"font-size":"14px"}},[t._v(t._s(a.submissionInfo[e.displayId]))]),s("br"),a.timeInfo&&null!=a.timeInfo[e.displayId]?s("span",[t._v(t._s(a.timeInfo[e.displayId])+"ms")]):t._e()]):t._e()]}}],null,!0)})}))],2)],1),s("Pagination",{attrs:{total:t.total,"page-size":t.limit,current:t.page,layout:"prev, pager, next, sizes"},on:{"update:pageSize":function(e){t.limit=e},"update:page-size":function(e){t.limit=e},"update:current":function(e){t.page=e},"on-change":t.getContestRankData,"on-page-size-change":function(e){return t.getContestRankData(1)}}})],1)],1)],1)},U=[],L=function(){return s.e("chunk-48bf8d0f").then(s.bind(null,"5072"))},z={name:"OIContestRank",components:{Pagination:L,Avatar:v.a},mixins:[x],data:function(){return{total:0,page:1,limit:30,contestID:"",dataRank:[],autoRefresh:!1,options:{title:{text:this.$i18n.t("m.Top_10_Teams"),left:"center"},tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["line","bar"]},saveAsImage:{show:!0,title:this.$i18n.t("m.save_as_image")}},right:"10%",top:"5%"},calculable:!0,xAxis:[{type:"category",data:["root"],boundaryGap:!0,axisLabel:{interval:0,showMinLabel:!0,showMaxLabel:!0,align:"center",formatter:function(t,e){return _["a"].breakLongWords(t,14)}},axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],grid:{left:"11%"},series:[{name:this.$i18n.t("m.Score"),type:"bar",barMaxWidth:"80",data:[0],markPoint:{data:[{type:"max",name:"max"}]}}]}}},created:function(){this.initConcernedList()},mounted:function(){this.contestID=this.$route.params.contestID,this.getContestRankData(1),this.refreshDisabled||(this.autoRefresh=!0,this.handleAutoRefresh(!0))},computed:{contest:function(){return this.$store.state.contest.contest},isMobileView:function(){return window.screen.width<768}},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["getContestProblems"])),{},{cellClassName:function(t){var e=t.row,s=(t.rowIndex,t.column),n=t.columnIndex;return e.username!=this.userInfo.username||"rank"!=s.property&&"totalScore"!=s.property&&"username"!=s.property&&"realname"!=s.property?"username"===s.property&&e.userCellClassName?e.userCellClassName:"rank"!==s.property&&"totalScore"!==s.property&&"username"!==s.property&&"realname"!==s.property?this.isContestAdmin?e.cellClassName[[this.contestProblems[n-4].displayId]]:e.cellClassName[[this.contestProblems[n-3].displayId]]:e.isConcerned&&"username"!==s.property?"bg-concerned":void 0:"own-submit-row"},getUserTotalSubmit:function(t){this.$router.push({name:"ContestSubmissionList",query:{username:t}})},getUserHomeByUsername:function(t,e){this.$router.push({name:"UserHome",query:{username:e,uid:t}})},getContestProblemById:function(t){this.$router.push({name:"ContestProblemDetails",params:{contestID:this.contestID,problemID:t}})},getUserProblemSubmission:function(t){var e=t.row,s=t.column;"rank"!==s.property&&"totalScore"!==s.property&&"username"!==s.property&&"realname"!==s.property&&e[s.property]&&this.$router.push({name:"ContestSubmissionList",query:{username:e.username,problemID:s.property}})},applyToChart:function(t){var e=[],s=[],n=t.length,a=this.concernedList.length||0;t.length>0&&t[0].uid==this.userInfo.uid&&a++;for(var o=a;o<n&&o<a+10;o++){var r=t[o];e.push(r[this.contest.rankShowName]),s.push(r.totalScore)}this.options.xAxis[0].data=e,this.options.series[0].data=s},applyToTable:function(t){var e=this;t.forEach((function(s,n){var a=s.submissionInfo,o=s.timeInfo,r={};-1!=e.concernedList.indexOf(s.uid)&&(t[n].isConcerned=!0),Object.keys(a).forEach((function(e){t[n][e]=a[e];var s=a[e];null!=o&&void 0!=o[e]?r[e]="oi-100":0==s?r[e]="oi-0":null!=s&&(r[e]="oi-between")})),t[n].cellClassName=r,-1==t[n].rank&&(t[n].userCellClassName="bg-star"),"female"==t[n].gender&&(t[n].userCellClassName="bg-female")})),this.dataRank=t},downloadRankCSV:function(){_["a"].downloadFile("/api/file/download-contest-rank?cid=".concat(this.$route.params.contestID,"&forceRefresh=").concat(!!this.forceUpdate))}})},D=z,P=(s("9e7d"),Object(T["a"])(D,N,U,!1,null,"a1c72ebe",null)),M=P.exports,O={name:"null-component",template:"<div></div>"},F={name:"contest-rank",components:{ACMContestRank:A,OIContestRank:M,NullComponent:O},beforeCreate:function(){0===this.$store.state.contest.contestProblems.length&&this.$store.dispatch("getContestProblems")},computed:Object(o["a"])(Object(o["a"])({},Object(r["c"])(["contestRuleType"])),{},{currentView:function(){return null===this.contestRuleType?"NullComponent":this.contestRuleType===i["p"].ACM?"ACMContestRank":"OIContestRank"}}),beforeRouteLeave:function(t,e,s){this.$store.commit("changeContestItemVisible",{menu:!0}),s()}},j=F,B=Object(T["a"])(j,n,a,!1,null,null,null);e["default"]=B.exports}}]);