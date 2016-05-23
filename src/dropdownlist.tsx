import React = require("react");
import ReactDom = require("react-dom");

interface PropType {
    keyFieldName?: string;
    textFieldName?: string;
    type?: string;
    title?: string;
    textboxName?: string;
    placeholder?: string;
    data?: any[];
    ref?: string;
    onSelectedItemChange?: Function;
    showValue?:boolean;
}

interface StateType {
    containerClassName?: string;
    NodeIconColorClassName?: string;
    searchSectionVisibility?: string;
    typedText?: string;
    selectedValueState?: string;
    selectedTextState?: string;
}

class DropDownList extends React.Component<PropType, StateType>{

    constructor(props) {
        super(props);
    }

    state: StateType = {
        containerClassName: '',
        NodeIconColorClassName: '',
        searchSectionVisibility: '',
        selectedValueState: '',
        selectedTextState: '',
        typedText: ''
    }

    static defaultProps: PropType = {
        keyFieldName: 'id',
        textFieldName: 'text',
        showValue :false
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onSelectedItemChange(value, text) {
        //e.preventDefault();
        this.props.onSelectedItemChange(value, text);
    }

    onListItemClick(s) {
        let selectedValue = null;
        let selectedText = null;
        if (s != null) {
            selectedValue = s[this.props.keyFieldName];
            selectedText = s[this.props.textFieldName];

        } else {
            this.onBlur();
        }

        if (selectedValue != null)
            this.refs["nodevalue"].value = selectedText;

        this.setState({
            selectedTextState: selectedText ? selectedText : '',
            selectedValueState: selectedValue ? selectedValue : '',
            containerClassName: !selectedValue ? '' : 'is-focused',
            NodeIconColorClassName: !selectedValue ? '' : 'blue',
            searchSectionVisibility: 'false'
        });

        if (selectedValue) {
            this.onSelectedItemChange(selectedValue, selectedText);
        }

    }

    onFocus() {
        this.setState({ containerClassName: 'is-focused' });
        this.setState({ NodeIconColorClassName: 'blue' });
        this.setState({ searchSectionVisibility: 'true' });
    }

    onBlur() {
        if (this.refs["nodevalue"].value == "") {
            this.setState({ containerClassName: '' });
            this.setState({ NodeIconColorClassName: '' });

        } else {
            this.setState({ NodeIconColorClassName: 'blue' });
            this.setState({ searchSectionVisibility: 'false' });
        }
        this.setState({ searchSectionVisibility: 'false' });
    }


    onChange() {
        this.setState({ typedText: this.refs["nodevalue"].value });
    }

    input;
    render() {
        return (

            <div className="react-dropdownlist-DropDownList-css">

                <div ref="node" className={`react-dropdownlist  react-dropdownlist--floating-label ${this.state.containerClassName}`}>

                    <input ref="nodevalue" className="react-dropdownlist__input" type="text" id="react_dropdownlist_label"
                        onFocus={this.onFocus.bind(this) }
                        onBlur={this.onBlur.bind(this) }
                        onChange={this.onChange.bind(this) }
                        />
                    {this.state.searchSectionVisibility == 'true' &&
                        <div className="react-dropdownlist-DropDownListResultSection">

                            {this.props.data.map((s, i) => {

                                if (s[this.props.textFieldName].indexOf(this.state.typedText) > -1) {
                                    return <div  onMouseDown={this.onListItemClick.bind(this, s) }  className="react-dropdownlist-RowSelectionDiv" key={i}>

                                    { this.props.showValue==true &&

                                        <div className="react-dropdownlist-ValueSectionDiv">
                                            <span className="react-dropdownlist-ValueSectionSpan">{s[this.props.keyFieldName]}</span>
                                        </div>}


                                        <div className="react-dropdownlist-TextSectionDiv">
                                            <span className="react-dropdownlist-TextSectionSpan">{s[this.props.textFieldName]}</span>
                                        </div>
                                    </div>;
                                } else {
                                    return null;
                                }

                            }) }

                        </div>}
                    <label className="react-dropdownlist__label" htmlFor="react_dropdownlist_label">{this.props.title}</label>

                </div>

            </div>
        );
    }
};

export = DropDownList
