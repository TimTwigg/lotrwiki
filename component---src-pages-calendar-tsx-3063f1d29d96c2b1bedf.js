"use strict";(self.webpackChunklotrwiki=self.webpackChunklotrwiki||[]).push([[722],{1145:function(e,t,n){n.r(t),n.d(t,{Head:function(){return w},default:function(){return b}});var l=n(7294),a=n(4842),r=n(3522);const d=["Yestarë","Narwain","Nínui","Gwaeron","Gwirith","Lothron","Nórui","Loëndë","Cerveth","Urui","Ivanneth","Narbeleth","Hithui","Girithron","Mettarë"],o=[1,30,30,30,30,30,31,1,31,30,30,30,30,30,1],c=["January","February","March","April","May","June","July","August","September","October","November","December"],i=[31,28,31,30,31,30,31,31,30,31,30,31];function m(e){return e.reduce(((e,t)=>e+t),0)}function s(e,t,n,l,a){var r;return r="lotr"==l?o.slice():i.slice(),n%4==0&&("lotr"==l?r[7]=2:r[1]=29),m(r.slice(0,t))+e+a}function u(e){var t=0;if(0==e)e=m(o)-1,t=-1;else if(e<0)for(;e<0;)t-=1,e+=m(o);else if(e>m(o)){let n=m(o);for(;e>n;)e-=n,t+=1}let n=0,l=0;for(;e>0;)l=e,e-=o[n],n+=1;return{day:l,month:n-1,year:t}}const E={day:1,month:"Yestarë",year:1,weekday:"Elenya"},h=["Isilya","Aldëa","Menelya","Eärenya","Valanya","Elenya","Anarya"];function y(e,t,n){console.log(e,t,n);let l=s(e,t,n,"lotr",0)-1;console.log("daycount: ",l);for(let r=1;r<n;++r)l+=365,(n-r)%4==0&&(l+=1);let a=h.indexOf(E.weekday);return console.log(a,l,l%7),h[(l+a)%7]}var f=!1;const p=2,v=2023;function g(e){var t;let n=document.getElementById(e);return null===(t=n.options[n.selectedIndex])||void 0===t?void 0:t.value}function N(e,t){let n=document.getElementById(e);null!=n&&(n.innerText=t)}function D(e,t){void 0===t&&(t=!1);var n=document.getElementById("lotrYear"+e),l=document.getElementById("lotrMonth"+e),a=document.getElementById("lotrDay"+e);if(t)var r="Year",c="Month",i="Day";else{var m,s,u;r=null===(m=n.options[n.selectedIndex])||void 0===m?void 0:m.value,c=null===(s=l.options[l.selectedIndex])||void 0===s?void 0:s.value,i=null===(u=a.options[a.selectedIndex])||void 0===u?void 0:u.value;null!=r&&null!=c||(r="1",c="Yestarë",i="1")}for(;n.firstChild;)n.removeChild(n.lastChild);for(;l.firstChild;)l.removeChild(l.lastChild);for(;a.firstChild;)a.removeChild(a.lastChild);var E=d.slice(),h=o.slice();parseInt(r)%4==0&&(E[7]="Enderi",h[7]=2);let y=document.createElement("option");y.value="Year",y.text="Year",y.disabled=!0,"Year"==r&&(y.selected=!0),n.appendChild(y);for(var f=1;f<=10;++f){let e=document.createElement("option");e.text=f.toString(),e.value=f.toString(),parseInt(r)==f&&(e.selected=!0),n.appendChild(e)}for(var p of(-1==E.indexOf(c)&&(c="Month"),y=document.createElement("option"),y.value="Month",y.text="Month",y.disabled=!0,"Month"==c&&(y.selected=!0),l.appendChild(y),E)){let e=document.createElement("option");e.text=p,e.value=p,c==p&&(e.selected=!0),l.appendChild(e)}var v=E.findIndex((e=>e===c)),g=h[v];y=document.createElement("option"),y.value="Day",y.text="Day",y.disabled=!0,("Day"==i||-1==v||parseInt(i)>g)&&(y.selected=!0),a.appendChild(y);for(var N=1;N<=g;++N){let e=document.createElement("option");e.text=N.toString(),e.value=N.toString(),parseInt(i)==N&&(e.selected=!0),a.appendChild(e)}}function I(){var e="",t=g("optionPicker");if("convert"==t){let t=document.getElementById("standardDate").value;if(""==t||null==t)return void N("calculatorOut","No Date Selected");let n=new Date(t),l=u(s(n.getUTCDate(),n.getUTCMonth(),n.getUTCFullYear(),"standard",0));e=y(l.day,l.month,l.year+p)+", ",e+=String(l.day).padStart(2,"0")+" "+d[l.month]+" "+String(l.year+p).padStart(2,"0")+" (Fourth Age)"}else if("reverse"==t){let t=parseInt(g("lotrDay1")),n=parseInt(g("lotrYear1")),l=g("lotrMonth1");if(isNaN(t)||0==t||"Month"==l||isNaN(n))return void N("calculatorOut","No Date Selected");let a=d.indexOf(l);n%4==0&&"Enderi"==l&&(a=7);let r=function(e){var t=0;if(0==e)e=m(i)-1,t=-1;else if(e<0)for(;e<0;)t-=1,e+=m(i);else if(e>m(i)){let n=m(i);for(;e>n;)e-=n,t+=1}let n=0,l=0;for(;e>0;)l=e,e-=i[n],n+=1;return{day:l,month:n-1,year:t}}(s(t,a,n,"lotr",0));e=String(r.day).padStart(2,"0")+" "+c[r.month]+" "+String(r.year+v).padStart(2,"0")}else if("weekday"==t){let t=parseInt(g("lotrDay1")),n=parseInt(g("lotrYear1")),l=g("lotrMonth1");if(isNaN(t)||0==t||"Month"==l||isNaN(n))return void N("calculatorOut","No Date Selected");let a=d.indexOf(l);n%4==0&&"Enderi"==l&&(a=7);let r=y(t,a,n);e=t+" "+l+" "+n+" was a"+("M"==r[0]||"V"==r[0]?"":"n")+" "+r+"."}else if("add"==t){let t=parseInt(g("lotrDay1")),n=parseInt(g("lotrYear1")),l=g("lotrMonth1"),a=parseInt(document.getElementById("dayInput").value);if(isNaN(t)||0==t||"Month"==l||isNaN(n))return void N("calculatorOut","No Date Selected");isNaN(a)&&(a=0);let r=d.indexOf(l);n%4==0&&"Enderi"==l&&(r=7);let o=u(s(t,r,n,"lotr",a));e=y(o.day,o.month,o.year+n)+", ",e+=String(o.day).padStart(2,"0")+" "+d[o.month]+" "+String(o.year+n).padStart(2,"0")}else if("diff"==t){let t=parseInt(g("lotrDay1")),a=parseInt(g("lotrYear1")),r=g("lotrMonth1"),o=parseInt(g("lotrDay2")),c=parseInt(g("lotrYear2")),i=g("lotrMonth2");if(isNaN(t)||isNaN(o)||0==t||0==o||"Month"==r||"Month"==i||isNaN(a)||isNaN(c))return void N("calculatorOut","Dates Note Properly Selected");let m=d.indexOf(r),u=d.indexOf(i);a%4==0&&"Enderi"==r&&(m=7),c%4==0&&"Enderi"==i&&(u=7);let E=s(t,m,a,"lotr",0),h=s(o,u,c,"lotr",0)-E;if(a!=c){for(var n=0,l=0;l<Math.abs(c-a);++l)a<c?(n+=365,(a+l)%4==0&&(n+=1)):(n-=365,(c+l)%4==0&&(n-=1));h+=n}e=Math.abs(h)+" days"}N("calculatorOut",e)}var b=()=>l.createElement(a.Z,{title:"Calendar"},l.createElement("div",null,l.createElement("h1",null,"Calendars and the Reckoning of Time"),l.createElement(r.z,{hideWhenSmall:!0,pageTitle:"Calendar",links:[{name:"Overview",url:"/calendar#overview"},{name:"Calculator",url:"/calendar#calculator"},{name:"Months, Days, Seasons",url:"/calendar#monthsTable"},{name:"Campaign Time",url:"/calendar#campaign"}]}),l.createElement("hr",null),l.createElement("h3",{id:"overview"},"Overview"),l.createElement("p",null,"Middle Earth has many calendars, from the elven calendar to the King's Reckoning to the Steward's Reckoning to the New Reckoning to the Shire Reckoning. These can quickly become confusing, and who really needs to keep detailed track of time for a D&D campaign anyway? ",l.createElement("br",null),"Answer: the DM. ",l.createElement("br",null),"And sometimes some players like to know these things. ",l.createElement("br",null),"And some quests rely on specific timing. ",l.createElement("br",null),"And ... ",l.createElement("br",null),"You get the point."),l.createElement("p",null,"For the LOTR D&D Campiagn, we use a slightly adapted form of the King's Reckoning. ",l.createElement("br",null),"The standard King's Reckoning is very similar to our own Gregorian calendar. There are twelve months, ten with 30 days and 2 with 31. There are 2 days between one year and the next and 1 mid-year day. The calendar year begins at mid-winter. ",l.createElement("br",null),"The months of the year are: ",l.createElement("br",null),"Narwain, Nínui, Gwaeron, Gwirith, Lothron, Nórui, Cerveth, Urui, Ivanneth, Narbeleth, Hithui, and Girithron. ",l.createElement("br",null),"The year-start day is Yestarë, the year-end day is Mettarë, and the mid-year day is Loëndë. ",l.createElement("br",null),"Nórui and Cerveth have 31 days, the rest have 30. On a leap year, the extra day goes in the middle and there are 2 mid-year days, called the Enderi."),l.createElement("hr",null),l.createElement("h3",{id:"calculator"},"Calculator"),l.createElement("p",null,"Use this calendar calculator to convert between regular dates and the King's Reckoning (KR). Date addition is also supported. ",l.createElement("br",null),"If you have a calendar calculation you would like to perform that is not currently supported, contact the developer. ",l.createElement("br",null),"NOTE: King's Reckoning dates are by default in the Fourth Age. Operations involving other ages are currently not supported."),l.createElement("form",{className:"container"},l.createElement("label",{htmlFor:"optionPicker",className:"offset-by-one column three columns"},"Operation"),l.createElement("select",{id:"optionPicker",className:"eight columns",onChange:e=>{return"convert"==(t=e.target.value)?(document.getElementById("lotrDateElement").classList.add("hidden"),document.getElementById("standardDateElement").classList.remove("hidden"),document.getElementById("lotrDateAdditionElement").classList.add("hidden"),document.getElementById("lotrDateDifferenceElement").classList.add("hidden")):"reverse"==t||"weekday"==t?(document.getElementById("lotrDateElement").classList.remove("hidden"),document.getElementById("standardDateElement").classList.add("hidden"),document.getElementById("lotrDateAdditionElement").classList.add("hidden"),document.getElementById("lotrDateDifferenceElement").classList.add("hidden")):"add"==t?(document.getElementById("lotrDateElement").classList.remove("hidden"),document.getElementById("standardDateElement").classList.add("hidden"),document.getElementById("lotrDateAdditionElement").classList.remove("hidden"),document.getElementById("lotrDateDifferenceElement").classList.add("hidden")):"diff"==t&&(document.getElementById("lotrDateElement").classList.remove("hidden"),document.getElementById("standardDateElement").classList.add("hidden"),document.getElementById("lotrDateAdditionElement").classList.add("hidden"),document.getElementById("lotrDateDifferenceElement").classList.remove("hidden")),document.getElementById("lotrMonth1").options.length<1&&(f=!1),void(f||(D(1,!0),D(2,!0),f=!0));var t}},l.createElement("option",{value:"convert"},"Convert from Standard Date"),l.createElement("option",{value:"reverse"},"Convert to Standard Date"),l.createElement("option",{value:"weekday"},"Get Day of the Week for A KR Date"),l.createElement("option",{value:"add"},"Add days to a KR date"),l.createElement("option",{value:"diff"},"Find the difference between two KR dates")),l.createElement("div",{className:"spacer"}),l.createElement("div",{id:"standardDateElement"},l.createElement("label",{htmlFor:"standardDate",className:"offset-by-one column three columns"},"Standard Date"),l.createElement("input",{id:"standardDate",title:"Standard Gregorian Date",type:"date",className:"four columns"})),l.createElement("div",{id:"lotrDateElement",className:"hidden"},l.createElement("label",{className:"offset-by-one column three columns"},"LOTR Date (FA)"),l.createElement("select",{id:"lotrDay1",title:"King's Reckoning Day",className:"two columns"}),l.createElement("select",{id:"lotrMonth1",title:"King's Reckoning Month",className:"three columns",onChange:()=>D(1)}),l.createElement("select",{id:"lotrYear1",title:"King's Reckoning Year",className:"two columns",onChange:()=>D(1)})),l.createElement("div",{className:"spacer"}),l.createElement("div",{id:"lotrDateAdditionElement",className:"hidden"},l.createElement("label",{htmlFor:"dayInput",className:"offset-by-one column three columns"},"Days"),l.createElement("input",{type:"number",id:"dayInput",className:"four columns"}),l.createElement("div",{className:"spacer"})),l.createElement("div",{id:"lotrDateDifferenceElement",className:"hidden"},l.createElement("label",{className:"offset-by-one column three columns"},"LOTR Date (FA)"),l.createElement("select",{id:"lotrDay2",title:"King's Reckoning Day",className:"two columns"}),l.createElement("select",{id:"lotrMonth2",title:"King's Reckoning Month",className:"three columns",onChange:()=>D(2)}),l.createElement("select",{id:"lotrYear2",title:"King's Reckoning Year",className:"two columns",onChange:()=>D(2)}),l.createElement("div",{className:"spacer"})),l.createElement("p",{className:"output nine columns",id:"calculatorOut"}),l.createElement("input",{type:"button",onClick:()=>I(),value:"Calculate"})),l.createElement("hr",null),l.createElement("h3",{id:"monthsTable"},"Months, Days, and Seasons"),l.createElement("table",{className:"one-half column"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Number"),l.createElement("th",null,"Month"),l.createElement("th",null,"Day Count"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"NA"),l.createElement("td",null,"Yestarë"),l.createElement("td",null,"1")),l.createElement("tr",null,l.createElement("td",null,"1"),l.createElement("td",null,"Narwain"),l.createElement("td",null,"30")),l.createElement("tr",null,l.createElement("td",null,"2"),l.createElement("td",null,"Nínui"),l.createElement("td",null,"30")),l.createElement("tr",null,l.createElement("td",null,"3"),l.createElement("td",null,"Gwaeron"),l.createElement("td",null,"30")),l.createElement("tr",null,l.createElement("td",null,"4"),l.createElement("td",null,"Gwirith"),l.createElement("td",null,"30")),l.createElement("tr",null,l.createElement("td",null,"5"),l.createElement("td",null,"Lothron"),l.createElement("td",null,"30")),l.createElement("tr",null,l.createElement("td",null,"6"),l.createElement("td",null,"Nórui"),l.createElement("td",null,"31")),l.createElement("tr",null,l.createElement("td",null,"NA"),l.createElement("td",null,"Loëndë"),l.createElement("td",null,"1 (2)")),l.createElement("tr",null,l.createElement("td",null,"7"),l.createElement("td",null,"Cerveth"),l.createElement("td",null,"31")),l.createElement("tr",null,l.createElement("td",null,"8"),l.createElement("td",null,"Urui"),l.createElement("td",null,"30")),l.createElement("tr",null,l.createElement("td",null,"9"),l.createElement("td",null,"Ivanneth"),l.createElement("td",null,"30")),l.createElement("tr",null,l.createElement("td",null,"10"),l.createElement("td",null,"Narbeleth"),l.createElement("td",null,"30")),l.createElement("tr",null,l.createElement("td",null,"11"),l.createElement("td",null,"Hithui"),l.createElement("td",null,"30")),l.createElement("tr",null,l.createElement("td",null,"12"),l.createElement("td",null,"Girithron"),l.createElement("td",null,"30")),l.createElement("tr",null,l.createElement("td",null,"NA"),l.createElement("td",null,"Mettarë"),l.createElement("td",null,"1")))),l.createElement("div",{className:"one-half column"},l.createElement("p",null,"In the North-West of Middle Earth (Including Eriador, Rhovanion, Rohan, Gondor, and their surrounding areas), winter is generally regarded as lasting from Girithron to Nínui, Spring from Gwaeron to Lothron, Summer from Nórui to Urui, and Fall from Ivanneth to Hithui. ",l.createElement("br",null),l.createElement("br",null),"The days of the week are Isilya, Aldëa, Menelya, Eärenya, Valanya, Elenya, and Anarya."),l.createElement("table",{className:"equi center rpad"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Day"),l.createElement("th",null,"Equivalent"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"Isilya"),l.createElement("td",null,"Monday")),l.createElement("tr",null,l.createElement("td",null,"Aldëa"),l.createElement("td",null,"Tuesday")),l.createElement("tr",null,l.createElement("td",null,"Menelya"),l.createElement("td",null,"Wednesday")),l.createElement("tr",null,l.createElement("td",null,"Eärenya"),l.createElement("td",null,"Thursday")),l.createElement("tr",null,l.createElement("td",null,"Valanya"),l.createElement("td",null,"Friday")),l.createElement("tr",null,l.createElement("td",null,"Elenya"),l.createElement("td",null,"Saturday")),l.createElement("tr",null,l.createElement("td",null,"Anarya"),l.createElement("td",null,"Sunday"))))),l.createElement("hr",null),l.createElement("h3",{id:"campaign"},"Campaign Time"),l.createElement("p",null,"As mentioned above, we will use the King's Reckoning for the LOTR D&D campaign. The campaign starts in early to mid Spring (late Gwaeron), and from there depends on the players. Many companies prefer to spend winters somewhere warm..."),l.createElement("div",{className:"double spacer"})));const w=()=>l.createElement("title",null,"Calendar")}}]);
//# sourceMappingURL=component---src-pages-calendar-tsx-3063f1d29d96c2b1bedf.js.map