(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0f6e":function(t,e,a){},"16c9":function(t,e,a){},"2d7f":function(t,e,a){},"330d":function(t,e,a){},3631:function(t,e,a){},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),s=a("1dce"),r=a.n(s),o=(a("bf40"),a("bc3a")),i=a.n(o),c=a("8c4f"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("app-header"),a("app-about-us"),a("our-projects"),a("app-join-us"),a("div",[a("v-alert",{attrs:{value:t.sent,dismissible:"",type:"success",transition:"slide-y-transition"},on:{click:t.onCloseAlert}},[t._v("\n      Twoja wiadomość została wysłana\n    ")]),a("v-alert",{attrs:{value:t.msgError,dismissible:"",type:"error",transition:"slide-y-transition"},on:{click:t.onErrorAlert}},[t._v("\n      Błąd w trakcie wysyłania wiadomości\n    ")])],1),a("app-contact-us"),a("social-media"),a("page-footer")],1)},u=[],d=a("2f62"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{staticClass:"navbar-custom",attrs:{dark:"",color:"#2C3E50"}},[a("v-toolbar-title",[a("a",{attrs:{href:"https://codeforpoznan.pl/"}},[a("v-img",{attrs:{src:t.cfpLogo,contain:"","max-height":"20","aspect-ratio":"1.7","max-width":"500","min-width":"350",position:"left"}})],1)]),a("v-spacer"),a("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-tabs",{staticClass:"hidden-sm-and-down",attrs:{"background-color":"transparent",right:""}},[t._l(t.items,function(e){return[a("v-tab",{key:e.id,attrs:{"align-right":""},on:{click:function(a){return t.$vuetify.goTo(e.id)}}},[t._v(t._s(e.name))])]})],2)],1),a("v-list",{staticClass:"navbar-custom hidden-md-and-up",attrs:{dark:""}},[a("v-expand-transition",[t.drawer?a("v-tabs",{attrs:{width:"100%","background-color":"transparent",vertical:""}},[a("div",{staticClass:"mobile-tab-items"},[t._l(t.items,function(e){return[a("v-tab",{key:e.id,staticClass:"tab-custom",on:{click:function(a){return t.$vuetify.goTo(e.id)}}},[t._v(t._s(e.name))])]})],2)]):t._e()],1)],1)],1)},p=[],h={data(){return{items:[{name:"O nas",id:"#about"},{name:"Nasze projekty",id:"#projects"},{name:"Dołącz do nas",id:"#join"},{name:"Kontakt",id:"#contact"}],cfpLogo:a("a266"),drawer:!1}}},f=h,v=(a("e7d8"),a("0c7c")),g=a("6544"),b=a.n(g),j=a("40dc"),k=a("5bc1"),w=a("0789"),y=a("adda"),_=a("8860"),x=a("2fa4"),z=a("71a3"),C=a("fe57"),$=a("2a7f"),V=Object(v["a"])(f,m,p,!1,null,"f1177fa6",null),E=V.exports;b()(V,{VAppBar:j["a"],VAppBarNavIcon:k["a"],VExpandTransition:w["a"],VImg:y["a"],VList:_["a"],VSpacer:x["a"],VTab:z["a"],VTabs:C["a"],VToolbarTitle:$["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"white-container",attrs:{fluid:"",id:"contact"}},[a("v-row",[a("v-flex",[a("v-card",{attrs:{flat:"",color:"transparent"}},[a("v-card-text",{staticClass:"title"},[a("p",{staticClass:"blue-title"},[t._v("SKONTAKTUJ SIĘ Z NAMI")])])],1)],1)],1),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("v-text-field",{attrs:{"error-messages":t.nameErrors,label:"Imię",required:""},on:{input:function(e){return t.$v.name.$touch()},blur:function(e){return t.$v.name.$touch()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{"error-messages":t.emailErrors,label:"E-mail",required:""},on:{input:function(e){return t.$v.email.$touch()},blur:function(e){return t.$v.email.$touch()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{mask:"###-###-###","error-messages":t.phoneErrors,counter:9,label:"Telefon"},on:{input:function(e){return t.$v.phone_no.$touch()},blur:function(e){return t.$v.phone_no.$touch()}},model:{value:t.phone_no,callback:function(e){t.phone_no=e},expression:"phone_no"}}),a("v-textarea",{attrs:{"error-messages":t.contentErrors,label:"Wiadomość",required:""},on:{input:function(e){return t.$v.content.$touch()},blur:function(e){return t.$v.content.$touch()}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("v-btn",{attrs:{type:"submit",disabled:t.$v.$invalid,id:"submit-button"}},[t._v("Wyślij")])],1),a("v-layout")],1)},S=[],O=a("b5ae"),T={data(){return{name:"",email:"",phone_no:"",content:""}},methods:{onSubmit(){const t={name:this.name,email:this.email,phone:this.phone_no,content:this.content};this.$v.$invalid||this.$store.dispatch("contact/sentMessage",t).then(t=>{200==t.status&&this.resetForm()},()=>{this.$store.commit("contact/raiseMsgError")})},resetForm(){this.$v.$reset(),this.name="",this.email="",this.phone_no="",this.content=""}},validations:{name:{required:O["required"],maxLength:Object(O["maxLength"])(50)},email:{required:O["required"],email:O["email"]},phone_no:{minLength:Object(O["minLength"])(9),maxLength:Object(O["maxLength"])(9)},content:{required:O["required"],minLength:Object(O["minLength"])(10),maxLength:Object(O["maxLength"])(2e3)}},computed:{nameErrors(){const t=[];return this.$v.name.$dirty?(!this.$v.name.required&&t.push("Imię jest wymagane"),t):t},emailErrors(){const t=[];return this.$v.email.$dirty?(!this.$v.email.email&&t.push("Poprawny adres email jest wymagany"),!this.$v.email.required&&t.push("E-mail jest wymagany"),t):t},phoneErrors(){const t=[];return!this.$v.phone_no.minLength&&t.push("Wprowadź poprawny numer np. 111-222-333"),t},contentErrors(){const t=[];return this.$v.content.$dirty?(!this.$v.content.minLength&&t.push("Minimalna długość to 10 znaków"),!this.$v.content.required&&t.push("Treść wiadomości jest wymagana"),t):t}}},L=T,H=(a("6cb9"),a("8336")),A=a("b0af"),M=a("99d9"),I=a("a523"),N=a("0e8f"),q=a("a722"),F=a("0fd9"),W=a("8654"),B=a("a844"),D=Object(v["a"])(L,P,S,!1,null,"685147cb",null),R=D.exports;b()(D,{VBtn:H["a"],VCard:A["a"],VCardText:M["b"],VContainer:I["a"],VFlex:N["a"],VLayout:q["a"],VRow:F["a"],VTextField:W["a"],VTextarea:B["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"blue-container",attrs:{fluid:"",id:"about"}},[a("v-row",[a("v-col",[a("v-card",{attrs:{flat:"",dark:"",tile:"",color:"transparent"}},[a("v-card-text",{staticClass:"title"},[a("p",{staticClass:"white-title"},[t._v("O NAS")])])],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",xl:"6",lg:"6",md:"6",sm:"12",xs:"12"}},[a("v-card",{attrs:{flat:"",dark:"",tile:"",color:"transparent"}},[a("v-card-text",[a("p",{staticClass:"sub-title"},[t._v("Kim jesteśmy?")]),a("p",{staticClass:"content"},[t._v("\n            Grupą osób, która uważa, że warto ulepszać świat za pomocą\n            technologii i chce dostarczać narzędzia, dzięki którym każdy\n            będzie mógł to robić.\n          ")])])],1)],1),a("v-col",{attrs:{xl:"6",lg:"6",md:"6",sm:"12",xs:"12"}},[a("v-card",{attrs:{flat:"",dark:"",tile:"",color:"transparent"}},[a("v-card-text",[a("p",{staticClass:"sub-title"},[t._v("Co robimy?")]),a("p",{staticClass:"content"},[t._v("\n            Projektujemy. Programujemy. Testujemy. Poprawiamy. Tworzymy\n            aplikacje społeczne, które aktywują użytkowników do działania na\n            rzecz swojej społeczności czy jakiegoś interesu społecznego.\n          ")])])],1)],1)],1)],1)},Y=[],G=(a("b065"),a("62ad")),J={},K=Object(v["a"])(J,Z,Y,!1,null,"104de97a",null),U=K.exports;b()(K,{VCard:A["a"],VCardText:M["b"],VCol:G["a"],VContainer:I["a"],VRow:F["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"media"}},[a("h2",[t._v("MEDIA")]),a("ul",{staticClass:"media-info"},t._l(t.media,function(e){return a("li",{key:e.link},[a("a",{staticClass:"circle",attrs:{href:e.link,target:"_blank"}},[a("v-icon",[t._v(" "+t._s(e.icon)+" ")])],1)])}),0)])},X=[],tt={data(){return{media:[{icon:"fab fa-github",link:"https://github.com/CodeForPoznan"},{icon:"fab fa-linkedin-in",link:"https://www.linkedin.com/company/codeforpoznan/"},{icon:"fab fa-facebook-f",link:"https://www.facebook.com/CodeForPL/"},{icon:"fab fa-slack",link:"https://join.slack.com/t/codeforpoznan/shared_invite/enQtNjQ5MTU1MDI0NDA0LWJmMmM2NjI0MGNiZjJjMGM0NzMzOTEzOGY5YWZkZWNiMzZlZTM2ZGJlYzRkYTlmZTFlMTMzZjJkZTc5YjhhYjg"}]}}},et=tt,at=(a("c9d3"),a("132d")),nt=Object(v["a"])(et,Q,X,!1,null,"fb40d5e6",null),st=nt.exports;b()(nt,{VIcon:at["a"]});var rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",[t._v("Copyright © Code for Poznan 2019")])])}],it=(a("a9b7"),{}),ct=Object(v["a"])(it,rt,ot,!1,null,"f7b11b20",null),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"white-container",attrs:{fluid:"",id:"projects"}},[a("v-row",[a("v-col",[a("v-card",{attrs:{flat:"",color:"transparent"}},[a("v-card-text",{staticClass:"title"},[a("p",{staticClass:"blue-title"},[t._v("NASZE PROJEKTY")])])],1)],1)],1),a("v-row",{attrs:{wrap:""}},t._l(t.projects,function(e,n){return a("v-col",{key:n,staticClass:"items",attrs:{cols:"12",xs:"12",md:"6",lg:"4",xl:"3"}},[a("v-item-group",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var s=n.hover;return[a("v-card",{on:{click:function(a){return a.stopPropagation(),t.clickImage(e)}}},[a("v-img",{attrs:{src:e.imageAdress,"aspect-ratio":"1.9"}}),a("v-card-title",{staticClass:"card"},[t._v("\n              "+t._s(e.name)+"\n            ")]),a("v-expand-transition",[s?a("div",{staticClass:"card--reveal"},[a("v-img",{staticClass:"card--hover",attrs:{src:t.hoveredImg}})],1):t._e()])],1)]}}],null,!0)})],1)],1)}),1),a("v-dialog",{attrs:{"max-width":"50rem"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("app-modal-content",{attrs:{selectedProject:t.selectedProject}})],1)],1)},dt=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"title-header"},[a("v-row",[a("p",{staticClass:"modal-title"},[t._v(t._s(t.selectedProject.name))]),a("v-card-actions",[a("v-btn",{staticClass:"mr-2",attrs:{absolute:"",fab:"",rounded:"",icon:"",large:"",right:""},on:{click:function(e){return t.onClick()}}},[a("v-icon",{attrs:{size:"3.5rem",color:"white"}},[t._v("close")])],1)],1)],1)],1),a("v-card-actions",[a("div",{staticClass:"buttons-list"},[a("v-row",[a("v-btn",{staticClass:"buttons",attrs:{text:"",rounded:"",large:"",href:t.selectedProject.licensePage,target:"_blank"}},[a("v-icon",[t._v("far fa-copyright")]),a("p",{staticClass:"buttons--text"},[t._v("\n            Licencja "+t._s(t.selectedProject.licenseName)+"\n          ")])],1),a("v-btn",{staticClass:"buttons",attrs:{text:"",rounded:"",large:"",href:t.selectedProject.githubLink,target:"_blank"}},[a("v-icon",[t._v("fab fa-github")]),a("p",{staticClass:"buttons--text"},[t._v("Repozytorium")])],1),a("v-btn",{staticClass:"buttons",attrs:{text:"",rounded:"",large:"",href:t.selectedProject.websiteLink,target:"_blank"}},[a("v-icon",[t._v("language")]),a("p",{staticClass:"buttons--text"},[t._v("Strona projektu")])],1),a("v-btn",{staticClass:"buttons",attrs:{text:"",rounded:"",large:"",href:t.selectedProject.partnerPage,target:"_blank"}},[a("v-icon",[t._v("fas fa-handshake")]),a("p",{staticClass:"buttons--text"},[t._v("Strona partnera")])],1)],1)],1)]),a("div",{staticClass:"text-list"},[a("v-row",[a("pre",{staticClass:"modal-subtitle"},[t._v("Partner projektu: ")]),a("p",{staticClass:"modal-subtitle"},[t._v(t._s(t.selectedProject.partner))])])],1),a("div",{staticClass:"text-list"},[a("v-row",[a("p",{staticClass:"content-black"},[t._v(t._s(t.selectedProject.description))])])],1),a("div",{staticClass:"text-list"},[a("v-row",[a("p",{staticClass:"modal-subtitle"},[t._v("Wykorzystane technologie:")])])],1),a("v-card-actions",[a("div",{staticClass:"buttons-list"},[a("v-row",t._l(t.selectedProject.stack,function(e,n){return a("v-btn",{key:n,staticClass:"stack-list",attrs:{href:e.documentation,target:"_blank",text:"",rounded:""}},[t._v("\n          "+t._s(e.type)+": "+t._s(e.name)+" "+t._s(e.version)+"\n        ")])}),1)],1)])],1)},pt=[],ht={props:["selectedProject"],methods:{onClick(){this.$root.$emit("close")}}},ft=ht,vt=(a("f36d"),Object(v["a"])(ft,mt,pt,!1,null,"620c204e",null)),gt=vt.exports;b()(vt,{VBtn:H["a"],VCard:A["a"],VCardActions:M["a"],VCardTitle:M["c"],VIcon:at["a"],VRow:F["a"]});const bt=[{description:'Portal Volontulo powstał dla ludzi i organizacji skupionych wokół idei pomocy innym poprzez udział we wolontariacie. Celem projektu jest pomoc we wzajemnym odnalezieniu się ludzi, którzy chcą realizować się jako wolontariusze/szki oraz organizacji i instytucji, które takich osób poszukują. Podział na strefę "Wolontariusza" oraz "Strefę organizacji i instytucji" umożliwa użytkownikom zwinną nawigację na stronie.',githubLink:"https://github.com/CodeForPoznan/volontulo",imageAdress:a("d11d"),licenseName:"MIT",licensePage:"https://pl.wikipedia.org/wiki/Licencja_MIT",name:"Volontulo",partner:"Wielkopolska Rada Koordynacyjna",partnerPage:"https://centrum.wrk.org.pl/",stack:[{type:"Frontend",name:"Angular",version:"2.0",documentation:"https://angular.io/"},{type:"Backend",name:"Django",version:"2.2",documentation:"https://docs.djangoproject.com/en/2.2/"}],websiteLink:"http://volontuloapp.org/o"},{description:"",githubLink:"",image:"",license:"",licensePage:"",name:"Fleet Manager",partner:"",partnerPage:"",stack:[{type:"Frontend",name:"",version:"",documentation:""},{type:"Backend",name:"",version:"",documentation:""}],website:""},{description:"",githubLink:"",image:"",license:"",licensePage:"",name:"Alinka",partner:"",partnerPage:"",stack:[{type:"Frontend",name:"",version:"",documentation:""},{type:"Backend",name:"",version:"",documentation:""}],website:""},{description:"",githubLink:"",image:"",license:"",licensePage:"",name:"Bank Empatii",partner:"",partnerPage:"",stack:[{type:"Frontend",name:"",version:"",documentation:""},{type:"Backend",name:"",version:"",documentation:""}],website:""},{description:"",githubLink:"",image:"",license:"",licensePage:"",name:"StreetMix",partner:"",partnerPage:"",stack:[{type:"Frontend",name:"",version:"",documentation:""},{type:"Backend",name:"",version:"",documentation:""}],website:""},{description:"",githubLink:"",image:"",license:"",licensePage:"",name:"Wysadź ulicę",partner:"",partnerPage:"",stack:[{type:"Frontend",name:"",version:"",documentation:""},{type:"Backend",name:"",version:"",documentation:""}],website:""},{description:"",githubLink:"",image:"",license:"",licensePage:"",name:"Strona społeczności",partner:"",partnerPage:"",stack:[{type:"Frontend",name:"",version:"",documentation:""},{type:"Backend",name:"",version:"",documentation:""}],website:""}];var jt=bt,kt={components:{"app-modal-content":gt},data(){return{dialog:!1,hoveredImg:a("d985"),projects:jt,selectedProject:[]}},methods:{clickImage(t){this.dialog=!0,this.selectedProject=t}},mounted(){this.$root.$on("close",()=>{this.dialog=!1})}},wt=kt,yt=(a("9483"),a("169a")),_t=a("ce87"),xt=a("604c"),zt=Object(v["a"])(wt,ut,dt,!1,null,"182a6c69",null),Ct=zt.exports;b()(zt,{VCard:A["a"],VCardText:M["b"],VCardTitle:M["c"],VCol:G["a"],VContainer:I["a"],VDialog:yt["a"],VExpandTransition:w["a"],VHover:_t["a"],VImg:y["a"],VItemGroup:xt["b"],VRow:F["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"blue-container",attrs:{fluid:"",id:"join"}},[a("v-row",[a("v-col",[a("v-card",{attrs:{flat:"",dark:"",tile:"",color:"transparent"}},[a("v-card-text",{staticClass:"title"},[a("p",{staticClass:"white-title"},[t._v("DOŁĄCZ DO NAS")])])],1)],1)],1),a("v-row",{attrs:{"d-flex":"","justify-center":""}},[a("v-col",[a("v-card",{attrs:{flat:"",dark:"",tile:"",color:"transparent"}},[a("p",{staticClass:"content"},[t._v("\n          Kodujesz? Jesteś grafikiem? UX-owcem? Robisz cokolwiek innego, co\n          może się przydać w kodowaniu dla Poznania? Dołącz do nas! Spotykamy\n          się w każdą środę od godz. 17:00 w firmie STX Next przy ul.\n          Morawskiego 12 (koło Areny).\n        ")])])],1)],1)],1)},Vt=[],Et=(a("6264"),{}),Pt=Object(v["a"])(Et,$t,Vt,!1,null,"26109156",null),St=Pt.exports;b()(Pt,{VCard:A["a"],VCardText:M["b"],VCol:G["a"],VContainer:I["a"],VRow:F["a"]});var Ot={components:{"app-header":E,"app-contact-us":R,"app-about-us":U,"social-media":st,"our-projects":Ct,"app-join-us":St,"page-footer":lt},methods:{onCloseAlert(){this.$store.dispatch("contact/setingWasntSent")},onErrorAlert(){this.$store.dispatch("contact/setingClearError")}},computed:{...Object(d["b"])({sent:"contact/successfullySent",msgError:"contact/msgErrorRaised"})}},Tt=Ot,Lt=(a("65e5"),a("0798")),Ht=Object(v["a"])(Tt,l,u,!1,null,"152990e4",null),At=Ht.exports;b()(Ht,{VAlert:Lt["a"]});var Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register-form"},[a("v-app",{attrs:{id:"login"}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-alert",{attrs:{type:"error",value:!!t.error_msg,transition:"slide-y-transition"},on:{click:function(e){t.error_msg=""}}},[t._v(t._s(t.error_msg))]),a("v-alert",{attrs:{type:"success",value:t.successAlert,transition:"slide-y-transition"},on:{click:function(e){t.successAlert=!t.successAlert}}},[t._v("Pomyślnie zalogowano")]),t.showSpinner?a("v-progress-circular",{attrs:{size:50,color:"green",indeterminate:""}}):t._e(),a("form",[a("v-text-field",{attrs:{label:"Nazwa użytkownika",required:"","error-messages":t.usernameErrors},on:{input:function(e){return t.$v.username.$touch()},blur:function(e){return t.$v.username.$touch()}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{attrs:{label:"Hasło","append-icon":t.showPass?"visibility_off":"visibility",type:t.showPass?"text":"password",required:"","error-messages":t.passwordErrors},on:{"click:append":function(e){t.showPass=!t.showPass},input:function(e){return t.$v.password.$touch()},blur:function(e){return t.$v.password.$touch()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{on:{click:t.onSubmit}},[t._v("Zaloguj")])],1)],1)],1)],1)],1)},It=[],Nt={data(){return{username:"",password:"",showPass:!1,error_msg:"",successAlert:!1,showSpinner:!1}},validations:{username:{required:O["required"],minLength:Object(O["minLength"])(5)},password:{required:O["required"]}},methods:{onSubmit(){const t={username:this.username,password:this.password};this.error_msg="",this.$v.$invalid||(this.showSpinner=!0,this.$store.dispatch("auth/login",t).then(t=>{this.showSpinner=!1,this.clearForm(),201==t.status&&(this.successAlert=!0)},t=>{this.showSpinner=!1,this.clearForm();const e=t.response.data.msg;"Not authorized"==e?this.error_msg="Nieprawidłowa nazwa użytkownika, lub hasło":e.includes("User already logged in")?this.error_msg="Jesteś już zalogowany":t&&(this.error_msg="Logowanie nie powiodło się")}))},clearForm(){this.$v.$reset(),this.username="",this.password=""}},computed:{usernameErrors(){const t=[];return this.$v.username.$dirty?(!this.$v.username.minLength&&t.push("Wprowadź poprawną nazwę użytkownika"),!this.$v.username.required&&t.push("Nazwa użytkownika jest wymagana"),t):t},passwordErrors(){const t=[];return this.$v.password.$dirty?(!this.$v.password.required&&t.push("Hasło jest wymagane"),t):t}}},qt=Nt,Ft=(a("c882"),a("7496")),Wt=a("490a"),Bt=Object(v["a"])(qt,Mt,It,!1,null,"1fcfa3bf",null),Dt=Bt.exports;b()(Bt,{VAlert:Lt["a"],VApp:Ft["a"],VBtn:H["a"],VFlex:N["a"],VLayout:q["a"],VProgressCircular:Wt["a"],VTextField:W["a"]});var Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("app-hacknight")],1)},Zt=[],Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","text-xs-center":""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-alert",{attrs:{type:"error",value:!!t.getError,transition:"slide-y-transition",dismissible:""}},[t._v(t._s(t.getError))])],1)],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-select",{attrs:{items:t.getHacknights,"item-text":"date","item-value":"id",label:"Select Hacknight"},on:{input:t.onGetHacknight},scopedSlots:t._u([{key:"append-outer",fn:function(){return[a("v-btn",{staticClass:"add-hacknight-btn",attrs:{"offset-y":""},on:{click:t.onCreateHacknight}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v("mdi-plus")]),t._v("\n            New\n          ")],1)]},proxy:!0}]),model:{value:t.selectedHacknight,callback:function(e){t.selectedHacknight=e},expression:"selectedHacknight"}})],1)],1)],1)},Gt=[],Jt={data(){return{selectedHacknight:null}},created(){this.$store.dispatch("hacknight/getHacknights")},methods:{onCreateHacknight(){this.$store.dispatch("hacknight/createHacknight").then(()=>this.selectedHacknight=this.getHacknight)},onGetHacknight(){this.$store.dispatch("hacknight/getHacknight",this.selectedHacknight)}},computed:{...Object(d["b"])("hacknight",["getHacknights","getHacknight","getError"])}},Kt=Jt,Ut=(a("d920"),a("b974")),Qt=Object(v["a"])(Kt,Yt,Gt,!1,null,"205f3046",null),Xt=Qt.exports;b()(Qt,{VAlert:Lt["a"],VBtn:H["a"],VCol:G["a"],VContainer:I["a"],VIcon:at["a"],VRow:F["a"],VSelect:Ut["a"]});var te={components:{"app-hacknight":Xt}},ee=te,ae=Object(v["a"])(ee,Rt,Zt,!1,null,"3c44eae4",null),ne=ae.exports;n["a"].use(c["a"]);const se=[{path:"/",component:At},{path:"/login",component:Dt},{path:"/dashboard",component:ne}];var re=new c["a"]({mode:"history",routes:se}),oe={namespaced:!0,state:{token:localStorage.getItem("token")||""},getters:{isLoggedIn:t=>!!t.token},mutations:{auth_success(t,e){t.token=e}},actions:{login({commit:t},e){return new Promise((a,n)=>{i.a.post("auth/login/",{username:e.username,password:e.password}).then(e=>{const n=e.data.access_token;localStorage.setItem("token",n),i.a.defaults.headers.common["Authorization"]="Bearer "+n,t("auth_success",n),a(e)},t=>{localStorage.removeItem("token"),n(t)})})}}},ie={namespaced:!0,state:{msgWasSent:null,msgError:null},getters:{successfullySent:t=>{return t.msgWasSent},msgErrorRaised:t=>{return t.msgError}},mutations:{setWasSent(t){t.msgWasSent=!0},setWasntSent(t){t.msgWasSent=!1},raiseMsgError(t){t.msgError=!0},clearError(t){t.msgError=!1}},actions:{sentMessage({commit:t},e){return new Promise((a,n)=>{i.a.post("send-email/",{name:e.name,email:e.email,phone:e.phone,content:e.content}).then(e=>{200==e.status&&t("setWasSent"),a(e)},t=>{n(t)})})},setingWasntSent({commit:t}){t("setWasntSent")},setingClearError({commit:t}){t("clearError")}}},ce=a("c1df"),le=a.n(ce),ue={namespaced:!0,state:{allHacknights:[],hacknight:null,error:null},getters:{getHacknights(t){return t.allHacknights},getHacknight(t){return t.hacknight},getError(t){return t.error}},mutations:{raiseError(t,e){t.error=e},setHacknights(t,e){t.allHacknights=e},setHacknight(t,e){t.hacknight=e}},actions:{createHacknight({commit:t,dispatch:e}){return i.a.post("/hacknights/",{date:le()().format("YYYY-MM-DD")}).then(a=>{t("setHacknight",a.data),e("getHacknights")}).catch(e=>{const a=e.response.data.message;t("raiseError",a)})},getHacknight({commit:t},e){i.a.get(`/hacknights/${e}/`).then(e=>{t("setHacknight",e.data)}).catch(e=>{t("raiseError",e)})},getHacknights({commit:t}){i.a.get("/hacknights/").then(e=>{t("setHacknights",e.data)}).catch(e=>{t("raiseError",e)})}}};n["a"].use(d["a"]);const de=new d["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{auth:oe,contact:ie,hacknight:ue}});var me=de,pe=(a("5363"),a("f309"));n["a"].use(pe["a"]);var he=new pe["a"]({icons:{iconfont:"mdi"}}),fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app",[a("router-view")],1)],1)},ve=[],ge={name:"app"},be=ge,je=Object(v["a"])(be,fe,ve,!1,null,null,null),ke=je.exports;b()(je,{VApp:Ft["a"]}),n["a"].use(r.a),n["a"].config.productionTip=!1,i.a.defaults.baseURL="http://0.0.0.0:5000/";const we=localStorage.getItem("token");we&&(i.a.defaults.headers.common["Authorization"]="Bearer "+we),new n["a"]({router:re,store:me,vuetify:he,render:t=>t(ke)}).$mount("#app")},"575c":function(t,e,a){},"5b8f":function(t,e,a){},"5c85":function(t,e,a){},6264:function(t,e,a){"use strict";var n=a("9d7b"),s=a.n(n);s.a},"65e5":function(t,e,a){"use strict";var n=a("b72c"),s=a.n(n);s.a},"6cb9":function(t,e,a){"use strict";var n=a("16c9"),s=a.n(n);s.a},8935:function(t,e,a){},9483:function(t,e,a){"use strict";var n=a("5c85"),s=a.n(n);s.a},"9d7b":function(t,e,a){},a266:function(t,e,a){t.exports=a.p+"img/logo-white.28b4ac39.svg"},a9b7:function(t,e,a){"use strict";var n=a("3631"),s=a.n(n);s.a},b065:function(t,e,a){"use strict";var n=a("575c"),s=a.n(n);s.a},b72c:function(t,e,a){},c882:function(t,e,a){"use strict";var n=a("5b8f"),s=a.n(n);s.a},c9d3:function(t,e,a){"use strict";var n=a("330d"),s=a.n(n);s.a},d11d:function(t,e,a){t.exports=a.p+"img/volontulo.170583c3.png"},d920:function(t,e,a){"use strict";var n=a("8935"),s=a.n(n);s.a},d985:function(t,e,a){t.exports=a.p+"img/magnifying_glass.70c76a9c.svg"},e7d8:function(t,e,a){"use strict";var n=a("2d7f"),s=a.n(n);s.a},f36d:function(t,e,a){"use strict";var n=a("0f6e"),s=a.n(n);s.a}});
//# sourceMappingURL=app.6f73aa31.js.map