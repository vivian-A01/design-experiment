import{j as n}from"./jsx-runtime-DiklIkkE.js";import{R as e,r as u}from"./index-DRjF_FHU.js";import{P as lt}from"./Page-C3t4Y7wQ.js";import{B as R}from"./Box-B1w_vr2o.js";import{C as de}from"./Card-jNhA2eZy.js";import{B as re}from"./BlockStack-D6dphcKR.js";import{T as f}from"./Text-BG3e1Lbz.js";import{c as w,v as qe}from"./css-CpB8MaEn.js";import{u as Zt,d as Jt}from"./context-CUGBOWdW.js";import{u as oe}from"./hooks-KMyVA0IW.js";import{C as Yt,I as Qe}from"./CSSTransition-B73_rMZh.js";import{I as T}from"./InlineStack-D40BC9ks.js";import{T as Kt}from"./TextContainer-B471FLuq.js";import{T as Ce}from"./Thumbnail-RXWywLxL.js";import{B as ae,c as Le,b as en,U as tn}from"./Button-BRnHCNBZ.js";import{S as ct}from"./XIcon.svg-DzSG-rds.js";import{a as dt,f as nn,b as rn}from"./breakpoints-DsDfYkBF.js";import{u as an,a as sn}from"./Scrollable-C6r34pLa.js";import{u as ut}from"./use-event-listener-pp9uJY64.js";import{S as on}from"./Select-GZAsTBg8.js";import{i as Fe}from"./index-DfJTNXUf.js";import{C as pt}from"./Checkbox-BzOXeF8-.js";import{B as Ge}from"./ButtonGroup-CfdChKi4.js";import{a as Xe}from"./utils-DGKULhVP.js";import{P as ye}from"./Popover-C0687k05.js";import{A as We,S as ln}from"./ActionList-dyImMudF.js";import{S as mt}from"./hooks-Bm6Wywx2.js";import{S as cn}from"./Sticky-DVdToHBT.js";import{I as dn,L as un}from"./LegacyStack-fNTcMtcv.js";import{I as pn}from"./Image-CVen0NIu.js";import{S as mn}from"./Spinner-CUqAq-Pn.js";import{P as hn}from"./Pagination-DJIWLAuz.js";import{u as ht}from"./use-toggle-CFiziXYz.js";import{T as gn}from"./Tooltip-Bnsbj5jj.js";import{I as _e}from"./Icon-DfOZwoJb.js";import{B as gt}from"./Badge-C8SXRHoK.js";import{T as fn}from"./TextField-BpAWhFX9.js";import{S as Sn}from"./XSmallIcon.svg-Dn9T_HVo.js";import{S as bn}from"./PlusIcon.svg-DKbdJPX-.js";import"./components-DT6sVM2M.js";import"./focus-DhkBmn3-.js";import"./within-content-context-DSkiGakq.js";import"./context-mLi4YNtT.js";import"./context-D6iXLSRD.js";import"./index-DHHUZ-3A.js";import"./use-is-after-initial-mount-DD0LBRFR.js";import"./Labelled-BsDPBwP-.js";import"./InlineError-SKpdvg5n.js";import"./types-B6k7La2U.js";import"./EventListener-Ch46rYtk.js";import"./KeypressListener-CkR6MueP.js";import"./context-DRh4ibLU.js";import"./context-CvKcu416.js";var ft=function(a){return e.createElement("svg",Object.assign({viewBox:"0 0 20 20"},a),e.createElement("path",{d:"M13.28 8.78a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"}),e.createElement("path",{fillRule:"evenodd",d:"M6.25 3.5a2.75 2.75 0 0 0-2.75 2.75v7.5a2.75 2.75 0 0 0 2.75 2.75h7.5a2.75 2.75 0 0 0 2.75-2.75v-7.5a2.75 2.75 0 0 0-2.75-2.75h-7.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25h-7.5c-.69 0-1.25-.56-1.25-1.25v-7.5Z"}))};ft.displayName="CheckboxIcon";function Ze(t=[],a,r,o){const d=r.reduce((i,g)=>i+g,0),l=t.map((i,g)=>g),m=[],v=[];if(o>d)m.push(...l);else{let i=0,g=!1;l.forEach(p=>{const h=r[p];if(i+h>=o-a||g){v.push(p),g=!0;return}m.push(p),i+=h})}return{visiblePromotedActions:m,hiddenPromotedActions:v}}function yn(t){const a=t.filter(r=>r.items);return t.length===a.length}function vn(t){const a=t.filter(r=>!r.items);return t.length===a.length}function Me(t){return"title"in t&&"actions"in t}function xn(t){return"items"in t}function kn(t){if(!(!t||t.length===0)){if(yn(t))return t;if(vn(t))return[{items:t}]}}function Je(t){var a;if(!t)return!1;for(const r of t)for(const o of r.items)if(((a=o.badge)==null?void 0:a.tone)==="new")return!0;return!1}var ie={BulkActionsOuterLayout:"Polaris-BulkActions__BulkActionsOuterLayout",BulkActionsSelectAllWrapper:"Polaris-BulkActions__BulkActionsSelectAllWrapper",BulkActionsPromotedActionsWrapper:"Polaris-BulkActions__BulkActionsPromotedActionsWrapper",BulkActionsLayout:"Polaris-BulkActions__BulkActionsLayout","BulkActionsLayout--measuring":"Polaris-BulkActions--bulkActionsLayoutMeasuring",BulkActionsMeasurerLayout:"Polaris-BulkActions__BulkActionsMeasurerLayout",BulkActionButton:"Polaris-BulkActions__BulkActionButton",AllAction:"Polaris-BulkActions__AllAction"};function be({handleMeasurement:t,url:a,external:r,onAction:o,content:d,disclosure:l,accessibilityLabel:m,disabled:v,destructive:i,indicator:g,showContentInButton:p,size:h}){const S=u.useRef(null);an(()=>{if(t&&S.current){const y=S.current.getBoundingClientRect().width;t(y)}});const P=l&&!p,s=P?void 0:d,k=e.createElement(ae,{external:r,url:a,accessibilityLabel:P?d:m,tone:i?"critical":void 0,disclosure:l&&p,onClick:o,disabled:v,size:h,icon:P?e.createElement(_e,{source:mt,tone:"base"}):void 0},s);return e.createElement("div",{className:ie.BulkActionButton,ref:S},P?e.createElement(gn,{content:d,preferredPosition:"below"},k):k,g&&e.createElement(dn,null))}function Pn({title:t,actions:a,isNewBadgeInBadgeActions:r,size:o}){const{value:d,toggle:l}=ht(!1);return e.createElement(e.Fragment,null,e.createElement(ye,{active:d,activator:e.createElement(be,{disclosure:!0,showContentInButton:!0,onAction:l,content:t,indicator:r,size:o}),onClose:l,preferInputActivator:!0},e.createElement(We,{items:a,onActionAnyItem:l})))}var Te={CheckableButton:"Polaris-CheckableButton",Checkbox:"Polaris-CheckableButton__Checkbox",Label:"Polaris-CheckableButton__Label"};const St=u.forwardRef(function({accessibilityLabel:a,label:r="",onToggleAll:o,selected:d,disabled:l,ariaLive:m},v){const i=u.useRef(null);function g(){var p;(p=i==null?void 0:i.current)==null||p.focus()}return u.useImperativeHandle(v,()=>({focus:g})),e.createElement("div",{className:Te.CheckableButton,onClick:o},e.createElement("div",{className:Te.Checkbox},e.createElement(pt,{label:a,labelHidden:!0,checked:d,disabled:l,onChange:o,ref:i})),r?e.createElement("span",{className:Te.Label,"aria-live":m},e.createElement(f,{as:"span",variant:"bodySm",fontWeight:"medium"},r)):null)}),An=4;function Bn({promotedActions:t=[],disabled:a,buttonSize:r,handleMeasurement:o}){const d=oe(),l=u.useRef(null),m=d.translate("Polaris.ResourceList.BulkActions.moreActionsActivatorLabel"),v=e.createElement(be,{disclosure:!0,content:m}),i=u.useCallback(()=>{if(!l.current)return;const p=l.current.offsetWidth,h=l.current.children,P=Array.from(h).map(k=>Math.ceil(k.getBoundingClientRect().width)+An),s=P.pop()||0;o({containerWidth:p,disclosureWidth:s,hiddenActionsWidths:P})},[o]);u.useEffect(()=>{i()},[i,t]);const g=t.map((p,h)=>Me(p)?e.createElement(be,{key:h,disclosure:!0,showContentInButton:!0,content:p.title,size:r}):e.createElement(be,Object.assign({key:h,disabled:a},p,{size:r})));return ut("resize",i),e.createElement("div",{className:ie.BulkActionsMeasurerLayout,ref:l},g,v)}const En=u.forwardRef(function({promotedActions:a,actions:r,disabled:o,buttonSize:d,paginatedSelectAllAction:l,paginatedSelectAllText:m,label:v,accessibilityLabel:i,selected:g,onToggleAll:p,onMoreActionPopoverToggle:h,width:S,selectMode:P},s){const k=oe(),[y,W]=u.useState(!1),[F,j]=u.useReducer((x,E)=>({...x,...E}),{disclosureWidth:0,containerWidth:1/0,actionsWidths:[],visiblePromotedActions:[],hiddenPromotedActions:[],hasMeasured:!1}),{visiblePromotedActions:I,hiddenPromotedActions:O,containerWidth:H,disclosureWidth:D,actionsWidths:U,hasMeasured:A}=F;u.useEffect(()=>{if(H===0||!a||a.length===0)return;const{visiblePromotedActions:x,hiddenPromotedActions:E}=Ze(a,D,U,H);j({visiblePromotedActions:x,hiddenPromotedActions:E,hasMeasured:H!==1/0})},[H,D,a,U]);const M=!a||a&&I.length===0?k.translate("Polaris.ResourceList.BulkActions.actionsActivatorLabel"):k.translate("Polaris.ResourceList.BulkActions.moreActionsActivatorLabel"),Z=l?e.createElement(Le,{className:ie.AllAction,onClick:l.onAction,size:"slim",disabled:o},e.createElement(f,{as:"span",variant:"bodySm",fontWeight:"medium"},l.content)):null,ee=m&&l,J={accessibilityLabel:i,label:ee?m:v,selected:g,onToggleAll:p,disabled:o,ariaLive:ee?"polite":void 0,ref:s},z=u.useCallback(()=>{h==null||h(y),W(x=>!x)},[h,y]),q=u.useCallback(x=>{const{hiddenActionsWidths:E,containerWidth:se,disclosureWidth:fe}=x;if(!a||a.length===0)return;const{visiblePromotedActions:Ie,hiddenPromotedActions:ke}=Ze(a,fe,E,se);j({visiblePromotedActions:Ie,hiddenPromotedActions:ke,actionsWidths:E,containerWidth:se,disclosureWidth:fe,hasMeasured:!0})},[a]),Q=kn(r),c=a?a.filter((x,E)=>!!I.includes(E)).map((x,E)=>Me(x)?e.createElement(Pn,Object.assign({key:E},x,{isNewBadgeInBadgeActions:Je(Q),size:d})):e.createElement(be,Object.assign({key:E,disabled:o},x,{size:d}))):null,$={items:O.map(x=>a==null?void 0:a[x]).reduce((x,E)=>E?Me(E)?x.concat(E.actions):x.concat(E):x,[])},V=u.useMemo(()=>{if(Q)return Q;if(!r)return[];let x=!0;return r.filter(E=>E).reduce((E,se)=>{if(xn(se))return x=!1,E.concat(se);if(x){if(E.length===0)return[{items:[se]}];const fe=E[E.length-1];return E.splice(E.length-1,1,{items:[...fe.items,se]}),E}return x=!0,E.concat({items:[se]})},[])},[r,Q]),he=e.createElement(be,{disclosure:!0,showContentInButton:!c,onAction:z,content:M,disabled:o,indicator:Je(Q),size:d}),G=V.length>0?e.createElement(ye,{active:y,activator:he,preferredAlignment:"right",onClose:z},e.createElement(We,{sections:$.items.length>0?[$,...V]:V,onActionAnyItem:z})):null,ge=e.createElement(Bn,{promotedActions:a,disabled:o,buttonSize:d,handleMeasurement:q});return e.createElement("div",{className:ie.BulkActions,style:S?{width:S}:void 0},e.createElement(T,{gap:"400",blockAlign:"center"},e.createElement("div",{className:ie.BulkActionsSelectAllWrapper},e.createElement(St,J),Z),P?e.createElement("div",{className:ie.BulkActionsPromotedActionsWrapper},e.createElement(T,{gap:"100",blockAlign:"center"},e.createElement("div",{className:ie.BulkActionsOuterLayout},ge,e.createElement("div",{className:w(ie.BulkActionsLayout,!A&&ie["BulkActionsLayout--measuring"])},c)),G)):null))});var Cn={Divider:"Polaris-Divider"};const bt=({borderColor:t="border-secondary",borderWidth:a="025"})=>{const r=t==="transparent"?t:`var(--p-color-${t})`;return e.createElement("hr",{className:Cn.Divider,style:{borderBlockStart:`var(--p-border-width-${a}) solid ${r}`}})};var Ln="data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M41.87 24a17.87 17.87 0 11-35.74 0 17.87 17.87 0 0135.74 0zm-3.15 18.96a24 24 0 114.24-4.24L59.04 54.8a3 3 0 11-4.24 4.24L38.72 42.96z' fill='%238C9196'/%3e%3c/svg%3e",_n=Ln;function Wn({title:t,description:a,withIllustration:r}){const d=oe().translate("Polaris.EmptySearchResult.altText"),l=a?e.createElement("p",null,a):null,m=r?e.createElement(pn,{alt:d,source:_n,draggable:!1}):null;return e.createElement(un,{alignment:"center",vertical:!0},m,e.createElement(f,{variant:"headingLg",as:"p"},t),e.createElement(f,{tone:"subdued",as:"span"},l))}var Y={Container:"Polaris-Filters__Container",SearchField:"Polaris-Filters__SearchField",FiltersWrapper:"Polaris-Filters__FiltersWrapper",hideQueryField:"Polaris-Filters--hideQueryField",FiltersInner:"Polaris-Filters__FiltersInner",AddFilter:"Polaris-Filters__AddFilter",FiltersWrapperWithAddButton:"Polaris-Filters__FiltersWrapperWithAddButton",AddFilterActivatorMultiple:"Polaris-Filters__AddFilterActivatorMultiple",FiltersStickyArea:"Polaris-Filters__FiltersStickyArea",ClearAll:"Polaris-Filters__ClearAll",MultiplePinnedFilterClearAll:"Polaris-Filters__MultiplePinnedFilterClearAll"};function In({onChange:t,onClear:a,onFocus:r,onBlur:o,focused:d,value:l,placeholder:m,disabled:v,borderlessQueryField:i,loading:g,selectedViewName:p}){const h=oe(),S=u.useId(),{mdUp:P}=dt(),s=l&&p&&P?e.createElement(f,{as:"span",variant:"bodyMd",tone:"subdued"},h.translate("Polaris.Filters.searchInView",{viewName:p})):null;function k(W){t(W??l)}function y(){a?a():t("")}return e.createElement(fn,{id:S,value:l,onChange:k,onFocus:r,onBlur:o,onClearButtonClick:y,autoComplete:"off",placeholder:m,disabled:v,variant:i?"borderless":"inherit",size:"slim",prefix:P?e.createElement(_e,{source:ln}):void 0,suffix:s,focused:d,label:m,labelHidden:!0,clearButton:!0,autoSize:!!s,loading:g})}function Rn(t,a){const r=e.useRef(t);u.useEffect(()=>{const o=r.current;t!==r.current&&(r.current=t,a(t,o))},[t,a])}var K={FilterButton:"Polaris-Filters-FilterPill__FilterButton",focusedFilterButton:"Polaris-Filters-FilterPill--focusedFilterButton",ActiveFilterButton:"Polaris-Filters-FilterPill__ActiveFilterButton",PlainButton:"Polaris-Filters-FilterPill__PlainButton",ToggleButton:"Polaris-Filters-FilterPill__ToggleButton",clearButton:"Polaris-Filters-FilterPill--clearButton",IconWrapper:"Polaris-Filters-FilterPill__IconWrapper",PopoverWrapper:"Polaris-Filters-FilterPill__PopoverWrapper",ClearButtonWrapper:"Polaris-Filters-FilterPill__ClearButtonWrapper"};function jn({unsavedChanges:t=!1,filterKey:a,label:r,filter:o,disabled:d,hideClearButton:l,selected:m,initialActive:v,disclosureZIndexOverride:i,closeOnChildOverlayClick:g,onRemove:p,onClick:h}){const S=oe(),P=u.useRef(null),{value:s,setTrue:k,setFalse:y}=ht(!1),[W,F]=u.useState(v);u.useEffect(()=>{var Q,c;const z=P.current;if(!z||!W)return;const q=(Q=z.parentElement)==null?void 0:Q.parentElement;q&&((c=q.scroll)==null||c.call(q,{left:z.offsetLeft}))},[P,W]);const j=u.useCallback(()=>{o&&F(z=>!z),h&&h(a)},[o,a,h]),I=u.useCallback(()=>{j(),m||p==null||p(a)},[p,m,a,j]),O=()=>{p&&p(a),F(!1)},H=w(K.FilterButton,m&&K.ActiveFilterButton,W&&K.FocusFilterButton,s&&K.focusedFilterButton),D=w(K.PlainButton,K.clearButton),U=w(K.PlainButton,K.ToggleButton),A=m?null:e.createElement("div",{className:K.IconWrapper},e.createElement(_e,{source:en,tone:"base"})),M=e.createElement(R,{paddingInlineStart:t?"0":"050"},e.createElement(T,null,e.createElement(f,{variant:"bodySm",as:"span"},r))),Z=t?e.createElement(R,{paddingInlineEnd:"150"},e.createElement(R,{background:"bg-fill-emphasis",borderRadius:"050",width:"6px",minHeight:"6px"})):null,ee=m?e.createElement(Le,{onClick:O,className:D,type:"button","aria-label":S.translate("Polaris.FilterPill.clear")},e.createElement("div",{className:K.IconWrapper},e.createElement(_e,{source:Sn,tone:"base"}))):null,le=e.createElement("div",{className:H},e.createElement(T,{gap:"0",wrap:!1},e.createElement(Le,{onFocus:k,onBlur:y,onClick:j,className:U,type:"button",accessibilityLabel:t?S.translate("Polaris.FilterPill.unsavedChanges",{label:r}):r},e.createElement(T,{wrap:!1,align:"center",blockAlign:"center",gap:"0"},Z,M,A)),ee)),J=!l&&e.createElement("div",{className:K.ClearButtonWrapper},e.createElement(ae,{onClick:O,variant:"plain",disabled:!m,textAlign:"left"},S.translate("Polaris.FilterPill.clear")));return d?null:e.createElement("div",{ref:P},e.createElement(ye,{active:W,activator:le,key:a,onClose:I,preferredAlignment:"left",zIndexOverride:i,preventCloseOnChildOverlayClick:!g},e.createElement("div",{className:K.PopoverWrapper},e.createElement(ye.Section,null,e.createElement(re,{gap:"100"},o,J)))))}function Fn({filters:t,appliedFilters:a,onClearAll:r,disabled:o,hideQueryField:d,disableFilters:l,mountedStateStyles:m,onAddFilterClick:v,closeOnChildOverlayClick:i,children:g}){const p=oe(),[h,S]=u.useState(!1),P=u.useRef(!1);u.useEffect(()=>{P.current=!0});const s=()=>S(c=>!c),k=()=>{v==null||v(),s()},y=a==null?void 0:a.map(({key:c})=>c),W=t.filter(({pinned:c})=>c).map(({key:c})=>c),F=t.filter(({pinned:c,key:B})=>!!c||(y==null?void 0:y.includes(B))),[j,I]=u.useState(F.map(({key:c})=>c));Rn(t.length,()=>{I(F.map(({key:c})=>c))});const O=j.map(c=>t.find(B=>B.key===c)).reduce((c,B)=>B?[...c,B]:c,[]),H=({key:c,onAction:B})=>()=>{setTimeout(()=>{I(L=>[...new Set([...L,c])]),B==null||B(),s()},0)},D=c=>({...c,content:c.label,onAction:H(c)}),U=t.filter(c=>!O.some(({key:B})=>B===c.key)),A=U.filter(c=>!c.section&&!c.hidden).map(D),M=U.filter(c=>c.section).reduce((c,B)=>{const L=D(B),$=c.findIndex(V=>V.title===B.section);return $===-1?c.push({title:B.section,items:[L]}):c[$].items.push(L),c},[]),Z=O.length>=1,ee=e.createElement("div",null,e.createElement(Le,{type:"button",className:Y.AddFilter,onClick:k,"aria-label":p.translate("Polaris.Filters.addFilter"),disabled:o||A.length===0&&M.length===0||l},e.createElement(f,{as:"span",variant:"bodySm",tone:o?"disabled":"base"},p.translate("Polaris.Filters.addFilter")," "),e.createElement(bn,null))),le=()=>{I(W),r==null||r()},J=t.some(c=>!c.pinned)||t.length!==j.length,z=O.map(({key:c,...B})=>{const L=a==null?void 0:a.find(({key:V})=>V===c),$=()=>{I(V=>V.filter(he=>{const G=he===c,ge=W.includes(he);return!G||ge})),L==null||L.onRemove(c)};return e.createElement(jn,Object.assign({key:c},B,{initialActive:P.current&&!B.pinned&&!L,unsavedChanges:L==null?void 0:L.unsavedChanges,label:(L==null?void 0:L.label)||B.label,filterKey:c,selected:y==null?void 0:y.includes(c),onRemove:$,disabled:B.disabled||l,closeOnChildOverlayClick:i}))}),q=J?e.createElement("div",{className:w(Y.AddFilterActivator,Z&&Y.AddFilterActivatorMultiple)},e.createElement(ye,{active:h&&!o,activator:ee,onClose:s},e.createElement(We,{actionRole:"menuitem",items:A,sections:M}))):null,Q=a!=null&&a.length?e.createElement("div",{className:w(Y.ClearAll,Z&&J&&Y.MultiplePinnedFilterClearAll)},e.createElement(ae,{size:"micro",onClick:le,variant:"monochromePlain"},p.translate("Polaris.Filters.clearFilters"))):null;return e.createElement("div",{className:w(Y.FiltersWrapper,J&&Z&&Y.FiltersWrapperWithAddButton),"aria-live":"polite",style:m},e.createElement("div",{className:w(Y.FiltersInner)},e.createElement("div",{className:w(Y.FiltersStickyArea)},z,q,Q)),d?e.createElement(R,{paddingInlineEnd:"300",paddingBlockStart:"200",paddingBlockEnd:"200"},e.createElement(T,{align:"start",blockAlign:"center",gap:{xs:"400",md:"300"}},g)):null)}const Ne="var(--p-motion-duration-150)",Ee="-36px",Tn={transition:`opacity ${Ne} var(--p-motion-ease)`,opacity:0},Mn={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0},unmounted:{opacity:0}},Nn={transition:`opacity ${Ne} var(--p-motion-ease), margin ${Ne} var(--p-motion-ease)`,opacity:0,marginTop:Ee},wn={entering:{opacity:1,marginTop:0},entered:{opacity:1,marginTop:0},exiting:{opacity:0,marginTop:Ee},exited:{opacity:0,marginTop:Ee},unmounted:{opacity:0,marginTop:Ee}};function yt({queryValue:t,queryPlaceholder:a,focused:r,filters:o,appliedFilters:d,onQueryChange:l,onQueryClear:m,onQueryBlur:v,onQueryFocus:i,onClearAll:g,children:p,disabled:h,hideFilters:S,hideQueryField:P,disableQueryField:s,borderlessQueryField:k,loading:y,disableFilters:W,mountedState:F,onAddFilterClick:j,closeOnChildOverlayClick:I,selectedViewName:O}){const H=S||o.length===0,D=P?null:e.createElement("div",{className:Y.Container},e.createElement(R,{padding:"200"},e.createElement(T,{align:"start",blockAlign:"center",gap:{xs:"400",md:"300"}},e.createElement("div",{className:Y.SearchField,style:F?{...Tn,...Mn[F]}:void 0},e.createElement(In,{onChange:l,onFocus:i,onBlur:v,onClear:m,value:t,placeholder:a,focused:r,disabled:h||s,borderlessQueryField:k,loading:y,selectedViewName:O})),p))),U=F&&!P?{...Nn,...wn[F]}:void 0,A=H?null:e.createElement(Fn,{filters:o,appliedFilters:d,onClearAll:g,disabled:h,hideQueryField:P,disableFilters:W,onAddFilterClick:j,closeOnChildOverlayClick:I,mountedStateStyles:U},p);return e.createElement("div",{className:w(Y.Filters,P&&Y.hideQueryField)},D,A)}var me={Layout:"Polaris-Layout",Section:"Polaris-Layout__Section","Section-fullWidth":"Polaris-Layout__Section--fullWidth","Section-oneHalf":"Polaris-Layout__Section--oneHalf","Section-oneThird":"Polaris-Layout__Section--oneThird",AnnotatedSection:"Polaris-Layout__AnnotatedSection",AnnotationWrapper:"Polaris-Layout__AnnotationWrapper",AnnotationContent:"Polaris-Layout__AnnotationContent",Annotation:"Polaris-Layout__Annotation"};function Hn({children:t,title:a,description:r,id:o}){const d=typeof r=="string"?e.createElement(f,{as:"p",variant:"bodyMd"},r):r;return e.createElement("div",{className:me.AnnotatedSection},e.createElement("div",{className:me.AnnotationWrapper},e.createElement("div",{className:me.Annotation},e.createElement(Kt,{spacing:"tight"},e.createElement(f,{id:o,variant:"headingMd",as:"h2"},a),d&&e.createElement(R,{color:"text-secondary"},d))),e.createElement("div",{className:me.AnnotationContent},t)))}function vt({children:t,variant:a}){const r=w(me.Section,me[`Section-${a}`]);return e.createElement("div",{className:r},t)}const ue=function({sectioned:a,children:r}){const o=a?e.createElement(vt,null,r):r;return e.createElement("div",{className:me.Layout},o)};ue.AnnotatedSection=Hn;ue.Section=vt;const xt=u.createContext({});var ce={ProgressBar:"Polaris-ProgressBar",sizeSmall:"Polaris-ProgressBar--sizeSmall",sizeMedium:"Polaris-ProgressBar--sizeMedium",sizeLarge:"Polaris-ProgressBar--sizeLarge",toneHighlight:"Polaris-ProgressBar--toneHighlight",tonePrimary:"Polaris-ProgressBar--tonePrimary",toneSuccess:"Polaris-ProgressBar--toneSuccess",toneCritical:"Polaris-ProgressBar--toneCritical",Indicator:"Polaris-ProgressBar__Indicator",IndicatorAppearActive:"Polaris-ProgressBar__IndicatorAppearActive",IndicatorAppearDone:"Polaris-ProgressBar__IndicatorAppearDone",Progress:"Polaris-ProgressBar__Progress",Label:"Polaris-ProgressBar__Label"};function kt({progress:t=0,size:a="medium",tone:r="highlight",animated:o=!0,ariaLabelledBy:d}){const l=Zt(),m=oe(),v=u.useRef(null),i=w(ce.ProgressBar,a&&ce[qe("size",a)],r&&ce[qe("tone",r)]);m.translate(t<0?"Polaris.ProgressBar.negativeWarningMessage":"Polaris.ProgressBar.exceedWarningMessage",{progress:t});const g=On(t),p=o?l.motion["motion-duration-500"]:l.motion["motion-duration-0"];return e.createElement("div",{className:i},e.createElement("progress",{"aria-labelledby":d,className:ce.Progress,value:g,max:"100"}),e.createElement(Yt,{in:!0,appear:!0,timeout:parseInt(p,10),nodeRef:v,classNames:{appearActive:ce.IndicatorAppearActive,appearDone:ce.IndicatorAppearDone}},e.createElement("div",{ref:v,className:ce.Indicator,style:{"--pc-progress-bar-duration":p,"--pc-progress-bar-percent":g/100}},e.createElement("span",{className:ce.Label},g,"%"))))}function On(t,a){let r;return t<0?r=0:t>100?r=100:r=t,r}var N={ResourceItem:"Polaris-ResourceItem",Actions:"Polaris-ResourceItem__Actions",ItemWrapper:"Polaris-ResourceItem__ItemWrapper",CheckboxWrapper:"Polaris-ResourceItem__CheckboxWrapper",focusedInner:"Polaris-ResourceItem--focusedInner",focused:"Polaris-ResourceItem--focused",selected:"Polaris-ResourceItem--selected",Link:"Polaris-ResourceItem__Link",Button:"Polaris-ResourceItem__Button",selectable:"Polaris-ResourceItem--selectable",disabled:"Polaris-ResourceItem--disabled",ListItem:"Polaris-ResourceItem__ListItem",hasBulkActions:"Polaris-ResourceItem--hasBulkActions"};const ne="All";class Vn extends u.Component{constructor(...a){super(...a),this.state={actionsMenuVisible:!1,focused:!1,focusedInner:!1,selected:Ye(this.props.id,this.props.context.selectedItems)},this.node=null,this.overlayRef=u.createRef(),this.buttonOverlay=u.createRef(),this.setNode=r=>{this.node=r},this.handleFocus=r=>{r.target===this.buttonOverlay.current||this.node&&r.target===this.overlayRef.current?this.setState({focused:!0,focusedInner:!1}):this.node&&this.node.contains(r.target)&&this.setState({focused:!0,focusedInner:!0})},this.handleBlur=({relatedTarget:r})=>{this.node&&r instanceof Element&&this.node.contains(r)||this.setState({focused:!1,focusedInner:!1})},this.handleMouseOut=()=>{this.state.focused&&this.setState({focused:!1,focusedInner:!1}),this.props.onMouseOut&&this.props.onMouseOut()},this.handleLargerSelectionArea=r=>{Se(r),this.handleSelection(!this.state.selected,r.nativeEvent.shiftKey)},this.handleSelection=(r,o)=>{const{id:d,sortOrder:l,context:{onSelectionChange:m}}=this.props;d==null||m==null||(this.setState({focused:r,focusedInner:r}),m(r,d,l,o))},this.handleClick=r=>{Se(r);const{id:o,onClick:d,url:l,context:{selectMode:m}}=this.props,{ctrlKey:v,metaKey:i}=r.nativeEvent,g=this.node&&this.node.querySelector("a");if(m){this.handleLargerSelectionArea(r);return}if(g!==r.target){if(d&&d(o),l&&(v||i)){window.open(l,"_blank");return}l&&g&&g.click()}},this.handleKeyUp=r=>{const{disabled:o,onClick:d=zn,context:{selectMode:l}}=this.props,{key:m}=r;m==="Enter"&&this.props.url&&!l&&!o&&d()},this.handleActionsClick=()=>{this.setState(({actionsMenuVisible:r})=>({actionsMenuVisible:!r}))},this.handleCloseRequest=()=>{this.setState({actionsMenuVisible:!1})}}static getDerivedStateFromProps(a,r){const o=Ye(a.id,a.context.selectedItems);return r.selected===o?null:{selected:o}}shouldComponentUpdate(a,r){const{children:o,context:{selectedItems:d,...l},...m}=a,{children:v,context:{selectedItems:i,...g},...p}=this.props,h=a.context.selectMode;return!Fe(this.state,r)||this.props.context.selectMode!==h||!a.context.selectMode&&(!Fe(p,m)||!Fe(g,l))}render(){const{children:a,url:r,external:o,media:d,shortcutActions:l,ariaControls:m,ariaExpanded:v,persistActions:i=!1,accessibilityLabel:g,name:p,context:{selectable:h,selectMode:S,hasBulkActions:P,loading:s,resourceName:k},i18n:y,verticalAlignment:W,dataHref:F,breakpoints:j,onMouseOver:I,disabled:O}=this.props,{actionsMenuVisible:H,focused:D,focusedInner:U,selected:A}=this.state;let M=null,Z=null;if(h){const L=p||g||y.translate("Polaris.Common.checkbox");Z=e.createElement("div",{className:N.CheckboxWrapper,onClick:Se,onChange:this.handleLargerSelectionArea},e.createElement(et,null,$=>e.createElement(pt,{id:$,label:L,labelHidden:!0,checked:A,disabled:s||O,bleedInlineStart:"300",bleedInlineEnd:"300",bleedBlockStart:"300",bleedBlockEnd:"300",fill:!0,labelClassName:N.CheckboxLabel})))}(d||h)&&(M=e.createElement(T,{gap:"300",blockAlign:d&&h?"center":Ke(W)},Z,d));const ee=w(N.ResourceItem,D&&N.focused,h&&N.selectable,A&&N.selected,S&&N.selectMode,i&&N.persistActions,U&&N.focusedInner,O&&N.disabled),le=w(N.ListItem,D&&!U&&N.focused,P&&N.hasBulkActions,A&&N.selected,h&&N.selectable);let J=null,z=null;if(l&&!s)if(i){J=j!=null&&j.lgUp?e.createElement("div",{className:N.Actions,onClick:Se},e.createElement(Ge,null,Xe(l,{variant:"tertiary"}))):null;const L=p?y.translate("Polaris.ResourceList.Item.actionsDropdownLabel",{accessibilityLabel:p}):y.translate("Polaris.ResourceList.Item.actionsDropdown");z=!S&&(j!=null&&j.lgDown)?e.createElement("div",{onClick:Se},e.createElement(ye,{activator:e.createElement(ae,{accessibilityLabel:L,onClick:this.handleActionsClick,variant:"tertiary",icon:mt}),onClose:this.handleCloseRequest,active:H},e.createElement(We,{items:l}))):null}else j!=null&&j.lgUp&&(J=e.createElement("div",{className:N.Actions,onClick:Se},e.createElement(R,{position:"absolute",insetBlockStart:"400",insetInlineEnd:"500"},e.createElement(Ge,{variant:"segmented"},Xe(l,{size:"slim"})))));const q=e.createElement(R,{id:this.props.id,position:"relative",paddingInlineStart:"300",paddingInlineEnd:"300",paddingBlockStart:"300",paddingBlockEnd:"300",zIndex:"var(--pc-resource-item-content-stacking-order)"},e.createElement(Qe,{columns:{xs:"1fr auto"}},e.createElement(Qe,{columns:{xs:d||h?"auto 1fr":"1fr"},gap:"300"},M,e.createElement(T,{blockAlign:Ke(W)},e.createElement(R,{width:"100%",padding:"0"},a))),J,z)),Q=s?-1:0,c=g||y.translate("Polaris.ResourceList.Item.viewItem",{itemName:p||k&&k.singular||""}),B=r?e.createElement(et,null,L=>e.createElement(tn,{"aria-describedby":this.props.id,"aria-label":c,className:N.Link,url:r,external:o,tabIndex:Q,id:L,ref:this.overlayRef})):e.createElement("button",{className:N.Button,"aria-label":c,"aria-controls":m,"aria-expanded":v,onClick:this.handleClick,tabIndex:Q,ref:this.buttonOverlay});return e.createElement("li",{className:le,"data-href":F},e.createElement("div",{className:N.ItemWrapper},e.createElement("div",{ref:this.setNode,className:ee,onClick:O?()=>{}:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyUp:this.handleKeyUp,onMouseOver:I,onMouseOut:this.handleMouseOut,"data-href":r},O?null:B,q)))}}function zn(){}function Se(t){t.stopPropagation()}function Ye(t,a){return!!(a&&(Array.isArray(a)&&a.includes(t)||a===ne))}function $n(t){const a=dt();return e.createElement(Vn,Object.assign({},t,{breakpoints:a,context:u.useContext(xt),i18n:oe()}))}function Ke(t){switch(t){case"leading":return"start";case"trailing":return"end";case"center":return"center";case"fill":return"stretch";case"baseline":return"baseline";default:return"start"}}function et(t){const a=u.useId();return t.children(a)}var C={FiltersWrapper:"Polaris-ResourceList__FiltersWrapper",ResourceListWrapper:"Polaris-ResourceList__ResourceListWrapper",ResourceList:"Polaris-ResourceList",HeaderOuterWrapper:"Polaris-ResourceList__HeaderOuterWrapper",BulkActionsWrapper:"Polaris-ResourceList__BulkActionsWrapper","HeaderWrapper-disabled":"Polaris-ResourceList__HeaderWrapper--disabled","HeaderWrapper-overlay":"Polaris-ResourceList__HeaderWrapper--overlay",HeaderWrapper:"Polaris-ResourceList__HeaderWrapper","HeaderWrapper-isSticky":"Polaris-ResourceList__HeaderWrapper--isSticky",HeaderContentWrapper:"Polaris-ResourceList__HeaderContentWrapper","HeaderWrapper-inSelectMode":"Polaris-ResourceList__HeaderWrapper--inSelectMode",SortWrapper:"Polaris-ResourceList__SortWrapper",AlternateToolWrapper:"Polaris-ResourceList__AlternateToolWrapper","HeaderWrapper-hasSelect":"Polaris-ResourceList__HeaderWrapper--hasSelect","HeaderWrapper-hasAlternateTool":"Polaris-ResourceList__HeaderWrapper--hasAlternateTool","HeaderWrapper-hasSort":"Polaris-ResourceList__HeaderWrapper--hasSort",HeaderTitleWrapper:"Polaris-ResourceList__HeaderTitleWrapper",BulkActionsWrapperVisible:"Polaris-ResourceList__BulkActionsWrapperVisible",PaginationWrapper:"Polaris-ResourceList__PaginationWrapper",CheckableButtonWrapper:"Polaris-ResourceList__CheckableButtonWrapper",SelectButtonWrapper:"Polaris-ResourceList__SelectButtonWrapper",EmptySearchResultWrapper:"Polaris-ResourceList__EmptySearchResultWrapper",ItemWrapper:"Polaris-ResourceList__ItemWrapper","ItemWrapper-isLoading":"Polaris-ResourceList__ItemWrapper--isLoading",SpinnerContainer:"Polaris-ResourceList__SpinnerContainer",LoadingOverlay:"Polaris-ResourceList__LoadingOverlay",disableTextSelection:"Polaris-ResourceList--disableTextSelection"};const Dn=28,Un=45;function tt(t,a){return t.map((r,o)=>a(r,o))}const ve=()=>typeof window>"u"?!1:window.innerWidth<parseFloat(nn(rn.breakpoints["breakpoints-sm"])??"");function qn(t,a){return Object.prototype.hasOwnProperty.call(t,"id")?t.id:a.toString()}function xe({items:t,filterControl:a,flushFilters:r,emptyState:o,emptySearchState:d,resourceName:l,promotedBulkActions:m,bulkActions:v,selectedItems:i=[],isFiltered:g,selectable:p,hasMoreItems:h,loading:S,headerContent:P,showHeader:s,totalItemsCount:k,sortValue:y,sortOptions:W,alternateTool:F,onSortChange:j,onSelectionChange:I,renderItem:O,idForItem:H=qn,resolveItemId:D,pagination:U}){const A=oe(),[M,Z]=u.useState(!!(i&&i.length>0)),[ee,le]=u.useState(0),[J,z]=u.useState(),[q,Q]=u.useState(ve()),c=u.useReducer((b=0)=>b+1,0)[1],B=u.useRef(null),L=sn(()=>({singular:A.translate("Polaris.ResourceList.defaultItemSingular"),plural:A.translate("Polaris.ResourceList.defaultItemPlural")})),$=u.useRef(null),V=b=>{Z(b),!b&&I&&I([])},he=Jt(()=>{const b=ve();i&&i.length===0&&M&&!b&&V(!1),q!==b&&Q(b)},50,{leading:!0,trailing:!0,maxWait:50});ut("resize",he);const G=!!(m&&m.length>0||v&&v.length>0||p)&&!q,ge=u.useMemo(()=>{let b="indeterminate";return!i||Array.isArray(i)&&i.length===0?b=!1:(i===ne||Array.isArray(i)&&i.length===t.length)&&(b=!0),b},[t.length,i]),x=l||L.current,E=()=>{const b=t.length,_=!S&&(!k&&b===1||k===1)?x.singular:x.plural;return S?A.translate("Polaris.ResourceList.loading",{resource:_}):k?A.translate("Polaris.ResourceList.showingTotalCount",{itemsCount:b,totalItemsCount:k,resource:_}):P||A.translate("Polaris.ResourceList.showing",{itemsCount:b,resource:_})},[se,fe]=u.useState(i===ne?`${t.length}+`:i.length);u.useEffect(()=>{(i===ne||i.length>0)&&fe(i===ne?`${t.length}+`:i.length)},[i,t.length]);const Ie=A.translate("Polaris.ResourceList.selected",{selectedItemsCount:se}),ke=u.useMemo(()=>{const b=i.length,_=t.length,X=b===_;return _===1&&X?A.translate("Polaris.ResourceList.a11yCheckboxDeselectAllSingle",{resourceNameSingular:x.singular}):_===1?A.translate("Polaris.ResourceList.a11yCheckboxSelectAllSingle",{resourceNameSingular:x.singular}):X?A.translate("Polaris.ResourceList.a11yCheckboxDeselectAllMultiple",{itemsLength:t.length,resourceNamePlural:x.plural}):A.translate("Polaris.ResourceList.a11yCheckboxSelectAllMultiple",{itemsLength:t.length,resourceNamePlural:x.plural})},[A,t.length,x.singular,x.plural,i.length]),At=u.useMemo(()=>{if(!(!G||!h)&&i===ne)return A.translate(g?"Polaris.ResourceList.allFilteredItemsSelected":"Polaris.ResourceList.allItemsSelected",{itemsLength:t.length,resourceNamePlural:x.plural})},[h,A,g,G,t,x.plural,i]),we=u.useCallback(()=>{const b=i===ne?tt(t,H):ne;I&&I(b)},[H,t,I,i]),Bt=u.useMemo(()=>!G||!h?void 0:{content:i===ne?A.translate("Polaris.Common.undo"):A.translate(g?"Polaris.ResourceList.selectAllFilteredItems":"Polaris.ResourceList.selectAllItems",{itemsLength:t.length,resourceNamePlural:x.plural}),onAction:we},[we,h,A,g,G,t.length,x.plural,i]),Et={title:A.translate("Polaris.ResourceList.emptySearchResultTitle",{resourceNamePlural:x.plural}),description:A.translate("Polaris.ResourceList.emptySearchResultDescription")},He=u.useCallback(()=>{if($.current!=null){if(typeof window>"u")return;const b=$.current.getBoundingClientRect(),_=Math.max(document.documentElement?document.documentElement.clientHeight:0,window.innerHeight||0),X=_-b.height,pe=t.length===1?Dn:Un,te=X>0?(b.height-pe)/2:(_-b.top-pe)/2;le(te)}},[$,t.length]),Pe=t.length>0;u.useEffect(()=>{S&&He()},[S,He]),u.useEffect(()=>{i&&i.length>0&&!M&&Z(!0),(!i||i.length===0)&&!ve()&&Z(!1)},[i,M]),u.useEffect(()=>{c()},[c,t]);const Ct=(b,_)=>{const X=H(b,_);return O(b,X,_)},Lt=(b,_,X)=>{const pe=Math.min(b,_),te=Math.max(b,_);return t.slice(pe,te+1).map(X)},_t=(b,_,X,pe)=>{if(i==null||I==null)return;let te=i===ne?tt(t,H):[...i];X!==void 0&&z(X);const Ue=J;let je=[_];if(pe&&Ue!=null&&X!==void 0&&D&&(je=Lt(Ue,X,D)),te=[...new Set([...te,...je])],!b)for(const Xt of je)te.splice(te.indexOf(Xt),1);te.length===0&&!ve()?V(!1):te.length>0&&V(!0),I&&I(te)},Oe=()=>{let b;Array.isArray(i)&&i.length===t.length||i===ne?b=[]:b=t.map((_,X)=>H(_,X)),b.length===0&&!ve()?V(!1):b.length>0&&V(!0),I&&I(b),setTimeout(()=>{var _;(_=B==null?void 0:B.current)==null||_.focus()},0)},Wt=w(C.BulkActionsWrapper,M&&C.BulkActionsWrapperVisible),Ve=G?e.createElement("div",{className:Wt},e.createElement(En,{selectMode:M,onSelectModeToggle:V,label:Ie,paginatedSelectAllAction:Bt,paginatedSelectAllText:At,promotedActions:m,actions:v,disabled:S,accessibilityLabel:ke,selected:ge,onToggleAll:Oe,ref:B,buttonSize:"medium"})):null,It=a?e.createElement("div",{className:w(!r&&C.FiltersWrapper)},a):null,ze=W&&W.length>0&&!F?e.createElement("div",{className:C.SortWrapper},e.createElement(on,{label:A.translate("Polaris.ResourceList.sortingLabel"),labelInline:!q,labelHidden:q,options:W,onChange:j,value:y,disabled:M})):null,Rt=F&&!ze?e.createElement("div",{className:C.AlternateToolWrapper},F):null,jt=e.createElement("div",{className:C.HeaderTitleWrapper},e.createElement(f,{as:"span",variant:"bodyMd"},E())),Ft=G?e.createElement("div",{className:C.SelectButtonWrapper},e.createElement(ae,{disabled:M,icon:ft,onClick:()=>V(!0)},A.translate("Polaris.ResourceList.selectButtonText"))):null,Tt=G?e.createElement("div",{className:C.CheckableButtonWrapper},e.createElement(St,{accessibilityLabel:ke,label:E(),onToggleAll:Oe,disabled:S,ref:B,selected:ge})):null,Mt=G||W&&W.length>0||F,Nt=S?e.createElement("div",{className:C["HeaderWrapper-overlay"]}):null,Re=o&&!Pe&&!S,$e=!Re&&a&&!Pe&&!S,wt=!Re&&s!==!1&&!$e&&(s||Mt)&&$.current&&e.createElement("div",{className:C.HeaderOuterWrapper},e.createElement(cn,{boundingElement:$.current},b=>{const _=w(C.HeaderWrapper,W&&W.length>0&&!F&&C["HeaderWrapper-hasSort"],F&&C["HeaderWrapper-hasAlternateTool"],G&&C["HeaderWrapper-hasSelect"],S&&C["HeaderWrapper-disabled"],G&&M&&Ve&&C["HeaderWrapper-inSelectMode"],b&&C["HeaderWrapper-isSticky"]);return e.createElement("div",{className:_},Nt,e.createElement("div",{className:C.HeaderContentWrapper},jt,Tt,Rt,ze,Ft),Ve)})),Ht=$e?d||e.createElement("div",{className:C.EmptySearchResultWrapper},e.createElement(Wn,Object.assign({},Et,{withIllustration:!0}))):null,Ot=Re?o:null,Vt={paddingTop:`${ee>0?ee:8}px`},zt=t.length<2?"small":"large",De=S?e.createElement(e.Fragment,null,e.createElement("li",{className:C.SpinnerContainer,style:Vt},e.createElement(mn,{size:zt,accessibilityLabel:"Items are loading"})),e.createElement("li",{className:C.LoadingOverlay})):null,$t=w(C.ItemWrapper,S&&C["ItemWrapper-isLoading"]),Dt=S&&!Pe?e.createElement("div",{className:$t,tabIndex:-1},De):null,Ut=w(C.ResourceList,S&&C.disabledPointerEvents,M&&C.disableTextSelection),qt=Pe?e.createElement("ul",{className:Ut,ref:$,"aria-live":"polite","aria-busy":S},De,u.Children.toArray(t.map(Ct))):null,Qt=U?e.createElement("div",{className:C.PaginationWrapper},e.createElement(hn,Object.assign({type:"table"},U))):null,Gt={selectable:G,selectedItems:i,selectMode:M,hasBulkActions:!!v,resourceName:x,loading:S,onSelectionChange:_t};return e.createElement(xt.Provider,{value:Gt},It,e.createElement("div",{className:C.ResourceListWrapper},wt,qt,Ht,Ot,Dt,Qt))}xe.Item=$n;const Gr={title:"Polaris/Prototypes/SelectProductPage",parameters:{layout:"fullscreen"}},Pt=[{id:"1",name:"Classic Cotton T-Shirt",price:"$19.99",status:"Active",image:"https://burst.shopifycdn.com/photos/black-t-shirt.jpg",type:"Apparel",vendor:"Cotton Co"},{id:"2",name:"Denim Jeans - Blue",price:"$49.99",status:"Active",image:"https://burst.shopifycdn.com/photos/flatlay-iron-jeans.jpg",type:"Apparel",vendor:"Denim Works"},{id:"3",name:"Leather Sneakers",price:"$79.99",status:"Active",image:"https://burst.shopifycdn.com/photos/white-sneakers.jpg",type:"Footwear",vendor:"Shoe Brand"},{id:"4",name:"Wool Winter Hat",price:"$24.99",status:"Active",image:"https://burst.shopifycdn.com/photos/person-holds-a-warm-wooly-hat.jpg",type:"Accessories",vendor:"Winter Wear"},{id:"5",name:"Canvas Tote Bag",price:"$34.99",status:"Active",image:"https://burst.shopifycdn.com/photos/tote-bag.jpg",type:"Accessories",vendor:"Bag Co"}],Ae={render:()=>{const[t,a]=e.useState(""),[r,o]=e.useState([]),[d,l]=e.useState([]),m=s=>a(s),v=()=>{a(""),l([])},i=s=>{const k=r.some(y=>y.id===s.id);o(k?r.filter(y=>y.id!==s.id):[...r,{id:s.id,name:s.name,image:s.image,price:s.price}])},g=s=>{o(r.filter(k=>k.id!==s))},p=[{key:"status",label:"Status",filter:n.jsx("div",{style:{padding:"8px"},children:n.jsx(f,{as:"p",variant:"bodyMd",children:"Filter by status"})}),shortcut:!0},{key:"type",label:"Product type",filter:n.jsx("div",{style:{padding:"8px"},children:n.jsx(f,{as:"p",variant:"bodyMd",children:"Filter by type"})}),shortcut:!0}],h=[];d.length>0&&h.push({key:"status",label:`Status: ${d.join(", ")}`,onRemove:()=>l([])});const S=n.jsx(yt,{queryValue:t,queryPlaceholder:"Search products",filters:p,appliedFilters:h,onQueryChange:m,onQueryClear:()=>a(""),onClearAll:v}),P=Pt.filter(s=>s.name.toLowerCase().includes(t.toLowerCase()));return n.jsxs(lt,{title:"Select product",subtitle:"Select one or more products that you want to test. Use the search bar below to search for a specific product.",backAction:{content:"Settings",url:"#"},children:[n.jsx(R,{paddingBlockEnd:"400",children:n.jsx(de,{children:n.jsx(R,{padding:"400",children:n.jsxs(re,{gap:"200",children:[n.jsx(f,{as:"h3",variant:"headingSm",children:"Progress: Step 1 of 4"}),n.jsx(kt,{progress:25,size:"small"}),n.jsxs(T,{gap:"200",wrap:!1,children:[n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"Select product"}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"→"}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"Split your traffic"}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"→"}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"Set your price"}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"→"}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"Final preview"})]})]})})})}),n.jsxs(ue,{children:[n.jsxs(ue.Section,{variant:"oneThird",children:[n.jsx(de,{padding:"0",children:n.jsx(R,{padding:"400",children:n.jsxs(re,{gap:"400",children:[n.jsx(f,{as:"h2",variant:"headingMd",children:"Selected products"}),r.length===0?n.jsx(R,{padding:"400",background:"bg-surface-secondary",borderRadius:"200",children:n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",alignment:"center",children:"No products selected yet"})}):n.jsx(re,{gap:"300",children:r.map(s=>n.jsx(de,{children:n.jsx(R,{padding:"300",children:n.jsxs(T,{gap:"300",align:"space-between",blockAlign:"center",children:[n.jsxs(T,{gap:"300",blockAlign:"center",children:[n.jsx(Ce,{source:s.image,alt:s.name,size:"small"}),n.jsxs(re,{gap:"100",children:[n.jsx(f,{as:"p",variant:"bodySm",fontWeight:"semibold",children:s.name}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:s.price})]})]}),n.jsx(ae,{icon:ct,variant:"plain",onClick:()=>g(s.id),accessibilityLabel:`Remove ${s.name}`})]})})},s.id))})]})})}),n.jsx(R,{paddingBlockStart:"400",children:n.jsxs(T,{gap:"300",align:"end",children:[n.jsx(ae,{children:"Save"}),n.jsx(ae,{variant:"primary",disabled:r.length===0,children:"Next"})]})})]}),n.jsx(ue.Section,{children:n.jsxs(de,{padding:"0",children:[n.jsx(R,{padding:"400",children:S}),n.jsx(bt,{}),n.jsx(xe,{resourceName:{singular:"product",plural:"products"},items:P,renderItem:s=>{const k=r.some(y=>y.id===s.id);return n.jsx(xe.Item,{id:s.id,onClick:()=>i(s),verticalAlignment:"center",media:n.jsx(Ce,{source:s.image,alt:s.name}),children:n.jsxs(T,{gap:"400",blockAlign:"center",wrap:!1,children:[n.jsx(R,{minWidth:"40px",children:n.jsx("input",{type:"checkbox",checked:k,onChange:()=>i(s),style:{width:"16px",height:"16px"}})}),n.jsxs(re,{gap:"100",children:[n.jsx(f,{as:"h3",variant:"bodyMd",fontWeight:"semibold",children:s.name}),n.jsxs(T,{gap:"200",children:[n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:s.price}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"•"}),n.jsx(gt,{tone:"success",children:s.status})]})]})]})})}})]})})]})]})}},Be={render:()=>{const[t,a]=e.useState(""),[r,o]=e.useState([{id:"1",name:"Classic Cotton T-Shirt",image:"https://burst.shopifycdn.com/photos/black-t-shirt.jpg",price:"$19.99"},{id:"3",name:"Leather Sneakers",image:"https://burst.shopifycdn.com/photos/white-sneakers.jpg",price:"$79.99"}]),[d,l]=e.useState([]),m=s=>a(s),v=()=>{a(""),l([])},i=s=>{const k=r.some(y=>y.id===s.id);o(k?r.filter(y=>y.id!==s.id):[...r,{id:s.id,name:s.name,image:s.image,price:s.price}])},g=s=>{o(r.filter(k=>k.id!==s))},p=[{key:"status",label:"Status",filter:n.jsx("div",{style:{padding:"8px"},children:n.jsx(f,{as:"p",variant:"bodyMd",children:"Filter by status"})}),shortcut:!0},{key:"type",label:"Product type",filter:n.jsx("div",{style:{padding:"8px"},children:n.jsx(f,{as:"p",variant:"bodyMd",children:"Filter by type"})}),shortcut:!0}],h=[];d.length>0&&h.push({key:"status",label:`Status: ${d.join(", ")}`,onRemove:()=>l([])});const S=n.jsx(yt,{queryValue:t,queryPlaceholder:"Search products",filters:p,appliedFilters:h,onQueryChange:m,onQueryClear:()=>a(""),onClearAll:v}),P=Pt.filter(s=>s.name.toLowerCase().includes(t.toLowerCase()));return n.jsxs(lt,{title:"Select product",subtitle:"Select one or more products that you want to test. Use the search bar below to search for a specific product.",backAction:{content:"Settings",url:"#"},children:[n.jsx(R,{paddingBlockEnd:"400",children:n.jsx(de,{children:n.jsx(R,{padding:"400",children:n.jsxs(re,{gap:"200",children:[n.jsx(f,{as:"h3",variant:"headingSm",children:"Progress: Step 1 of 4"}),n.jsx(kt,{progress:25,size:"small"}),n.jsxs(T,{gap:"200",wrap:!1,children:[n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"Select product"}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"→"}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"Split your traffic"}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"→"}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"Set your price"}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"→"}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"Final preview"})]})]})})})}),n.jsxs(ue,{children:[n.jsxs(ue.Section,{variant:"oneThird",children:[n.jsx(de,{padding:"0",children:n.jsx(R,{padding:"400",children:n.jsxs(re,{gap:"400",children:[n.jsx(f,{as:"h2",variant:"headingMd",children:"Selected products"}),n.jsx(re,{gap:"300",children:r.map(s=>n.jsx(de,{children:n.jsx(R,{padding:"300",children:n.jsxs(T,{gap:"300",align:"space-between",blockAlign:"center",children:[n.jsxs(T,{gap:"300",blockAlign:"center",children:[n.jsx(Ce,{source:s.image,alt:s.name,size:"small"}),n.jsxs(re,{gap:"100",children:[n.jsx(f,{as:"p",variant:"bodySm",fontWeight:"semibold",children:s.name}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:s.price})]})]}),n.jsx(ae,{icon:ct,variant:"plain",onClick:()=>g(s.id),accessibilityLabel:`Remove ${s.name}`})]})})},s.id))})]})})}),n.jsx(R,{paddingBlockStart:"400",children:n.jsxs(T,{gap:"300",align:"end",children:[n.jsx(ae,{children:"Save"}),n.jsx(ae,{variant:"primary",children:"Next"})]})})]}),n.jsx(ue.Section,{children:n.jsxs(de,{padding:"0",children:[n.jsx(R,{padding:"400",children:S}),n.jsx(bt,{}),n.jsx(xe,{resourceName:{singular:"product",plural:"products"},items:P,renderItem:s=>{const k=r.some(y=>y.id===s.id);return n.jsx(xe.Item,{id:s.id,onClick:()=>i(s),verticalAlignment:"center",media:n.jsx(Ce,{source:s.image,alt:s.name}),children:n.jsxs(T,{gap:"400",blockAlign:"center",wrap:!1,children:[n.jsx(R,{minWidth:"40px",children:n.jsx("input",{type:"checkbox",checked:k,onChange:()=>i(s),style:{width:"16px",height:"16px"}})}),n.jsxs(re,{gap:"100",children:[n.jsx(f,{as:"h3",variant:"bodyMd",fontWeight:"semibold",children:s.name}),n.jsxs(T,{gap:"200",children:[n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:s.price}),n.jsx(f,{as:"p",variant:"bodySm",tone:"subdued",children:"•"}),n.jsx(gt,{tone:"success",children:s.status})]})]})]})})}})]})})]})]})}};var nt,rt,at;Ae.parameters={...Ae.parameters,docs:{...(nt=Ae.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  render: () => {
    const [searchValue, setSearchValue] = React.useState("");
    const [selectedProducts, setSelectedProducts] = React.useState<SelectedProduct[]>([]);
    const [statusFilter, setStatusFilter] = React.useState<string[]>([]);
    const handleSearchChange = (value: string) => setSearchValue(value);
    const handleClearAll = () => {
      setSearchValue("");
      setStatusFilter([]);
    };
    const toggleProductSelection = (product: typeof mockProducts[0]) => {
      const isSelected = selectedProducts.some(p => p.id === product.id);
      if (isSelected) {
        setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
      } else {
        setSelectedProducts([...selectedProducts, {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price
        }]);
      }
    };
    const removeProduct = (productId: string) => {
      setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
    };
    const filters = [{
      key: "status",
      label: "Status",
      filter: <div style={{
        padding: "8px"
      }}>
            <Text as="p" variant="bodyMd">
              Filter by status
            </Text>
          </div>,
      shortcut: true
    }, {
      key: "type",
      label: "Product type",
      filter: <div style={{
        padding: "8px"
      }}>
            <Text as="p" variant="bodyMd">
              Filter by type
            </Text>
          </div>,
      shortcut: true
    }];
    const appliedFilters: any[] = [];
    if (statusFilter.length > 0) {
      appliedFilters.push({
        key: "status",
        label: \`Status: \${statusFilter.join(", ")}\`,
        onRemove: () => setStatusFilter([])
      });
    }
    const filterControl = <Filters queryValue={searchValue} queryPlaceholder="Search products" filters={filters} appliedFilters={appliedFilters} onQueryChange={handleSearchChange} onQueryClear={() => setSearchValue("")} onClearAll={handleClearAll} />;
    const filteredProducts = mockProducts.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
    return <Page title="Select product" subtitle="Select one or more products that you want to test. Use the search bar below to search for a specific product." backAction={{
      content: "Settings",
      url: "#"
    }}>
        <Box paddingBlockEnd="400">
          <Card>
            <Box padding="400">
              <BlockStack gap="200">
                <Text as="h3" variant="headingSm">
                  Progress: Step 1 of 4
                </Text>
                <ProgressBar progress={25} size="small" />
                <InlineStack gap="200" wrap={false}>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Select product
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    →
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Split your traffic
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    →
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Set your price
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    →
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Final preview
                  </Text>
                </InlineStack>
              </BlockStack>
            </Box>
          </Card>
        </Box>

        <Layout>
          <Layout.Section variant="oneThird">
            <Card padding="0">
              <Box padding="400">
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Selected products
                  </Text>
                  {selectedProducts.length === 0 ? <Box padding="400" background="bg-surface-secondary" borderRadius="200">
                      <Text as="p" variant="bodySm" tone="subdued" alignment="center">
                        No products selected yet
                      </Text>
                    </Box> : <BlockStack gap="300">
                      {selectedProducts.map(product => <Card key={product.id}>
                          <Box padding="300">
                            <InlineStack gap="300" align="space-between" blockAlign="center">
                              <InlineStack gap="300" blockAlign="center">
                                <Thumbnail source={product.image} alt={product.name} size="small" />
                                <BlockStack gap="100">
                                  <Text as="p" variant="bodySm" fontWeight="semibold">
                                    {product.name}
                                  </Text>
                                  <Text as="p" variant="bodySm" tone="subdued">
                                    {product.price}
                                  </Text>
                                </BlockStack>
                              </InlineStack>
                              <Button icon={XIcon} variant="plain" onClick={() => removeProduct(product.id)} accessibilityLabel={\`Remove \${product.name}\`} />
                            </InlineStack>
                          </Box>
                        </Card>)}
                    </BlockStack>}
                </BlockStack>
              </Box>
            </Card>

            <Box paddingBlockStart="400">
              <InlineStack gap="300" align="end">
                <Button>Save</Button>
                <Button variant="primary" disabled={selectedProducts.length === 0}>
                  Next
                </Button>
              </InlineStack>
            </Box>
          </Layout.Section>

          <Layout.Section>
            <Card padding="0">
              <Box padding="400">{filterControl}</Box>
              <Divider />
              <ResourceList resourceName={{
              singular: "product",
              plural: "products"
            }} items={filteredProducts} renderItem={item => {
              const isSelected = selectedProducts.some(p => p.id === item.id);
              return <ResourceList.Item id={item.id} onClick={() => toggleProductSelection(item)} verticalAlignment="center" media={<Thumbnail source={item.image} alt={item.name} />}>
                      <InlineStack gap="400" blockAlign="center" wrap={false}>
                        <Box minWidth="40px">
                          <input type="checkbox" checked={isSelected} onChange={() => toggleProductSelection(item)} style={{
                      width: "16px",
                      height: "16px"
                    }} />
                        </Box>
                        <BlockStack gap="100">
                          <Text as="h3" variant="bodyMd" fontWeight="semibold">
                            {item.name}
                          </Text>
                          <InlineStack gap="200">
                            <Text as="p" variant="bodySm" tone="subdued">
                              {item.price}
                            </Text>
                            <Text as="p" variant="bodySm" tone="subdued">
                              •
                            </Text>
                            <Badge tone="success">{item.status}</Badge>
                          </InlineStack>
                        </BlockStack>
                      </InlineStack>
                    </ResourceList.Item>;
            }} />
            </Card>
          </Layout.Section>
        </Layout>
      </Page>;
  }
}`,...(at=(rt=Ae.parameters)==null?void 0:rt.docs)==null?void 0:at.source}}};var st,it,ot;Be.parameters={...Be.parameters,docs:{...(st=Be.parameters)==null?void 0:st.docs,source:{originalSource:`{
  render: () => {
    const [searchValue, setSearchValue] = React.useState("");
    const [selectedProducts, setSelectedProducts] = React.useState<SelectedProduct[]>([{
      id: "1",
      name: "Classic Cotton T-Shirt",
      image: "https://burst.shopifycdn.com/photos/black-t-shirt.jpg",
      price: "$19.99"
    }, {
      id: "3",
      name: "Leather Sneakers",
      image: "https://burst.shopifycdn.com/photos/white-sneakers.jpg",
      price: "$79.99"
    }]);
    const [statusFilter, setStatusFilter] = React.useState<string[]>([]);
    const handleSearchChange = (value: string) => setSearchValue(value);
    const handleClearAll = () => {
      setSearchValue("");
      setStatusFilter([]);
    };
    const toggleProductSelection = (product: typeof mockProducts[0]) => {
      const isSelected = selectedProducts.some(p => p.id === product.id);
      if (isSelected) {
        setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
      } else {
        setSelectedProducts([...selectedProducts, {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price
        }]);
      }
    };
    const removeProduct = (productId: string) => {
      setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
    };
    const filters = [{
      key: "status",
      label: "Status",
      filter: <div style={{
        padding: "8px"
      }}>
            <Text as="p" variant="bodyMd">
              Filter by status
            </Text>
          </div>,
      shortcut: true
    }, {
      key: "type",
      label: "Product type",
      filter: <div style={{
        padding: "8px"
      }}>
            <Text as="p" variant="bodyMd">
              Filter by type
            </Text>
          </div>,
      shortcut: true
    }];
    const appliedFilters: any[] = [];
    if (statusFilter.length > 0) {
      appliedFilters.push({
        key: "status",
        label: \`Status: \${statusFilter.join(", ")}\`,
        onRemove: () => setStatusFilter([])
      });
    }
    const filterControl = <Filters queryValue={searchValue} queryPlaceholder="Search products" filters={filters} appliedFilters={appliedFilters} onQueryChange={handleSearchChange} onQueryClear={() => setSearchValue("")} onClearAll={handleClearAll} />;
    const filteredProducts = mockProducts.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
    return <Page title="Select product" subtitle="Select one or more products that you want to test. Use the search bar below to search for a specific product." backAction={{
      content: "Settings",
      url: "#"
    }}>
        <Box paddingBlockEnd="400">
          <Card>
            <Box padding="400">
              <BlockStack gap="200">
                <Text as="h3" variant="headingSm">
                  Progress: Step 1 of 4
                </Text>
                <ProgressBar progress={25} size="small" />
                <InlineStack gap="200" wrap={false}>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Select product
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    →
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Split your traffic
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    →
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Set your price
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    →
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Final preview
                  </Text>
                </InlineStack>
              </BlockStack>
            </Box>
          </Card>
        </Box>

        <Layout>
          <Layout.Section variant="oneThird">
            <Card padding="0">
              <Box padding="400">
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Selected products
                  </Text>
                  <BlockStack gap="300">
                    {selectedProducts.map(product => <Card key={product.id}>
                        <Box padding="300">
                          <InlineStack gap="300" align="space-between" blockAlign="center">
                            <InlineStack gap="300" blockAlign="center">
                              <Thumbnail source={product.image} alt={product.name} size="small" />
                              <BlockStack gap="100">
                                <Text as="p" variant="bodySm" fontWeight="semibold">
                                  {product.name}
                                </Text>
                                <Text as="p" variant="bodySm" tone="subdued">
                                  {product.price}
                                </Text>
                              </BlockStack>
                            </InlineStack>
                            <Button icon={XIcon} variant="plain" onClick={() => removeProduct(product.id)} accessibilityLabel={\`Remove \${product.name}\`} />
                          </InlineStack>
                        </Box>
                      </Card>)}
                  </BlockStack>
                </BlockStack>
              </Box>
            </Card>

            <Box paddingBlockStart="400">
              <InlineStack gap="300" align="end">
                <Button>Save</Button>
                <Button variant="primary">Next</Button>
              </InlineStack>
            </Box>
          </Layout.Section>

          <Layout.Section>
            <Card padding="0">
              <Box padding="400">{filterControl}</Box>
              <Divider />
              <ResourceList resourceName={{
              singular: "product",
              plural: "products"
            }} items={filteredProducts} renderItem={item => {
              const isSelected = selectedProducts.some(p => p.id === item.id);
              return <ResourceList.Item id={item.id} onClick={() => toggleProductSelection(item)} verticalAlignment="center" media={<Thumbnail source={item.image} alt={item.name} />}>
                      <InlineStack gap="400" blockAlign="center" wrap={false}>
                        <Box minWidth="40px">
                          <input type="checkbox" checked={isSelected} onChange={() => toggleProductSelection(item)} style={{
                      width: "16px",
                      height: "16px"
                    }} />
                        </Box>
                        <BlockStack gap="100">
                          <Text as="h3" variant="bodyMd" fontWeight="semibold">
                            {item.name}
                          </Text>
                          <InlineStack gap="200">
                            <Text as="p" variant="bodySm" tone="subdued">
                              {item.price}
                            </Text>
                            <Text as="p" variant="bodySm" tone="subdued">
                              •
                            </Text>
                            <Badge tone="success">{item.status}</Badge>
                          </InlineStack>
                        </BlockStack>
                      </InlineStack>
                    </ResourceList.Item>;
            }} />
            </Card>
          </Layout.Section>
        </Layout>
      </Page>;
  }
}`,...(ot=(it=Be.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};const Xr=["BasicUsage","WithSelectedItems"];export{Ae as BasicUsage,Be as WithSelectedItems,Xr as __namedExportsOrder,Gr as default};
