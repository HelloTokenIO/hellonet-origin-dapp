import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getListingIds } from '../actions/Listing'

import Pagination from 'react-js-pagination'
import { withRouter } from 'react-router'

import ListingCard from './listing-card'

class ListingsGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listingsPerPage: 12
    }
  }

  componentWillMount() {
    this.props.getListingIds()
  }

  render() {
    const { listingsPerPage } = this.state
    const { contractFound, listingIds } = this.props

    const activePage = this.props.match.params.activePage || 1
    // Calc listings to show for given page
    const showListingsIds = listingIds.slice(
      listingsPerPage * (activePage - 1),
      listingsPerPage * activePage
    )

    return (
      <div className="listings-wrapper">
        {contractFound === false && (
          <div className="listings-grid">
            <div className="alert alert-warning" role="alert">
              The HelloToken Contract was not found on this network.<br />
              You may need to change networks, or deploy the contract.
            </div>
          </div>
        )}
        {contractFound && (
          <div className="listings-grid">
            {listingIds.length > 0 && <h1>{listingIds.length} Listings</h1>}
            <div className="row">
              {showListingsIds.map(listingId => (
                <ListingCard listingId={listingId} key={listingId} />
              ))}
            </div>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={listingsPerPage}
              totalItemsCount={listingIds.length}
              pageRangeDisplayed={5}
              onChange={page => this.props.history.push(`/page/${page}`)}
              itemClass="page-item"
              linkClass="page-link"
              hideDisabled="true"
            />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  listingIds: state.listings.ids,
  contractFound: state.listings.contractFound
})

const mapDispatchToProps = dispatch => ({
  getListingIds: () => dispatch(getListingIds())
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(ListingsGrid)
)
