import{o as e,h as a,F as t,p as s,q as i,j as n,t as o,f as r,g as l,n as c,r as m,s as d,m as g}from"./vendor.ee1ba453.js";import{W as b}from"./wow.054453f9.js";/* empty css                */import{_ as u}from"./image2.74ecce54.js";const x={data:()=>({eleindex:-1,piclist:[{bg:"../assets/accordion/image1.png",img:"../assets/accordion/image1.png",text:"成都大熊猫繁育研究基地二期“熊猫塔”"},{bg:"../assets/accordion/image2.png",img:"../assets/accordion/image2.png",text:"成都宽窄巷子的MAOin成都熊猫天团"},{bg:"../assets/accordion/image3.png",img:"../assets/accordion/image3.png",text:"成都熊猫国际旅游度假区"},{bg:"../assets/accordion/image4.png",img:"../assets/accordion/image4.png",text:"独立熊猫IP驻场音乐剧作品《熊猫》"}]}),methods:{enter(e){this.eleindex=e},out(){this.eleindex=-1}}},p={class:"or-container"},v=["onMouseenter","onMouseleave"],_=["src"];x.render=function(r,l,c,m,d,g){return e(),a("div",p,[(e(!0),a(t,null,s(d.piclist,((t,s)=>(e(),a("div",{class:i(["box",d.eleindex==s?"eleactive":""]),key:s,onMouseenter:e=>g.enter(s),onMouseleave:e=>g.out(s)},[n("img",{src:t.img},null,8,_),n("div",{class:i(["text-overlay",d.eleindex==s?"show-text":""])},[n("span",null,o(t.text),1)],2)],42,v)))),128))])};const w={setup(){const e=r(null);return l((()=>{e.value=(new b).init(),document.querySelectorAll(".image-animation");const a=()=>{for(let e=1;e<=3;e++){const a=document.querySelector(`#bon_text-${e}`),t=document.querySelector(`.image-animation-${e}`),s=window.innerHeight,i=window.pageYOffset;i+s>a.getBoundingClientRect().bottom+i?t.classList.add("animate__animated","animate__bounceInUp"):t.classList.remove("animate__animated","animate__bounceInUp")}};window.addEventListener("scroll",a),a()})),{wow:e}}},h=[n("div",{class:"bon_text bon_text-1",id:"bon_text-1"},[n("br"),n("br"),c(" 从闻名遐迩的“启点” "),n("br"),n("br")],-1),n("img",{class:"image-animation image-animation-1",src:"/assets/image1.4d0412aa.png",alt:"Your Image1"},null,-1),n("div",{class:"bon_text bon_text-2",id:"bon_text-2"},[n("br"),n("br"),c(" 到晋升“顶流”的“蓉宝” "),n("br"),n("br")],-1),n("img",{class:"image-animation image-animation-2",src:u,alt:"Your Image2"},null,-1),n("div",{class:"bon_text bon_text-3",id:"bon_text-3"},[n("br"),n("br"),c(" 再到突破设限的“科梦” "),n("br"),n("br")],-1),n("img",{class:"image-animation image-animation-3",src:"/assets/image3.7a657492.png",alt:"Your Image3"},null,-1)];w.render=function(t,s,i,n,o,r){return e(),a("div",null,h)};const f={data:()=>({showText:!1}),methods:{toggleText(){this.showText=!this.showText,console.log(1111)},goToPart1(){this.$router.push({path:"/",hash:"#main1"})}},components:{images:x,bounce:w}},y={class:"main1"},I=n("div",{class:"main-title",style:{display:"flex","align-items":"center"}},null,-1),T={class:"part1-1"},j=n("div",{class:"mid-title"},[n("br"),n("br"),n("div",{class:"qustion"}," 说起大熊猫，你会想到哪一座城市？ ")],-1),q=[n("img",{src:"/assets/image2.d92bf08d.png",alt:"",class:"answer-img"},null,-1)],M={key:0,class:"daoru1"},Y=[n("div",{class:"wow animate__animated animate__bounceInUp"},[n("br"),n("br"),c(" 没错！这就是成都 ")],-1)],k=n("div",{class:"context"},[n("br"),c(" 1869年，法国人皮埃尔在四川雅安宝兴县首次发现大熊猫的踪迹，"),n("br"),c(" 自此雅安成为熊猫的故乡。"),n("br"),c(" 成都作为四川的省会城市，占据经济、文化、旅游、政治和地理等优势，"),n("br"),c(" 逐渐发展为全球唯一拥有野生和圈养大熊猫资源的超大城市。"),n("br"),c(" 熊猫IP作为成都城市形象的最佳代表，也经历着与“蓉“俱进的不断迭代。"),n("br"),n("br")],-1),L={class:"part1-2"},P=n("div",{class:"mid-title"},[n("br"),n("br")],-1),S=n("div",{class:"context"},[n("br"),c(" 生于斯长于斯的“熊猫家族”，"),n("br"),c(" 在传承与“上新”中链接古蜀文明，"),n("br"),c(" 聚光当下时代，展望创新未来。"),n("br"),c(" 而形态各异的熊猫们所共同传达的"),n("br"),c(" “和谐共生”“幸福共享”“拥抱世界”等观念，"),n("br"),c(" 也与成都的城市定位保持步调一致，"),n("br"),c(" 贴近着成都的城市气质与精神内涵，"),n("br"),c(" 彰显着蓉城的青春能量与远大期许。"),n("br"),n("br")],-1),U={class:"part1-3"},$=n("div",{class:"mid-title"},[n("br"),n("br")],-1),A={class:"images-1"};f.render=function(t,s,i,o,r,l){const c=m("bounce"),b=m("images");return e(),a("div",y,[I,n("div",T,[j,n("div",{class:"answer",onClick:s[0]||(s[0]=(...e)=>l.toggleText&&l.toggleText(...e))},q),r.showText?(e(),a("div",M,Y)):d("",!0),k]),n("div",L,[P,g(c),S]),n("div",U,[$,n("div",A,[g(b)])])])};export{f as default};
