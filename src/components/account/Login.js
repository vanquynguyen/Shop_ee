import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <div className="breadcrumb">
                Home <span>/</span> <span> Account</span>
            </div>
            <div className="login-content">
                <div className="login-header">
                    <h3>Customer Login</h3>
                </div>
                <div className="form-input">
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
                <div>
                    <a>Forgot your password?</a>
                </div>
                <div className="login-submit">
                    <input className="btn btn-default" type="submit" />
                    <span>or <Link to="/">Return to Store</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Login;