import React from 'react'


function Form() {
   
    return (
        
        <form className="form_style">
            <h1 className='heading'>Registration Form</h1>
            <div className="mb-3">
                <label for="exampleInputusername" className="form-label"> Username</label>
                <input type="text" className="form-control" id="username"/>
                   
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp"/>
                   
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="Password1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword1"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form