let t=null;const e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");function a(){e.disabled=!e.disabled,d.disabled=!d.disabled}d.disabled=!0,e.addEventListener("click",(()=>{t=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),a()})),d.addEventListener("click",(()=>{clearInterval(t),a()}));
//# sourceMappingURL=01-color-switcher.2149a3e3.js.map