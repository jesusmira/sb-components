import{j as E}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";const t=({label:s="No label",size:q="normal",color:_="primary",allCaps:S=!1,fontColor:h,...x})=>E.jsx("span",{className:`${q} label text-${_}`,style:{color:h},...x,children:S?s.toUpperCase():s});try{t.displayName="MyLabel",t.__docgenInfo={description:"Primera prueba para el StoryBook, una etiqueta",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"Este es el mensaje que va a mostrar en la etiqueta",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Este es el tamaño por defecto del etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Si quieres todo Capitalizado",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Colores de la etiqueta",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secundary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Color personalizado de la fuente",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const L={title:"UI/MyLabel",component:t,tags:["autodocs"],argTypes:{color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"No label",size:"normal",allCaps:!1}},a={args:{label:"No label",size:"normal",allCaps:!0}},r={args:{label:"No label",size:"normal",color:"secundary"}},l={args:{label:"No label",size:"normal",color:"tertiary"}},o={args:{label:"No label",size:"h1",fontColor:"#5517ac"}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'No label',
    size: 'normal',
    allCaps: false //true: capitalizar toda la Etiqueta 
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'No label',
    size: 'normal',
    allCaps: true
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,b,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'No label',
    size: 'normal',
    color: 'secundary'
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,g,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'No label',
    size: 'normal',
    color: 'tertiary'
  }
}`,...(C=(g=l.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var z,N,v;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'No label',
    size: 'h1',
    fontColor: '#5517ac'
  }
}`,...(v=(N=o.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const M=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{a as AllCaps,e as Basic,o as CustomFontColor,r as Secondary,l as Tertiary,M as __namedExportsOrder,L as default};
//# sourceMappingURL=MyLabel.stories-725e2430.js.map
