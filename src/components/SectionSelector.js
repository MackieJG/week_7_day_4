import OptionItem from './OptionItem';

const SectionSelector = ({articles, onGenreSelected}) => {
    
    const genreOptions = articles.map((article, index) => {
        return <OptionItem key={index} article={article} value={article.sectionName}/>
    })

    const handleChange = (event) => {
        onGenreSelected(event.target.value)
    }
        return(
            <select defaultValue="" onChange={handleChange}>
                <option value="" defaultValue>What Section would you like to see?</option>
                {genreOptions}
            </select>
        )





}

export default SectionSelector;