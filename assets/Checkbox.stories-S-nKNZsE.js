import{j as t}from"./jsx-runtime-DiklIkkE.js";import{R as h}from"./index-DRjF_FHU.js";import{C as a}from"./Checkbox-BzOXeF8-.js";import{B as R}from"./BlockStack-D6dphcKR.js";import"./css-CpB8MaEn.js";import"./Text-BG3e1Lbz.js";import"./InlineError-SKpdvg5n.js";import"./Icon-DfOZwoJb.js";import"./breakpoints-DsDfYkBF.js";const W={title:"Polaris/Form/Checkbox",parameters:{layout:"centered"}},r={render:()=>{const[e,c]=h.useState(!1);return t.jsx(a,{label:"Accept terms and conditions",checked:e,onChange:c})}},o={render:()=>{const[e,c]=h.useState(!0);return t.jsx(a,{label:"Email notifications",checked:e,onChange:c})}},n={render:()=>t.jsx(a,{label:"Disabled checkbox",checked:!1,disabled:!0})},d={render:()=>{const[e,c]=h.useState(!1);return t.jsx(a,{label:"Enable two-factor authentication",checked:e,onChange:c,helpText:"Add an extra layer of security to your account"})}},l={render:()=>{const[e,c]=h.useState([!1,!0,!1]);return t.jsxs(R,{gap:"200",children:[t.jsx(a,{label:"Email updates",checked:e[0],onChange:s=>c([s,e[1],e[2]])}),t.jsx(a,{label:"SMS notifications",checked:e[1],onChange:s=>c([e[0],s,e[2]])}),t.jsx(a,{label:"Push alerts",checked:e[2],onChange:s=>c([e[0],e[1],s])})]})}};var k,i,m;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox label="Accept terms and conditions" checked={checked} onChange={setChecked} />;
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,p,C;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(true);
    return <Checkbox label="Email notifications" checked={checked} onChange={setChecked} />;
  }
}`,...(C=(p=o.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var b,x,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Checkbox label="Disabled checkbox" checked={false} disabled />
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,g,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox label="Enable two-factor authentication" checked={checked} onChange={setChecked} helpText="Add an extra layer of security to your account" />;
  }
}`,...(I=(g=d.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var j,E,y;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [checkedItems, setCheckedItems] = React.useState([false, true, false]);
    return <BlockStack gap="200">
        <Checkbox label="Email updates" checked={checkedItems[0]} onChange={value => setCheckedItems([value, checkedItems[1], checkedItems[2]])} />
        <Checkbox label="SMS notifications" checked={checkedItems[1]} onChange={value => setCheckedItems([checkedItems[0], value, checkedItems[2]])} />
        <Checkbox label="Push alerts" checked={checkedItems[2]} onChange={value => setCheckedItems([checkedItems[0], checkedItems[1], value])} />
      </BlockStack>;
  }
}`,...(y=(E=l.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};const _=["Basic","Checked","Disabled","WithHelpText","Multiple"];export{r as Basic,o as Checked,n as Disabled,l as Multiple,d as WithHelpText,_ as __namedExportsOrder,W as default};
