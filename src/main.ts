const appContainer = document.getElementById("app");

const el = document.createElement("div");
el.innerHTML = `
    <h1>Hello World </h1>
   <span style="background-color: blue; color: white;">
     This is a web app built without frameworks
   </span>
 `;

appContainer?.appendChild(el);
