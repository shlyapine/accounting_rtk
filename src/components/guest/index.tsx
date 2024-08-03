import LogIn from "./LogIn"
import Register from "./Register"
import {LOGIN, REGISTER} from "../../utils/windowsSwitch"
import {useState} from "react";


const Guest = () => {
    const [currentWindow, setCurrentWindow] = useState<string>(LOGIN);

    const handleChangeWindow = () => {
        currentWindow === LOGIN ? setCurrentWindow(REGISTER) : setCurrentWindow(LOGIN);
    }

    return (
        <div>
            <div className="card-body p-5 p-md-4 p-xl-5">
                {currentWindow === LOGIN ? <LogIn/> :
                    <Register/>
                }
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <hr className="mb-4 border-secondary-subtle"/>
                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center">
                        <button className="btn btn-link link-secondary text-decoration-none"
                                onClick={handleChangeWindow}>
                            {currentWindow === LOGIN ? "Create new account" : "Already have an account? Log In"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guest