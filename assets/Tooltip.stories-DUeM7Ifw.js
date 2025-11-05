import{j as e}from"./jsx-runtime-DiklIkkE.js";import{T as i}from"./Tooltip-Bnsbj5jj.js";import{B as s}from"./Button-BRnHCNBZ.js";import{I as T}from"./Icon-DfOZwoJb.js";import{R as o}from"./index-DRjF_FHU.js";import"./focus-DhkBmn3-.js";import"./use-toggle-CFiziXYz.js";import"./css-CpB8MaEn.js";import"./context-CvKcu416.js";import"./Scrollable-C6r34pLa.js";import"./breakpoints-DsDfYkBF.js";import"./index-DHHUZ-3A.js";import"./context-CUGBOWdW.js";import"./context-mLi4YNtT.js";import"./use-is-after-initial-mount-DD0LBRFR.js";import"./EventListener-Ch46rYtk.js";import"./hooks-KMyVA0IW.js";import"./context-D6iXLSRD.js";import"./Text-BG3e1Lbz.js";import"./Spinner-CUqAq-Pn.js";var h=function(x){return o.createElement("svg",Object.assign({viewBox:"0 0 20 20"},x),o.createElement("path",{fillRule:"evenodd",d:"M10 7.25c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 3.758 2.56.61.61 0 0 0-.226.147.154.154 0 0 0-.032.046.75.75 0 0 1-1.5-.003c0-.865.696-1.385 1.208-1.586a1.25 1.25 0 0 0-.458-2.414Z"}),o.createElement("path",{d:"M10 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}),o.createElement("path",{fillRule:"evenodd",d:"M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"}))};h.displayName="QuestionCircleIcon";const k={title:"Polaris/Overlay/Tooltip",parameters:{layout:"centered"}},t={render:()=>e.jsx(i,{content:"This is a helpful tooltip",children:e.jsx(s,{children:"Hover me"})})},r={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("span",{children:"Product information"}),e.jsx(i,{content:"Additional details about this product",children:e.jsx(T,{source:h,tone:"base"})})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{content:"Tooltip above",preferredPosition:"above",children:e.jsx(s,{children:"Above"})}),e.jsx(i,{content:"Tooltip below",preferredPosition:"below",children:e.jsx(s,{children:"Below"})})]})};var a,l,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is a helpful tooltip">
      <Button>Hover me</Button>
    </Tooltip>
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  }}>
      <span>Product information</span>
      <Tooltip content="Additional details about this product">
        <Icon source={QuestionCircleIcon} tone="base" />
      </Tooltip>
    </div>
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,f,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <Tooltip content="Tooltip above" preferredPosition="above">
        <Button>Above</Button>
      </Tooltip>
      <Tooltip content="Tooltip below" preferredPosition="below">
        <Button>Below</Button>
      </Tooltip>
    </div>
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const q=["Basic","WithIcon","PreferredPosition"];export{t as Basic,n as PreferredPosition,r as WithIcon,q as __namedExportsOrder,k as default};
