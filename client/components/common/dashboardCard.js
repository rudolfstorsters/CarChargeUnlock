import React from "react";
import RangeSlider from "./rangeSlider";
import SwitchComponent from "./switch";
class DashboardCardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            range: props.rangeVal,
            allowCharge: props.allowCharge,
        }
    }

    handleCheck = (value) => {
        this.setState({
            allowCharge: value
        })
    }

    handleRange = (value) => {
        this.setState({
            range: value
        })
    }

    render() {
        const { name } = this.props;

        return (
            <div className="dashboardCard">
                <div className="card">
                    <h2>{name}</h2>
                    <div className="swiperContainer">
                        <p>Allow charger unlock</p>
                        <SwitchComponent allowCharge={this.state.allowCharge} onChange={this.handleCheck} />
                    </div>
                    <RangeSlider rangeVal={this.state.range} onRange={this.handleRange} />
                    <div className="btnContainer">
                        <button className="homeNavBtn"> Download QR</button>
                        <button className="homeNavBtn"> Get Link</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardCardComponent;