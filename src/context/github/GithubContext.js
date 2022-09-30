import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Get search results
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch
            (`${GITHUB_URL}/search/users?${params}`)

        const {items} = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    const setLoading = () => dispatch({type: 'SET_LOADING'})

    const handleClear = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    
    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        handleClear
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext