(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69dbadc6","chunk-13f2b59d"],{"0ef5":function(t,e,n){},1514:function(t,e,n){"use strict";n("0ef5")},"7e81":function(t,e,n){},"857a":function(t,e,n){var i=n("e330"),a=n("1d80"),o=n("577e"),s=/"/g,l=i("".replace);t.exports=function(t,e,n,i){var u=o(a(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+l(o(i),s,"&quot;")+'"'),c+">"+u+"</"+e+">"}},"92bc":function(t,e,n){"use strict";n("7e81")},9911:function(t,e,n){"use strict";var i=n("23e7"),a=n("857a"),o=n("af03");i({target:"String",proto:!0,forced:o("link")},{link:function(t){return a(this,"a","href",t)}})},a956:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mavon-editor",{ref:"md",style:0!=t.height?"min-height:"+t.height+"px":"",attrs:{ishljs:!0,html:t.openHtml,autofocus:!1,toolbars:t.toolbars,codeStyle:"arduino-light",toolbarsFlag:t.toolbarsFlag},on:{imgAdd:t.$imgAdd,imgDel:t.$imgDel},scopedSlots:t._u([t.isAdminRole?{key:"left-toolbar-after",fn:function(){return[n("button",{staticClass:"op-icon fa markdown-upload",attrs:{type:"button",title:t.$t("m.Upload_file"),"aria-hidden":"true"},on:{click:t.uploadFile}},[n("i",{staticClass:"el-icon-upload"})])]},proxy:!0}:null],null,!0),model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}}),n("input",{ref:"uploadInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.uploadFileChange}})],1)},a=[],o=n("5530"),s=(n("a9e3"),n("9911"),n("99af"),n("b0c0"),n("2f62")),l=n("b355"),u={name:"Editor",props:{value:{type:String,default:""},openHtml:{type:Boolean,default:!0},toolbarsFlag:{type:Boolean,default:!0},height:{type:Number,default:0}},data:function(){return{currentValue:this.value,img_file:{},toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!1,code:!0,table:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0,undo:!0,redo:!0,trash:!0,save:!0,navigation:!0,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0}}},created:function(){(this.isAdminRole||this.isGroupAdmin||this.$route.params.examID)&&(this.toolbars.imagelink=!0)},methods:{$imgAdd:function(t,e){var n=this;if(this.isAdminRole||this.isGroupAdmin||this.$route.params.examID){var i=new FormData;i.append("image",e),this.$route.params.groupID&&i.append("gid",this.$route.params.groupID),this.$route.params.examID&&i.append("eid",this.$route.params.examID),this.$http({url:"/api/file/upload-md-img",method:"post",data:i,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){n.$refs.md.$img2Url(t,e.data.data.link),n.img_file[e.data.data.link]=e.data.data.fileId}))}},$imgDel:function(t){this.$http({url:"/api/file/delete-md-img",method:"get",params:{fileId:this.img_file[t[0]]}})},uploadFile:function(){this.$refs.uploadInput.click()},uploadFileChange:function(t){var e=this,n=t.target.files[0],i=new FormData;i.append("file",n),this.$route.params.groupID&&i.append("gid",this.$route.params.groupID),this.$route.params.examID&&i.append("eid",this.$route.params.examID),this.$http({url:"/api/file/upload-md-file",method:"post",data:i,headers:{"Content-Type":"multipart/form-data"}}).then((function(t){var i=e.$refs.md;i.insertText(i.getTextareaDom(),{prefix:"[".concat(n.name,"](").concat(t.data.data.link,")"),subfix:"",str:""})}))}},computed:Object(o["a"])({},Object(s["c"])(["isAdminRole","isGroupAdmin"])),watch:{value:function(t){this.currentValue!==t&&(this.currentValue=t)},currentValue:function(t,e){t!==e&&(this.$emit("update:value",t),this.$nextTick((function(t){Object(l["a"])()})))},isAdminRole:function(t){this.toolbars.imagelink=!!t}}},c=u,r=(n("92bc"),n("2877")),m=Object(r["a"])(c,i,a,!1,null,null,null);e["default"]=m.exports},af03:function(t,e,n){var i=n("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},bb3e:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{span:24}},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",{staticClass:"panel-title home-title"},[t._v(t._s(t.$t("m.General_Announcement")))])]),n("div",{staticClass:"create"},[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(e){return t.openAnnouncementDialog(null)}}},[t._v(t._s(t.$t("m.Create")))])],1),n("div",{staticClass:"list"},[n("vxe-table",{ref:"table",attrs:{loading:t.loading,data:t.announcementList,"auto-resize":"",stripe:""}},[n("vxe-table-column",{attrs:{"min-width":"50",field:"id",title:"ID"}}),n("vxe-table-column",{attrs:{"min-width":"150",field:"title","show-overflow":"",title:t.$t("m.Announcement_Title")}}),n("vxe-table-column",{attrs:{"min-width":"150",field:"gmtCreate",title:t.$t("m.Created_Time")},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v(" "+t._s(t._f("localtime")(n.gmtCreate))+" ")]}}])}),n("vxe-table-column",{attrs:{"min-width":"150",field:"gmtModified",title:t.$t("m.Modified_Time")},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v(" "+t._s(t._f("localtime")(n.gmtModified))+" ")]}}])}),n("vxe-table-column",{attrs:{"min-width":"150",field:"username","show-overflow":"",title:t.$t("m.Author")}}),n("vxe-table-column",{attrs:{"min-width":"100",field:"status",title:t.$t("m.Announcement_visible")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("el-switch",{attrs:{"active-text":"","inactive-text":"","active-value":0,"inactive-value":1},on:{change:function(e){return t.handleVisibleSwitch(i)}},model:{value:i.status,callback:function(e){t.$set(i,"status",e)},expression:"row.status"}})]}}])}),n("vxe-table-column",{attrs:{title:t.$t("m.Option"),"min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("m.Edit_Announcement"),placement:"top"}},[n("el-button",{attrs:{icon:"el-icon-edit-outline",size:"mini",type:"primary"},nativeOn:{click:function(n){return t.openAnnouncementDialog(e.row)}}})],1),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("m.Delete_Announcement"),placement:"top"}},[n("el-button",{attrs:{icon:"el-icon-delete-solid",size:"mini",type:"danger"},nativeOn:{click:function(n){return t.deleteAnnouncement(e.row.id)}}})],1)]}}])})],1),n("div",{staticClass:"panel-options"},[!t.contestID&&t.total?n("el-pagination",{staticClass:"page",attrs:{layout:"prev, pager, next","page-size":t.pageSize,total:t.total},on:{"current-change":t.currentChange}}):t._e()],1)],1)])],1),n("el-dialog",{attrs:{title:t.announcementDialogTitle,visible:t.showEditAnnouncementDialog,fullscreen:!0},on:{"update:visible":function(e){t.showEditAnnouncementDialog=e},open:t.onOpenEditDialog}},[n("el-form",{attrs:{"label-position":"top",model:t.announcement}},[n("el-form-item",{attrs:{label:t.$t("m.Announcement_Title"),required:""}},[n("el-input",{staticClass:"title-input",attrs:{placeholder:t.$t("m.Announcement_Title")},model:{value:t.announcement.title,callback:function(e){t.$set(t.announcement,"title",e)},expression:"announcement.title"}})],1),n("el-form-item",{attrs:{label:t.$t("m.Announcement_Content"),required:""}},[n("Editor",{attrs:{value:t.announcement.content},on:{"update:value":function(e){return t.$set(t.announcement,"content",e)}}})],1),n("div",{staticClass:"visible-box"},[n("span",[t._v(t._s(t.$t("m.Announcement_visible")))]),n("el-switch",{attrs:{"active-value":0,"inactive-value":1,"active-text":"","inactive-text":""},model:{value:t.announcement.status,callback:function(e){t.$set(t.announcement,"status",e)},expression:"announcement.status"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"danger"},nativeOn:{click:function(e){t.showEditAnnouncementDialog=!1}}},[t._v(t._s(t.$t("m.Cancel")))]),n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.submitAnnouncement.apply(null,arguments)}}},[t._v(t._s(t.$t("m.OK")))])],1)],1)],1)},a=[],o=n("5530"),s=n("3228"),l=n("2f62"),u=n("a956"),c={name:"announcement",components:{Editor:u["default"]},data:function(){return{contestID:"",showEditAnnouncementDialog:!1,announcementList:[],pageSize:15,total:0,mode:"create",announcement:{id:null,title:"",content:"",status:0,uid:""},announcementDialogTitle:"Edit Announcement",loading:!1,currentPage:0}},mounted:function(){this.init()},methods:{init:function(){this.contestID=this.$route.params.contestID,this.contestID?this.getContestAnnouncementList(1):this.getAnnouncementList(1)},currentChange:function(t){this.currentPage=t,this.contestID?this.getContestAnnouncementList(t):this.getAnnouncementList(t)},getAnnouncementList:function(t){var e=this;this.loading=!0,s["a"].admin_getAnnouncementList(t,this.pageSize).then((function(t){e.loading=!1,e.total=t.data.data.total,e.announcementList=t.data.data.records}),(function(t){e.loading=!1}))},getContestAnnouncementList:function(t){var e=this;this.loading=!0,s["a"].admin_getContestAnnouncementList(this.contestID,t,this.pageSize).then((function(t){e.loading=!1,e.total=t.data.data.total,e.announcementList=t.data.data.records})).catch((function(){e.loading=!1}))},onOpenEditDialog:function(){setTimeout((function(){if(document.createEvent){var t=document.createEvent("HTMLEvents");t.initEvent("resize",!0,!0),window.dispatchEvent(t)}else document.createEventObject&&window.fireEvent("onresize")}),0)},submitAnnouncement:function(){var t,e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i="";if(n.id||(n=this.announcement),this.contestID){var a={announcement:n,cid:this.contestID};t=a,i="edit"===this.mode?"admin_updateContestAnnouncement":"admin_createContestAnnouncement"}else i="edit"===this.mode?"admin_updateAnnouncement":"admin_createAnnouncement",t=n;s["a"][i](t).then((function(t){e.showEditAnnouncementDialog=!1,e.$msg.success(e.$i18n.t("m.Post_successfully")),e.init()})).catch()},deleteAnnouncement:function(t){var e=this;this.$confirm(this.$i18n.t("m.Delete_Announcement_Tips"),this.$i18n.t("m.Warning"),{confirmButtonText:this.$i18n.t("m.OK"),cancelButtonText:this.$i18n.t("m.Cancel"),type:"warning"}).then((function(){e.loading=!0;var n=e.contestID?"admin_deleteContestAnnouncement":"admin_deleteAnnouncement";s["a"][n](t).then((function(t){e.loading=!0,e.$msg.success(e.$i18n.t("m.Delete_successfully")),e.init()}))})).catch((function(){e.loading=!1}))},openAnnouncementDialog:function(t){this.showEditAnnouncementDialog=!0,null!==t?(this.announcementDialogTitle=this.$i18n.t("m.Edit_Announcement"),this.announcement=Object.assign({},t),this.mode="edit"):(this.announcementDialogTitle=this.$i18n.t("m.Create_Announcement"),this.announcement.title="",this.announcement.status=0,this.announcement.content="",this.announcement.uid=this.userInfo.uid,this.announcement.username=this.userInfo.username,this.mode="create")},handleVisibleSwitch:function(t){this.mode="edit",this.submitAnnouncement({id:t.id,title:t.title,content:t.content,status:t.status,uid:t.uid})}},watch:{$route:function(){this.init()}},computed:Object(o["a"])({},Object(l["c"])(["userInfo"]))},r=c,m=(n("1514"),n("2877")),d=Object(m["a"])(r,i,a,!1,null,"97c263aa",null);e["default"]=d.exports}}]);