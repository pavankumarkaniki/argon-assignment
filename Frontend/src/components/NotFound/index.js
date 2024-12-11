import './index.css'

const NotFound = () => (
  <div className='notfound-container'>
    <h1 className='notfound-heading'>404</h1>
    <p className='notfound-message'>
      Oops! The page you are looking for does not exist.
    </p>
    <a href='/' className='notfound-home-link'>
      Go Back to Home
    </a>
  </div>
)

export default NotFound
