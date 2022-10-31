import './socialCard.css'

const SocialCard = ({ title, lolo }) => {
  return (
    <div className='socialCardContainer'>
      <div className='socialCardContainerWrapper'>
        <h1 className='socialCardH'>{title}</h1>
        <h2>{lolo}</h2>
      </div>
    </div>
  )
}

export default SocialCard
