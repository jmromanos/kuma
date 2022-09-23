import{_ as P,q as x,u as B,x as D,r as u,o as a,f as r,b as d,w as n,n as m,e as _,y as L,z as A,h as o,A as k,d as v,p as h,B as E,j as z,t as c,F as w,C as W,D as H}from"./index.5371ce6a.js";import{_ as q,E as U}from"./ErrorBlock.a4674dd2.js";import{_ as F}from"./CodeBlock.2c568e63.js";const V={name:"PaginationWidget",components:{KButton:x},props:{hasPrevious:{type:Boolean,default:!1},hasNext:{type:Boolean,default:!1}},emits:["next","previous"],methods:{onNextButtonClick(){this.$emit("next"),B.logger.info(D.PAGINATION_NEXT_BUTTON_CLICKED)},onPreviousButtonClick(){this.$emit("previous"),B.logger.info(D.PAGINATION_PREVIOUS_BUTTON_CLICKED)}}},j={class:"pagination"},M=_(" \u2039 Previous "),G=_(" Next \u203A ");function X(t,f,s,R,y,l){const g=u("KButton");return a(),r("div",j,[s.hasPrevious?(a(),d(g,{key:0,ref:"paginatePrev",appearance:"primary",onClick:l.onPreviousButtonClick},{default:n(()=>[M]),_:1},8,["onClick"])):m("",!0),s.hasNext?(a(),d(g,{key:1,ref:"paginateNext",appearance:"primary",onClick:l.onNextButtonClick},{default:n(()=>[G]),_:1},8,["onClick"])):m("",!0)])}const J=P(V,[["render",X],["__scopeId","data-v-bb9c78f2"]]),Q="/assets/icon-empty-table.dbb0b754.svg";const Y={name:"DataOverview",components:{PaginationWidget:J,EmptyBlock:q,ErrorBlock:U,LoadingBlock:F,KButton:x,KIcon:L,KTable:A},props:{selectedEntityName:{type:String,required:!1,default:""},pageSize:{type:Number,default:12},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},error:{type:Error,required:!1,default:null},isEmpty:{type:Boolean,default:!1},emptyState:{type:Object,default:null},tableData:{type:Object,default:null},tableDataIsEmpty:{type:Boolean,default:!1},showWarnings:{type:Boolean,required:!1,default:!1},showDetails:{type:Boolean,required:!1,default:!1},next:{type:Boolean,default:!1},pageOffset:{type:Number,required:!1,default:0}},emits:["table-action","refresh","load-data"],data(){return{selectedRow:"",internalPageOffset:0}},computed:{customSlots(){return this.tableData.headers.map(({key:t})=>t).filter(t=>this.$slots[t])},tableHeaders(){return this.showWarnings?this.tableData.headers:this.tableData.headers.filter(({key:t})=>t!=="warnings")},tableRecompuationKey(){return`${this.tableData.data.length}-${this.tableHeaders.length}`}},watch:{isLoading(t){!t&&this.tableData.data.length>0&&(this.selectedRow=this.selectedEntityName||this.tableData.data[0].name)}},created(){this.internalPageOffset=this.pageOffset},methods:{tableDataFetcher(){return{data:this.tableData.data,total:this.tableData.data.length}},tableRowHandler(t,f){this.selectedRow=f.name,this.$emit("table-action",f)},onRefreshButtonClick(){this.$emit("refresh"),this.$emit("load-data",this.internalPageOffset),B.logger.info(D.TABLE_REFRESH_BUTTON_CLICKED)},goToPreviousPage(){this.internalPageOffset=this.pageOffset-this.pageSize,this.$emit("load-data",this.pageOffset-this.pageSize)},goToNextPage(){this.internalPageOffset=this.pageOffset+this.pageSize,this.$emit("load-data",this.pageOffset+this.pageSize)},getCellAttributes({headerKey:t}){return{class:["warnings"].includes(t)?"text-center":["details"].includes(t)?"text-right":""}},getRowAttributes({name:t}){const f=this.selectedEntityName||this.tableData.data[0].name;return{class:t===f?"is-selected":""}}}},p=t=>(W("data-v-fb9ac17c"),t=t(),H(),t),Z={class:"data-overview","data-testid":"data-overview"},$={class:"data-table-controls mb-2"},ee=p(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},[o("g",{fill:"#fff","fill-rule":"nonzero"},[o("path",{d:"M18 5.5a12.465 12.465 0 00-8.118 2.995 1.5 1.5 0 001.847 2.363l.115-.095A9.437 9.437 0 0118 8.5l.272.004a9.487 9.487 0 019.07 7.75l.04.246H25a.5.5 0 00-.416.777l4 6a.5.5 0 00.832 0l4-6 .04-.072A.5.5 0 0033 16.5h-2.601l-.017-.15C29.567 10.2 24.294 5.5 18 5.5zM2.584 18.723l-.04.072A.5.5 0 003 19.5h2.6l.018.15C6.433 25.8 11.706 30.5 18 30.5c3.013 0 5.873-1.076 8.118-2.995a1.5 1.5 0 00-1.847-2.363l-.115.095A9.437 9.437 0 0118 27.5l-.272-.004a9.487 9.487 0 01-9.07-7.75l-.041-.246H11a.5.5 0 00.416-.777l-4-6a.5.5 0 00-.832 0l-4 6z"})])],-1)),te=[ee],ae=p(()=>o("span",null,"Refresh",-1)),se={key:3,class:"data-overview-content"},ne={key:0,class:"data-overview-table"},oe=p(()=>o("span",{class:"entity-status__dot"},null,-1)),ie={class:"entity-status__label"},le={key:0,class:"action-link__active-state"},ce=_(" \u2713 "),re=p(()=>o("span",{class:"sr-only"},"Selected",-1)),de=[ce,re],_e={key:1,class:"action-link__normal-state"},ue=_(" Details "),fe=p(()=>o("div",{class:"card-icon mb-3"},[o("img",{src:Q})],-1)),he={key:0},me={key:1},ge={key:2,class:"data-overview-content mt-6"};function pe(t,f,s,R,y,l){const g=u("KButton"),O=u("LoadingBlock"),S=u("ErrorBlock"),N=u("EmptyBlock"),b=u("router-link"),C=u("KIcon"),I=u("KTable"),T=u("PaginationWidget");return a(),r("div",Z,[o("div",$,[k(t.$slots,"additionalControls",{},void 0,!0),v(g,{class:"refresh-button",appearance:"primary",disabled:s.isLoading,onClick:l.onRefreshButtonClick},{default:n(()=>[o("span",{class:h(["refresh-icon custom-control-icon",{"is-spinning":s.isLoading}])},te,2),ae]),_:1},8,["disabled","onClick"])]),s.isLoading?(a(),d(O,{key:0})):s.hasError?(a(),d(S,{key:1,error:s.error},null,8,["error"])):s.isEmpty?(a(),d(N,{key:2})):(a(),r("div",se,[!s.tableDataIsEmpty&&s.tableData?(a(),r("div",ne,[(a(),d(I,{key:l.tableRecompuationKey,class:h({"data-table-is-hidden":s.tableDataIsEmpty}),fetcher:l.tableDataFetcher,headers:l.tableHeaders,"cell-attrs":l.getCellAttributes,"row-attrs":l.getRowAttributes,"disable-pagination":"","is-clickable":"","data-testid":"data-overview-table","onRow:click":l.tableRowHandler},E({status:n(({rowValue:e})=>[o("div",{class:h(["entity-status",{"is-offline":e.toString().toLowerCase()==="offline"||e===!1,"is-degraded":e.toString().toLowerCase()==="partially degraded"||e===!1}])},[oe,o("span",ie,c(e),1)],2)]),name:n(({row:e,rowValue:i})=>[e.nameRoute?(a(),d(b,{key:0,to:e.nameRoute},{default:n(()=>[_(c(i),1)]),_:2},1032,["to"])):(a(),r(w,{key:1},[_(c(i),1)],64))]),mesh:n(({row:e,rowValue:i})=>[e.meshRoute?(a(),d(b,{key:0,to:e.meshRoute},{default:n(()=>[_(c(i),1)]),_:2},1032,["to"])):(a(),r(w,{key:1},[_(c(i),1)],64))]),service:n(({row:e,rowValue:i})=>[e.serviceInsightRoute?(a(),d(b,{key:0,to:e.serviceInsightRoute},{default:n(()=>[_(c(i),1)]),_:2},1032,["to"])):(a(),r(w,{key:1},[_(c(i),1)],64))]),totalUpdates:n(({row:e})=>[o("span",null,c(e.totalUpdates),1)]),selected:n(({row:e})=>[o("a",{class:h(["data-table-action-link",{"is-active":y.selectedRow===e.name}])},[y.selectedRow===e.name?(a(),r("span",le,de)):(a(),r("span",_e," View "))],2)]),dpVersion:n(({row:e,rowValue:i})=>[o("div",{class:h({"with-warnings":e.unsupportedEnvoyVersion||e.unsupportedKumaDPVersion||e.kumaDpAndKumaCpMismatch})},c(i),3)]),envoyVersion:n(({row:e,rowValue:i})=>[o("div",{class:h({"with-warnings":e.unsupportedEnvoyVersion})},c(i),3)]),_:2},[z(l.customSlots,e=>({name:e,fn:n(({rowValue:i,row:K})=>[k(t.$slots,e,{rowValue:i,row:K},void 0,!0)])})),s.showWarnings?{name:"warnings",fn:n(({row:e})=>[e.withWarnings?(a(),d(C,{key:0,class:"mr-1",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"20"})):m("",!0)]),key:"0"}:void 0,s.showDetails?{name:"details",fn:n(({row:e})=>[v(g,{class:"detail-link",appearance:"btn-link",to:e.nameRoute},{icon:n(()=>[v(C,{icon:e.warnings.length>0?"warning":"info",color:e.warnings.length>0?"var(--black-75)":"var(--blue-500)","secondary-color":e.warnings.length>0?"var(--yellow-300)":null,size:"20"},null,8,["icon","color","secondary-color"])]),default:n(()=>[ue]),_:2},1032,["to"])]),key:"1"}:void 0]),1032,["class","fetcher","headers","cell-attrs","row-attrs","onRow:click"])),v(T,{"has-previous":y.internalPageOffset>0,"has-next":s.next,onNext:l.goToNextPage,onPrevious:l.goToPreviousPage},null,8,["has-previous","has-next","onNext","onPrevious"])])):m("",!0),s.tableDataIsEmpty&&s.tableData?(a(),d(N,{key:1},E({title:n(()=>[fe,s.emptyState.title?(a(),r("p",he,c(s.emptyState.title),1)):(a(),r("p",me," No items found "))]),_:2},[s.emptyState.message?{name:"message",fn:n(()=>[_(c(s.emptyState.message),1)]),key:"0"}:void 0]),1024)):m("",!0),t.$slots.content?(a(),r("div",ge,[k(t.$slots,"content",{},void 0,!0)])):m("",!0)]))])}const ke=P(Y,[["render",pe],["__scopeId","data-v-fb9ac17c"]]);export{ke as D};
