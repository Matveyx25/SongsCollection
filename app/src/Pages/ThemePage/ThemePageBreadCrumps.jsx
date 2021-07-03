import React from 'react'

class ThemePageBreadCrumps extends React.Component {

    render() {
        return <span>{this.props.match.params.themeName}</span>
    }
}


export default ThemePageBreadCrumps
