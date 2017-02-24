import React, { Component } from 'react';

import Button from 'mtk-ui/lib/Button';
import Hr from 'mtk-ui/lib/Hr';

import styles from './styles.css';

import { default as compose } from 'recompose/compose';
import { default as pure } from 'recompose/pure';
import { default as withState } from 'recompose/withState';
import { default as withHandlers } from 'recompose/withHandlers';

import { withGetMessages } from 'react-intl-inject-hoc';
import messages from '../../messages';

import ControlSwitch from 'mcs-lite-ui/lib/DataChannel/ControlSwitch';
import DisplayStatus from 'mcs-lite-ui/lib/DataChannel/DisplayStatus';

const DisplayCardLayout = ({
  title,
  description,
  submitDisplayCard,
  getMessages: t,
  displayCardType,
}) => {
  return (
    <div className={styles.base}>
      <div className={styles.content}>
        {
          displayCardType === 1 ?
            <ControlSwitch onSubmit={()=>{}} value={1}/>
          :
            <DisplayStatus labels={["OFF", "ON"]} value={0} style={{ width: 110, height: 48 }}/>
        }
      </div>
      <b className={styles.title}>{title}</b>
      <Hr className={styles.hr}/>
      <p className={styles.description}>
      {description}
      </p>
      <Button className={styles.button} onClick={submitDisplayCard}>
      {t('add')}
      </Button>
    </div>
  );
}

export default compose(
  pure,
  withHandlers({
    submitDisplayCard: props => () => {
      props.setIsCreateDataChannel(true),
      props.setDisplayCardType(props.displayCardType)
    },
  }),
  withGetMessages(messages, 'PrototypeDetail'),
)(DisplayCardLayout);