webpackJsonp([1],{"3c7o":function(i,n){},"8+OV":function(i,n){},a87p:function(i,n){},eYNA:function(i,n){},jrY3:function(i,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var i=this.$createElement,n=this._self._c||i;return n("div",{staticClass:"header navbar"},[n("div",{staticClass:"navbar-inner"},[n("div",{staticClass:"inner-fluid"},[n("a",{staticClass:"brand",attrs:{href:"javascript;"}},[this._v("SLUI-LAB")])])])])}]};var r=t("VU/8")({name:"Header",data:function(){return{}}},e,!1,function(i){t("a87p")},"data-v-157c3ddc",null).exports,a=t("yJwz"),o=t.n(a),s={name:"Slider",data:function(){return{list:[],innerHeight:0,isOpen:!0}},created:function(){this.list=o.a,this.innerHeight=window.innerHeight-60,console.log(this.innerHeight)},mounted:function(){this.$refs.scrollWrapper.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){console.log(1212)},openPanel:function(i){i.children.length?i.addClass?this.$set(i,"addClass",""):this.$set(i,"addClass","open"):this.$router.push("/"+i.router)},switchPanel:function(){var i=this;this.isOpen=!this.isOpen,this.list.forEach(function(n){i.$set(n,"addClass","")})}}},c={render:function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("div",{staticClass:"slider",class:{close:!i.isOpen}},[t("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{height:i.innerHeight+"px"}},[t("div",{staticClass:"slider-toggle",on:{click:i.switchPanel}},[t("i",{staticClass:"icon iconfont icon-left"})]),i._v(" "),t("ul",{staticClass:"menubar"},i._l(i.list,function(n,e){return t("li",{key:e,staticClass:"menubar-list close",class:n.addClass,on:{click:function(t){return t.stopPropagation(),i.openPanel(n)}}},[t("a",{attrs:{href:"javascript:;"}},[t("i",{staticClass:"icon iconfont",class:n.icon}),i._v("\n          "+i._s(n.main)+"\n          "),t("span",{staticClass:"icon iconfont icon-top arrow"})]),i._v(" "),n.children.length?t("ul",{staticClass:"sub"},i._l(n.children,function(n,e){return t("li",{key:e},[t("router-link",{attrs:{to:"/"+n.router}},[i._v("\n              "+i._s(n.main)+"\n            ")])],1)}),0):i._e()])}),0)])])},staticRenderFns:[]};var l={name:"Main",data:function(){return{innerHeight:0}},mounted:function(){this.innerHeight=window.innerHeight-60}},u={render:function(){var i=this.$createElement,n=this._self._c||i;return n("div",{staticClass:"main-content",style:{height:this.innerHeight+"px"}},[n("div",{staticClass:"container-fluid"},[n("router-view")],1)])},staticRenderFns:[]};var d={name:"Index",data:function(){return{}},mounted:function(){console.log("Index__")},components:{Header:r,Slider:t("VU/8")(s,c,!1,function(i){t("oMKn")},"data-v-2d7b078e",null).exports,Main:t("VU/8")(l,u,!1,function(i){t("eYNA")},"data-v-360ea7b1",null).exports},methods:{}},h={render:function(){var i=this.$createElement,n=this._self._c||i;return n("div",{staticClass:"home"},[n("Header"),this._v(" "),n("div",{staticClass:"container row-fluid"},[n("Slider"),this._v(" "),n("Main")],1)],1)},staticRenderFns:[]};var f=t("VU/8")(d,h,!1,function(i){t("3c7o"),t("8+OV")},"data-v-a3e166de",null);n.default=f.exports},oMKn:function(i,n){},yJwz:function(i,n){i.exports=[{main:"Dashborad",icon:"icon-meun_dashborad",router:"ui/dashboard",children:[]},{main:"Basic",icon:"icon-jichupeizhi_basic",router:"",children:[{main:"container 布局容器",icon:"",router:"ui/container"},{main:"Button 按钮",icon:"ui",router:"ui/button"},{main:"Icon 字体",icon:"ui",router:"ui/icon"}]},{main:"Form",icon:"icon-orderform",router:"",children:[{main:"Radio 单选框",icon:"",router:"ui/radio"},{main:"Checkbox 多选框",icon:"ui",router:"ui/checkbox"},{main:"Input 输入框",icon:"ui",router:"ui/icon"}]},{main:"Media",icon:"icon-media",router:"",children:[{main:"Video 视频",icon:"",router:"ui/video"},{main:"Voice 音频",icon:"",router:"ui/voice"},{main:"Recorder 录音",icon:"",router:"ui/recorder"}]},{main:"MathEditor",icon:"icon-media",router:"ui/mtEditor",children:[]},{main:"Data",icon:"icon-media",router:"",children:[{main:"Progress进度条",icon:"",router:"ui/progress"},{main:"Tag标签",icon:"",router:"ui/tag"}]},{main:"Canvas",icon:"icon-media",router:"",children:[{main:"Pie饼状图",icon:"",router:"ui/pie"}]}]}});
//# sourceMappingURL=1.328c2b027d957b0e8eb9.js.map