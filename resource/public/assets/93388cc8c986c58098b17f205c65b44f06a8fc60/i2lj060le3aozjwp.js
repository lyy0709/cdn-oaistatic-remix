import{L as a}from"./kw2u0q97w1ys8he9.js";import{s,t as e,L as i,e as n,f as o,g as P,j as p,c as Q}from"./i0xewotzyk06ej66.js";import"./q02ioa5nz1msdn73.js";import"./eljox9y9liclbxjs.js";import"./mov0dqfy71k4mkbp.js";import"./ctv5zl6thp0tttje.js";import"./bpx8yk8lhvr4hu9a.js";import"./m2j9a5yzu7labkem.js";import"./gej2wzszabjtgedr.js";import"./i4lebxob07xbpc6p.js";import"./ei22way1wz63smda.js";import"./l0xkd1ou0a6b53wu.js";import"./btkmfibrorj6h94u.js";import"./gs0p62cga8ydkujk.js";import"./d0c0dt6og7lcobfn.js";import"./fjii1rhgftspjqgz.js";import"./d6zp3a3jsn0b88yi.js";import"./pc41wgyozijgyqnw.js";import"./m6ilxompj3fnes7l.js";import"./ow04wph7q6xkuj3u.js";import"./4mneme74sx5vv6xg.js";import"./g55wszzvw80ez5vs.js";import"./grq6wh9rfw6h032k.js";const m=s({String:e.string,Number:e.number,"True False":e.bool,PropertyName:e.propertyName,Null:e.null,",":e.separator,"[ ]":e.squareBracket,"{ }":e.brace}),c=a.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[m],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),U=()=>t=>{try{JSON.parse(t.state.doc.toString())}catch(O){if(!(O instanceof SyntaxError))throw O;const r=g(O,t.state.doc);return[{from:r,message:O.message,severity:"error",to:r}]}return[]};function g(t,O){let r;return(r=t.message.match(/at position (\d+)/))?Math.min(+r[1],O.length):(r=t.message.match(/at line (\d+) column (\d+)/))?Math.min(O.line(+r[1]).from+ +r[2]-1,O.length):0}const u=i.define({name:"json",parser:c.configure({props:[n.add({Object:o({except:/^\s*\}/}),Array:o({except:/^\s*\]/})}),P.add({"Object Array":p})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function E(){return new Q(u)}export{E as json,u as jsonLanguage,U as jsonParseLinter};
//# sourceMappingURL=i2lj060le3aozjwp.js.map
