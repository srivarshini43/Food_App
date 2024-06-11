/*const heading=React.createElement("h1",{id:"heading"},"helloooooo");
console.log(heading);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);*/
   
/************nesting multiple html tags ****************/

    /*<div id="parent">
           <div id="child">
               <h1>nested html tags</h1>
            </div>   
       </div>

------->const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"nested html tags")) 
);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/

 /*<div id="parent">
           <div id="child">
               <h1>nested html tags</h1>  //can give it as an array of childrens(but react throws an error)
               <h2>nested html2 tags</h2>
            </div>   
       </div>

----->const parent=React.createElement("div",{id:"parent"},
       React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"nested html tags"),React.createElement("h2",{},"nested html2 tags")])
);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/
/*<div id="parent">
           <div id="child">
               <h1>nested html tags</h1>  
               <h2>nested html2 tags</h2>
            </div>  
             <div id="child2">
               <h1>nested html tags</h1>  
               <h2>nested html2 tags</h2>
            </div>  
       </div>

-------->const parent=React.createElement("div",{id:"parent"},
      [ React.createElement("div",{id:"child"},
      [React.createElement("h1",{},"nested html tags"),
       React.createElement("h2",{},"nested html2 tags")
    ]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"nested html tags"),
    React.createElement("h2",{},"nested html2 tags")])
]);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/

/*=======it looks very complex so we use jsx for this.but the above codes are the core of react======*/

