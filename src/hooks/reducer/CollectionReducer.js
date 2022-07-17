export const CollectionReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ANIME':
            return [...state, action.anime.id
              ]
        case 'REMOVE_ANIME':
            return state.filter(col => col !== action.id);
        default:
            return state;
    }
}