import React from 'react'

export const ThemePageBreadCrumps = ({match}) => {
	return <span>{match.params.themeName}</span>
}