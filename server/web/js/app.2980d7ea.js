(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)s=r[u],i[s]&&f.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("c21b"),i=n.n(a);i.a},"0b33":function(t,e,n){"use strict";var a=n("56f5"),i=n.n(a);i.a},"0c6a":function(t,e,n){},"2b7e":function(t,e,n){"use strict";var a=n("b179"),i=n.n(a);i.a},"50d7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app",attrs:{id:"app"}},[n("transition",{attrs:{name:"tfade",mode:"out-in"}},[n("router-view")],1)],1)},o=[],s={name:"app",data:function(){return{}},created:function(){}},r=s,c=(n("034f"),n("2877")),l=Object(c["a"])(r,i,o,!1,null,null,null);l.options.__file="App.vue";var d=l.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"link",on:{click:t.goDownload}},[t._v("下载文件")]),n("div",{staticClass:"link",on:{click:t.goUpload}},[t._v("上传文件")]),n("div",{staticClass:"link"},[n("div",{staticClass:"title",on:{click:t.goWord}},[t._v("文本传输")]),t.content?n("div",{staticClass:"word_wrap"},[n("div",{staticClass:"word",attrs:{id:"content","data-clipboard-text":t.content},on:{click:t.copy}},[t._v(t._s(t.content))])]):t._e()])])},p=[],v=(n("7f7f"),n("b311")),h=n.n(v),g={hint:function(t,e,n){n=isNaN(n)?1500:n;var a,i,o=document.createElement("div");o.innerHTML=t,"suc"==e?(a="#3c763d",i="#ffffff"):"fail"==e?(a="#8a6d3b",i="#ffffff"):(a="#3c763d",i="#ffffff"),o.style.cssText="width: 60%;min-width: 150px;opacity: 0.9;padding: 10px 0;color: "+i+";line-height: 30px;text-align: center;border-radius: 5px;position: fixed;top: 60px;left: 50%;transform:translateX(-50%);z-index: 999999;background: "+a+";font-size: 12px;",document.body.appendChild(o),setTimeout(function(){var t=.5;o.style.webkitTransition="-webkit-transform "+t+"s ease-in, opacity "+t+"s ease-in",o.style.opacity="0",setTimeout(function(){document.body.removeChild(o)},1e3*t)},n)},setTitle:function(t){document.title=t;var e=/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);if(e){var n=document.createElement("iframe");n.style.display="none",n.addEventListener("load",function(){setTimeout(function(){document.body.removeChild(n)},0)}),document.body.appendChild(n)}}},m={data:function(){return{content:""}},mounted:function(){var t=this;window.socket.on("new message",function(e){t.content=e}),window.socket.on("new files",function(t){t.length&&g.hint(1==t.length?"【新文件】".concat(t[0].file.name):"上传了".concat(t.length,"个新文件."))})},methods:{copy:function(){h.a.isSupported()?(new h.a("#content"),g.hint("复制成功")):g.hint("系统不支持，请手动复制")},goUpload:function(){this.$router.push({name:"upload"})},goWord:function(){this.$router.push({name:"word"})},goDownload:function(){this.$router.push({name:"download"})}}},w=m,_=(n("6992"),Object(c["a"])(w,f,p,!1,null,"3e5dea1f",null));_.options.__file="index.vue";var x=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"refresh",on:{click:t.refresh}},[t._v("刷新")]),n("iframe",{staticClass:"iframe",attrs:{width:"100%",height:"100%",name:"iframe",frameborder:"0",src:t.src}})])},C=[],A=n("bc3a"),y=n.n(A),S={data:function(){return{src:""}},created:function(){var t=this;y.a.get("/getDownloadPort",{}).then(function(e){t.src=window.location.protocol+"//"+window.location.hostname+":"+e.data.downloadPort}).catch(function(t){alert(t)}),window.socket.on("new files",function(e){e.length&&t.refresh()})},methods:{refresh:function(){this.src=this.src+"?"+Date.now()}}},T=S,k=(n("2b7e"),Object(c["a"])(T,b,C,!1,null,"61a0b7e1",null));k.options.__file="download.vue";var E=k.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),n("input",{ref:"input",staticStyle:{display:"none"},attrs:{type:"file",value:"",multiple:""},on:{change:function(e){t.upload()}}}),n("section",{staticClass:"container"},[n("div",{attrs:{id:"file"},on:{click:t.triggerUpload}},[t._v("上传文件")]),n("ul",{attrs:{id:"ul"}},[t._l(t.infos,function(e,a){return n("li",{key:a},[n("h3",[t._v(t._s(e.originalname))]),n("p",[t._v("[path] "+t._s(e.path))]),n("p",[t._v("[size] "+t._s(e.size)+"bytes")]),n("p",[t._v("[time] "+t._s((new Date).toTimeString()))])])}),n("br",{ref:"bot"})],2)])],1)},O=[],P=n("8afe"),j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("section",{staticClass:"loading"},[n("span"),n("span"),n("span"),n("span"),n("span")])])}],M=(n("74df"),{}),Y=Object(c["a"])(M,j,H,!1,null,"b629410e",null);Y.options.__file="loading.vue";var R=Y.exports,B={data:function(){return{loading:!1,infos:[]}},components:{loading:R},methods:{triggerUpload:function(){this.$refs.input.click()},upload:function(){var t=this,e=this.$refs.input.files||[];if(!e.length||!window.FileReader)return alert("浏览器不支持HTML5"),!1;this.loading=!0;for(var n=new FormData,a=0;a<e.length;a++)n.append("files",e[a]);var i=new XMLHttpRequest;i.open("POST","upload"),i.send(n),i.onreadystatechange=function(){if(t.loading=!1,4===i.readyState&200===i.status){var e=JSON.parse(i.responseText);t.infos=Object(P["a"])(t.infos).concat(Object(P["a"])(e.rets)),t.$nextTick(function(){t.$refs.bot.scrollIntoView()})}}}}},I=B,J=(n("cd83"),Object(c["a"])(I,D,O,!1,null,"73eddd42",null));J.options.__file="upload.vue";var F=J.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[a("section",{staticClass:"fn"},[a("div",{staticClass:"col_btn",on:{click:t.getCollections}},[t._v("我的收藏")]),a("div",{staticClass:"dates"},[a("input",{ref:"startDate",staticClass:"date",attrs:{type:"date"}}),a("input",{ref:"endDate",staticClass:"date",attrs:{type:"date"}})]),a("div",{staticClass:"btn",on:{click:t.getTexts}},[t._v("查询")])]),a("section",{staticClass:"body"},[t.newTexts&&t.newTexts.length?a("div",{staticClass:"texts"},[a("div",{staticClass:"text_date"},[t._v("新增")]),t._l(t.newTexts,function(e,i){return a("div",{key:i,ref:"newTexts",refInFor:!0,staticClass:"text"},[a("div",{staticClass:"text_con",domProps:{innerHTML:t._s(t.getHtml(e[1]))}}),a("div",{staticClass:"text_fn"},[a("div",{staticClass:"text_fn_time"},[t._v(t._s(t._f("getTime")(e[0])))]),a("img",{staticClass:"text_fn_copy",attrs:{"data-clipboard-text":e[1],src:n("d92a"),alt:""},on:{click:function(e){t.copy(this)}}})])])})],2):t._e(),0===t.mode?a("div",{staticClass:"texts"},[a("div",{staticClass:"text_date"},[t._v(t._s(t.collections.length?"我的收藏":"暂无收藏"))]),t._l(t.collections,function(e,i){return a("div",{key:i,ref:"collections",refInFor:!0,staticClass:"text"},[a("div",{staticClass:"text_title",domProps:{innerHTML:t._s(t.getHtml(e[2]))}}),a("div",{staticClass:"text_con",domProps:{innerHTML:t._s(t.getHtml(e[1]))}}),a("div",{staticClass:"text_fn"},[a("div",{staticClass:"text_fn_time"},[t._v(t._s(t._f("getFullTime")(e[0])))]),a("img",{staticClass:"text_fn_copy",attrs:{"data-clipboard-text":e[1],src:n("d92a"),alt:""},on:{click:function(e){t.copy(this)}}})])])})],2):a("div",t._l(t.texts,function(e,i){return a("div",{key:i,staticClass:"texts"},[a("div",{staticClass:"text_date"},[t._v(t._s(e.date))]),t._l(e.res,function(e,i){return a("div",{key:i,staticClass:"text"},[a("div",{staticClass:"text_con",domProps:{innerHTML:t._s(t.getHtml(e[1]))}}),a("div",{staticClass:"text_fn"},[a("div",{staticClass:"text_fn_time"},[t._v(t._s(t._f("getTime")(e[0])))]),a("img",{staticClass:"text_fn_copy",attrs:{"data-clipboard-text":e[1],src:n("d92a"),alt:""},on:{click:function(e){t.copy()}}})])])})],2)}))]),a("section",{staticClass:"fn"},[a("textarea",{ref:"textarea",staticClass:"content",attrs:{name:""}}),a("div",{staticClass:"btn",on:{click:t.addText}},[t._v("发送")])])])},z=[],K=(n("55dd"),n("4917"),n("ac6a"),n("28a5"),n("6b54"),n("f576"),n("c5f6"),{name:"word",data:function(){return{texts:[],collections:[],newTexts:[],mode:0}},mounted:function(){var t=this;this.$refs.startDate.value=this.getDate(new Date),this.$refs.endDate.value=this.getDate(new Date),this.getCollections(),window.socket.on("new message",function(e){t.newTexts.unshift([Date.now(),e])})},filters:{getFullTime:function(t){return t=new Date(Number(t)),"".concat(t.getFullYear().toString().padStart(4,"0"),"-").concat((t.getMonth()+1).toString().padStart(2,"0"),"-").concat(t.getDate().toString().padStart(2,"0")," ").concat(t.getHours().toString().padStart(2,"0"),":").concat(t.getMinutes().toString().padStart(2,"0"),":").concat(t.getSeconds().toString().padStart(2,"0"))},getTime:function(t){return t=new Date(Number(t)),"".concat(t.getHours().toString().padStart(2,"0"),":").concat(t.getMinutes().toString().padStart(2,"0"),":").concat(t.getSeconds().toString().padStart(2,"0"))}},methods:{getHtml:function(t){var e=t.split(" ");return e.forEach(function(t,n){t.match("//")&&(e[n]='<a href="'.concat(encodeURI(t),'">').concat(t,"</a>"))}),e.join(" ")},getDate:function(t){return"".concat(t.getFullYear().toString().padStart(4,"0"),"-").concat((t.getMonth()+1).toString().padStart(2,"0"),"-").concat(t.getDate().toString().padStart(2,"0"))},copy:function(){h.a.isSupported()?(new h.a(".text_fn_copy"),g.hint("复制成功")):g.hint("系统不支持，请手动复制")},addText:function(){var t=this,e=this.$refs.textarea.value;e?y.a.post("/addText",{content:e}).then(function(n){n.data.state?(g.hint("发送成功!!!"),t.newTexts.unshift([Date.now(),e])):g.hint(n.data.error,"fail")}).catch(function(t){alert(t)}):g.hint("请输入内容！","fail")},getTexts:function(){var t=this;this.mode=1;var e=this.$refs.startDate.value,n=this.$refs.endDate.value;y.a.get("/getTexts",{params:{startDate:e,endDate:n}}).then(function(e){var n=e.data.texts;n.forEach(function(t){return t.res.sort(function(t,e){return e[0]-t[0]})}),n.sort(function(t,e){return t.date>e.date?-1:1}),t.texts=n}).catch(function(t){alert(t)})},getCollections:function(){var t=this;this.mode=0,y.a.get("/getCollections").then(function(e){var n=e.data.collections;n.sort(function(t,e){return e[0]-t[0]}),t.collections=n}).catch(function(t){alert(t)})}}}),L=K,V=(n("0b33"),Object(c["a"])(L,Q,z,!1,null,"556d6582",null));V.options.__file="word.vue";var N=V.exports,W=[{name:"index",path:"/index",meta:{title:"局域网共享"},component:x},{name:"download",path:"/download",meta:{title:"文件下载"},component:E},{name:"upload",path:"/upload",meta:{title:"文件上传"},component:F},{name:"word",path:"/word",meta:{title:"文本传输"},component:N},{path:"*",meta:{title:"局域网共享"},component:x}],$=n("8055"),G=n.n($);a["a"].config.productionTip=!1,a["a"].use(u["a"]);var U=new u["a"]({routes:W});window.socket=G()("".concat(window.location.origin)),U.beforeEach(function(t,e,n){t.meta.title&&g.setTitle(t.meta.title),n()}),new a["a"]({router:U,render:function(t){return t(d)}}).$mount("#app")},"56f5":function(t,e,n){},6992:function(t,e,n){"use strict";var a=n("fa2e"),i=n.n(a);i.a},7:function(t,e){},"74df":function(t,e,n){"use strict";var a=n("50d7"),i=n.n(a);i.a},b179:function(t,e,n){},c21b:function(t,e,n){},cd83:function(t,e,n){"use strict";var a=n("0c6a"),i=n.n(a);i.a},d92a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADSklEQVR4Xu2bzYoTQRCAqyYQLxrPyrqCEHCVQJjug7qwF/GovoKIT+Bp9QH8ufgEgs+gV8GDKKvQPRCC7kJAdBe9G70YQkpmMWGSzKZ6prs3s27PKVBd1VVfVzU1PR2EY/7gMY8fAoCQAYYEer3eiX6/f4+I7iPiBUM1p8OI6AsiPms0Gs+bzeYfF8aNSiBJkrNE9BoALrmY1IGNz4h4I47jH7a2WABEFGmt3yLiuu1kLvWJ6L0QYgMRRzZ2WQBa6zsA8MJmEo+6d4UQVr6ZANgCgCvjIIjoJSI+EEJsewxszrTWeo2IHiPi7YzwgxDiqo0fLACl1E9EbIwnqdVqK+12+7vNpGV1O53OynA43MssRl9KebqsvVSPBaC1puwEQghWx8YhTte1P2wwrifkAuTkrv0JAA6bODcfJw8ZwOxJWuubAPB0f4ND3Izj+NUiqP9dCSilviHiaho0Ee1JKfd/H/RYA8gQX+PSl5Fvm6wYVwKcfNYHawBZ4pYAjFaMC5CTOwegtf4KAOdtg/+XsrtSyoW2uAA5uXMASZLcGo1GjxDxsg0EIvoURdFDbtPiAuTkzgHYBF1GlwuQkwcAMwSsN8Eyq2ijw60wJw8ZEDJgmkAoAa4euZpy2AnOupLbGRr4U+j8wjoDXHaCswTyevnKAXDZCeYAmOsMKwfAVSeYE3xuZ1g5ANwe4loeAPAHIoe7CbpeYc5eyICQAYu/U3AZEt4FXL8LhE4wcwrLbWBF5aETJAqd4OwZIbfJcfKwCbreBIvWte14boU5eciAkAHhSGyKgPWJkG1NF9XnapyTl9kDfgHAybFivV5fbbVak4tKRQOwGd/tds8NBoPdjI3fQohTWZs+AMxdkwOATSnljk0wRXWVUhcB4En2mhwRfZRSTq7wpTZ9ADhSFyWdAyAiTJLkHQBcK7pqnsdvxXG8johTJ0DOAaRBKKXOAMAbREzTcOkPEe1EUXQ977K0FwBpxEflurw3AEtfdkMHAoCCV3vZRsgQfCWGmfQJhRuhSkRm4IRpn+ANgMezQYPwDxzC/qHCWQn4/EpckkBun+AzA5zdFywZ8ERtUZ/gDYCvr8RFYJT5W52zEijiaJXGBgBVWo1l+HLsM+Avdd/sX3Yo6asAAAAASUVORK5CYII="},fa2e:function(t,e,n){}});
//# sourceMappingURL=app.2980d7ea.js.map