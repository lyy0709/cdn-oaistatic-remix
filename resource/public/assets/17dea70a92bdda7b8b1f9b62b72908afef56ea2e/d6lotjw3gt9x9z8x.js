import{l as e,m as U,V as S,r as p,a0 as Z,aN as Y,cs as Q,dh as k,ey as d,ad as ee,be as E,Z as r,W as te,aZ as O}from"./dr7d3iwdkso0acad.js";import{j as ae,k as se,et as re,d as oe,ai as J,a3 as w,I as ie,eu as b}from"./dmeh4acfgftb4ocn.js";import{Y as B}from"./mzkxlhrlmxhntkvn.js";import{A as ne}from"./nhiyltcmuo8f5b0t.js";import{F as le,N as ce,aL as de,p as ue}from"./nk93elwanh2qmq79.js";import{F as me,a as L,b as N}from"./dt1zqgikjt70pcz3.js";import{a as pe,b as he}from"./innb57mqcwjkgtwn.js";import"./l97vil97vij75d6c.js";import"./mhaqcfmmdyzdbeu3.js";import"./dnerd8yjozxoav5t.js";import"./8pfb0n8794aflxhe.js";import"./kk83ngqx38127x2h.js";import"./hy5i8xpuojx9el7d.js";import"./oj5tgfeg398yhzr0.js";import"./fsddy3bxlesj6ecw.js";import"./b1hq3c1bpnuzezc2.js";import"./pa2cr09u0rlusgdq.js";import"./fs94t0nwpxhmz7ny.js";import"./nq80e3tcpxxq4d3f.js";import"./gfbiklbu7iwavqxk.js";import"./ctrx0vgo31qa9ogh.js";import"./mhpy1qyey3xezj1x.js";import"./mdvtv1mc8g2bqrsl.js";import"./gb15fzh9avxbwr73.js";import"./mb3598k4l6kvjexj.js";import"./d1veu52dtlvwcp39.js";import"./m9ff0mj4d8z2gous.js";import"./iv84q11r14kab89f.js";import"./nl6ip7vqdicyo7ft.js";import"./f3crnwkkooc1qt8j.js";import"./g5r4uw1ha4jdomj8.js";import"./hqsn6fl6ox5vdywd.js";import"./h0b0g9dhtxr8nqps.js";import"./kjb8it55yehajb6f.js";import"./h62pe8fe08qj5t7t.js";import"./imbbv5wyb3glk606.js";import"./kfk2tyi4iksp0sol.js";import"./h2xl7y1tmngskeb7.js";import"./oa2dss9sig21dsm0.js";import"./cwnjxkayty2d3ssa.js";import"./ip26nxqcr8banift.js";function xe({className:a,children:n,...o}){return e.jsx(ae,{className:a,...o,children:n})}const fe=({value:a,className:n,label:o,...l})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(se,{id:a,value:a,className:U("h-4 w-4 flex-shrink-0 gap-2 rounded-full border border-token-text-tertiary bg-transparent shadow-sm outline-none hover:bg-token-main-surface-tertiary",n),...l}),e.jsx("label",{htmlFor:a,className:"w-full cursor-pointer",children:o})]}),ge=({className:a,...n})=>e.jsx(re,{className:U("relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-[50%] after:bg-token-text-primary after:content-['']",a),...n}),R={Root:xe,Item:fe,Indicator:ge};function ye({onSelectExample:a}){const n=S(),o=p.useRef(null);return e.jsxs("select",{onChange:l=>{if(l.target.value==="label")return;const t=parseInt(l.target.value);a(H[t].spec),o.current.value="label"},className:"h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",ref:o,children:[e.jsx("option",{value:"label",children:n.formatMessage(I.examples)}),H.map((l,t)=>e.jsx("option",{value:t,children:n.formatMessage(l.displayName)},t))]})}const je={openapi:"3.1.0",info:{title:"Get weather data",description:"Retrieves current weather data for a location.",version:"v1.0.0"},servers:[{url:"https://weather.example.com"}],paths:{"/location":{get:{description:"Get temperature for a specific location",operationId:"GetCurrentWeather",parameters:[{name:"location",in:"query",description:"The city and state to retrieve the weather for",required:!0,schema:{type:"string"}}],deprecated:!1}}},components:{schemas:{}}},ve=`# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml

openapi: "3.0.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  license:
    name: MIT
servers:
  - url: https://petstore.swagger.io/v1
paths:
  /pets:
    get:
      summary: List all pets
      operationId: listPets
      tags:
        - pets
      parameters:
        - name: limit
          in: query
          description: How many items to return at one time (max 100)
          required: false
          schema:
            type: integer
            maximum: 100
            format: int32
      responses:
        '200':
          description: A paged array of pets
          headers:
            x-next:
              description: A link to the next page of responses
              schema:
                type: string
          content:
            application/json:    
              schema:
                $ref: "#/components/schemas/Pets"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
    post:
      summary: Create a pet
      operationId: createPets
      tags:
        - pets
      responses:
        '201':
          description: Null response
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
  /pets/{petId}:
    get:
      summary: Info for a specific pet
      operationId: showPetById
      tags:
        - pets
      parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          schema:
            type: string
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pet"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
components:
  schemas:
    Pet:
      type: object
      required:
        - id
        - name
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        tag:
          type: string
    Pets:
      type: array
      maxItems: 100
      items:
        $ref: "#/components/schemas/Pet"
    Error:
      type: object
      required:
        - code
        - message
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string`,be={openapi:"3.1.0",info:{title:"Untitled",description:"Your OpenAPI specification",version:"v1.0.0"},servers:[{url:""}],paths:{},components:{schemas:{}}},I=Z({examples:{id:"gizmo.actions.examples",defaultMessage:"Examples"},weatherExampleTitle:{id:"gizmo.actions.weatherExampleTitle",defaultMessage:"Weather (JSON)"},petStoreExampleTitle:{id:"gizmo.actions.petStoreExampleTitle",defaultMessage:"Pet Store (YAML)"},blankExampleTitle:{id:"gizmo.actions.blankExampleTitle",defaultMessage:"Blank Template"}}),H=[{displayName:I.weatherExampleTitle,spec:JSON.stringify(je,null,2)},{displayName:I.petStoreExampleTitle,spec:ve},{displayName:I.blankExampleTitle,spec:JSON.stringify(be,null,2)}];function Ne({content:a,button:n,onClick:o}){return e.jsxs("div",{className:"flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",onClick:o,children:[e.jsx("div",{className:"h-9 grow px-3 py-2",children:a}),e.jsx("div",{className:"w-px bg-token-border-medium"}),n]})}const Me="https://chatgpt.com/g/g-TYEliDU6A-actionsgpt";function y({children:a}){return e.jsx("label",{className:"mb-1 block text-sm font-semibold",children:a})}function _e({jitPluginTool:a,onUpdateTool:n,onClose:o}){const l=S(),[t,h]=p.useState({apiKeyValue:"",oauthClientIdValue:"",oauthClientSecretValue:"",oauthAuthUrlValue:a?.metadata?.auth?.client_url??"",oauthTokenUrlValue:a?.metadata?.auth?.authorization_url??"",oauthScopeValue:a?.metadata?.auth?.scope??"",authTypeValue:a?.metadata?.auth?.type??d.None,httpAuthTypeValue:a?.metadata?.auth?.authorization_type??"basic",customHeaderValue:a?.metadata?.auth?.custom_auth_header??"",tokenExchangeMethodValue:a?.metadata?.auth?.token_exchange_method??"default_post"});function u(i){h(A=>({...A,...i}))}function x(){n(t.authTypeValue===d.None?{type:d.None}:t.authTypeValue===d.OAuth?{type:d.OAuth,client_url:t.oauthAuthUrlValue,authorization_url:t.oauthTokenUrlValue,authorization_content_type:"application/x-www-form-urlencoded",scope:t.oauthScopeValue,token_exchange_method:t.tokenExchangeMethodValue,oauth_client_id:t.oauthClientIdValue,oauth_client_secret:t.oauthClientSecretValue}:{type:d.ServiceHTTP,authorization_type:t.httpAuthTypeValue,custom_auth_header:t.customHeaderValue,api_key:t.apiKeyValue}),o()}return e.jsxs(te,{type:"success",isOpen:!0,title:l.formatMessage({id:"kZ040s",defaultMessage:"Authentication"}),primaryButton:e.jsx(E,{color:"primary",onClick:()=>{x()},children:e.jsx(r,{id:"dchvRM",defaultMessage:"Save"})}),secondaryButton:e.jsx(E,{color:"secondary",onClick:o,children:e.jsx(r,{id:"xHBR5t",defaultMessage:"Cancel"})}),onClose:o,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(r,{id:"la7zPT",defaultMessage:"Authentication Type"}),e.jsxs(R.Root,{onValueChange:i=>{u({authTypeValue:i})},value:t.authTypeValue,className:"mt-2 flex gap-4",children:[e.jsx(b,{label:l.formatMessage({id:"Ml5rNZ",defaultMessage:"None"}),value:d.None}),e.jsx(b,{label:l.formatMessage({id:"rN0uCi",defaultMessage:"API Key"}),value:d.ServiceHTTP}),e.jsx(b,{label:l.formatMessage({id:"qG7Z4O",defaultMessage:"OAuth"}),value:d.OAuth})]})]}),t.authTypeValue==="service_http"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(r,{id:"hSd+5k",defaultMessage:"API Key"})}),e.jsx(N,{placeholder:l.formatMessage({id:"9W9lGr",defaultMessage:"[HIDDEN]"}),type:"password",value:t.apiKeyValue,onChange:i=>{u({apiKeyValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"PSnRGf",defaultMessage:"Auth Type"})}),e.jsxs(R.Root,{className:"mb-2 flex gap-6 overflow-hidden rounded-lg",value:t.httpAuthTypeValue,required:!0,onValueChange:i=>{u({httpAuthTypeValue:i})},children:[e.jsx(b,{value:"basic",label:"Basic"}),e.jsx(b,{value:"bearer",label:"Bearer"}),e.jsx(b,{value:"custom",label:l.formatMessage({id:"6kqx38",defaultMessage:"Custom"})})]}),t.httpAuthTypeValue==="custom"&&e.jsxs("div",{className:"mt-2",children:[e.jsx(y,{children:e.jsx(r,{id:"XqdT/P",defaultMessage:"Custom Header Name"})}),e.jsx(N,{value:t.customHeaderValue,onChange:i=>{u({customHeaderValue:i.target.value})},className:"mb-2",placeholder:"X-Api-Key",dir:"ltr"})]})]}):t.authTypeValue==="oauth"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(r,{id:"lS4nvz",defaultMessage:"Client ID"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientIdValue,onChange:i=>{u({oauthClientIdValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"OvwGR3",defaultMessage:"Client Secret"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientSecretValue,onChange:i=>{u({oauthClientSecretValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"I27qZU",defaultMessage:"Authorization URL"})}),e.jsx(N,{value:t.oauthAuthUrlValue,onChange:i=>{u({oauthAuthUrlValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"QywIpF",defaultMessage:"Token URL"})}),e.jsx(N,{value:t.oauthTokenUrlValue,onChange:i=>{u({oauthTokenUrlValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"1VAJqN",defaultMessage:"Scope"})}),e.jsx(N,{value:t.oauthScopeValue,onChange:i=>{u({oauthScopeValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"9MvwPc",defaultMessage:"Token Exchange Method"})}),e.jsxs(R.Root,{value:t.tokenExchangeMethodValue,required:!0,onValueChange:i=>{u({tokenExchangeMethodValue:i})},children:[e.jsx(b,{value:"default_post",label:l.formatMessage({id:"vXIzoE",defaultMessage:"Default (POST request)"})}),e.jsx(b,{value:"basic_auth_header",label:l.formatMessage({id:"38o+yX",defaultMessage:"Basic authorization header"})})]})]}):null]})}function ke({onImport:a,onClose:n}){const[o,l]=p.useState(""),[t,h]=p.useState(!1);async function u(){let x;try{x=new URL(o)}catch{return}if(x?.hostname){h(!0);try{const i=await J.fetchOpenAPISpec(o);a(i.content),n()}finally{h(!1)}}}return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{name:"url",value:o,onChange:x=>{l(x.target.value)},placeholder:"https://...",className:"h-8 rounded border border-token-border-light px-2 text-sm",autoFocus:!0,dir:"ltr"}),e.jsx(w,{color:"primary",size:"small",loading:t,onClick:u,children:e.jsx(r,{id:"7sLuEB",defaultMessage:"Import"})}),e.jsx(w,{color:"secondary",size:"small",onClick:n,children:e.jsx(r,{id:"xHBR5t",defaultMessage:"Cancel"})})]})}function we({rootDomain:a,operations:n}){return n==null||n.length===0?e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(r,{id:"L69u6d",defaultMessage:"Operations in your schema will show here"})}):e.jsx("table",{className:"w-full text-sm",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-token-border-light text-left text-xs text-token-text-tertiary",children:[e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"JizDcr",defaultMessage:"Name"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"zN16fd",defaultMessage:"Method"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"y2WJvt",defaultMessage:"Path"})}),e.jsx("th",{className:"py-1 font-normal"})]}),n.map(o=>e.jsxs("tr",{className:"border-b border-token-border-light",children:[e.jsx("td",{className:"py-2",children:o.operationName}),e.jsx("td",{className:"py-2 uppercase",children:o.method}),e.jsx("td",{className:"py-2",dir:"ltr",style:{textAlign:"match-parent"},children:o.path}),e.jsx("td",{className:"py-2",children:e.jsx(w,{color:"secondary",onClick:()=>{a&&pe.publish({kind:he.TestGizmoAction,rootDomain:a,operationName:o.operationName})},children:e.jsx(r,{id:"Ag71GQ",defaultMessage:"Test"})})})]},o.operationName))]})})}function Ae({validationResponse:a}){const n=S();return e.jsxs("div",{children:[e.jsx(L,{label:n.formatMessage({id:"hKfo5R",defaultMessage:"Available actions"})}),e.jsx(we,{rootDomain:a.success?a.spec.root_domain:void 0,operations:a.success?a.spec.operations:void 0})]})}function Te(a){switch(a){case d.None:return O({id:"G9qfIC",defaultMessage:"None"});case d.OAuth:return O({id:"t8MwwT",defaultMessage:"OAuth"});case d.ServiceHTTP:return O({id:"rN0uCi",defaultMessage:"API Key"})}}function ft({currentlyEditingActionDomain:a,gizmoEditorData:n,updateGizmo:o,onClose:l}){const t=S(),[h,u]=p.useState(a),x=p.useRef(h),i=Y(),{data:A}=Q(i?.getWorkspaceId());p.useEffect(()=>{x.current=h},[h]);const f=n?.tools?.find(s=>s.type===k.JIT_PLUGIN&&s.metadata.domain===h),[$]=p.useState(()=>f==null),M=f?.metadata?.raw_spec??"",[W,z]=p.useState(!1),[F,q]=p.useState(!1),[V,K]=p.useState(!1);function g(s){o(m=>({...m,tools:f?m.tools.map(c=>c.type===k.JIT_PLUGIN&&c.metadata.domain===h?{...c,metadata:{...c.metadata,...s,json_schema:void 0}}:c):[...m.tools,{type:k.JIT_PLUGIN,metadata:{raw_spec:"",domain:h??"Unknown domain",action_id:"",...s,json_schema:void 0}}]}))}const[_,P]=p.useState(),X=n,[C]=p.useState(()=>oe(async function(m){const c=await J.validateOpenAPISpec(m);P(c);const j=c.success?c.spec.root_domain:void 0;if(j){if(j!==x.current&&X?.tools?.find(v=>v.type===k.JIT_PLUGIN&&v.metadata.domain===j)){P({success:!1,errors:[t.formatMessage({id:"nwBcmJ",defaultMessage:"Action sets cannot have duplicate domains - {domain} already exists on another action"},{domain:j})]});return}o(T=>({...T,tools:T.tools.map(v=>v.type===k.JIT_PLUGIN&&v.metadata.domain===x.current?{...v,metadata:{...v.metadata,domain:j}}:v)})),u(j)}if(c.success&&c.known_auth&&c.known_privacy_policy&&f){const T={type:d.OAuth,...c.known_auth};ee(f.metadata.auth,T)||g({auth:{type:d.OAuth,...c.known_auth}}),f.metadata.privacy_policy_url!==c.known_privacy_policy&&g({privacy_policy_url:c.known_privacy_policy})}},1e3)),G=_!=null?_.success?_.warnings:_.errors:void 0;p.useEffect(()=>{M===""?(P(void 0),C.cancel()):C(M)},[C,M]);const D=s=>{try{g({raw_spec:JSON.stringify(JSON.parse(s),null,2)})}catch{try{g({raw_spec:B.stringify(B.parse(s),{lineWidth:120,indent:2})})}catch{}}};return e.jsxs("div",{className:"h-full overflow-auto px-4 pb-12 text-sm",children:[e.jsxs("div",{className:"relative flex flex-col items-center px-16 py-6 text-center",children:[e.jsx("div",{className:"absolute left-0 top-6",children:e.jsx(E,{color:"secondary",onClick:l,icon:le})}),f!=null&&e.jsx("div",{className:"absolute right-0 top-6",children:e.jsx(E,{color:"secondary",onClick:()=>{window.confirm("Are you sure you want to delete this action?")&&(o(s=>({...s,tools:s.tools.filter(m=>!(m.type===k.JIT_PLUGIN&&m.metadata.domain===h))})),l())},className:"text-red-500",children:e.jsx(ce,{className:"icon-md"})})}),e.jsx("div",{className:"text-xl font-semibold",children:$?e.jsx(r,{id:"LEn2vt",defaultMessage:"Add actions"}):e.jsx(r,{id:"WtVYgh",defaultMessage:"Edit actions"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(r,{id:"f0WG0Q",defaultMessage:"Let your GPT retrieve information or take actions outside of ChatGPT."})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx("a",{href:"https://help.openai.com/en/articles/8554397-creating-a-gpt",target:"_blank",rel:"noreferrer",className:"font-semibold",children:e.jsx(r,{id:"44M7/B",defaultMessage:"Learn more."})})})]}),e.jsxs(me,{className:"relative",children:[e.jsx(L,{label:t.formatMessage({id:"kZ040s",defaultMessage:"Authentication"})}),e.jsx(Ne,{onClick:()=>{z(!0)},content:t.formatMessage(Te(f?.metadata?.auth?.type??d.None)),button:e.jsx("button",{color:"secondary",className:"flex items-center gap-2 px-3",children:e.jsx(de,{className:"icon-sm"})})}),W&&e.jsx(_e,{jitPluginTool:f,onUpdateTool:s=>{switch(s.type){case d.None:{g({auth:{type:d.None}});break}case d.OAuth:{const{oauth_client_id:m,oauth_client_secret:c,...j}=s;g({auth:j,oauth_client_id:m,oauth_client_secret:c});break}case d.ServiceHTTP:{const{api_key:m,...c}=s;g({auth:c,api_key:m});break}}},onClose:()=>{z(!1)}})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex h-8 items-center justify-between",children:[e.jsx("label",{className:"font-semibold text-token-text-primary",children:e.jsx(r,{id:"+xKwQg",defaultMessage:"Schema"})}),e.jsx("div",{className:"flex items-center",children:F?e.jsx(ke,{onImport:s=>{D(s)},onClose:()=>{q(!1)}}):e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(w,{color:"secondary",size:"small",onClick:()=>{q(!0)},children:e.jsx(r,{id:"kTR+Ef",defaultMessage:"Import from URL"})}),e.jsx(ye,{onSelectExample:s=>{g({raw_spec:s})}})]})})]}),e.jsxs("div",{className:"mb-8 overflow-hidden rounded-lg border border-token-border-light",children:[e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{value:M,onChange:s=>{g({raw_spec:s.target.value})},spellCheck:!1,placeholder:t.formatMessage({id:"zBM3o0",defaultMessage:"Enter your OpenAPI schema here"}),className:"block h-96 w-full border-none bg-transparent p-2 font-mono text-xs text-token-text-primary",dir:"ltr"}),e.jsx("div",{className:"absolute bottom-2 right-2 flex gap-2",children:M!==""?e.jsx(w,{onClick:()=>{D(M)},children:e.jsx(r,{id:"vJWnIM",defaultMessage:"Format"})}):e.jsxs(w,{as:"a",to:Me,openNewTab:!0,size:"small",children:[e.jsx(r,{id:"gizmo.actions.actionsGptHelp",defaultMessage:"Get help from ActionsGPT"}),e.jsx(ue,{className:"icon-md"})]})})]}),G!=null&&G?.length>0&&e.jsx("div",{className:"border-t border-token-border-light p-2 text-red-500",children:G.map((s,m)=>e.jsx("div",{children:s},m))})]})]}),_!=null&&e.jsx(Ae,{validationResponse:_}),A?.allowed_custom_actions_domains!=null&&(A?.allowed_custom_actions_domains.length>0?e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"mb-1 cursor-pointer font-semibold",onClick:()=>K(!V),children:[e.jsx(r,{id:"Gcxir6",defaultMessage:"Domains allowed by your workspace"}),e.jsx(ne,{className:"inline",checked:V})]}),e.jsx("ul",{className:U("list-disc ps-4",!V&&"hidden"),children:A?.allowed_custom_actions_domains.map(s=>e.jsx("li",{children:s},s))})]}):e.jsx("p",{className:"text-sm italic",children:e.jsx(r,{id:"wWCl0j",defaultMessage:"No domains are allowed by your workspace's settings."})})),e.jsxs("div",{className:"mt-4",children:[e.jsx(L,{label:t.formatMessage({id:"Pbk0Gp",defaultMessage:"Privacy policy"}),description:"Privacy policy is required for all public GPTs."}),e.jsx(ie,{name:"privacyPolicyUrl",value:f?.metadata?.privacy_policy_url??"",placeholder:"https://app.example.com/privacy",onChange:s=>{g({privacy_policy_url:s.target.value})}})]})]})}export{ft as GizmoActionsEditor};
//# sourceMappingURL=d6lotjw3gt9x9z8x.js.map
