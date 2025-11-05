import{j as n}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as o}from"./index-ChEI-nsM.js";import{M as r}from"./index-gaPx6oo5.js";import"./index-DRjF_FHU.js";import"./iframe-ClZulfIc.js";import"./index-DHHUZ-3A.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"polaris-design-library",children:"Polaris Design Library"}),`
`,n.jsxs(e.p,{children:["Welcome to the ",n.jsx(e.strong,{children:"Polaris Design Library"})," - a custom design system built on ",n.jsx(e.strong,{children:"Shopify Polaris Web Components"})," with React wrappers."]}),`
`,n.jsx(e.h2,{id:"what-is-this",children:"What is this?"}),`
`,n.jsxs(e.p,{children:["This library provides React components that wrap ",n.jsx(e.a,{href:"https://shopify.dev/docs/api/app-home/polaris-web-components",rel:"nofollow",children:"Shopify Polaris Web Components"}),", giving you:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Type-safe React components"})," with full TypeScript support"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Official Polaris design"})," from Shopify's design system"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Web Components foundation"})," for maximum compatibility"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Comprehensive documentation"})," with live examples"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Accessibility built-in"})," following WCAG standards"]}),`
`]}),`
`,n.jsx(e.h2,{id:"why-use-this-library",children:"Why use this library?"}),`
`,n.jsx(e.h3,{id:"1-react-friendly-api",children:"1. React-friendly API"}),`
`,n.jsx(e.p,{children:"Instead of working directly with web components:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- Direct web component usage -->
<s-button variant="primary" id="myButton">Click me</s-button>
<script>
  document.getElementById('myButton').addEventListener('click', handler);
<\/script>
`})}),`
`,n.jsx(e.p,{children:"Use familiar React syntax:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// React component usage
<Button variant="primary" onClick={handler}>
  Click me
</Button>
`})}),`
`,n.jsx(e.h3,{id:"2-typescript-support",children:"2. TypeScript Support"}),`
`,n.jsx(e.p,{children:"Get full autocomplete and type checking:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@your-org/polaris-design-library';

// TypeScript knows all available props
<Button
  variant="primary"    // autocomplete: 'auto' | 'primary' | 'secondary' | 'tertiary'
  tone="critical"      // autocomplete: 'auto' | 'neutral' | 'critical'
  icon="plus"          // autocomplete: all available icons
  loading={isLoading}  // type-checked boolean
  onClick={handleClick}
>
  Save Product
</Button>
`})}),`
`,n.jsx(e.h3,{id:"3-consistent-with-shopify-admin",children:"3. Consistent with Shopify Admin"}),`
`,n.jsx(e.p,{children:"All components follow Shopify's official design system, ensuring your app looks and feels like native Shopify admin."}),`
`,n.jsx(e.h2,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(e.h3,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @your-org/polaris-design-library @shopify/polaris
`})}),`
`,n.jsx(e.h3,{id:"setup",children:"Setup"}),`
`,n.jsx(e.p,{children:"Import Polaris web components in your app entry point:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// In your main.tsx or _app.tsx
import '@shopify/polaris/build/esm/components';
`})}),`
`,n.jsx(e.h3,{id:"use-components",children:"Use Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@your-org/polaris-design-library';

function MyComponent() {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Save
      </Button>
    </div>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"available-components",children:"Available Components"}),`
`,n.jsx(e.h3,{id:"actions",children:"Actions"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"})," - Triggers actions or navigates to other pages"]}),`
`]}),`
`,n.jsx(e.h3,{id:"forms",children:"Forms"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Coming soon: TextField, Select, Checkbox, Radio, etc."}),`
`]}),`
`,n.jsx(e.h3,{id:"layout",children:"Layout"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Coming soon: Card, Stack, Layout, etc."}),`
`]}),`
`,n.jsx(e.h3,{id:"feedback-indicators",children:"Feedback Indicators"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Coming soon: Badge, Spinner, Toast, etc."}),`
`]}),`
`,n.jsx(e.h2,{id:"architecture",children:"Architecture"}),`
`,n.jsx(e.h3,{id:"how-it-works",children:"How it works"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`React Component (Button)
    ↓
createWebComponentWrapper utility
    ↓
Polaris Web Component (<s-button>)
    ↓
Rendered in DOM
`})}),`
`,n.jsx(e.p,{children:"The library uses a lightweight wrapper utility that:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Maps React props to web component properties"}),`
`,n.jsx(e.li,{children:"Converts React events to web component event listeners"}),`
`,n.jsx(e.li,{children:"Handles ref forwarding"}),`
`,n.jsx(e.li,{children:"Provides TypeScript types"}),`
`]}),`
`,n.jsx(e.h3,{id:"benefits",children:"Benefits"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Small bundle size"})," - Only pay for what you use"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Framework agnostic foundation"})," - Web components work everywhere"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Future-proof"})," - Built on web standards"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Official Shopify design"})," - Always up to date with Polaris"]}),`
`]}),`
`,n.jsx(e.h2,{id:"contributing",children:"Contributing"}),`
`,n.jsxs(e.p,{children:["Want to add more components? See the ",n.jsx(e.a,{href:"https://github.com/your-org/polaris-design-library/blob/main/COMPONENT_GUIDE.md",rel:"nofollow",children:"Component Development Guide"}),"."]}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://polaris.shopify.com/",rel:"nofollow",children:"Shopify Polaris Design System"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://shopify.dev/docs/api/app-home/polaris-web-components",rel:"nofollow",children:"Polaris Web Components API"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/your-org/polaris-design-library",rel:"nofollow",children:"GitHub Repository"})}),`
`]}),`
`,n.jsx(e.h2,{id:"support",children:"Support"}),`
`,n.jsxs(e.p,{children:["Found a bug or have a feature request? ",n.jsx(e.a,{href:"https://github.com/your-org/polaris-design-library/issues",rel:"nofollow",children:"Open an issue"}),"."]})]})}function m(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{m as default};
