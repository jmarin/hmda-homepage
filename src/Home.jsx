import React from 'react'

const Home = () => {
  return (
    <main className="home" id="main-content">
      <div className="usa-grid">
        <div className="usa-width-one-whole">
          <div
            className="usa-alert usa-alert-error"
            style={{ marginTop: '3em' }}
          >
            <div className="usa-alert-body">
              <h3 className="usa-alert-heading">Maintenance notification</h3>
              <p className="usa-alert-text" style={{ marginBottom: '1em' }}>
                The HMDA filing application, tools, and publication data are
                currently unavailable this weekend for scheduled maintenance.
              </p>
              <p className="usa-alert-text">
                This includes the rate spread tool. For your convenience, the
                “Average Prime Offer Rates”{' '}
                <a href="https://s3.amazonaws.com/cfpb-hmda-public/prod/apor/YieldTableFixed.txt">
                  fixed table
                </a>{' '}
                or{' '}
                <a href="https://s3.amazonaws.com/cfpb-hmda-public/prod/apor/YieldTableAdjustable.txt">
                  adjustable table
                </a>{' '}
                are still available for download, along with the{' '}
                <a href="https://s3.amazonaws.com/cfpb-hmda-public/prod/apor/SurveyTable.csv">
                  mortgage rate survey data
                </a>.
              </p>
            </div>
          </div>

          <header>
            <h1>The Home Mortgage Disclosure Act</h1>
            <p className="usa-font-lead">
              HMDA requires many financial institutions to maintain, report, and
              publicly disclose information about mortgages.
            </p>
          </header>

          <div className="usa-alert usa-alert-info">
            <div className="usa-alert-body">
              <h3 className="usa-alert-heading">Announcement</h3>
              <p className="usa-alert-text">
                Most{' '}
                <a href="/data-publication/disclosure-reports/2017">
                  disclosure reports
                </a>{' '}
                are now available. Reports continue to be added as they are
                generated.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <header>
            <h3>
              <a href="/filing/" rel="noopener noreferrer" target="_blank">
                Get started filing your HMDA data
              </a>
            </h3>
            <p>
              Beginning with HMDA data collected in or after 2017, financial
              institutions will use the HMDA Platform to upload their
              loan/application registers (LARs), review edits, certify the
              accuracy and completeness of the data, and submit data for the
              filing year.
            </p>
          </header>

          <h4>Help for Filers</h4>
          <p>
            Published resources for financial institutions required to file Home
            Mortgage Disclosure Act (HMDA) data.
          </p>
          <ul>
            <li>Filing Instructions Guide</li>
            <ul>
              <li>
                <a
                  href="https://s3.amazonaws.com/cfpb-hmda-public/prod/help/2017-hmda-fig.pdf"
                  download={true}
                >
                  For data collected in 2017
                </a>
              </li>
              <li>
                <a
                  href="https://s3.amazonaws.com/cfpb-hmda-public/prod/help/2018-hmda-fig.pdf"
                  download={true}
                >
                  For data collected in or after 2018
                </a>
              </li>
              <li>
                For data collected in or before 2016, please visit the{' '}
                <a href="https://www.ffiec.gov/hmda/fileformats.htm">
                  FFIEC website
                </a>{' '}
                for data submission resources.
              </li>
            </ul>
            <li>
              <a href="https://www.ffiec.gov/hmda/guide.htm">
                Getting It Right Guide
              </a>
            </li>
            <li>
              <a
                href="https://s3.amazonaws.com/cfpb-hmda-public/prod/help/HMDA-Loan-Scenarios.pdf"
                download={true}
              >
                Loan Scenarios
              </a>
            </li>
            <li>
              <a href="https://hmdahelp.consumerfinance.gov/knowledgebase/s/">
                Self Service Knowledge Portal
              </a>
            </li>
          </ul>
        </div>

        <div className="card">
          <header>
            <h3>
              <a href="/data-publication/">Data Publication</a>
            </h3>
            <p>
              The HMDA data and reports are the most comprehensive publicly
              available information on mortgage market activity.
            </p>
            <ul>
              <li>
                <a href="/data-publication/modified-lar">Modifed LAR</a>
              </li>
              <li>
                <a href="/data-publication/disclosure-reports/2017">
                  Disclosure Reports
                </a>
              </li>
              <li>
                <a href="/data-publication/aggregate-reports/2017">
                  MSA/MD Aggregate Reports
                </a>
              </li>
              <li>
                National Aggregate Reports{' '}
                <span className="usa-label">Coming Soon</span>
              </li>
              <li>
                <a href="/data-publication/snapshot-national-loan-level-dataset">
                  Snapshot National Loan-Level Dataset
                </a>
              </li>
            </ul>
          </header>

          <header>
            <h3>
              <a href="/tools/">Tools</a>
            </h3>
            <p>
              Here you can find various tools to assist you in getting your HMDA
              LAR ready for filing.
            </p>
            <ul>
              <li>
                <a href="/tools/file-format-verification">
                  File Format Verification
                </a>
              </li>
              <li>
                <a href="/tools/lar-formatting">LAR formatting</a>
              </li>
              <li>
                <a href="/tools/rate-spread">Rate Spread</a>
              </li>
              <li>
                <a href="/tools/check-digit">Check Digit</a>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </main>
  )
}

export default Home
