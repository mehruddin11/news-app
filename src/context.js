import React,{
	useReducer, 
	useEffect,
	useContext
} 
from 'react';
import reducer from './reducer';
import {
	SET_LOADING,
	SET_STORIES,
	REMOVE_STORY,
	SET_BUTTON,
	HANDLE_SEARCH
}
from './action.js';

const AppContext= React.createContext();
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'
const initaialState = {
	isLoading:true,
	hits:[],
	query:'react',
	page:0,
	nbPages:0
}
const AppProvider =({children})=>{
	const [state,dispatch]= useReducer(reducer,initaialState)
	const fetchStories = async(url) =>{
		dispatch({type:SET_LOADING});
		try{
			const response = await fetch(url);
			const data = await response.json();
			// console.log(data);
			dispatch({type:SET_STORIES,
				payload:{hits:data.hits,nbPages:data.nbPages}})
		}
		catch(err){
			console.log(err);
		}
	}
const RemoveStory = (id)=>{
	dispatch({type:REMOVE_STORY,payload:id})
}
const SarchQuery =(query) =>{
	dispatch({type:HANDLE_SEARCH,payload:query})
}
const handlePage= (value)=>{
	dispatch({type:SET_BUTTON,payload:value})
}
useEffect(()=>{
	fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
	 
},[state.page,state.query])
	return <AppContext.Provider value = {
		{
		...state,
		 RemoveStory,
		 SarchQuery,
		 handlePage
	}
}> 
		{children} 
	</AppContext.Provider>
};
const useGlobalContext = () =>{
	return useContext(AppContext)
}
export {AppContext, AppProvider, useGlobalContext};