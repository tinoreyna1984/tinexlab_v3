import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        filterCount: 0, // number of tags
        filterTagsArray: [], // tags to filter
        projects: [], // initial projects array
        filteredProjects: [] // projects array after filtering
    },
    reducers: {
        initState: (state, action) => { // store initial array of projects
            const { projects } = action.payload;
            state.projects = [...projects];
        },
        addFilters: (state, action) => { // add tags to filter
            state.filterCount = state.filterCount + 1;
            state.filterTagsArray = [...state.filterTagsArray, action.payload.slug];
        },
        removeFilters: (state, action) => { // remove tags
            state.filterCount = state.filterCount - 1;
            state.filterTagsArray = state.filterTagsArray.filter(tag => tag !== action.payload.slug);
        },
        filterProjectsByTag: (state, action) => { // filter projects using the tags array
            let projects = action.payload.projects;
            let tags = action.payload.filterTagsArray;
            for(let tag of tags){
                projects = projects.filter(project => project.tagSlugs.includes(tag));
            }
            state.filteredProjects = [...projects];
        }
    }
});

export const { initState, filterProjectsByTag, addFilters, removeFilters } = projectsSlice.actions;