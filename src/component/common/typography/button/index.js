import React from "react";

export class NormalButton extends React.Component {
    render() {
        const {
            className = "",
            label = "",
            onClick,
            id,
            disabled = false,
            rightIcon = "",
            loader = false
        } = this.props;

        return (

            <button
                id={id}
                className={`btn ${className === '' ? 'btn-primary' : className}`}
                onClick={
                    onClick?onClick:''
                }
                disabled={disabled || loader}
            >
                {label}
                {rightIcon !== "" ? (
                    <span className={`btn-right-icon ${rightIcon}`}></span>
                ) : (
                        ""
                    )}

                {loader ? (
                    <div className="spinner-border text-light ml-1" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                        ""
                    )}
            </button>

        );
    }
}
