import{aR as O,h as A,r as v,l as z,c as k,ed as N,v as H,i as q,aH as I,ad as w,R as C,j as B,b1 as G,a8 as j,dO as W,ee as X}from"./dr7d3iwdkso0acad.js";import{ck as $,cl as Q,cm as V,cn as K,a5 as S,a6 as M,c as _,co as Y,cp as J,cq as p,cr as Z,cs as ee,l as b,o as x,a0 as re,ct as te,R as se,cu as ne,cv as ae,cw as oe,cx as de}from"./dmeh4acfgftb4ocn.js";import{m as ue}from"./dnerd8yjozxoav5t.js";function xe(){const{imageResults:e}=le();V([...e.map(r=>F(r))])}const ie=$((...e)=>Q(...e),5e3);function le(e=!1){const r=K(["image_results","image_try_hard_status","execution_status"]),t=S(M.threadId),s=_(r.toReversed().flatMap(c=>c.image_results?.entries)).map(c=>({...c,thumbnail_url:c.thumbnail_url.replace(/^http:\/\//,"https://"),content_url:c.content_url.replace(/^http:\/\//,"https://")})),n=S(M.hasModelResponseText),o=r.some(c=>Y(c));let u=s.length===0&&!n;return t!=null&&e&&!u&&s.length===0&&r[0]?.image_try_hard_status==="not_attempted"&&(ie(t,0),u=!0),e&&r[0]?.image_try_hard_status==="in_progress"&&(u=!0),{imageResults:s,isLoading:u,isErrored:s.length===0&&o}}function Ue(){const e=J(),r=S(M.hasTurnError),t=S(M.hasModelResponseText),s=U(e);return{imageResults:s,isLoading:s.length===0&&!t,isErrored:s.length===0&&r}}function U(e){return _(e.flatMap(r=>r.type==="image_v2"?r.images:[]))}function ce(e){const r={};return e.map(t=>{t.type==="webpage"||t.type==="webpage_extended"?t.url&&!r[t.url]&&(r[t.url]=t):t.type==="grouped_webpages"&&t.items.forEach(s=>{s.url&&!r[s.url]&&(r[s.url]=s)})}),Object.values(r)}function he(e){return O({queryKey:["downloadImage",{imageUrl:e}],queryFn:()=>new Promise((r,t)=>{const s=new Image;s.onload=()=>{r({width:s.width,height:s.height})},s.onerror=()=>{t()},s.src=e}),enabled:e!=null})}function Ee(e){return A(he(e))}const E={width:474,square:!0};function F(e,r=E){if(e==null)return;const t=new URL(e.thumbnail_url);if(t.hostname.indexOf(".bing.")===-1)return e.thumbnail_url;const s=Math.min(r.width,e.content_size.width),n=r.height??Math.floor(s*e.content_size.height/e.content_size.width);if(t.searchParams.delete("pid"),r.square){const o=Math.min(s,n);t.searchParams.set("w",o.toString()),t.searchParams.set("h",o.toString())}else t.searchParams.set("w",s.toString()),t.searchParams.set("h",n.toString());return t.searchParams.set("c","7"),t.toString()}function Fe(e,r=E){return v.useMemo(()=>F(e,r),[e,r])}const Te={type:"spring",stiffness:700,damping:82};function De({children:e,className:r}){return z.jsx(ue.div,{animate:{opacity:1},initial:{width:"100%",height:"100%",translateX:0,translateY:0,opacity:0},whileHover:{width:"103%",height:"103%",translateX:"-1.5%",translateY:"-1.5%"},transition:Te,className:r,children:e})}function D(e,r,t){if(t)return t;const s=e[r];return s?.message?.metadata?.model_slug?s.message.metadata.model_slug:s?.parentId?D(e,s.parentId):null}function Pe(){return`${N}${H()}`}let ge=0;function Oe(){return ge++}function L(e){return e.startsWith(N)}const me=()=>new p,ve=()=>Object.freeze({lastModelUsed:null,createTime:new Date});var Ie=(e=>(e.NewChat="NewChat",e.Server="Server",e.User="User",e.Generated="Generated",e.Unknown="Unknown",e))(Ie||{});const R={},i=k(q(()=>({threads:{},clientNewThreadIdToServerIdMapping:{},threadRetainCounts:{}}))),d=i.getState,h=i.setState,l={resolveThreadId:(e,r=d())=>r.clientNewThreadIdToServerIdMapping[e]??e,getThread:(e,r=d())=>{const t=l.resolveThreadId(e,r);return r.threads[t]??null},hasThread:(e,r=d())=>{const t=l.resolveThreadId(e,r);return r.threads[t]!=null},isLoading:(e,r=d())=>{const t=l.resolveThreadId(e,r);return r.threads[t]?.isLoading},getConversationMode:(e,r=d())=>{const t=l.resolveThreadId(e,r);return r.threads[t]?.mode},getThreadModelId:(e,r=d())=>l.getThread(e,r)?.modelId??null,getGizmoId(e,r=d()){const t=r.threads[l.resolveThreadId(e,r)];if(t?.mode.kind===I.GizmoInteraction||t?.mode.kind===I.GizmoTest)return t.mode.gizmo_id},getThreadTitleSource(e,r=d()){const t=l.resolveThreadId(e,r),s=r.threads[t];return s!=null?s.titleSource:"Unknown"},getThreadCreateTime(e,r=d()){const t=l.resolveThreadId(e,r);return r.threads[t]?.initialThreadData?.createTime},getCurrentNode(e,r=d()){const t=l.resolveThreadId(e,r),s=r.threads[t]?.currentLeafId??"root";return a.getTree(e).getNodeByIdOrMessageId(s)},isThreadUrlSafe(e,r,t=d()){const s=l.resolveThreadId(e,t);return t.threads[s]?.safeUrls.includes(r)??!1},getRatingPrompt(e,r=d()){const t=l.resolveThreadId(e,r);return r.threads[t]?.promptGptRating},getTurnContentReferences(e,r,t=d()){const s=l.getThread(e,t)?.conversationTurns[r]?.messages;return s?_(s.flatMap(n=>n.message?.metadata?.content_references)):[]},getTurnSearchResults(e,r,t=d()){const s=l.getThread(e,t)?.conversationTurns[r]?.messages;return s?_(s.flatMap(n=>ye(n.message))):[]},getTurnImageSearchResults(e,r,t=d()){const s=l.getThread(e,t)?.conversationTurns[r]?.messages;return s?_(s.flatMap(n=>Le(n.message))).map(n=>({...n,thumbnail_url:n.thumbnail_url.replace(/^http:\/\//,"https://"),content_url:n.content_url.replace(/^http:\/\//,"https://")})):[]},getIsArchived(e,r=d()){return l.getThread(e,r)?.initialThreadData?.isArchived??!1},getUpdateTime(e,r=d()){const t=l.getThread(e,r);if(t?.update_time)return t?.update_time;const s=t?.initialThreadData.createTime;return s?s.getTime()/1e3:null}},a={initThread:(e,r,t=null)=>{const s=a.resolveThreadId(e);if(d().threads[s]==null){const n=ne();h(o=>{o.threads[s]={initialThreadData:n,mode:r,modelId:t,tree:new p(p.createTree()),title:null,titleSource:"NewChat",currentLeafId:"root",conversationTurns:[],safeUrls:[],isLoading:!L(s),docsReferencedByURL:{},conversationOrigin:null}})}},setThreadModelId:(e,r)=>{const t=a.resolveThreadId(e);h(s=>{const n=s.threads[t];n!=null&&(n.modelId=r)})},updateConversationMode:(e,r)=>{const t=a.resolveThreadId(e);h(s=>{const n=s.threads[t];n!=null&&(n.mode=r)})},getServerThreadId:e=>L(e)?d().clientNewThreadIdToServerIdMapping[e]:e,setServerIdForNewThread:(e,r)=>{d().clientNewThreadIdToServerIdMapping[e]===void 0&&h(t=>{t.threads[r]=t.threads[e],delete t.threads[e],t.clientNewThreadIdToServerIdMapping[e]=r})},initThreadFromServerData:(e,r,t=!1,s=void 0,n=!1)=>{const o=a.resolveThreadId(e);if(!n&&(d().threads[o]==null&&!t||d().threads[o]?.isLoading===!1))return;const u=Z(r),c=u.mapping??p.createTree(),T={lastModelUsed:D(u.mapping,u.initialCurrentLeafId,r.default_model_slug),createTime:"create_time"in r?new Date(r.create_time*1e3):void 0,isArchived:r.is_archived??!1},m=new p(c),g=u.initialCurrentLeafId??u.rootId??"root",f="has_user_editable_context"in r?{hasUserEditableContextFlag:r.has_user_editable_context,authorName:r.author_name,model:"model"in r&&r.model!=null?ee(r.model):void 0}:void 0;h(y=>{const P=y.threads[o];y.threads[o]={modelId:P?.modelId??null,initialThreadData:T,mode:r.gizmo_id!=null?{kind:I.GizmoInteraction,gizmo_id:r.gizmo_id}:{kind:I.PrimaryAssistant,plugin_ids:r.plugin_ids},sharedConversationMetadata:f,title:r.title??null,titleSource:"Server",tree:m,currentLeafId:g,isLoading:!1,continuingFromSharedConversationId:s,safeUrls:r.safe_urls??[],conversationTurns:[],docsReferencedByURL:{},conversationOrigin:r.conversation_origin??null,async_status:r.async_status??null,update_time:r.update_time??null}}),b.publish({kind:"createConversation",clientThreadId:e}),a.recomputeConversationTurnsForCurrentLeafId(o,[])},updateInitialThreadDataForNewThread:(e,r)=>{const t=a.resolveThreadId(e);h(s=>{const n=s.threads[t];n!=null&&(n.initialThreadData.lastModelUsed=r)})},getThreadCurrentLeafId:e=>{const r=a.resolveThreadId(e);return d().threads[r]?.currentLeafId??"root"},getThreadSafeUrls:e=>{const r=a.resolveThreadId(e);return d().threads[r]?.safeUrls},addThreadSafeUrl:(e,r)=>{const t=a.resolveThreadId(e);t&&h(s=>{const n=s.threads[t];n?.safeUrls.push(r)})},setThreadCurrentLeafId:(e,r)=>{const t=a.resolveThreadId(e);d().threads[t]!=null&&h(n=>{const o=n.threads[t];if(o==null)return;o.currentLeafId=r;const u=a.computeThreadConversationTurns(t,o.currentLeafId,o.conversationTurns);o.conversationTurns=u})},setTitle:(e,r,t)=>{const s=a.resolveThreadId(e);h(n=>{const o=n.threads[s];o&&(o.title=r,o.titleSource=t)})},getTitle:e=>{const r=l.resolveThreadId(e);return d().threads[r]?.title??void 0},getTitleAndSource:e=>({title:a.getTitle(e),titleSource:l.getThreadTitleSource(e)}),getConversationOrigin:e=>{const r=l.resolveThreadId(e);return d().threads[r]?.conversationOrigin??null},setConversationOrigin:(e,r)=>{const t=a.resolveThreadId(e);h(s=>{const n=s.threads[t];n&&(n.conversationOrigin=r)})},deleteNodesByFilter:(e,r)=>{const t=a.getThreadCurrentLeafId(e);a.updateTree(e,s=>{s.deleteNodesByFilter(r).includes(t)&&a.setThreadCurrentLeafId(e,"root")})},updateTree:(e,r)=>{const t=a.resolveThreadId(e);if(!(d().threads[t]!=null)){console.warn("Thread does not exist, cannot update tree: ",t);return}const n=a.getTree(e);r(n);const u=d().threads[t]?.conversationTurns??[];a.recomputeConversationTurnsForCurrentLeafId(t,u)},getTree:e=>{const r=a.resolveThreadId(e);return d().threads[r]?.tree??me()},resolveThreadId:e=>l.resolveThreadId(e),recomputeConversationTurnsForCurrentLeafId:(e,r)=>{const t=a.resolveThreadId(e);h(s=>{const n=s.threads[t];if(n==null)return;const o=a.computeThreadConversationTurns(t,n.currentLeafId,r);n.conversationTurns=o})},computeThreadConversationTurns:(e,r,t)=>{const s=a.resolveThreadId(e);return a.getTree(s).getConversationTurns(r).map((c,T)=>{const m=t?.[T];return w(m,c)?m:c})},getThreadConversationTurns:(e,r,t)=>{const s=a.resolveThreadId(e),o=d().threads[s];if(o==null)return[];const u=o.tree,c=u.messageIdToNodeId(o?.currentLeafId??"root"),T=r!=null?u.messageIdToNodeId(r):null;return T!=null&&T!==c?a.computeThreadConversationTurns(s,T,t??[]):d().threads[s]?.conversationTurns??[]},removeContinuingFromSharedConversationId:e=>{const r=a.resolveThreadId(e);h(t=>{const s=t.threads[r];s?.continuingFromSharedConversationId!=null&&delete s.continuingFromSharedConversationId})},updateReferencedDocState:(e,r,t)=>{const s=a.resolveThreadId(e);h(n=>{const o=n.threads[s];o&&(o.docsReferencedByURL[r]=t)})},copyLastMessageToClipboard:(e,r,t,s="mouse")=>{const n=a.getThreadCurrentLeafId(e),o=a.getThreadConversationTurns(e,n);return a.copyMessageToClipboard(e,o.length-1,r,t,s)},copyMessageToClipboard:(e,r,t,s,n="mouse")=>{const o=a.getThreadCurrentLeafId(e),c=a.getThreadConversationTurns(e,o)[r];if(!c)return Promise.reject();const{messages:T}=c,m=T.reduce((g,f)=>!f.err&&f.message.author.role===C.Assistant&&f.message.recipient==="all"?g+(g?`

`:"")+x(f.message):g,"");return re(m,t,s).then(()=>{const g=a.getServerThreadId(e);g&&B.submitImplicitMessageFeedback({messageId:T[0].message.id,type:"copy",serverThreadId:g,selectedText:m,source:n,location:"message"})})},getLastMessgageSystemHints:(e,r)=>{const t=a.resolveThreadId(e);return a.getTree(t).getBranchFromLeaf(r).slice().reverse().find(u=>u.message.author.role===C.User)?.message.metadata?.system_hints??[]},deleteThread:e=>{h(r=>{delete r.threads[e],delete r.clientNewThreadIdToServerIdMapping[e]}),b.publish({kind:"deleteConversation",serverThreadId:e})},retainThread:e=>{h(r=>{r.threadRetainCounts[e]=(r.threadRetainCounts[e]??0)+1}),clearTimeout(R[e])},releaseThread:e=>{d().threads[e]!=null&&(h(t=>{t.threadRetainCounts[e]=Math.max((t.threadRetainCounts[e]??0)-1,0)}),!(d().threadRetainCounts[e]>0)&&(clearTimeout(R[e]),R[e]=setTimeout(()=>{d().threads[e]!=null&&(d().threadRetainCounts[e]>0||a.deleteThread(e))},3e4)))},setPromptGptRating:(e,r)=>{const t=a.resolveThreadId(e);h(s=>{const n=s.threads[t];n!=null&&(r==null?n.promptGptRating=void 0:n.promptGptRating={gizmoId:r})})}},fe=e=>i(r=>l.getThreadModelId(e,r)),Ae=e=>fe(e)??ae,pe=e=>i(r=>{if(e!=null)return L(e)?r.clientNewThreadIdToServerIdMapping[e]:e}),ze=e=>i(r=>{const t=a.resolveThreadId(e);return r.threads[t]?.initialThreadData??ve()}),ke=(e,r)=>i(t=>{const s=l.getConversationMode(e,t);return r&&(s?.kind===I.GizmoInteraction||s?.kind===I.PrimaryAssistant)?{gizmo_id:r,kind:I.GizmoInteraction}:s}),He=e=>{const r=te();return i(t=>t.threads[l.resolveThreadId(e,t)]==null?r:l.getGizmoId(e,t))},qe=e=>i(r=>{const t=a.resolveThreadId(e);return r.threads[t]?.isLoading??!1}),Ce=e=>i(()=>a.getThreadCurrentLeafId(e)),Be=(e,r)=>{const t=v.useRef([]);return i(()=>{const s=a.getThreadConversationTurns(e,r,t.current);return t.current=s,s?.length??0})},Ge=(e,r)=>{const t=v.useRef([]);return i(()=>{const s=a.getThreadConversationTurns(e,r,t.current);return t.current=s,s})},je=(e,r,t)=>{const s=v.useRef([]);return i(()=>{const n=a.getThreadConversationTurns(e,t,s.current);return s.current=n,r>=0&&r<n.length?n[r]:null})},We=(e,r)=>{const t=v.useRef([]);return i(()=>{const s=a.getThreadConversationTurns(e,r,t.current);return t.current=s,s.length>0?s[s.length-1]:null})},Xe=(e,r)=>{const t=v.useRef([]);return i(()=>{const s=a.getThreadConversationTurns(e,r,t.current);t.current=s;let n=0;for(let o=s.length-1;o>=0;o--){const u=s[o];if(u.messages.some(c=>c.message.metadata?.is_indepth_feedback))return!0;if(u.messages.some(c=>c.message.author.role===C.Assistant)&&n++,n>=3)break}return!1})},$e=(e,r)=>i(()=>{const t=a.resolveThreadId(e);return a.getTree(t).getBranchFromLeaf(r).some(o=>o.message.author.role===C.User)}),Qe=e=>{const r=Ce(e);return v.useMemo(()=>{const t=s=>{const n=a.getThreadConversationTurns(e,s,[]),o=n?.length??0,u=n?.[o-1]??null;if(o===0)return s;const c=p.getRequestIdFromConversationTurn(u);if(c.startsWith(oe))return c;if(u.variantIds?.length>1){const T=u.messages.map(g=>g.nodeId).find(g=>u.variantIds.indexOf(g)!==-1);if(T==null)return c;const m=(u?.variantIds?.indexOf(T)??0)-1;if(m>=0)return t(u?.variantIds[m])}return c};return t(r)},[r,e])},Ve=e=>i(()=>a.getTitle(e)),Ke=e=>X(i,()=>a.getTitleAndSource(e),w),Ye=e=>i(()=>{const r=a.resolveThreadId(e);return d().threads[r]?.continuingFromSharedConversationId}),Je=e=>i(()=>{const r=a.resolveThreadId(e);return d().threads[r]?.sharedConversationMetadata?.authorName}),Ze=(e,r)=>i(()=>{const t=a.getTree(e).getNodeByIdOrMessageId(r);if(t==null)throw new Error(`useThreadTreeNode: cannot get tree node for ${r} in thread ${e}`);return t}),er=(e,r)=>i(()=>a.getTree(e)?.getHasErrorFromNode(r)??!1),rr=(e,r)=>i(()=>a.getTree(e)?.isMessageIncomplete(r)??!1),_e=(e,r)=>i(()=>{const t=a.getTree(e);return t==null?[]:t.getBranchFromLeaf(r).filter(s=>s.message.author.role!==C.Root)}),tr=(e,r)=>_e(e,r).map(t=>t.message),sr=(e,r)=>i(()=>{const t=a.getTree(e);return t==null?null:t.getLeafFromNode(r)}),nr=(e,r)=>i(()=>{const t=a.getTree(e);return t==null?!1:r.map(n=>t.getLeafFromNode(n)).some(n=>t.getHasErrorFromNode(n.id))}),Se=e=>{const t=a.getTree(e).getUserContext();if(t==null)return null;const{message:s}=t,n=s.metadata?.shared_conversation_id??null;if(s.metadata?.user_context_message_data!=null){const{about_user_message:o,about_model_message:u}=s.metadata.user_context_message_data;return{aboutUserMessage:o?.trim()??"",aboutModelMessage:u?.trim()??"",fallback:null,shareId:n}}return{aboutUserMessage:null,aboutModelMessage:null,fallback:x(s),shareId:n}},Me=e=>i(r=>{const t=a.resolveThreadId(e);return r.threads[t]?.sharedConversationMetadata?.hasUserEditableContextFlag}),ar=e=>!!a.getTree(e).findNode(t=>t.message.content.content_type==="model_editable_context"),or=e=>!!a.getTree(e).findNode(t=>(t.message.author.name?.startsWith("canmore.")||t.message.recipient?.startsWith("canmore."))??!1),dr=e=>{const r=Me(e);return Se(e)!=null||!!r},ur=e=>i(()=>{const r=a.resolveThreadId(e);return d().threads[r]?.continuingFromSharedConversationId!=null}),ir=e=>i(()=>a.getThreadCurrentLeafId(e)==="root"),lr=e=>{const r=j(),t=pe(e);return t?r.query.conversationId===t:!1},cr=e=>i(()=>{const r=a.resolveThreadId(e);return d().threads[r]?.promptGptRating}),hr=(e,r)=>i(()=>{const t=a.resolveThreadId(e),n=a.getTree(t).getBranchFromLeaf(r);return de(n,o=>o.message.author.role===C.System&&o.message.content.content_type==="system_content")}),Tr=()=>v.useContext(G)!=null,gr=()=>v.useContext(W)!=null;function mr(e){const r=a.getTree(e),t=a.getThreadCurrentLeafId(e);let s=r.getNodeByIdOrMessageId(t);for(;s;){const n=s.message.metadata?.default_model_slug;if(n)return n;if(s.parentId)s=r.getNodeByIdOrMessageId(s.parentId);else return}}function vr({clientThreadId:e,role:r}){return a.getTree(e).countMessagesByAuthor(r)}function Ir({clientThreadId:e,conversationLeafId:r}){const t=a.getTree(e);return v.useMemo(()=>t.getNodeByIdOrMessageId(r).message.end_turn,[r,t])}function Re(e,r){const t=l.getTurnContentReferences(e,r);return U(t)}function fr(e,r){const t=Re(e,r),s=l.getTurnImageSearchResults(e,r);return se(t.concat(s),"content_url")}const pr=e=>i(()=>{const r=a.resolveThreadId(e);return d().threads[r]?.async_status});function Cr(e,r){const t=l.getTurnContentReferences(e,r);return ce(t)}const Le=e=>e?.metadata?.image_results??[],ye=e=>e?.metadata?.search_result_groups??[];export{Ye as $,_e as A,he as B,Cr as C,We as D,Ir as E,Ve as F,Je as G,Ae as H,xe as I,Le as J,ye as K,Oe as L,mr as M,cr as N,pr as O,er as P,rr as Q,ur as R,or as S,a as T,sr as U,hr as V,Xe as W,je as X,nr as Y,gr as Z,ze as _,l as a,fe as a0,vr as a1,Fe as a2,Te as a3,De as a4,pe as b,He as c,i as d,Tr as e,fr as f,Pe as g,le as h,L as i,Ue as j,Ee as k,Be as l,Ce as m,$e as n,ke as o,Ze as p,Ge as q,dr as r,ar as s,lr as t,ir as u,Ke as v,Ie as w,Qe as x,qe as y,tr as z};
//# sourceMappingURL=mhaqcfmmdyzdbeu3.js.map
