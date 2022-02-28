import React, { Component } from "react";
import Switch from "react-switch";

class SwitchComponent extends Component {
   
    handleChange = (checked) => {
        this.props.onChange?.(checked);
    }

    render() {
       const { allowCharge } = this.props

        return (
            <label>
                <Switch
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onColor="#0069E0"
                    onChange={this.handleChange}
                    checked={allowCharge}
                />
            </label>
        );
    }
}

export default SwitchComponent;
