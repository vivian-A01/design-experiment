import{j as t}from"./jsx-runtime-DiklIkkE.js";import{R as c}from"./index-DRjF_FHU.js";import{P as s}from"./Popover-C0687k05.js";import{B as a}from"./Button-BRnHCNBZ.js";import{A as x}from"./ActionList-dyImMudF.js";import"./focus-DhkBmn3-.js";import"./context-mLi4YNtT.js";import"./breakpoints-DsDfYkBF.js";import"./css-CpB8MaEn.js";import"./components-DT6sVM2M.js";import"./types-B6k7La2U.js";import"./Box-B1w_vr2o.js";import"./Scrollable-C6r34pLa.js";import"./index-DHHUZ-3A.js";import"./context-CUGBOWdW.js";import"./use-is-after-initial-mount-DD0LBRFR.js";import"./EventListener-Ch46rYtk.js";import"./KeypressListener-CkR6MueP.js";import"./Tooltip-Bnsbj5jj.js";import"./use-toggle-CFiziXYz.js";import"./context-CvKcu416.js";import"./hooks-KMyVA0IW.js";import"./context-D6iXLSRD.js";import"./Text-BG3e1Lbz.js";import"./Icon-DfOZwoJb.js";import"./Spinner-CUqAq-Pn.js";import"./Badge-C8SXRHoK.js";import"./InlineStack-D40BC9ks.js";import"./BlockStack-D6dphcKR.js";import"./TextField-BpAWhFX9.js";import"./use-event-listener-pp9uJY64.js";import"./Labelled-BsDPBwP-.js";import"./InlineError-SKpdvg5n.js";import"./utils-DGKULhVP.js";const $={title:"Polaris/Overlay/Popover",parameters:{layout:"centered"}},o={render:()=>{const[n,e]=c.useState(!1);return t.jsx("div",{style:{padding:"2rem"},children:t.jsx(s,{active:n,activator:t.jsx(a,{onClick:()=>e(!n),children:"More actions"}),onClose:()=>e(!1),children:t.jsx(s.Pane,{children:t.jsx("div",{style:{padding:"1rem"},children:t.jsx("p",{children:"Popover content"})})})})})}},i={render:()=>{const[n,e]=c.useState(!1);return t.jsx("div",{style:{padding:"2rem"},children:t.jsx(s,{active:n,activator:t.jsx(a,{onClick:()=>e(!n),children:"Actions"}),onClose:()=>e(!1),children:t.jsx(x,{items:[{content:"Edit",onAction:()=>e(!1)},{content:"Duplicate",onAction:()=>e(!1)},{content:"Delete",onAction:()=>e(!1)}]})})})}},r={render:()=>{const[n,e]=c.useState(!1);return t.jsx("div",{style:{padding:"2rem"},children:t.jsx(s,{active:n,activator:t.jsx(a,{onClick:()=>e(!n),children:"Show menu"}),onClose:()=>e(!1),preferredPosition:"below",children:t.jsx(x,{items:[{content:"Profile",onAction:()=>e(!1)},{content:"Settings",onAction:()=>e(!1)},{content:"Sign out",onAction:()=>e(!1)}]})})})}};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState(false);
    return <div style={{
      padding: "2rem"
    }}>
        <Popover active={active} activator={<Button onClick={() => setActive(!active)}>More actions</Button>} onClose={() => setActive(false)}>
          <Popover.Pane>
            <div style={{
            padding: "1rem"
          }}>
              <p>Popover content</p>
            </div>
          </Popover.Pane>
        </Popover>
      </div>;
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,v,A;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState(false);
    return <div style={{
      padding: "2rem"
    }}>
        <Popover active={active} activator={<Button onClick={() => setActive(!active)}>Actions</Button>} onClose={() => setActive(false)}>
          <ActionList items={[{
          content: "Edit",
          onAction: () => setActive(false)
        }, {
          content: "Duplicate",
          onAction: () => setActive(false)
        }, {
          content: "Delete",
          onAction: () => setActive(false)
        }]} />
        </Popover>
      </div>;
  }
}`,...(A=(v=i.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var u,f,P;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState(false);
    return <div style={{
      padding: "2rem"
    }}>
        <Popover active={active} activator={<Button onClick={() => setActive(!active)}>Show menu</Button>} onClose={() => setActive(false)} preferredPosition="below">
          <ActionList items={[{
          content: "Profile",
          onAction: () => setActive(false)
        }, {
          content: "Settings",
          onAction: () => setActive(false)
        }, {
          content: "Sign out",
          onAction: () => setActive(false)
        }]} />
        </Popover>
      </div>;
  }
}`,...(P=(f=r.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const ee=["Basic","WithActionList","PreferredPosition"];export{o as Basic,r as PreferredPosition,i as WithActionList,ee as __namedExportsOrder,$ as default};
