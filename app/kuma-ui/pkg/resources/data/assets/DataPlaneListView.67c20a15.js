import{J as fe,O,o as r,f as p,h as a,d as A,w as I,e as R,t as f,p as ge,L as g,F as w,j as C,b as N,n as K,cx as ee,a2 as Z,cy as te,cz as be,r as T,y as De,C as ae,D as se,_ as ne,q as we,cA as ke,cB as Pe,a3 as Te,k as Ce,u as Ee,x as Oe,a0 as X,cC as Se,cD as Ie,cE as Ke,a5 as Ae,a6 as Ve,cF as Ue,a4 as Le,K as S,i as Ne,cG as Re}from"./index.5371ce6a.js";import{g as Me}from"./tableDataUtils.0a8d3f2d.js";import{D as Be}from"./DataOverview.507aa4c7.js";import{E as $e}from"./EntityTag.8896cfa4.js";import{Y as He}from"./YamlView.f5ba09e5.js";import{_ as xe}from"./ErrorBlock.a4674dd2.js";import"./CodeBlock.2c568e63.js";import"./index.58caa11d.js";const oe=[{key:"status",label:"Status"},{key:"name",label:"Name"},{key:"mesh",label:"Mesh"},{key:"type",label:"Type"},{key:"service",label:"Service"},{key:"protocol",label:"Protocol"},{key:"zone",label:"Zone"},{key:"lastConnected",label:"Last Connected"},{key:"lastUpdated",label:"Last Updated"},{key:"totalUpdates",label:"Total Updates"},{key:"dpVersion",label:"Kuma DP version"},{key:"envoyVersion",label:"Envoy version"},{key:"details",label:"Details",hideLabel:!0}],ze=["name","details"],je=oe.filter(e=>!ze.includes(e.key)).map(e=>({tableHeaderKey:e.key,label:e.label,isChecked:!1})),ie=["status","name","mesh","type","service","protocol","zone","lastUpdated","dpVersion","details"];function qe(e,t=ie){return oe.filter(o=>t.includes(o.key)?e?!0:o.key!=="zone":!1)}const W={get(e){try{const t=window.localStorage.getItem(e);return t!==null?JSON.parse(t):null}catch{return null}},set(e,t){try{const o=JSON.stringify(t);window.localStorage.setItem(e,o)}catch{}},remove(e){try{window.localStorage.removeItem(e)}catch{}}};function q(e,t){const o=window.history.state;if(o===null)return;const u=o.current.indexOf("?"),n=u>-1?o.current.substring(u):"",c=new URLSearchParams(n);t!=null?c.set(e,String(t)):c.has(e)&&c.delete(e);const b=c.toString(),D=b===""?"":"?"+b;let _="";if(u>-1?_=o.current.substring(0,u)+D:_=o.current+D,o.current!==_){const i=Object.assign({},o);i.current=_,window.history.replaceState(i,"","#"+_)}}const k=e=>(ae("data-v-532cb754"),e=e(),se(),e),Fe={class:"entity-summary entity-section-list"},Ge={class:"entity-title"},Qe=k(()=>a("span",{class:"kutil-sr-only"},"Data plane:",-1)),Ye={class:"definition"},Je=k(()=>a("span",null,"Mesh:",-1)),Ze={key:0},Xe=k(()=>a("h4",null,"Tags",-1)),We={class:"entity-tag-list"},et={key:1},tt=k(()=>a("h4",null,"Dependencies",-1)),at={class:"mt-2 heading-with-icon"},st=R(" Warnings "),nt=k(()=>a("h4",null,"Insights",-1)),ot={class:"entity-section-list"},it=["data-testid"],lt=k(()=>a("span",null,"Connect time:",-1)),rt=["data-testid"],dt=k(()=>a("span",null,"Disconnect time:",-1)),ct={class:"definition"},pt=k(()=>a("span",null,"Control plane instance ID:",-1)),ut={key:0},mt=k(()=>a("summary",null," Responses (acknowledged / sent) ",-1)),ht=["data-testid"],yt=fe({__name:"DataPlaneEntitySummary",props:{dataPlaneOverview:{type:Object,required:!0}},setup(e){const t=e,o={Online:"success",Offline:"danger","Partially degraded":"warning"},u=O(()=>{const{name:i,mesh:d,dataplane:m}=t.dataPlaneOverview;return{type:"Dataplane",name:i,mesh:d,networking:m.networking}}),n=O(()=>ee(t.dataPlaneOverview.dataplane)),c=O(()=>{const i=Array.from(t.dataPlaneOverview.dataplaneInsight.subscriptions);return i.reverse(),i.map(d=>{const m=d.connectTime!==void 0?Z(d.connectTime):"\u2014",l=d.disconnectTime!==void 0?Z(d.disconnectTime):"\u2014",s=Object.entries(d.status).filter(([h])=>!["total","lastUpdateTime"].includes(h)).map(([h,v])=>{var V,M,U,L,B;const P=`${(V=v.responsesAcknowledged)!=null?V:0} / ${(M=v.responsesSent)!=null?M:0}`;return{type:h.toUpperCase(),ratio:P,responsesSent:(U=v.responsesSent)!=null?U:0,responsesAcknowledged:(L=v.responsesAcknowledged)!=null?L:0,responsesRejected:(B=v.responsesRejected)!=null?B:0}});return{subscription:d,formattedConnectDate:m,formattedDisconnectDate:l,statuses:s}})}),b=O(()=>{const{status:i}=te(t.dataPlaneOverview.dataplane,t.dataPlaneOverview.dataplaneInsight);return{title:i,appearance:o[i]}}),D=O(()=>{const i=be(t.dataPlaneOverview.dataplaneInsight);return i!==null?Object.entries(i).map(([d,m])=>({name:d,version:m})):[]}),_=O(()=>{const{subscriptions:i}=t.dataPlaneOverview.dataplaneInsight;if(i.length===0)return[];const d=[],m=i[i.length-1],l=m.version.envoy,s=m.version.kumaDp,h=l.kumaDpCompatible!==void 0?l.kumaDpCompatible:!0,v=s.kumaCpCompatible!==void 0?s.kumaCpCompatible:!0;if(!h){const P=`Envoy ${l.version} is not supported by Kuma DP ${s.version}.`;d.push(P)}if(!v){const P=`Kuma DP ${s.version} is not supported by this Kuma control plane.`;d.push(P)}return d});return(i,d)=>{const m=T("router-link");return r(),p("div",Fe,[a("section",null,[a("h3",Ge,[Qe,A(m,{to:{name:"data-plane-detail-view",params:{mesh:e.dataPlaneOverview.mesh,dataPlane:e.dataPlaneOverview.name}}},{default:I(()=>[R(f(e.dataPlaneOverview.name),1)]),_:1},8,["to"]),a("div",{class:ge(`status status--${g(b).appearance}`),"data-testid":"data-plane-status-badge"},f(g(b).title.toLowerCase()),3)]),a("div",Ye,[Je,a("span",null,f(e.dataPlaneOverview.mesh),1)])]),g(n).length>0?(r(),p("section",Ze,[Xe,a("div",We,[(r(!0),p(w,null,C(g(n),(l,s)=>(r(),N($e,{key:s,tag:l},null,8,["tag"]))),128))])])):K("",!0),g(D).length>0?(r(),p("section",et,[tt,(r(!0),p(w,null,C(g(D),(l,s)=>(r(),p("div",{key:s,class:"definition"},[a("span",null,f(l.name)+":",1),a("span",null,f(l.version),1)]))),128)),g(_).length>0?(r(),p(w,{key:0},[a("h5",at,[st,A(g(De),{class:"ml-1",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"20"})]),(r(!0),p(w,null,C(g(_),(l,s)=>(r(),p("p",{key:s},f(l),1))),128))],64)):K("",!0)])):K("",!0),g(c).length>0?(r(),p(w,{key:2},[a("section",null,[nt,a("div",ot,[(r(!0),p(w,null,C(g(c),(l,s)=>(r(),p("div",{key:s},[a("div",{class:"definition","data-testid":`data-plane-connect-time-${s}`},[lt,a("span",null,f(l.formattedConnectDate),1)],8,it),a("div",{class:"definition","data-testid":`data-plane-disconnect-time-${s}`},[dt,a("span",null,f(l.formattedDisconnectDate),1)],8,rt),a("div",ct,[pt,a("span",null,f(l.subscription.controlPlaneInstanceId),1)]),l.statuses.length>0?(r(),p("details",ut,[mt,(r(!0),p(w,null,C(l.statuses,(h,v)=>(r(),p("div",{key:`${s}-${v}`,class:"definition","data-testid":`data-plane-subscription-status-${s}-${v}`},[a("span",null,f(h.type)+":",1),a("span",null,f(h.ratio),1)],8,ht))),128))])):K("",!0)]))),128))])]),a("section",null,[A(He,{content:g(u)},null,8,["content"])])],64)):K("",!0)])}}});const vt=ne(yt,[["__scopeId","data-v-532cb754"]]);const _t={name:"DataPlaneListView",dataPlaneTypes:["All","Standard","Gateway (builtin)","Gateway (provided)"],emptyStateMsg:"There are no data plane proxies present.",nsBackButtonRoute:{name:"data-plane-list-view"},dataplaneApiParams:{},components:{DataOverview:Be,DataPlaneEntitySummary:vt,KButton:we,KDropdownItem:ke,KDropdownMenu:Pe,EmptyBlock:xe},props:{name:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},data(){return{visibleTableHeaderKeys:ie,productName:Te,isLoading:!0,isEmpty:!1,hasError:!1,tableDataIsEmpty:!1,tableData:{headers:[],data:[]},pageSize:50,next:null,shownTLSTab:!1,rawData:null,filteredDataPlaneType:"All",pageOffset:this.offset,dataPlaneOverview:null}},computed:{...Ce({environment:"config/getEnvironment",queryNamespace:"getItemQueryNamespace",multicluster:"config/getMulticlusterStatus"}),dataplaneWizardRoute(){return this.environment==="universal"?{name:"universal-dataplane"}:{name:"kubernetes-dataplane"}},filteredTableData(){const e=this.tableData.data.filter(o=>this.filteredDataPlaneType==="All"?!0:o.type.toLowerCase()===this.filteredDataPlaneType.toLowerCase()),t=qe(this.multicluster,this.visibleTableHeaderKeys);return{data:e,headers:t}},columnsDropdownItems(){return je.filter(e=>this.multicluster?!0:e.tableHeaderKey!=="zone").map(e=>{const t=this.visibleTableHeaderKeys.includes(e.tableHeaderKey);return{...e,isChecked:t}})}},watch:{"$route.params.mesh":function(){this.$route.name==="data-plane-list-view"&&(this.isLoading=!0,this.isEmpty=!1,this.hasError=!1,this.tableDataIsEmpty=!1,this.loadData(0))}},created(){const e=W.get("dpVisibleTableHeaderKeys");Array.isArray(e)&&(this.visibleTableHeaderKeys=e)},beforeMount(){this.loadData(this.offset)},methods:{stopPropagatingClickEvent(e){e.stopPropagation()},updateVisibleTableHeaders(e,t){const o=e.target,u=this.visibleTableHeaderKeys.findIndex(n=>n===t);o.checked&&u===-1?this.visibleTableHeaderKeys.push(t):!o.checked&&u>-1&&this.visibleTableHeaderKeys.splice(u,1),W.set("dpVisibleTableHeaderKeys",Array.from(new Set(this.visibleTableHeaderKeys)))},onCreateClick(){Ee.logger.info(Oe.CREATE_DATA_PLANE_PROXY_CLICKED)},getEmptyState(){return{title:"No Data",message:this.$options.emptyStateMsg}},async parseData(e){var G,Q,Y;const{dataplane:t={},dataplaneInsight:o={}}=e,{name:u="",mesh:n=""}=e,{subscriptions:c=[]}=o,b={name:"data-plane-detail-view",params:{mesh:n,dataPlane:u}},D={name:"mesh-child",params:{mesh:n}},_=["kuma.io/protocol","kuma.io/service","kuma.io/zone"],i=ee(t).filter(y=>_.includes(y.label)),d=(G=i.find(y=>y.label==="kuma.io/service"))==null?void 0:G.value,m=(Q=i.find(y=>y.label==="kuma.io/protocol"))==null?void 0:Q.value,l=(Y=i.find(y=>y.label==="kuma.io/zone"))==null?void 0:Y.value;let s;d!==void 0&&(s={name:"service-insight-detail-view",params:{mesh:n,service:d}});const{status:h}=te(t,o),{totalUpdates:v,totalRejectedUpdates:P,dpVersion:V,envoyVersion:M,selectedTime:U,selectedUpdateTime:L,version:B}=c.reduce((y,le)=>{const{status:re={},connectTime:de,version:J={}}=le,{total:ce={},lastUpdateTime:pe}=re,{responsesSent:ue="0",responsesRejected:me="0"}=ce,{kumaDp:he={},envoy:ye={}}=J,{version:ve}=he,{version:_e}=ye;let{selectedTime:$,selectedUpdateTime:H}=y;const z=Date.parse(de),j=Date.parse(pe);return z&&(!$||z>$)&&($=z),j&&(!H||j>H)&&(H=j),{totalUpdates:y.totalUpdates+parseInt(ue,10),totalRejectedUpdates:y.totalRejectedUpdates+parseInt(me,10),dpVersion:ve||y.dpVersion,envoyVersion:_e||y.envoyVersion,selectedTime:$,selectedUpdateTime:H,version:J||y.version}},{totalUpdates:0,totalRejectedUpdates:0,dpVersion:"\u2014",envoyVersion:"\u2014",selectedTime:NaN,selectedUpdateTime:NaN,version:{}}),E={name:u,nameRoute:b,mesh:n,meshRoute:D,zone:l!=null?l:"\u2014",service:d!=null?d:"\u2014",serviceInsightRoute:s,protocol:m!=null?m:"\u2014",status:h,totalUpdates:v,totalRejectedUpdates:P,dpVersion:V,envoyVersion:M,warnings:[],unsupportedEnvoyVersion:!1,unsupportedKumaDPVersion:!1,kumaDpAndKumaCpMismatch:!1,lastUpdated:L?X(new Date(L).toUTCString()):"\u2014",lastConnected:U?X(new Date(U).toUTCString()):"\u2014",type:Se(t)},{kind:x}=Ie(B);switch(x!==Ke&&E.warnings.push(x),x){case Ve:E.unsupportedEnvoyVersion=!0;break;case Ae:E.unsupportedKumaDPVersion=!0;break}if(this.multicluster){const{compatible:y}=await Ue(i,V);y||(E.warnings.push(Le),E.kumaDpAndKumaCpMismatch=!0)}return E},async loadData(e){var u;this.isLoading=!0,this.pageOffset=e,q("offset",e>0?e:null);const t=this.$route.params.mesh||null,o=this.$route.query.ns||null;try{const{data:n,next:c}=await Me({getSingleEntity:S.getDataplaneOverviewFromMesh.bind(S),getAllEntities:S.getAllDataplaneOverviews.bind(S),getAllEntitiesFromMesh:S.getAllDataplaneOverviewsFromMesh.bind(S),size:this.pageSize,offset:e,mesh:t,query:o,params:{...this.$options.dataplaneApiParams}});if(n.length>0){this.next=c,this.rawData=n,this.selectDataPlaneOverview((u=this.name)!=null?u:n[0].name);const b=await Promise.all(n.map(D=>this.parseData(D)));this.tableData.data=b,this.tableDataIsEmpty=!1,this.isEmpty=!1}else this.selectDataPlaneOverview(null),this.tableData.data=[],this.tableDataIsEmpty=!0,this.isEmpty=!0}catch(n){this.hasError=!0,this.isEmpty=!0,console.error(n)}finally{this.isLoading=!1}},async selectDataPlaneOverview(e){var t;e?(this.dataPlaneOverview=(t=this.rawData.find(o=>o.name===e))!=null?t:this.rawData[0],q("name",this.dataPlaneOverview.name)):(this.dataPlaneOverview=null,q("name",null))}}},F=e=>(ae("data-v-4d38a3b2"),e=e(),se(),e),ft={class:"data-planes-container"},gt={class:"data-planes-content component-frame"},bt=F(()=>a("label",{for:"data-planes-type-filter",class:"mr-2"}," Type: ",-1)),Dt=["value"],wt=["for"],kt=["id","checked","onChange"],Pt=F(()=>a("span",{class:"custom-control-icon"}," + ",-1)),Tt=R(" Create data plane proxy "),Ct=F(()=>a("span",{class:"custom-control-icon"}," \u2190 ",-1)),Et=R(" View All "),Ot={class:"data-planes-sidebar component-frame"};function St(e,t,o,u,n,c){var l;const b=T("KDropdownItem"),D=T("KDropdownMenu"),_=T("KButton"),i=T("DataOverview"),d=T("DataPlaneEntitySummary"),m=T("EmptyBlock");return r(),p("div",ft,[a("div",gt,[A(i,{"selected-entity-name":(l=n.dataPlaneOverview)==null?void 0:l.name,"page-size":n.pageSize,"has-error":n.hasError,"is-loading":n.isLoading,"empty-state":c.getEmptyState(),"table-data":c.filteredTableData,"table-data-is-empty":n.tableDataIsEmpty,"show-details":"",next:n.next,"page-offset":n.pageOffset,onTableAction:t[2]||(t[2]=s=>c.selectDataPlaneOverview(s.name)),onLoadData:t[3]||(t[3]=s=>c.loadData(s))},{additionalControls:I(()=>[a("div",null,[bt,Ne(a("select",{id:"data-planes-type-filter","onUpdate:modelValue":t[0]||(t[0]=s=>n.filteredDataPlaneType=s),"data-testid":"data-planes-type-filter"},[(r(!0),p(w,null,C(e.$options.dataPlaneTypes,(s,h)=>(r(),p("option",{key:h,value:s},f(s),9,Dt))),128))],512),[[Re,n.filteredDataPlaneType]])]),A(D,{label:"Columns",icon:"cogwheel","button-appearance":"outline"},{items:I(()=>[a("div",{onClick:t[1]||(t[1]=(...s)=>c.stopPropagatingClickEvent&&c.stopPropagatingClickEvent(...s))},[(r(!0),p(w,null,C(c.columnsDropdownItems,(s,h)=>(r(),N(b,{key:h,class:"table-header-selector-item",item:s},{default:I(()=>[a("label",{for:`data-plane-table-header-checkbox-${h}`,class:"k-checkbox table-header-selector-item-checkbox"},[a("input",{id:`data-plane-table-header-checkbox-${h}`,checked:s.isChecked,type:"checkbox",class:"k-input",onChange:v=>c.updateVisibleTableHeaders(v,s.tableHeaderKey)},null,40,kt),R(" "+f(s.label),1)],8,wt)]),_:2},1032,["item"]))),128))])]),_:1}),A(_,{class:"add-dp-button",appearance:"primary",to:c.dataplaneWizardRoute,"data-testid":"data-plane-create-data-plane-button",onClick:c.onCreateClick},{default:I(()=>[Pt,Tt]),_:1},8,["to","onClick"]),e.$route.query.ns?(r(),N(_,{key:0,appearance:"primary",to:e.$options.nsBackButtonRoute,"data-testid":"data-plane-ns-back-button"},{default:I(()=>[Ct,Et]),_:1},8,["to"])):K("",!0)]),_:1},8,["selected-entity-name","page-size","has-error","is-loading","empty-state","table-data","table-data-is-empty","next","page-offset"])]),a("div",Ot,[n.dataPlaneOverview!==null?(r(),N(d,{key:0,"data-plane-overview":n.dataPlaneOverview},null,8,["data-plane-overview"])):(r(),N(m,{key:1}))])])}const Mt=ne(_t,[["render",St],["__scopeId","data-v-4d38a3b2"]]);export{Mt as default};
