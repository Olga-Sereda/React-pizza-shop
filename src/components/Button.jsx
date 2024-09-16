import React from "react";

export default class Button extends React.Component {
    render() {
        const {outline, className, children} = this.props

        return <button className={`button ${outline ? 'button--outline' : ''} ${className}`}
                onClick={this.props.onClick}>
            {children}
            </button>
    }
}