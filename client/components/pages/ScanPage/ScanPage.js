import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class ScanPage extends Component {
    state = {
        result: 'No result',
        isDesktop: true,
    }
    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }
    handleError = err => {
        console.error(err)
    }
    componentDidMount() {
        window.addEventListener('resize', this.reportWindowSize);
        this.reportWindowSize()
    }
    reportWindowSize = data => {
        this.setState({
            isDesktop: document.body.clientWidth > 600
        })
    }
    render() {
        return (
            <div className="scanPage">
                {this.state.isDesktop ?
                    <div className="scannerMessage">
                        If your using a phone please turn to portrait.
                        If you are on a desktop then please
                        visit this page on your mobile device.
                    </div>
                    :
                    <div className="scanner">
                        <QrReader
                            showViewFinder={false}
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: '100%' }}
                        />
                    </div>
                }
            </div>
        )
    }
}
export default ScanPage