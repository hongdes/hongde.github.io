webpackJsonp([0],{"1kS7":function(e,t){t.f=Object.getOwnPropertySymbols},"5w/V":function(e,t){},"9bBU":function(e,t,n){n("mClu");var i=n("FeBl").Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},C4MV:function(e,t,n){e.exports={default:n("9bBU"),__esModule:!0}},NpIQ:function(e,t){t.f={}.propertyIsEnumerable},R4wc:function(e,t,n){var i=n("kM2E");i(i.S+i.F,"Object",{assign:n("To3L")})},To3L:function(e,t,n){"use strict";var i=n("lktj"),o=n("1kS7"),a=n("NpIQ"),s=n("sB3e"),l=n("MU5D"),r=Object.assign;e.exports=!r||n("S82l")(function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach(function(e){t[e]=e}),7!=r({},e)[n]||Object.keys(r({},t)).join("")!=i})?function(e,t){for(var n=s(e),r=arguments.length,c=1,d=o.f,u=a.f;r>c;)for(var f,p=l(arguments[c++]),h=d?i(p).concat(d(p)):i(p),v=h.length,y=0;v>y;)u.call(p,f=h[y++])&&(n[f]=p[f]);return n}:r},V3tA:function(e,t,n){n("R4wc"),e.exports=n("FeBl").Object.assign},WjO6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("bOdI"),o=n.n(i),a=n("woOf"),s=n.n(a),l={name:"Video",data:function(){return{video_url:"https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Bastion_TheLastBastion.mp4",width:"800px",height:"450px",options:{tag_code:"",question_title_id:"",question_ids:[],preload:"metadata",screenshot:!1,theme:"#FDB550",playbackRates:[1.5,1.25,1,.75],pictureinpicture:!1,vertical:!0,fullscreen:{full:!0,fullweb:!1},light:!1,endpanel:{feedbackBtn:!1,replayBtn:!0},id:"my-player",width:665,height:400,feedback:!1,video:{url:"https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Bastion_TheLastBastion.mp4"},userInfo:{school_id:0}}}},mounted:function(){var e=this;this.$nextTick(function(){void 0!=e.options.id&&(e.options.container=document.getElementById("playerName"),window.dplayer=new window.YPlayer(e.options,function(){}))})},methods:{initVideo:function(){var e=this;console.log(document.getElementById("playerName")),this.$nextTick(function(){try{e.options={container:document.getElementById("playerName"),preload:"none",autoplay:!1,video:{url:e.video_url,pic:"https://file1.classba.cn/homepage.png"},theme:"#FDB550",setting:!1,playbackRates:[1.5,1.25,1,.75],vertical:!0,pictureinpicture:!0,fullscreen:{full:!0,fullweb:!1},endpanel:{feedbackBtn:!1,replayBtn:e.isReplay},userInfo:s()({video_id:"",video_url:e.video_url}),socket:e.is_scocket}}catch(e){console.log({e:e})}var t=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"],n=function(t,n,i){t&&e.$emit(t,i),n&&e.$emit(e.customEventName,o()({},t,n))},i=e;e.options.container=e.$refs[""+e.playerName],e.yplayer=new window.YPlayer(e.options,function(){for(var e=this,o=t.concat(i.events),a={},s=0;s<o.length;s++)"string"==typeof o[s]&&void 0===a[o[s]]&&function(t){a[t]=null,e.on(t,function(){n(t,!0,e)})}(o[s]);i.$emit("ready",this)})})}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"video"},[t("h3",{staticClass:"title"},[this._v("YPlayer 视频播放器")]),this._v(" "),t("div",{staticClass:"widget span6"},[t("div",{staticClass:"widget-title"},[this._v("YPlayer")]),this._v(" "),t("div",{staticClass:"widget-body"},[t("div",{staticClass:"player",style:{width:this.width,height:this.height},attrs:{id:"playerName"}})])]),this._v(" "),t("div",{staticClass:"panel"})])},staticRenderFns:[]};var c=n("VU/8")(l,r,!1,function(e){n("5w/V")},"data-v-e6d403dc",null);t.default=c.exports},bOdI:function(e,t,n){"use strict";t.__esModule=!0;var i,o=n("C4MV"),a=(i=o)&&i.__esModule?i:{default:i};t.default=function(e,t,n){return t in e?(0,a.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},mClu:function(e,t,n){var i=n("kM2E");i(i.S+i.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})},woOf:function(e,t,n){e.exports={default:n("V3tA"),__esModule:!0}}});
//# sourceMappingURL=0.39d548c8eec8d3b9939d.js.map