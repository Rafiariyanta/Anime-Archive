import { useQuery, gql } from '@apollo/client';

const GET_COLLECTION_ANIME_LIST = gql`
query ($id_in: [Int],$page: Int, $perPage: Int, $search: String)  { 
    Page (page: $page, perPage: $perPage) {
    pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
    }
    media (id_in: $id_in, search: $search) {
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
export const useCollectionList = (page, perPage, id_in) => {
    const {error, data, loading} = useQuery(GET_COLLECTION_ANIME_LIST, {
        variables: {
            page,
            perPage,
            id_in
        }
    })

    return {
        error,
        data,
        loading
    }
}
