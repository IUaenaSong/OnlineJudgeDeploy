(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a84f5cc2"],{"1b00":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{span:24}},[n("el-card",[n("vxe-table",{attrs:{border:"inner",stripe:"","auto-resize":"","highlight-hover-row":"",data:t.problemList,align:"center"},on:{"cell-click":t.goTrainingProblem}},[t.isAuthenticated?n("vxe-table-column",{attrs:{field:"status",title:"",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t.isGetStatusOk?[n("el-tooltip",{attrs:{content:t.JUDGE_STATUS[i.myStatus]["name"],placement:"top"}},[0==i.myStatus?[n("i",{staticClass:"el-icon-check",style:t.getIconColor(i.myStatus)})]:-10!=i.myStatus?[n("i",{staticClass:"el-icon-minus",style:t.getIconColor(i.myStatus)})]:t._e()],2)]:t._e()]}}],null,!1,893541202)}):t._e(),n("vxe-table-column",{attrs:{field:"problemId",title:t.$t("m.Problem_ID"),width:"150","show-overflow":""}}),n("vxe-table-column",{attrs:{field:"title",title:t.$t("m.Title"),"min-width":"150","show-overflow":""}}),n("vxe-table-column",{attrs:{field:"difficulty",title:t.$t("m.Level"),"min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("span",{staticClass:"el-tag el-tag--small",style:t.getLevelColor(i.difficulty)},[t._v(t._s(t.getLevelName(i.difficulty)))])]}}])}),n("vxe-table-column",{attrs:{field:"tag","min-width":"100"},scopedSlots:t._u([{key:"header",fn:function(){return[t.showTags?n("el-link",{attrs:{type:"danger",underline:!1},on:{click:function(e){t.showTags=!t.showTags}}},[t._v(t._s(t.$t("m.Hide_Tags")))]):n("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(e){t.showTags=!t.showTags}}},[t._v(t._s(t.$t("m.Show_Tags")))])]},proxy:!0},{key:"default",fn:function(e){var i=e.row;return[t.showTags?n("div",t._l(i.tags,(function(e){return n("span",{key:e.id,staticClass:"el-tag el-tag--small",style:"margin-right:7px;color:#FFF;background-color:"+(e.color?e.color:"#409eff")},[t._v(t._s(e.name))])})),0):t._e()]}}])}),n("vxe-table-column",{attrs:{field:"ac",title:t.$t("m.AC_Rate"),"min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("span",[n("el-tooltip",{attrs:{effect:"dark",content:i.ac+"/"+i.total,placement:"top"}},[n("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:t.getPassingRate(i.ac,i.total)}})],1)],1)]}}])})],1)],1)],1)],1)},a=[],o=n("5530"),r=(n("b680"),n("2f62")),s=n("90b9"),l=n("9a36"),c=n("3228"),u={name:"TrainingProblemList",data:function(){return{JUDGE_STATUS:{},isGetStatusOk:!1,testcolor:"rgba(0, 206, 209, 1)",showTags:!1}},mounted:function(){this.JUDGE_STATUS=Object.assign({},l["k"]),this.getTrainingProblemList()},methods:{getTrainingProblemList:function(){var t=this;this.$store.dispatch("getTrainingProblemList").then((function(e){if(t.isAuthenticated){var n=[];if(t.problemList&&t.problemList.length>0){for(var i=0;i<t.problemList.length;i++)n.push(t.problemList[i].pid);t.isGetStatusOk=!1,c["a"].getUserProblemStatus(n,!1,!1).then((function(e){for(var n=e.data.data,i=0;i<t.problemList.length;i++)t.problemList[i]["myStatus"]=n[t.problemList[i].pid]["status"];t.isGetStatusOk=!0}))}}}))},goTrainingProblem:function(t){this.$router.push({name:"TrainingProblemDetails",params:{trainingID:this.$route.params.trainingID,problemID:t.row.problemId,groupID:this.gid}})},getACRate:function(t,e){return s["a"].getACRate(t,e)},getIconColor:function(t){return"font-weight: 600;font-size: 16px;color:"+l["k"][t].rgb},getLevelColor:function(t){return s["a"].getLevelColor(t)},getLevelName:function(t){return s["a"].getLevelName(t)},getPassingRate:function(t,e){return e?(t/e*100).toFixed(2):0}},computed:Object(o["a"])(Object(o["a"])({},Object(r["d"])({gid:function(t){return t.training.training.gid},problemList:function(t){return t.training.trainingProblemList}})),Object(r["c"])(["isAuthenticated"]))},g=u,m=(n("6e47"),n("2877")),f=Object(m["a"])(g,i,a,!1,null,"b665cecc",null);e["default"]=f.exports},"6e47":function(t,e,n){"use strict";n("f818")},f818:function(t,e,n){}}]);