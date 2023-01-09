import GenreList from './GenreList';
import OptionItem from './OptionItem';

const SectionSelector = ({articles, onGenreSelected}) => {
    
    const genreOptions = articles.map((article) => article.sectionName)
        .filter( (genre, index, genres) => {
            return index === genres.indexOf(genre);
        })
        .map( (genre, index) => {
            return <OptionItem key={index} genre={genre}/>
        })

    //     
    // })

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