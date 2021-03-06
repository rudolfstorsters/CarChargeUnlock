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
        });
    }
    render() {
        return (
            <div className="scanPage">
                {this.state.isDesktop ?
                    <div className="scannerMessage description">
                        This page can only be viewed on mobile devices held in portrait position.
                    </div>
                    :
                    <div className="scannerContainer">
                    <div className="scanner">
                        <QrReader
                            showViewFinder={false}
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: '100%' }}
                        />
                        <div className="scannerFrame"></div>
                        </div>
                        <p className="scannerText">
                            Scan the QR code for the car you want to unlock the charge port
                        </p>
                    </div>
                }
            </div>
        )
    }
}
export default ScanPage