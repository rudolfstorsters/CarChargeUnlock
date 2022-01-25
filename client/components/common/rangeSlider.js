import React, { Component } from "react";
class RangeSlider extends Component {

    handleChange = (range) => {
       this.props.onRange?.(range);
    }
    render() {

        const { rangeVal } = this.props

        return (
            <div className="dashboardPage">
                <p>Car charger can be unlocked at
                    <span className="unlockStyle">
                        {rangeVal}%
                    </span>
                </p>
                <input
                    type="range"
                    className="slider"
                    min="1"
                    max="100"
                    onChange={event => this.handleChange(event.target.value)}
                    value={rangeVal}
                />
            </div>
        );
    }
}



export default RangeSlider;