const OptionItem = ({article,   genre}) => {
    return <option value={genre}>{article.sectionName}</option>
}

export default OptionItem;