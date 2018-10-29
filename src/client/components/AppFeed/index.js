import React from 'react';
import ReactDOM from 'react-dom';

const Card = props => {
  return (
    <div className="card-feed" style={{ padding: 10 }}>
      <h5 style={{ fontWeight: 'bold' }}>{props.item.title}</h5>
      <b>{props.item.modified_date}</b>
      <p>{props.item.description}</p>
      <img src={props.item.images0} width="100%" />
    </div>
  );
};

class AppFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: []
    };
  }

  componentWillMount() {
    fetch('https://api.uniqueschoolapp.ie/feeds/notifications?idschool=52&limit=10').then(res => {
      res.json().then(json => {
        this.setState({
          feed: json.data.notification
        });
      });
    });
  }

  _renderFeed() {
    return this.state.feed.map(item => {
      console.log(item);
      return <Card item={item} />;
    });
  }

  render() {
    return (
      <div>
        <h1 class="section-heading text-highlight">
          <span class="line">App Feed</span>
        </h1>
        <div style={{ height: 400, overflow: 'scroll', padding: 10 }}>{this._renderFeed()}</div>
      </div>
    );
  }
}

export default AppFeed;
