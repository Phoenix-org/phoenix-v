import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import styles from './style.scss';
import { increment, decrement, autoIncrement, autoStop } from '../../redux/epics/counter';

interface AProps {
  dispatch: any;
  count: number;
}

const A: React.FC<AProps> = props => {
  const { count, dispatch } = props;

  const addClick = async () => {
    dispatch(increment({ count: 20 }));
  };

  const lowclick = () => {
    dispatch(decrement());
  };

  const startAdd = () => {
    dispatch(autoIncrement());
  };

  const endAdd = () => {
    dispatch(autoStop());
  };

  return (
    <div className={styles.main}>
      <div>计数器： {count}</div>
      <Button onClick={addClick}>+</Button>
      <Button onClick={lowclick}>-</Button>
      <Button type="primary" onClick={startAdd}>
        start
      </Button>
      <Button onClick={endAdd}>stop</Button>
    </div>
  );
};

export default connect((state: any) => state.counter)(A);
