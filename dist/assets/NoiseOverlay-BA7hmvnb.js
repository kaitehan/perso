import{r as a,j as o}from"./index-D-hOMEtW.js";import{ap as f,V as m,aj as v,as as h,v as p}from"./react-three-fiber.esm-T2TPoC0b.js";const r={zIndex:100,opacity:.5,alpha:1},u="noise-v1",d=e=>e.toFixed(3),x=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,y=`
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x)
      + (c - a) * u.y * (1.0 - u.x)
      + (d - b) * u.x * u.y;
  }

  void main() {
    vec2 pixel = gl_FragCoord.xy;
    float frame = uTime;
    float mask = noise(pixel / uResolution.y * 30.0 + 1000.0*hash(vec2(frame * 0.1))) * 0.2;
    mask = smoothstep(0.005, 0.03, mask);
    float b = noise(pixel / uResolution.y * 30.0 + 1000.0*hash(vec2(frame * 0.1))) * 0.2;
    b += noise(pixel / uResolution.y * 60.0 + 1000.0*hash(vec2(frame * 0.2))) * 0.5;
    b = clamp(b, 0.0, 1.0);
    b = smoothstep(0.1, 0.12, b);
    vec3 color = mix(vec3(0.2, 0.4, 0.45), vec3(1.0, 1.4, 1.3), b);
    color += vec3(mask);
    color *= hash(pixel / uResolution.y * 200.0 + 1000.0*hash(vec2(frame * 0.3))) * 4.0;
    color = clamp(color, 0.0, 1.0);
    gl_FragColor = vec4(color, ${d(r.alpha)});
  }
`;function R(){const e=a.useRef(null),t=a.useMemo(()=>new m,[]),n=a.useRef(-999),i=1;v(({clock:s,size:l})=>{e.current&&(s.elapsedTime-n.current<1/i*.5||(n.current=s.elapsedTime,e.current.uniforms.uTime.value=s.elapsedTime%1e4,t.set(l.width,l.height),e.current.uniforms.uResolution.value=t))}),a.useEffect(()=>{const s=setInterval(()=>h(),1e3/i);return()=>clearInterval(s)},[]);const c=a.useMemo(()=>({uTime:{value:0},uResolution:{value:t}}),[t]);return o.jsxs("mesh",{frustumCulled:!1,children:[o.jsx("planeGeometry",{args:[2,2]}),o.jsx("shaderMaterial",{ref:e,transparent:!0,depthTest:!1,depthWrite:!1,side:p,uniforms:c,vertexShader:x,fragmentShader:y},u)]})}function j(){const[e,t]=a.useState(!1);return a.useEffect(()=>t(!0),[]),e?o.jsx("div",{"aria-hidden":"true","data-three-noise-overlay":u,style:{position:"fixed",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:r.zIndex,mixBlendMode:"multiply"},children:o.jsx(f,{style:{width:"100%",height:"100%",opacity:r.opacity,pointerEvents:"none"},frameloop:"demand",camera:{position:[0,0,1]},gl:{alpha:!0,antialias:!1,powerPreference:"high-performance"},children:o.jsx(R,{})})}):null}export{j as default};
