"use strict";(self.webpackChunklotrwiki=self.webpackChunklotrwiki||[]).push([[722],{3747:function(e,t,n){function a(){return Math.ceil(4*Math.random())}function l(){return Math.ceil(20*Math.random())}function r(e){let t=document.getElementById(e);return t.options[t.selectedIndex].value}function d(e){return e.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g," ")}n.d(t,{ZN:function(){return r},d4:function(){return a},eH:function(){return d},fc:function(){return l}})},380:function(e,t,n){n.r(t),n.d(t,{Head:function(){return N},default:function(){return v}});var a=n(7294),l=n(4842),r=n(3522);var d=e=>{let{name:t,options:n,className:l,onChange:r}=e;return a.createElement("select",{defaultValue:t,className:l,onChange:e=>{r(n[e.target.selectedIndex-1])}},a.createElement("option",{value:t,disabled:!0},t),n.map(((e,t)=>a.createElement("option",{key:t},e))))};const c=["Yestarë","Narwain","Nínui","Gwaeron","Gwirith","Lothron","Nórui","Loëndë","Cerveth","Urui","Ivanneth","Narbeleth","Hithui","Girithron","Mettarë"],o=[1,30,30,30,30,30,31,1,31,30,30,30,30,30,1],i=["January","February","March","April","May","June","July","August","September","October","November","December"],m=[31,28,31,30,31,30,31,31,30,31,30,31];function s(e){return e.reduce(((e,t)=>e+t),0)}function u(e,t,n,a,l){var r;return r="lotr"==a?o.slice():m.slice(),n%4==0&&("lotr"==a?r[7]=2:r[1]=29),s(r.slice(0,t))+e+l}function E(e){var t=0;if(0==e)e=s(o)-1,t=-1;else if(e<0)for(;e<0;)t-=1,e+=s(o);else if(e>s(o)){let n=s(o);for(;e>n;)e-=n,t+=1}let n=0,a=0;for(;e>0;)a=e,e-=o[n],n+=1;return{day:a,month:n-1,year:t}}const h={weekday:"Elenya",year:1,age:"FA",standardYear:1977},y=["Isilya","Aldëa","Menelya","Eärenya","Valanya","Elenya","Anarya"];function g(e,t,n){let a=u(e,t,n,"lotr",0)-1;for(let r=1;r<n;++r)a+=365,(n-r)%4==0&&(a+=1);let l=y.indexOf(h.weekday);return y[(a+l)%7]}var p=n(3747);const f=3021;var v=()=>{var[e,t]=a.useState("Day"),[n,y]=a.useState(["1"]),[v,N]=a.useState("Month"),[D,w]=a.useState(c),[b,A]=a.useState("Year"),[S,I]=a.useState("FA"),[k,T]=a.useState("Day"),[C,M]=a.useState(["1"]),[L,F]=a.useState("Month"),[R,B]=a.useState(c),[O,G]=a.useState("Year"),[K,Y]=a.useState("FA"),[x,H]=a.useState("convert"),[U,V]=a.useState(0),[q,J]=a.useState("");function W(e,t,n){let a=c.slice(),l=o.slice();parseInt(n)%4==0&&(a[7]="Enderi",l[7]=2);let r=a.indexOf(t);-1==r&&(r=7);let d=[];for(let c=1;c<=l[r];++c)d.push(c.toString());1==e?(y(d),w(a)):2==e&&(M(d),B(a))}function P(){if("convert"==x){let e=document.getElementById("standardDate").value;if(""==e||null==e)return void J("No Date Selected");let t="FA",n=new Date(e),a=n.getUTCDate(),l=n.getUTCMonth(),r=n.getUTCFullYear(),d=u(a,l,r,"standard",0);r<h.standardYear&&(r+=f,t="TA"),r=r-h.standardYear+1;let o=E(d);J(g(o.day,o.month,o.year+2)+", "+String(o.day).padStart(2,"0")+"\n                "+c[o.month]+" "+String(o.year+r).padStart(2,"0")+" ("+t+")")}else if("reverse"==x){let t=parseInt(e),n=v,a=parseInt(b);if(isNaN(t)||0==t||"Month"==n||isNaN(a))return void J("No Date Selected");let l=c.indexOf(n);a%4==0&&"Enderi"==n&&(l=7);let r=function(e){var t=0;if(0==e)e=s(m)-1,t=-1;else if(e<0)for(;e<0;)t-=1,e+=s(m);else if(e>s(m)){let n=s(m);for(;e>n;)e-=n,t+=1}let n=0,a=0;for(;e>0;)a=e,e-=m[n],n+=1;return{day:a,month:n-1,year:t}}(u(t,l,a,"lotr",0));"FA"==S?a=a+h.standardYear-1:"TA"==S&&(a=a-f+h.standardYear-1),J(String(r.day).padStart(2,"0")+" "+i[r.month]+"\n                "+String(Math.abs(r.year+a)).padStart(2,"0")+(a<0?" (BC)":""))}else if("weekday"==x){let t=parseInt(e),n=v,a=parseInt(b);if(isNaN(t)||0==t||"Month"==n||isNaN(a))return void J("No Date Selected");let l=c.indexOf(n);a%4==0&&"Enderi"==n&&(l=7);let r=g(t,l,a);J(t+" "+n+" "+a+" was/will be a"+("M"==r[0]||"V"==r[0]?"":"n")+" "+r)}else if("add"==x){let t=parseInt(e),n=v,a=parseInt(b),l=S;if(isNaN(t)||0==t||"Month"==n||isNaN(a))return void J("No Date Selected");let r=c.indexOf(n);a%4==0&&"Enderi"==n&&(r=7);let d=E(u(t,r,a,"lotr",U));"TA"==l&&d.year+a>f&&(a=d.year+a-f,d.year=0,l="FA"),J(g(d.day,d.month,d.year+a)+", "+String(d.day).padStart(2,"0")+"\n                "+c[d.month]+" "+String(d.year+a).padStart(2,"0")+" ("+l+")")}else if("diff"==x){let a=parseInt(e),l=parseInt(b),r=parseInt(k),d=parseInt(O);if(isNaN(a)||isNaN(r)||0==a||0==r||"Month"==v||"Month"==L||isNaN(l)||isNaN(d))return void J("Dates Note Properly Selected");let o=c.indexOf(v),i=c.indexOf(L);l%4==0&&"Enderi"==v&&(o=7),d%4==0&&"Enderi"==L&&(i=7);let m=u(a,o,l,"lotr",0),s=u(r,i,d,"lotr",0)-m;if(l!=d||S!=K){"TA"==S?d+=f:"TA"==K&&(l+=f);for(var t=0,n=0;n<Math.abs(d-l);++n)l<d?(t+=365,(l+n)%4==0&&(t+=1)):(t-=365,(d+n)%4==0&&(t-=1));s+=t}J((0,p.eH)(Math.abs(s))+" days or "+(0,p.eH)(Math.round(Math.abs(s)/3.65256)/100)+" years")}}return a.createElement(l.Z,{title:"Calendar"},a.createElement("div",null,a.createElement("h1",null,"Calendars and the Reckoning of Time"),a.createElement("hr",null),a.createElement(r.z,{hideWhenSmall:!0,pageTitle:"Calendar",links:[{name:"Overview",url:"/calendar#overview"},{name:"Calculator",url:"/calendar#calculator"},{name:"Months, Days, Seasons",url:"/calendar#monthsTable"},{name:"Campaign Time",url:"/calendar#campaign"}]}),a.createElement("hr",null),a.createElement("h3",{id:"overview"},"Overview"),a.createElement("p",null,"Middle Earth has many calendars, from the elven calendar to the King's Reckoning to the Steward's Reckoning to the New Reckoning to the Shire Reckoning. These can quickly become confusing, and who really needs to keep detailed track of time for a D&D campaign anyway? ",a.createElement("br",null),"Answer: the DM. ",a.createElement("br",null),"And sometimes some players like to know these things. ",a.createElement("br",null),"And some quests rely on specific timing. ",a.createElement("br",null),"And ... ",a.createElement("br",null),"You get the point."),a.createElement("p",null,"For the LOTR D&D Campiagn, we use a slightly adapted form of the King's Reckoning. ",a.createElement("br",null),"The standard King's Reckoning is very similar to our own Gregorian calendar. There are twelve months, ten with 30 days and 2 with 31. There are 2 days between one year and the next and 1 mid-year day. The calendar year begins at mid-winter. ",a.createElement("br",null),"The months of the year are: ",a.createElement("br",null),"Narwain, Nínui, Gwaeron, Gwirith, Lothron, Nórui, Cerveth, Urui, Ivanneth, Narbeleth, Hithui, and Girithron. ",a.createElement("br",null),"The year-start day is Yestarë, the year-end day is Mettarë, and the mid-year day is Loëndë. ",a.createElement("br",null),"Nórui and Cerveth have 31 days, the rest have 30. On a leap year, the extra day goes in the middle and there are 2 mid-year days, called the Enderi."),a.createElement("h5",null,"On Converting Between LOTR and Gregorian Dates and the Baseline"),a.createElement("p",null,"In order to convert between the King's Reckoning and Gregorian calendars, a baseline must be chosen: a day and year in each calendar that are said to line up which we can use as a reference to convert. For example, consider converting 1 January 2023 to King's Reckoning. Clearly it is Yestarë, but in which year? ",a.createElement("br",null),"I have chosen to align the years 1977 (Gregorian) and 1 (Fourth Age). The significance of these dates is thus: 1977 is the publication date of the Silmarillion (Tolkien's lore) while the Fourth Age is the proper start of my adapted lore. This means that years prior to 1977 are the Third Age, and our current year of 2023 is the year 47 in the Fourth Age."),a.createElement("hr",null),a.createElement("h3",{id:"calculator"},"Calculator"),a.createElement("p",null,"Use this calendar calculator to convert between regular dates and the King's Reckoning (KR). Date addition is also supported. ",a.createElement("br",null),"If you have a calendar calculation you would like to perform that is not currently supported, contact the developer. ",a.createElement("br",null),"NOTE: King's Reckoning dates are by default in the Fourth Age. Operations involving other ages are currently not supported."),a.createElement("form",{className:"container"},a.createElement("label",{htmlFor:"optionPicker",className:"column three columns"},"Operation"),a.createElement("select",{id:"optionPicker",className:"eight columns",onChange:e=>{(function(e){"convert"==e?(document.getElementById("lotrDateElement").classList.add("hidden"),document.getElementById("standardDateElement").classList.remove("hidden"),document.getElementById("lotrDateAdditionElement").classList.add("hidden"),document.getElementById("lotrDateDifferenceElement").classList.add("hidden")):"reverse"==e||"weekday"==e?(document.getElementById("lotrDateElement").classList.remove("hidden"),document.getElementById("standardDateElement").classList.add("hidden"),document.getElementById("lotrDateAdditionElement").classList.add("hidden"),document.getElementById("lotrDateDifferenceElement").classList.add("hidden")):"add"==e?(document.getElementById("lotrDateElement").classList.remove("hidden"),document.getElementById("standardDateElement").classList.add("hidden"),document.getElementById("lotrDateAdditionElement").classList.remove("hidden"),document.getElementById("lotrDateDifferenceElement").classList.add("hidden")):"diff"==e&&(document.getElementById("lotrDateElement").classList.remove("hidden"),document.getElementById("standardDateElement").classList.add("hidden"),document.getElementById("lotrDateAdditionElement").classList.add("hidden"),document.getElementById("lotrDateDifferenceElement").classList.remove("hidden"))})(e.target.value),H(e.target.value)}},a.createElement("option",{value:"convert"},"Convert from Standard Date"),a.createElement("option",{value:"reverse"},"Convert to Standard Date"),a.createElement("option",{value:"weekday"},"Get Day of the Week for A KR Date"),a.createElement("option",{value:"add"},"Add days to a KR date"),a.createElement("option",{value:"diff"},"Find the difference between two KR dates")),a.createElement("div",{className:"spacer"}),a.createElement("div",{id:"standardDateElement"},a.createElement("label",{htmlFor:"standardDate",className:"column three columns"},"Standard Date"),a.createElement("input",{id:"standardDate",title:"Standard Gregorian Date",type:"date",className:"four columns"})),a.createElement("div",{id:"lotrDateElement",className:"hidden"},a.createElement("label",{className:"column three columns"},"LOTR Date"),a.createElement(d,{name:"Day",options:n,onChange:e=>{t(e)},className:"two columns"}),a.createElement(d,{name:"Month",options:D,onChange:e=>{N(e),W(1,e,b)},className:"three columns"}),a.createElement("input",{type:"number",className:"two columns",placeholder:"Year",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),onChange:e=>{A(e.target.value),W(1,v,e.target.value)}}),a.createElement("select",{id:"lotrAge1",title:"King's Reckoning Age",className:"two columns",defaultValue:"FA",onChange:e=>I(e.target.value)},a.createElement("option",{value:"FA"},"FA"),a.createElement("option",{value:"TA"},"TA"))),a.createElement("div",{className:"spacer"}),a.createElement("div",{id:"lotrDateAdditionElement",className:"hidden"},a.createElement("label",{htmlFor:"dayInput",className:"column three columns"},"Days"),a.createElement("input",{type:"number",id:"dayInput",className:"four columns",placeholder:"Days",onChange:e=>V(parseInt(e.target.value)||0)}),a.createElement("div",{className:"spacer"})),a.createElement("div",{id:"lotrDateDifferenceElement",className:"hidden"},a.createElement("label",{className:"column three columns"},"LOTR Date"),a.createElement(d,{name:"Day",options:C,onChange:e=>T(e),className:"two columns"}),a.createElement(d,{name:"Month",options:R,onChange:e=>{F(e),W(2,e,O)},className:"three columns"}),a.createElement("input",{type:"number",className:"two columns",placeholder:"Year",onKeyDown:e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),onChange:e=>{G(e.target.value),W(2,L,e.target.value)}}),a.createElement("select",{id:"lotrAge2",title:"King's Reckoning Age",className:"two columns",defaultValue:"FA",onChange:e=>Y(e.target.value)},a.createElement("option",{value:"FA"},"FA"),a.createElement("option",{value:"TA"},"TA")),a.createElement("div",{className:"spacer"})),a.createElement("div",{className:"break"}),a.createElement("p",{className:"output nine columns",id:"calculatorOut"},q),a.createElement("input",{type:"button",onClick:()=>P(),value:"Calculate",className:"three columns"})),a.createElement("hr",null),a.createElement("h3",{id:"monthsTable"},"Months, Days, and Seasons"),a.createElement("table",{className:"one-half column"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Number"),a.createElement("th",null,"Month"),a.createElement("th",null,"Day Count"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,"NA"),a.createElement("td",null,"Yestarë"),a.createElement("td",null,"1")),a.createElement("tr",null,a.createElement("td",null,"1"),a.createElement("td",null,"Narwain"),a.createElement("td",null,"30")),a.createElement("tr",null,a.createElement("td",null,"2"),a.createElement("td",null,"Nínui"),a.createElement("td",null,"30")),a.createElement("tr",null,a.createElement("td",null,"3"),a.createElement("td",null,"Gwaeron"),a.createElement("td",null,"30")),a.createElement("tr",null,a.createElement("td",null,"4"),a.createElement("td",null,"Gwirith"),a.createElement("td",null,"30")),a.createElement("tr",null,a.createElement("td",null,"5"),a.createElement("td",null,"Lothron"),a.createElement("td",null,"30")),a.createElement("tr",null,a.createElement("td",null,"6"),a.createElement("td",null,"Nórui"),a.createElement("td",null,"31")),a.createElement("tr",null,a.createElement("td",null,"NA"),a.createElement("td",null,"Loëndë"),a.createElement("td",null,"1 (2)")),a.createElement("tr",null,a.createElement("td",null,"7"),a.createElement("td",null,"Cerveth"),a.createElement("td",null,"31")),a.createElement("tr",null,a.createElement("td",null,"8"),a.createElement("td",null,"Urui"),a.createElement("td",null,"30")),a.createElement("tr",null,a.createElement("td",null,"9"),a.createElement("td",null,"Ivanneth"),a.createElement("td",null,"30")),a.createElement("tr",null,a.createElement("td",null,"10"),a.createElement("td",null,"Narbeleth"),a.createElement("td",null,"30")),a.createElement("tr",null,a.createElement("td",null,"11"),a.createElement("td",null,"Hithui"),a.createElement("td",null,"30")),a.createElement("tr",null,a.createElement("td",null,"12"),a.createElement("td",null,"Girithron"),a.createElement("td",null,"30")),a.createElement("tr",null,a.createElement("td",null,"NA"),a.createElement("td",null,"Mettarë"),a.createElement("td",null,"1")))),a.createElement("div",{className:"one-half column"},a.createElement("p",null,"In the North-West of Middle Earth (Including Eriador, Rhovanion, Rohan, Gondor, and their surrounding areas), winter is generally regarded as lasting from Girithron to Nínui, Spring from Gwaeron to Lothron, Summer from Nórui to Urui, and Fall from Ivanneth to Hithui. ",a.createElement("br",null),a.createElement("br",null),"The days of the week are Isilya, Aldëa, Menelya, Eärenya, Valanya, Elenya, and Anarya."),a.createElement("table",{className:"equi center rpad"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Day"),a.createElement("th",null,"Equivalent"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,"Isilya"),a.createElement("td",null,"Monday")),a.createElement("tr",null,a.createElement("td",null,"Aldëa"),a.createElement("td",null,"Tuesday")),a.createElement("tr",null,a.createElement("td",null,"Menelya"),a.createElement("td",null,"Wednesday")),a.createElement("tr",null,a.createElement("td",null,"Eärenya"),a.createElement("td",null,"Thursday")),a.createElement("tr",null,a.createElement("td",null,"Valanya"),a.createElement("td",null,"Friday")),a.createElement("tr",null,a.createElement("td",null,"Elenya"),a.createElement("td",null,"Saturday")),a.createElement("tr",null,a.createElement("td",null,"Anarya"),a.createElement("td",null,"Sunday"))))),a.createElement("hr",null),a.createElement("h3",{id:"campaign"},"Campaign Time"),a.createElement("p",null,"As mentioned above, we will use the King's Reckoning for the LOTR D&D campaign. The campaign starts in early to mid Spring (late Gwaeron), and from there depends on the players. Many companies prefer to spend winters somewhere warm..."),a.createElement("div",{className:"double spacer"})))};const N=()=>a.createElement("title",null,"Calendar")}}]);
//# sourceMappingURL=component---src-pages-calendar-tsx-9348299735e19fe7f522.js.map