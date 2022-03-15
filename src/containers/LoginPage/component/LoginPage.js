	

import styles from './LoginPage.module.css';
import React from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const LoginPage = (props) => {
    return (
        <div className={styles.backgroundLogin}>
            <div className={styles.loginPage}>
                <div className={styles.social}>
                </div>
                <div className={styles.box}>
                    <div className={props.showSignUp?styles.scroll+" "+styles.show:styles.scroll}>
                        <div className={styles.login}>
                            <div style={{height:"450px"}}>
                                <div className={styles.headerForm}>
                                    <span className={styles.heading}>ĐĂNG NHẬP</span>
                                    <p className={styles.link}>Bạn chưa có tài khoản
                                        <br/>
                                        <span className={styles.move} onClick={function(){props.setShowSignUp(true)}}> Đăng kí ngay</span>
                                    </p>
                                </div>
                                <span className={styles.loginInputHeading}>Tên đăng nhập</span>
                                <span className={styles.loginInputPassword}>Mật khẩu</span>
                                <Input placeholder="Tên đăng nhập" value={props.username} onChange={props.handleUsername}>
                                </Input>
                                <Input value={props.password} onChange={props.handlePassword} type="password" placeholder="Mật khẩu">
                                </Input>
                                <p className={styles.p}>Quên mật khẩu?</p>
                                <Button style={{background:"linear-gradient(#9bc1f2,#1877f2)"}} onClick={props.login}>Đăng nhập</Button>
                                

                            </div>
                        </div>
                            <div className={styles.signup}>
                            <div style={{height:"550px",marginTop:"80px"}}>
                            <div className={styles.headerForm}>
                                    <span className={styles.heading}>ĐĂNG KÝ</span>
                                    <p className={styles.link} style={{position:"relative",left:"180px"}}>Bạn đã có tài khoản
                                        <br/>
                                        <span className={styles.move} onClick={function(){props.setShowSignUp(false)}}> Đăng nhập ngay</span>
                                    </p>
                                </div>
                                <span className={styles.loginInputHeading}>Tên đăng nhập</span>
                                <span className={styles.loginInputPassword}>Mật khẩu</span>
                                
                                <Input value={props.username} onChange={props.handleUsername} placeholder="Tên đăng nhập"/>
                                <Input value={props.password} onChange={props.handlePassword} type="password" placeholder="Mật khẩu"/>
                                <Input value={props.retypePassword} onChange={props.handleRetypePassword} type="password" placeholder="Nhập lại mật khẩu"/>
                                
                                <Button style={{background:"linear-gradient(#9bc1f2,#1877f2)"}}>Đăng ký</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;