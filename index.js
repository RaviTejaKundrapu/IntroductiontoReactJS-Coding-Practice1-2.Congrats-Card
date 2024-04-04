const element = (
  // Write your code here.

  <div className='bg-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='user-profile-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='profile-img'
      />
      <div className='profile-text-container'>
        <h1 className='name-styles'>Ravi Teja K</h1>
        <p className='education-styles'>
          Adikavi Nannaya University,Andhra Pradesh,India
        </p>
      </div>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='watch-img'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
