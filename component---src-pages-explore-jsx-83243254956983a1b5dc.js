"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[912],{2687:function(A,e,t){t.r(e),t.d(e,{Head:function(){return h},default:function(){return S}});var a=t(7294),l=t(3437),n=t(5030),r=t(6702);const c=A=>{let{logo:e,prefix:t,alt:l}=A;return a.createElement("div",{className:"project__logoWrapper"},a.createElement("img",{src:""+n.Z.AWS_CLOUNDFRONT_URL+t+e,alt:l,className:"project__logo"}))};var o=(0,a.memo)(c);const s=A=>{let{hashtag:e}=A;return a.createElement("p",{style:{color:r.ue[e]},className:"project__hashtag"},a.createElement("span",null,"#"),e)};var m=(0,a.memo)(s);const i=A=>{let{hashtags:e}=A;return a.createElement("div",{className:"project__hashtags"},null==e?void 0:e.map((A=>a.createElement(m,{hashtag:A,key:A}))))};var g=(0,a.memo)(i);const E=A=>{let{name:e,description:t,hashtags:l}=A;return a.createElement(a.Fragment,null,a.createElement("h1",{className:"project__title"},e),a.createElement(g,{hashtags:l}),a.createElement("p",{className:"project__description"},t))};var p=(0,a.memo)(E),d=t(5120),u=t(7227);const v=A=>{let{tech:e}=A;return a.createElement(a.Fragment,{key:e},a.createElement("a",{href:""+n.Z.GOOGLE_SEARCH_URL+e,title:e,target:"_blank",rel:"noopener noreferrer","aria-label":"What is "+e},a.createElement("img",{src:(0,u.S)(e),alt:e,className:"project__tech","data-tooltip-id":e,"data-tooltip-content":e}),a.createElement(d.u,{id:e,place:"bottom"})))};var B=(0,a.memo)(v);const f=A=>{let{stack:e}=A;return a.createElement("div",{className:"project__stackContainer"},a.createElement("h2",{className:"project__stack"},"Stack"),a.createElement("div",{className:"project__stackList"},null==e?void 0:e.map((A=>a.createElement(B,{key:A,tech:A})))))};var C=(0,a.memo)(f),Q=t(982),b=t(9417);var w=A=>{let{name:e}=A;return a.createElement("div",{className:"project__status","data-tooltip-id":e,"data-tooltip-content":"Still in progress"},a.createElement(Q.G,{icon:b.L87,size:"xl",color:"yellow"}),a.createElement(d.u,{id:e,place:"bottom"}))},N=t(3024);const I=A=>{let{npmURL:e,tooltipId:t,content:l}=A;const n=(0,a.useRef)(!0);return a.createElement(a.Fragment,null,a.createElement("a",{href:e,className:"project__webLink",target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>{n.current=!1},onMouseLeave:()=>{n.current=!0},"data-tooltip-id":t,"data-tooltip-content":l,"aria-label":l},a.createElement(Q.G,{icon:N.xDz,size:"2xl",color:"#CB0000",beat:n})),a.createElement(d.u,{id:t,place:"bottom"}))};var P=(0,a.memo)(I);const X=A=>{let{websiteURL:e,tooltipId:t,content:l}=A;const{0:n,1:r}=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement("a",{href:e,className:"project__webLink",target:"_blank",rel:"noopener noreferrer",onMouseOver:()=>{r(!1)},onMouseOut:()=>{r(!0)},"data-tooltip-id":t,"data-tooltip-content":l,"aria-label":l},a.createElement(Q.G,{icon:b.p7q,size:"lg",spinPulse:n})),a.createElement(d.u,{id:t,place:"bottom"}))};var D=(0,a.memo)(X);const z=A=>{let{timeline:e}=A;return a.createElement("p",null,a.createElement("span",null,null==e?void 0:e.startsAt)," - ",a.createElement("span",null,null==e?void 0:e.endsAt))};var L=(0,a.memo)(z);const G=A=>{let{previewImages:e,imageAlt:t,prefix:l,url:r}=A;const{0:c,1:o}=(0,a.useState)(!1),{0:s,1:m}=(0,a.useState)(!1),i=""+n.Z.AWS_CLOUNDFRONT_URL+l+"/Screenshot+("+(null==e?void 0:e.imageNumber)+").webp",g=()=>{window.innerWidth>1024&&o(!0)},E=()=>{window.innerWidth>1024&&o(!1)};return a.createElement("div",{className:"project__imgWrapper"},null!=e&&e.count?a.createElement(a.Fragment,null,c?a.createElement("img",{src:""+n.Z.AWS_CLOUNDFRONT_URL+l+l+".gif",alt:t,className:"project__img",onMouseOver:g,onMouseOut:E,loading:"lazy"}):a.createElement("img",{src:s?i:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAFoCAIAAABIUN0GAAAVeklEQVR4nO3dWVMb6dmAYbSBQIDA2MaAMWPPZGaSqlTl//8Gn+QkNWPjhd0sNggDAiSk70AVfV0NliVB+1GS6zoaFAn10J2+p5f37dzr16/HAIAfKx+9AADwv0iAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABBBgAAggwAAQQYAAIIMAAEECAASCAAANAAAEGgAACDAABitELwP+i8/PzWq12fn5+fX19c3PTbreLxWKpVKpUKrOzszMzMw/+jR8+fKjVap1/XlhYWF1dHfQ3XF1dHR8fn5+fX15edpa5UCiMj49XKpVqtTo9Pf3QizyiWq3WycnJ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JlUqlSEmWH7y5MlD7bvr9XrqgYNzc3N31nfsrhPRt2+cHk65XH716tUQ47CLxeKrV696D6XNdNsIX4PQmwDzI8zPz//888/9T+zXucs3dRnvx3v06NHa2lr/eVhcXFxZWXmQr+48bzF59FYqlXrnpHMiOvlKrVbrcwROb5VKpfeB7G2Tk5O//vprP7OCZLptBK5B+C6noPlxbm5u9vf3b1/MS5mbm1taWuo9aGQgw52C7urcBtV7Gopyufz8+fMHfCjTzs7O4eFh8pVXr1718/D51InoQqHw22+/PchMJp2BOkdHR6l7rFI6F30fPXo00HFtpttGyBqE7xJgfrSbm5tarfb169d6vd5oNFqtVi6XKxaL5XJ5enp6bm7uwee9umeAOzq3An39+rXRaDQajXa7XSgUxsfHK5VKtVp92B332dnZ+vp68pX+l7ler7958yZ56Dw9Pf3LL7881LK1Wq3T09OvX79eXFw0m81ms9lZfaVSaXp6emZmplKpDP1MiEy3jR+5BqEfAgwAAVwDBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAf4PPGCfSHTldqgAAAAASUVORK5CYII=",alt:t,className:"project__img",onMouseOver:g,onMouseOut:E,loading:"lazy",onLoad:()=>{m(!0)}})):null,a.createElement("div",{className:"project__website"},a.createElement("a",{href:r,className:"project__webLink",target:"_blank",rel:"noopener noreferrer"},a.createElement(Q.G,{icon:b.t3U,color:"white"}))))};var M=(0,a.memo)(G);var V=()=>a.createElement("div",{className:"webapps"},a.createElement("h1",{className:"projects__title"},"Web apps"),a.createElement("div",{className:"projects__list"},r.R9.map((A=>{let{name:e,assets:t,description:l,links:n,extras:r}=A;return a.createElement("div",{className:"projects__project",key:e},a.createElement(M,{url:null==n?void 0:n.websiteURL,prefix:null==t?void 0:t.prefix,previewImages:null==t?void 0:t.previewImages,imageAlt:e+" preview"}),a.createElement(o,{prefix:null==t?void 0:t.prefix,logo:null==t?void 0:t.logo,alt:e+"'s logo"}),a.createElement("div",{className:"project__info"},a.createElement("div",{className:"project__webLinkContainer"},(null==n?void 0:n.websiteURL)&&a.createElement(D,{websiteURL:null==n?void 0:n.websiteURL,tooltipId:e,content:"website"}),(null==n?void 0:n.npmURL)&&a.createElement(P,{npmURL:null==n?void 0:n.npmURL,tooltipId:e,content:"NPM details"}),(null==r?void 0:r.isStillProgressive)&&a.createElement(w,{name:e}),a.createElement(L,{timeline:r.timeline})),a.createElement(p,{name:e,description:l,hashtags:null==r?void 0:r.hashtags}),a.createElement(C,{stack:r.stack})))}))));const j=A=>{let{extension:{name:e,assets:t,description:l,links:n,extras:r}}=A;return a.createElement("div",{className:"projects__project",key:e},a.createElement(M,{prefix:null==t?void 0:t.prefix,previewImages:null==t?void 0:t.previewImages,imageAlt:e+" preview"}),a.createElement(o,{prefix:null==t?void 0:t.prefix,logo:null==t?void 0:t.logo,alt:e+"'s logo"}),a.createElement("div",{className:"project__info"},a.createElement("div",{className:"project__webLinkContainer"},(null==n?void 0:n.websiteURL)&&a.createElement(D,{websiteURL:null==n?void 0:n.websiteURL,tooltipId:e,content:"website"}),(null==n?void 0:n.npmURL)&&a.createElement(P,{npmURL:null==n?void 0:n.npmURL,tooltipId:e,content:"NPM details"}),(null==r?void 0:r.isStillProgressive)&&a.createElement(w,{name:e}),a.createElement(L,{timeline:null==r?void 0:r.timeline})),a.createElement(p,{name:e,description:l,hashtags:null==r?void 0:r.hashtags}),a.createElement(C,{stack:null==r?void 0:r.stack})))};var x=(0,a.memo)(j);var W=()=>a.createElement("div",{className:"extensions"},a.createElement("h1",{className:"projects__title"},"Plugins / Packages"),a.createElement("div",{className:"projects__list"},null===r.Rw||void 0===r.Rw?void 0:r.Rw.map((A=>a.createElement(x,{key:A.name,extension:A})))));var T=()=>a.createElement(a.Fragment,null,a.createElement(V,null),a.createElement(W,null));var O=()=>a.createElement("div",{className:"certificates"},a.createElement("a",{href:"https://www.credly.com/badges/ff81e28b-ecde-4cef-a494-834448af8b93",target:"_blank",rel:"noopener noreferrer","aria-label":"aws-certified-cloud-practitioner"},a.createElement("img",{width:150,height:150,src:n.Z.AWS_CLOUNDFRONT+"/badges/aws-certified-cloud-practitioner",alt:"aws-certified-cloud-practitioner"})));var S=()=>{const{0:A,1:e}=(0,a.useState)(n.Z.PROJECTS_SECTION),t=A=>{e(A)};return a.createElement(l.Z,null,a.createElement("section",{id:"projects",className:"projects"},a.createElement("div",{className:"explore__list"},a.createElement("button",{type:"button",className:"explore__item "+(A===n.Z.PROJECTS_SECTION?"explore__item--active":""),onClick:()=>t(n.Z.PROJECTS_SECTION)},"Projects"),a.createElement("button",{type:"button",className:"explore__item "+(A===n.Z.CERTIFICATE_SECTION?"explore__item--active":""),onClick:()=>t(n.Z.CERTIFICATE_SECTION)},"Certificates")),A===n.Z.PROJECTS_SECTION?a.createElement(T,null):a.createElement(O,null)))};const h=()=>a.createElement("title",null,"Explore - Arul Valan Anto")}}]);
//# sourceMappingURL=component---src-pages-explore-jsx-83243254956983a1b5dc.js.map