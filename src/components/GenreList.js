import React from 'react';
import ArticleDetail from './ArticleDetail';


const GenreList = ({filteredArticles}) => {

    const filteredByGenre = filteredArticles.map((article, index) => {
        return <ArticleDetail key={index} article={article}/>
    })

    return (
        <div className='genre-list'>
            <ul>
                {filteredByGenre}
            </ul>
        </div>
    )
}



export default GenreList;