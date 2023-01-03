const ArticleDetail = ({article}) => {

    return(
    <div className="article-detail">
        <h4>{article.sectionName} - <a href={article.webUrl}>{article.webTitle}</a></h4>
    </div>
    )
}

export default ArticleDetail;