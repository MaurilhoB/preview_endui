import{n as f,m as c,b as l,g as b,d as o,e as d,h as p,i as _}from"./2O9_0Pyv.js";let s=!1,i=Symbol();function v(e,u,r){const n=r[u]??(r[u]={store:null,source:c(void 0),unsubscribe:f});if(n.store!==e&&!(i in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=f;else{var t=!0;n.unsubscribe=l(e,a=>{t?n.source.v=a:_(n.source,a)}),t=!1}return e&&i in r?b(e):o(n.source)}function y(){const e={};function u(){d(()=>{for(var r in e)e[r].unsubscribe();p(e,i,{enumerable:!1,value:!0})})}return[e,u]}function m(e){var u=s;try{return s=!1,[e(),s]}finally{s=u}}export{v as a,m as c,y as s};
