import classes from './profile-form.module.css';
import {useRef} from 'react'

function ProfileForm(props) {


  const oldPassword = useRef()
  const newPassword = useRef()

  


  const handleSumbmit = (e) => {

    const EntredOldPassword = oldPassword.current.value
    const EntredNewPassword = newPassword.current.value

    e.preventDefault()

    props.onAddForm({
    newPassword:EntredNewPassword,
    oldPassword:EntredOldPassword
    })

  }


  return (
    <form className={classes.form} onSubmit={handleSumbmit}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPassword} />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={oldPassword} />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
