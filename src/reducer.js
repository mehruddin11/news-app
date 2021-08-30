import {
	SET_LOADING,
	SET_STORIES,
	REMOVE_STORY,
	SET_BUTTON,
	HANDLE_SEARCH
}
from './action.js';

const reducer = (state, action) =>{
	switch(action.type){
		case SET_LOADING:
		return {...state, isLoading:true};
		case SET_STORIES:
		return {
			...state,
			isLoading:false,
			hits:action.payload.hits,
			nbPages:action.payload.nbPages,
		}
		case REMOVE_STORY:
		const hits = state.hits.filter((hit)=> hit.objectID !== action.payload)
		return {
			...state,
			hits:hits
		 }
		 case HANDLE_SEARCH:
		 return {...state, query:action.payload,page:0};
		 case SET_BUTTON:
		 if(action.payload==='inc'){
		 	const nextpage = state.page+1
		 	if(nextpage > state.nbPages-1){
		 		state.page=-1
		 	}
		 	return {
		 		...state,
		 		page:nextpage
		 	}
		 }
		 if(action.payload==='dec'){
		 	const prevpage = state.page-1
		 	if(prevpage < 0){
		 		state.page= state.nbPages-1;
		 	}
		 	return {
		 		...state,
		 		page:prevpage
		 	}
		 }
		 break;
		default:
			throw new Error(`no matching action type "${action.type}" action type`)
	}

} 
export default reducer;