import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../slices/auth'
import { blogLimitReducer, blogReducer } from '../slices/blog'
import { paginationReducer } from '../slices/pagination'
import { projectLimitReducer, projectReducer } from '../slices/project'
import { teamReducer } from '../slices/team'
import { searchReducer } from '../slices/search'

const store = configureStore({
    reducer: {
        blog: blogReducer,
        blogLimit: blogLimitReducer,
        project: projectReducer,
        projectLimit: projectLimitReducer,
        team: teamReducer,
        auth: authReducer,
        pagination: paginationReducer,
        search: searchReducer
    },
})


export default store