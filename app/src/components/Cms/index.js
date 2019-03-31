import React, { Fragment } from 'react';
import { MarkdownPreview } from 'react-marked-markdown';
import Strapi from 'strapi-sdk-javascript/build/main';
import CONFIGURATION from 'shared/services/configuration/configuration';

export const baseUrl = `${CONFIGURATION.API_ROOT}`;


const documentLinks = (documents = []) => (<ul>
  {documents.map((d) => <li><a href={d.url}>{d.name}</a></li>)}
</ul>);

const strapi = new Strapi(baseUrl);
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
            <div className={'cms'}>
              <div className="cms__image-header">
                {article.image && <img src={`${baseUrl}${article.image.url.substring(1)}`} alt={''} />}
              </div>
              <div className="cms__title">
                <h2>{article.title}</h2>
              </div>
              <div>

                <MarkdownPreview value={article.content} />
              </div>
              <div className="cms__documents">
                {article['documents-title'] && <h2>{article['documents-title']}</h2>}
                {documentLinks(article.documents)}
              </div>
            </div>
          ))}
        </section>
      </Fragment>
    );
  }
}

export default Cms;
