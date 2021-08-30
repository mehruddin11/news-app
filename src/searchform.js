import {useGlobalContext} from './context';
const SearchForm = () =>{
	const {SarchQuery,query}= useGlobalContext();
	return (
		<form className='search-form '
		onSubmit = {(e)=>e.preventDefault()} >
		<h2> SEARCH NEWS </h2>
		<input type ="text" className='form-input'
		value ={query} 
		onChange={(e)=>SarchQuery(e.target.value)}/>
		</form >

		)
}
export default SearchForm;  