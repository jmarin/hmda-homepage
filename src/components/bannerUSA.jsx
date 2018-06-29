import React from 'react'
import flag from '../img/favicons/favicon-57.png'

const USABanner = () => {
  return (
    <div className="usa-banner">
      <header className="usa-banner-header">
        <div className="usa-grid usa-banner-inner">
          <img src={flag} alt="U.S. flag" />
          <p>An official website of the United States government</p>
        </div>
      </header>
    </div>
  )
}

export default USABanner
