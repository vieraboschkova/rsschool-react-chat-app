(this.webpackJsonpwebsocketclient=this.webpackJsonpwebsocketclient||[]).push([[0],{18:function(e,n,t){e.exports=t(45)},42:function(e,n,t){},43:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var o=t(4),a=t.n(o),c=t(0),s=t.n(c),i=t(15),r=t(12),l=t(13),u=t(17),m=t(16),g=function(e){var n=e.name,t=e.message,o=e.time,a=e.userName;return s.a.createElement("p",{className:"single-message",style:a===n?{alignSelf:"flex-end",display:"flex",flexDirection:"row-reverse",backgroundColor:"#66ccfa",border:"#55bbfa 1px solid",alignItems:"baseline"}:{}},s.a.createElement("strong",null,n)," ",new Date(o).toLocaleTimeString()," ",s.a.createElement("em",null,t))},d=function(e){var n=e.submitMessage;return s.a.createElement("form",{className:"bottom",action:".",onSubmit:function(e){e.preventDefault();var t=document.getElementById("newMsg");n(t.value),t.value=""}},s.a.createElement("input",{id:"newMsg",type:"text",placeholder:"Enter message..."}),s.a.createElement("input",{type:"submit",value:"Send"}))},f=function(e){var n=e.connection,t=e.connect;return s.a.createElement("div",{className:"tooltip"},s.a.createElement("svg",{className:"connection-status",height:"30",width:"30",onClick:t},s.a.createElement("circle",{cx:"15",cy:"17",r:"12",fill:"grey",style:"connected"===n?{fill:"#29de7d"}:{fill:"#ff8282"}})),s.a.createElement("span",{className:"tooltiptext"},"RECONNECT"))},p=function(e){var n=e.userName,t=e.connection,o=e.connect;return s.a.createElement("div",{className:"welcome-container"},s.a.createElement("h1",{className:"title"},s.a.createElement(f,{connection:t,connect:o}),"RS SCHOOL CHAT"),s.a.createElement("h4",{className:"welcome-user"},"Welcome ",n.toUpperCase()," !"),"connected"===t?s.a.createElement("p",{className:"inline"},"You are now: ",s.a.createElement("strong",null,t)):s.a.createElement("p",{className:"inline"},"You are now: ",s.a.createElement("strong",null,t),"."),"Not ",s.a.createElement("strong",null,n),"?",s.a.createElement("a",{href:"",onClick:function(e){localStorage.clear(),k()}},"  Log out"))},v=function(e){var n=e.userName,t=e.submitMessage,o=e.clientWS,a=e.messages,c=e.connection,i=e.connect,r=e.disconnect;return s.a.createElement("div",{className:"main-container"},s.a.createElement(p,{userName:n,clientWS:o,connection:c,connect:i,disconnect:r}),s.a.createElement("div",{className:"chat-container",id:"chat"},s.a.createElement(d,{userName:n,clientWS:o,submitMessage:t}),a.map((function(e,t){return s.a.createElement(g,{userName:n,key:t,time:e.time,message:e.message,name:e.from})}))))},h=function(e){var n=e.logging;return s.a.createElement("div",{className:"login-container"},s.a.createElement("h1",{className:"title"},"RS SCHOOL CHAT"),s.a.createElement("form",{action:".",onSubmit:function(e){e.preventDefault();var t=document.getElementById("login");n(t.value),localStorage.setItem("username",t.value)}},s.a.createElement("input",{type:"text",placeholder:"Enter username...",id:"login"}),s.a.createElement("input",{type:"submit",value:"LOGIN"})))},E=t(2),N=function(){return s.a.createElement("div",null,s.a.createElement(E.NotificationContainer,null))},b=t(14);var S=function(e){document.hidden&&Notification.requestPermission((function(n){"granted"===n&&navigator.serviceWorker.ready.then((function(n){n.showNotification("New Message!",{body:"from: ".concat(e)})}))}))};(function(){var e=!1,n=null;function t(){console.log("subscribing"),e||(!function(){var t=function(e){for(var n="=".repeat((4-e.length%4)%4),t=(e+n).replace(/\-/g,"+").replace(/_/g,"/"),o=window.atob(t),a=new Uint8Array(o.length),c=0;c<o.length;++c)a[c]=o.charCodeAt(c);return a}("BNPSV1bxg9Va-S8hCCvuj3rTV_kiMZoq5iPalZF_msFaKpw8h8bERC19Ka_NC1JtKBFix8b1ARH1ZqKlnpSDJv4");n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t}).then((function(n){console.log("User is subscribed:",n),e=!0})).catch((function(e){"denied"===Notification.permission?console.warn("Permission for notifications was denied"):console.error("Failed to subscribe the user: ",e)}))}(),console.log("trying to subscribe")),n.pushManager.getSubscription().then((function(n){(e=null!==n)?console.log("User IS subscribed."):console.log("User is NOT subscribed.")}))}"serviceWorker"in navigator?window.addEventListener("load",(function(){console.log("Service Worker and Push is supported"),navigator.serviceWorker.register("sw.js").then((function(e){console.log("Service Worker is registered",e),n=e,t()})).catch((function(e){console.error("Service Worker Error",e)}))})):console.warn("Push messaging is not supported")})();var w="ws://st-chat.shas.tel",y=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).initialState={userName:"",isLoggedIn:!1,messages:[],connection:""},e.state=e.initialState,e.connect=function(){if("connected"===e.state.connection)console.log("you are connected already"),E.NotificationManager.success("You are already connected");else{e.setState({connection:"trying to connect"});var n=new b.w3cwebsocket(w);n.onopen=function(){e.setState({connection:"connected",ws:n}),!0===e.state.isLoggedIn?E.NotificationManager.success("You are now connected"):console.log()},n.onclose=function(){console.log("WebSocket Client DISConnected"),e.setState({connection:"disconnected"}),E.NotificationManager.warning("You are now disconnected"),setTimeout(e.connect,5e3)},n.onerror=function(){console.log("Connection Error"),e.setState({connection:"trying to reconnect"}),E.NotificationManager.error("Connection Error.Trying to reconnect")},n.onmessage=function(n){var t=JSON.parse(n.data);e.addMessage(t),console.log(t),S(t[0].from)}}},e.addMessage=function(n){e.setState((function(e){return{messages:n.concat.apply(n,Object(i.a)(e.messages))}}))},e.submitMessage=function(n){if("connected"!==e.state.connection)alert("you are not connected");else{var t={from:e.state.userName,message:n};e.state.ws.send(JSON.stringify(t))}},e.logging=function(n){console.log("changing log"),e.setState((function(e){return{userName:n,isLoggedIn:!0}})),e.connect()},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.username){var e=localStorage.getItem("username");this.setState({userName:e,isLoggedIn:!0}),this.connect()}}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(N,null),this.state.isLoggedIn?s.a.createElement(v,{userName:this.state.userName,submitMessage:this.submitMessage,clientWS:this.client,messages:this.state.messages,connection:this.state.connection,connect:this.connect,disconnect:this.disconnect}):s.a.createElement(h,{userName:this.state.userName,logging:this.logging}))}}]),t}(c.Component);t(42),t(43),t(44);function C(){a.a.render(s.a.createElement(y,null),document.getElementById("root")),Notification.requestPermission((function(e){console.log("Notification permission status:",e)}))}C();var k=n.default=C}},[[18,1,2]]]);
//# sourceMappingURL=main.fe3dd56e.chunk.js.map