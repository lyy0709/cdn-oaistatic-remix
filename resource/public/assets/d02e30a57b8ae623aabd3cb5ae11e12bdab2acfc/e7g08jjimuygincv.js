import{l as i,h as p,r as a,dL as d,c0 as h,c1 as u,a$ as c,j as l}from"./egi9yqe8h527q0wn.js";import{C as f}from"./n92zlgqi0rfhg67s.js";import{S}from"./ltjz5fq7dg30ydkn.js";import{T as x}from"./d1idnzvl0pqu9wz9.js";import{u as g}from"./ddb1tx8lx2qgy0qt.js";import"./e6itquh41uv61tg7.js";import"./efbz2xeupq2vm8nx.js";import"./kovfiydeinrm6blw.js";import"./bue7ssrf5lr74ywi.js";import"./hjyufao59r59iwke.js";import"./mulk6actptn6vk4t.js";import"./fudx0zpt1yfrknlw.js";import"./er0ahr1yq57dmlc2.js";import"./z0c6vm4df23yv2bb.js";import"./g8dk0p9fqqplk9i1.js";import"./i91n50yt16oqkyc4.js";import"./fsldftql3hgxsggg.js";import"./fv2lx90pr3xg3map.js";import"./hv5dp5z9yhve225l.js";import"./mk14lgsmrpmo2zsf.js";import"./i04pcwd992jm5mp6.js";import"./fkawcdcy1eq7glw1.js";import"./ed4yr7r1n1jkra8g.js";import"./o454bpu1c0xgns3r.js";import"./diemq8s9dr5y0vfm.js";import"./elp95vs8lkf3yodn.js";import"./egua8rkjrlzqa57o.js";import"./kjok3qqpzyd4jz2x.js";import"./j6ontdtp704853qp.js";import"./louqp0wzqldquiqi.js";import"./ob86mfmf3mgwxue8.js";import"./kgbcmaztr0mh2fpl.js";import"./lyajfocluai5tj3m.js";import"./lv0rtycw52wt1lk8.js";import"./k47fatma6a4s1ju0.js";import"./g2up52laq4pk12fs.js";import"./dt5muwk0s9zorngf.js";import"./k06br910ge3nee84.js";import"./djlrlzxcxyx13xmi.js";import"./hb6lghr92jcoc968.js";import"./gf88mdq83xzbrg13.js";import"./olgw4535s2akqnw4.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=p({queryKey:[`shared-conversation/${t}`],queryFn:()=>l.getAuthedSharedConversation(t)}),[o]=a.useState(()=>d()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=h(u.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(x.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(f,{...e.chatPageProps,clientThreadId:o}):i.jsx(S,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(c,{className:"text-token-text-tertiary"})})}function nt(){const{sharedConversationId:e,...t}=g();return i.jsx(C,{...t,sharedConversationId:e})}export{nt as default};
//# sourceMappingURL=e7g08jjimuygincv.js.map
