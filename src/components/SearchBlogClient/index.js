import { liteClient as algoliasearch } from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch'

import SearchBlog from 'components/SearchBlog'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_KEY
)

const SearchBlogClient = () => {
  return (
    <InstantSearch
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <SearchBlog />
    </InstantSearch>
  )
}

export default SearchBlogClient
