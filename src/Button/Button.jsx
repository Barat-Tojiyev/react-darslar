import React, { Component } from "react";
import { Card } from "./style";

export default class Button extends Component {
  render() {
    return (
      <div>
        <Card 
        w={this.props.w}
        size={this.props.size}
        type={this.props.type}
        
        >{this.props.children}</Card>
      </div>
    );
  }
}
