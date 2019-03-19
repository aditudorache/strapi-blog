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
          <article className={'cms'}>
            <img src={article.Image.url} alt={''} />
            <h2>{article.Title}</h2>
            <p>{article.Content}</p>
          </article>
      ))}
      </section>
    );
  }
}

export default Cms;
