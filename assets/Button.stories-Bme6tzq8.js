import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as B,R as Me}from"./index-DRjF_FHU.js";function Je(r){const x=B.forwardRef((T,i)=>{const{children:$e,className:Ge,style:He,...I}=T,w=B.useRef(null);return B.useEffect(()=>{i&&(typeof i=="function"?i(w.current):i.current=w.current)},[i]),B.useEffect(()=>{const S=w.current;if(!S)return;const k=[];return Object.entries(I).forEach(([a,n])=>{if(a.startsWith("on")&&typeof n=="function"){const j=a.slice(2).toLowerCase();S.addEventListener(j,n),k.push([j,n])}else if(n!=null)try{S[a]=n}catch(j){console.warn(`Failed to set property ${a} on ${r}:`,j)}}),()=>{k.forEach(([a,n])=>{S.removeEventListener(a,n)})}},[I]),Me.createElement(r,{ref:w,className:Ge,style:He},$e)});return x.displayName=`WebComponent(${r})`,x}const t=B.forwardRef((r,x)=>{const T=Je("s-button");return e.jsx(T,{ref:x,...r})});t.displayName="Button";t.__docgenInfo={description:`Button component wrapper for Polaris Web Component \`<s-button>\`

Triggers actions or events, such as submitting forms, opening dialogs, or
navigating to other pages. Use Button to let users perform specific tasks or
initiate interactions throughout the interface. Buttons can also function as
links, guiding users to internal or external destinations.

@example
\`\`\`tsx
// Basic button
<Button>Save</Button>

// Primary button with icon
<Button variant="primary" icon="plus">Add Product</Button>

// Critical action button
<Button variant="primary" tone="critical">Delete</Button>

// Link button
<Button href="/products">View Products</Button>

// Loading state
<Button loading>Saving...</Button>

// Icon-only button
<Button icon="plus" accessibilityLabel="Add product" />
\`\`\``,methods:[],displayName:"Button",props:{accessibilityLabel:{required:!1,tsType:{name:"string"},description:`A label that describes the purpose or contents of the Button.
It will be read to users using assistive technologies such as screen readers.

Use this when using only an icon or the Button text is not enough context
for users using assistive technologies.`},command:{required:!1,tsType:{name:"union",raw:"'--auto' | '--show' | '--hide' | '--toggle'",elements:[{name:"literal",value:"'--auto'"},{name:"literal",value:"'--show'"},{name:"literal",value:"'--hide'"},{name:"literal",value:"'--toggle'"}]},description:"Sets the action the command should take when this clickable is activated.\n\n- `--auto`: a default action for the target component.\n- `--show`: shows the target component.\n- `--hide`: hides the target component.\n- `--toggle`: toggles the target component.\n\n@default '--auto'"},commandFor:{required:!1,tsType:{name:"string"},description:"Sets the element the commandFor should act on when this clickable is activated."},disabled:{required:!1,tsType:{name:"boolean"},description:`Disables the Button meaning it cannot be clicked or receive focus.

@default false`},download:{required:!1,tsType:{name:"string"},description:"Causes the browser to treat the linked URL as a download with the string being the file name.\nDownload only works for same-origin URLs or the `blob:` and `data:` schemes."},href:{required:!1,tsType:{name:"string"},description:"The URL to link to.\n\n- If set, it will navigate to the location specified by `href` after executing the `click` event.\n- If a `commandFor` is set, the `command` will be executed instead of the navigation."},icon:{required:!1,tsType:{name:"union",raw:`| ''
| 'plus'
| 'replace'
| 'search'
| 'split'
| 'link'
| 'edit'
| 'product'
| 'variant'
| 'collection'
| 'select'
| 'info'
| 'incomplete'
| 'complete'
| 'color'
| 'money'
| 'adjust'
| 'affiliate'
| 'airplane'
| 'alert-bubble'
| 'alert-circle'
| 'alert-diamond'
| 'alert-location'
| 'alert-octagon'
| 'alert-octagon-filled'
| 'alert-triangle'
| 'duplicate'
| 'view'
| 'menu-horizontal'
| 'order'`,elements:[{name:"literal",value:"''"},{name:"literal",value:"'plus'"},{name:"literal",value:"'replace'"},{name:"literal",value:"'search'"},{name:"literal",value:"'split'"},{name:"literal",value:"'link'"},{name:"literal",value:"'edit'"},{name:"literal",value:"'product'"},{name:"literal",value:"'variant'"},{name:"literal",value:"'collection'"},{name:"literal",value:"'select'"},{name:"literal",value:"'info'"},{name:"literal",value:"'incomplete'"},{name:"literal",value:"'complete'"},{name:"literal",value:"'color'"},{name:"literal",value:"'money'"},{name:"literal",value:"'adjust'"},{name:"literal",value:"'affiliate'"},{name:"literal",value:"'airplane'"},{name:"literal",value:"'alert-bubble'"},{name:"literal",value:"'alert-circle'"},{name:"literal",value:"'alert-diamond'"},{name:"literal",value:"'alert-location'"},{name:"literal",value:"'alert-octagon'"},{name:"literal",value:"'alert-octagon-filled'"},{name:"literal",value:"'alert-triangle'"},{name:"literal",value:"'duplicate'"},{name:"literal",value:"'view'"},{name:"literal",value:"'menu-horizontal'"},{name:"literal",value:"'order'"}]},description:"The type of icon to be displayed in the Button."},interestFor:{required:!1,tsType:{name:"string"},description:"Sets the element the interestFor should act on when this clickable is activated."},loading:{required:!1,tsType:{name:"boolean"},description:`Replaces content with a loading indicator while a background action is being performed.
This also disables the Button.

@default false`},target:{required:!1,tsType:{name:"union",raw:"'auto' | '_blank' | '_self' | '_parent' | '_top' | string",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'_blank'"},{name:"literal",value:"'_self'"},{name:"literal",value:"'_parent'"},{name:"literal",value:"'_top'"},{name:"string"}]},description:`Specifies where to display the linked URL.

@default 'auto'`},tone:{required:!1,tsType:{name:"union",raw:"'auto' | 'neutral' | 'critical'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'critical'"}]},description:`Sets the tone of the Button based on the intention of the information being conveyed.

@default 'auto'`},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"The behavior of the Button.\n\n- `submit`: Used to indicate the component acts as a submit button, meaning it submits the closest form.\n- `button`: Used to indicate the component acts as a button, meaning it has no default action.\n- `reset`: Used to indicate the component acts as a reset button, meaning it resets the closest form.\n\nThis property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.\n\n@default 'button'"},variant:{required:!1,tsType:{name:"union",raw:"'auto' | 'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:`Changes the visual appearance of the Button.

@default 'auto' - the variant is automatically determined by the Button's context`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the Button."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:"Event handler for blur events"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:"Event handler for click events"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:"Event handler for focus events"}}};const Xe={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:"Triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use Button to let users perform specific tasks or initiate interactions throughout the interface. Buttons can also function as links, guiding users to internal or external destinations."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["auto","primary","secondary","tertiary"],description:"Changes the visual appearance of the Button",table:{defaultValue:{summary:"auto"}}},tone:{control:"select",options:["auto","neutral","critical"],description:"Sets the tone of the Button based on the intention",table:{defaultValue:{summary:"auto"}}},type:{control:"select",options:["button","submit","reset"],description:"The behavior of the Button",table:{defaultValue:{summary:"button"}}},disabled:{control:"boolean",description:"Disables the Button",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Shows loading indicator and disables the Button",table:{defaultValue:{summary:"false"}}},icon:{control:"text",description:"The type of icon to be displayed in the Button"},accessibilityLabel:{control:"text",description:"A label for screen readers"},href:{control:"text",description:"The URL to link to"},target:{control:"select",options:["auto","_blank","_self","_parent","_top"],description:"Specifies where to display the linked URL",table:{defaultValue:{summary:"auto"}}}}},o={args:{children:"Save"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"tertiary",children:"Tertiary"}),e.jsx(t,{variant:"auto",children:"Auto"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{tone:"critical",children:"Delete"}),e.jsx(t,{tone:"neutral",children:"Save draft"}),e.jsx(t,{children:"Continue"})]})},c={args:{icon:"plus",children:"Add product"}},d={args:{icon:"plus",accessibilityLabel:"Add product"}},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{loading:!0,variant:"primary",children:"Saving product..."}),e.jsx(t,{loading:!0,variant:"secondary",children:"Updating 247 variants..."}),e.jsx(t,{loading:!0,tone:"neutral",children:"Processing shipment..."})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{disabled:!0,children:"Save draft"}),e.jsx(t,{type:"submit",variant:"primary",children:"Save product"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{href:"javascript:void(0)",children:"View products"}),e.jsx(t,{href:"javascript:void(0)",target:"_blank",children:"Help docs"}),e.jsx(t,{href:"javascript:void(0)",download:"sales-report.csv",children:"Export data"})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[e.jsx(t,{variant:"secondary",children:"Cancel"}),e.jsx(t,{variant:"primary",type:"submit",children:"Save product"})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:"secondary",children:"Cancel"}),e.jsx(t,{variant:"primary",tone:"critical",children:"Delete variant"})]})},g={args:{href:"javascript:void(0)",icon:"order",children:"View orders"}},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:"secondary",children:"Export selected"}),e.jsx(t,{variant:"primary",tone:"critical",children:"Delete selected"})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{icon:"duplicate",variant:"tertiary",accessibilityLabel:"Duplicate product"}),e.jsx(t,{icon:"view",variant:"tertiary",accessibilityLabel:"Preview product"}),e.jsx(t,{icon:"menu-horizontal",variant:"tertiary",accessibilityLabel:"More actions"})]})},b={args:{children:"Click me",variant:"primary",tone:"auto",disabled:!1,loading:!1}};var L,C,E,q,R;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Save'
  }
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:`Demonstrates a simple button with default styling, automatically determining
its visual variant and using a clear, action-oriented label.`,...(R=(q=o.parameters)==null?void 0:q.docs)==null?void 0:R.description}}};var D,_,U,F,P;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="auto">Auto</Button>
    </div>
}`,...(U=(_=s.parameters)==null?void 0:_.docs)==null?void 0:U.source},description:{story:`Showcases different button variants with varying visual emphasis, helping
merchants understand action priorities through distinct styling.`,...(P=(F=s.parameters)==null?void 0:F.docs)==null?void 0:P.description}}};var V,W,A,N,O;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button tone="critical">Delete</Button>
      <Button tone="neutral">Save draft</Button>
      <Button>Continue</Button>
    </div>
}`,...(A=(W=l.parameters)==null?void 0:W.docs)==null?void 0:A.source},description:{story:`Illustrates button tones that signal the semantic importance and potential
impact of different actions through color and styling.`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.description}}};var z,$,G,H,M;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    children: 'Add product'
  }
}`,...(G=($=c.parameters)==null?void 0:$.docs)==null?void 0:G.source},description:{story:`Showcases a button that combines a descriptive text label with an intuitive
icon, enhancing visual communication of the action.`,...(M=(H=c.parameters)==null?void 0:H.docs)==null?void 0:M.description}}};var J,K,Q,X,Y;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    icon: 'plus',
    accessibilityLabel: 'Add product'
  }
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:`Demonstrates an icon-only button with an accessibility label, providing a
compact interface that remains screen reader friendly.`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,te,ne,ae;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button loading variant="primary">
        Saving product...
      </Button>
      <Button loading variant="secondary">
        Updating 247 variants...
      </Button>
      <Button loading tone="neutral">
        Processing shipment...
      </Button>
    </div>
}`,...(te=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:`Illustrates buttons in various loading states, providing visual feedback
during asynchronous operations.`,...(ae=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};var re,ie,oe,se,le;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button disabled>Save draft</Button>
      <Button type="submit" variant="primary">
        Save product
      </Button>
    </div>
}`,...(oe=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:oe.source},description:{story:`Demonstrates buttons in different interaction states, showing how to
represent disabled controls and submit actions within forms.`,...(le=(se=p.parameters)==null?void 0:se.docs)==null?void 0:le.description}}};var ce,de,ue,pe,me;m.parameters={...m.parameters,docs:{...(ce=m.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button href="javascript:void(0)">View products</Button>
      <Button href="javascript:void(0)" target="_blank">
        Help docs
      </Button>
      <Button href="javascript:void(0)" download="sales-report.csv">
        Export data
      </Button>
    </div>
}`,...(ue=(de=m.parameters)==null?void 0:de.docs)==null?void 0:ue.source},description:{story:`Showcases buttons that act as hyperlinks, supporting navigation to different
pages, external resources, and file downloads.`,...(me=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var he,ve,ge,fe,ye;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-end'
  }}>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary" type="submit">
        Save product
      </Button>
    </div>
}`,...(ge=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:ge.source},description:{story:`Demonstrates a button group with carefully aligned actions, showing how to
create a clear visual hierarchy for form submission and cancellation.`,...(ye=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:ye.description}}};var be,Be,xe,we,Se;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary" tone="critical">
        Delete variant
      </Button>
    </div>
}`,...(xe=(Be=v.parameters)==null?void 0:Be.docs)==null?void 0:xe.source},description:{story:`Illustrates a button pair for destructive actions, using a critical tone to
emphasize the potentially irreversible nature of the operation.`,...(Se=(we=v.parameters)==null?void 0:we.docs)==null?void 0:Se.description}}};var je,Te,Ie,ke,Le;g.parameters={...g.parameters,docs:{...(je=g.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    href: 'javascript:void(0)',
    icon: 'order',
    children: 'View orders'
  }
}`,...(Ie=(Te=g.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source},description:{story:`Showcases a navigation button with an icon, enabling quick access to
different sections of the interface.`,...(Le=(ke=g.parameters)==null?void 0:ke.docs)==null?void 0:Le.description}}};var Ce,Ee,qe,Re,De;f.parameters={...f.parameters,docs:{...(Ce=f.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button variant="secondary">Export selected</Button>
      <Button variant="primary" tone="critical">
        Delete selected
      </Button>
    </div>
}`,...(qe=(Ee=f.parameters)==null?void 0:Ee.docs)==null?void 0:qe.source},description:{story:"Demonstrates a button group for executing operations on multiple selected items.",...(De=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:De.description}}};var _e,Ue,Fe,Pe,Ve;y.parameters={...y.parameters,docs:{...(_e=y.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button icon="duplicate" variant="tertiary" accessibilityLabel="Duplicate product" />
      <Button icon="view" variant="tertiary" accessibilityLabel="Preview product" />
      <Button icon="menu-horizontal" variant="tertiary" accessibilityLabel="More actions" />
    </div>
}`,...(Fe=(Ue=y.parameters)==null?void 0:Ue.docs)==null?void 0:Fe.source},description:{story:`Showcases a set of compact, icon-only buttons with accessibility labels,
perfect for creating dense interfaces.`,...(Ve=(Pe=y.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.description}}};var We,Ae,Ne,Oe,ze;b.parameters={...b.parameters,docs:{...(We=b.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    variant: 'primary',
    tone: 'auto',
    disabled: false,
    loading: false
  }
}`,...(Ne=(Ae=b.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source},description:{story:"Interactive playground to experiment with different button configurations.",...(ze=(Oe=b.parameters)==null?void 0:Oe.docs)==null?void 0:ze.description}}};const Ye=["BasicUsage","Variants","Tones","WithIcon","IconOnly","LoadingState","FormStates","LinkButtons","FormSubmissionButtons","DeleteConfirmation","NavigationButtonWithIcon","ButtonGroupForBulkOperations","IconOnlyButtonsWithLabels","Playground"];export{o as BasicUsage,f as ButtonGroupForBulkOperations,v as DeleteConfirmation,p as FormStates,h as FormSubmissionButtons,d as IconOnly,y as IconOnlyButtonsWithLabels,m as LinkButtons,u as LoadingState,g as NavigationButtonWithIcon,b as Playground,l as Tones,s as Variants,c as WithIcon,Ye as __namedExportsOrder,Xe as default};
