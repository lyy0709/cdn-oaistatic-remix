import{c as he,ax as S,r as $,br as ye,g as Te,a3 as le}from"./gghzs582a65dvm3m.js";const Ne={isInternalSettingsModalOpen:!1,isSettingsModalOpen:!1,isDebugModalOpen:!1,isUsageNuxModalOpen:!1,isWelcomePageOpen:!1},C=he()(()=>({...Ne})),R={isInternalSettingsModalOpen:e=>e.isInternalSettingsModalOpen,isSettingsModalOpen:e=>e.isSettingsModalOpen,isDebugModalOpen:e=>e.isDebugModalOpen,isUsageNuxModalOpen:e=>e.isUsageNuxModalOpen,isWelcomePageOpen:e=>e.isWelcomePageOpen,isModalOpen:e=>R.isInternalSettingsModalOpen(e)||R.isSettingsModalOpen(e)||R.isDebugModalOpen(e)||R.isUsageNuxModalOpen(e)||R.isWelcomePageOpen(e)},St={toggleInternalSettingsModalOpen(){C.setState(e=>({isInternalSettingsModalOpen:!e.isInternalSettingsModalOpen}))},setInternalSettingsModalOpen(e){C.setState({isInternalSettingsModalOpen:e})},toggleSettingsModalOpen(){C.setState(e=>({isSettingsModalOpen:!e.isSettingsModalOpen}))},setSettingsModalOpen(e){C.setState({isSettingsModalOpen:e})},toggleDebugModalOpen(){C.setState(e=>({isDebugModalOpen:!e.isDebugModalOpen}))},setDebugModalOpen(e){C.setState({isDebugModalOpen:e})},setUsageNuxModalOpen(e){C.setState({isUsageNuxModalOpen:e})},setWelcomePageOpen(e){C.setState({isWelcomePageOpen:e})}};var ue={},W={},N={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isEventSourceSupported=e.isReactNative=e.ReadyState=e.DEFAULT_HEARTBEAT=e.UNPARSABLE_JSON_OBJECT=e.DEFAULT_RECONNECT_INTERVAL_MS=e.DEFAULT_RECONNECT_LIMIT=e.SOCKET_IO_PING_CODE=e.SOCKET_IO_PATH=e.SOCKET_IO_PING_INTERVAL=e.DEFAULT_EVENT_SOURCE_OPTIONS=e.EMPTY_EVENT_HANDLERS=e.DEFAULT_OPTIONS=void 0;var t=1,r=1e3*t;e.DEFAULT_OPTIONS={},e.EMPTY_EVENT_HANDLERS={},e.DEFAULT_EVENT_SOURCE_OPTIONS={withCredentials:!1,events:e.EMPTY_EVENT_HANDLERS},e.SOCKET_IO_PING_INTERVAL=25*r,e.SOCKET_IO_PATH="/socket.io/?EIO=3&transport=websocket",e.SOCKET_IO_PING_CODE="2",e.DEFAULT_RECONNECT_LIMIT=20,e.DEFAULT_RECONNECT_INTERVAL_MS=5e3,e.UNPARSABLE_JSON_OBJECT={},e.DEFAULT_HEARTBEAT={message:"ping",timeout:6e4,interval:25e3},function(a){a[a.UNINSTANTIATED=-1]="UNINSTANTIATED",a[a.CONNECTING=0]="CONNECTING",a[a.OPEN=1]="OPEN",a[a.CLOSING=2]="CLOSING",a[a.CLOSED=3]="CLOSED"}(e.ReadyState||(e.ReadyState={}));var n=function(){try{return"EventSource"in globalThis}catch{return!1}};e.isReactNative=typeof navigator<"u"&&navigator.product==="ReactNative",e.isEventSourceSupported=!e.isReactNative&&n()})(N);var Y={},q={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetWebSockets=e.sharedWebSockets=void 0,e.sharedWebSockets={};var t=function(r){if(r&&e.sharedWebSockets.hasOwnProperty(r))delete e.sharedWebSockets[r];else for(var n in e.sharedWebSockets)e.sharedWebSockets.hasOwnProperty(n)&&delete e.sharedWebSockets[n]};e.resetWebSockets=t})(q);var z={},p={};Object.defineProperty(p,"__esModule",{value:!0});p.setUpSocketIOPing=p.appendQueryParams=p.parseSocketIOUrl=void 0;var J=N,Me=function(e){if(e){var t=/^https|wss/.test(e),r=e.replace(/^(https?|wss?)(:\/\/)?/,""),n=r.replace(/\/$/,""),a=t?"wss":"ws";return"".concat(a,"://").concat(n).concat(J.SOCKET_IO_PATH)}else if(e===""){var t=/^https/.test(window.location.protocol),a=t?"wss":"ws",u=window.location.port?":".concat(window.location.port):"";return"".concat(a,"://").concat(window.location.hostname).concat(u).concat(J.SOCKET_IO_PATH)}return e};p.parseSocketIOUrl=Me;var me=function(e,t){t===void 0&&(t={});var r=/\?([\w]+=[\w]+)/,n=r.test(e),a="".concat(Object.entries(t).reduce(function(u,s){var i=s[0],o=s[1];return u+"".concat(i,"=").concat(o,"&")},"").slice(0,-1));return"".concat(e).concat(n?"&":"?").concat(a)};p.appendQueryParams=me;var pe=function(e,t){t===void 0&&(t=J.SOCKET_IO_PING_INTERVAL);var r=function(){return e(J.SOCKET_IO_PING_CODE)};return window.setInterval(r,t)};p.setUpSocketIOPing=pe;var G={};Object.defineProperty(G,"__esModule",{value:!0});G.heartbeat=void 0;var re=N;function Ce(e,t){var r=t||{},n=r.interval,a=n===void 0?re.DEFAULT_HEARTBEAT.interval:n,u=r.timeout,s=u===void 0?re.DEFAULT_HEARTBEAT.timeout:u,i=r.message,o=i===void 0?re.DEFAULT_HEARTBEAT.message:i,c=!1,l=setInterval(function(){try{typeof o=="function"?e.send(o()):e.send(o)}catch{}},a),d=setInterval(function(){c?c=!1:e.close()},s);return e.addEventListener("close",function(){clearInterval(l),clearInterval(d)}),function(){c=!0}}G.heartbeat=Ce;var P={},X={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetSubscribers=e.removeSubscriber=e.addSubscriber=e.hasSubscribers=e.getSubscribers=void 0;var t={},r=[],n=function(o){return(0,e.hasSubscribers)(o)?Array.from(t[o]):r};e.getSubscribers=n;var a=function(o){var c;return((c=t[o])===null||c===void 0?void 0:c.size)>0};e.hasSubscribers=a;var u=function(o,c){t[o]=t[o]||new Set,t[o].add(c)};e.addSubscriber=u;var s=function(o,c){t[o].delete(c)};e.removeSubscriber=s;var i=function(o){if(o&&t.hasOwnProperty(o))delete t[o];else for(var c in t)t.hasOwnProperty(c)&&delete t[c]};e.resetSubscribers=i})(X);Object.defineProperty(P,"__esModule",{value:!0});P.resetGlobalState=P.assertIsWebSocket=void 0;var Ie=q,we=X;function Pe(e,t){if(!t&&!(e instanceof WebSocket))throw new Error("")}P.assertIsWebSocket=Pe;function ke(e){(0,we.resetSubscribers)(e),(0,Ie.resetWebSockets)(e)}P.resetGlobalState=ke;var V=S&&S.__assign||function(){return V=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},V.apply(this,arguments)};Object.defineProperty(z,"__esModule",{value:!0});z.attachListeners=void 0;var Ae=p,Le=G,m=N,Ue=P,We=function(e,t,r){var n;if(t.current.heartbeat&&e instanceof WebSocket){var a=typeof t.current.heartbeat=="boolean"?void 0:t.current.heartbeat;n=(0,Le.heartbeat)(e,a)}e.onmessage=function(u){var s;n==null||n(),t.current.onMessage&&t.current.onMessage(u),!(typeof t.current.filter=="function"&&t.current.filter(u)!==!0)&&(t.current.heartbeat&&typeof t.current.heartbeat!="boolean"&&((s=t.current.heartbeat)===null||s===void 0?void 0:s.returnMessage)===u.data||r(u))}},De=function(e,t,r,n){e.onopen=function(a){t.current.onOpen&&t.current.onOpen(a),n.current=0,r(m.ReadyState.OPEN)}},Re=function(e,t,r,n,a){if(m.isEventSourceSupported&&e instanceof EventSource)return function(){};(0,Ue.assertIsWebSocket)(e,t.current.skipAssert);var u;return e.onclose=function(s){var i;if(t.current.onClose&&t.current.onClose(s),r(m.ReadyState.CLOSED),t.current.shouldReconnect&&t.current.shouldReconnect(s)){var o=(i=t.current.reconnectAttempts)!==null&&i!==void 0?i:m.DEFAULT_RECONNECT_LIMIT;if(a.current<o){var c=typeof t.current.reconnectInterval=="function"?t.current.reconnectInterval(a.current):t.current.reconnectInterval;u=window.setTimeout(function(){a.current++,n()},c??m.DEFAULT_RECONNECT_INTERVAL_MS)}else t.current.onReconnectStop&&t.current.onReconnectStop(o),console.warn("Max reconnect attempts of ".concat(o," exceeded"))}},function(){return u&&window.clearTimeout(u)}},je=function(e,t,r,n,a){var u;return e.onerror=function(s){var i;if(t.current.onError&&t.current.onError(s),m.isEventSourceSupported&&e instanceof EventSource&&(t.current.onClose&&t.current.onClose(V(V({},s),{code:1006,reason:"An error occurred with the EventSource: ".concat(s),wasClean:!1})),r(m.ReadyState.CLOSED),e.close()),t.current.retryOnError)if(a.current<((i=t.current.reconnectAttempts)!==null&&i!==void 0?i:m.DEFAULT_RECONNECT_LIMIT)){var o=typeof t.current.reconnectInterval=="function"?t.current.reconnectInterval(a.current):t.current.reconnectInterval;u=window.setTimeout(function(){a.current++,n()},o??m.DEFAULT_RECONNECT_INTERVAL_MS)}else t.current.onReconnectStop&&t.current.onReconnectStop(t.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(t.current.reconnectAttempts," exceeded"))},function(){return u&&window.clearTimeout(u)}},Fe=function(e,t,r,n,a,u){var s=t.setLastMessage,i=t.setReadyState,o,c,l;return r.current.fromSocketIO&&(o=(0,Ae.setUpSocketIOPing)(u)),We(e,r,s),De(e,r,i,a),c=Re(e,r,i,n,a),l=je(e,r,i,n,a),function(){i(m.ReadyState.CLOSING),c(),l(),e.close(),o&&clearInterval(o)}};z.attachListeners=Fe;var Z={},B=S&&S.__assign||function(){return B=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},B.apply(this,arguments)};Object.defineProperty(Z,"__esModule",{value:!0});Z.attachSharedListeners=void 0;var $e=q,k=N,F=X,Ge=p,He=G,Je=function(e,t,r){var n;r&&e instanceof WebSocket&&(n=(0,He.heartbeat)(e,typeof r=="boolean"?void 0:r)),e.onmessage=function(a){n==null||n(),(0,F.getSubscribers)(t).forEach(function(u){u.optionsRef.current.onMessage&&u.optionsRef.current.onMessage(a),!(typeof u.optionsRef.current.filter=="function"&&u.optionsRef.current.filter(a)!==!0)&&(r&&typeof r!="boolean"&&(r==null?void 0:r.returnMessage)===a.data||u.setLastMessage(a))})}},Ve=function(e,t){e.onopen=function(r){(0,F.getSubscribers)(t).forEach(function(n){n.reconnectCount.current=0,n.optionsRef.current.onOpen&&n.optionsRef.current.onOpen(r),n.setReadyState(k.ReadyState.OPEN)})}},Be=function(e,t){e instanceof WebSocket&&(e.onclose=function(r){(0,F.getSubscribers)(t).forEach(function(n){n.optionsRef.current.onClose&&n.optionsRef.current.onClose(r),n.setReadyState(k.ReadyState.CLOSED)}),delete $e.sharedWebSockets[t],(0,F.getSubscribers)(t).forEach(function(n){var a;if(n.optionsRef.current.shouldReconnect&&n.optionsRef.current.shouldReconnect(r)){var u=(a=n.optionsRef.current.reconnectAttempts)!==null&&a!==void 0?a:k.DEFAULT_RECONNECT_LIMIT;if(n.reconnectCount.current<u){var s=typeof n.optionsRef.current.reconnectInterval=="function"?n.optionsRef.current.reconnectInterval(n.reconnectCount.current):n.optionsRef.current.reconnectInterval;setTimeout(function(){n.reconnectCount.current++,n.reconnect.current()},s??k.DEFAULT_RECONNECT_INTERVAL_MS)}else n.optionsRef.current.onReconnectStop&&n.optionsRef.current.onReconnectStop(n.optionsRef.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(u," exceeded"))}})})},Ke=function(e,t){e.onerror=function(r){(0,F.getSubscribers)(t).forEach(function(n){n.optionsRef.current.onError&&n.optionsRef.current.onError(r),k.isEventSourceSupported&&e instanceof EventSource&&(n.optionsRef.current.onClose&&n.optionsRef.current.onClose(B(B({},r),{code:1006,reason:"An error occurred with the EventSource: ".concat(r),wasClean:!1})),n.setReadyState(k.ReadyState.CLOSED))}),k.isEventSourceSupported&&e instanceof EventSource&&e.close()}},Qe=function(e,t,r,n){var a;return r.current.fromSocketIO&&(a=(0,Ge.setUpSocketIOPing)(n)),Je(e,t,r.current.heartbeat),Be(e,t),Ve(e,t),Ke(e,t),function(){a&&clearInterval(a)}};Z.attachSharedListeners=Qe;Object.defineProperty(Y,"__esModule",{value:!0});Y.createOrJoinSocket=void 0;var I=q,j=N,Ye=z,qe=Z,ce=X,ze=function(e,t,r,n,a){return function(){if((0,ce.removeSubscriber)(e,t),!(0,ce.hasSubscribers)(e)){try{var u=I.sharedWebSockets[e];u instanceof WebSocket&&(u.onclose=function(s){r.current.onClose&&r.current.onClose(s),n(j.ReadyState.CLOSED)}),u.close()}catch{}a&&a(),delete I.sharedWebSockets[e]}}},Xe=function(e,t,r,n,a,u,s,i){if(!j.isEventSourceSupported&&n.current.eventSourceOptions)throw j.isReactNative?new Error("EventSource is not supported in ReactNative"):new Error("EventSource is not supported");if(n.current.share){var o=null;I.sharedWebSockets[t]===void 0?(I.sharedWebSockets[t]=n.current.eventSourceOptions?new EventSource(t,n.current.eventSourceOptions):new WebSocket(t,n.current.protocols),e.current=I.sharedWebSockets[t],r(j.ReadyState.CONNECTING),o=(0,qe.attachSharedListeners)(I.sharedWebSockets[t],t,n,i)):(e.current=I.sharedWebSockets[t],r(I.sharedWebSockets[t].readyState));var c={setLastMessage:a,setReadyState:r,optionsRef:n,reconnectCount:s,reconnect:u};return(0,ce.addSubscriber)(t,c),ze(t,c,n,r,o)}else{if(e.current=n.current.eventSourceOptions?new EventSource(t,n.current.eventSourceOptions):new WebSocket(t,n.current.protocols),r(j.ReadyState.CONNECTING),!e.current)throw new Error("WebSocket failed to be created");return(0,Ye.attachListeners)(e.current,{setLastMessage:a,setReadyState:r},n,u.current,s,i)}};Y.createOrJoinSocket=Xe;var _e={};(function(e){var t=S&&S.__awaiter||function(i,o,c,l){function d(f){return f instanceof c?f:new c(function(O){O(f)})}return new(c||(c=Promise))(function(f,O){function h(_){try{v(l.next(_))}catch(y){O(y)}}function E(_){try{v(l.throw(_))}catch(y){O(y)}}function v(_){_.done?f(_.value):d(_.value).then(h,E)}v((l=l.apply(i,o||[])).next())})},r=S&&S.__generator||function(i,o){var c={label:0,sent:function(){if(f[0]&1)throw f[1];return f[1]},trys:[],ops:[]},l,d,f,O;return O={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(O[Symbol.iterator]=function(){return this}),O;function h(v){return function(_){return E([v,_])}}function E(v){if(l)throw new TypeError("Generator is already executing.");for(;c;)try{if(l=1,d&&(f=v[0]&2?d.return:v[0]?d.throw||((f=d.return)&&f.call(d),0):d.next)&&!(f=f.call(d,v[1])).done)return f;switch(d=0,f&&(v=[v[0]&2,f.value]),v[0]){case 0:case 1:f=v;break;case 4:return c.label++,{value:v[1],done:!1};case 5:c.label++,d=v[1],v=[0];continue;case 7:v=c.ops.pop(),c.trys.pop();continue;default:if(f=c.trys,!(f=f.length>0&&f[f.length-1])&&(v[0]===6||v[0]===2)){c=0;continue}if(v[0]===3&&(!f||v[1]>f[0]&&v[1]<f[3])){c.label=v[1];break}if(v[0]===6&&c.label<f[1]){c.label=f[1],f=v;break}if(f&&c.label<f[2]){c.label=f[2],c.ops.push(v);break}f[2]&&c.ops.pop(),c.trys.pop();continue}v=o.call(i,c)}catch(_){v=[6,_],d=0}finally{l=f=0}if(v[0]&5)throw v[1];return{value:v[0]?v[1]:void 0,done:!0}}};Object.defineProperty(e,"__esModule",{value:!0}),e.getUrl=void 0;var n=p,a=N,u=function(i){return new Promise(function(o){return window.setTimeout(o,i)})},s=function(i,o,c){return c===void 0&&(c=0),t(void 0,void 0,void 0,function(){var l,d,f,O,h,E,v,_;return r(this,function(y){switch(y.label){case 0:if(typeof i!="function")return[3,10];y.label=1;case 1:return y.trys.push([1,3,,9]),[4,i()];case 2:return l=y.sent(),[3,9];case 3:return y.sent(),o.current.retryOnError?(d=(E=o.current.reconnectAttempts)!==null&&E!==void 0?E:a.DEFAULT_RECONNECT_LIMIT,c<d?(f=typeof o.current.reconnectInterval=="function"?o.current.reconnectInterval(c):o.current.reconnectInterval,[4,u(f??a.DEFAULT_RECONNECT_INTERVAL_MS)]):[3,5]):[3,7];case 4:return y.sent(),[2,(0,e.getUrl)(i,o,c+1)];case 5:return(_=(v=o.current).onReconnectStop)===null||_===void 0||_.call(v,c),[2,null];case 6:return[3,8];case 7:return[2,null];case 8:return[3,9];case 9:return[3,11];case 10:l=i,y.label=11;case 11:return O=o.current.fromSocketIO?(0,n.parseSocketIOUrl)(l):l,h=o.current.queryParams?(0,n.appendQueryParams)(O,o.current.queryParams):O,[2,h]}})})};e.getUrl=s})(_e);var Oe={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.websocketWrapper=void 0;var t=function(r,n){return new Proxy(r,{get:function(a,u){var s=a[u];return u==="reconnect"?n:typeof s=="function"?(console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."),function(){}):s},set:function(a,u,s){return/^on/.test(u)?(console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket."),!1):(a[u]=s,!0)}})};e.websocketWrapper=t,e.default=e.websocketWrapper})(Oe);var w=S&&S.__assign||function(){return w=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},w.apply(this,arguments)},Ze=S&&S.__awaiter||function(e,t,r,n){function a(u){return u instanceof r?u:new r(function(s){s(u)})}return new(r||(r=Promise))(function(u,s){function i(l){try{c(n.next(l))}catch(d){s(d)}}function o(l){try{c(n.throw(l))}catch(d){s(d)}}function c(l){l.done?u(l.value):a(l.value).then(i,o)}c((n=n.apply(e,t||[])).next())})},xe=S&&S.__generator||function(e,t){var r={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},n,a,u,s;return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(c){return function(l){return o([c,l])}}function o(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(u=c[0]&2?a.return:c[0]?a.throw||((u=a.return)&&u.call(a),0):a.next)&&!(u=u.call(a,c[1])).done)return u;switch(a=0,u&&(c=[c[0]&2,u.value]),c[0]){case 0:case 1:u=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,a=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(u=r.trys,!(u=u.length>0&&u[u.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!u||c[1]>u[0]&&c[1]<u[3])){r.label=c[1];break}if(c[0]===6&&r.label<u[1]){r.label=u[1],u=c;break}if(u&&r.label<u[2]){r.label=u[2],r.ops.push(c);break}u[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(l){c=[6,l],a=0}finally{n=u=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},et=S&&S.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(W,"__esModule",{value:!0});W.useWebSocket=void 0;var g=$,ne=ye,M=N,tt=Y,rt=_e,nt=et(Oe),fe=P,at=function(e,t,r){t===void 0&&(t=M.DEFAULT_OPTIONS),r===void 0&&(r=!0);var n=(0,g.useState)(null),a=n[0],u=n[1],s=(0,g.useState)({}),i=s[0],o=s[1],c=(0,g.useMemo)(function(){if(a)try{return JSON.parse(a.data)}catch{return M.UNPARSABLE_JSON_OBJECT}return null},[a]),l=(0,g.useRef)(null),d=(0,g.useRef)(null),f=(0,g.useRef)(function(){}),O=(0,g.useRef)(0),h=(0,g.useRef)([]),E=(0,g.useRef)(null),v=(0,g.useRef)(t);v.current=t;var _=l.current&&i[l.current]!==void 0?i[l.current]:e!==null&&r===!0?M.ReadyState.CONNECTING:M.ReadyState.UNINSTANTIATED,y=t.queryParams?JSON.stringify(t.queryParams):null,A=(0,g.useCallback)(function(b,T){var L;if(T===void 0&&(T=!0),M.isEventSourceSupported&&d.current instanceof EventSource){console.warn("Unable to send a message from an eventSource");return}((L=d.current)===null||L===void 0?void 0:L.readyState)===M.ReadyState.OPEN?((0,fe.assertIsWebSocket)(d.current,v.current.skipAssert),d.current.send(b)):T&&h.current.push(b)},[]),Ee=(0,g.useCallback)(function(b,T){T===void 0&&(T=!0),A(JSON.stringify(b),T)},[A]),be=(0,g.useCallback)(function(){return v.current.share!==!0||M.isEventSourceSupported&&d.current instanceof EventSource?d.current:(E.current===null&&d.current&&((0,fe.assertIsWebSocket)(d.current,v.current.skipAssert),E.current=(0,nt.default)(d.current,f)),E.current)},[]);return(0,g.useEffect)(function(){if(e!==null&&r===!0){var b,T=!1,L=!0,oe=function(){return Ze(void 0,void 0,void 0,function(){var H,U,se;return xe(this,function(ie){switch(ie.label){case 0:return H=l,[4,(0,rt.getUrl)(e,v)];case 1:return H.current=ie.sent(),l.current===null?(console.error("Failed to get a valid URL. WebSocket connection aborted."),l.current="ABORTED",(0,ne.flushSync)(function(){return o(function(D){return w(w({},D),{ABORTED:M.ReadyState.CLOSED})})}),[2]):(U=function(D){T||(0,ne.flushSync)(function(){return u(D)})},se=function(D){T||(0,ne.flushSync)(function(){return o(function(ge){var te;return w(w({},ge),l.current&&(te={},te[l.current]=D,te))})})},L&&(b=(0,tt.createOrJoinSocket)(d,l.current,se,v,U,f,O,A)),[2])}})})};return f.current=function(){T||(E.current&&(E.current=null),b==null||b(),oe())},oe(),function(){T=!0,L=!1,E.current&&(E.current=null),b==null||b(),u(null)}}else(e===null||r===!1)&&(O.current=0,o(function(H){var U;return w(w({},H),l.current&&(U={},U[l.current]=M.ReadyState.CLOSED,U))}))},[e,r,y,A]),(0,g.useEffect)(function(){_===M.ReadyState.OPEN&&h.current.splice(0).forEach(function(b){A(b)})},[_]),{sendMessage:A,sendJsonMessage:Ee,lastMessage:a,lastJsonMessage:c,readyState:_,getWebSocket:be}};W.useWebSocket=at;var x={},K=S&&S.__assign||function(){return K=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},K.apply(this,arguments)};Object.defineProperty(x,"__esModule",{value:!0});x.useSocketIO=void 0;var ve=$,ct=W,ut=N,ae={type:"empty",payload:null},ot=function(e){if(!e||!e.data)return ae;var t=e.data.match(/\[.*]/);if(!t)return ae;var r=JSON.parse(t);return!Array.isArray(r)||!r[1]?ae:{type:r[0],payload:r[1]}},st=function(e,t,r){t===void 0&&(t=ut.DEFAULT_OPTIONS),r===void 0&&(r=!0);var n=(0,ve.useMemo)(function(){return K(K({},t),{fromSocketIO:!0})},[]),a=(0,ct.useWebSocket)(e,n,r),u=a.sendMessage,s=a.sendJsonMessage,i=a.lastMessage,o=a.readyState,c=a.getWebSocket,l=(0,ve.useMemo)(function(){return ot(i)},[i]);return{sendMessage:u,sendJsonMessage:s,lastMessage:l,lastJsonMessage:l,readyState:o,getWebSocket:c}};x.useSocketIO=st;var ee={},Q=S&&S.__assign||function(){return Q=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Q.apply(this,arguments)},it=S&&S.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};Object.defineProperty(ee,"__esModule",{value:!0});ee.useEventSource=void 0;var de=$,lt=W,Se=N,ft=function(e,t,r){t===void 0&&(t=Se.DEFAULT_EVENT_SOURCE_OPTIONS);var n=t.withCredentials,a=t.events,u=it(t,["withCredentials","events"]);r===void 0&&(r=!0);var s=Q(Q({},u),{eventSourceOptions:{withCredentials:n}}),i=(0,de.useRef)(Se.EMPTY_EVENT_HANDLERS);a&&(i.current=a);var o=(0,lt.useWebSocket)(e,s,r),c=o.lastMessage,l=o.readyState,d=o.getWebSocket;return(0,de.useEffect)(function(){c!=null&&c.type&&Object.entries(i.current).forEach(function(f){var O=f[0],h=f[1];O===c.type&&h(c)})},[c]),{lastEvent:c,readyState:l,getEventSource:d}};ee.useEventSource=ft;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetGlobalState=e.useEventSource=e.ReadyState=e.useSocketIO=e.default=void 0;var t=W;Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.useWebSocket}});var r=x;Object.defineProperty(e,"useSocketIO",{enumerable:!0,get:function(){return r.useSocketIO}});var n=N;Object.defineProperty(e,"ReadyState",{enumerable:!0,get:function(){return n.ReadyState}});var a=ee;Object.defineProperty(e,"useEventSource",{enumerable:!0,get:function(){return a.useEventSource}});var u=P;Object.defineProperty(e,"resetGlobalState",{enumerable:!0,get:function(){return u.resetGlobalState}})})(ue);const _t=Te(ue),vt=$.createContext({waitingForNewTurn:!1,sessionUser:null,userMetadata:{cf_connecting_ip:null,ip_city:null,time_zone:null,user_country:null,user_locale:null,user_region:null,user_region_code:null,latitude:null,longitude:null,locationAccuracy:null},submitFollowup:()=>Promise.resolve(),submitSearch:()=>Promise.resolve(),retrySearch:()=>Promise.resolve(),resetSearch:le,prefetch:le,readyState:ue.ReadyState.UNINSTANTIATED}),Ot=()=>$.useContext(vt);export{vt as S,St as U,R as a,Ot as b,_t as c,ue as d,C as u};
//# sourceMappingURL=bk3ae4zowkrdsix1.js.map
