import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// temporary - we should be getting an origin instance from our app,
// not using a global singleton
import origin from '../services/origin'

import ListingCardPrices from './listing-card-prices.js';

class ListingCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  async componentDidMount() {
    try {
      const listing = await origin.listings.getByIndex(this.props.listingId)
      const obj = Object.assign({}, listing, { loading: false })

      this.setState(obj)
		 console.log("Waheed" + process.env.CONTRACT_ADDRESSES);
    } catch (error) {
      console.error(`Error fetching contract or IPFS info for listingId: ${this.props.listingId}`)
    }
  }

  render() {
    const { experience, address, category, loading, name, pictures, price, unitsAvailable } = this.state
    const photo = pictures && pictures.length && (new URL(pictures[0])).protocol === "data:" && pictures[0]

		console.log("Experience" + experience);

    return (
      <div className={`col-12 list-group-item list-group-item-action flex-column align-items-start listing-card${loading ? ' loading' : ''}`}>
        <div className="col-12">
        <Link to={`/listing/${address}`}>
          <div className="row">
          <div className="col-6">
              <div className="category placehold">{category} 
              </div>
              <h2 className="col-6 title placehold text-truncate">{name}</h2>
              {price >= 0 && <ListingCardPrices price={price} unitsAvailable={unitsAvailable} />}
            </div>

            <div className="col-6">
             {photo &&
                <div className="photo" style={{ backgroundImage: `url("${photo}")` }}>
                </div>
              }
              {!photo &&
                <div className="col-6 image-container d-flex justify-content-center">
                  <img src="images/default-image.svg" alt="camera icon" />
                </div>
              }
            </div>
          </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default ListingCard
