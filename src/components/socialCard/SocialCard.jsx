import './socialCard.css'

const SocialCard = ({ title, href, target, rel, id }) => {
  return (
    <div className='socialCardContainer'>
      <div className='socialCardContainerWrapper'>
        <h1 className='socialCardH'>
          <a href={href} target={target} rel={rel} id={id}>
            {title}
          </a>
        </h1>
      </div>
    </div>
  )
}

export default SocialCard
