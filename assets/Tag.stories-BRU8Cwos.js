import{j as l}from"./jsx-runtime-DiklIkkE.js";import{R as t}from"./index-DRjF_FHU.js";import{c as T,v as W}from"./css-CpB8MaEn.js";import{h as I}from"./focus-DhkBmn3-.js";import{u as M}from"./hooks-KMyVA0IW.js";import{T as V}from"./Text-BG3e1Lbz.js";import{I as C}from"./Icon-DfOZwoJb.js";import{S as w}from"./XSmallIcon.svg-Dn9T_HVo.js";import"./context-D6iXLSRD.js";import"./breakpoints-DsDfYkBF.js";var e={Tag:"Polaris-Tag",disabled:"Polaris-Tag--disabled",clickable:"Polaris-Tag--clickable",linkable:"Polaris-Tag--linkable",removable:"Polaris-Tag--removable",Button:"Polaris-Tag__Button",Link:"Polaris-Tag__Link",segmented:"Polaris-Tag--segmented",Text:"Polaris-Tag__Text",sizeLarge:"Polaris-Tag--sizeLarge",overlay:"Polaris-Tag--overlay"};function v({children:r,disabled:a=!1,onClick:s,onRemove:n,accessibilityLabel:f,url:o,size:d}){const _=M(),p=n&&o,x=T(e.Tag,a&&e.disabled,s&&e.clickable,n&&e.removable,o&&!a&&e.linkable,p&&e.segmented,d&&e[W("size",d)]);let i=f;i||(i=typeof r=="string"?r:void 0);const u=t.createElement(V,{as:"span",variant:"bodySm",truncate:!0},t.createElement("span",{title:i,className:e.Text},r));if(s)return t.createElement("button",{type:"button",disabled:a,className:x,onClick:s},u);const j=_.translate("Polaris.Tag.ariaLabel",{children:i||""}),B=n?t.createElement("button",{type:"button","aria-label":j,className:T(e.Button,p&&e.segmented),onClick:n,onMouseUp:I,disabled:a},t.createElement(C,{source:w})):null,L=o&&!a?t.createElement("a",{className:T(e.Link,p&&e.segmented),href:o},u):u;return t.createElement("span",{className:x,"aria-disabled":a},L,d==="large"&&t.createElement("span",{className:e.overlay}),B)}const J={title:"Polaris/Display/Tag",parameters:{layout:"centered"}},c={render:()=>{const[r,a]=t.useState(!0);return l.jsx("div",{children:r?l.jsx(v,{onRemove:()=>a(!1),children:"Vintage"}):l.jsx("p",{style:{color:"#888"},children:"Tag removed"})})}},m={render:()=>l.jsx(v,{children:"Non-removable tag"})},g={render:()=>{const[r,a]=t.useState(["Vintage","Cotton","Summer","Sale"]);return l.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:r.map((s,n)=>l.jsx(v,{onRemove:()=>{a(r.filter((f,o)=>o!==n))},children:s},s))})}};var b,y,S;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState(true);
    return <div>
        {selected ? <Tag onRemove={() => setSelected(false)}>Vintage</Tag> : <p style={{
        color: "#888"
      }}>Tag removed</p>}
      </div>;
  }
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var P,h,N;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Tag>Non-removable tag</Tag>
}`,...(N=(h=m.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var k,E,R;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = React.useState(["Vintage", "Cotton", "Summer", "Sale"]);
    return <div style={{
      display: "flex",
      gap: "0.5rem",
      flexWrap: "wrap"
    }}>
        {tags.map((tag, index) => <Tag key={tag} onRemove={() => {
        setTags(tags.filter((_, i) => i !== index));
      }}>
            {tag}
          </Tag>)}
      </div>;
  }
}`,...(R=(E=g.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const K=["Basic","WithoutRemove","MultipleTagsWithRemove"];export{c as Basic,g as MultipleTagsWithRemove,m as WithoutRemove,K as __namedExportsOrder,J as default};
