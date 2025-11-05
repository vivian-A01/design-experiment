import{j as t}from"./jsx-runtime-DiklIkkE.js";import{R as o}from"./index-DRjF_FHU.js";import{T as r}from"./TextField-BpAWhFX9.js";import"./css-CpB8MaEn.js";import"./use-is-after-initial-mount-DD0LBRFR.js";import"./types-B6k7La2U.js";import"./use-event-listener-pp9uJY64.js";import"./breakpoints-DsDfYkBF.js";import"./Labelled-BsDPBwP-.js";import"./InlineError-SKpdvg5n.js";import"./Icon-DfOZwoJb.js";import"./Text-BG3e1Lbz.js";import"./utils-DGKULhVP.js";import"./Button-BRnHCNBZ.js";import"./focus-DhkBmn3-.js";import"./Spinner-CUqAq-Pn.js";import"./context-mLi4YNtT.js";import"./hooks-KMyVA0IW.js";import"./context-D6iXLSRD.js";import"./use-toggle-CFiziXYz.js";import"./EventListener-Ch46rYtk.js";const oe={title:"Polaris/Form/TextField",parameters:{layout:"centered"}},s={render:()=>{const[e,a]=o.useState("");return t.jsx(r,{label:"Store name",value:e,onChange:a,autoComplete:"off"})}},l={render:()=>{const[e,a]=o.useState("Existing value");return t.jsx(r,{label:"Product title",value:e,onChange:a,autoComplete:"off"})}},n={render:()=>{const[e,a]=o.useState("");return t.jsx(r,{label:"Email",value:e,onChange:a,placeholder:"example@email.com",autoComplete:"email"})}},u={render:()=>{const[e,a]=o.useState("");return t.jsx(r,{label:"Username",value:e,onChange:a,autoComplete:"off",helpText:"Choose a unique username for your account"})}},i={render:()=>t.jsx(r,{label:"Disabled field",value:"Cannot edit this",onChange:()=>{},disabled:!0,autoComplete:"off"})},c={render:()=>{const[e,a]=o.useState("");return t.jsx(r,{label:"Password",type:"password",value:e,onChange:a,autoComplete:"current-password"})}},m={render:()=>{const[e,a]=o.useState("");return t.jsx(r,{label:"Description",value:e,onChange:a,multiline:4,autoComplete:"off",placeholder:"Enter product description"})}},d={render:()=>{const[e,a]=o.useState("invalid-email");return t.jsx(r,{label:"Email address",value:e,onChange:a,error:"Please enter a valid email address",autoComplete:"email"})}};var p,h,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("");
    return <TextField label="Store name" value={value} onChange={setValue} autoComplete="off" />;
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var C,x,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("Existing value");
    return <TextField label="Product title" value={value} onChange={setValue} autoComplete="off" />;
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,S,V;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("");
    return <TextField label="Email" value={value} onChange={setValue} placeholder="example@email.com" autoComplete="email" />;
  }
}`,...(V=(S=n.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var b,T,E;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("");
    return <TextField label="Username" value={value} onChange={setValue} autoComplete="off" helpText="Choose a unique username for your account" />;
  }
}`,...(E=(T=u.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var F,P,j;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <TextField label="Disabled field" value="Cannot edit this" onChange={() => {}} disabled autoComplete="off" />
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var R,w,W;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("");
    return <TextField label="Password" type="password" value={value} onChange={setValue} autoComplete="current-password" />;
  }
}`,...(W=(w=c.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var D,y,q;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("");
    return <TextField label="Description" value={value} onChange={setValue} multiline={4} autoComplete="off" placeholder="Enter product description" />;
  }
}`,...(q=(y=m.parameters)==null?void 0:y.docs)==null?void 0:q.source}}};var B,H,M;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("invalid-email");
    return <TextField label="Email address" value={value} onChange={setValue} error="Please enter a valid email address" autoComplete="email" />;
  }
}`,...(M=(H=d.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const se=["Basic","WithValue","WithPlaceholder","WithHelpText","Disabled","Password","Multiline","WithError"];export{s as Basic,i as Disabled,m as Multiline,c as Password,d as WithError,u as WithHelpText,n as WithPlaceholder,l as WithValue,se as __namedExportsOrder,oe as default};
