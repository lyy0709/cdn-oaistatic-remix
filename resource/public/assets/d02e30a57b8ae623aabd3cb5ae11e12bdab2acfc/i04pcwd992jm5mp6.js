import{W as g,l as r,a0 as E,h as _,r as w,aG as i,a1 as y,j as b,b2 as j,m as C,M as x,D as p}from"./egi9yqe8h527q0wn.js";import{aV as N,cL as S,cM as M}from"./kovfiydeinrm6blw.js";import{aV as v}from"./e6itquh41uv61tg7.js";import{e as T}from"./d1idnzvl0pqu9wz9.js";function k({jupyterMessage:e}){const a=T(),t=g();if(a)return r.jsxs("div",{className:"my-1 flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-token-text-tertiary dark:border-white/10",children:[r.jsx(v,{className:"icon-lg"}),r.jsx(E,{...d.imageNotSupported})]});if(e.image_payload!=null)return r.jsx("img",{className:"my-1",src:`data:image/png;base64,${e.image_payload}`,alt:t.formatMessage(d.altText)});if(e.image_url!=null){const s=N(e.image_url);return r.jsx(O,{fileId:s})}return null}const F=30*1e3,f=100,c=1.5,I=Math.log(1-F*(1-c)/f)/Math.log(c);function O({fileId:e}){const a=g(),{data:t,isLoading:s,refetch:l}=_({queryKey:["getFileDownloadLink",e],queryFn:()=>b.getFileDownloadLink(e),refetchInterval:o=>{const n=o.state.dataUpdateCount;return o.state.data?.status===i.Success||n>I||o.state.status===i.Error?!1:Math.pow(c,n)*f}});return w.useEffect(()=>{if(t?.status===i.Success){const n=new URL(t.download_url,location.toString()).searchParams.get("se");n!=null&&!s&&new Date>new Date(n)&&l()}},[t,s,l]),t?.status!==i.Success?null:r.jsx("img",{src:t.download_url,className:"my-1 max-h-full max-w-full",alt:a.formatMessage(d.altText)})}const d=y({imageNotSupported:{id:"CodeExecutionOutputImage.imageNotSupported",defaultMessage:"Image output is not supported in a shared chat"},altText:{id:"CodeExecutionOutputImage.altText",defaultMessage:"Output image"}});function H({FormattedText:e,message:a}){const{resolvedTheme:t}=j();return r.jsx(M.Provider,{value:{isWithinDataAnalysisToolMessage:!0},children:r.jsx(e,{className:C("markdown prose w-full break-words dark:prose-invert",t==="dark"?"dark":"light"),children:R(a)})})}function R(e){function a(t,s){return`\`\`\`${s}
${t}
\`\`\``}if(e.content.content_type==="code")return a(e.content.text,"python");if(e.recipient==="python"){if(e.content.content_type!=="text")throw new Error("Unexpected content type for code message");const t=e.content.parts;if(t.length!==1||typeof t[0]!="string")throw new Error("Unexpected parts for code message");return a(t[0],"python")}throw new Error("Unexpected code message format")}function J({message:e}){const a=g();if(e.content.content_type!==x.ExecutionOutput)return null;const t=e.metadata?.aggregate_result;if(!t)return p.addError("Corrupt code execution result message"),null;const s=t.messages.filter(L),l=s.length>0,o=t.final_expression_output!=null,n=t.in_kernel_exception!=null;return r.jsxs(r.Fragment,{children:[l&&r.jsx(m,{label:"STDOUT/STDERR",output:s.map((u,h)=>r.jsx("span",{className:u.stream_name==="stderr"?"text-red-500":"",children:u.text},`${h}`))}),o&&r.jsx(m,{label:a.formatMessage({id:"codeInterpreterMessage.resultLabel",defaultMessage:"Result"}),output:t.final_expression_output}),n&&r.jsx(D,{traceback:t.in_kernel_exception.traceback.join("")})]})}function m({label:e,output:a}){return r.jsxs("div",{className:"bg-gray-700 p-4 text-xs",children:[r.jsx("div",{className:"mb-1 text-gray-400",children:e}),r.jsx("div",{className:"prose flex flex-col-reverse text-white",children:r.jsx("pre",{className:"shrink-0",children:a})})]})}function D({traceback:e}){return r.jsx("div",{className:"overflow-auto border-t border-gray-500 text-white",children:r.jsx("div",{className:"border-l-4 border-red-500 p-2 text-xs",children:r.jsx("div",{className:"scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",children:r.jsx("pre",{className:"shrink-0",children:e})})})})}function X({message:e}){if(e.content.content_type!==x.ExecutionOutput)return null;const a=e.metadata?.aggregate_result;return a?r.jsx(r.Fragment,{children:a.messages.filter(U).map((t,s)=>r.jsx(k,{jupyterMessage:t},s))}):(p.addError("Corrupt code execution result message"),null)}function L(e){return e.message_type==="stream"}function U(e){return e.message_type==="image"||"image_url"in e&&S(e.image_url+"")}export{X as C,H as a,J as b,k as c,R as g,U as i};
//# sourceMappingURL=i04pcwd992jm5mp6.js.map
