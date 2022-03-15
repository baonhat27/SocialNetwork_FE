import styles from "./LoginPageComponent.module.css";
import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const LoginPage = (props) => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.social}>
        <h1 className={styles.heading}>Social-network</h1>
        <p className={styles.describes}>
          Social-network giúp bạn kết nối và chia sẻ với mọi người trong cuộc
          sống của bạn.
        </p>
      </div>
      <div className={styles.box}>
        <div
          className={
            props.showSignUp ? styles.scroll + " " + styles.show : styles.scroll
          }
        >
          <div className={styles.login}>
            <h2>Đăng nhập</h2>
            <Input
              placeholder="Tên đăng nhập"
              value={props.username}
              onChange={props.handleUsername}
            />
            <Input
              value={props.password}
              onChange={props.handlePassword}
              type="password"
              placeholder="Mật khẩu"
            />
            <Button style={{ background: "#1877f2" }}>Đăng nhập</Button>
            <p className={styles.p}>Quên mật khẩu?</p>
            <div className={styles.line}></div>
            <Button
              style={{ background: "#42b72a" }}
              onClick={function () {
                props.setShowSignUp(true);
              }}
            >
              Tạo tài khoản mới
            </Button>
          </div>
          <div className={styles.signup}>
            <h2>Đăng ký tài khoản mới</h2>
            <Input
              value={props.username}
              onChange={props.handleUsername}
              placeholder="Tên đăng nhập"
            />
            <Input
              value={props.password}
              onChange={props.handlePassword}
              type="password"
              placeholder="Mật khẩu"
            />
            <Input
              value={props.retypePassword}
              onChange={props.handleRetypePassword}
              type="password"
              placeholder="Nhập lại mật khẩu"
            />
            <Button style={{ background: "#1877f2" }}>Đăng ký</Button>
            <div className={styles.line} style={{ marginTop: "30px" }}></div>
            <Button
              style={{ background: "#42b72a" }}
              onClick={function () {
                props.setShowSignUp(false);
              }}
            >
              Đăng nhập
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
