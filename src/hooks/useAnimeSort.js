import { useLazyQuery, gql } from '@apollo/client';

const GET_ANIME_LIST = gql`
query ($id: Int,$page: Int, $perPage: Int, $search: String)  { 
    anime_trending: 
    Page (page: $page, perPage: $perPage) {
    pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
    }
    media (id: $id, search: $search, sort: TRENDING_DESC) {
        id
        title {
        romaji
        }
        coverImage{
            large
        }
        
    }
    },
    anime_popular:
    Page (page: $page, perPage: $perPage) {
        pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }
        media (id: $id, search: $search, sort: POPULARITY_DESC) {
            id
            title {
            romaji
            }
            coverImage{
                large
            }
            
        }
    }
    favorite: 
    Page (page: $page, perPage: $perPage) {
        pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }
        media (id: $id, search: $search, sort: FAVOURITES_DESC) {
            id
            title {
            romaji
            }
            coverImage{
                large
            }
            
        }
    }
    }
`

export const useAnimeSort = (searchInput) => {
    const [getAnimeSort, { error, data, loading }] = useLazyQuery(GET_ANIME_LIST, {
        variables: {
            page: 1,
            perPage: searchInput === "" ? 6 : null,
            search: searchInput === "" ? null : searchInput
        }
    });

    return {
        getAnimeSort,
        error,
        data,
        loading
    }
}