"use strict";(self.webpackChunkt_ende_landing_page=self.webpackChunkt_ende_landing_page||[]).push([[302],{7302:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var i=n(9439),a=n(2791),s=n(9230),c=n(7689),l=n(1087),r=n(2308),d=n(1694),u=n.n(d),o=n(8385),m=n(9080),h=n(4338),f=n(5290),x=n(9749),_=n(7281),v=n(184),j=function(e){var t=e.data,n=(0,s.$G)().t,d=(0,c.UO)().id,j=(0,a.useState)(!1),p=(0,i.Z)(j,2),w=p[0],N=p[1],g=(0,a.useState)(!1),Z=(0,i.Z)(g,2),b=Z[0],k=Z[1],S=t.articles,y=(0,a.useState)(0),E=(0,i.Z)(y,2),I=E[0],C=E[1],T=(0,a.useState)(I+1),M=(0,i.Z)(T,2),U=M[0],z=M[1],F=(0,a.useState)(null),L=(0,i.Z)(F,2),P=L[0],D=L[1],G=(0,a.useState)(2),O=(0,i.Z)(G,2),R=O[0],V=O[1],$=(0,a.useRef)(null);(0,a.useEffect)((function(){document.documentElement.dataset.page="article",window.scrollTo(0,0)}),[d]),(0,a.useEffect)((function(){var e;R>2&&(null===(e=$.current)||void 0===e||e.scrollIntoView())}),[R]),(0,a.useEffect)((function(){var e=window.matchMedia("(max-width: 1023px)");e.matches!==b&&k(e.matches);var t=function(){return k(e.matches)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[b]);var q=S.find((function(e){return e.id===d})),A=new Image;A.src=q.url,A.onload=function(){return N(!0)};var B=S.filter((function(e){return e.id!==d})),H=B.map((function(e,t){return t<R?(0,v.jsx)(x.Z,{ref:t===R-1?$:null,data:e,isMobile:b},e.id):null}));return(0,v.jsxs)("div",{className:"article-details",children:[(0,v.jsxs)("div",{className:"content-wrapper content-wrapper-flex",children:[(0,v.jsx)("h2",{className:"article-details__title",children:n("interestingTurkey")}),(0,v.jsxs)("div",{className:"article-details__box-content",children:[w?(0,v.jsx)("img",{className:"article-details__image",src:A.src,alt:q.title}):(0,v.jsx)("div",{className:"article-details__spinner_box",children:(0,v.jsx)(r.Z,{})}),(0,v.jsx)("h2",{className:"article-details__article-title",children:q.title}),(0,v.jsx)("p",{className:"article-details__date",children:q.date}),(0,v.jsx)("p",{className:"article-details__text",children:q.text}),(0,v.jsxs)("div",{className:"article-details__box-links",children:[(0,v.jsx)(l.rU,{to:_.Z.contactPath,className:"article-details__contact-link article-details__contact-link-my-contacts",children:n("myContacts")}),(0,v.jsx)(l.rU,{to:_.Z.servicesPath,className:"article-details__contact-link article-details__contact-link-my-services",children:n("myServices")})]})]})]}),(0,v.jsx)("div",{className:"slider-details",children:(0,v.jsx)("div",{className:"content-wrapper content-wrapper-flex",children:b?(0,v.jsxs)(v.Fragment,{children:[H,R!==B.length?(0,v.jsx)("button",{className:u()("article-details__btn",{hidden:!B.length}),type:"button",onClick:function(){R<B.length&&V((function(e){return e+1}))},children:n("showMore")}):null]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.Z,{currentItem:I,nextItem:U,items:B,animationDirection:P}),(0,v.jsx)(m.Z,{items:B,onChangeItem:function(e){D(null);var t=(0,f.Z)(e,I,B),n=t.currentSlideNumber,i=t.nextSlideNumber;C(n),z(i);var a=setTimeout((function(){D((function(){return e}))}),0);return function(){clearTimeout(a)}},children:(0,v.jsx)(h.Z,{items:B,activeItem:I})})]})})})]})}}}]);
//# sourceMappingURL=302.150a25f2.chunk.js.map