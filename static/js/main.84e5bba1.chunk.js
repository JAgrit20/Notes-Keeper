(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),i=a(8),s=a(1);var o=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"navbar-fixed white blue-text text-darken-2"},l.a.createElement("nav",null,l.a.createElement("div",{className:"white blue-text text-darken-2 nav-wrapper"},l.a.createElement("a",{href:"#!",className:"white blue-text text-darken-2 brand-logo logo"},l.a.createElement("i",{className:"material-icons"},"description"),l.a.createElement("span",{className:"hero-text"},"Keep")),l.a.createElement("div",{className:"search"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{id:"search",type:"search",required:!0}),l.a.createElement("label",{className:"label-icon",htmlFor:"search"},l.a.createElement("i",{className:"material-icons blue-text search-icon"},"search")),l.a.createElement("i",{className:"material-icons close-icon"},"close"))),l.a.createElement("ul",{className:"white blue-text text-darken-2 right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",{className:"blue-text text-darken-2",href:"/"},l.a.createElement("i",{className:"material-icons"},"refresh"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/JAgrit20/Notes-Keeper",className:"blue-text text-darken-2"},l.a.createElement("i",{className:"material-icons"},"code"))))))))};function m(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"col s12 m3"},l.a.createElement("div",{className:"card white lighten"},l.a.createElement("div",{className:"card-content black-text"},l.a.createElement("span",{className:"card-title"},e.title),l.a.createElement("p",{className:"text-justify"},e.content)),l.a.createElement("div",{className:"card-action blue-text"},l.a.createElement("a",{style:{display:"flex",flexDirection:"row-reverse",marginRight:"5px"},className:"blue-text text-lighten-3",href:"#"},l.a.createElement("i",{onClick:function(){e.del(e.id)},className:"small material-icons tooltipped","data-position":"top","data-tooltip":"Delete"},"delete"),l.a.createElement("i",{style:{marginRight:"10px",fontSize:"1.8em"},className:"small material-icons tooltipped","data-position":"top","data-tooltip":"Copy To Clipboard",onClick:function(){navigator.clipboard.writeText(e.content)}},"file_copy"))))))}var u=function(e,t){if("NULL"!==e.note)return l.a.createElement(m,{del:t,id:e.id,key:e.id,title:e.title,content:e.note})};var d=function(){return l.a.createElement("div",null,l.a.createElement("footer",{className:"blue lighten-4 page-footer"},l.a.createElement("div",{className:"blue lighten-2 footer-copyright"},l.a.createElement("div",{className:"container white-text text-lighten-2 "},l.a.createElement("center",null,l.a.createElement("a",{className:"white-text text-lighten-2 middle",href:""},"Made with \u2665 by ",l.a.createElement("b",null,"Jagrit")))))))};var E=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],r=a[1],i=l.a.useState({textAlign:"justfiy"}),o=Object(s.a)(i,2),m=o[0],u=o[1],d=Object(n.useState)(""),E=Object(s.a)(d,2),f=E[0],p=E[1],h=Object(n.useState)(""),N=Object(s.a)(h,2),v=N[0],g=N[1];function x(e){r(!0),p(e.target.value)}return l.a.createElement("div",{className:"newnote"},l.a.createElement("div",{className:"col s12 m6"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("span",{className:"card-title"})),l.a.createElement("div",{className:"card-content"},c?l.a.createElement("div",{className:"input-title"},l.a.createElement("input",{id:"email",type:"note",onChange:function(e){g(e.target.value)},value:v,placeholder:"Title"})):null,l.a.createElement("p",null,l.a.createElement("textarea",{value:f,onClick:x,onChange:x,style:m,onInput:function(e){u({height:e.target.scrollHeight+"px",textAlign:"justfiy",maxHeight:"500px"})},placeholder:"Take a note...",id:"textarea1",className:"materialize-textarea"}))),c?l.a.createElement("a",{onClick:function(){e.add(v,f),g(""),p("")},className:"btn-floating btn-large halfway-fab waves-effect waves-dark blue"},l.a.createElement("i",{className:"material-icons"},"add")):null)))},f=a(14);var p=function(){var e=JSON.parse(f.get("notes")),t={id:9999999,title:"NULL",note:"NULL"},a=l.a.useState((function(){return null!=e?[e[0]?e[0]:t,e[2]?e[2]:t,e[1]?e[1]:t,e[3]?e[3]:t,e[4]?e[4]:t,e[5]?e[5]:t,e[6]?e[6]:t,e[7]?e[7]:t]:[{id:0,title:"Hey, I'm a note!",note:"Click the delete icon below to delete me and start making your own notes ;)"}]})),n=Object(s.a)(a,2),c=n[0],r=n[1];function m(e,t){if(c!==e){var a=c.filter((function(e){return 9999999!==e.id}));f("notes",JSON.stringify(a)),console.log("Notes Saved")}else console.log(t),r((function(a){return e=a,a.filter((function(e){return e.id!==t}))})),setTimeout((function(){m(e,t)}),1e3)}function p(e){var t;r((function(a){return t=a,a.filter((function(t){return t.id!==e}))})),m(t,e)}return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(E,{add:function(e,t){var a=Math.round(100*Math.random());r((function(n){return[].concat(Object(i.a)(n),[{id:a,title:e,note:t}])})),setTimeout(m,1e3)}}),l.a.createElement("div",{className:"row"},c.map((function(e){return u(e,p)}))),l.a.createElement(d,null))};r.a.render(l.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.84e5bba1.chunk.js.map