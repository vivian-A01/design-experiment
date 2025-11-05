import{j as o}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as x}from"./index-ChEI-nsM.js";import{M as l}from"./index-gaPx6oo5.js";import"./index-DRjF_FHU.js";import"./iframe-ClZulfIc.js";import"./index-DHHUZ-3A.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";const i={none:"none",xs:"0 1px 0 rgba(0, 0, 0, 0.05)",sm:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)"},p={none:"none",sm:"inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"},c={default:"0 0 0 3px rgba(1, 113, 233, 0.35)",critical:"0 0 0 3px rgba(224, 26, 26, 0.35)",success:"0 0 0 3px rgba(17, 131, 124, 0.35)"},t={default:"inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)",hover:"inset 0 -1px 0 0 rgba(0, 0, 0, 0.3)",pressed:"inset 0 1px 1px 0 rgba(0, 0, 0, 0.1)",primary:"inset 0 -1px 0 0 rgba(0, 0, 0, 0.15)",primaryHover:"inset 0 -1px 0 0 rgba(0, 0, 0, 0.25)",primaryPressed:"inset 0 1px 1px 0 rgba(0, 0, 0, 0.1)"},s={card:i.sm,cardHovered:i.md,popover:i.lg,modal:i.xl,button:t.default,buttonHovered:t.hover};function a(r){const e={code:"code",div:"div",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",span:"span",...x(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Design Tokens/Shadows"}),`
`,o.jsx(e.h1,{id:"shadows",children:"Shadows"}),`
`,o.jsx(e.p,{children:"Polaris shadow system provides elevation and depth effects for UI elements."}),`
`,o.jsx(e.hr,{}),`
`,o.jsx(e.h2,{id:"shadow-elevations",children:"Shadow Elevations"}),`
`,o.jsx(e.p,{children:"Standard shadow tokens for different elevation levels."}),`
`,o.jsx("div",{style:{marginTop:"24px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"24px"},children:Object.entries(i).map(([n,d])=>o.jsxs(e.div,{style:{padding:"32px",backgroundColor:"#fff",border:"1px solid #E3E3E3",borderRadius:"12px",textAlign:"center"},children:[o.jsx(e.div,{style:{width:"120px",height:"120px",backgroundColor:"#fff",boxShadow:d,borderRadius:"8px",margin:"0 auto 16px",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx(e.span,{style:{fontSize:"32px"},children:"📦"})}),o.jsxs(e.div,{style:{fontSize:"14px",fontWeight:"600",marginBottom:"4px"},children:["shadow.",n]}),o.jsx(e.div,{style:{fontSize:"11px",color:"#8C9196",wordBreak:"break-word",fontFamily:"monospace"},children:d==="none"?"none":d.substring(0,40)+"..."})]},n))}),`
`,o.jsx(e.hr,{}),`
`,o.jsx(e.h2,{id:"inner-shadows",children:"Inner Shadows"}),`
`,o.jsx(e.p,{children:"Inset shadow effects for pressed states."}),`
`,o.jsx("div",{style:{marginTop:"24px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"24px"},children:Object.entries(p).map(([n,d])=>o.jsxs(e.div,{style:{padding:"32px",backgroundColor:"#fff",border:"1px solid #E3E3E3",borderRadius:"12px",textAlign:"center"},children:[o.jsx(e.div,{style:{width:"120px",height:"120px",backgroundColor:"#F7F7F7",boxShadow:d,borderRadius:"8px",margin:"0 auto 16px",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx(e.span,{style:{fontSize:"32px"},children:"🔘"})}),o.jsxs(e.div,{style:{fontSize:"14px",fontWeight:"600",marginBottom:"4px"},children:["shadowInner.",n]}),o.jsx(e.div,{style:{fontSize:"11px",color:"#8C9196",wordBreak:"break-word",fontFamily:"monospace"},children:d==="none"?"none":"inset shadow"})]},n))}),`
`,o.jsx(e.hr,{}),`
`,o.jsx(e.h2,{id:"focus-rings",children:"Focus Rings"}),`
`,o.jsx(e.p,{children:"Accessibility focus indicators."}),`
`,o.jsx("div",{style:{marginTop:"24px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"24px"},children:Object.entries(c).map(([n,d])=>o.jsxs(e.div,{style:{padding:"32px",backgroundColor:"#fff",border:"1px solid #E3E3E3",borderRadius:"12px",textAlign:"center"},children:[o.jsx(e.div,{style:{width:"120px",height:"48px",backgroundColor:"#fff",border:"2px solid #0171E9",boxShadow:d,borderRadius:"8px",margin:"0 auto 16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"600",color:"#0171E9"},children:"Focused"}),o.jsxs(e.div,{style:{fontSize:"14px",fontWeight:"600",marginBottom:"4px"},children:["shadowFocus.",n]}),o.jsxs(e.div,{style:{fontSize:"11px",color:"#8C9196",wordBreak:"break-word",fontFamily:"monospace"},children:[n," ring"]})]},n))}),`
`,o.jsx(e.hr,{}),`
`,o.jsx(e.h2,{id:"button-shadows",children:"Button Shadows"}),`
`,o.jsx(e.p,{children:"Special shadow tokens for button states."}),`
`,o.jsx("div",{style:{marginTop:"24px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"24px"},children:Object.entries(t).map(([n,d])=>o.jsxs(e.div,{style:{padding:"32px",backgroundColor:"#fff",border:"1px solid #E3E3E3",borderRadius:"12px",textAlign:"center"},children:[o.jsx(e.div,{style:{width:"120px",height:"40px",backgroundColor:n.includes("primary")?"#0171E9":"#FFFFFF",color:n.includes("primary")?"#FFFFFF":"#202223",border:n.includes("primary")?"none":"1px solid #C9CCCF",boxShadow:d,borderRadius:"6px",margin:"0 auto 16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"500"},children:"Button"}),o.jsxs(e.div,{style:{fontSize:"14px",fontWeight:"600",marginBottom:"4px"},children:["shadowButton.",n]}),o.jsx(e.div,{style:{fontSize:"11px",color:"#8C9196"},children:n.includes("default")?"Default state":n.includes("hover")?"Hover state":"Pressed state"})]},n))}),`
`,o.jsx(e.hr,{}),`
`,o.jsx(e.h2,{id:"semantic-shadows",children:"Semantic Shadows"}),`
`,o.jsx(e.p,{children:"Pre-configured shadow tokens for common components."}),`
`,o.jsx("div",{style:{marginTop:"24px"},children:o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"24px"},children:[o.jsxs("div",{style:{padding:"24px",backgroundColor:"#F7F7F7",borderRadius:"12px"},children:[o.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",boxShadow:s.card,borderRadius:"8px",marginBottom:"16px"},children:[o.jsx("div",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px"},children:"Card"}),o.jsx("div",{style:{fontSize:"14px",color:"#616161"},children:"Default card elevation"})]}),o.jsx("div",{style:{fontSize:"12px",color:"#616161"},children:"shadows.card"})]}),o.jsxs("div",{style:{padding:"24px",backgroundColor:"#F7F7F7",borderRadius:"12px"},children:[o.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",boxShadow:s.cardHovered,borderRadius:"8px",marginBottom:"16px"},children:[o.jsx("div",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px"},children:"Card Hovered"}),o.jsx("div",{style:{fontSize:"14px",color:"#616161"},children:"Elevated card on hover"})]}),o.jsx("div",{style:{fontSize:"12px",color:"#616161"},children:"shadows.cardHovered"})]}),o.jsxs("div",{style:{padding:"24px",backgroundColor:"#F7F7F7",borderRadius:"12px"},children:[o.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",boxShadow:s.popover,borderRadius:"8px",marginBottom:"16px"},children:[o.jsx("div",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px"},children:"Popover"}),o.jsx("div",{style:{fontSize:"14px",color:"#616161"},children:"Dropdown and popover"})]}),o.jsx("div",{style:{fontSize:"12px",color:"#616161"},children:"shadows.popover"})]}),o.jsxs("div",{style:{padding:"24px",backgroundColor:"#F7F7F7",borderRadius:"12px"},children:[o.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",boxShadow:s.modal,borderRadius:"8px",marginBottom:"16px"},children:[o.jsx("div",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px"},children:"Modal"}),o.jsx("div",{style:{fontSize:"14px",color:"#616161"},children:"Modal and dialog"})]}),o.jsx("div",{style:{fontSize:"12px",color:"#616161"},children:"shadows.modal"})]}),o.jsxs("div",{style:{padding:"24px",backgroundColor:"#F7F7F7",borderRadius:"12px"},children:[o.jsx("div",{style:{padding:"16px 24px",backgroundColor:"#FFFFFF",border:"1px solid #C9CCCF",boxShadow:s.button,borderRadius:"6px",marginBottom:"16px",textAlign:"center",fontSize:"14px",fontWeight:"500"},children:o.jsx(e.p,{children:"Button Default"})}),o.jsx("div",{style:{fontSize:"12px",color:"#616161"},children:"shadows.button"})]}),o.jsxs("div",{style:{padding:"24px",backgroundColor:"#F7F7F7",borderRadius:"12px"},children:[o.jsx("div",{style:{padding:"16px 24px",backgroundColor:"#FAFAFA",border:"1px solid #B5B5B5",boxShadow:s.buttonHovered,borderRadius:"6px",marginBottom:"16px",textAlign:"center",fontSize:"14px",fontWeight:"500"},children:o.jsx(e.p,{children:"Button Hovered"})}),o.jsx("div",{style:{fontSize:"12px",color:"#616161"},children:"shadows.buttonHovered"})]})]})}),`
`,o.jsx(e.hr,{}),`
`,o.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { shadow, shadows, shadowFocus } from '@your-org/polaris-design-library/tokens';

// Card with elevation
const card = {
  boxShadow: shadows.card,
};

// Card on hover
const cardHovered = {
  boxShadow: shadows.cardHovered,
};

// Focus indicator
const focusedElement = {
  boxShadow: shadowFocus.default,
};

// Custom elevation
const elevated = {
  boxShadow: shadow.lg,
};
`})}),`
`,o.jsx(e.hr,{}),`
`,o.jsx(e.h2,{id:"elevation-guidelines",children:"Elevation Guidelines"}),`
`,o.jsxs(e.p,{children:[`| Component | Token | Use Case |
|-----------|-------|----------|
| Cards | `,o.jsx(e.code,{children:"shadows.card"}),` | Default card elevation |
| Cards (hover) | `,o.jsx(e.code,{children:"shadows.cardHovered"}),` | Interactive cards on hover |
| Popovers | `,o.jsx(e.code,{children:"shadows.popover"}),` | Dropdowns, tooltips |
| Modals | `,o.jsx(e.code,{children:"shadows.modal"}),` | Dialogs, overlays |
| Buttons | `,o.jsx(e.code,{children:"shadows.button"}),` | Button default state |
| Focus | `,o.jsx(e.code,{children:"shadowFocus.default"})," | Keyboard focus indicator |"]})]})}function w(r={}){const{wrapper:e}={...x(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(a,{...r})}):a(r)}export{w as default};
