import React, { Component } from 'react';

function WithLoadingIcon(Component) {
    return class WithLoadingIcon extends Component {
        state = { showLoadingIcon: false }
        HandleShowLoadingIcon = () => {
            this.setState({ showLoadingIcon: true })
        }
        HandleHideLoadingIcon = () => {
            this.setState({ showLoadingIcon: false })
        }
        render() {
            return (
                <div onMouseOver={this.HandleShowLoadingIcon} onMouseOut={this.HandleHideLoadingIcon} className="loading-icon overlay">
                    <Component
                        {...this.props}
                        ShowLoadingIcon={this.state.showLoadingIcon} />
                </div>
            );
        }
    }
}

export default WithLoadingIcon