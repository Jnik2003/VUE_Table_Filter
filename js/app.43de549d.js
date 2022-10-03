(function(){"use strict";var e={9717:function(e,t,a){var n=a(3396);function l(e,t){const a=(0,n.up)("router-link"),l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",null,[(0,n.Wm)(a,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1}),(0,n.Uk)(" | "),(0,n.Wm)(a,{to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)("About")])),_:1})]),(0,n.Wm)(l)],64)}var o=a(89);const r={},i=(0,o.Z)(r,[["render",l]]);var u=i,s=a(9242),c=a(2483),d=a(7139);const m=e=>((0,n.dD)("data-v-32a2eb53"),e=e(),(0,n.Cn)(),e),h={class:"home"},p={class:"inputs"},f={class:"inp"},v=m((()=>(0,n._)("label",null,"Поисковая строка",-1))),b=["type","disabled"],g={border:"1",width:"100%",style:{"border-collapse":"collapse"}},V=m((()=>(0,n._)("tr",null,[(0,n._)("th",null,"N"),(0,n._)("th",null,"Дата"),(0,n._)("th",null,"Название"),(0,n._)("th",null,"Количество"),(0,n._)("th",null,"Расстояние")],-1))),y={class:"pages"},w=["onClick"];function _(e,t,a,l,o,r){const i=(0,n.up)("my-select");return(0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("h3",null,"Всего записей: "+(0,d.zw)(o.totalEntries),1),(0,n._)("div",p,[(0,n.Wm)(i,{options:o.column,labelName:o.sortValueName,modelValue:o.sortValue,"onUpdate:modelValue":t[0]||(t[0]=e=>o.sortValue=e)},null,8,["options","labelName","modelValue"]),(0,n.Wm)(i,{options:o.term,modelValue:o.termValue,"onUpdate:modelValue":t[1]||(t[1]=e=>o.termValue=e),labelName:o.termName,sortValue:o.sortValue},null,8,["options","modelValue","labelName","sortValue"]),(0,n._)("div",f,[v,"date"!=o.sortValue?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,type:"date"==o.sortValue?"date":"description"==o.sortValue?"text":"number","onUpdate:modelValue":t[2]||(t[2]=e=>o.searchValue=e),disabled:""==o.termValue},null,8,b)),[[s.YZ,o.searchValue]]):(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:1,type:"date","onUpdate:modelValue":t[3]||(t[3]=e=>o.searchDate=e),onInput:t[4]||(t[4]=(...e)=>r.setDateValue&&r.setDateValue(...e))},null,544)),[[s.nr,o.searchDate]])]),(0,n.Wm)(i,{modelValue:o.limit,"onUpdate:modelValue":t[5]||(t[5]=e=>o.limit=e),options:o.limitData,labelName:o.limitName},null,8,["modelValue","options","labelName"])]),(0,n._)("table",g,[V,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.calcDataTable,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n._)("td",null,(0,d.zw)(e.id),1),(0,n._)("td",null,(0,d.zw)(e.date),1),(0,n._)("td",null,(0,d.zw)(e.description),1),(0,n._)("td",null,(0,d.zw)(e.count),1),(0,n._)("td",null,(0,d.zw)(e.distance),1)])))),128))]),(0,n._)("div",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.calcTotalPages,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,d.C_)(["page",{active:o.page===e}]),key:t,onClick:t=>r.changePage(e)},(0,d.zw)(e),11,w)))),128))])])}const D=e=>((0,n.dD)("data-v-3d68139f"),e=e(),(0,n.Cn)(),e),k={for:"sort-select"},N=["disabled"],O=D((()=>(0,n._)("option",{value:"",disabled:"",selected:""},"-- Выбор --",-1))),T=["value"];function j(e,t,a,l,o,r){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("form",null,[(0,n._)("label",k,(0,d.zw)(a.labelName),1),(0,n.wy)((0,n._)("select",{name:"select",id:"sort-select","onUpdate:modelValue":t[0]||(t[0]=e=>a.modelValue=e),onChange:t[1]||(t[1]=(...e)=>r.changeOption&&r.changeOption(...e)),disabled:""==a.sortValue},[O,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.options,((e,t)=>((0,n.wg)(),(0,n.iD)("option",{value:e.value,key:t,ref_for:!0,ref:"opt"},(0,d.zw)(e.name),9,T)))),128))],40,N),[[s.bM,a.modelValue]])])])}var C={name:"MySelect",props:{options:{type:Array},modelValue:{type:String},labelName:{type:String},sortValue:{type:String}},methods:{changeOption(e){this.$emit("update:modelValue",e.target.value)}},computed:{}};const P=(0,o.Z)(C,[["render",j],["__scopeId","data-v-3d68139f"]]);var S=P,E=a(6265),U=a.n(E),z={name:"HomeView",data(){return{dataTable:[],dataFromJson:[],column:[{value:"date",name:"Дата"},{value:"description",name:"Название"},{value:"count",name:"Количество"},{value:"distance",name:"Расстояние"}],sortValue:"",sortValueName:"Выберите колонку",term:[{value:"same",name:"Равно"},{value:"more",name:"Больше"},{value:"less",name:"Меньше"},{value:"contains",name:"Содержит"}],termValue:"",termName:"Выберите условие",limitData:[{value:"3",name:"3"},{value:"5",name:"5"},{value:"10",name:"10"}],limit:"5",limitName:"Кол-во на стр.",searchValue:"",searchDate:"",page:1,totalPages:0,totalEntries:0}},components:{MySelect:S},methods:{changePage(e){this.page=e},setDateValue(){"date"==this.sortValue?this.searchValue=this.searchDate:this.searchValue=""},async getDataFromDb(){try{const e=await U().get("http://localhost:3000/api/request.php");console.log(e)}catch(e){console.log("err")}}},computed:{calcTotalPages(){return this.page=1,this.totalPages=Math.ceil(this.totalEntries/this.limit)},calcDataTable(){return""!=this.searchValue?this.dataTable=this.dataFromJson.filter((e=>"same"==this.termValue?e[this.sortValue]==this.searchValue:"more"==this.termValue?e[this.sortValue]>this.searchValue:"less"==this.termValue?e[this.sortValue]<this.searchValue:"contains"==this.termValue&&"description"==this.sortValue?e[this.sortValue].toUpperCase().includes(this.searchValue.toUpperCase()):"contains"==this.termValue?e[this.sortValue].toString().includes(this.searchValue.toString()):void 0)):this.dataTable=this.dataFromJson.filter((e=>e)),this.totalEntries=this.dataTable.length,this.totalPages=Math.ceil(this.totalEntries/this.limit),this.dataTable=this.dataTable.slice((this.page-1)*this.limit,this.limit*this.page)}},mounted(){this.getDataFromDb()},watch:{}};const M=(0,o.Z)(z,[["render",_],["__scopeId","data-v-32a2eb53"]]);var F=M;const A=[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,7381))}],H=(0,c.p7)({history:(0,c.PO)("/"),routes:A});var W=H,x=a(65),Y=(0,x.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const Z=s.ri(u);Z.use(Y).use(W).mount("#app")}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,o){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],l=e[c][1],o=e[c][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(i=!1,o<r&&(r=o));if(i){e.splice(c--,1);var s=l();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,l,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.b0126c19.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="test_task_nodejs:";a.l=function(n,l,o,r){if(e[n])e[n].push(l);else{var i,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[l];var m=function(t,a){i.onerror=i.onload=null,clearTimeout(h);var l=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),l&&l.forEach((function(e){return e(a)})),t)return t(a)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.f.j=function(t,n){var l=a.o(e,t)?e[t]:void 0;if(0!==l)if(l)n.push(l[2]);else{var o=new Promise((function(a,n){l=e[t]=[a,n]}));n.push(l[2]=o);var r=a.p+a.u(t),i=new Error,u=function(n){if(a.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",i.name="ChunkLoadError",i.type=o,i.request=r,l[1](i)}};a.l(r,u,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,r=n[0],i=n[1],u=n[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(u)var c=u(a)}for(t&&t(n);s<r.length;s++)o=r[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},n=self["webpackChunktest_task_nodejs"]=self["webpackChunktest_task_nodejs"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9717)}));n=a.O(n)})();
//# sourceMappingURL=app.43de549d.js.map