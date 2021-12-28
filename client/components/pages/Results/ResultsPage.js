import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

export const SUCCESS = 'success';
export const FAIL = 'fail'

class ResultsPage extends Component {

    render() {
       const status = this.props?.match?.params?.status
        return (
            <div className="resultsPage">
                {status !== SUCCESS && status !== FAIL ? <Redirect path={"/"} /> : null}
                {status == SUCCESS ?
                    <>
                        <div className="succesMark">
                            <div className="ellipse">
                                <div className="checkMark">
                                </div>
                            </div>
                            <p>Success</p>
                            <p className="description">Charger port has been unlocked</p>
                        </div>
                        <div className="backgroundImage"></div>
                    </>
                    :
                    <>
                        <div className="succesMark">
                            <div className="failEllipse">
                                <div className="failMark">
                                </div>
                            </div>
                            <p>FAILED</p>
                            <p className="description">Unable to Unlock</p>
                        </div>

                        <div className="backgroundImage"></div>
                    </>
                }
            </div>
        )
    }
}
export default ResultsPage
