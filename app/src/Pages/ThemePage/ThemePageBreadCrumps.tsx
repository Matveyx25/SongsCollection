import React from 'react'

class ThemePageBreadCrumps extends React.Component<{match: any}> {

    render() {
        return <span>{this.props.match.params.themeName}</span>
    }
}


export default ThemePageBreadCrumps
