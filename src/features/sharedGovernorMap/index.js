import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import './jquery.vmap.js'
import './jquery.vmap.usa.js'
import $ from 'jquery'
import './SharedGovernorMap.sass'

// children as a prop?
export default function SharedGovernorMap ({ data, stateColors, hoverColor, uncommittedPostalCds, mapLegend, className, ...props }) {
  const [hover, setHover] = useState(false)
  const [postalCd, setPostalCd] = useState()
  const [stateName, setStateName] = useState()

  useEffect(() => {
    initializeMap()
  })

  function initializeMap () {
    $('#governor-map').vectorMap({
      map: 'usa_en',
      backgroundColor: null,
      borderWidth: 3,
      borderColor: '#FFFFFF',
      color: '#E0E0E0',
      colors: stateColors,
      hoverColor: hoverColor,
      enableZoom: false,
      onRegionOver: onRegionOver,
      onRegionOut: onRegionOut,
      selectedColor: ''
    })
  };

  function isUncommitted (postalCd) {
    return uncommittedPostalCds.includes(postalCd)
  }

  function onRegionOver (event, postalCd, stateName) {
    if (isUncommitted(postalCd)) {
      event.preventDefault()
      return
    }
    setHover(true)
    setPostalCd(postalCd)
    setStateName(stateName)
  }

  function onRegionOut () {
    setHover(false)
  }

  const committed = !isUncommitted(postalCd)
  const containerClass = className ? `${className}__container` : null

  return (
    <div className={classNames('SharedGovernorMap', className)}>
      <div className={classNames('SharedGovernorMap__container', containerClass)}>
        <div id='governor-map'/>
        {mapLegend}
      </div>
      {props.children(hover, committed, stateName)}
    </div>
  )
}
