import{j as r}from"./jsx-runtime-DiklIkkE.js";import{P as e}from"./Page-C3t4Y7wQ.js";import{C as i}from"./Card-jNhA2eZy.js";import{B as c}from"./BlockStack-D6dphcKR.js";import{T as t}from"./Text-BG3e1Lbz.js";import"./index-DRjF_FHU.js";import"./css-CpB8MaEn.js";import"./components-DT6sVM2M.js";import"./focus-DhkBmn3-.js";import"./Button-BRnHCNBZ.js";import"./breakpoints-DsDfYkBF.js";import"./Icon-DfOZwoJb.js";import"./Spinner-CUqAq-Pn.js";import"./use-is-after-initial-mount-DD0LBRFR.js";import"./context-mLi4YNtT.js";import"./hooks-KMyVA0IW.js";import"./context-D6iXLSRD.js";import"./use-toggle-CFiziXYz.js";import"./Popover-C0687k05.js";import"./types-B6k7La2U.js";import"./Box-B1w_vr2o.js";import"./Scrollable-C6r34pLa.js";import"./index-DHHUZ-3A.js";import"./context-CUGBOWdW.js";import"./EventListener-Ch46rYtk.js";import"./KeypressListener-CkR6MueP.js";import"./Tooltip-Bnsbj5jj.js";import"./context-CvKcu416.js";import"./ActionList-dyImMudF.js";import"./Badge-C8SXRHoK.js";import"./InlineStack-D40BC9ks.js";import"./TextField-BpAWhFX9.js";import"./use-event-listener-pp9uJY64.js";import"./Labelled-BsDPBwP-.js";import"./InlineError-SKpdvg5n.js";import"./utils-DGKULhVP.js";import"./hooks-Bm6Wywx2.js";import"./context-DRh4ibLU.js";import"./Pagination-DJIWLAuz.js";import"./ButtonGroup-CfdChKi4.js";import"./within-content-context-DSkiGakq.js";const ar={title:"Polaris/Layout/Page",parameters:{layout:"fullscreen"}},n={render:()=>r.jsx(e,{title:"Products",children:r.jsx(i,{children:r.jsxs(c,{gap:"200",children:[r.jsx(t,{as:"h3",variant:"headingMd",children:"Product inventory"}),r.jsx(t,{as:"p",variant:"bodyMd",children:"Manage your product catalog and inventory levels."})]})})})},o={render:()=>r.jsx(e,{title:"Product Details",backAction:{content:"Products",url:"#"},children:r.jsx(i,{children:r.jsxs(c,{gap:"200",children:[r.jsx(t,{as:"h3",variant:"headingMd",children:"Edit product"}),r.jsx(t,{as:"p",variant:"bodyMd",children:"Update product information and pricing."})]})})})},a={render:()=>r.jsx(e,{title:"Order #1234",primaryAction:{content:"Save",onAction:()=>{}},secondaryActions:[{content:"Duplicate",onAction:()=>{}},{content:"Archive",onAction:()=>{}}],children:r.jsx(i,{children:r.jsxs(c,{gap:"200",children:[r.jsx(t,{as:"h3",variant:"headingMd",children:"Order details"}),r.jsx(t,{as:"p",variant:"bodyMd",children:"View and manage order information."})]})})})};var d,s,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Page title="Products">
      <Card>
        <BlockStack gap="200">
          <Text as="h3" variant="headingMd">
            Product inventory
          </Text>
          <Text as="p" variant="bodyMd">
            Manage your product catalog and inventory levels.
          </Text>
        </BlockStack>
      </Card>
    </Page>
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var m,l,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Page title="Product Details" backAction={{
    content: "Products",
    url: "#"
  }}>
      <Card>
        <BlockStack gap="200">
          <Text as="h3" variant="headingMd">
            Edit product
          </Text>
          <Text as="p" variant="bodyMd">
            Update product information and pricing.
          </Text>
        </BlockStack>
      </Card>
    </Page>
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,x,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Page title="Order #1234" primaryAction={{
    content: "Save",
    onAction: () => {}
  }} secondaryActions={[{
    content: "Duplicate",
    onAction: () => {}
  }, {
    content: "Archive",
    onAction: () => {}
  }]}>
      <Card>
        <BlockStack gap="200">
          <Text as="h3" variant="headingMd">
            Order details
          </Text>
          <Text as="p" variant="bodyMd">
            View and manage order information.
          </Text>
        </BlockStack>
      </Card>
    </Page>
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const er=["Basic","WithBackAction","WithActions"];export{n as Basic,a as WithActions,o as WithBackAction,er as __namedExportsOrder,ar as default};
