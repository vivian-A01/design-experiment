import{j as n}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as t}from"./index-ChEI-nsM.js";import{M as r}from"./index-gaPx6oo5.js";import"./index-DRjF_FHU.js";import"./iframe-ClZulfIc.js";import"./index-DHHUZ-3A.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Components/Button/Accessibility"}),`
`,n.jsx(e.h1,{id:"button-accessibility",children:"Button Accessibility"}),`
`,n.jsx(e.p,{children:"The Button component is built with accessibility in mind, following WCAG 2.1 Level AA guidelines and Polaris accessibility standards."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"accessibility-features",children:"Accessibility Features"}),`
`,n.jsx(e.h3,{id:"-keyboard-navigation",children:"✅ Keyboard Navigation"}),`
`,n.jsx(e.p,{children:"All buttons are fully keyboard accessible:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tab"}),": Move focus to the button"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Shift + Tab"}),": Move focus away from the button"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Enter"})," or ",n.jsx(e.strong,{children:"Space"}),": Activate the button"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// All buttons are keyboard accessible by default
<Button variant="primary">Save Product</Button>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"-screen-reader-support",children:"✅ Screen Reader Support"}),`
`,n.jsx(e.p,{children:"Buttons provide proper context for screen reader users:"}),`
`,n.jsx(e.h4,{id:"text-buttons",children:"Text Buttons"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// Clear, descriptive text is automatically announced
<Button variant="primary">Add Product</Button>
// Screen reader announces: "Add Product, button"
`})}),`
`,n.jsx(e.h4,{id:"icon-only-buttons",children:"Icon-Only Buttons"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ALWAYS provide accessibilityLabel for icon-only buttons
<Button icon="plus" accessibilityLabel="Add product" />
// Screen reader announces: "Add product, button"
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"❌ Bad Example:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// Missing accessibility label - screen reader only announces "button"
<Button icon="plus" />
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"✅ Good Example:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// Clear accessibility label provided
<Button icon="duplicate" accessibilityLabel="Duplicate product" />
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"-focus-indicators",children:"✅ Focus Indicators"}),`
`,n.jsx(e.p,{children:"Buttons display a visible focus ring when keyboard focused:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default focus"}),": Blue outline (3px, rgba(1, 113, 233, 0.35))"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Critical focus"}),": Red outline for destructive actions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus visible only on keyboard navigation"})," (not on mouse click)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// Focus indicator is automatic
<Button variant="primary">Save</Button>

// Critical actions get red focus ring
<Button variant="primary" tone="critical">Delete</Button>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"-loading-states",children:"✅ Loading States"}),`
`,n.jsx(e.p,{children:"When buttons are in loading state:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Button is automatically disabled"}),`
`,n.jsx(e.li,{children:"Screen reader users are notified of loading state"}),`
`,n.jsx(e.li,{children:"Visual spinner indicates processing"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button loading variant="primary">
  Saving product...
</Button>
// Screen reader announces: "Saving product..., button, busy"
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"-disabled-state",children:"✅ Disabled State"}),`
`,n.jsx(e.p,{children:"Disabled buttons:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Cannot receive focus"}),`
`,n.jsx(e.li,{children:'Are announced as "disabled" by screen readers'}),`
`,n.jsx(e.li,{children:"Have reduced opacity for visual indication"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button disabled>Save draft</Button>
// Screen reader announces: "Save draft, button, disabled"
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"aria-attributes",children:"ARIA Attributes"}),`
`,n.jsx(e.p,{children:"The Button component automatically applies appropriate ARIA attributes:"}),`
`,n.jsxs(e.p,{children:[`| State | ARIA Attribute | Value |
|-------|---------------|-------|
| Loading | `,n.jsx(e.code,{children:"aria-busy"})," | ",n.jsx(e.code,{children:"true"}),` |
| Disabled | `,n.jsx(e.code,{children:"aria-disabled"})," | ",n.jsx(e.code,{children:"true"}),` |
| Pressed (toggle) | `,n.jsx(e.code,{children:"aria-pressed"})," | ",n.jsx(e.code,{children:"true"}),"/",n.jsx(e.code,{children:"false"})," |"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"color-contrast",children:"Color Contrast"}),`
`,n.jsx(e.p,{children:"All button variants meet WCAG 2.1 Level AA color contrast requirements:"}),`
`,n.jsx(e.h3,{id:"primary-button",children:"Primary Button"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Background"}),": #0171E9 (blue)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Text"}),": #FFFFFF (white)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Contrast ratio"}),": 4.58:1 ✅ (Passes AA for large text)"]}),`
`]}),`
`,n.jsx(e.h3,{id:"secondary-button",children:"Secondary Button"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Background"}),": #FFFFFF (white)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Border"}),": #C9CCCF (gray)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Text"}),": #202223 (dark gray)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Contrast ratio"}),": 15.8:1 ✅ (Passes AAA)"]}),`
`]}),`
`,n.jsx(e.h3,{id:"critical-button",children:"Critical Button"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Background"}),": #E01A1A (red)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Text"}),": #FFFFFF (white)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Contrast ratio"}),": 5.11:1 ✅ (Passes AA)"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsx(e.h3,{id:"-do",children:"✅ DO"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use clear, action-oriented labels"}),': "Add Product", "Save Changes", "Delete Item"']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Provide accessibility labels for icon-only buttons"}),": Use ",n.jsx(e.code,{children:"accessibilityLabel"})," prop"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use appropriate tone for destructive actions"}),": ",n.jsx(e.code,{children:'tone="critical"'})," for delete actions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Indicate loading states"}),": Use ",n.jsx(e.code,{children:"loading"})," prop during async operations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use semantic HTML button types"}),": ",n.jsx(e.code,{children:'type="submit"'})," for form submissions"]}),`
`]}),`
`,n.jsx(e.h3,{id:"-dont",children:"❌ DON'T"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use vague labels"}),': Avoid "Click here", "Submit", "OK"']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Forget accessibility labels on icon buttons"}),": Always provide ",n.jsx(e.code,{children:"accessibilityLabel"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Nest buttons inside buttons"}),": Invalid HTML and confusing for screen readers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use buttons for navigation"}),": Use ",n.jsx(e.code,{children:"href"})," prop to make it a link instead"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Disable buttons without explanation"}),": Provide context why a button is disabled"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"accessible-form-submission",children:"Accessible Form Submission"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<form onSubmit={handleSubmit}>
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
`})}),`
`,n.jsx(e.h3,{id:"accessible-icon-only-actions",children:"Accessible Icon-Only Actions"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div role="toolbar" aria-label="Product actions">
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
`})}),`
`,n.jsx(e.h3,{id:"accessible-delete-confirmation",children:"Accessible Delete Confirmation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div role="dialog" aria-labelledby="delete-title">
  <h2 id="delete-title">Delete Product?</h2>
  <p>This action cannot be undone.</p>

  <div style={{ display: 'flex', gap: '12px' }}>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary" tone="critical">
      Delete Product
    </Button>
  </div>
</div>
`})}),`
`,n.jsx(e.h3,{id:"accessible-loading-state",children:"Accessible Loading State"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function SaveButton() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveProduct();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Button
      variant="primary"
      loading={isSaving}
      onClick={handleSave}
    >
      {isSaving ? 'Saving...' : 'Save Product'}
    </Button>
  );
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"testing-accessibility",children:"Testing Accessibility"}),`
`,n.jsx(e.h3,{id:"storybook-a11y-panel",children:"Storybook A11y Panel"}),`
`,n.jsx(e.p,{children:"Use the Accessibility panel in Storybook to check for issues:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Navigate to any Button story"}),`
`,n.jsxs(e.li,{children:["Open the ",n.jsx(e.strong,{children:"Accessibility"})," tab (bottom panel)"]}),`
`,n.jsx(e.li,{children:"Review violations, passes, and incomplete checks"}),`
`,n.jsx(e.li,{children:"Fix any violations before using in production"}),`
`]}),`
`,n.jsx(e.h3,{id:"manual-testing",children:"Manual Testing"}),`
`,n.jsx(e.h4,{id:"keyboard-testing",children:"Keyboard Testing"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Tab to the button"}),`
`,n.jsx(e.li,{children:"Press Enter or Space to activate"}),`
`,n.jsx(e.li,{children:"Verify focus indicator is visible"}),`
`,n.jsx(e.li,{children:"Verify button performs expected action"}),`
`]}),`
`,n.jsx(e.h4,{id:"screen-reader-testing",children:"Screen Reader Testing"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Use NVDA (Windows), JAWS (Windows), or VoiceOver (macOS)"}),`
`,n.jsx(e.li,{children:"Navigate to button with Tab"}),`
`,n.jsxs(e.li,{children:["Verify screen reader announces:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Button text or accessibility label"}),`
`,n.jsx(e.li,{children:'"Button" role'}),`
`,n.jsx(e.li,{children:"Current state (disabled, busy, etc.)"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"visual-testing",children:"Visual Testing"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Verify sufficient color contrast"}),`
`,n.jsx(e.li,{children:"Check focus indicator visibility"}),`
`,n.jsx(e.li,{children:"Verify disabled state is visually clear"}),`
`,n.jsx(e.li,{children:"Check loading spinner is visible"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"wcag-21-compliance",children:"WCAG 2.1 Compliance"}),`
`,n.jsx(e.p,{children:"The Button component meets the following WCAG 2.1 Level AA success criteria:"}),`
`,n.jsx(e.p,{children:`| Criterion | Level | Status |
|-----------|-------|--------|
| 1.4.3 Contrast (Minimum) | AA | ✅ Pass |
| 2.1.1 Keyboard | A | ✅ Pass |
| 2.1.2 No Keyboard Trap | A | ✅ Pass |
| 2.4.7 Focus Visible | AA | ✅ Pass |
| 3.2.4 Consistent Identification | AA | ✅ Pass |
| 4.1.2 Name, Role, Value | A | ✅ Pass |`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.w3.org/WAI/WCAG21/quickref/",rel:"nofollow",children:"WCAG 2.1 Guidelines"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://polaris.shopify.com/foundations/accessibility",rel:"nofollow",children:"Polaris Accessibility"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role",rel:"nofollow",children:"MDN Button Accessibility"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://webaim.org/techniques/keyboard/",rel:"nofollow",children:"WebAIM Button Accessibility"})}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"support",children:"Support"}),`
`,n.jsx(e.p,{children:"If you encounter accessibility issues:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Check the Storybook A11y panel for violations"}),`
`,n.jsx(e.li,{children:"Review this documentation for best practices"}),`
`,n.jsx(e.li,{children:"Test with keyboard and screen readers"}),`
`,n.jsx(e.li,{children:"Report issues to the design system team"}),`
`]})]})}function j(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
