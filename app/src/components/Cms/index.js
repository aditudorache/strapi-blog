import React, { Fragment } from 'react';
import { MarkdownPreview } from 'react-marked-markdown';
import Strapi from 'strapi-sdk-javascript/build/main';


const documentLinks = (documents = []) => (<ul>
  {documents.map((d) => <li><a href={d.url}>{d.name}</a></li>)}
</ul>);

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
      <Fragment>
        <section>
          {this.state.articles.map((article) => (
            <article className={'cms'}>
              <img src={article.image.url} alt={''} />
              <h2>{article.title}</h2>
              <MarkdownPreview value={article.content} />
              {article['documents-title'] && <h2>{article['documents-title']}</h2>}
              {documentLinks(article.documents)}
            </article>
          ))}
        </section>
      </Fragment>
    );
  }
}

export default Cms;
