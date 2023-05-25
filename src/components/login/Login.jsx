import React, { useState } from 'react'
import "./login_styles.css"
import {FaEye,FaEyeSlash} from 'react-icons/fa'
const Login = () => {
    const [text, setText] = useState('');
    const [inputType, setInputType] = useState('password');
    const [isShowed, setIsShowed] = useState(false);
    const onChangeType = () => {
        setInputType('text');
        setIsShowed(true)
    };

    const onChangeType2 = () => {
        setInputType('password');
        setIsShowed(false)
    }

    return (
    <div className='login_page'>
        {/* <h1 className='welcome_text'>Welcome {text}!</h1> */}
        <div className='login_container'>
            <p className='login_text'>Username</p>
            <input type='text' className='login_input' value={text} onChange={(event) => setText(event.target.value)} maxLength={20} required/>
            <p className='login_text'>Password</p>
            <div className="password_input">
                <input type={inputType} className='login_input psw' maxLength={20} required/>         
                <button className='show_password' onClick={inputType === 'password' ? onChangeType : onChangeType2}>{isShowed === false ? <FaEye size={20} color='white'/> : <FaEyeSlash size={20} color='white'/>}</button>
            </div>
            <button className='login_btn'>Login as {text}</button>
            <div className='bottom_text'>
                <p className='login_text'>Forgot password</p>
                <p className='login_text'>Sign up</p>
            </div>
        </div>
    </div>
  )
}

export default Login