import{F as ee,G as ae,H as K,I as N,j as I,J as re,K as ne,d as q,D as ie,L as le,M as B,O as $,P as R,Q as se,R as P,S as Q,T as te,U as D,V as W,W as fe,X,Y as M,Z as F,_ as b,m as ue,$ as G,a0 as ve,a1 as oe,a2 as de,a3 as _e,a4 as ce,a5 as he,a6 as me,a7 as pe}from"./2O9_0Pyv.js";function ge(i,e){return e}function Ae(i,e,a,f){for(var v=[],d=e.length,u=0;u<d;u++)de(e[u].e,v,!0);var _=d>0&&v.length===0&&a!==null;if(_){var A=a.parentNode;_e(A),A.append(a),f.clear(),g(i,e[0].prev,e[d-1].next)}ce(v,()=>{for(var h=0;h<d;h++){var o=e[h];_||(f.delete(o.k),g(i,o.prev,o.next)),he(o.e,!_)}})}function Ie(i,e,a,f,v,d=null){var u=i,_={flags:e,items:new Map,first:null},A=(e&K)!==0;if(A){var h=i;u=I?N(re(h)):h.appendChild(ee())}I&&ne();var o=null,x=!1,l=ie(()=>{var t=a();return ve(t)?t:t==null?[]:W(t)});ae(()=>{var t=q(l),r=t.length;if(x&&r===0)return;x=r===0;let T=!1;if(I){var m=u.data===le;m!==(r===0)&&(u=B(),N(u),$(!1),T=!0)}if(I){for(var p=null,E,c=0;c<r;c++){if(R.nodeType===8&&R.data===se){u=R,T=!0,$(!1);break}var n=t[c],s=f(n,c);E=Z(R,_,p,null,n,s,c,v,e,a),_.items.set(s,E),p=E}r>0&&N(B())}I||Ee(t,_,u,v,e,f,a),d!==null&&(r===0?o?P(o):o=Q(()=>d(u)):o!==null&&te(o,()=>{o=null})),T&&$(!0),q(l)}),I&&(u=R)}function Ee(i,e,a,f,v,d,u){var L,O,V,U;var _=(v&oe)!==0,A=(v&(M|b))!==0,h=i.length,o=e.items,x=e.first,l=x,t,r=null,T,m=[],p=[],E,c,n,s;if(_)for(s=0;s<h;s+=1)E=i[s],c=d(E,s),n=o.get(c),n!==void 0&&((L=n.a)==null||L.measure(),(T??(T=new Set)).add(n));for(s=0;s<h;s+=1){if(E=i[s],c=d(E,s),n=o.get(c),n===void 0){var z=l?l.e.nodes_start:a;r=Z(z,e,r,r===null?e.first:r.next,E,c,s,f,v,u),o.set(c,r),m=[],p=[],l=r.next;continue}if(A&&Te(n,E,s,v),(n.e.f&D)!==0&&(P(n.e),_&&((O=n.a)==null||O.unfix(),(T??(T=new Set)).delete(n))),n!==l){if(t!==void 0&&t.has(n)){if(m.length<p.length){var C=p[0],S;r=C.prev;var k=m[0],w=m[m.length-1];for(S=0;S<m.length;S+=1)J(m[S],C,a);for(S=0;S<p.length;S+=1)t.delete(p[S]);g(e,k.prev,w.next),g(e,r,k),g(e,w,C),l=C,r=w,s-=1,m=[],p=[]}else t.delete(n),J(n,l,a),g(e,n.prev,n.next),g(e,n,r===null?e.first:r.next),g(e,r,n),r=n;continue}for(m=[],p=[];l!==null&&l.k!==c;)(l.e.f&D)===0&&(t??(t=new Set)).add(l),p.push(l),l=l.next;if(l===null)continue;n=l}m.push(n),r=n,l=n.next}if(l!==null||t!==void 0){for(var y=t===void 0?[]:W(t);l!==null;)(l.e.f&D)===0&&y.push(l),l=l.next;var H=y.length;if(H>0){var j=(v&K)!==0&&h===0?a:null;if(_){for(s=0;s<H;s+=1)(V=y[s].a)==null||V.measure();for(s=0;s<H;s+=1)(U=y[s].a)==null||U.fix()}Ae(e,y,j,o)}}_&&fe(()=>{var Y;if(T!==void 0)for(n of T)(Y=n.a)==null||Y.apply()}),X.first=e.first&&e.first.e,X.last=r&&r.e}function Te(i,e,a,f){(f&M)!==0&&F(i.v,e),(f&b)!==0?F(i.i,a):i.i=a}function Z(i,e,a,f,v,d,u,_,A,h){var o=(A&M)!==0,x=(A&me)===0,l=o?x?ue(v):G(v):v,t=(A&b)===0?u:G(u),r={i:t,v:l,k:d,a:null,e:null,prev:a,next:f};try{return r.e=Q(()=>_(i,l,t,h),I),r.e.prev=a&&a.e,r.e.next=f&&f.e,a===null?e.first=r:(a.next=r,a.e.next=r.e),f!==null&&(f.prev=r,f.e.prev=r.e),r}finally{}}function J(i,e,a){for(var f=i.next?i.next.e.nodes_start:a,v=e?e.e.nodes_start:a,d=i.e.nodes_start;d!==f;){var u=pe(d);v.before(d),d=u}}function g(i,e,a){e===null?i.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const xe=Array(10).fill(null).map((i,e)=>({id:e.toString(),name:`Bairro ${e+1}`})),ye=Array(10).fill(null).map((i,e)=>({id:e.toString(),name:`Rota ${e+1}`})),Re=Array(10).fill(null).map((i,e)=>({id:e.toString(),name:`Tratamento ${e+1} - 2025`})),Ce=Array(40).fill(null).map((i,e)=>({id:e.toString(),name:`Visita ${e+1}`})),we=Array(12).fill(null).map((i,e)=>({id:e.toString(),name:`Usuario ${e+1}`,username:`usuario_${e+1}`})),He=Array(10).fill(null).map((i,e)=>({id:e.toString(),name:`Rua ${e+1}`}));export{Ie as e,ge as i,xe as n,ye as r,He as s,Re as t,we as u,Ce as v};
