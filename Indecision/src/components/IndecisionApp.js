import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends Component {
  render() {
    return (
      <div>
        <Header subtitle={'Let a computer decide what to do!'} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        Hello world!
      </div>
    );
  }
}
