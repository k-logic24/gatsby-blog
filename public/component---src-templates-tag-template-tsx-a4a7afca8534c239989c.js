(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{DAw1:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),s=a("9eSz"),i=a.n(s),c=a("Th6I"),m=a("H8eV"),o=a("NMcm");t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMarkdownRemark.edges,s=a.tagId,p=a.isFirst,g=a.isLast,u=a.currentPage,E=a.tagPages;return 0===n.length?l.a.createElement(c.a,{title:"TAG："+s},l.a.createElement(m.a,{title:"TAG："+s}),l.a.createElement("p",null,"No posts...")):l.a.createElement(c.a,{title:"タグ: "+s},l.a.createElement(m.a,{title:"タグ: "+s}),l.a.createElement("section",{className:"section blog"},l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",{className:"pb-4 mb-10 section__ttl"},"タグ: "+s)),l.a.createElement("ul",{className:"blog-list"},n.map((function(e){var t=e.node;return l.a.createElement("li",{key:t.fields.slug},l.a.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article"},l.a.createElement("figure",{className:"overflow-hidden rounded relative blog-list__imgwrap"},l.a.createElement(r.Link,{to:"/blog"+t.fields.slug,className:"block transition-transform duration-700 ease-out",itemProp:"url"},l.a.createElement(i.a,{fluid:t.frontmatter.hero.childImageSharp.fluid,alt:""})),l.a.createElement("p",{className:"blog-list__date"},t.frontmatter.date)),l.a.createElement("h2",{className:"blog-list__ttl"},l.a.createElement(r.Link,{to:"/blog"+t.fields.slug,itemProp:"url",className:"block hover:opacity-60 transition-opacity"},l.a.createElement("span",{itemProp:"headline"},t.frontmatter.title))),l.a.createElement("div",{className:"mt-2 flex flex-wrap gap-1"},t.frontmatter.tags&&t.frontmatter.tags.map((function(e,t){return l.a.createElement(r.Link,{className:"text-xs md:text-sm post-tag",to:"/tag/"+e,key:t},e)})))))}))),l.a.createElement("div",{className:"max-w-screen-sm mx-auto py-12"},l.a.createElement(o.a,{isFirst:p,isLast:g,currentPage:u,type:"tag/"+s,pages:E}))))}},NMcm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),s=a("IP2g"),i=a("wHSu");t.a=function(e){var t=e.isFirst,a=e.isLast,n=e.currentPage,c=e.type,m=e.pages;return l.a.createElement("nav",{className:"pagination"},l.a.createElement("ul",{className:"pagination-list"},!t&&l.a.createElement("li",{className:"pagination-list__item prev"},l.a.createElement(r.Link,{className:"pagination__link",to:2===n?"/"+c+"/":"/"+c+"/"+(n-1),rel:"prev"},l.a.createElement(s.a,{icon:i.a,className:"pagination__icon prev"}),l.a.createElement("span",{style:{marginLeft:"0.5em"}},"Prev"))),l.a.createElement("li",{className:"page-txt"},"page ",n," / ",m),!a&&l.a.createElement("li",{className:"pagination-list__item next"},l.a.createElement(r.Link,{to:"/"+c+"/"+(n+1)+"/",className:"pagination__link",rel:"next"},l.a.createElement("span",{style:{marginRight:"0.5em"}},"Next"),l.a.createElement(s.a,{icon:i.b,className:"pagination__icon next"})))))}}}]);
//# sourceMappingURL=component---src-templates-tag-template-tsx-a4a7afca8534c239989c.js.map