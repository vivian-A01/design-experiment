import{j as n}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as i}from"./index-ChEI-nsM.js";import{M as r}from"./index-gaPx6oo5.js";import"./index-DRjF_FHU.js";import"./iframe-ClZulfIc.js";import"./index-DHHUZ-3A.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";function o(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Getting Started"}),`
`,n.jsx(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(e.p,{children:"Learn how to use the Polaris Design Library in your React application."}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:"First, install the required packages:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @your-org/polaris-design-library @shopify/polaris
`})}),`
`,n.jsx(e.h2,{id:"setup",children:"Setup"}),`
`,n.jsx(e.h3,{id:"1-import-polaris-web-components",children:"1. Import Polaris Web Components"}),`
`,n.jsxs(e.p,{children:["In your application's entry point (e.g., ",n.jsx(e.code,{children:"main.tsx"}),", ",n.jsx(e.code,{children:"index.tsx"}),", or ",n.jsx(e.code,{children:"_app.tsx"}),"), import the Polaris web components:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// main.tsx or index.tsx
import '@shopify/polaris/build/esm/components';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
`})}),`
`,n.jsx(e.p,{children:"For Next.js:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// pages/_app.tsx
import '@shopify/polaris/build/esm/components';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
`})}),`
`,n.jsx(e.h3,{id:"2-import-components",children:"2. Import Components"}),`
`,n.jsx(e.p,{children:"Import components from the library:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@your-org/polaris-design-library';
`})}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.h3,{id:"simple-button",children:"Simple Button"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@your-org/polaris-design-library';

function MyComponent() {
  return <Button>Click me</Button>;
}
`})}),`
`,n.jsx(e.h3,{id:"button-with-event-handler",children:"Button with Event Handler"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@your-org/polaris-design-library';

function MyComponent() {
  const handleClick = (event: Event) => {
    console.log('Button clicked!', event);
  };

  return (
    <Button variant="primary" onClick={handleClick}>
      Save Product
    </Button>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"button-with-icon",children:"Button with Icon"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@your-org/polaris-design-library';

function MyComponent() {
  return (
    <Button variant="primary" icon="plus">
      Add Product
    </Button>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"loading-state",children:"Loading State"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@your-org/polaris-design-library';
import { useState } from 'react';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await saveProduct();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button variant="primary" loading={isLoading} onClick={handleSave}>
      Save Product
    </Button>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"typescript-support",children:"TypeScript Support"}),`
`,n.jsx(e.p,{children:"The library is built with TypeScript and provides full type definitions:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, type ButtonProps } from '@your-org/polaris-design-library';

// TypeScript will autocomplete and type-check all props
const MyButton = (props: ButtonProps) => {
  return <Button {...props} />;
};

// Example with specific types
const handleClick = (event: Event) => {
  console.log('Clicked!', event.currentTarget);
};

<Button
  variant="primary"     // Type: 'auto' | 'primary' | 'secondary' | 'tertiary'
  tone="critical"       // Type: 'auto' | 'neutral' | 'critical'
  icon="plus"           // Type: ButtonIcon (string literal union)
  disabled={false}      // Type: boolean
  loading={false}       // Type: boolean
  onClick={handleClick} // Type: (event: Event) => void
>
  Save
</Button>
`})}),`
`,n.jsx(e.h2,{id:"common-patterns",children:"Common Patterns"}),`
`,n.jsx(e.h3,{id:"form-actions",children:"Form Actions"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@your-org/polaris-design-library';

function ProductForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" type="button">
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Save Product
        </Button>
      </div>
    </form>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"destructive-actions",children:"Destructive Actions"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@your-org/polaris-design-library';

function DeleteConfirmation({ onCancel, onConfirm }) {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant="secondary" onClick={onCancel}>
        Cancel
      </Button>
      <Button variant="primary" tone="critical" onClick={onConfirm}>
        Delete Product
      </Button>
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"navigation-with-link-button",children:"Navigation with Link Button"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@your-org/polaris-design-library';

function Navigation() {
  return (
    <div>
      <Button href="/products" icon="product">
        View Products
      </Button>

      <Button href="https://help.shopify.com" target="_blank">
        Help Documentation
      </Button>
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"icon-only-buttons-accessible",children:"Icon-Only Buttons (Accessible)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@your-org/polaris-design-library';

function Toolbar() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button
        icon="duplicate"
        variant="tertiary"
        accessibilityLabel="Duplicate product"
      />
      <Button
        icon="view"
        variant="tertiary"
        accessibilityLabel="Preview product"
      />
      <Button
        icon="menu-horizontal"
        variant="tertiary"
        accessibilityLabel="More actions"
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"async-operations",children:"Async Operations"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@your-org/polaris-design-library';
import { useState } from 'react';

function BulkActions() {
  const [isExporting, setIsExporting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await exportSelectedProducts();
    } finally {
      setIsExporting(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteSelectedProducts();
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button
        variant="secondary"
        loading={isExporting}
        onClick={handleExport}
      >
        {isExporting ? 'Exporting...' : 'Export Selected'}
      </Button>
      <Button
        variant="primary"
        tone="critical"
        loading={isDeleting}
        onClick={handleDelete}
      >
        {isDeleting ? 'Deleting...' : 'Delete Selected'}
      </Button>
    </div>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"styling",children:"Styling"}),`
`,n.jsx(e.p,{children:"Components use Polaris design tokens internally and don't require additional styling. However, you can:"}),`
`,n.jsx(e.h3,{id:"add-custom-classes",children:"Add Custom Classes"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button className="my-custom-class" variant="primary">
  Custom Styled Button
</Button>
`})}),`
`,n.jsx(e.h3,{id:"add-inline-styles",children:"Add Inline Styles"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button style={{ marginTop: '20px' }} variant="primary">
  Button with Margin
</Button>
`})}),`
`,n.jsx(e.h3,{id:"layout-with-flexbox",children:"Layout with Flexbox"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Save</Button>
</div>
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsx(e.h3,{id:"-do",children:"✅ Do"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"accessibilityLabel"})," for icon-only buttons"]}),`
`,n.jsxs(e.li,{children:["Use appropriate ",n.jsx(e.code,{children:"variant"})," and ",n.jsx(e.code,{children:"tone"})," for visual hierarchy"]}),`
`,n.jsx(e.li,{children:"Show loading states during async operations"}),`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:'type="submit"'})," for form submission buttons"]}),`
`,n.jsx(e.li,{children:"Provide clear, action-oriented button labels"}),`
`]}),`
`,n.jsx(e.h3,{id:"-dont",children:"❌ Don't"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Don't nest buttons inside buttons"}),`
`,n.jsxs(e.li,{children:["Don't use buttons for navigation (use ",n.jsx(e.code,{children:"href"})," prop instead)"]}),`
`,n.jsx(e.li,{children:"Don't forget accessibility labels for icon-only buttons"}),`
`,n.jsx(e.li,{children:`Don't use vague labels like "Click here" or "Submit"`}),`
`]}),`
`,n.jsx(e.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,n.jsx(e.h3,{id:"components-not-rendering",children:"Components not rendering?"}),`
`,n.jsx(e.p,{children:"Make sure you've imported Polaris web components:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import '@shopify/polaris/build/esm/components';
`})}),`
`,n.jsx(e.h3,{id:"typescript-errors",children:"TypeScript errors?"}),`
`,n.jsx(e.p,{children:"Ensure you're using the correct prop types:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import type { ButtonProps } from '@your-org/polaris-design-library';
`})}),`
`,n.jsx(e.h3,{id:"events-not-firing",children:"Events not firing?"}),`
`,n.jsx(e.p,{children:"Web component events use native Event objects, not React SyntheticEvents:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✅ Correct
const handleClick = (event: Event) => {
  console.log(event.currentTarget);
};

// ❌ Incorrect
const handleClick = (event: React.MouseEvent) => {
  // Won't work with web components
};
`})}),`
`,n.jsx(e.h2,{id:"next-steps",children:"Next Steps"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Explore the ",n.jsx(e.a,{href:"?path=/docs/components-button--docs",children:"Button component"})," examples"]}),`
`,n.jsxs(e.li,{children:["Read the ",n.jsx(e.a,{href:"?path=/docs/components-button--docs",children:"Component API"})," documentation"]}),`
`,n.jsxs(e.li,{children:["Check out the ",n.jsx(e.a,{href:"?path=/story/components-button--playground",children:"Playground"})," to experiment"]}),`
`]}),`
`,n.jsx(e.h2,{id:"need-help",children:"Need Help?"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/your-org/polaris-design-library/issues",rel:"nofollow",children:"GitHub Issues"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://polaris.shopify.com/",rel:"nofollow",children:"Polaris Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://shopify.dev/docs/api/app-home/polaris-web-components",rel:"nofollow",children:"Polaris Web Components API"})}),`
`]})]})}function x(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{x as default};
