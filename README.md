# DropDownList
A simple react dropdownlist component

##Installation

```
npm install dropdownlist --save
```

##Usage

##### Simple example:
```javascript
var DropDownList = require("dropdownlist");
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
    <DropDownList title="Select a Item..." 
      onSelectedItemChange={(id,text)=>{
        let txtValue = document.getElementById("selectedItem");
        txtValue.innerHTML = id;
      }}
      data={sampleData} />,
    document.getElementById("react-root")
);

```

You can set the keyFieldName and textFieldName props, if you don't want to use default filed name for id and text field.

```javascript
var DropDownList = require("dropdownlist");
var ReactDom = require("react-dom");
var React = require("react");

var sampleData = [
    {key:"1",tvalue:"Paris"},
    {key:"2",tvalue:"California"},
    {key:"3",tvalue:"Amesterdam"},
    {key:"4",tvalue:"Buenos Aires"},
    {key:"5",tvalue:"Lisbon"},
    {key:"6",tvalue:"London"}
];

ReactDom.render(
    <DropDownList title="Select a Item..." 
      onSelectedItemChange={(id,text)=>{
        let txtValue = document.getElementById("selectedItem");
        txtValue.innerHTML = id;
      }}
      keyFieldName = "key"
      textFieldName="tvalue"
      data={sampleData} />,
    document.getElementById("react-root")
);

```

If you want to show value field in dropdownlist, set showValue property : 
```
ReactDom.render(
    <DropDownList title="Select a Item..." 
      onSelectedItemChange={(id,text)=>{
        let txtValue = document.getElementById("selectedItem");
        txtValue.innerHTML = id;
      }}
      showValue="true"
      data={sampleData} />,
    document.getElementById("react-root")
);

```

##### build

```
npm run tsc && npm run webpack

```

