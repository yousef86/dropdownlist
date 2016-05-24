var DropDownList = require("../../src/dropdownlist.tsx");
var ReactDom = require("react-dom");
var React = require("react");

    var sampleData = [
        {id:"1",text:"Paris"},
        {id:"2",text:"California"},
        {id:"3",text:"Amesterdam"},
        {id:"4",text:"Buenos Aires"},
        {id:"5",text:"Lisbon"},
        {id:"6",text:"London"}
    ];

ReactDom.render(
    React.createElement(DropDownList,{

title:"Select a Item...",
onSelectedItemChange : (id,text)=>{
var txtValue = document.getElementById("selectedItem");
txtValue.innerHTML = id;
},

data:sampleData

    },null),
    document.getElementById("react-root")
);
