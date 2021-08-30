import {useGlobalContext} from './context';
const Stories = () =>{
	const {isLoading,hits,RemoveStory}= useGlobalContext();
	if(isLoading){
		return <div className='loading'>
 		</div>
	}
	return (
		<section className='stories'> 
		    {
		    	hits.map((story)=>{
		    		{/*console.log(story)*/}
		    		const {objectID, author, title, url ,num_comments} =story
		    		return <article key ={objectID} className='story'>
		    		<h4 className='title'> {title} </h4>
		    		<p className='info'>
		    		author: {author} | <span> comments: {num_comments} </span>
		    		</p>
		    		<div className='read-link'>
		    		<a 
		    		href ={url} 
		    		target='_blank'
                	rel='noopener noreferrer'
		    		> More Info </a> |
		    		<button className ='remove-btn' onClick ={()=>RemoveStory(objectID)} >Remove </button>
		    		</div>
		    		</article>
		    	})
		    }
		 </section>

		)
}
export default Stories;  