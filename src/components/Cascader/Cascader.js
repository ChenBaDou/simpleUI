import React from "react";
import "./Cascader.scss";
import ElementUtils from "../../js/common/ElementUtils";

class Cascader extends React.Component() {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: ''
        };
    }
}

export default Cascader;
