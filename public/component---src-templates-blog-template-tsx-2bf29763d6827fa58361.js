(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{y9P6:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=a("9Dj+"),o=a("H8eV");t.default=function(e){var t,a,l=e.data,c=e.location,s=e.pageContext,m=(null===(t=l.site)||void 0===t||null===(a=t.siteMetadata)||void 0===a?void 0:a.title)||"Title",u=l.allMarkdownRemark.nodes;return 0===u.length?n.a.createElement(i.a,{location:c,title:m},n.a.createElement(o.a,{title:"All posts"}),n.a.createElement("p",null,"No posts...")):n.a.createElement(i.a,{location:c,title:m},n.a.createElement(o.a,{title:"All posts"}),n.a.createElement("ol",{style:{listStyle:"none"}},u.map((function(e){var t,a,l=(null===(t=e.frontmatter)||void 0===t?void 0:t.title)||(null===(a=e.fields)||void 0===a?void 0:a.slug);return n.a.createElement("li",{key:e.fields.slug},n.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h2",null,n.a.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},l))),n.a.createElement("small",null,e.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))),n.a.createElement("nav",{className:"paginate"},n.a.createElement("ul",{className:"paginate-list"},!s.isFirst&&n.a.createElement("li",{className:"prev"},n.a.createElement(r.Link,{to:2===s.currentPage?"/blog/":"/blog/"+(s.currentPage-1),rel:"prev"},n.a.createElement(FontAwesomeIcon,{icon:faChevronLeft}),n.a.createElement("span",null,"Prev"))),!s.isLast&&n.a.createElement("li",{className:"next"},n.a.createElement(r.Link,{to:"/blog/"+(s.currentPage+1)+"/",rel:"next"},n.a.createElement("span",null,"Next"),n.a.createElement(FontAwesomeIcon,{icon:faChevronRight}))))))};var c="2723635836"}}]);
//# sourceMappingURL=component---src-templates-blog-template-tsx-2bf29763d6827fa58361.js.map