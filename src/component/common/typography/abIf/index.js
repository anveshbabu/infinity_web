import React from 'react';

export class AbIf extends React.Component {
    render() {
        if (this.props.show) {
            return (
                this.props.children
            );
        } else {
            return null
        }
    }
}

