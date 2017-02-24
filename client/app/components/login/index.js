import { browserHistory } from 'react-router';

import React, { Component } from 'react';
import styles from './styles.css';
import logo from './logo.png';

import InputText from 'mtk-ui/lib/InputText';
import InputForm from 'mtk-ui/lib/InputForm';
import InputCheckbox from 'mtk-ui/lib/InputCheckbox';
import Button from 'mtk-ui/lib/Button';
import Hr from 'mtk-ui/lib/Hr';
import Footer from '../footer';

import { default as compose } from 'recompose/compose';
import { default as pure } from 'recompose/pure';
import { default as withState } from 'recompose/withState';
import { default as withHandlers } from 'recompose/withHandlers';

import messages from './messages';
import { withGetMessages } from 'react-intl-inject-hoc';

const Login = ({
  login,
  openSignIn,
  getMessages: t,
}) => {
  return (
    <div>
      <div className={styles.base}>
        <form
          className={styles.form}
          id="loginSubmit"
          role="form"
          action={ window.oauthUrl + "/login" }
          method="post"
        >
          <img src={logo} className={styles.logo}/>
          {login.errorMsg}
          <Hr>{t('welcome')}</Hr>
          <InputText name="email" type="email" placeholder={t('Email')} className={styles.input}/>
          <InputText name="password" type="password" placeholder={t('password')} />
          <div className={styles.createaccount}>
            <p>{t('doNotHaveAccount')}</p>
            <a onClick={openSignIn}>{t('createAnAccount')}</a>
          </div>
          <Button type="submit" className={styles.submit}>
            {t('signIn')}
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default compose(
  pure,
  withHandlers({
    openSignIn: props => () => browserHistory.push('/signin'),
  }),
  withGetMessages(messages, 'Login'),
)(Login);