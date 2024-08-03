import  { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { changePasswordFetch } from "../../features/actions/accountAction"

interface Props {
  setUpdateAction: (name: string) => void
}

const ChangePassword = ({ setUpdateAction }: Props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const dispatch = useAppDispatch()

  function handleClickChangePassword() {
    if (newPassword1 === newPassword2) {
      dispatch(changePasswordFetch({ oldPassword: oldPassword, newPassword: newPassword1}))
    }
    setUpdateAction('Profile')
  }


  function handleClickClear() {
    setNewPassword2("")
    setOldPassword("")
    setNewPassword1("")
  }

  function handleClickBack() {
    setUpdateAction("Profile")
  }

  return (
    <div className={'row'}>
      <div className="row mx-auto">
        <div className="col-12">
          <div className="mb-5">
            <h3>Change password</h3>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating mb-1">
          <input type="password" className="password form-control border-2"
                 onChange={(e) => {
                   setOldPassword(e.target.value.trim())
                 }} value={oldPassword} placeholder="Password" required />
          <label htmlFor="password" className="pass form-label">Old password:</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating mb-1">
          <input type="password" className="password form-control border-2"
                 onChange={(e) => {
                   setNewPassword1(e.target.value.trim())
                 }} value={newPassword1} placeholder="Password" required />
          <label htmlFor="password" className="pass form-label">New password:</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating mb-1">
          <input type="password" className="password form-control border-2"
                 onChange={(e) => {
                   setNewPassword2(e.target.value.trim())
                 }} value={newPassword2} placeholder="Password" required/>
          <label htmlFor="password" className="pass form-label">Repeat new password:</label>
        </div>
        <h5>{(newPassword1 === newPassword2) || (<div style={{ color: "red" }}>Password mismatch</div>)}</h5>
      </div>
      <div className="col-12">
      <div className="d-grid">
          <button onClick={handleClickChangePassword} disabled={!(newPassword1 === newPassword2)} className="btn bsb-btn-3xl btn-success py-3 mb-3 mt-3"
                  type="submit">Change Password
          </button>
        </div>
      </div>
      <div className="col-12">
        <div className="d-grid">
          <button onClick={handleClickClear} className="btn bsb-btn-3xl btn-warning py-3 mb-3"
                  type="submit">Clear
          </button>
        </div>
      </div>
      <div className="col-12">
        <div className="d-grid">
          <button onClick={handleClickBack} className="btn bsb-btn-3xl btn-danger py-3 mb-3"
                  type="submit">Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword