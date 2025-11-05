import{j as t}from"./jsx-runtime-DiklIkkE.js";import{P as m}from"./Page-C3t4Y7wQ.js";import{r as f,R as e}from"./index-DRjF_FHU.js";import{c as y}from"./css-CpB8MaEn.js";import{b as _}from"./utils-DGKULhVP.js";import{B as o}from"./Box-B1w_vr2o.js";import{B as b}from"./BlockStack-D6dphcKR.js";import{I as W}from"./Image-CVen0NIu.js";import{T as h}from"./Text-BG3e1Lbz.js";import{I as ee}from"./InlineStack-D40BC9ks.js";import"./components-DT6sVM2M.js";import"./focus-DhkBmn3-.js";import"./Button-BRnHCNBZ.js";import"./breakpoints-DsDfYkBF.js";import"./Icon-DfOZwoJb.js";import"./Spinner-CUqAq-Pn.js";import"./use-is-after-initial-mount-DD0LBRFR.js";import"./context-mLi4YNtT.js";import"./hooks-KMyVA0IW.js";import"./context-D6iXLSRD.js";import"./use-toggle-CFiziXYz.js";import"./Popover-C0687k05.js";import"./types-B6k7La2U.js";import"./Scrollable-C6r34pLa.js";import"./index-DHHUZ-3A.js";import"./context-CUGBOWdW.js";import"./EventListener-Ch46rYtk.js";import"./KeypressListener-CkR6MueP.js";import"./Tooltip-Bnsbj5jj.js";import"./context-CvKcu416.js";import"./ActionList-dyImMudF.js";import"./Badge-C8SXRHoK.js";import"./TextField-BpAWhFX9.js";import"./use-event-listener-pp9uJY64.js";import"./Labelled-BsDPBwP-.js";import"./InlineError-SKpdvg5n.js";import"./hooks-Bm6Wywx2.js";import"./context-DRh4ibLU.js";import"./Pagination-DJIWLAuz.js";import"./ButtonGroup-CfdChKi4.js";var a={ImageContainer:"Polaris-EmptyState__ImageContainer",Image:"Polaris-EmptyState__Image",loaded:"Polaris-EmptyState--loaded",imageContained:"Polaris-EmptyState--imageContained",SkeletonImageContainer:"Polaris-EmptyState__SkeletonImageContainer",SkeletonImage:"Polaris-EmptyState__SkeletonImage"};function c({children:p,heading:S,image:E,largeImage:d,imageContained:G,fullWidth:H=!1,action:k,secondaryAction:x,footerContent:A}){const[l,g]=f.useState(!1),u=f.useRef(null);f.useEffect(()=>{var v;(v=u.current)!=null&&v.complete&&g(!0)},[]);const I=y(a.Image,l&&a.loaded,G&&a.imageContained),J=d?e.createElement(W,{alt:"",role:"presentation",ref:u,source:d,className:I,sourceSet:[{source:E,descriptor:"568w"},{source:d,descriptor:"1136w"}],sizes:"(max-width: 568px) 60vw",onLoad:()=>g(!0)}):e.createElement(W,{alt:"",role:"presentation",ref:u,className:I,source:E,onLoad:()=>g(!0)}),K=y(a.SkeletonImage,l&&a.loaded),Q=y(a.ImageContainer,!l&&a.SkeletonImageContainer),X=e.createElement("div",{className:Q},J,e.createElement("div",{className:K})),C=x?_(x,{}):null,P=A?e.createElement(o,{paddingBlockStart:"400"},e.createElement(h,{as:"span",alignment:"center",variant:"bodySm"},A)):null,j=k?_(k,{variant:"primary",size:"medium"}):null,N=S?e.createElement(o,{paddingBlockEnd:"150"},e.createElement(h,{variant:"headingMd",as:"p",alignment:"center"},S)):null,Z=p?e.createElement(h,{as:"span",alignment:"center",variant:"bodySm"},p):null,B=N||p?e.createElement(o,{paddingBlockEnd:"400"},N,Z):null,M=j||C?e.createElement(ee,{align:"center",gap:"200"},C,j):null,$=B||M||P?e.createElement(o,{maxWidth:H?"100%":"400px"},e.createElement(b,{inlineAlign:"center"},B,M,P)):null;return e.createElement(o,{paddingInlineStart:"0",paddingInlineEnd:"0",paddingBlockStart:"500",paddingBlockEnd:"1600"},e.createElement(b,{inlineAlign:"center"},X,$))}const Ve={title:"Polaris/Feedback/EmptyState",parameters:{layout:"fullscreen"}},r={render:()=>t.jsx(m,{children:t.jsx(c,{heading:"No products yet",image:"https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",children:t.jsx("p",{children:"Add your first product to get started."})})})},n={render:()=>t.jsx(m,{children:t.jsx(c,{heading:"Upload a file to get started",action:{content:"Upload file",onAction:()=>{}},image:"https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",children:t.jsx("p",{children:"You can upload images, documents, or videos."})})})},s={render:()=>t.jsx(m,{children:t.jsx(c,{heading:"No customers yet",action:{content:"Add customer",onAction:()=>{}},secondaryAction:{content:"Import customers",onAction:()=>{}},image:"https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",children:t.jsx("p",{children:"Add customers manually or import them from a CSV file."})})})},i={render:()=>t.jsx(m,{children:t.jsx(c,{heading:"No orders to display",action:{content:"Create order",onAction:()=>{}},image:"",children:t.jsx("p",{children:"Start by creating your first order."})})})};var R,w,L;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Page>
      <EmptyState heading="No products yet" image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png">
        <p>Add your first product to get started.</p>
      </EmptyState>
    </Page>
}`,...(L=(w=r.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var U,z,F;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Page>
      <EmptyState heading="Upload a file to get started" action={{
      content: "Upload file",
      onAction: () => {}
    }} image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png">
        <p>You can upload images, documents, or videos.</p>
      </EmptyState>
    </Page>
}`,...(F=(z=n.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var T,V,Y;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Page>
      <EmptyState heading="No customers yet" action={{
      content: "Add customer",
      onAction: () => {}
    }} secondaryAction={{
      content: "Import customers",
      onAction: () => {}
    }} image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png">
        <p>Add customers manually or import them from a CSV file.</p>
      </EmptyState>
    </Page>
}`,...(Y=(V=s.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var O,q,D;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Page>
      <EmptyState heading="No orders to display" action={{
      content: "Create order",
      onAction: () => {}
    }} image="">
        <p>Start by creating your first order.</p>
      </EmptyState>
    </Page>
}`,...(D=(q=i.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const Ye=["Basic","WithAction","WithSecondaryAction","WithoutImage"];export{r as Basic,n as WithAction,s as WithSecondaryAction,i as WithoutImage,Ye as __namedExportsOrder,Ve as default};
