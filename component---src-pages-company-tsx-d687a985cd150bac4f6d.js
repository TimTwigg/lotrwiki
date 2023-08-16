"use strict";(self.webpackChunklotrwiki=self.webpackChunklotrwiki||[]).push([[254],{7173:function(e,t,n){n.r(t),n.d(t,{Head:function(){return z},default:function(){return W}});var a=n(7294);function r(e){return t=>!!t.type&&t.type.tabsRole===e}const o=r("Tab"),i=r("TabList"),s=r("TabPanel");function l(e,t){return a.Children.map(e,(e=>null===e?null:function(e){return o(e)||i(e)||s(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,a.cloneElement)(e,{...e.props,children:l(e.props.children,t)}):e))}function h(e,t){return a.Children.forEach(e,(e=>{null!==e&&(o(e)||s(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(i(e)&&t(e),h(e.props.children,t)))}))}function d(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=d(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var c=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=d(e))&&(a&&(a+=" "),a+=t);return a};function u(e){let t=0;return h(e,(e=>{o(e)&&t++})),t}function f(e){return e&&"getAttribute"in e}function m(e){return f(e)&&e.getAttribute("data-rttab")}function p(e){return f(e)&&"true"===e.getAttribute("aria-disabled")}let b;const g={className:"react-tabs",focus:!1},y=e=>{let t=(0,a.useRef)([]),n=(0,a.useRef)([]);const r=(0,a.useRef)();function h(t,n){if(t<0||t>=y())return;const{onSelect:a,selectedIndex:r}=e;a(t,r,n)}function d(e){const t=y();for(let n=e+1;n<t;n++)if(!p(w(n)))return n;for(let n=0;n<e;n++)if(!p(w(n)))return n;return e}function f(e){let t=e;for(;t--;)if(!p(w(t)))return t;for(t=y();t-- >e;)if(!p(w(t)))return t;return e}function y(){const{children:t}=e;return u(t)}function w(e){return t.current[`tabs-${e}`]}function v(e){let t=e.target;do{if(k(t)){if(p(t))return;return void h([].slice.call(t.parentNode.children).filter(m).indexOf(t),e)}}while(null!=(t=t.parentNode))}function k(e){if(!m(e))return!1;let t=e.parentElement;do{if(t===r.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}const{children:E,className:T,disabledTabClassName:C,domRef:R,focus:A,forceRenderTabPanel:N,onSelect:x,selectedIndex:I,selectedTabClassName:S,selectedTabPanelClassName:j,environment:M,disableUpDownKeys:V,disableLeftRightKeys:L,...W}={...g,...e};return a.createElement("div",Object.assign({},W,{className:c(T),onClick:v,onKeyDown:function(t){const{direction:n,disableUpDownKeys:a,disableLeftRightKeys:r}=e;if(k(t.target)){let{selectedIndex:o}=e,i=!1,s=!1;"Space"!==t.code&&32!==t.keyCode&&"Enter"!==t.code&&13!==t.keyCode||(i=!0,s=!1,v(t)),(r||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(a||38!==t.keyCode&&"ArrowUp"!==t.code)?(r||39!==t.keyCode&&"ArrowRight"!==t.code)&&(a||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(o=function(){let e=y();for(;e--;)if(!p(w(e)))return e;return null}(),i=!0,s=!0):36!==t.keyCode&&"Home"!==t.code||(o=function(){const e=y();for(let t=0;t<e;t++)if(!p(w(t)))return t;return null}(),i=!0,s=!0):(o="rtl"===n?f(o):d(o),i=!0,s=!0):(o="rtl"===n?d(o):f(o),i=!0,s=!0),i&&t.preventDefault(),s&&h(o,t)}},ref:e=>{r.current=e,R&&R(e)},"data-rttabs":!0}),function(){let r=0;const{children:h,disabledTabClassName:d,focus:c,forceRenderTabPanel:u,selectedIndex:f,selectedTabClassName:m,selectedTabPanelClassName:p,environment:g}=e;n.current=n.current||[];let v=n.current.length-y();const k=(0,a.useId)();for(;v++<0;)n.current.push(`${k}${n.current.length}`);return l(h,(e=>{let h=e;if(i(e)){let r=0,i=!1;null==b&&function(e){const t=e||("undefined"!=typeof window?window:void 0);try{b=!(void 0===t||!t.document||!t.document.activeElement)}catch(n){b=!1}}(g);const s=g||("undefined"!=typeof window?window:void 0);b&&s&&(i=a.Children.toArray(e.props.children).filter(o).some(((e,t)=>s.document.activeElement===w(t)))),h=(0,a.cloneElement)(e,{children:l(e.props.children,(e=>{const o=`tabs-${r}`,s=f===r,l={tabRef:e=>{t.current[o]=e},id:n.current[r],selected:s,focus:s&&(c||i)};return m&&(l.selectedClassName=m),d&&(l.disabledClassName=d),r++,(0,a.cloneElement)(e,l)}))})}else if(s(e)){const t={id:n.current[r],selected:f===r};u&&(t.forceRender=u),p&&(t.selectedClassName=p),r++,h=(0,a.cloneElement)(e,t)}return h}))}())};y.propTypes={};var w=y;const v={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},k=e=>{const{children:t,defaultFocus:n,defaultIndex:r,focusTabOnClick:o,onSelect:i,...s}={...v,...e},[l,h]=(0,a.useState)(n),[d]=(0,a.useState)((e=>null===e.selectedIndex?1:0)(s)),[c,f]=(0,a.useState)(1===d?r||0:null);if((0,a.useEffect)((()=>{h(!1)}),[]),1===d){const e=u(t);(0,a.useEffect)((()=>{if(null!=c){const t=Math.max(0,e-1);f(Math.min(c,t))}}),[e])}let m={...e,...s};return m.focus=l,m.onSelect=(e,t,n)=>{"function"==typeof i&&!1===i(e,t,n)||(o&&h(!0),1===d&&f(e))},null!=c&&(m.selectedIndex=c),delete m.defaultFocus,delete m.defaultIndex,delete m.focusTabOnClick,a.createElement(w,m,t)};k.propTypes={},k.tabsRole="Tabs";var E=k;const T={className:"react-tabs__tab-list"},C=e=>{const{children:t,className:n,...r}={...T,...e};return a.createElement("ul",Object.assign({},r,{className:c(n),role:"tablist"}),t)};C.tabsRole="TabList",C.propTypes={};var R=C;const A="react-tabs__tab",N={className:A,disabledClassName:`${A}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${A}--selected`},x=e=>{let t=(0,a.useRef)();const{children:n,className:r,disabled:o,disabledClassName:i,focus:s,id:l,selected:h,selectedClassName:d,tabIndex:u,tabRef:f,...m}={...N,...e};return(0,a.useEffect)((()=>{h&&s&&t.current.focus()}),[h,s]),a.createElement("li",Object.assign({},m,{className:c(r,{[d]:h,[i]:o}),ref:e=>{t.current=e,f&&f(e)},role:"tab",id:`tab${l}`,"aria-selected":h?"true":"false","aria-disabled":o?"true":"false","aria-controls":`panel${l}`,tabIndex:u||(h?"0":null),"data-rttab":!0}),n)};x.propTypes={},x.tabsRole="Tab";var I=x;const S="react-tabs__tab-panel",j={className:S,forceRender:!1,selectedClassName:`${S}--selected`},M=e=>{const{children:t,className:n,forceRender:r,id:o,selected:i,selectedClassName:s,...l}={...j,...e};return a.createElement("div",Object.assign({},l,{className:c(n,{[s]:i}),role:"tabpanel",id:`panel${o}`,"aria-labelledby":`tab${o}`}),r||i?t:null)};M.tabsRole="TabPanel",M.propTypes={};var V=M,L=n(4842);var W=()=>a.createElement(L.Z,{title:"The Company"},a.createElement("div",null,a.createElement("h1",null,"Annals of the Company"),a.createElement("hr",null),a.createElement("p",null,"These annals document the journey of The Company through the Fourth Age of Middle Earth, as carefully established by historians of the Seventh Age."),a.createElement("h5",null,"Excerpt from ",a.createElement("i",null,"A Brief Analysis of the Early Fourth Age: Chapter 1")," by Mori et al."),a.createElement("p",null,"We also analyze the storied accounts of the so-called heroes of the Fourth Age. Whether history or fantasy, exaggerated beyond belief or accounts of an entirely different world in the past; these legends are told widely enough to be worth investigating, and, at a bare minimum, hold the makings of an epic tale."),a.createElement(E,null,a.createElement(R,null,a.createElement(I,null,"A Misgiving Start"),a.createElement(I,null,"Reunion")),a.createElement(V,null,a.createElement("h5",null,"Excerpt from ",a.createElement("i",null,"Chapter 7.12")),a.createElement("p",null,"As mentioned briefly in the overview in Chapter 7.1, this group was remarkable in its seeming ability to defy all odds. Many details of the group's members are lost to time, particularly as much of the lore included in the legends is unsubstantiated and most likely forms the narrative inventions of countless generations of storytellers. Some details, however, are recorded widely and accurately enough to be accepted as historical fact. Here follows a brief overview of the group's members, deeds, and end.",a.createElement("br",null),a.createElement("br",null),"Historians generally agree that the first members to join together were the elves, at the time known simply as Luthais and Saelrain. Luthais' past is almost entirely lost; that he came from the east and was driven by some form of vision is all that can be reliably established. Whether he truly experienced a prophetic vision or was merely mad is debated. Some have speculated that he was more than he seemed, commonly that he was one of the Noldor sent back to Middle Earth by the Valar, but this tale in particular is unlikely. Valinor was removed from the realms of Middle Earth long prior, and all reliable accounts agree that the first to successfully leave Valinor and return to the world was the historian, Aelfwine, several thousand years after. Saelrain, however, is less of a mystery. The warrior elf came from Rivendell, driven out by the shame of his past failure. The general details of his early life told in the stories are fairly accurate, and as such will not be included here, though we include them in the appendices.",a.createElement("br",null),a.createElement("br",null),"These two elves are purported to have met in Thranduil's Halls. Both outcasts of the woodland society, they bonded and left two years later for Esgaroth, the generally accepted formal beginning point for the group. Accounts usually present Théoryn Silvertongue as the first to join the two elves. This is most likely due to her role in spreading the tales of their deeds. Regardless of this ongoing debate, Théoryn, Robinia, and Vezenbaer joined at some time before the group left the town. The details of Théoryn's life are perhaps of all the companions known best, again most likely due to her role as a storyteller, and included in the appendices. The hobbit, Robinia Took (also widely known due to the later publication of her journals), is something of a children's hero. The small hobbit who broke with her people's traditions of peace and contentment and made a life of adventure is the idol of many a small child who imagines themself exploring a wild world. In contrast, the deeds of Beorn's granddaughter, Vezenbaer, are often overlooked, despite the importance of her actions at that time. This may be due to the grisly nature of her life, as well as the superstitions which long surrounded her which claimed she had an alliance with some dark power which gave her otherworldly abilities (See the section on Beorn's descendents in Chapter 8.5.7 for more on this).",a.createElement("br",null),a.createElement("br",null),"Why the group left Esgaroth for the Vales of Anduin, and why they were denied access to Thranduil's realm, is unknown; but it is a popular detail that it is outside that realm that they met the wizard from the north, Ingold, himself another man lost to time. Some have speculated that the specifics of his life and deeds were hidden intentionally. We find this likely, as such an absence of detail for a man who must have played such an important role in the making of the age is unusual, and perhaps a little suspicious. One of the most common speculations is that he fell into the shadow, becoming corrupted by the very power he was supposed to defeat, and that his friends hid his past to protect his legacy. Another is that he himself obscured his past. Though almost more confusing than no explanation at all, the second is the more widely accepted explanation for his disappearing from history almsot entirely.",a.createElement("br",null),a.createElement("br",null),"The first established mention of the group in the Vales is of their adventure into the goblin caves. It is said that this was, in the grand scheme of the lives, an almost insignificant encounter. We strongly disagree on this point. This early endeavor marked the start of their legend. Perhaps more importantly, it played an important role in the life of Vezenbaer. Although she traveled only briefly with the group, the biography of her life (written only a few decades after her death, most likely by a cousin's descendent) describes these early days with the group as the tipping point in her life that led her down the path which defined her. It also records that it is on this early adventure that she first began to experience visions of her people's past. If there is any connection between her visions and those of the elf Luthais, it is lost to time.",a.createElement("br",null),a.createElement("br",null),"After their expedition through the caves, the group returned to Bärenburg, where Vezenbaer left them (more on Vezenbaer in Chapter 8.5.7) and the elf Verlorener joined. It is a particularly contentious debate amongst historians as to whether Verlorener knew of her past at this time or not. Though perhaps not quite as crucial a question to interpreting her story as some claim, the woodland elf raised by the Beornings definitely joined the group in Bärenburg at this time.",a.createElement("br",null),a.createElement("br",null),"Even the most detailed accounts of the group skip now to their defense of Mountain Hall. What they did in between, and why they traveled to Mountain Hall, is unknown. The reason for their suicidal attack on the orc champion, Feldûsh, is also unknown. This forms a particularly frustrating loss of detail, however, given the significance of this attack. Tales of the battle, presumed to originate with Théoryn Silvertongue, make it out to be a terrifying battle in the darkness between a mighty servant of the shadow and the group of adventurers who, though outmatched, somehow managed to overcome him. We find these tales to be, with a high degree of probability, the embellishment of a storyteller looking to engage and excite her audience. Records make Feldûsh a strong captain who was able to bind both orcs and goblins to his will, but nothing more. Regardless, events move on quickly to the aftermath, which marked a crucial point for the group, a point at which a single action could have changed history.",a.createElement("br",null),a.createElement("br",null),"Outside the caves of the Undervault Mine, the group is said to have met a mysterious dwarf, who called Luthais and Saelrain to follow him. Some speculations name him as the Lord Gimli, but we find this unlikely as Gimli was most likely in the caves of Aglarond at this time. We present our own detailed speculation on this dwarf's identity in our book, ",a.createElement("i",null,"Speculations on the Early Fourth Age"),". Nevertheless, it is clear that Luthais and Saelrain left the group at this point, followed shortly after by Ingold, and that the group subsequently dissolved. Mostert et al. concluded in their analysis that the dwarf was a narrative creation, and that it was Ingold who splintered the group and led Luthais and Saelrain west. Although this is supported by the wizard's disappearance at this point, the lack of known detail about Ingold once more makes this a difficult question to answer conclusively. We believe that the best explanation of the evidence is that they found or experienced something in the tunnels of the Undervault Mine which drove them apart. The fellowship broke and scattered, and a group that could have achieved great things ended before it had a chance to do so.")),a.createElement(V,null,a.createElement("p",null,'That a group of such diverse origins and intentions should split so drastically, and yet manage to reconvene only a few short months later is wholly remarkable. What they did after the breaking and how they managed to all find themselves amongst the bandits in the Wolfswood is not entirely clear. Our analysis indicates that it was during this time that Saelrain began to truly hone his skills as a smith of unusual skill, while Théoryn Silvertongue found herself infiltrating the bandits (widely known as the song of "Théoryn and the Bandits"). The journals of Robinia Took document her interactions with the elf Morlan in the Elfgard (see Chapter 13.4). Verlorener is believed to have gone east to begin her long search for her family\'s history, but the deeds of Luthais during this time are a complete mystery. This study is focused on the group as a whole, however, and as such will not analyze their individual histories. The only member not to reach the bandits was the wizard Ingold, who again disappeared from recorded history.',a.createElement("br",null),a.createElement("br",null),"Despite rejoining, the group almost immediately split. It is believed that messengers from the Lord Elrond of Rivendell summoned Saelrain to him, though how they persuaded him to return there is unclear. It is also a mystery as to why Robinia Took accompanied him, this section of the hobbit's journals unfortunately lost to time. The group, now composed of just Luthais, Théoryn, and Verlorener, traveled to Bärenburg before abruptly turning around and racing back west and south. Records indicate that they learnt of Ingold's imprisonment in the Dwimmerhorn (See Chapter 14.6.2 for details on this fortress), though it is unclear how they came across this information. A daring rescue glorified in song by Silvertongue ensued, resulting in not only Ingold's rejoining the group, but also the arrival of the dwarf, Arden. The dwarf was unusual for his love of exotic weapons, notably the chain whip, in place of the traditional dwarven battle axes, warhammers, and mattocks. He proved to be an able fighter and trusted companion, driven to achieve greatness by his past (see Chapter 8.3: Dwarven Heroes).",a.createElement("br",null),a.createElement("br",null),"Now grown again to five members, the group moved north towards Mountain Hall and on this journey achieved what is often considered the first of their great feats: the fall of Valter. The battle lines numbered two dozen bandits and Valter against the small group, with Valter a warrior of considerable might himself. Many scholars attribute the Company's victory to Ingold and his power over lightning, others to the group's martial prowess, but our studies of their strengths and the nature of combat conclude that it was highly unlikely that bandits would have lost in that fight, and as such we speculate that either the numbers are exaggerated or that the Company had some unknown aid. Regardless, this victory made their names known through the northern vales of Anduin, although it seems strange to us that their return to Mountain Hall was met with distrust and hostility (Tetuvi, 81). They thus returned after their great battle to Bärenburg, the city which had become their base in this region. As might be expected, a period of rest and healing ensued before they continued their adventures.")))));const z=()=>a.createElement("title",null,"The Company")}}]);
//# sourceMappingURL=component---src-pages-company-tsx-d687a985cd150bac4f6d.js.map