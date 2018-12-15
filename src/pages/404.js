import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { Browser } from 'react-kawaii'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="single-column margin-0 max-width-500">
          <h1>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist!</p>
          <p>
            <Link to={'/'}>
              Back to Verbs
            </Link>
          </p>
          <Browser size="250" mood={'sad'} />
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
