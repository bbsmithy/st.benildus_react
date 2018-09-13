import React, { Component } from 'react';

export default class ItemItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  _onClick = e => {
    e.preventDefault();
    if (this.props.editMode) {
      this.props.onClick(this.props.object, !this.state.selected);
      this.setState({
        selected: !this.state.selected
      });
    } else {
      this.props.onClick(this.props.object);
    }

    //  this.selectImage(obj, e) : this.props.openWithLightbox(props.index, e);
  };
  render() {
    return (
      <div
        style={{
          padding: 2,
          backgroundColor: this.state.selected ? 'red' : 'white'
        }}
      >
        <a onClick={this._onClick}>
          <img src={this.props.src} className={'img-responsive'} />
        </a>
      </div>
    );
  }
}
