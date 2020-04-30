import React from 'react'
import SharedGovernorMap from '../sharedGovernorMap'
import apiCall from './fakeApi'

export default function UsaMap () {
  const data = apiCall()

  const uncommitted = ['fl', 'ak', 'hi', 'ky']

  function unCommitted (postalCd) {
    return uncommitted.includes(postalCd.toLowerCase())
  }

  function stateColors () {
    const stateColors = {}
    Object.keys(data).forEach((stateName) => {
      const stateObject = data[stateName]
      const postalCd = stateObject.postal_cd.toLowerCase()
      stateColors[postalCd] = pickColorForState(postalCd)
    })
    return stateColors
  }

  function pickColorForState (postalCd) {
    return (unCommitted(postalCd) ? '#E0E0E0' : '#FDB913')
  };

  function renderGovernorHighlight (hover, committed, stateName) {
    console.log('$$$$$'.repeat(50))
    console.log('stateName :', stateName)
    console.log('$$$$$'.repeat(50))
    console.log('data :', data)
    const stateData = data[stateName]
    if (hover && committed) {
      return (
        <div className='GovernorHighlight governor-highlight hide-on-mobile'>
          <div className='lg-modal-gov-img-container'>
            <div className={`lg-modal-gov-img sos-modal-lg-${stateData.postal_cd}`} />
          </div>
          <div>{stateData.state_name}</div>
          <div className='GovernorHighlight__governor-name'>{stateData.governor_name}</div>
          <p>
            <img className='GovernorHighlight__quote-icon' src='../../shared/assets/gov-quote-icon@2x.png'/>
            {stateData.governor_quote}
          </p>
        </div>
      )
    } else {
      return (
        <div className='GovernorHighlight__prompt hide-on-mobile'>
          <p>Roll over a state to see what their governor is saying about the importance of connecting schools.</p>
        </div>
      )
    }
  }

  return (
    <div>
      <SharedGovernorMap
        data={data}
        stateColors={stateColors()}
        hoverColor={'#009291'}
        uncommittedPostalCds={uncommitted}>
        {(hover, committed, stateName) => {
          return renderGovernorHighlight(hover, committed, stateName)
        }}
      </SharedGovernorMap>
    </div>
  )
};
