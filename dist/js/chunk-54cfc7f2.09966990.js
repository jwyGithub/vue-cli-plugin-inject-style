(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54cfc7f2"],{"0bc8":function(t,e,n){},"437b":function(t,e,n){},5262:function(t,e,n){"use strict";var a=n("437b"),s=n.n(a);s.a},7101:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("Header"),n("div",{staticClass:"loginType"},[n("a",{staticClass:"sec",attrs:{href:"javascript:;"},on:{click:function(e){t.show="TelLogin"}}},[n("i"),n("span",[t._v("手机登陆")])]),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.show="AccLogin"}}},[n("i"),n("span",[t._v("账号密码登陆")])])]),n(t.show,{tag:"component",staticClass:"animated bounceInLeft"})],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"j-header"},[n("div",{staticClass:"top"},[n("router-link",{staticClass:"home",attrs:{to:"/home"}},[n("i")]),n("p",[t._v("登陆")])],1)])},c=[],r={name:"j-header",data:function(){return{}},components:{},mounted:function(){},updated:function(){},methods:{}},i=r,l=(n("87b0"),n("2877")),u=Object(l["a"])(i,o,c,!1,null,"38e23274",null),d=u.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"acclogin"},[n("van-cell-group",[n("van-field",{attrs:{required:"",clearable:"",label:"用户名",placeholder:"请输入用户名"},on:{"click-right-icon":function(e){return t.$toast("question")}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("Button",{attrs:{value:"登陆"},nativeOn:{click:function(e){return t.login(e)}}})],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"j-button"},[n("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.value))])])},h=[],v={name:"j-button",data:function(){return{}},props:{value:{type:String,default:"",required:!0}},components:{},mounted:function(){},updated:function(){},methods:{}},g=v,b=(n("f88e"),Object(l["a"])(g,f,h,!1,null,"2cc21a0e",null)),w=b.exports,k=n("d399"),_={name:"acclogin",data:function(){return{username:"",password:""}},components:{Button:w,Toast:k["a"]},methods:{login:function(){var t=this;this.$axios({url:"http://wssd.f3322.net:13140/api/login",method:"post",data:{account:this.username,password:this.password}}).then((function(e){200!=e.data.code?Object(k["a"])(e.data.msg):(localStorage.setItem("token",e.data.token),localStorage.setItem("username",t.username),t.$router.push("/my"))}))}}},j=_,x=Object(l["a"])(j,m,p,!1,null,"2e2d2e0b",null),$=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tellogin"},[n("van-cell-group",[n("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("van-field",{attrs:{center:"",clearable:"",label:"短信验证码",placeholder:"请输入短信验证码",required:""},model:{value:t.sms,callback:function(e){t.sms=e},expression:"sms"}},[n("van-button",{attrs:{slot:"button",size:"small",type:"primary"},slot:"button"},[t._v("发送验证码")])],1)],1),n("Button",{attrs:{value:"登陆"},nativeOn:{click:function(e){return t.login(e)}}})],1)},O=[],y={name:"tellogin",data:function(){return{username:"",sms:""}},components:{Button:w,Toast:k["a"]},methods:{login:function(){var t=this;this.$axios({url:"http://wssd.f3322.net:13140/api/login",method:"post",data:{account:this.account,password:this.password}}).then((function(e){200!=e.data.code?Object(k["a"])(e.data.msg):(localStorage.setItem("token",e.data.token),localStorage.setItem("username",t.account),t.$router.push("/my"))}))}}},I=y,S=Object(l["a"])(I,C,O,!1,null,null,null),q=S.exports,L={name:"login",data:function(){return{account:"",password:"",loginmsg:"",show:"TelLogin"}},components:{Header:d,AccLogin:$,TelLogin:q},mounted:function(){},updated:function(){},methods:{login:function(){var t=this;this.$axios({url:"http://wssd.f3322.net:13140/api/login",method:"post",data:{account:this.account,password:this.password}}).then((function(e){200!=e.data.code?Object(k["a"])(e.data.msg):(localStorage.setItem("token",e.data.token),localStorage.setItem("username",t.username),t.$router.push("/my"))}))}}},T=L,E=(n("5262"),Object(l["a"])(T,a,s,!1,null,"9be3955c",null));e["default"]=E.exports},"87b0":function(t,e,n){"use strict";var a=n("e145"),s=n.n(a);s.a},e145:function(t,e,n){},f88e:function(t,e,n){"use strict";var a=n("0bc8"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-54cfc7f2.09966990.js.map