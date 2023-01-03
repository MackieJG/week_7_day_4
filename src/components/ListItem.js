import React from 'react';

const ListItem = ({article, onGenreSelected}) => {

    const handleClick = function() {
        onGenreSelected(article)
    }
    return <li onClick={handleClick}>{article.sectionName}</li>
}

export default ListItem;