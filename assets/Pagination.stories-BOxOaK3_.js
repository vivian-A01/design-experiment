import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as h}from"./index-DRjF_FHU.js";import{P as i}from"./Pagination-DJIWLAuz.js";import"./css-CpB8MaEn.js";import"./hooks-KMyVA0IW.js";import"./context-D6iXLSRD.js";import"./KeypressListener-CkR6MueP.js";import"./breakpoints-DsDfYkBF.js";import"./Box-B1w_vr2o.js";import"./InlineStack-D40BC9ks.js";import"./ButtonGroup-CfdChKi4.js";import"./components-DT6sVM2M.js";import"./use-toggle-CFiziXYz.js";import"./Tooltip-Bnsbj5jj.js";import"./focus-DhkBmn3-.js";import"./context-CvKcu416.js";import"./Scrollable-C6r34pLa.js";import"./index-DHHUZ-3A.js";import"./context-CUGBOWdW.js";import"./context-mLi4YNtT.js";import"./use-is-after-initial-mount-DD0LBRFR.js";import"./EventListener-Ch46rYtk.js";import"./Text-BG3e1Lbz.js";import"./Button-BRnHCNBZ.js";import"./Icon-DfOZwoJb.js";import"./Spinner-CUqAq-Pn.js";const K={title:"Polaris/Navigation/Pagination",parameters:{layout:"centered"}},r={render:()=>e.jsx(i,{hasPrevious:!0,hasNext:!0,onPrevious:()=>{},onNext:()=>{}})},t={render:()=>e.jsx(i,{hasPrevious:!0,hasNext:!0,onPrevious:()=>{},onNext:()=>{},label:"Results"})},a={render:()=>{const[o,m]=h.useState(2),s=5;return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem"},children:["Page ",o," of ",s]}),e.jsx(i,{hasPrevious:o>1,hasNext:o<s,onPrevious:()=>m(n=>Math.max(1,n-1)),onNext:()=>m(n=>Math.min(s,n+1))})]})}};var p,c,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Pagination hasPrevious hasNext onPrevious={() => {}} onNext={() => {}} />
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var P,d,g;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Pagination hasPrevious hasNext onPrevious={() => {}} onNext={() => {}} label="Results" />
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,v,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(2);
    const totalPages = 5;
    return <div style={{
      padding: "2rem"
    }}>
        <div style={{
        textAlign: "center",
        marginBottom: "1rem"
      }}>
          Page {currentPage} of {totalPages}
        </div>
        <Pagination hasPrevious={currentPage > 1} hasNext={currentPage < totalPages} onPrevious={() => setCurrentPage(prev => Math.max(1, prev - 1))} onNext={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} />
      </div>;
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const Q=["Basic","WithLabel","Interactive"];export{r as Basic,a as Interactive,t as WithLabel,Q as __namedExportsOrder,K as default};
