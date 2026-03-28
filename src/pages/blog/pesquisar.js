import Head from 'next/head'
import { generateNextSeo } from 'next-seo/pages'
import { liteClient as algoliasearch } from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch'

import SearchBlog from 'components/SearchBlog'
import BlogLayout from 'components/BlogLayout'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_KEY
)

const SearchPage = () => {
  return (
    <BlogLayout>
      <Head>
        {generateNextSeo({
          title: 'Pesquisar no Blog | Movisul',
          description: 'Vai lá, busque por posts novos e bem antigos.'
        })}
      </Head>
      <InstantSearch
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <SearchBlog />
      </InstantSearch>
    </BlogLayout>
  )
}

export default SearchPage
