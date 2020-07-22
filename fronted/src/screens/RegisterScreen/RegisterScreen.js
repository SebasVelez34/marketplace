import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';
import Loader from '../../components/Loader/Loader';

function RegisterScreen(props) {
	const [email,setEmail ]       = useState('');
	const [password,setPassword ] = useState('');
	const [name,setName ]         = useState('');
	const userRegister = useSelector( state => state.userRegister );
	const { userInfo,loading, error } = userRegister;
	const dispatch = useDispatch();
	useEffect(()=>{
		if( userInfo ){
			window.open('/','_self');
		}
	},[userInfo]);

	const submitHandler= (e)=>{
		e.preventDefault();
		dispatch(register(name,email,password));
	}

  	return (
		loading ? <Loader/> :
		error   ? <div>{error}</div>:
 		<div className="signIn" data-testid="RegisterScreen">
			<div className="login">
				<div className="form">
					<h2>Create account</h2>
					<form onSubmit={submitHandler}>
						<div className="form-field">
							<label htmlFor="name"><i className="fa fa-user"></i></label>
							<input id="name"
								   type="text"
								   name="name"
								   placeholder="Your name"
								   required
								   onChange={(e) => setName(e.target.value)}/>
							<svg>
								<use href="#svg-check" />
							</svg>
						</div>
						<div className="form-field">
							<label htmlFor="login-mail"><i className="fa fa-user"></i></label>
							<input id="login-mail"
								   type="text"
								   name="mail"
								   placeholder="E-Mail"
								   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
								   required
								   onChange={(e) => setEmail(e.target.value)}/>
							<svg>
								<use href="#svg-check" />
							</svg>
						</div>
						<div className="form-field">
							<label htmlFor="login-password"><i className="fa fa-lock"></i></label>
							<input id="login-password"
								   type="password"
								   name="password"
								   placeholder="Password"
								   pattern=".{3,}"
								   required
								   onChange={(e) => setPassword(e.target.value)}/>
							<svg>
								<use href="#svg-check" />
							</svg>
						</div>
						<button type="submit" className="button">
							<div className="arrow-wrapper">
								<span className="arrow"></span>
							</div>
							<p className="button-text">CREATE ACCOUNT</p>
						</button>
					</form>
				</div>
				<div className="finished">
					<svg>
					<use href="#svg-check" />
					</svg>
				</div>
			</div>
			<svg style={{display:'none'}}>
				<symbol id="svg-check" viewBox="0 0 130.2 130.2">
					<polyline points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
				</symbol>
			</svg>
    	</div>
  	)
}

export default RegisterScreen;
