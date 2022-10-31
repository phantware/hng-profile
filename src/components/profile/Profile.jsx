import profileImg from '../../assets/jamiu.jpg'

const Profile = () => {
  return (
    <div className='profileContainer'>
      <img src={profileImg} alt='' id='profile__img' />
      <h1 id='twitter'>Ismail Jamiu Babatunde</h1>
    </div>
  )
}

export default Profile
