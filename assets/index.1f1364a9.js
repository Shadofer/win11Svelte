import"./index.52c3ee22.js";function $(t){return Math.sqrt(1- --t*t)}function y(t){const o=t-1;return o*o*o+1}function d(t,{delay:o=0,duration:a=400,easing:e=y,x:f=0,y:i=0,opacity:s=0}={}){const n=getComputedStyle(t),r=+n.opacity,p=n.transform==="none"?"":n.transform,u=r*(1-s);return{delay:o,duration:a,easing:e,css:(m,c)=>`
			transform: ${p} translate(${(1-m)*f}px, ${(1-m)*i}px);
			opacity: ${r-u*c}`}}function g(t,{delay:o=0,duration:a=400,easing:e=y,start:f=0,opacity:i=0}={}){const s=getComputedStyle(t),n=+s.opacity,r=s.transform==="none"?"":s.transform,p=1-f,u=n*(1-i);return{delay:o,duration:a,easing:e,css:(m,c)=>`
			transform: ${r} scale(${1-p*c});
			opacity: ${n-u*c}
		`}}export{$ as c,d as f,g as s};
