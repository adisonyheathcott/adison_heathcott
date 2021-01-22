import React from 'react';
import ReactMarkdown from 'react-markdown';

class ArticlePage extends React.Component {
    render() {
        return (
          <div id="article-page-div">
            <ReactMarkdown escapeHtml={true} source={`# Your markdown here`}/>
          </div>  
        );
    }
}

export default ArticlePage;