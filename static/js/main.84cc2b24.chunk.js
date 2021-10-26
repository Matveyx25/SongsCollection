(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,n){e.exports={wrapper:"Navigation_wrapper__20F2c",line:"Navigation_line__Ds7IS",active:"Navigation_active__3egx9"}},24:function(e,t,n){e.exports={wrapper:"BigCard_wrapper__WIKVt",title:"BigCard_title__1wMMF",subtitle:"BigCard_subtitle__1rnes",backgroundCard:"BigCard_backgroundCard__2QUt2"}},27:function(e,t,n){e.exports={number:"Song_number__3RACV",songsWrapper:"Song_songsWrapper__3S39k"}},28:function(e,t,n){e.exports={title:"SongPage_title__354rZ",text:"SongPage_text__2QRRn",author:"SongPage_author__2gGsq"}},31:function(e,t,n){e.exports={collectionWrapper:"Collection_collectionWrapper__29oul"}},45:function(e,t,n){e.exports={preloader:"preloader_preloader__1CsSX",loader:"preloader_loader__1jxOC"}},47:function(e,t,n){e.exports={notResult:"SearchPage_notResult__16QmH"}},54:function(e,t,n){},55:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(25),o=n.n(s),a=(n(54),n(5)),i=n(6),u=n(12),l=n(11),j=(n(55),n(4)),p=n(10),h=n(19),b=n.n(h),g=n(1),d=function(e){return Object(g.jsx)("div",{className:b.a.wrapper,children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsxs)(p.b,{to:"/",exact:!0,activeClassName:b.a.active,children:[Object(g.jsx)("img",{src:"./icons/Home.png",alt:""}),Object(g.jsx)("span",{className:b.a.line})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)(p.b,{to:"/book",activeClassName:b.a.active,children:[Object(g.jsx)("img",{src:"./icons/Book.png",alt:""}),Object(g.jsx)("span",{className:b.a.line})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)(p.b,{to:"/search",activeClassName:b.a.active,children:[Object(g.jsx)("img",{src:"./icons/Search.png",alt:""}),Object(g.jsx)("span",{className:b.a.line})]})})]})})},O=function(e){return Object(g.jsx)(d,{})},f=(n(24),n(22)),x=(r.Component,n(9)),m=n(31),v=n.n(m),_=function(e){return Object(g.jsx)("li",{children:Object(g.jsxs)(p.b,{to:"/themes/"+e.collection.id,children:[Object(g.jsx)("span",{children:e.collection.theme}),Object(g.jsx)("svg",{width:"8",height:"13",viewBox:"0 0 8 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M5.01887 6.50372L0 11.5507L1.53561 13L7.2793 7.22417L8 6.49944L7.27923 5.77477L1.53554 0L6.77704e-05 1.44947L5.01887 6.50372Z",fill:"#090808","fill-opacity":"0.35"})})]})})},S=function(e){return Object(g.jsx)("ul",{className:v.a.collectionWrapper,children:e.collections.map((function(e){return Object(g.jsx)(_,{collection:e},e.id)}))})},C=n(45),w=n.n(C),y=n.p+"static/media/circles.60afb77e.png",F=function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("img",{className:w.a.preloader,src:y})})},N=n(2),k=n.n(N),I=n(7),L=n(14),T=n(46).create({baseURL:"http://213.139.208.216:5000"}),E={getAllSongs:function(){return T.get("songs")},getSong:function(e){return T.get("songs?id=".concat(e))},getSongFromText:function(e){return T.get("songs?filter=".concat(e))},getAllTheme:function(){return T.get("themes")},getThemeSongs:function(e){return T.get("songs/".concat(e))}},P="SET_SONGS",q="SET_SONG",D="SET_COLLECTIONS",A="TOGGLE_IS_FETCHING",M={songs:[],song:{},collections:[],isFetching:!1},U=function(e){return{type:P,songs:e}},B=function(e){return{type:A,isFetching:e}},R=function(){return function(){var e=Object(I.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!0)),e.next=3,E.getAllSongs();case 3:n=e.sent,t(U(n.data)),t(B(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(L.a)(Object(L.a)({},e),{},{songs:t.songs});case q:return Object(L.a)(Object(L.a)({},e),{},{song:t.song});case D:return Object(L.a)(Object(L.a)({},e),{},{collections:t.collections});case A:return Object(L.a)(Object(L.a)({},e),{},{isFetching:t.isFetching});default:return e}},G=function(e){return e.songsPage.songs},Z=function(e){return e.songsPage.song},H=function(e){return e.songsPage.collections},V=function(e){return e.songsPage.isFetching},Q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.requestCollections()}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(F,{}):null,Object(g.jsx)(S,{collections:this.props.collections})]})}}]),n}(r.Component),X=Object(x.b)((function(e){return{collections:H(e)}}),{requestCollections:function(){return function(){var e=Object(I.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!0)),e.next=3,E.getAllTheme();case 3:n=e.sent,t((r=n.data,{type:D,collections:r})),t(B(!1));case 6:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Q),z=n(27),J=n.n(z),K=function(e){return Object(g.jsx)("li",{children:Object(g.jsxs)(p.b,{to:"/songs/"+e.song.id,children:[Object(g.jsxs)("span",{className:J.a.number,children:[e.song.id,"."]}),e.song.name]})})},Y=function(e){return Object(g.jsx)("ul",{className:J.a.songsWrapper,children:e.songs.map((function(e){return Object(g.jsx)(K,{song:e},e.id)}))})},$=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.requestSongs()}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(F,{}):null,Object(g.jsx)(Y,{songs:this.props.songs})]})}}]),n}(r.Component),ee=Object(x.b)((function(e){return{songs:G(e),isFetching:V(e)}}),{requestSongs:R,toggleIsFetching:B})($),te=(n(81),n(49)),ne=n(47),re=n.n(ne),ce=Object(x.b)((function(e){return{songs:G(e),isFetching:V(e)}}),{requestSongs:R,searchSong:function(e){return function(){var t=Object(I.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(B(!0)),t.next=3,E.getSongFromText(e);case 3:r=t.sent,n(U(r.data)),n(B(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleIsFetching:B})((function(e){var t=Object(te.a)(),n=t.register,r=t.handleSubmit;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("form",{onSubmit:r((function(t){e.searchSong(t.search)})),children:Object(g.jsxs)("div",{className:"search-wrapper",children:[Object(g.jsx)("button",{className:"submit",type:"submit",children:Object(g.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M24.66 21.6141L19.7915 16.7464C19.5717 16.5267 19.2739 16.4046 18.9613 16.4046H18.1654C19.5131 14.6812 20.314 12.5134 20.314 10.1553C20.314 4.54545 15.7678 0 10.157 0C4.54623 0 0 4.54545 0 10.1553C0 15.7651 4.54623 20.3105 10.157 20.3105C12.5156 20.3105 14.6837 19.5098 16.4074 18.1623V18.9581C16.4074 19.2706 16.5295 19.5684 16.7493 19.7881L21.6178 24.6558C22.0768 25.1147 22.8191 25.1147 23.2732 24.6558L24.6551 23.2741C25.1141 22.8152 25.1141 22.073 24.66 21.6141ZM10.157 16.4046C6.70459 16.4046 3.90654 13.612 3.90654 10.1553C3.90654 6.70345 6.69971 3.90587 10.157 3.90587C13.6094 3.90587 16.4074 6.69856 16.4074 10.1553C16.4074 13.6071 13.6143 16.4046 10.157 16.4046Z",fill:"#0F0F0F"})})}),Object(g.jsx)("input",Object(L.a)({type:"text",placeholder:"\u043f\u043e\u0438\u0441\u043a \u043f\u0435\u0441\u0435\u043d"},n("search")))]})}),e.isFetching?Object(g.jsx)(F,{}):null,e.songs?Object(g.jsx)(Y,{songs:e.songs}):Object(g.jsx)("span",{className:re.a.notResult,children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})})),se=n(28),oe=n.n(se),ae=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h1",{className:oe.a.title,children:[e.song.id,". ",e.song.name]}),Object(g.jsx)("pre",{className:oe.a.text,children:e.song.text}),e.song.authors&&Object(g.jsx)("small",{className:oe.a.author,children:e.song.authors})]})},ie=n(8),ue=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.songId;this.props.requestSong(e)}},{key:"componentDidUpdate",value:function(e,t,n){if(this.props.match.params.songId!=e.match.params.songId){var r=this.props.match.params.userId;this.props.requestSong(r),console.log(r)}}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(F,{}):null,Object(g.jsx)(ae,{song:this.props.song})]})}}]),n}(c.a.Component),le=Object(ie.d)(Object(x.b)((function(e){return{isFetching:V(e),song:Z(e)}}),{requestSong:function(e){return function(){var t=Object(I.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(B(!0)),t.next=3,E.getSong(e);case 3:r=t.sent,n((c=r.data,{type:q,song:c})),n(B(!1));case 6:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleIsFetching:B}),j.f)(ue),je=(n(82),n(83),function(e){return Object(g.jsx)("h1",{children:"Profile"})}),pe=function(e){return Object(g.jsx)(je,{})},he=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(g.jsx)(ae,{song:this.props.song})}}]),n}(c.a.Component),be=Object(ie.d)(Object(x.b)((function(e){return{song:Z(e)}}),null),j.f)(he),ge="INITIALAZED_SUCCESS",de={initialazed:!1},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(L.a)(Object(L.a)({},e),{},{initialazed:!0});default:return e}},fe=n(48),xe=Object(ie.c)({songsPage:W,app:Oe}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,ve=Object(ie.e)(xe,me(Object(ie.a)(fe.a)));window.store=ve;var _e=ve,Se=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.themeId;this.props.requestThemeSongs(e)}},{key:"componentDidUpdate",value:function(e,t,n){if(this.props.match.params.themeId!=e.match.params.themeId){var r=this.props.match.params.themeId;this.props.requestThemeSongs(r),console.log(r)}}},{key:"render",value:function(){return Object(g.jsx)(ee,{songs:this.props.songs})}}]),n}(c.a.Component),Ce=Object(ie.d)(Object(x.b)((function(e){return{songs:G(e)}}),{requestThemeSongs:function(e){return function(){var t=Object(I.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(B(!0)),t.next=3,E.getThemeSongs(e);case 3:r=t.sent,n(U(r.data)),n(B(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),j.f)(Se),we=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledError=function(e){alert(e)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("span",{className:"breadcrumps-line"}),Object(g.jsx)("div",{className:"breadcrumps",children:Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{path:"/songs/:songId?",render:function(){return Object(g.jsx)(g.Fragment,{})}}),Object(g.jsx)(j.a,{path:"/themes",render:function(){return Object(g.jsx)("span",{children:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0438"})}}),Object(g.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(g.jsx)("span",{children:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0438"})}})]})}),Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{path:"/profile",render:function(){return Object(g.jsx)(pe,{})}}),Object(g.jsx)(j.a,{path:"/songs/:songId?",render:function(){return Object(g.jsx)(le,{})}}),Object(g.jsx)(j.a,{path:"/book",render:function(){return Object(g.jsx)(be,{})}}),Object(g.jsx)(j.a,{path:"/search",render:function(){return Object(g.jsx)(ce,{})}}),Object(g.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(g.jsx)(X,{})}}),Object(g.jsx)(j.a,{path:"/themes/:themeId?",render:function(){return Object(g.jsx)(Ce,{})}})]})]}),Object(g.jsx)(O,{})]})}}]),n}(r.Component),ye=Object(ie.d)(j.f,Object(x.b)((function(e){return{}})))(we),Fe=function(e){return Object(g.jsx)(p.a,{basename:"http://localhost:3000/SongsCollection",children:Object(g.jsx)(x.a,{store:_e,children:Object(g.jsx)(ye,{})})})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};o.a.render(Object(g.jsx)(Fe,{}),document.getElementById("root")),Ne()}},[[84,1,2]]]);
//# sourceMappingURL=main.84cc2b24.chunk.js.map