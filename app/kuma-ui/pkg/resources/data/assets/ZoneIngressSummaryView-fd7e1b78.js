import{d as g,l as y,o as r,c as p,e as i,w as e,f as s,t as a,q as n,Z as d,b as _,F as u,a as m,p as l,y as x,z as S,aD as V,_ as O}from"./index-7a0947c2.js";import{S as A}from"./StatusBadge-c02c8868.js";import{T as v}from"./TextWithCopyButton-3aa03737.js";import{_ as Z}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-4198f65d.js";import"./CopyButton-a5c25cdd.js";import"./index-fce48c05.js";const B={class:"stack"},R=g({__name:"ZoneIngressSummary",props:{zoneIngressOverview:{}},setup(c){const{t}=y(),o=c;return(f,w)=>(r(),p("div",B,[i(d,null,{title:e(()=>[s(a(n(t)("http.api.property.status")),1)]),body:e(()=>[i(A,{status:o.zoneIngressOverview.state},null,8,["status"])]),_:1}),s(),i(d,null,{title:e(()=>[s(a(n(t)("http.api.property.address")),1)]),body:e(()=>[o.zoneIngressOverview.zoneIngress.socketAddress.length>0?(r(),_(v,{key:0,text:o.zoneIngressOverview.zoneIngress.socketAddress},null,8,["text"])):(r(),p(u,{key:1},[s(a(n(t)("common.detail.none")),1)],64))]),_:1}),s(),i(d,null,{title:e(()=>[s(a(n(t)("http.api.property.advertisedAddress")),1)]),body:e(()=>[o.zoneIngressOverview.zoneIngress.advertisedSocketAddress.length>0?(r(),_(v,{key:0,text:o.zoneIngressOverview.zoneIngress.advertisedSocketAddress},null,8,["text"])):(r(),p(u,{key:1},[s(a(n(t)("common.detail.none")),1)],64))]),_:1})]))}}),C=c=>(x("data-v-ff8fc102"),c=c(),S(),c),T={class:"summary-title-wrapper"},b=C(()=>l("img",{"aria-hidden":"true",src:V},null,-1)),D={class:"summary-title"},N={key:1,class:"stack"},$=g({__name:"ZoneIngressSummaryView",props:{name:{},zoneIngressOverview:{default:void 0}},setup(c){const{t}=y(),o=c;return(f,w)=>{const I=m("RouteTitle"),z=m("RouterLink"),h=m("AppView"),k=m("RouteView");return r(),_(k,{name:"zone-ingress-summary-view"},{default:e(()=>[i(h,null,{title:e(()=>[l("div",T,[b,s(),l("h2",D,[i(z,{to:{name:"zone-ingress-detail-view",params:{zone:o.name}}},{default:e(()=>[i(I,{title:n(t)("zone-ingresses.routes.item.title",{name:o.name})},null,8,["title"])]),_:1},8,["to"])])])]),default:e(()=>[s(),o.zoneIngressOverview===void 0?(r(),_(Z,{key:0},{message:e(()=>[l("p",null,a(n(t)("common.collection.summary.empty_message",{type:"ZoneIngress"})),1)]),default:e(()=>[s(a(n(t)("common.collection.summary.empty_title",{type:"ZoneIngress"}))+" ",1)]),_:1})):(r(),p("div",N,[l("div",null,[l("h3",null,a(n(t)("zone-ingresses.routes.item.overview")),1),s(),i(R,{class:"mt-4","zone-ingress-overview":o.zoneIngressOverview},null,8,["zone-ingress-overview"])])]))]),_:1})]),_:1})}}});const G=O($,[["__scopeId","data-v-ff8fc102"]]);export{G as default};
