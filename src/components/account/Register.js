import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register">
            <div className="breadcrumb">
                Home <span>/</span> <span>Create Account</span>
            </div>
            <div className="register-content">
                <div className="register-header">
                    <h3>Create Account</h3>
                </div>
                <div className="form-input">
                    <div className="form-group">
                        <div>
                            <label>Full Name</label>
                        </div>
                        <div>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label>Address</label>
                        </div>
                        <div>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label>Email Address</label>
                        </div>
                        <div>
                            <input type="mail" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label>Password</label>
                        </div>
                        <div>
                            <input type="password" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="register-submit">
                    <input className="btn btn-default" type="submit" />
                    <span>or <Link to="/">Return to Store</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Register;