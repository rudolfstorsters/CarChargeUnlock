import React, { Component } from 'react'

class ResultsPage extends Component {

    render() {
        return (
            <div className="resultsPage">
                <div className="succesMark">
                    <div className="ellipse">
                        <div className="checkMark">
                        </div>
                    </div>
                    <p>Success</p>
                    <p className="description">Charger port has been unlocked</p>
                </div>

                <div className="backgroundImage"></div>
            </div>
        )
    }
}
export default ResultsPage