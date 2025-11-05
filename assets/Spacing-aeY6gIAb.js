import{j as n}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as p}from"./index-ChEI-nsM.js";import{M as a}from"./index-gaPx6oo5.js";import"./index-DRjF_FHU.js";import"./iframe-ClZulfIc.js";import"./index-DHHUZ-3A.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";const i={none:"0","025":"0.125rem","050":"0.25rem",100:"0.5rem",150:"0.75rem",200:"1rem",300:"1.25rem",400:"1.5rem",500:"1.75rem",600:"2rem",800:"2.5rem",1e3:"3rem",1200:"4rem",1600:"5rem",2e3:"8rem"},t={tight:i[100],base:i[200],loose:i[400],extraLoose:i[800]},x={none:i.none,xs:i["050"],sm:i[100],md:i[200],lg:i[400],xl:i[600],xxl:i[1e3]},l={none:i.none,xs:i["050"],sm:i[100],md:i[200],lg:i[400],xl:i[600]};function d(o){const e={code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...p(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Design Tokens/Spacing"}),`
`,n.jsx(e.h1,{id:"spacing",children:"Spacing"}),`
`,n.jsx(e.p,{children:"Polaris spacing system provides consistent spacing values for margins, padding, and gaps."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"spacing-scale",children:"Spacing Scale"}),`
`,n.jsx(e.p,{children:"All spacing tokens with visual examples."}),`
`,n.jsx("div",{style:{marginTop:"24px"},children:Object.entries(i).map(([r,s])=>n.jsx(e.div,{style:{padding:"16px",backgroundColor:"#fff",border:"1px solid #E3E3E3",borderRadius:"8px",marginBottom:"12px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:n.jsxs(e.div,{style:{display:"flex",alignItems:"center",gap:"16px",flex:1},children:[n.jsx(e.div,{style:{width:s,height:"32px",backgroundColor:"#0171E9",borderRadius:"4px",minWidth:"2px"}}),n.jsxs(e.div,{children:[n.jsxs(e.div,{style:{fontSize:"14px",fontWeight:"600"},children:["spacing.",r]}),n.jsxs(e.div,{style:{fontSize:"12px",color:"#8C9196"},children:[s," • ",parseFloat(s)*16,"px"]})]})]})},r))}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"semantic-spacing",children:"Semantic Spacing"}),`
`,n.jsx(e.p,{children:"Pre-configured spacing for common use cases."}),`
`,n.jsx("div",{style:{marginTop:"24px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"16px"},children:Object.entries(t).map(([r,s])=>n.jsxs(e.div,{style:{padding:"16px",backgroundColor:"#fff",border:"1px solid #E3E3E3",borderRadius:"8px"},children:[n.jsx(e.div,{style:{width:s,height:"40px",backgroundColor:"#0171E9",borderRadius:"4px",marginBottom:"12px"}}),n.jsxs(e.div,{style:{fontSize:"14px",fontWeight:"600"},children:["spacingSemantic.",r]}),n.jsx(e.div,{style:{fontSize:"12px",color:"#8C9196",marginTop:"4px"},children:s})]},r))}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"gap-tokens",children:"Gap Tokens"}),`
`,n.jsx(e.p,{children:"For flexbox and grid layouts."}),`
`,n.jsx("div",{style:{marginTop:"24px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"16px"},children:Object.entries(x).map(([r,s])=>n.jsxs(e.div,{style:{padding:"16px",backgroundColor:"#fff",border:"1px solid #E3E3E3",borderRadius:"8px"},children:[n.jsxs(e.div,{style:{display:"flex",gap:s,marginBottom:"12px"},children:[n.jsx(e.div,{style:{width:"40px",height:"40px",backgroundColor:"#0171E9",borderRadius:"4px"}}),n.jsx(e.div,{style:{width:"40px",height:"40px",backgroundColor:"#0171E9",borderRadius:"4px"}}),n.jsx(e.div,{style:{width:"40px",height:"40px",backgroundColor:"#0171E9",borderRadius:"4px"}})]}),n.jsxs(e.div,{style:{fontSize:"14px",fontWeight:"600"},children:["gap.",r]}),n.jsx(e.div,{style:{fontSize:"12px",color:"#8C9196",marginTop:"4px"},children:s})]},r))}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"inset-tokens",children:"Inset Tokens"}),`
`,n.jsx(e.p,{children:"For padding values."}),`
`,n.jsx("div",{style:{marginTop:"24px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"16px"},children:Object.entries(l).map(([r,s])=>n.jsxs(e.div,{style:{padding:"16px",backgroundColor:"#fff",border:"1px solid #E3E3E3",borderRadius:"8px"},children:[n.jsx(e.div,{style:{padding:s,backgroundColor:"#F1F8F5",border:"2px solid #11837C",borderRadius:"4px",marginBottom:"12px",minHeight:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(e.div,{style:{fontSize:"12px",color:"#0C5548"},children:"Content"})}),n.jsxs(e.div,{style:{fontSize:"14px",fontWeight:"600"},children:["inset.",r]}),n.jsx(e.div,{style:{fontSize:"12px",color:"#8C9196",marginTop:"4px"},children:s})]},r))}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,n.jsx(e.h3,{id:"margin",children:"Margin"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { spacing, spacingSemantic } from '@your-org/polaris-design-library/tokens';

// Using specific spacing
const box = {
  margin: spacing['200'], // 16px
};

// Using semantic spacing
const section = {
  marginBottom: spacingSemantic.loose, // 24px
};
`})}),`
`,n.jsx(e.h3,{id:"padding",children:"Padding"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { inset } from '@your-org/polaris-design-library/tokens';

const card = {
  padding: inset.lg, // 24px
};
`})}),`
`,n.jsx(e.h3,{id:"flexbox-gap",children:"Flexbox Gap"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { gap } from '@your-org/polaris-design-library/tokens';

const flexContainer = {
  display: 'flex',
  gap: gap.md, // 16px
};
`})}),`
`,n.jsx(e.h3,{id:"grid-gap",children:"Grid Gap"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { gap } from '@your-org/polaris-design-library/tokens';

const gridContainer = {
  display: 'grid',
  gap: gap.lg, // 24px
  gridTemplateColumns: 'repeat(3, 1fr)',
};
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"spacing-reference",children:"Spacing Reference"}),`
`,n.jsxs(e.p,{children:[`| Token | Value | Pixels | Common Use |
|-------|-------|--------|------------|
| `,n.jsx(e.code,{children:"none"}),` | 0 | 0px | No spacing |
| `,n.jsx(e.code,{children:"050"}),` | 0.25rem | 4px | Extra tight spacing |
| `,n.jsx(e.code,{children:"100"}),` | 0.5rem | 8px | Tight spacing, icons |
| `,n.jsx(e.code,{children:"200"}),` | 1rem | 16px | Base spacing unit |
| `,n.jsx(e.code,{children:"300"}),` | 1.25rem | 20px | Medium spacing |
| `,n.jsx(e.code,{children:"400"}),` | 1.5rem | 24px | Large spacing |
| `,n.jsx(e.code,{children:"600"}),` | 2rem | 32px | Section spacing |
| `,n.jsx(e.code,{children:"800"}),` | 2.5rem | 40px | Large sections |
| `,n.jsx(e.code,{children:"1000"}),` | 3rem | 48px | Major sections |
| `,n.jsx(e.code,{children:"1200"})," | 4rem | 64px | Page sections |"]})]})}function b(o={}){const{wrapper:e}={...p(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(d,{...o})}):d(o)}export{b as default};
