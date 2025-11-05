import{j as o}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";class E extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          background-color: var(--color-bg-primary, #ffffff);
          border: 1px solid var(--color-border, #e3e3e3);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: var(--shadow-card, 0px 1px 3px 0px rgba(0, 0, 0, 0.1));
          font-family: var(--font-family-sans, -apple-system, BlinkMacSystemFont, sans-serif);
        }

        :host(:hover) {
          box-shadow: var(--shadow-card-hovered, 0px 4px 6px -1px rgba(0, 0, 0, 0.1));
        }

        ::slotted([slot="title"]) {
          color: var(--color-text-primary, #000000);
          font-size: var(--font-size-xl, 20px);
          font-weight: var(--font-weight-bold, 700);
          margin: 0 0 1rem 0;
        }

        ::slotted(p) {
          color: var(--color-text-secondary, #303030);
          font-size: var(--font-size-base, 14px);
          line-height: var(--line-height-relaxed, 24px);
          margin: 0;
        }

        .card-actions {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border, #e3e3e3);
        }

        ::slotted([slot="actions"]) {
          display: flex;
          gap: 0.5rem;
        }
      </style>

      <slot name="title"></slot>
      <slot></slot>
      <div class="card-actions">
        <slot name="actions"></slot>
      </div>
    `)}}customElements.get("polaris-card")||customElements.define("polaris-card",E);E.__docgenInfo={description:`Polaris Card Web Component

A custom Web Component styled with Polaris design tokens.
Demonstrates how to use CSS custom properties from the design system.

Usage:
\`\`\`html
<polaris-card>
  <h2 slot="title">Card Title</h2>
  <p>Card content goes here</p>
</polaris-card>
\`\`\``,methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:null}],displayName:"PolarisCard"};class T extends HTMLElement{static get observedAttributes(){return["variant","disabled"]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners()}attributeChangedCallback(){this.render()}get variant(){return this.getAttribute("variant")||"secondary"}get disabled(){return this.hasAttribute("disabled")}setupEventListeners(){var s;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("button");e&&e.addEventListener("click",W=>{this.disabled||this.dispatchEvent(new CustomEvent("polaris-click",{bubbles:!0,composed:!0,detail:{originalEvent:W}}))})}getVariantStyles(){const e={primary:`
        background-color: var(--color-text-interactive, #0171E9);
        color: var(--color-bg-primary, #ffffff);
        border: none;
      `,secondary:`
        background-color: var(--color-bg-primary, #ffffff);
        color: var(--color-text-primary, #000000);
        border: 1px solid var(--color-border, #e3e3e3);
      `,critical:`
        background-color: var(--color-red-500, #E01A1A);
        color: var(--color-bg-primary, #ffffff);
        border: none;
      `};return e[this.variant]||e.secondary}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-block;
        }

        button {
          font-family: var(--font-family-sans, -apple-system, BlinkMacSystemFont, sans-serif);
          font-size: var(--font-size-base, 14px);
          font-weight: var(--font-weight-medium, 500);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: var(--shadow-button-default, inset 0px -1px 0px 0px rgba(0, 0, 0, 0.2));
          ${this.getVariantStyles()}
        }

        button:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        button:active:not(:disabled) {
          transform: translateY(0);
        }

        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background-color: var(--color-bg-subdued, #f7f7f7);
          color: var(--color-text-disabled, #8C9196);
        }

        button:focus-visible {
          outline: none;
          box-shadow: var(--shadow-focus, 0 0 0 3px rgba(1, 113, 233, 0.35));
        }
      </style>

      <button ${this.disabled?"disabled":""}>
        <slot></slot>
      </button>
    `,this.setupEventListeners())}}customElements.get("polaris-button")||customElements.define("polaris-button",T);T.__docgenInfo={description:`Polaris Button Web Component

A custom button Web Component styled with Polaris design tokens.
Supports multiple variants: primary, secondary, critical.

Usage:
\`\`\`html
<polaris-button variant="primary">Click me</polaris-button>
<polaris-button variant="critical">Delete</polaris-button>
<polaris-button disabled>Disabled</polaris-button>
\`\`\``,methods:[{name:"observedAttributes",docblock:null,modifiers:["static","get"],params:[],returns:null},{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:null},{name:"attributeChangedCallback",docblock:null,modifiers:[],params:[],returns:null},{name:"variant",docblock:null,modifiers:["get"],params:[],returns:null},{name:"disabled",docblock:null,modifiers:["get"],params:[],returns:null},{name:"setupEventListeners",docblock:null,modifiers:[],params:[],returns:null},{name:"getVariantStyles",docblock:null,modifiers:[],params:[],returns:null}],displayName:"PolarisButton"};const D={title:"Web Components/Polaris Components",parameters:{layout:"padded"}},r={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[o.jsx("h2",{style:{fontFamily:"var(--font-family-sans)",marginBottom:"0.5rem"},children:"Polaris Button Web Component"}),o.jsx("p",{style:{color:"var(--color-text-secondary)",marginBottom:"1rem"},children:"Custom Web Component styled with Polaris design tokens"}),o.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[o.jsx("polaris-button",{variant:"primary",children:"Primary Button"}),o.jsx("polaris-button",{variant:"secondary",children:"Secondary Button"}),o.jsx("polaris-button",{variant:"critical",children:"Critical Button"}),o.jsx("polaris-button",{disabled:!0,children:"Disabled Button"})]}),o.jsxs("div",{style:{marginTop:"2rem"},children:[o.jsx("h3",{style:{fontSize:"var(--font-size-lg)",marginBottom:"0.5rem"},children:"Usage:"}),o.jsx("pre",{style:{backgroundColor:"var(--color-gray-900)",color:"var(--color-gray-50)",padding:"1rem",borderRadius:"8px",fontFamily:"var(--font-family-mono)",fontSize:"var(--font-size-sm)",overflow:"auto"},children:`<polaris-button variant="primary">Click me</polaris-button>
<polaris-button variant="critical">Delete</polaris-button>
<polaris-button disabled>Disabled</polaris-button>`})]})]})},a={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[o.jsxs("div",{children:[o.jsx("h2",{style:{fontFamily:"var(--font-family-sans)",marginBottom:"0.5rem"},children:"Polaris Card Web Component"}),o.jsx("p",{style:{color:"var(--color-text-secondary)",marginBottom:"1rem"},children:"Custom Web Component with slots for flexible content"})]}),o.jsx("div",{style:{maxWidth:"600px"},children:o.jsxs("polaris-card",{children:[o.jsx("h2",{slot:"title",children:"Product Information"}),o.jsx("p",{children:"This card is built using Web Components and styled with Polaris design tokens. It supports multiple content slots for flexible layouts."}),o.jsxs("div",{slot:"actions",children:[o.jsx("polaris-button",{variant:"primary",children:"Save"}),o.jsx("polaris-button",{variant:"secondary",children:"Cancel"})]})]})}),o.jsx("div",{style:{maxWidth:"600px"},children:o.jsxs("polaris-card",{children:[o.jsx("h2",{slot:"title",children:"Another Card Example"}),o.jsxs("p",{children:["Cards automatically use CSS custom properties like ",o.jsx("code",{children:"--color-bg-primary"}),",",o.jsx("code",{children:"--shadow-card"}),", and ",o.jsx("code",{children:"--shadow-card-hovered"}),". Try hovering!"]})]})}),o.jsxs("div",{style:{marginTop:"1rem"},children:[o.jsx("h3",{style:{fontSize:"var(--font-size-lg)",marginBottom:"0.5rem"},children:"Usage:"}),o.jsx("pre",{style:{backgroundColor:"var(--color-gray-900)",color:"var(--color-gray-50)",padding:"1rem",borderRadius:"8px",fontFamily:"var(--font-family-mono)",fontSize:"var(--font-size-sm)",overflow:"auto"},children:`<polaris-card>
  <h2 slot="title">Card Title</h2>
  <p>Card content goes here</p>
  <div slot="actions">
    <polaris-button>Action</polaris-button>
  </div>
</polaris-card>`})]})]})},i={render:()=>{const t=e=>{alert(`Button clicked! Variant: ${e.target.variant}`)};return o.jsxs("div",{children:[o.jsx("h2",{style:{fontFamily:"var(--font-family-sans)",marginBottom:"1rem"},children:"Complete Layout Example"}),o.jsx("p",{style:{color:"var(--color-text-secondary)",marginBottom:"2rem"},children:"Demonstrating multiple Web Components working together"}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"1.5rem"},children:[o.jsxs("polaris-card",{children:[o.jsx("h2",{slot:"title",children:"User Profile"}),o.jsx("p",{style:{marginBottom:"1rem"},children:"Manage your account settings and preferences."}),o.jsx("div",{slot:"actions",children:o.jsx("polaris-button",{variant:"primary",onClick:t,children:"Edit Profile"})})]}),o.jsxs("polaris-card",{children:[o.jsx("h2",{slot:"title",children:"Notifications"}),o.jsx("p",{style:{marginBottom:"1rem"},children:"You have 3 unread notifications."}),o.jsx("div",{slot:"actions",children:o.jsx("polaris-button",{variant:"secondary",onClick:t,children:"View All"})})]}),o.jsxs("polaris-card",{children:[o.jsx("h2",{slot:"title",children:"Danger Zone"}),o.jsx("p",{style:{marginBottom:"1rem"},children:"Permanently delete your account and all data."}),o.jsx("div",{slot:"actions",children:o.jsx("polaris-button",{variant:"critical",onClick:t,children:"Delete Account"})})]})]}),o.jsxs("div",{style:{marginTop:"3rem"},children:[o.jsx("h3",{style:{fontSize:"var(--font-size-lg)",marginBottom:"1rem"},children:"How Web Components Use Design Tokens"}),o.jsxs("ul",{style:{listStyle:"disc",paddingLeft:"2rem",color:"var(--color-text-secondary)"},children:[o.jsxs("li",{children:["All colors reference CSS custom properties like ",o.jsx("code",{children:"var(--color-text-primary)"})]}),o.jsxs("li",{children:["Typography uses ",o.jsx("code",{children:"var(--font-family-sans)"}),", ",o.jsx("code",{children:"var(--font-size-base)"}),", etc."]}),o.jsxs("li",{children:["Shadows use ",o.jsx("code",{children:"var(--shadow-card)"})," and ",o.jsx("code",{children:"var(--shadow-button-default)"})]}),o.jsx("li",{children:"Tokens are applied globally, so components work anywhere in your app"}),o.jsx("li",{children:"Components include fallback values for environments without tokens"})]})]})]})}},n={render:()=>o.jsxs("div",{children:[o.jsx("h2",{style:{fontFamily:"var(--font-family-sans)",marginBottom:"1rem"},children:"Interactive Web Components"}),o.jsx("p",{style:{color:"var(--color-text-secondary)",marginBottom:"2rem"},children:"Click buttons to see custom events in action"}),o.jsxs("polaris-card",{children:[o.jsx("h2",{slot:"title",children:"Event Handling Example"}),o.jsxs("p",{style:{marginBottom:"1rem"},children:["These buttons dispatch custom ",o.jsx("code",{children:"polaris-click"})," events that bubble up through the DOM. Try clicking them!"]}),o.jsxs("div",{slot:"actions",style:{display:"flex",gap:"0.5rem"},children:[o.jsx("polaris-button",{variant:"primary",onClick:t=>{console.log("Primary button clicked:",t),alert("Primary button clicked! Check console for event details.")},children:"Primary Action"}),o.jsx("polaris-button",{variant:"secondary",onClick:t=>{console.log("Secondary button clicked:",t),alert("Secondary button clicked!")},children:"Secondary Action"}),o.jsx("polaris-button",{variant:"critical",onClick:t=>{confirm("Are you sure you want to perform this critical action?")&&(console.log("Critical action confirmed:",t),alert("Critical action executed!"))},children:"Critical Action"})]})]})]})};var l,c,d,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <h2 style={{
        fontFamily: 'var(--font-family-sans)',
        marginBottom: '0.5rem'
      }}>
          Polaris Button Web Component
        </h2>
        <p style={{
        color: 'var(--color-text-secondary)',
        marginBottom: '1rem'
      }}>
          Custom Web Component styled with Polaris design tokens
        </p>

        <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
          <polaris-button variant="primary">Primary Button</polaris-button>
          <polaris-button variant="secondary">Secondary Button</polaris-button>
          <polaris-button variant="critical">Critical Button</polaris-button>
          <polaris-button disabled>Disabled Button</polaris-button>
        </div>

        <div style={{
        marginTop: '2rem'
      }}>
          <h3 style={{
          fontSize: 'var(--font-size-lg)',
          marginBottom: '0.5rem'
        }}>
            Usage:
          </h3>
          <pre style={{
          backgroundColor: 'var(--color-gray-900)',
          color: 'var(--color-gray-50)',
          padding: '1rem',
          borderRadius: '8px',
          fontFamily: 'var(--font-family-mono)',
          fontSize: 'var(--font-size-sm)',
          overflow: 'auto'
        }}>
            {\`<polaris-button variant="primary">Click me</polaris-button>
<polaris-button variant="critical">Delete</polaris-button>
<polaris-button disabled>Disabled</polaris-button>\`}
          </pre>
        </div>
      </div>;
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:"Polaris Button Web Component",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var u,h,y,b,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
        <div>
          <h2 style={{
          fontFamily: 'var(--font-family-sans)',
          marginBottom: '0.5rem'
        }}>
            Polaris Card Web Component
          </h2>
          <p style={{
          color: 'var(--color-text-secondary)',
          marginBottom: '1rem'
        }}>
            Custom Web Component with slots for flexible content
          </p>
        </div>

        <div style={{
        maxWidth: '600px'
      }}>
          <polaris-card>
            <h2 slot="title">Product Information</h2>
            <p>
              This card is built using Web Components and styled with Polaris design tokens.
              It supports multiple content slots for flexible layouts.
            </p>
            <div slot="actions">
              <polaris-button variant="primary">Save</polaris-button>
              <polaris-button variant="secondary">Cancel</polaris-button>
            </div>
          </polaris-card>
        </div>

        <div style={{
        maxWidth: '600px'
      }}>
          <polaris-card>
            <h2 slot="title">Another Card Example</h2>
            <p>
              Cards automatically use CSS custom properties like <code>--color-bg-primary</code>,
              <code>--shadow-card</code>, and <code>--shadow-card-hovered</code>. Try hovering!
            </p>
          </polaris-card>
        </div>

        <div style={{
        marginTop: '1rem'
      }}>
          <h3 style={{
          fontSize: 'var(--font-size-lg)',
          marginBottom: '0.5rem'
        }}>
            Usage:
          </h3>
          <pre style={{
          backgroundColor: 'var(--color-gray-900)',
          color: 'var(--color-gray-50)',
          padding: '1rem',
          borderRadius: '8px',
          fontFamily: 'var(--font-family-mono)',
          fontSize: 'var(--font-size-sm)',
          overflow: 'auto'
        }}>
            {\`<polaris-card>
  <h2 slot="title">Card Title</h2>
  <p>Card content goes here</p>
  <div slot="actions">
    <polaris-button>Action</polaris-button>
  </div>
</polaris-card>\`}
          </pre>
        </div>
      </div>;
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"Polaris Card Web Component",...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var f,g,x,C,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const handleButtonClick = (event: Event) => {
      alert(\`Button clicked! Variant: \${(event.target as any).variant}\`);
    };
    return <div>
        <h2 style={{
        fontFamily: 'var(--font-family-sans)',
        marginBottom: '1rem'
      }}>
          Complete Layout Example
        </h2>
        <p style={{
        color: 'var(--color-text-secondary)',
        marginBottom: '2rem'
      }}>
          Demonstrating multiple Web Components working together
        </p>

        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
          <polaris-card>
            <h2 slot="title">User Profile</h2>
            <p style={{
            marginBottom: '1rem'
          }}>
              Manage your account settings and preferences.
            </p>
            <div slot="actions">
              <polaris-button variant="primary" onClick={handleButtonClick}>
                Edit Profile
              </polaris-button>
            </div>
          </polaris-card>

          <polaris-card>
            <h2 slot="title">Notifications</h2>
            <p style={{
            marginBottom: '1rem'
          }}>
              You have 3 unread notifications.
            </p>
            <div slot="actions">
              <polaris-button variant="secondary" onClick={handleButtonClick}>
                View All
              </polaris-button>
            </div>
          </polaris-card>

          <polaris-card>
            <h2 slot="title">Danger Zone</h2>
            <p style={{
            marginBottom: '1rem'
          }}>
              Permanently delete your account and all data.
            </p>
            <div slot="actions">
              <polaris-button variant="critical" onClick={handleButtonClick}>
                Delete Account
              </polaris-button>
            </div>
          </polaris-card>
        </div>

        <div style={{
        marginTop: '3rem'
      }}>
          <h3 style={{
          fontSize: 'var(--font-size-lg)',
          marginBottom: '1rem'
        }}>
            How Web Components Use Design Tokens
          </h3>
          <ul style={{
          listStyle: 'disc',
          paddingLeft: '2rem',
          color: 'var(--color-text-secondary)'
        }}>
            <li>All colors reference CSS custom properties like <code>var(--color-text-primary)</code></li>
            <li>Typography uses <code>var(--font-family-sans)</code>, <code>var(--font-size-base)</code>, etc.</li>
            <li>Shadows use <code>var(--shadow-card)</code> and <code>var(--shadow-button-default)</code></li>
            <li>Tokens are applied globally, so components work anywhere in your app</li>
            <li>Components include fallback values for environments without tokens</li>
          </ul>
        </div>
      </div>;
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:"Combined Layout Example",...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.description}}};var j,w,B,S,P;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <h2 style={{
        fontFamily: 'var(--font-family-sans)',
        marginBottom: '1rem'
      }}>
          Interactive Web Components
        </h2>
        <p style={{
        color: 'var(--color-text-secondary)',
        marginBottom: '2rem'
      }}>
          Click buttons to see custom events in action
        </p>

        <polaris-card>
          <h2 slot="title">Event Handling Example</h2>
          <p style={{
          marginBottom: '1rem'
        }}>
            These buttons dispatch custom <code>polaris-click</code> events that bubble up through
            the DOM. Try clicking them!
          </p>
          <div slot="actions" style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
            <polaris-button variant="primary" onClick={(e: any) => {
            console.log('Primary button clicked:', e);
            alert('Primary button clicked! Check console for event details.');
          }}>
              Primary Action
            </polaris-button>
            <polaris-button variant="secondary" onClick={(e: any) => {
            console.log('Secondary button clicked:', e);
            alert('Secondary button clicked!');
          }}>
              Secondary Action
            </polaris-button>
            <polaris-button variant="critical" onClick={(e: any) => {
            if (confirm('Are you sure you want to perform this critical action?')) {
              console.log('Critical action confirmed:', e);
              alert('Critical action executed!');
            }
          }}>
              Critical Action
            </polaris-button>
          </div>
        </polaris-card>
      </div>;
  }
}`,...(B=(w=n.parameters)==null?void 0:w.docs)==null?void 0:B.source},description:{story:"Interactive Demo",...(P=(S=n.parameters)==null?void 0:S.docs)==null?void 0:P.description}}};const L=["Button","Card","CombinedLayout","Interactive"];export{r as Button,a as Card,i as CombinedLayout,n as Interactive,L as __namedExportsOrder,D as default};
