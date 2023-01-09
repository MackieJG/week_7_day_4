import React, { useState, useEffect } from 'react';
import ArticleDetail from '../components/ArticleDetail';
import OptionItem from '../components/OptionItem';
import ArticleList from '../components/ArticleList';
import SectionSelector from '../components/SectionSelector';
import GenreList from '../components/GenreList';

const GuardianContainer = () =>  {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([])

    useEffect(() => {
        getArticles();
    }, [])

   const onGenreClicked = function(genre) {
        console.log(genre);
        const filtered = articles.filter((article) => {
            if (article.sectionName === genre){
                return article
            }
        })
       setFilteredArticles(filtered);
   }



    const getArticles = function() {
        fetch('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
        .then(response => response.json())
        .then(articles => setArticles(articles.response.results))
    }

    return (
        <div className="Guardian-Container">
            <ArticleList articles={articles}/>
            <SectionSelector articles={articles} onGenreSelected={onGenreClicked}/>
            {filteredArticles? <GenreList filteredArticles={filteredArticles}/> :null}


        </div>
    )
}

export default GuardianContainer