"use strict";(self.webpackChunklotrwiki=self.webpackChunklotrwiki||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),o=new RegExp(i.source+r.source,"gu"),l=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,r)=>{let i=!1,s=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=s,s=!0,l++):s&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=s,s=!1,i=!0):(i=n(c)===c&&r(c)!==c,o=s,s=r(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return k},P:function(){return E},S:function(){return D},_:function(){return o},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return l}});var n=a(7294),r=(a(3204),a(5697)),i=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],g=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=o(e,p);return n.createElement(n.Fragment,null,n.createElement(g,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:l}=e,c=o(e,f);return n.createElement("img",s({},c,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=o(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,s({},i,t,{sizes:l,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:l})})),c):c};var w;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,v);return t?n.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(b,s({},e)),n.createElement("noscript",null,n.createElement(b,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],S=e=>e.replace(/\n/g,""),T=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:T},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],R=new Set;let O,j;const _=function(e){let{as:t="div",image:r,style:i,backgroundColor:d,className:u,class:p,onStartLoad:g,onLoad:m,onError:f}=e,h=o(e,N);const{width:y,height:b,layout:w}=r,v=c(y,b,w),{style:E,className:k}=v,L=o(v,I),C=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);p&&(u=p);const T=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(w,y,b);return(0,n.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void R.add(S);if(j&&R.has(S))return;let t,n;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:R.has(S),image:r},h)),R.has(S)||(t=requestAnimationFrame((()=>{C.current&&(n=o(C.current,S,R,i,g,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{R.has(S)&&j&&(C.current.innerHTML=j(s({isLoading:R.has(S),isLoaded:R.has(S),image:r},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},L,{style:s({},E,i,{backgroundColor:d}),className:k+(u?" "+u:""),ref:C,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},q=(0,n.memo)((function(e){return e.image?(0,n.createElement)(_,e):null}));q.propTypes=x,q.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:r,__error:i}=t,l=o(t,z);return i&&console.warn(i),r?n.createElement(e,s({image:r},l)):(console.warn("Image not loaded",a),null)}}const P=A((function(e){let{as:t="div",className:a,class:r,style:i,image:l,loading:p="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,w=o(e,L);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),f=s({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:v,height:T,layout:x,images:N,placeholder:I,backgroundColor:R}=l,O=c(v,T,x),{style:j,className:_}=O,q=o(O,C),z={fallback:void 0,sources:[]};return N.fallback&&(z.fallback=s({},N.fallback,{srcSet:N.fallback.srcSet?S(N.fallback.srcSet):void 0})),N.sources&&(z.sources=N.sources.map((e=>s({},e,{srcSet:S(e.srcSet)})))),n.createElement(t,s({},q,{style:s({},j,i,{backgroundColor:h}),className:_+(a?" "+a:"")}),n.createElement(m,{layout:x,width:v,height:T},n.createElement(E,s({},u(I,!1,x,v,T,R,y,b))),n.createElement(k,s({"data-gatsby-image-ssr":"",className:g},w,d("eager"===p,!1,z,p,f)))))})),W=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:T,width:W,height:W,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=F;const D=A(q);D.displayName="StaticImage",D.propTypes=F},4842:function(e,t,a){var n=a(7294),r=a(8032),i=a(1883);t.Z=e=>{let{title:t,children:s}=e;return n.useEffect((()=>{document.addEventListener("scroll",(e=>{if(window.innerWidth>550){let e=document.getElementById("toTopButton");document.body.scrollTop>20||document.documentElement.scrollTop>20?e.classList.remove("hidden"):e.classList.add("hidden")}}))})),n.createElement("div",{className:"pageDiv"},n.createElement("nav",null,n.createElement(r.S,{className:"nav-img",src:"../assets/oneRingIcon.png",alt:"LOTR one ring",__imageData:a(6549)}),n.createElement(i.Link,{to:"/"},n.createElement("h3",null,"LOTR Campaign Wiki")),n.createElement("p",{className:"elvish"},t)),n.createElement("button",{id:"toTopButton",className:"hidden",title:"GoToTop",type:"button",onClick:()=>window.scrollTo(0,0)},"Back to top"),n.createElement("main",{className:"container"},s),n.createElement("div",{className:"double spacer"}),n.createElement("footer",null,"Disclaimer: Middle Earth Lore contained on this wiki is a mix of Tolkien's canon and my own invention. This site is meant for private use only and is not intended to serve as an official reference. This page last updated September 2023."),n.createElement("div",{className:"footer spacer"}))}},6549:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/lotrwiki/static/543cae14dbfcacfdaf2ccb978a295670/d6cbb/oneRingIcon.png","srcSet":"/lotrwiki/static/543cae14dbfcacfdaf2ccb978a295670/bd5e2/oneRingIcon.png 192w,\\n/lotrwiki/static/543cae14dbfcacfdaf2ccb978a295670/9b474/oneRingIcon.png 384w,\\n/lotrwiki/static/543cae14dbfcacfdaf2ccb978a295670/d6cbb/oneRingIcon.png 768w","sizes":"(min-width: 768px) 768px, 100vw"},"sources":[{"srcSet":"/lotrwiki/static/543cae14dbfcacfdaf2ccb978a295670/694c3/oneRingIcon.webp 192w,\\n/lotrwiki/static/543cae14dbfcacfdaf2ccb978a295670/6d535/oneRingIcon.webp 384w,\\n/lotrwiki/static/543cae14dbfcacfdaf2ccb978a295670/482be/oneRingIcon.webp 768w","type":"image/webp","sizes":"(min-width: 768px) 768px, 100vw"}]},"width":768,"height":768}')}}]);
//# sourceMappingURL=commons-f2b6d73e128b4a2a0ac0.js.map