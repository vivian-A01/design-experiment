import{j as s}from"./jsx-runtime-DiklIkkE.js";import{R as d}from"./index-DRjF_FHU.js";import{S as p}from"./Select-GZAsTBg8.js";import"./css-CpB8MaEn.js";import"./use-toggle-CFiziXYz.js";import"./Icon-DfOZwoJb.js";import"./breakpoints-DsDfYkBF.js";import"./Text-BG3e1Lbz.js";import"./Labelled-BsDPBwP-.js";import"./InlineError-SKpdvg5n.js";import"./utils-DGKULhVP.js";import"./Button-BRnHCNBZ.js";import"./focus-DhkBmn3-.js";import"./Spinner-CUqAq-Pn.js";import"./use-is-after-initial-mount-DD0LBRFR.js";import"./context-mLi4YNtT.js";import"./hooks-KMyVA0IW.js";import"./context-D6iXLSRD.js";import"./Box-B1w_vr2o.js";const z={title:"Polaris/Form/Select",parameters:{layout:"centered"}},o={render:()=>{const[e,t]=d.useState("today"),a=[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"}];return s.jsx(p,{label:"Date range",options:a,value:e,onChange:t})}},n={render:()=>{const[e,t]=d.useState(""),a=[{label:"Select a product",value:"",disabled:!0},{label:"Product A",value:"productA"},{label:"Product B",value:"productB"},{label:"Product C",value:"productC"}];return s.jsx(p,{label:"Choose product",options:a,placeholder:"Select a product",value:e,onChange:t})}},r={render:()=>{const e=[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}];return s.jsx(p,{label:"Disabled select",options:e,value:"option1",disabled:!0,onChange:()=>{}})}},l={render:()=>{const[e,t]=d.useState("standard"),a=[{label:"Standard shipping",value:"standard"},{label:"Express shipping",value:"express"},{label:"Overnight shipping",value:"overnight"}];return s.jsx(p,{label:"Shipping method",options:a,value:e,onChange:t,helpText:"Choose your preferred shipping method"})}};var c,i,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState("today");
    const options = [{
      label: "Today",
      value: "today"
    }, {
      label: "Yesterday",
      value: "yesterday"
    }, {
      label: "Last 7 days",
      value: "lastWeek"
    }];
    return <Select label="Date range" options={options} value={selected} onChange={setSelected} />;
  }
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,b,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState("");
    const options = [{
      label: "Select a product",
      value: "",
      disabled: true
    }, {
      label: "Product A",
      value: "productA"
    }, {
      label: "Product B",
      value: "productB"
    }, {
      label: "Product C",
      value: "productC"
    }];
    return <Select label="Choose product" options={options} placeholder="Select a product" value={selected} onChange={setSelected} />;
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,S,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: "Option 1",
      value: "option1"
    }, {
      label: "Option 2",
      value: "option2"
    }];
    return <Select label="Disabled select" options={options} value="option1" disabled onChange={() => {}} />;
  }
}`,...(g=(S=r.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var y,x,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState("standard");
    const options = [{
      label: "Standard shipping",
      value: "standard"
    }, {
      label: "Express shipping",
      value: "express"
    }, {
      label: "Overnight shipping",
      value: "overnight"
    }];
    return <Select label="Shipping method" options={options} value={selected} onChange={setSelected} helpText="Choose your preferred shipping method" />;
  }
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const G=["Basic","WithPlaceholder","Disabled","WithHelpText"];export{o as Basic,r as Disabled,l as WithHelpText,n as WithPlaceholder,G as __namedExportsOrder,z as default};
