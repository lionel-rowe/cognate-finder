import { urls } from '../config'

export const createSparqlClient = (endpoint: string) => {
	return {
		fetch: async (query: string) => {
			const url = new URL(endpoint)

			url.searchParams.set('query', query)

			const headers = [['Accept', 'application/sparql-results+json']]

			const res = await fetch(url.href, { headers })

			if (!res.ok) return { status: res.status, error: await res.text() }

			return await res.json()
		},
	}
}

export const sparqlClient = createSparqlClient(urls.etytreeSparql)