import{k as u,o as c,b as d,i as s,t as l,p as h,l as k,a as w,m as r,F as b,r as C,u as i,q as y,s as S,w as M,T,c as $,v as I}from"./entry.78c15bff.js";import{_ as L}from"./h1-bg.6adea713.js";const t=e=>(h("data-v-4937fede"),e=e(),k(),e),j={class:"modal d-block show","aria-labelledby":"","aria-hidden":"true",id:"workModal",tabindex:"-1",ref:"modalEle"},B={class:"modal-dialog modal-dialog-centered"},V={class:"modal-content"},A={class:"modal-body"},x=t(()=>s("i",{class:"las la-times"},null,-1)),E=[x],W=["src"],H={class:"container-fluid"},R={class:"row"},J={class:"col-lg-7 left"},N={class:"title"},P={class:"description"},U={class:"col-lg-5 right"},D={class:"client mb-3"},F=t(()=>s("i",{class:"las la-user-alt"},null,-1)),q=t(()=>s("span",{class:"title"},"Client: ",-1)),z={class:"value"},O={class:"completed mb-3"},G=t(()=>s("i",{class:"las la-calendar-check"},null,-1)),K=t(()=>s("span",{class:"title"},"Completed: ",-1)),Q={class:"value"},X={class:"skills"},Y=t(()=>s("i",{class:"las la-flask"},null,-1)),Z=t(()=>s("span",{class:"title"},"Skills: ",-1)),ss={class:"value"},es=t(()=>s("div",{class:"project-link"},[s("i",{class:"las la-link"}),s("a",{href:""},"Project Link")],-1)),ts={__name:"ViewWorkModal",props:{show:{type:Boolean,default:!1},item:{type:Object,default:{}}},setup(e){return(o,a)=>(c(),d("div",j,[s("div",B,[s("div",V,[s("div",A,[s("button",{onClick:a[0]||(a[0]=_=>o.$emit("close")),type:"button",class:"modal-close-button","data-bs-dismiss":"modal","aria-label":"Close"},E),s("img",{src:e.item.image,alt:"work"},null,8,W),s("div",H,[s("div",R,[s("div",J,[s("h2",N,l(e.item.title),1),s("p",P,l(e.item.description),1)]),s("div",U,[s("div",D,[F,q,s("span",z,l(e.item.client),1)]),s("div",O,[G,K,s("span",Q,l(e.item.completed),1)]),s("div",X,[Y,Z,s("span",ss,l(e.item.skills),1)]),es])])])])])])],512))}},os=u(ts,[["__scopeId","data-v-4937fede"]]),as=""+new URL("work-1.4236f0f1.png",import.meta.url).href,ls=""+new URL("work-2.b5bcc39f.png",import.meta.url).href,is=""+new URL("work-3.2d023b93.png",import.meta.url).href;const cs=e=>(h("data-v-257deb45"),e=e(),k(),e),ns=cs(()=>s("div",{class:"text-center"},[s("header",{class:"has-bg"},[s("img",{src:L,alt:"h1 bg"}),s("h1",null,"My Work")])],-1)),ds={class:"container"},rs={class:"row work-items"},_s=["onClick","data-groups"],ps={class:"wrap"},ms=["src"],us={__name:"work",setup(e){w({titleTemplate:"%s | My Work"});const o=r(!1),a=r({}),_=r([{image:as,title:"Barbershop Co.",description:"BarbershopCo application can help both customers and the barbershop to manage the schedules online.",client:"Barbershop Co.",completed:"DECEMBER 2023",skills:"Vue.js, HTML, CSS, Bootstrap, JavaScript",projectLink:!1,groups:'["putti"]'},{image:ls,title:"Putti Apps Admin Template",description:"Admin template for putti apps future projects/clients",client:"Putti Apps",completed:"March 2023",skills:"Vue.js, Vuetify, HTML, CSS, JavaScript",projectLink:"#",groups:'["putti"]'},{image:is,title:"All Things Considered (AllTC)",description:"All Things Considered (AllTC) is a platform where you can search or discover tons of brands and associations.",client:"AllTC",completed:"March 2023",skills:"Vue.js, HTML, CSS, JavaScript",projectLink:!1,groups:'["fourello"]'}]),v=p=>{o.value=!0,a.value=p},f=()=>{o.value=!1,a.value={}};return(p,m)=>(c(),d("div",null,[s("div",{id:"my_work",class:y({"active blur":i(o)})},[ns,s("div",ds,[s("div",rs,[(c(!0),d(b,null,C(i(_),(n,g)=>(c(),d("div",{class:"col-lg-4 item",onClick:hs=>v(n),key:g,"data-groups":n.groups},[s("div",ps,[s("img",{src:n.image,alt:"work"},null,8,ms)])],8,_s))),128))])])],2),S(T,{name:"modal",appear:""},{default:M(()=>[i(o)?(c(),$(os,{key:0,show:i(o),item:i(a),onClose:m[0]||(m[0]=n=>f())},null,8,["show","item"])):I("",!0)]),_:1})]))}},fs=u(us,[["__scopeId","data-v-257deb45"]]);export{fs as default};
