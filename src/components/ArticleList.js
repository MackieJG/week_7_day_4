import React from 'react';
import ArticleDetail  from './ArticleDetail';

const ArticleList = ({articles}) => {

    const NewsList = articles.map((article, index) => {
        return <ArticleDetail key={index} article={article}/>
    })

    return (
        <div className="article-list">
            <ul>
                {NewsList}
            </ul>
        </div>
    )
}

export default ArticleList;