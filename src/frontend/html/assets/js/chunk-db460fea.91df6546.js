(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db460fea"],{"33c8":function(t,e,a){},"3c60":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"section-title"},[t._v(t._s(t.$t("m.Avatar_Setting")))]),a("div",{staticClass:"section-main"},[a("avatar",{staticStyle:{"margin-bottom":"15px"},attrs:{username:t.formProfile.username,inline:!0,size:130,color:"#FFF",src:t.avatar}}),t.avatarOption.imgSrc?[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,md:12}},[a("div",{staticClass:"cropper-main inline"},[a("vueCropper",{ref:"cropper",attrs:{autoCrop:"",fixed:"",autoCropWidth:200,autoCropHeight:200,img:t.avatarOption.imgSrc,outputSize:t.avatarOption.size,outputType:t.avatarOption.outputType,info:!0},on:{realTime:t.realTime}})],1),a("div",{staticClass:"cropper-btn"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"向左旋转90°",trigger:"hover",placement:"bottom"}},[a("el-button",{attrs:{icon:"el-icon-refresh-left",size:"mini"},on:{click:function(e){return t.rotate("left")}}})],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"向右旋转90°",trigger:"hover",placement:"bottom"}},[a("el-button",{attrs:{icon:"el-icon-refresh-right",size:"mini"},on:{click:function(e){return t.rotate("right")}}})],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"关闭图像截取",trigger:"hover",placement:"bottom"}},[a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:t.reselect}})],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",trigger:"hover",content:"确定图像截取",placement:"bottom"}},[a("el-button",{attrs:{icon:"el-icon-check",size:"mini"},on:{click:t.finishCrop}})],1)],1)]),a("el-col",{attrs:{xs:24,md:12}},[a("div",{staticClass:"cropper-preview",style:t.previewStyle},[a("div",{style:t.preview.div},[a("img",{style:t.preview.img,attrs:{src:t.avatarOption.imgSrc}})])])])],1)]:[a("el-upload",{staticClass:"upload-container",attrs:{action:"",drag:"","before-upload":t.handleSelectFile}},[a("div",{staticStyle:{padding:"20px 0"}},[a("i",{staticClass:"el-icon-upload",staticStyle:{color:"#3399ff","font-size":"52px"}}),a("p",[t._v(t._s(t.$t("m.Upload_avatar_hint")))])])])],a("el-dialog",{attrs:{visible:t.uploadModalVisible,title:t.$t("m.Upload"),width:"350px"},on:{"update:visible":function(e){t.uploadModalVisible=e}}},[a("div",{staticClass:"upload-modal"},[a("p",{staticClass:"notice"},[t._v(t._s(t.$t("m.Your_new_avatar")+":"))]),a("img",{attrs:{src:t.uploadImgSrc}})]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{loading:t.loadingUploadBtn,type:"primary"},on:{click:t.uploadAvatar}},[t._v(t._s(t.$t("m.Upload")))])],1)])],2),a("div",{staticClass:"section-title"},[t._v(t._s(t.$t("m.UserInfo_Setting")))]),a("el-form",{ref:"formProfile",attrs:{model:t.formProfile}},[a("el-row",{attrs:{gutter:30,justify:"space-around"}},[a("el-col",{attrs:{md:10,xs:24}},[a("el-form-item",{attrs:{label:t.$t("m.RealName")}},[a("el-input",{attrs:{maxlength:50},model:{value:t.formProfile.realname,callback:function(e){t.$set(t.formProfile,"realname",e)},expression:"formProfile.realname"}})],1),a("el-form-item",{attrs:{label:t.$t("m.Nickname")}},[a("el-input",{attrs:{maxlength:20},model:{value:t.formProfile.nickname,callback:function(e){t.$set(t.formProfile,"nickname",e)},expression:"formProfile.nickname"}})],1),a("el-form-item",{attrs:{label:t.$t("m.School")}},[a("el-input",{attrs:{maxlength:50},model:{value:t.formProfile.school,callback:function(e){t.$set(t.formProfile,"school",e)},expression:"formProfile.school"}})],1),a("el-form-item",{attrs:{label:t.$t("m.Student_Number")}},[a("el-input",{attrs:{maxlength:20},model:{value:t.formProfile.number,callback:function(e){t.$set(t.formProfile,"number",e)},expression:"formProfile.number"}})],1)],1),a("el-col",{attrs:{md:4,lg:4}},[a("div",{staticClass:"separator hidden-md-and-down"}),a("p")]),a("el-col",{attrs:{md:10,xs:24}},[a("el-form-item",{attrs:{label:t.$t("m.CF_Username")}},[a("el-input",{attrs:{maxlength:50},model:{value:t.formProfile.cfUsername,callback:function(e){t.$set(t.formProfile,"cfUsername",e)},expression:"formProfile.cfUsername"}})],1),a("el-form-item",{attrs:{label:t.$t("m.Blog")}},[a("el-input",{attrs:{maxlength:255},model:{value:t.formProfile.blog,callback:function(e){t.$set(t.formProfile,"blog",e)},expression:"formProfile.blog"}})],1),a("el-form-item",{attrs:{label:t.$t("m.Github")}},[a("el-input",{attrs:{maxlength:255},model:{value:t.formProfile.github,callback:function(e){t.$set(t.formProfile,"github",e)},expression:"formProfile.github"}})],1),a("el-form-item",{attrs:{label:t.$t("m.Gender")}},[a("el-radio-group",{model:{value:t.formProfile.gender,callback:function(e){t.$set(t.formProfile,"gender",e)},expression:"formProfile.gender"}},[a("el-radio",{attrs:{label:"male",border:"",size:"small"}},[t._v(t._s(t.$t("m.Male")))]),a("el-radio",{attrs:{label:"female",border:"",size:"small"}},[t._v(t._s(t.$t("m.Female")))]),a("el-radio",{attrs:{label:"secrecy",border:"",size:"small"}},[t._v(t._s(t.$t("m.Secrecy")))])],1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("label",{staticClass:"el-form-item__label",staticStyle:{float:"none"}},[t._v(t._s(t.$t("m.Signature")))]),a("Editor",{staticStyle:{padding:"5px"},attrs:{value:t.formProfile.signature},on:{"update:value":function(e){return t.$set(t.formProfile,"signature",e)}}})],1)],1)],1),a("div",{staticStyle:{"text-align":"center","margin-top":"10px"}},[a("el-button",{attrs:{type:"primary",loading:t.loadingSaveBtn},on:{click:t.updateUserInfo}},[t._v(t._s(t.$t("m.Save")))])],1)],1)},r=[],o=(a("d3b7"),a("3ca3"),a("ddb0"),a("159b"),a("b64b"),a("ac1f"),a("00b4"),a("b0c0"),a("3228")),l=a("90b9"),n=a("7e79"),s=a("4a89"),c=a.n(s),m=(a("e05f"),function(){return Promise.resolve().then(a.bind(null,"a956"))}),f={components:{Avatar:c.a,VueCropper:n["VueCropper"],Editor:m},data:function(){return{loadingSaveBtn:!1,loadingUploadBtn:!1,uploadModalVisible:!1,preview:{},uploadImgSrc:"",avatarOption:{imgSrc:"",size:.8,outputType:"png"},formProfile:{realname:"",username:"",cfUsername:"",gender:"",nickname:"",signature:"",number:"",blog:"",school:"",github:""}}},mounted:function(){var t=this,e=this.$store.getters.userInfo;Object.keys(this.formProfile).forEach((function(a){void 0!==e[a]&&(t.formProfile[a]=e[a])}))},methods:{checkFileType:function(t){return!!/\.(gif|jpg|jpeg|png|bmp|webp|GIF|JPG|PNG|WEBP)$/.test(t.name)||(this.$notify.warning({title:this.$i18n.t("m.File_type_not_support"),message:t.name+this.$i18n.t("m.is_incorrect_format_file")}),!1)},checkFileSize:function(t){return!(t.size>2097152)||(this.$notify.warning({title:this.$i18n.t("m.Exceed_max_size_limit"),message:t.name+this.$i18n.t("m.File_Exceed_Tips")}),!1)},handleSelectFile:function(t){var e=this,a=this.checkFileType(t)&&this.checkFileSize(t);if(!a)return!1;var i=new window.FileReader;return i.onload=function(t){e.avatarOption.imgSrc=t.target.result},i.readAsDataURL(t),!1},realTime:function(t){this.preview=t},rotate:function(t){"left"===t?this.$refs.cropper.rotateLeft():this.$refs.cropper.rotateRight()},reselect:function(){var t=this;this.$confirm(this.$i18n.t("m.Cancel_Avater_Tips"),"Tips",{confirmButtonText:this.$i18n.t("m.OK"),cancelButtonText:this.$i18n.t("m.Cancel"),type:"warning"}).then((function(){t.avatarOption.imgSrc=""}))},finishCrop:function(){var t=this;this.$refs.cropper.getCropData((function(e){t.uploadImgSrc=e,t.uploadModalVisible=!0}))},uploadAvatar:function(){var t=this;this.$refs.cropper.getCropBlob((function(e){var a=new window.FormData,i=new window.File([e],"avatar."+t.avatarOption.outputType);a.append("image",i),t.loadingUploadBtn=!0,t.$http({method:"post",url:"/api/file/upload-avatar",data:a,headers:{"content-type":"multipart/form-data"}}).then((function(e){t.loadingUploadBtn=!1,t.$msg.success(t.$i18n.t("m.Upload_Avatar_Successfully")),t.uploadModalVisible=!1,t.avatarOption.imgSrc="",t.$store.dispatch("setUserInfo",e.data.data)}),(function(){t.loadingUploadBtn=!1}))}))},updateUserInfo:function(){var t=this;this.loadingSaveBtn=!0;var e=l["a"].filterEmptyValue(Object.assign({},this.formProfile));o["a"].changeUserInfo(e).then((function(e){t.$msg.success(t.$i18n.t("m.Update_Successfully")),t.$store.dispatch("setUserInfo",e.data.data),t.loadingSaveBtn=!1}),(function(e){t.loadingSaveBtn=!1}))}},computed:{avatar:function(){return this.$store.getters.userInfo.avatar},previewStyle:function(){return{width:this.preview.w+"px",height:this.preview.h+"px",overflow:"hidden"}}}},p=f,u=(a("529e"),a("2877")),d=Object(u["a"])(p,i,r,!1,null,"55718dce",null);e["default"]=d.exports},"529e":function(t,e,a){"use strict";a("33c8")}}]);