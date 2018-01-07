import React, { Component } from "react";

export default class Page extends Component {
    render() {
        return (        
        <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">{this.props.title}</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here!</li>
                            <li><a href="index.html">{this.props.home}</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">{this.props.current}</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                    <div className='col-md-9'>
                    {this.props.children}
                    </div>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">  
                            <a className="twitter-timeline " data-height="1000" data-chrome="nofooter" href="https://twitter.com/benildusnews?ref_src=twsrc%5Etfw ">Tweets by benildus news</a>
                            <script async src="https://platform.twitter.com/widgets.js " charset="utf-8 "></script>                  
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}