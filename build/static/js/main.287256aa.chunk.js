(this["webpackJsonp40-doaa"]=this["webpackJsonp40-doaa"]||[]).push([[0],{18:function(a,e,t){},25:function(a,e,t){"use strict";t.r(e);var i=t(2),n=t.n(i),r=t(12),c=t.n(r),o=t(7),s=t.n(o),u=t(9),d=t(3),p=t(5),g=(t(18),t(6)),j=t(4),v=function(a,e){if(a){var t=e.current.play();void 0!==t&&t.then((function(a){e.current.play()})).catch((function(a){return console.log(a)}))}},m=t(0),l=function(a){var e=a.isPlaying,t=a.setIsPlaying,n=a.audioRef,r=a.songInfo,c=a.setSongInfo,o=a.currentSong,l=a.songs,b=a.setCurrentSong,f=a.setSongs,O=Object(i.useState)(!1),h=Object(p.a)(O,2),x=h[0],y=h[1],S=function(a){var e=l.map((function(e){return e.id===a.id?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));f(e)},k={transform:"translateX(".concat(r.animationPercentage,"%)")};function N(a){return Math.floor(a/60)+":"+("0"+Math.floor(a%60)).slice(-2)}var w=function(){var a=Object(u.a)(s.a.mark((function a(t){var i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i=l.findIndex((function(a){return a.id===o.id})),"skip-forward"!==t){a.next=5;break}return a.next=4,b(l[(i+1)%l.length]);case 4:S(l[(i+1)%l.length]);case 5:if("skip-back"!==t){a.next=15;break}if((i-1)%l.length!==-1){a.next=12;break}return a.next=9,b(l[l.length-1]);case 9:return S(l[l.length-1]),v(e,n),a.abrupt("return");case 12:return a.next=14,b(l[(i-1)%l.length]);case 14:S(l[(i-1)%l.length]);case 15:e&&n.current.play();case 16:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"player",children:[Object(m.jsxs)("div",{className:"time-control",children:[Object(m.jsx)("p",{children:N(r.currentTime)}),Object(m.jsxs)("div",{style:{background:'linear-gradient(to right, "#205950","#2ab3bf")'},className:"track",children:[Object(m.jsx)("input",{value:r.currentTime,type:"range",max:r.duration||0,min:0,onChange:function(a){n.current.currentTime=a.target.value,c(Object(d.a)(Object(d.a)({},r),{},{currentTime:a.target.value}))}}),Object(m.jsx)("div",{style:k,className:"animate-track"})]}),Object(m.jsx)("p",{children:r.duration?N(r.duration):"0:00"})]}),Object(m.jsxs)("div",{className:"play-control",children:[Object(m.jsx)(g.a,{onClick:function(){return w("skip-back")},className:"skip-back",size:"2x",icon:j.a}),Object(m.jsx)(g.a,{onClick:function(){e?(n.current.pause(),t(!e)):(n.current.play(),t(!e))},className:"play",size:"2x",icon:e?j.d:j.e}),Object(m.jsx)(g.a,{className:"skip-forward",size:"2x",icon:j.b,onClick:function(){return w("skip-forward")}}),Object(m.jsx)(g.a,{onClick:function(){return y(!x)},icon:j.f}),x&&Object(m.jsx)("input",{onChange:function(a){var e=a.target.value;n.current.volume=e,c(Object(d.a)(Object(d.a)({},r),{},{volume:e}))},value:r.volume,max:"1",min:"0",step:"0.01",type:"range"})]})]})},b=function(a){var e=a.currentSong;a.isPlaying;return Object(m.jsxs)("div",{className:"song-container",children:[Object(m.jsx)("img",{className:"",src:e.cover,alt:""}),Object(m.jsxs)("h2",{children:[" ",e.name]}),Object(m.jsxs)("h3",{children:["\u0642\u0631\u0627\u0621\u0629  ",e.artist," "]})]})},f=function(a){var e=a.name,t=a.artist,i=a.cover,n=a.id,r=a.setCurrentSong,c=a.songs,o=a.audioRef,s=a.isPlaying,u=a.setSongs,p=a.active;return Object(m.jsxs)("div",{onClick:function(){var a=c.filter((function(a){return a.id===n}));r(Object(d.a)({},a[0]));var e=c.map((function(a){return a.id===n?Object(d.a)(Object(d.a)({},a),{},{active:!0}):Object(d.a)(Object(d.a)({},a),{},{active:!1})}));u(e),v(s,o)},className:"library-song ".concat(p?"selected":""),children:[Object(m.jsx)("img",{src:i,alt:""}),Object(m.jsxs)("div",{className:"song-description",children:[Object(m.jsx)("h3",{children:e}),Object(m.jsxs)("h4",{children:["\u0642\u0631\u0627\u0621\u0629  ",t," "]})]})]})},O=function(a){var e=a.songs,t=a.setCurrentSong,i=a.audioRef,n=a.isPlaying,r=a.setSongs,c=a.libraryStatus;return Object(m.jsxs)("div",{className:"library ".concat(c?"active-library":" "),children:[Object(m.jsx)("h2",{children:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u062f\u0639\u064a\u0629"}),Object(m.jsx)("div",{className:"library-songs",children:e.map((function(a){return Object(m.jsx)(f,{songs:e,cover:a.cover,name:a.name,artist:a.artist,active:a.active,id:a.id,setCurrentSong:t,audioRef:i,isPlaying:n,setSongs:r},a.id)}))})]})},h=function(a){var e=a.setLibraryStatus,t=a.libraryStatus;return Object(m.jsx)("nav",{children:Object(m.jsx)("button",{className:t?"library-active":"",onClick:function(){e(!t)},children:Object(m.jsx)(g.a,{icon:j.c,size:"2x"})})})};var x=function(){return[{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0623\u0648\u0644",artist:"\u0623\u062d\u0645\u062f \u0639\u0628\u064a\u062f \u0627\u0644\u063a\u0641\u0644\u064a",cover:"./pages/01.jpg",audio:"./audio/01.mp3",id:"01",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0646\u064a",artist:"\u0623\u062d\u0645\u062f \u0639\u0628\u064a\u062f \u0627\u0644\u063a\u0641\u0644\u064a",cover:"./pages/02.jpg",audio:"./audio/02.mp3",id:"02",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0644\u062b",artist:"\u0623\u062d\u0645\u062f \u0639\u0628\u064a\u062f \u0627\u0644\u063a\u0641\u0644\u064a",cover:"./pages/03.jpg",audio:"./audio/03.mp3",id:"03",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0631\u0627\u0628\u0639",artist:"\u0623\u062d\u0645\u062f \u0639\u0628\u064a\u062f \u0627\u0644\u063a\u0641\u0644\u064a",cover:"./pages/04.jpg",audio:"./audio/04.mp3",id:"04",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062e\u0627\u0645\u0633",artist:"\u0623\u062d\u0645\u062f \u0639\u0628\u064a\u062f \u0627\u0644\u063a\u0641\u0644\u064a",cover:"./pages/05.jpg",audio:"./audio/05.mp3",id:"05",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0633\u0627\u062f\u0633",artist:"\u0623\u062d\u0645\u062f \u0639\u0628\u064a\u062f \u0627\u0644\u063a\u0641\u0644\u064a",cover:"./pages/06.jpg",audio:"./audio/06.mp3",id:"06",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0633\u0627\u0628\u0639",artist:"\u0633\u064a\u062f \u0639\u0628\u062f\u0627\u0644\u0644\u0647",cover:"./pages/07.jpg",audio:"./audio/07.mp3",id:"07",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0645\u0646",artist:"\u0633\u064a\u062f \u0639\u0628\u062f\u0627\u0644\u0644\u0647",cover:"./pages/08.jpg",audio:"./audio/08.mp3",id:"08",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062a\u0627\u0633\u0639",artist:"\u0633\u064a\u062f \u0639\u0628\u062f\u0627\u0644\u0644\u0647",cover:"./pages/09.jpg",audio:"./audio/09.mp3",id:"09",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0639\u0627\u0634\u0631",artist:"\u0633\u064a\u062f \u0639\u0628\u062f\u0627\u0644\u0644\u0647",cover:"./pages/10.jpg",audio:"./audio/10.mp3",id:"10",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062d\u0627\u062f\u064a \u0639\u0634\u0631",artist:"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0628\u0646 \u062f\u064a\u0631\u064a\u0647",cover:"./pages/11.jpg",audio:"./audio/11.mp3",id:"11",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0646\u064a \u0639\u0634\u0631",artist:"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0628\u0646 \u062f\u064a\u0631\u064a\u0647",cover:"./pages/12.jpg",audio:"./audio/12.mp3",id:"12",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0644\u062b \u0639\u0634\u0631",artist:"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0628\u0646 \u062f\u064a\u0631\u064a\u0647",cover:"./pages/13.jpg",audio:"./audio/13.mp3",id:"13",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0631\u0627\u0628\u0639 \u0639\u0634\u0631",artist:"\u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0628\u0646 \u062f\u064a\u0631\u064a\u0647",cover:"./pages/14.jpg",audio:"./audio/14.mp3",id:"14",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062e\u0627\u0645\u0633 \u0639\u0634\u0631",artist:"\u0639\u0628\u062f\u0627\u0644\u0631\u0634\u064a\u062f \u062c\u0627\u0645\u0639",cover:"./pages/15.jpg",audio:"./audio/15.mp3",id:"15",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0633\u0627\u062f\u0633 \u0639\u0634\u0631",artist:"\u0639\u0628\u062f\u0627\u0644\u0631\u0634\u064a\u062f \u062c\u0627\u0645\u0639",cover:"./pages/16.jpg",audio:"./audio/16.mp3",id:"16",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0633\u0627\u0628\u0639 \u0639\u0634\u0631",artist:"\u0639\u0628\u062f\u0627\u0644\u0631\u0634\u064a\u062f \u062c\u0627\u0645\u0639",cover:"./pages/17.jpg",audio:"./audio/17.mp3",id:"17",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0645\u0646 \u0639\u0634\u0631",artist:"\u0639\u0628\u062f\u0627\u0644\u0631\u0634\u064a\u062f \u062c\u0627\u0645\u0639",cover:"./pages/18.jpg",audio:"./audio/18.mp3",id:"18",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062a\u0627\u0633\u0639 \u0639\u0634\u0631",artist:"\u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0627\u0644\u0645\u0634\u062c\u0631\u064a",cover:"./pages/19.jpg",audio:"./audio/19.mp3",id:"19",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0639\u0634\u0631\u0648\u0646",artist:"\u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0627\u0644\u0645\u0634\u062c\u0631\u064a",cover:"./pages/20.jpg",audio:"./audio/20.mp3",id:"20",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062d\u0627\u062f\u064a \u0648\u0627\u0644\u0639\u0634\u0631\u0648\u0646",artist:"\u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0627\u0644\u0645\u0634\u062c\u0631\u064a",cover:"./pages/21.jpg",audio:"./audio/21.mp3",id:"21",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0646\u064a \u0648\u0627\u0644\u0639\u0634\u0631\u0648\u0646",artist:"\u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0627\u0644\u0645\u0634\u062c\u0631\u064a",cover:"./pages/22.jpg",audio:"./audio/22.mp3",id:"22",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0644\u062b \u0648\u0627\u0644\u0639\u0634\u0631\u0648\u0646",artist:"\u0639\u062f\u0646\u0627\u0646 \u0627\u0644\u0628\u0644\u0648\u0634\u064a",cover:"./pages/23.jpg",audio:"./audio/23.mp3",id:"23",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0648\u0627\u0644\u0631\u0627\u0628\u0639 \u0648\u0627\u0644\u0639\u0634\u0631\u0648\u0646",artist:"\u0639\u062f\u0646\u0627\u0646 \u0627\u0644\u0628\u0644\u0648\u0634\u064a",cover:"./pages/24.jpg",audio:"./audio/24.mp3",id:"24",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062e\u0627\u0645\u0633 \u0648\u0627\u0644\u0639\u0634\u0631\u0648\u0646",artist:"\u0639\u062f\u0646\u0627\u0646 \u0627\u0644\u0628\u0644\u0648\u0634\u064a",cover:"./pages/25.jpg",audio:"./audio/25.mp3",id:"25",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0633\u0627\u062f\u0633 \u0648\u0627\u0644\u0639\u0634\u0631\u0648\u0646",artist:"\u0639\u062f\u0646\u0627\u0646 \u0627\u0644\u0628\u0644\u0648\u0634\u064a",cover:"./pages/26.jpg",audio:"./audio/26.mp3",id:"26",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0633\u0627\u0628\u0639 \u0648\u0627\u0644\u0639\u0634\u0631\u0648\u0646",artist:"\u0645\u062d\u0645\u062f \u0628\u0646 \u062f\u064a\u0631\u064a\u0647",cover:"./pages/27.jpg",audio:"./audio/27.mp3",id:"27",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0645\u0646 \u0648\u0627\u0644\u0639\u0634\u0631\u0648\u0646",artist:"\u0645\u062d\u0645\u062f \u0628\u0646 \u062f\u064a\u0631\u064a\u0647",cover:"./pages/28.jpg",audio:"./audio/28.mp3",id:"28",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062a\u0627\u0633\u0639 \u0648\u0627\u0644\u0639\u0634\u0631\u0648\u0646",artist:"\u0645\u062d\u0645\u062f \u0628\u0646 \u062f\u064a\u0631\u064a\u0647",cover:"./pages/29.jpg",audio:"./audio/29.mp3",id:"29",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0644\u0627\u062b\u0648\u0646",artist:"\u0645\u062d\u0645\u062f \u0628\u0646 \u062f\u064a\u0631\u064a\u0647",cover:"./pages/30.jpg",audio:"./audio/30.mp3",id:"30",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062d\u0627\u062f\u064a \u0648\u0627\u0644\u062b\u0644\u0627\u062b\u0648\u0646",artist:"\u0645\u062d\u0645\u062f \u064a\u0645\u0627\u0646\u064a",cover:"./pages/31.jpg",audio:"./audio/31.mp3",id:"31",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0646\u064a \u0648\u0627\u0644\u062b\u0644\u0627\u062b\u0648\u0646",artist:"\u0645\u062d\u0645\u062f \u064a\u0645\u0627\u0646\u064a",cover:"./pages/32.jpg",audio:"./audio/32.mp3",id:"32",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0644\u062b \u0648\u0627\u0644\u062b\u0644\u0627\u062b\u0648\u0646",artist:"\u0645\u062d\u0645\u062f \u064a\u0645\u0627\u0646\u064a",cover:"./pages/33.jpg",audio:"./audio/33.mp3",id:"33",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0631\u0627\u0628\u0639 \u0648\u0627\u0644\u062b\u0644\u0627\u062b\u0648\u0646",artist:"\u0645\u062d\u0645\u062f \u064a\u0645\u0627\u0646\u064a",cover:"./pages/34.jpg",audio:"./audio/34.mp3",id:"34",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062e\u0627\u0645\u0633 \u0648\u0627\u0644\u062b\u0644\u0627\u062b\u0648\u0646",artist:"\u0645\u062d\u0645\u062f \u0627\u0644\u0641\u0627\u062a\u062d",cover:"./pages/35.jpg",audio:"./audio/35.mp3",id:"35",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0633\u0627\u062f\u0633 \u0648\u0627\u0644\u062b\u0644\u0627\u062b\u0648\u0646",artist:"\u0645\u062d\u0645\u062f \u0627\u0644\u0641\u0627\u062a\u062d",cover:"./pages/36.jpg",audio:"./audio/36.mp3",id:"36",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0633\u0627\u0628\u0639 \u0648\u0627\u0644\u062b\u0644\u0627\u062b\u0648\u0646",artist:"\u0645\u062d\u0645\u062f \u0627\u0644\u0641\u0627\u062a\u062d",cover:"./pages/37.jpg",audio:"./audio/37.mp3",id:"37",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0645\u0646 \u0648\u0627\u0644\u062b\u0644\u0627\u062b\u0648\u0646",artist:"\u0645\u062d\u0645\u062f \u0627\u0644\u0641\u0627\u062a\u062d",cover:"./pages/38.jpg",audio:"./audio/38.mp3",id:"38",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062a\u0627\u0633\u0639 \u0648\u0627\u0644\u062b\u0644\u0627\u062b\u0648\u0646",artist:"\u0646\u0648\u062d \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0634\u064a\u062e",cover:"./pages/39.jpg",audio:"./audio/39.mp3",id:"39",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0648\u0646",artist:"\u0646\u0648\u062d \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0634\u064a\u062e",cover:"./pages/40.jpg",audio:"./audio/40.mp3",id:"40",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062d\u0627\u062f\u064a \u0648\u0627\u0644\u0623\u0631\u0628\u0639\u0648\u0646",artist:"\u0646\u0648\u062d \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0634\u064a\u062e",cover:"./pages/41.jpg",audio:"./audio/41.mp3",id:"41",active:!0},{name:"\u0627\u0644\u062f\u0639\u0627\u0621 \u0627\u0644\u062b\u0627\u0646\u064a \u0648\u0627\u0644\u0623\u0631\u0628\u0639\u0648\u0646",artist:"\u0646\u0648\u062d \u0639\u0628\u062f\u0627\u0644\u0631\u062d\u0645\u0646 \u0634\u064a\u062e",cover:"./pages/42.jpg",audio:"./audio/42.mp3",id:"42",active:!0}]};var y=function(){var a=Object(i.useRef)(null),e=Object(i.useState)(x()),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(n[0]),o=Object(p.a)(c,2),g=o[0],j=o[1],f=Object(i.useState)(!1),y=Object(p.a)(f,2),S=y[0],k=y[1],N=Object(i.useState)({currentTime:0,duration:0,animationPercentage:0,volume:0}),w=Object(p.a)(N,2),C=w[0],P=w[1],I=Object(i.useState)(!1),T=Object(p.a)(I,2),M=T[0],R=T[1],z=function(a){var e=a.target.currentTime,t=a.target.duration,i=Math.round(e),n=Math.round(t),r=Math.round(i/n*100);P(Object(d.a)(Object(d.a)({},C),{},{currentTime:e,duration:t,animationPercentage:r,volume:a.target.volume}))},L=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.findIndex((function(a){return a.id===g.id})),e.next=3,j(n[(t+1)%n.length]);case 3:return v(S,a),e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"App ".concat(M?"library-active":""),children:[Object(m.jsx)(h,{libraryStatus:M,setLibraryStatus:R}),Object(m.jsx)("h2",{class:"title",children:"\u0627\u0644\u0623\u0631\u0628\u0639\u064a\u0646 \u0641\u064a \u062f\u0639\u0627\u0621 \u0631\u0628 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0646  "}),Object(m.jsx)(b,{isPlaying:S,currentSong:g}),Object(m.jsx)(l,{audioRef:a,setIsPlaying:k,currentSong:g,isPlaying:S,songInfo:C,setSongInfo:P,songs:n,setSongs:r,setCurrentSong:j}),Object(m.jsx)(O,{songs:n,setCurrentSong:j,audioRef:a,isPlaying:S,setSongs:r,libraryStatus:M}),Object(m.jsx)("audio",{onLoadedMetadata:z,onTimeUpdate:z,ref:a,src:g.audio,onEnded:L})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.287256aa.chunk.js.map