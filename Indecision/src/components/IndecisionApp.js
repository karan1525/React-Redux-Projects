import React, { Component } from 'react';
import '../styles/styles.css';
import Header from './Header';

export default class IndecisionApp extends Component {
  render() {
    return (
      <div>
        <Header subtitle={'Let a computer decide what to do!'} />
        Hello world!
      </div>
    );
  }
}
