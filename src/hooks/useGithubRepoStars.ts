import { QueryOptions, useQuery } from '@tanstack/react-query'

const useGithubRepoStars = <TQueryFnData extends number>(
  repoOwner: undefined | string,
  repoName: undefined | string,
  {
    enabled,
    ...options
  }: Omit<QueryOptions<TQueryFnData>, 'queryKey' | 'queryFn'> & { enabled?: boolean } = {}
) => {
  return useQuery<TQueryFnData>({
    queryKey: ['githubRepoStats', repoOwner, repoName],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`)
      const { stargazers_count } = await response.json()
      return stargazers_count as TQueryFnData
    },
    ...options,
    enabled: enabled ?? (!!repoOwner && !!repoName)
  })
}

export {
  useGithubRepoStars as default
}
