import {Component} from 'react'
import {CiCirclePlus} from 'react-icons/ci'
import {FaStar} from 'react-icons/fa'
import NavBar from '../NavBar'
import './index.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      applianceTypes: [],
      featuredTechnicians: [],
      error: '',
    }
  }

  componentDidMount() {
    this.fetchLocations()
    this.fetchApplianceTypes()
    this.fetchFeaturedTechnicians()
  }

  fetchLocations = () => {
    fetch('http://localhost:5000/locations')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch locations')
        }
        return response.json()
      })
      .then(data => this.setState({locations: data}))
      .catch(error => this.setState({error: error.message}))
  }

  fetchApplianceTypes = () => {
    fetch('http://localhost:5000/appliances')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch appliance types')
        }
        return response.json()
      })
      .then(data => this.setState({applianceTypes: data}))
      .catch(error => this.setState({error: error.message}))
  }

  fetchFeaturedTechnicians = () => {
    fetch('http://localhost:5000/featured-technicians')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch featured technicians')
        }
        return response.json()
      })
      .then(data => this.setState({featuredTechnicians: data}))
      .catch(error => this.setState({error: error.message}))
  }

  render() {
    const {locations, applianceTypes, featuredTechnicians, error} = this.state

    return (
      <div className='top-container'>
        <NavBar />
        <div className='top-section'>
          <div>
            <h1 className='title'>Take care of your home needs now!</h1>
            <p className='description'>
              ServicePro is your one-stop solution to troubleshoot, choose a
              vendor and book a technician.
            </p>
            <div className='select-container'>
              <select>
                {locations && locations.length > 0 ? (
                  locations.map((eachLocation, index) => (
                    <option key={index} value={eachLocation}>
                      {eachLocation}
                    </option>
                  ))
                ) : (
                  <option>No locations available</option>
                )}
              </select>
              <p className='select-para'>
                Only in Ameerpet, Gachibowli, & Madhapur
              </p>
            </div>
            <div className='search-main-container'>
              <div className='search-container'>
                <CiCirclePlus className='icon' />
                <input
                  className='search-input'
                  placeholder='Search Home Appliances'
                />
              </div>
              <button className='search-button'>Search</button>
            </div>
          </div>
          <div>
            <img
              className='top-img'
              src='https://i.imghippo.com/files/wY2896keA.jpg'
              alt='top-image'
            />
          </div>
        </div>

        <div className='all-services-section'>
          <h1 className='all-services-heading'>All Services</h1>
          <p className='all-services-para'>
            The time is now for it to be okay to be great. For being a bright
            color. For standing out.
          </p>
          <ul className='services-container'>
            {applianceTypes && applianceTypes.length > 0 ? (
              applianceTypes.map((appliance, index) => (
                <li key={index}>
                  <img
                    className='service-img'
                    src={appliance.image}
                    alt={appliance.name}
                  />
                  <h1 className='service-name'>{appliance.name}</h1>
                  <p className='service-description'>{appliance.description}</p>
                </li>
              ))
            ) : (
              <p>No appliance types available</p>
            )}
          </ul>
        </div>

        <div className='book-request-section'>
          <h1 className='bs-text'>Book a request in 3 simple steps</h1>
          <ul className='bs-lists-container'>
            <li className='features-list-item'>
              <img
                className='bs-img'
                src='https://i.imghippo.com/files/xqKQ9198XL.jpg'
                alt='image1'
              />
              <h1 className='bs-title'>Provide your appliance details</h1>
              <p className='bs-para'>
                Let us know your appliance details and your issue.
              </p>
            </li>
            <li>
              <img
                className='bs-img'
                src='https://i.imghippo.com/files/cYI4707iw.jpg'
                alt='image2'
              />
              <h1 className='bs-title'>Choose your technician</h1>
              <p className='bs-para'>
                Choose from a wide variety of technicians and vendors.
              </p>
            </li>
            <li>
              <img
                className='bs-img'
                src='https://i.imghippo.com/files/xqKQ9198XL.jpg'
                alt='image3'
              />
              <h1 className='bs-title'>Get it fixed!</h1>
              <p className='bs-para'>
                The technician will arrive at your doorstep shortly to fix it!
              </p>
            </li>
          </ul>
        </div>

        <div className='features-section'>
          <h1 className='features-heading'>Featured Vendors</h1>
          <ul className='features-lists-container'>
            {featuredTechnicians && featuredTechnicians.length > 0 ? (
              featuredTechnicians.map((vendor, index) => (
                <li key={index} className='features-list-item'>
                  <div>
                    <img
                      className='features-img'
                      src={vendor.image}
                      alt={vendor.name}
                    />
                    <h1 className='features-title'>{vendor.name}</h1>
                  </div>
                  <ul>
                    <li>
                      <h1 className='features-num'>{vendor.services}</h1>
                      <p>Services</p>
                    </li>
                    <li>
                      <h1 className='features-num'>{vendor.rating}</h1>
                      <p>Rating</p>
                    </li>
                    <li>
                      <h1 className='features-num'>{vendor.reviews}</h1>
                      <p>Reviews</p>
                    </li>
                    <h3 className='show-more'>Show more</h3>
                  </ul>
                </li>
              ))
            ) : (
              <p>No featured technicians available</p>
            )}
          </ul>
        </div>

        <div className='ratings-section'>
          <h1 className='ratings-heading'>
            See what our happy customers have to say about us
          </h1>
          <ul className='ratings-container'></ul>
        </div>

        {error && <div className='error-message'>{error}</div>}
      </div>
    )
  }
}

export default Home
