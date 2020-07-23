import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../actions/userActions';

function SigninScreen(props) {
	const [email,setEmail ]       = useState('');
	const [password,setPassword ] = useState('');
	const userSignin = useSelector( state => state.userSignin );
	const { userInfo,loading, error } = userSignin;
	const dispatch = useDispatch();
	useEffect(()=>{
		if( !userInfo ){
			props.history.push("/");
		}
	},[userInfo]);

	const submitHandler= (e)=>{
		e.preventDefault();
		dispatch(signin(email,password));
	}

  	return (
		<div className="signIn" data-testid="SigninScreen">
			<div className="login">
				<div className="form">
					<h2>Sign-In</h2>
					<form onSubmit={submitHandler}>
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
							<p className="button-text">SIGN IN</p>
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


export default SigninScreen;
