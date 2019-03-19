import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
const strapi = new Strapi('api');
class Cms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  async componentDidMount() {
    try {
      const articles = await strapi.getEntries('articles');
      this.setState({ articles });
    } catch (err) {
      alert(err);
    }
  }
  render() {
    return (
      <section>
        {this.state.articles.map((article) => (
          <article>
            <div>{article.Title}</div>
            <div>{article.Content}</div>
          </article>
      ))}
      </section>
    );
  }
}

export default Cms;
