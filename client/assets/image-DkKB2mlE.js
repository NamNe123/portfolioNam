import{r,j as c}from"./jsx-runtime-DexIYAB0.js";import{c as $,g as D,t as A,i as F,u as K,T as tt,a as N,I as M,b as et,n as R}from"./heading-Bchrs-MV.js";import{L as ot}from"./components-D1Eb6D8q.js";const at="/assets/gotham-bold-italic-C_msAlmW.woff2",st="/assets/gotham-bold-D1kvQ7KV.woff2",nt="/assets/gotham-book-italic-Bm2IEtSK.woff2",rt="/assets/gotham-book-Bnaws0Ef.woff2",ct="/assets/gotham-medium-italic-Dok430ou.woff2",it="/assets/gotham-medium-0VT3RO8I.woff2",lt="/assets/ipa-gothic-DimHCOud.woff2",q=r.createContext({}),Vt=({theme:t="dark",children:e,className:a,as:n="div",toggleTheme:l,...s})=>{const o=H(),i=!o.theme;return c.jsxs(q.Provider,{value:{theme:t,toggleTheme:l||o.toggleTheme},children:[i&&e,!i&&c.jsx(n,{className:$(a),"data-theme":t,...s,children:e})]})};function H(){return r.useContext(q)}function w(t){return t.replace(/\s\s+/g," ")}function P(t){return w(Object.keys(t).map(e=>`--${e}: ${t[e]};`).join(`

`))}function dt(){return w(Object.keys(D).map(t=>`
        @media (max-width: ${D[t]}px) {
          :root {
            ${P(A[t])}
          }
        }
      `).join(`
`))}const ut=w(`
  @layer theme, base, components, layout;
`),ft=w(`
  :root {
    ${P(A.base)}
  }

  ${dt()}

  [data-theme='dark'] {
    ${P(F.dark)}
  }

  [data-theme='light'] {
    ${P(F.light)}
  }
`),mt=w(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${rt}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${nt}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${it}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${ct}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${st}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${at}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${lt}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),Wt=w(`
  ${ut}

  @layer theme {
    ${ft}
    ${mt}
  }
`),pt="_loader_1o1zt_2",ht="_text_1o1zt_17",gt="_span_1o1zt_43",yt="_loaderSpan_1o1zt_1",z={loader:pt,text:ht,span:gt,loaderSpan:yt},xt=r.forwardRef(({className:t,style:e,width:a=32,height:n=4,text:l="Loading...",center:s,...o},i)=>K()?c.jsx(tt,{className:$(z.text,t),weight:"medium",...o,children:l}):c.jsx("div",{ref:i,className:$(z.loader,t),"data-center":s,style:N({width:a,height:n},e),...o,children:c.jsx("div",{className:z.span})})),_t="_button_1l2e3_2",wt="_text_1l2e3_132",bt="_loader_1l2e3_145",vt="_icon_1l2e3_158",S={button:_t,text:wt,loader:bt,icon:vt};function O(t){return t==null?void 0:t.includes("://")}const jt=r.forwardRef(({href:t,...e},a)=>O(t)||!t?c.jsx(U,{href:t,ref:a,...e}):c.jsx(U,{unstable_viewTransition:!0,as:ot,prefetch:"intent",to:t,ref:a,...e})),U=r.forwardRef(({className:t,as:e,secondary:a,loading:n,loadingText:l="loading",icon:s,iconEnd:o,iconHoverShift:i,iconOnly:d,children:u,rel:f,target:m,href:p,disabled:g,...x},y)=>{const b=O(p),G=e||(p?"a":"button");return c.jsxs(G,{className:$(S.button,t),"data-loading":n,"data-icon-only":d,"data-secondary":a,"data-icon":s,href:p,rel:f||b?"noopener noreferrer":void 0,target:m||b?"_blank":void 0,disabled:g,ref:y,...x,children:[!!s&&c.jsx(M,{className:S.icon,"data-start":!d,"data-shift":i,icon:s}),!!u&&c.jsx("span",{className:S.text,children:u}),!!o&&c.jsx(M,{className:S.icon,"data-end":!d,"data-shift":i,icon:o}),c.jsx(et,{unmount:!0,in:n,children:({visible:L,nodeRef:k})=>c.jsx(xt,{ref:k,className:S.loader,size:32,text:l,"data-visible":L})})]})});function St(){const[t,e]=r.useState(!1);return r.useEffect(()=>{e(!0)},[]),t}function $t(t,e,a={},n=!0){const[l,s]=r.useState(!1),[o,i]=r.useState(!1);return r.useEffect(()=>{if(!(t!=null&&t.current))return;const d=new IntersectionObserver(([u])=>{const{isIntersecting:f,target:m}=u;s(f),f&&e&&(d.unobserve(m),i(!0))},a);return!o&&n&&d.observe(t.current),()=>d.disconnect()},[t,e,a,o,n]),l}async function kt({src:t,srcSet:e,sizes:a}){return new Promise((n,l)=>{try{if(!t&&!e)throw new Error("No image src or srcSet provided");let s=new Image;t&&(s.src=t),e&&(s.srcset=e),a&&(s.sizes=a);const o=()=>{s.removeEventListener("load",o);const i=s.currentSrc;s=null,n(i)};s.addEventListener("load",o)}catch(s){l(`Error loading ${e}: ${s}`)}})}async function It(t=1,e=1){return new Promise(a=>{const n=document.createElement("canvas"),l=n.getContext("2d");n.width=t,n.height=e,l.fillStyle="rgba(0, 0, 0, 0)",l.fillRect(0,0,t,e),n.toBlob(async s=>{if(!s)throw new Error("Video thumbnail failed to load");const o=URL.createObjectURL(s);n.remove(),a(o)})})}async function Tt({srcSet:t,sizes:e}){const a=await Promise.all(t.split(", ").map(async o=>{const[i,d]=o.split(" "),u=Number(d.replace("w","")),f=await It(u);return{src:i,image:f,width:d}})),n=a.map(({image:o,width:i})=>`${o} ${i}`).join(", "),l=await kt({srcSet:n,sizes:e});return a.find(o=>o.image===l).src}const Et="_image_4szht_2",Pt="_container_4szht_42",Nt="_elementWrapper_4szht_49",Gt="_placeholder_4szht_71",Lt="_element_4szht_49",Ct="_button_4szht_104",_={image:Et,container:Pt,elementWrapper:Nt,placeholder:Gt,element:Lt,button:Ct},Dt=({className:t,style:e,reveal:a,delay:n=0,raised:l,src:s,srcSet:o,placeholder:i,...d})=>{const[u,f]=r.useState(!1),{theme:m}=H(),p=r.useRef(),g=s||o.split(" ")[0],x=$t(p,!Q(g)),y=r.useCallback(()=>{f(!0)},[]);return c.jsx("div",{className:$(_.image,t),"data-visible":x||u,"data-reveal":a,"data-raised":l,"data-theme":m,style:N({delay:R(n)},e),ref:p,children:c.jsx(zt,{delay:n,onLoad:y,loaded:u,inViewport:x,reveal:a,src:g,srcSet:o,placeholder:i,...d})})},zt=({onLoad:t,loaded:e,inViewport:a,srcSet:n,placeholder:l,delay:s,src:o,alt:i,play:d=!0,restartOnPause:u,reveal:f,sizes:m,width:p,height:g,noPauseButton:x,cover:y,...b})=>{const v=K(),[G,L]=r.useState(!0),[k,I]=r.useState(!v),[C,B]=r.useState(),[V,J]=r.useState(!1),X=r.useRef(),h=r.useRef(),j=Q(o),W=a,Y=St();r.useEffect(()=>{j&&n?(async()=>{const E=await Tt({srcSet:n,sizes:m});B(E)})():j&&B(o)},[j,m,o,n]),r.useEffect(()=>{if(!h.current||!C)return;const T=()=>{I(!0),h.current.play()},E=()=>{I(!1),h.current.pause()};d||(E(),u&&(h.current.currentTime=0)),!V&&(a?a&&!v&&d&&T():E())},[a,d,v,u,V,C]);const Z=T=>{T.preventDefault(),J(!0),h.current.paused?(I(!0),h.current.play()):(I(!1),h.current.pause())};return c.jsxs("div",{className:_.elementWrapper,"data-reveal":f,"data-visible":a||e,style:N({delay:R(s+1e3)}),children:[j&&Y&&c.jsxs(r.Fragment,{children:[c.jsx("video",{muted:!0,loop:!0,playsInline:!0,className:_.element,"data-loaded":e,"data-cover":y,autoPlay:!v,onLoadStart:t,src:C,"aria-label":i,ref:h,...b}),!x&&c.jsxs(jt,{className:_.button,onClick:Z,children:[c.jsx(M,{icon:k?"pause":"play"}),k?"Pause":"Play"]})]}),!j&&c.jsx("img",{className:_.element,"data-loaded":e,"data-cover":y,onLoad:t,decoding:"async",src:W?o:void 0,srcSet:W?n:void 0,width:p,height:g,alt:i,sizes:m,...b}),G&&c.jsx("img",{"aria-hidden":!0,className:_.placeholder,"data-loaded":e,"data-cover":y,style:N({delay:R(s)}),ref:X,src:l,width:p,height:g,onTransitionEnd:()=>L(!1),decoding:"async",loading:"lazy",alt:"",role:"presentation"})]})};function Q(t){return typeof t=="string"&&t.includes(".mp4")}export{jt as B,it as G,Dt as I,xt as L,Vt as T,H as a,rt as b,Tt as r,Wt as t,$t as u};
