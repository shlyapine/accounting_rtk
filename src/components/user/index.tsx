import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useState } from "react"
import ChangeUser from "./ChangeUser"
import { deleteToken } from "../../features/slices/tokenSlice"
import { deleteUser } from "../../features/slices/userSlice"
import ChangePassword from "./ChangePassword"

const User = () => {
  const user = useAppSelector(store => store.user.data)
  const [updateAction, setUpdateAction] = useState("Profile")
  const dispatch = useAppDispatch()

  function handleClickLogOut() {
    dispatch(deleteToken())
    dispatch(deleteUser())
  }

  switch (updateAction) {
    case "changeUser":
      return <ChangeUser setUpdateAction={setUpdateAction} />
    case "changePassword":
      return <ChangePassword setUpdateAction={setUpdateAction} />
    default:
      return (
        <div>
          <div className="row">
            <div className="col-12">
              <div className="mb-5">
                <h2>Hey {user!.firstName} {user!.lastName}!</h2>
                <h2>Your current login: {user!.login}</h2>
                <h2>Your roles: {user!.roles}</h2>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-grid">
              <button onClick={() => {
                setUpdateAction("changeUser")
              }} className="btn bsb-btn-3xl btn-success py-3 mb-3"
                      type="submit">Change User
              </button>
            </div>
          </div>

          <div className="col-12">
            <div className="d-grid">
              <button onClick={() => {
                setUpdateAction("changePassword")
              }} className="btn bsb-btn-3xl btn-success py-3 mb-3"
                      type="submit">Change Password
              </button>
            </div>
          </div>
          <div className="col-12">
            <div className="d-grid">
              <button onClick={handleClickLogOut} className="btn bsb-btn-3xl btn-danger py-3 mb-3"
                      type="submit">LogOut
              </button>
            </div>
          </div>
        </div>
      )
  }
}

export default User