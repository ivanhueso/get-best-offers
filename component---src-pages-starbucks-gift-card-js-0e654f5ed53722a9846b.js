(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{181:function(e,t,a){"use strict";a.r(t);var s=a(216),i=a(0),n=a.n(i),r=a(193),o=a(186),d=a(191),c=(a(192),a(217),a(198)),l=a.n(c),A="https://www.mb102.com/lnk.asp?o=11964&c=918277&a=367983&k=BFD2058767BE27F81C974DC2CBE75986&l=12176";t.default=function(){return n.a.createElement(o.StaticQuery,{query:"3975089059",render:function(e){var t=e.desktop.childImageSharp.fluid;return n.a.createElement(l.a,{Tag:"section",fluid:t,backgroundColor:"#040e18",className:"starbucks-gift-card"},n.a.createElement(r.a,{title:"Starbucks Gift Card | UK | GB Offers",description:"Your chance to win a £150 starbucks gift card"}),n.a.createElement("div",{className:"content-page"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"box"},n.a.createElement("h1",null,"How Did You Hear About This Offer?"),n.a.createElement("h3",null,"YOUR CHANCE TO WIN A ",n.a.createElement("strong",null,"£150 STARBUCKS")," GIFT CARD"),n.a.createElement("a",{href:A,title:"Instagram",className:"btn-blue orange"},"INSTAGRAM"),n.a.createElement("a",{href:A,title:"Facebook",className:"btn-blue orange"},"FACEBOOK"),n.a.createElement("a",{href:A,title:"Google",className:"btn-blue orange"},"GOOGLE"))))),n.a.createElement(d.a,null))},data:s})}},198:function(e,t,a){"use strict";var s=a(8);t.__esModule=!0,t.default=t.createImageToLoad=void 0;var i=s(a(0)),n=s(a(4)),r=s(a(199));const o=e=>{let t=Object.assign({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},d=e=>{if("undefined"!=typeof window){const t=o(e),a=new Image;return a.complete||"function"!=typeof t.onLoad||a.addEventListener("load",t.onLoad),"function"==typeof t.onError&&a.addEventListener("error",t.onError),a.src=t.fluid?t.fluid.src:t.fixed.src,a}return null};t.createImageToLoad=d;const c={},l=e=>{const t=o(e),a=t.fluid?t.fluid.src:t.fixed.src;return c[a]||!1},A=e=>{const t=o(e),a=t.fluid?t.fluid.src:t.fixed.src;c[a]=!0};let u;const f=[];const g=(e,t)=>{(void 0===u&&"undefined"!=typeof window&&window.IntersectionObserver&&(u=new window.IntersectionObserver(e=>{e.forEach(e=>{f.forEach(t=>{t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),u).observe(e),f.push([e,t])},b=e=>{const t=e.src?`src="${e.src}" `:'src="" ',a=e.sizes?`sizes="${e.sizes}" `:"",s=e.srcSetWebp?`<source type='image/webp' srcSet="${e.srcSetWebp}" ${a}/>`:"",i=e.srcSet?`<source srcSet="${e.srcSet}" ${a}/>`:"",n=e.title?`title="${e.title}" `:"",r=e.alt?`alt="${e.alt}" `:'alt="" ',o=e.width?`width="${e.width}" `:"",d=e.height?`height="${e.height}" `:"",c=e.opacity?e.opacity:"1";return`<picture>${s}${i}<img ${o}${d}${t}${r}${n}style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:${e.transitionDelay?e.transitionDelay:"0.5s"};opacity:${c};width:100%;height:100%;object-fit:cover;object-position:center"/></picture>`},p=({classId:e,backgroundSize:t,backgroundRepeat:a,transitionDelay:s,bgImage:i,nextImage:n,afterOpacity:r,bgColor:o})=>`\n          .gatsby-background-image-${e}:before,\n          .gatsby-background-image-${e}:after {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            -webkit-background-size: ${t};\n            -moz-background-size: ${t};\n            -o-background-size: ${t};\n            background-size: ${t};\n            transition: opacity ${s} ease-in-out;\n            -webkit-transition: opacity ${s} ease-in-out;\n            -moz-transition: opacity ${s} ease-in-out;\n            -o-transition: opacity ${s} ease-in-out;\n          }\n          .gatsby-background-image-${e}:before {\n            z-index: -101;\n            background-color: ${o};\n            background-image: url(${i});\n            ${a}\n          }\n          .gatsby-background-image-${e}:after {\n            z-index: -100;\n            background-image: url(${n});\n            ${a}\n            opacity: ${r};\n          }\n        `;class h extends i.default.Component{constructor(e){super(e);let t=!0,a=!1,s=e.fadeIn;const i=l(e);!i&&"undefined"!=typeof window&&window.IntersectionObserver&&(t=!1,a=!0),"undefined"==typeof window&&(t=!1),e.critical&&(t=!0,a=!1);const n=!(this.props.critical&&!this.props.fadeIn);this.state={isVisible:t,imgLoaded:!1,IOSupported:a,fadeIn:s,hasNoScript:n,seenBefore:i},this.bgImage="",this.backgroundStyles=(0,r.default)(this.props.className),this.imageRef=d(this.props),this.handleImageLoaded=this.handleImageLoaded.bind(this),this.handleRef=this.handleRef.bind(this)}componentDidMount(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:l(this.props)}),this.props.critical){const e=this.imageRef;e&&e.complete&&this.handleImageLoaded()}}handleRef(e){this.state.IOSupported&&e&&g(e,()=>{this.state.isVisible||"function"!=typeof this.props.onStartLoad||this.props.onStartLoad({wasCached:l(this.props)}),this.setState({isVisible:!0,imgLoaded:!1})})}handleImageLoaded(){A(this.props),this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()}render(){const e=o(this.props),t=e.title,a=e.alt,s=e.className,n=e.style,r=void 0===n?{}:n,d=e.fluid,c=e.fixed,l=e.backgroundColor,A=e.Tag,u=e.classId,f=void 0===u?Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7):u,g=e.children,h="boolean"==typeof l?"lightgray":l,m=this.backgroundStyles.hasOwnProperty("backgroundSize")?this.backgroundStyles.backgroundSize:"cover",y=`background-repeat: ${this.backgroundStyles.hasOwnProperty("backgroundRepeat")?this.backgroundStyles.backgroundRepeat:"no-repeat"};`,w=this.state.imgLoaded?"0.5s":"0.25s";if(d){const e=d;let n=this.bgImage,o=null;e.tracedSVG&&(o=`"${e.tracedSVG}"`),e.base64&&!e.tracedSVG&&(o=e.base64),this.state.isVisible&&(o=e.src);const c=o!==(n=""===n?o:this.bgImage)||!1===this.state.fadeIn?1:0;this.bgImage=n;const l={classId:f,backgroundSize:m,backgroundRepeat:y,transitionDelay:w,bgImage:n,nextImage:o,afterOpacity:c,bgColor:h};return i.default.createElement(A,{className:`${s||""} gatsby-background-image-${f} gatsby-image-wrapper`,style:Object.assign({position:"relative",overflow:"hidden"},r,this.backgroundStyles),ref:this.handleRef,key:`fluid-${JSON.stringify(e.srcSet)}`},i.default.createElement("style",{dangerouslySetInnerHTML:{__html:p(l)}}),this.state.hasNoScript&&i.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b(Object.assign({alt:a,title:t},e))}}),g)}if(c){const e=c,n=Object.assign({position:"relative",overflow:"hidden",display:"inline-block",width:e.width,height:e.height},r);"inherit"===r.display&&delete n.display;let o=this.bgImage,d="";e.tracedSVG&&(d=`'${e.tracedSVG}'`),e.base64&&!e.tracedSVG&&(d=e.base64),this.state.isVisible&&(d=e.src);const l=d!==(o=""===o?d:"")?1:0;this.bgImage=o;const u={classId:f,backgroundSize:m,backgroundRepeat:y,transitionDelay:w,bgImage:o,nextImage:d,afterOpacity:l};return i.default.createElement(A,{className:`${s||""} gatsby-background-image-${f} gatsby-image-wrapper`,style:Object.assign({},n,this.backgroundStyles),ref:this.handleRef,key:`fixed-${JSON.stringify(e.srcSet)}`},i.default.createElement("style",{dangerouslySetInnerHTML:{__html:p(u)}}),this.state.hasNoScript&&i.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b(Object.assign({alt:a,title:t,width:e.width,height:e.height},e))}}),g)}return null}}h.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};const m=n.default.shape({width:n.default.number.isRequired,height:n.default.number.isRequired,src:n.default.string.isRequired,srcSet:n.default.string.isRequired,base64:n.default.string,tracedSVG:n.default.string,srcWebp:n.default.string,srcSetWebp:n.default.string}),y=n.default.shape({aspectRatio:n.default.number.isRequired,src:n.default.string.isRequired,srcSet:n.default.string.isRequired,sizes:n.default.string.isRequired,base64:n.default.string,tracedSVG:n.default.string,srcWebp:n.default.string,srcSetWebp:n.default.string});h.propTypes={resolutions:m,sizes:y,fixed:m,fluid:y,fadeIn:n.default.bool,title:n.default.string,alt:n.default.string,className:n.default.oneOfType([n.default.string,n.default.object]),critical:n.default.bool,style:n.default.object,imgStyle:n.default.object,placeholderStyle:n.default.object,placeholderClassName:n.default.string,backgroundColor:n.default.oneOfType([n.default.string,n.default.bool]),onLoad:n.default.func,onError:n.default.func,onStartLoad:n.default.func,Tag:n.default.string,classId:n.default.string};var w=h;t.default=w},199:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;const s=e=>{const t=function(e){if("undefined"!=typeof document){const t=document.implementation.createHTMLDocument(""),a=document.createElement("style");return a.textContent=e,t.body.appendChild(a),a.sheet.cssRules}return{}}((e=>{const t="undefined"!=typeof window?window.document.styleSheets:[];for(let s=0;s<t.length;s++){let i;try{i=void 0!==t[s].rules?t[s].rules:void 0!==t[s].cssRules?t[s].cssRules:""}catch(a){console.debug(`Unable to read stylesheet rules for ${t[s].href}`,a)}if(i)for(let t=0;t<i.length;t++)if(i[t].selectorText===e){const e=i[t].cssText?i[t].cssText:i[t].style.cssText;return-1===e.indexOf(i[t].selectorText)?`${i[t].selectorText}{${e}}`:e}}})(`.${e}`));return t.length>0&&void 0!==t[0].style?Object.keys((e=>{let t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name){case"CSS2Properties":Object.values(e[0].style).forEach(a=>{t[(e=>e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,(e,t)=>0===t?e.toLowerCase():e.toUpperCase()).replace(/\s|\W+/g,""))(a)]=e[0].style[a]});break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t})(t)).filter(e=>0===e.indexOf("background")&&""!==t[0].style[e]).reduce((e,a)=>(e[a]=t[0].style[a],e),{}):{}};var i=e=>{if("undefined"!=typeof window&&null!==e&&(e instanceof Object||e instanceof String||"string"==typeof e)&&!(e instanceof Array)){if(e.includes(" ")){const t=e.split(" ");let a=[];return t.forEach(e=>a.push(s(e))),Object.assign(...a)}return s(e)}return{}};t.default=i},216:function(e){e.exports={data:{desktop:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBP/EABYBAQEBAAAAAAAAAAAAAAAAAAMAAf/aAAwDAQACEAMQAAAB46jTShb/AP/EABYQAAMAAAAAAAAAAAAAAAAAAAEQIP/aAAgBAQABBQKAv//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABcQAAMBAAAAAAAAAAAAAAAAAAABESD/2gAIAQEAAT8ho8Gf/9oADAMBAAIAAwAAABCXD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAAMBAAMAAAAAAAAAAAAAAAABESEQMcH/2gAIAQEAAT8QUCNzwVg+uGHh/9k=",aspectRatio:1.7777777777777777,src:"/static/2be10f0bfd1cadf8313b80a49d20d12f/d66f5/bg-starbucks-gift-card.jpg",srcSet:"/static/2be10f0bfd1cadf8313b80a49d20d12f/e5872/bg-starbucks-gift-card.jpg 1040w,\n/static/2be10f0bfd1cadf8313b80a49d20d12f/d66f5/bg-starbucks-gift-card.jpg 1920w",srcWebp:"/static/2be10f0bfd1cadf8313b80a49d20d12f/d806c/bg-starbucks-gift-card.webp",srcSetWebp:"/static/2be10f0bfd1cadf8313b80a49d20d12f/fa3e8/bg-starbucks-gift-card.webp 1040w,\n/static/2be10f0bfd1cadf8313b80a49d20d12f/d806c/bg-starbucks-gift-card.webp 1920w",sizes:"(max-width: 1920px) 100vw, 1920px"}}},site:{siteMetadata:{title:"Get Best Offers"}}}}},217:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-starbucks-gift-card-js-0e654f5ed53722a9846b.js.map