(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(174),r=a(4),o=a.n(r),d=a(146),c=a(153),l=(a(154),a(158)),A=a.n(l),u=function(e){var t=e.children;return n.a.createElement(d.StaticQuery,{query:"2496561723",render:function(e){var a=e.desktop.childImageSharp.fluid;return n.a.createElement(A.a,{Tag:"section",fluid:a,backgroundColor:"#040e18",style:{minHeight:"100vh"}},n.a.createElement("div",{className:"content-page"},t),n.a.createElement(c.a,null))},data:i})};u.propTypes={children:o.a.node.isRequired};var g=u,f=a(155),p="https://www.mb102.com/lnk.asp?o=12088&c=918277&a=367983&k=18C219D555218DF6260B6A9C28EC5F5D&l=12366";t.default=function(){return n.a.createElement(g,null,n.a.createElement(f.a,{title:"Free Diapers Samples| GB Offers",keywords:["free diapers","diapers samples","best samples"]}),n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"box"},n.a.createElement("h1",null,"How Did You Hear About This Offer?"),n.a.createElement("h3",null,"RECEIVE A FREE BOX OF BABY SAMPLES"),n.a.createElement("a",{href:p,title:"Instagram",className:"btn-blue"},"INSTAGRAM"),n.a.createElement("a",{href:p,title:"Facebook",className:"btn-blue"},"FACEBOOK"),n.a.createElement("a",{href:p,title:"Google",className:"btn-blue"},"GOOGLE")))))}},158:function(e,t,a){"use strict";var s=a(8);t.__esModule=!0,t.default=t.createImageToLoad=void 0;var n=s(a(0)),i=s(a(4)),r=s(a(159));const o=e=>{let t=Object.assign({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},d=e=>{if("undefined"!=typeof window){const t=o(e),a=new Image;return a.complete||"function"!=typeof t.onLoad||a.addEventListener("load",t.onLoad),"function"==typeof t.onError&&a.addEventListener("error",t.onError),a.src=t.fluid?t.fluid.src:t.fixed.src,a}return null};t.createImageToLoad=d;const c={},l=e=>{const t=o(e),a=t.fluid?t.fluid.src:t.fixed.src;return c[a]||!1},A=e=>{const t=o(e),a=t.fluid?t.fluid.src:t.fixed.src;c[a]=!0};let u;const g=[];const f=(e,t)=>{(void 0===u&&"undefined"!=typeof window&&window.IntersectionObserver&&(u=new window.IntersectionObserver(e=>{e.forEach(e=>{g.forEach(t=>{t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),u).observe(e),g.push([e,t])},p=e=>{const t=e.src?`src="${e.src}" `:'src="" ',a=e.sizes?`sizes="${e.sizes}" `:"",s=e.srcSetWebp?`<source type='image/webp' srcSet="${e.srcSetWebp}" ${a}/>`:"",n=e.srcSet?`<source srcSet="${e.srcSet}" ${a}/>`:"",i=e.title?`title="${e.title}" `:"",r=e.alt?`alt="${e.alt}" `:'alt="" ',o=e.width?`width="${e.width}" `:"",d=e.height?`height="${e.height}" `:"",c=e.opacity?e.opacity:"1";return`<picture>${s}${n}<img ${o}${d}${t}${r}${i}style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:${e.transitionDelay?e.transitionDelay:"0.5s"};opacity:${c};width:100%;height:100%;object-fit:cover;object-position:center"/></picture>`},b=({classId:e,backgroundSize:t,backgroundRepeat:a,transitionDelay:s,bgImage:n,nextImage:i,afterOpacity:r,bgColor:o})=>`\n          .gatsby-background-image-${e}:before,\n          .gatsby-background-image-${e}:after {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            -webkit-background-size: ${t};\n            -moz-background-size: ${t};\n            -o-background-size: ${t};\n            background-size: ${t};\n            transition: opacity ${s} ease-in-out;\n            -webkit-transition: opacity ${s} ease-in-out;\n            -moz-transition: opacity ${s} ease-in-out;\n            -o-transition: opacity ${s} ease-in-out;\n          }\n          .gatsby-background-image-${e}:before {\n            z-index: -101;\n            background-color: ${o};\n            background-image: url(${n});\n            ${a}\n          }\n          .gatsby-background-image-${e}:after {\n            z-index: -100;\n            background-image: url(${i});\n            ${a}\n            opacity: ${r};\n          }\n        `;class h extends n.default.Component{constructor(e){super(e);let t=!0,a=!1,s=e.fadeIn;const n=l(e);!n&&"undefined"!=typeof window&&window.IntersectionObserver&&(t=!1,a=!0),"undefined"==typeof window&&(t=!1),e.critical&&(t=!0,a=!1);const i=!(this.props.critical&&!this.props.fadeIn);this.state={isVisible:t,imgLoaded:!1,IOSupported:a,fadeIn:s,hasNoScript:i,seenBefore:n},this.bgImage="",this.backgroundStyles=(0,r.default)(this.props.className),this.imageRef=d(this.props),this.handleImageLoaded=this.handleImageLoaded.bind(this),this.handleRef=this.handleRef.bind(this)}componentDidMount(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:l(this.props)}),this.props.critical){const e=this.imageRef;e&&e.complete&&this.handleImageLoaded()}}handleRef(e){this.state.IOSupported&&e&&f(e,()=>{this.state.isVisible||"function"!=typeof this.props.onStartLoad||this.props.onStartLoad({wasCached:l(this.props)}),this.setState({isVisible:!0,imgLoaded:!1})})}handleImageLoaded(){A(this.props),this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()}render(){const e=o(this.props),t=e.title,a=e.alt,s=e.className,i=e.style,r=void 0===i?{}:i,d=e.fluid,c=e.fixed,l=e.backgroundColor,A=e.Tag,u=e.classId,g=void 0===u?Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7):u,f=e.children,h="boolean"==typeof l?"lightgray":l,m=this.backgroundStyles.hasOwnProperty("backgroundSize")?this.backgroundStyles.backgroundSize:"cover",y=`background-repeat: ${this.backgroundStyles.hasOwnProperty("backgroundRepeat")?this.backgroundStyles.backgroundRepeat:"no-repeat"};`,w=this.state.imgLoaded?"0.5s":"0.25s";if(d){const e=d;let i=this.bgImage,o=null;e.tracedSVG&&(o=`"${e.tracedSVG}"`),e.base64&&!e.tracedSVG&&(o=e.base64),this.state.isVisible&&(o=e.src);const c=o!==(i=""===i?o:this.bgImage)||!1===this.state.fadeIn?1:0;this.bgImage=i;const l={classId:g,backgroundSize:m,backgroundRepeat:y,transitionDelay:w,bgImage:i,nextImage:o,afterOpacity:c,bgColor:h};return n.default.createElement(A,{className:`${s||""} gatsby-background-image-${g} gatsby-image-wrapper`,style:Object.assign({position:"relative",overflow:"hidden"},r,this.backgroundStyles),ref:this.handleRef,key:`fluid-${JSON.stringify(e.srcSet)}`},n.default.createElement("style",{dangerouslySetInnerHTML:{__html:b(l)}}),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:p(Object.assign({alt:a,title:t},e))}}),f)}if(c){const e=c,i=Object.assign({position:"relative",overflow:"hidden",display:"inline-block",width:e.width,height:e.height},r);"inherit"===r.display&&delete i.display;let o=this.bgImage,d="";e.tracedSVG&&(d=`'${e.tracedSVG}'`),e.base64&&!e.tracedSVG&&(d=e.base64),this.state.isVisible&&(d=e.src);const l=d!==(o=""===o?d:"")?1:0;this.bgImage=o;const u={classId:g,backgroundSize:m,backgroundRepeat:y,transitionDelay:w,bgImage:o,nextImage:d,afterOpacity:l};return n.default.createElement(A,{className:`${s||""} gatsby-background-image-${g} gatsby-image-wrapper`,style:Object.assign({},i,this.backgroundStyles),ref:this.handleRef,key:`fixed-${JSON.stringify(e.srcSet)}`},n.default.createElement("style",{dangerouslySetInnerHTML:{__html:b(u)}}),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:p(Object.assign({alt:a,title:t,width:e.width,height:e.height},e))}}),f)}return null}}h.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};const m=i.default.shape({width:i.default.number.isRequired,height:i.default.number.isRequired,src:i.default.string.isRequired,srcSet:i.default.string.isRequired,base64:i.default.string,tracedSVG:i.default.string,srcWebp:i.default.string,srcSetWebp:i.default.string}),y=i.default.shape({aspectRatio:i.default.number.isRequired,src:i.default.string.isRequired,srcSet:i.default.string.isRequired,sizes:i.default.string.isRequired,base64:i.default.string,tracedSVG:i.default.string,srcWebp:i.default.string,srcSetWebp:i.default.string});h.propTypes={resolutions:m,sizes:y,fixed:m,fluid:y,fadeIn:i.default.bool,title:i.default.string,alt:i.default.string,className:i.default.oneOfType([i.default.string,i.default.object]),critical:i.default.bool,style:i.default.object,imgStyle:i.default.object,placeholderStyle:i.default.object,placeholderClassName:i.default.string,backgroundColor:i.default.oneOfType([i.default.string,i.default.bool]),onLoad:i.default.func,onError:i.default.func,onStartLoad:i.default.func,Tag:i.default.string,classId:i.default.string};var w=h;t.default=w},159:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;const s=e=>{const t=function(e){if("undefined"!=typeof document){const t=document.implementation.createHTMLDocument(""),a=document.createElement("style");return a.textContent=e,t.body.appendChild(a),a.sheet.cssRules}return{}}((e=>{const t="undefined"!=typeof window?window.document.styleSheets:[];for(let s=0;s<t.length;s++){let n;try{n=void 0!==t[s].rules?t[s].rules:void 0!==t[s].cssRules?t[s].cssRules:""}catch(a){console.debug(`Unable to read stylesheet rules for ${t[s].href}`,a)}if(n)for(let t=0;t<n.length;t++)if(n[t].selectorText===e){const e=n[t].cssText?n[t].cssText:n[t].style.cssText;return-1===e.indexOf(n[t].selectorText)?`${n[t].selectorText}{${e}}`:e}}})(`.${e}`));return t.length>0&&void 0!==t[0].style?Object.keys((e=>{let t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name){case"CSS2Properties":Object.values(e[0].style).forEach(a=>{t[(e=>e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,(e,t)=>0===t?e.toLowerCase():e.toUpperCase()).replace(/\s|\W+/g,""))(a)]=e[0].style[a]});break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t})(t)).filter(e=>0===e.indexOf("background")&&""!==t[0].style[e]).reduce((e,a)=>(e[a]=t[0].style[a],e),{}):{}};var n=e=>{if("undefined"!=typeof window&&null!==e&&(e instanceof Object||e instanceof String||"string"==typeof e)&&!(e instanceof Array)){if(e.includes(" ")){const t=e.split(" ");let a=[];return t.forEach(e=>a.push(s(e))),Object.assign(...a)}return s(e)}return{}};t.default=n},174:function(e){e.exports={data:{desktop:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG9NuDjkP/EABkQAAIDAQAAAAAAAAAAAAAAAAECAAMQEv/aAAgBAQABBQK1+TW5sxkDRUAz/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAwADAAAAAAAAAAAAAAAAABAhIjFR/9oACAEBAAY/AjDXVSL/xAAZEAEAAwEBAAAAAAAAAAAAAAABABExIVH/2gAIAQEAAT8h3GiYzXVB5MBcDQUeEOE//9oADAMBAAIAAwAAABDDD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAQADAQEBAAAAAAAAAAAAAAEAESFhMUH/2gAIAQEAAT8QAi2+3kWHGjCFV5LjL9LhLJSQuBDhP//Z",aspectRatio:1.5,src:"/static/ae8066d2a694473c876f4c4a3bedebe8/e936a/background.jpg",srcSet:"/static/ae8066d2a694473c876f4c4a3bedebe8/0b593/background.jpg 1040w,\n/static/ae8066d2a694473c876f4c4a3bedebe8/9dde5/background.jpg 2080w,\n/static/ae8066d2a694473c876f4c4a3bedebe8/e936a/background.jpg 3000w",srcWebp:"/static/ae8066d2a694473c876f4c4a3bedebe8/37d32/background.webp",srcSetWebp:"/static/ae8066d2a694473c876f4c4a3bedebe8/60f67/background.webp 1040w,\n/static/ae8066d2a694473c876f4c4a3bedebe8/10b01/background.webp 2080w,\n/static/ae8066d2a694473c876f4c4a3bedebe8/37d32/background.webp 3000w",sizes:"(max-width: 3000px) 100vw, 3000px"}}},site:{siteMetadata:{title:"Get Best Offers"}}}}}}]);
//# sourceMappingURL=component---src-pages-baby-samples-savings-js-f3bd0af7316d2bdf8565.js.map