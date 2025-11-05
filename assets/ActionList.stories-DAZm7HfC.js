import{j as t}from"./jsx-runtime-DiklIkkE.js";import{C as i}from"./Card-jNhA2eZy.js";import{A as r}from"./ActionList-dyImMudF.js";import"./index-DRjF_FHU.js";import"./breakpoints-DsDfYkBF.js";import"./within-content-context-DSkiGakq.js";import"./css-CpB8MaEn.js";import"./Box-B1w_vr2o.js";import"./types-B6k7La2U.js";import"./focus-DhkBmn3-.js";import"./context-CUGBOWdW.js";import"./context-mLi4YNtT.js";import"./Badge-C8SXRHoK.js";import"./hooks-KMyVA0IW.js";import"./context-D6iXLSRD.js";import"./Text-BG3e1Lbz.js";import"./Icon-DfOZwoJb.js";import"./Tooltip-Bnsbj5jj.js";import"./use-toggle-CFiziXYz.js";import"./context-CvKcu416.js";import"./Scrollable-C6r34pLa.js";import"./index-DHHUZ-3A.js";import"./use-is-after-initial-mount-DD0LBRFR.js";import"./EventListener-Ch46rYtk.js";import"./Button-BRnHCNBZ.js";import"./Spinner-CUqAq-Pn.js";import"./InlineStack-D40BC9ks.js";import"./BlockStack-D6dphcKR.js";import"./KeypressListener-CkR6MueP.js";import"./TextField-BpAWhFX9.js";import"./use-event-listener-pp9uJY64.js";import"./Labelled-BsDPBwP-.js";import"./InlineError-SKpdvg5n.js";import"./utils-DGKULhVP.js";const U={title:"Polaris/Actions/ActionList",parameters:{layout:"centered"}},n={render:()=>t.jsx(i,{children:t.jsx(r,{items:[{content:"View details",onAction:()=>{}},{content:"Edit product",onAction:()=>{}},{content:"Delete product",onAction:()=>{}}]})})},o={render:()=>t.jsx(i,{children:t.jsx(r,{sections:[{title:"File options",items:[{content:"Import file",onAction:()=>{}},{content:"Export file",onAction:()=>{}}]},{title:"Bulk actions",items:[{content:"Edit all",onAction:()=>{}},{content:"Delete all",onAction:()=>{}}]}]})})},e={render:()=>t.jsx(i,{children:t.jsx(r,{items:[{content:"Edit",onAction:()=>{}},{content:"Duplicate",onAction:()=>{}},{content:"Delete",onAction:()=>{},destructive:!0}]})})};var c,s,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Card>
      <ActionList items={[{
      content: "View details",
      onAction: () => {}
    }, {
      content: "Edit product",
      onAction: () => {}
    }, {
      content: "Delete product",
      onAction: () => {}
    }]} />
    </Card>
}`,...(m=(s=n.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,a,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Card>
      <ActionList sections={[{
      title: "File options",
      items: [{
        content: "Import file",
        onAction: () => {}
      }, {
        content: "Export file",
        onAction: () => {}
      }]
    }, {
      title: "Bulk actions",
      items: [{
        content: "Edit all",
        onAction: () => {}
      }, {
        content: "Delete all",
        onAction: () => {}
      }]
    }]} />
    </Card>
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var l,A,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Card>
      <ActionList items={[{
      content: "Edit",
      onAction: () => {}
    }, {
      content: "Duplicate",
      onAction: () => {}
    }, {
      content: "Delete",
      onAction: () => {},
      destructive: true
    }]} />
    </Card>
}`,...(u=(A=e.parameters)==null?void 0:A.docs)==null?void 0:u.source}}};const X=["Basic","WithSections","WithDestructiveAction"];export{n as Basic,e as WithDestructiveAction,o as WithSections,X as __namedExportsOrder,U as default};
