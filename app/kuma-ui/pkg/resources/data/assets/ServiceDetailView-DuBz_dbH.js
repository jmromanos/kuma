import{d as E,a as p,o as t,b as m,w as a,e as o,a1 as w,$ as I,c,m as f,U as S,f as n,t as l,T as N,F as u,aw as K,q as y,P as L,p as v,K as V,Q as q,B as F,_ as A}from"./index-IotYe1KN.js";import{A as O}from"./AppCollection-atohepkv.js";import{F as U}from"./FilterBar-CQ_0oUzM.js";import{S as P}from"./StatusBadge-CbARFMK9.js";import{S as W}from"./SummaryView-ChaOsfK2.js";const Z={key:2,class:"stack"},j={class:"columns"},Q={key:0},G={key:1},H=E({__name:"ServiceDetailView",setup(J){return(M,X)=>{const z=p("KCard"),g=p("RouterLink"),$=p("KTooltip"),B=p("RouterView"),h=p("DataSource"),T=p("AppView"),R=p("RouteView");return t(),m(h,{src:"/me"},{default:a(({data:C})=>[C?(t(),m(R,{key:0,name:"service-detail-view",params:{mesh:"",service:"",page:1,size:C.pageSize,s:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({can:x,route:s,t:i})=>[o(T,null,{default:a(()=>[o(h,{src:`/meshes/${s.params.mesh}/service-insights/${s.params.service}`},{default:a(({data:d,error:b})=>[b?(t(),m(w,{key:0,error:b},null,8,["error"])):d===void 0?(t(),m(I,{key:1})):(t(),c("div",Z,[o(z,null,{default:a(()=>{var r,_;return[f("div",j,[o(S,null,{title:a(()=>[n(l(i("http.api.property.status")),1)]),body:a(()=>[o(P,{status:d.status},null,8,["status"])]),_:2},1024),n(),o(S,null,{title:a(()=>[n(l(i("http.api.property.address")),1)]),body:a(()=>[d.addressPort?(t(),m(N,{key:0,text:d.addressPort},null,8,["text"])):(t(),c(u,{key:1},[n(l(i("common.detail.none")),1)],64))]),_:2},1024),n(),o(K,{online:((r=d.dataplanes)==null?void 0:r.online)??0,total:((_=d.dataplanes)==null?void 0:_.total)??0},{title:a(()=>[n(l(i("http.api.property.dataPlaneProxies")),1)]),_:2},1032,["online","total"])])]}),_:2},1024),n(),f("div",null,[f("h3",null,l(i("services.detail.data_plane_proxies")),1),n(),o(z,{class:"mt-4"},{default:a(()=>[o(h,{src:`/meshes/${s.params.mesh}/dataplanes/for/${s.params.service}?page=${s.params.page}&size=${s.params.size}&search=${s.params.s}`},{default:a(({data:r,error:_})=>[_!==void 0?(t(),m(w,{key:0,error:_},null,8,["error"])):(t(),m(O,{key:1,class:"data-plane-collection","data-testid":"data-plane-collection","page-number":s.params.page,"page-size":s.params.size,headers:[{label:"Name",key:"name"},{label:"Namespace",key:"namespace"},...x("use zones")?[{label:"Zone",key:"zone"}]:[],{label:"Certificate Info",key:"certificate"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0}],items:r==null?void 0:r.items,total:r==null?void 0:r.total,error:_,"is-selected-row":e=>e.name===s.params.dataPlane,"summary-route-name":"service-data-plane-summary-view","empty-state-message":i("common.emptyState.message",{type:"Data Plane Proxies"}),"empty-state-cta-to":i("data-planes.href.docs.data_plane_proxy"),"empty-state-cta-text":i("common.documentation"),onChange:s.update},{toolbar:a(()=>[o(U,{class:"data-plane-proxy-filter",placeholder:"name:dataplane-name",query:s.params.s,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...x("use zones")&&{zone:{description:"filter by “kuma.io/zone” value"}}},onChange:e=>s.update({...Object.fromEntries(e.entries())})},null,8,["query","fields","onChange"])]),name:a(({row:e})=>[o(g,{class:"name-link",to:{name:"service-data-plane-summary-view",params:{mesh:e.mesh,dataPlane:e.id},query:{page:s.params.page,size:s.params.size,s:s.params.s}}},{default:a(()=>[n(l(e.name),1)]),_:2},1032,["to"])]),namespace:a(({row:e})=>[n(l(e.namespace),1)]),zone:a(({row:e})=>[e.zone?(t(),m(g,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.zone}}},{default:a(()=>[n(l(e.zone),1)]),_:2},1032,["to"])):(t(),c(u,{key:1},[n(l(i("common.collection.none")),1)],64))]),certificate:a(({row:e})=>{var k;return[(k=e.dataplaneInsight.mTLS)!=null&&k.certificateExpirationTime?(t(),c(u,{key:0},[n(l(i("common.formats.datetime",{value:Date.parse(e.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(t(),c(u,{key:1},[n(l(i("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:a(({row:e})=>[o(P,{status:e.status},null,8,["status"])]),warnings:a(({row:e})=>[e.isCertExpired||e.warnings.length>0?(t(),m($,{key:0},{content:a(()=>[f("ul",null,[e.warnings.length>0?(t(),c("li",Q,l(i("data-planes.components.data-plane-list.version_mismatch")),1)):y("",!0),n(),e.isCertExpired?(t(),c("li",G,l(i("data-planes.components.data-plane-list.cert_expired")),1)):y("",!0)])]),default:a(()=>[n(),o(L,{class:"mr-1",size:v(V)},null,8,["size"])]),_:2},1024)):(t(),c(u,{key:1},[n(l(i("common.collection.none")),1)],64))]),details:a(({row:e})=>[o(g,{class:"details-link","data-testid":"details-link",to:{name:"data-plane-detail-view",params:{dataPlane:e.id}}},{default:a(()=>[n(l(i("common.collection.details_link"))+" ",1),o(v(q),{decorative:"",size:v(V)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["page-number","page-size","headers","items","total","error","is-selected-row","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"])),n(),s.params.dataPlane?(t(),m(B,{key:2},{default:a(e=>[o(W,{onClose:k=>s.replace({name:s.name,params:{mesh:s.params.mesh},query:{page:s.params.page,size:s.params.size,s:s.params.s}})},{default:a(()=>[typeof r<"u"?(t(),m(F(e.Component),{key:0,items:r.items},null,8,["items"])):y("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):y("",!0)]),_:2},1032,["src"])]),_:2},1024)])]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["params"])):y("",!0)]),_:1})}}}),te=A(H,[["__scopeId","data-v-e913a0d1"]]);export{te as default};
