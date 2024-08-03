import React, { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { changeUserFetch } from "../../features/actions/accountAction"
interface Props{
  setUpdateAction: (name: string) => void
}

const ChangeUser = ({setUpdateAction}:Props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const dispatch = useAppDispatch()
  function handleClickSave() {
    dispatch(changeUserFetch({
      firstName: firstName,
      lastName:lastName
    }))
    setUpdateAction('Profile')
  }

  function handleClickClear() {
    setFirstName('');
    setLastName('')
  }

  function handleClickBack() {
    setUpdateAction('Profile')
  }

  return (
    <div className={'row'}>
      <div className="col-12">
        <div className="form-floating mb-1">
          <input type="password" className="password form-control border-2 mt-3 mb-3"
                 onChange={(e) => {
                   setFirstName(e.target.value.trim())
                 }} value={firstName} placeholder="Password" required />
          <label htmlFor="password" className="pass form-label">New first name:</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating mb-1">
          <input type="password" className="password form-control border-2"
                 onChange={(e) => {
                   setLastName(e.target.value.trim())
                 }} value={lastName} placeholder="Password" required />
          <label htmlFor="password" className="pass form-label">New last name:</label>
        </div>
      </div>

      <div className="col-12">
        <div className="d-grid">
          <button onClick={handleClickSave} className="btn bsb-btn-3xl btn-success py-3 mb-3 mt-3"
                  type="submit">Save
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
          <button onClick={handleClickBack} className="btn bsb-btn-3xl btn-danger py-3 mb-1"
                  type="submit">Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChangeUser