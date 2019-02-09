import React from 'react';
import { Helmet } from 'react-helmet';

export default class Application extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8"/>
          <title>My Gatsby Tutorial</title>
          <link rel="canonical" href="https://www.gatsbyjs.org/tutorial/part-eight/" />
        </Helmet>
        {children}
      </div>
    )
  }
};