(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72808186"],{"092f":function(t,e,a){"use strict";a("5273")},"24b4":function(t,e,a){t.exports=a.p+"assets/img/default.fd8c1f48.jpg"},5273:function(t,e,a){},ba05:function(t,e,a){},e210:function(t,e,a){"use strict";a("ba05")},f966:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contest-body"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{span:24}},[a("div",{staticClass:"sub-menu"},[a("el-tabs",{on:{"tab-click":t.tabClick},model:{value:t.route_name,callback:function(e){t.route_name=e},expression:"route_name"}},[a("el-tab-pane",{attrs:{name:"GroupDetails",lazy:""}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-s-home"}),t._v(" "+t._s(t.$t("m.Group_Home"))+" ")])]),a("el-tab-pane",{attrs:{lazy:"",name:"GroupProblemList",disabled:t.groupMenuDisabled}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"fa fa-list"}),t._v(" "+t._s(t.$t("m.Group_Problem"))+" ")])]),a("el-tab-pane",{attrs:{lazy:"",name:"GroupQuestionList",disabled:t.groupMenuDisabled}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-s-order"}),t._v(" "+t._s(t.$t("m.Group_Question"))+" ")])]),a("el-tab-pane",{attrs:{lazy:"",name:"GroupTrainingList",disabled:t.groupMenuDisabled}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-s-flag"}),t._v(" "+t._s(t.$t("m.Group_Training"))+" ")])]),a("el-tab-pane",{attrs:{lazy:"",name:"GroupContestList",disabled:t.groupMenuDisabled}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-s-data"}),t._v(" "+t._s(t.$t("m.Group_Contest"))+" ")])]),a("el-tab-pane",{attrs:{lazy:"",name:"GroupExamList",disabled:t.groupMenuDisabled}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-document"}),t._v(" "+t._s(t.$t("m.Group_Exam"))+" ")])]),a("el-tab-pane",{attrs:{lazy:"",name:"GroupRank",disabled:t.groupMenuDisabled}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-medal-1"}),t._v(" "+t._s(t.$t("m.Group_Rank"))+" ")])]),t.websiteConfig.openGroupDiscussion||t.isSuperAdmin?a("el-tab-pane",{attrs:{lazy:"",name:"GroupDiscussionList",disabled:t.groupMenuDisabled}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-share"}),t._v(" "+t._s(t.$t("m.Group_Discussion"))+" ")])]):t._e(),a("el-tab-pane",{attrs:{lazy:"",name:"GroupMemberList",disabled:t.groupMenuDisabled}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-user-solid"}),t._v(" "+t._s(t.$t("m.Group_Member"))+" ")])]),t.isGroupAdmin?a("el-tab-pane",{attrs:{lazy:"",name:"GroupAnnouncementList"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"fa fa-bullhorn"}),t._v(" "+t._s(t.$t("m.Group_Announcement"))+" ")])]):t._e(),t.isGroupRoot?a("el-tab-pane",{attrs:{lazy:"",name:"GroupSetting"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-s-tools"}),t._v(" "+t._s(t.$t("m.Group_Setting"))+" ")])]):t._e()],1)],1)]),a("el-col",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{md:18,xs:24}},[a("transition",{attrs:{name:"el-fade-in-linear"}},[a("router-view")],1),a("el-card",{directives:[{name:"show",rawName:"v-show",value:"GroupDetails"===t.route_name,expression:"route_name === 'GroupDetails'"}]},[a("el-row",[a("el-col",{attrs:{md:t.isGroupMember||t.isSuperAdmin?12:24,sm:24,xs:24}},[a("div",{staticClass:"description-body"},[t.descriptionHtml?a("div",{directives:[{name:"katex",rawName:"v-katex"},{name:"highlight",rawName:"v-highlight"}],staticClass:"content markdown-body",domProps:{innerHTML:t._s(t.descriptionHtml)}}):a("div",{staticClass:"content markdown-body"},[a("p",[t._v(t._s(t.$t("m.Not_set_yet")))])])])]),t.isGroupMember||t.isSuperAdmin?a("el-col",{attrs:{md:1,lg:1}},[a("div",{staticClass:"separator hidden-sm-and-down"}),a("p")]):t._e(),t.isGroupMember||t.isSuperAdmin?a("el-col",{attrs:{md:11,sm:24,xs:24}},[a("Announcement")],1):t._e()],1)],1)],1),a("el-col",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{md:6,xs:24}},[a("el-card",[a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("avatar",{attrs:{inline:!0,size:130,color:"#FFF",src:t.group.avatar?t.group.avatar:t.defaultAvatar,shape:"square"}})],1),a("div",{staticClass:"info-rows"},[a("div",[a("span",[a("span",[t._v(t._s(t.$t("m.Group_Name")))])]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.group.name,placement:"top"}},[a("span",{staticClass:"group-name"},[a("span",[t._v(t._s(t.group.name))])])])],1),a("div",[a("span",[a("span",[t._v(t._s(t.$t("m.Group_Owner")))])]),a("span",[a("el-link",{staticStyle:{"font-size":"16px"},attrs:{type:"primary",underline:!1},on:{click:function(e){return t.toUserHome(t.group.owner)}}},[a("i",{staticClass:"el-icon-user-solid"}),t._v(" "+t._s(t.group.owner)+" ")])],1)]),a("div",[a("span",[a("span",[t._v(t._s(t.$t("m.Group_Auth")))])]),a("span",[null!=t.group.auth&&void 0!=t.group.auth?a("el-tooltip",{attrs:{content:t.$t("m."+t.GROUP_TYPE_REVERSE[t.group.auth].tips)}},[a("el-tag",{attrs:{type:t.GROUP_TYPE_REVERSE[t.group.auth].color,size:"medium",effect:"dark"}},[t._v(" "+t._s(t.$t("m.Group_"+t.GROUP_TYPE_REVERSE[t.group.auth].name))+" ")])],1):t._e(),a("el-tooltip",{attrs:{content:t.$t("m.Group_Hidden_Tips")}},[t.group.visible?t._e():a("el-tag",{attrs:{size:"medium",type:"primary",effect:"dark"}},[t._v(" "+t._s(t.$t("m.Group_Hidden"))+" ")])],1)],1)]),a("div",[a("span",[a("span",[t._v(t._s(t.$t("m.Created_Time")))])]),a("span",[a("i",{staticClass:"el-icon-time"},[t._v(" "+t._s(t._f("localtime")(t.group.gmtCreate,t.format="YYYY-MM-DD"))+" ")])])]),a("div",[a("span",[a("span",[t._v(t._s(t.$t("m.Group_Number")))])]),a("span",[a("span",[t._v(t._s(t.group.id))])])])]),a("div",{staticClass:"group-button"},[t.isAuthenticated&&t.userAuth<=2?a("span",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleApply}},[t._v(" "+t._s(t.$t("m.Apply_Group"))+" ")])],1):t._e(),1==t.userAuth?a("span",[a("el-button",{attrs:{size:"small"}},[t._v(" "+t._s(t.$t("m.Applying"))+" ")])],1):t._e(),t.isAuthenticated&&t.userAuth>=3?a("span",[a("el-button",{attrs:{type:"warning",size:"small",loading:t.loading},on:{click:t.exitGroup}},[t._v(" "+t._s(t.$t("m.Exit_Group"))+" ")])],1):t._e(),t.isGroupOwner?a("span",[a("el-button",{attrs:{type:"danger",size:"small",loading:t.loading},on:{click:t.deleteGroup}},[t._v(" "+t._s(t.$t("m.Disband_Group"))+" ")])],1):t._e()])])],1)],1),a("el-dialog",{attrs:{title:t.$t("m.Apply_Group"),visible:t.showApplyDialog,width:"400px","close-on-click-modal":!1},on:{"update:visible":function(e){t.showApplyDialog=e}}},[a("el-form",{ref:"apply",attrs:{model:t.appliaction,"label-width":"100px","label-position":"top",rules:t.rules}},[a("el-row",[3==t.group.auth?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:t.$t("m.Group_Code"),required:"",prop:"code"}},[a("el-input",{staticClass:"title-input",attrs:{placeholder:t.$t("m.Group_Code"),minlength:"6",maxlength:"6","show-word-limit":""},model:{value:t.appliaction.code,callback:function(e){t.$set(t.appliaction,"code",e)},expression:"appliaction.code"}})],1)],1):t._e(),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:t.$t("m.Apply_Reason"),required:"",prop:"reason"}},[a("el-input",{staticClass:"title-input",attrs:{placeholder:t.$t("m.Apply_Reason"),type:"textarea",rows:"5",minlength:"5",maxlength:"100","show-word-limit":""},model:{value:t.appliaction.reason,callback:function(e){t.$set(t.appliaction,"reason",e)},expression:"appliaction.reason"}})],1)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"danger"},nativeOn:{click:function(e){t.showApplyDialog=!1}}},[t._v(t._s(t.$t("m.Cancel")))]),a("el-button",{attrs:{type:"primary",loading:t.loading},nativeOn:{click:function(e){return t.submitApply.apply(null,arguments)}}},[t._v(t._s(t.$t("m.OK")))])],1)],1)],1)},s=[],i=a("5530"),o=(a("d9e2"),a("b0c0"),a("a4d3"),a("e01a"),a("9a36")),l=a("2f62"),r=a("4a89"),u=a.n(r),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticStyle:{border:"0"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"home-title panel-title"},[t._v(t._s(t.title))]),a("span",{staticStyle:{float:"right"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.listVisible,expression:"listVisible"}],attrs:{type:"primary",size:"small",icon:"el-icon-refresh",loading:t.loading},on:{click:t.init}},[t._v(t._s(t.$t("m.Refresh")))]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.listVisible,expression:"!listVisible"}],attrs:{type:"primary",icon:"el-icon-back",size:"small"},on:{click:t.goBack}},[t._v(t._s(t.$t("m.Back")))])],1)]),a("transition-group",{attrs:{name:"el-fade-in-linear"}},[t.announcementList.length?t._e():a("div",{key:"no-announcement",staticClass:"no-announcement"},[a("el-empty",{attrs:{description:t.$t("m.No_Announcements")}})],1),t.listVisible?[a("ul",{key:"list",staticClass:"announcement-container"},t._l(t.announcementList,(function(e){return a("li",{key:e.title},[a("div",{staticClass:"flex-container"},[a("div",{staticClass:"title"},[a("a",{staticClass:"entry",on:{click:function(a){return t.goAnnouncement(e)}}},[t._v(" "+t._s(e.title))])]),a("div",{staticClass:"info"},[a("span",{staticClass:"date"},[a("i",{staticClass:"el-icon-edit"}),t._v(" "+t._s(t._f("localtime")(e.gmtCreate))+" ")]),a("span",{staticClass:"creator"},[a("i",{staticClass:"el-icon-user"}),t._v(" "+t._s(e.username)+" ")])])])])})),0),a("Pagination",{key:"page",attrs:{total:t.total,"page-size":t.limit},on:{"on-change":t.getGroupAnnouncementList}})]:[a("div",{directives:[{name:"katex",rawName:"v-katex"},{name:"highlight",rawName:"v-highlight"}],key:"content",staticClass:"content-container markdown-body",domProps:{innerHTML:t._s(t.announcement.content)}})]],2)],1)},p=[],m=(a("d3b7"),a("3ca3"),a("ddb0"),a("a9e3"),a("3228")),d=a("b355"),h=function(){return a.e("chunk-48bf8d0f").then(a.bind(null,"5072"))},_={name:"Announcement",components:{Pagination:h},props:{limit:{type:Number,default:5}},data:function(){return{total:0,loading:!1,announcementList:[],announcement:"",listVisible:!0}},mounted:function(){this.init()},methods:{init:function(){this.getGroupAnnouncementList()},getGroupAnnouncementList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,m["a"].getGroupAnnouncementList(e,this.limit,this.$route.params.groupID).then((function(e){t.loading=!1,t.announcementList=e.data.data.records,t.total=e.data.data.total}),(function(){t.loading=!1}))},goAnnouncement:function(t){this.announcement=t,this.announcement.content=this.$markDown.render(t.content),this.listVisible=!1,this.$nextTick((function(t){Object(d["a"])()}))},goBack:function(){this.listVisible=!0,this.announcement=""}},computed:{title:function(){return this.listVisible?this.$i18n.t("m.Group_Announcement"):this.announcement.title}}},b=_,g=(a("e210"),a("2877")),f=Object(g["a"])(b,c,p,!1,null,"1b214905",null),v=f.exports,G={name:"GroupDetails",components:{Avatar:u.a,Announcement:v},data:function(){var t=this,e=function(e,a,n){1!==t.group.auth&&(null===a||""===a?n(new Error(t.$t("m.Apply_Reason_Check_Required"))):(a.length<5||a.length>100)&&n(new Error(t.$t("m.Apply_Reason_Check_Min_Max")))),n()},n=function(e,a,n){3===t.group.auth&&(null===a||""===a?n(new Error(t.$t("m.Group_Code_Check_Required"))):6!=a.length&&n(new Error(t.$t("m.Group_Code_Check_Min_Max")))),n()};return{route_name:"GroupDetails",defaultAvatar:a("24b4"),loading:!1,showApplyDialog:!1,appliaction:{code:"",reason:""},rules:{code:[{validator:n,trigger:"blur"}],reason:[{validator:e,trigger:"blur"}]}}},created:function(){var t=this;this.route_name=this.$route.name,"GroupQuestionDetails"===this.route_name&&(this.route_name="GroupQuestionList"),this.GROUP_TYPE=Object.assign({},o["i"]),this.GROUP_TYPE_REVERSE=Object.assign({},o["j"]),this.$store.dispatch("getGroup").then((function(e){t.changeDomTitle({title:e.data.data.name})}))},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["changeDomTitle"])),{},{tabClick:function(t){var e=t.name;e!==this.$route.name&&this.$router.push({name:e})},handleApply:function(){1===this.group.auth?this.addMember():this.showApplyDialog=!0},submitApply:function(){var t=this;this.$refs["apply"].validate((function(e){e&&t.addMember()}))},addMember:function(){var t=this;m["a"].addGroupMember(this.userInfo.uid,this.$route.params.groupID,this.appliaction.code,this.appliaction.reason).then((function(e){t.$msg.success(t.$t("m.Apply_Successfully")),t.$store.dispatch("getGroupAuth"),t.showApplyDialog=!1})).catch((function(){}))},exitGroup:function(){var t=this;this.$confirm(this.$i18n.t("m.Exit_Group_Tips"),this.$i18n.t("m.Warning"),{confirmButtonText:this.$i18n.t("m.OK"),cancelButtonText:this.$i18n.t("m.Cancel"),type:"warning"}).then((function(){t.loading=!0,m["a"].exitGroup(t.$route.params.groupID).then((function(e){t.loading=!1,t.$msg.success(t.$i18n.t("m.Exit_Successfully")),t.$store.commit("clearGroup"),t.$router.push("/group")})).catch((function(){t.loading=!1}))})).catch((function(){}))},deleteGroup:function(){var t=this;this.$confirm(this.$i18n.t("m.Disband_Group_Tips"),this.$i18n.t("m.Warning"),{confirmButtonText:this.$i18n.t("m.OK"),cancelButtonText:this.$i18n.t("m.Cancel"),type:"warning"}).then((function(){t.loading=!0,m["a"].deleteGroup(t.$route.params.groupID).then((function(e){t.loading=!1,t.$msg.success(t.$i18n.t("m.Disband_Successfully")),t.$store.commit("clearGroup"),t.$router.push("/group")})).catch((function(){t.loading=!1}))})).catch((function(){}))},toUserHome:function(t){this.$router.push({name:"UserHome",query:{username:t}})}}),computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(l["d"])({group:function(t){return t.group.group}})),Object(l["c"])(["userInfo","isAuthenticated","isGroupAdmin","isGroupRoot","isSuperAdmin","isGroupOwner","groupMenuDisabled","isGroupMember","userAuth","websiteConfig"])),{},{descriptionHtml:function(){return this.group.description?this.$markDown.render(this.group.description):null}}),watch:{$route:function(t){this.route_name=t.name,"GroupQuestionDetails"===this.route_name&&(this.route_name="GroupQuestionList"),this.changeDomTitle({title:this.group.name})}},beforeDestroy:function(){this.$store.commit("clearGroup")}},$=G,y=(a("092f"),Object(g["a"])($,n,s,!1,null,"44140c95",null));e["default"]=y.exports}}]);