import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as s}from"./index-DRjF_FHU.js";import{B as c}from"./Button-BRnHCNBZ.js";import{M as n}from"./Modal-DfOWCsbz.js";import{T as l}from"./TextContainer-B471FLuq.js";import{T as d}from"./Text-BG3e1Lbz.js";import"./breakpoints-DsDfYkBF.js";import"./css-CpB8MaEn.js";import"./focus-DhkBmn3-.js";import"./Icon-DfOZwoJb.js";import"./Spinner-CUqAq-Pn.js";import"./use-is-after-initial-mount-DD0LBRFR.js";import"./context-mLi4YNtT.js";import"./hooks-KMyVA0IW.js";import"./context-D6iXLSRD.js";import"./within-content-context-DSkiGakq.js";import"./components-DT6sVM2M.js";import"./Box-B1w_vr2o.js";import"./types-B6k7La2U.js";import"./context-CUGBOWdW.js";import"./context-DBz1lvLm.js";import"./EventListener-Ch46rYtk.js";import"./KeypressListener-CkR6MueP.js";import"./CSSTransition-B73_rMZh.js";import"./index-DHHUZ-3A.js";import"./XIcon.svg-DzSG-rds.js";import"./InlineStack-D40BC9ks.js";import"./utils-DGKULhVP.js";import"./Scrollable-C6r34pLa.js";const V={title:"Polaris/Overlay/Modal",parameters:{layout:"centered"}},r={render:()=>{const[o,t]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>t(!0),children:"Open Modal"}),e.jsx(n,{open:o,onClose:()=>t(!1),title:"Edit product details",primaryAction:{content:"Save",onAction:()=>t(!1)},secondaryActions:[{content:"Cancel",onAction:()=>t(!1)}],children:e.jsx(n.Section,{children:e.jsx(l,{children:e.jsx(d,{as:"p",variant:"bodyMd",children:"Make changes to your product information."})})})})]})}},a={render:()=>{const[o,t]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>t(!0),children:"Open Simple Modal"}),e.jsx(n,{open:o,onClose:()=>t(!1),title:"Information",children:e.jsx(n.Section,{children:e.jsx(l,{children:e.jsx(d,{as:"p",variant:"bodyMd",children:"This modal contains only informational content with no actions."})})})})]})}},i={render:()=>{const[o,t]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>t(!0),children:"Open Large Modal"}),e.jsx(n,{size:"large",open:o,onClose:()=>t(!1),title:"Large modal",primaryAction:{content:"Continue",onAction:()=>t(!1)},children:e.jsx(n.Section,{children:e.jsx(l,{children:e.jsx(d,{as:"p",variant:"bodyMd",children:"This is a large modal with more space for content."})})})})]})}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState(false);
    return <>
        <Button onClick={() => setActive(true)}>Open Modal</Button>
        <Modal open={active} onClose={() => setActive(false)} title="Edit product details" primaryAction={{
        content: "Save",
        onAction: () => setActive(false)
      }} secondaryActions={[{
        content: "Cancel",
        onAction: () => setActive(false)
      }]}>
          <Modal.Section>
            <TextContainer>
              <Text as="p" variant="bodyMd">
                Make changes to your product information.
              </Text>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </>;
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,f,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState(false);
    return <>
        <Button onClick={() => setActive(true)}>Open Simple Modal</Button>
        <Modal open={active} onClose={() => setActive(false)} title="Information">
          <Modal.Section>
            <TextContainer>
              <Text as="p" variant="bodyMd">
                This modal contains only informational content with no actions.
              </Text>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </>;
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var M,h,A;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState(false);
    return <>
        <Button onClick={() => setActive(true)}>Open Large Modal</Button>
        <Modal size="large" open={active} onClose={() => setActive(false)} title="Large modal" primaryAction={{
        content: "Continue",
        onAction: () => setActive(false)
      }}>
          <Modal.Section>
            <TextContainer>
              <Text as="p" variant="bodyMd">
                This is a large modal with more space for content.
              </Text>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </>;
  }
}`,...(A=(h=i.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};const X=["Basic","WithoutFooter","LargeModal"];export{r as Basic,i as LargeModal,a as WithoutFooter,X as __namedExportsOrder,V as default};
