var DropDownList = require("../../src/dropdownlist.tsx");
var ReactDom = require("react-dom");
var React = require("react");


var itemclick = function(id,text){

}

ReactDom.render(
    React.createElement(DropDownList,{

title:"Select a Item...",
onSelectedItemChange : (id,text)=>{
var txtValue = document.getElementById("selectedItem");
txtValue.innerHTML = id;
},
        data:[{
            id:"1",
            text:"ali"
        },
    {
        id:"2",
        text:"aaaa"
    },
    {
    id:"3",
    text:"sss"
}
]

    },null),
    document.getElementById("react-root")
);
