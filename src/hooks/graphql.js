import { useState } from 'react'
import {
  useQuery as _useQuery,
  useMutation as _useMutation,
  useLazyQuery as _useLazyQuery,
} from '@apollo/react-hooks'

export function useLoadMore(fetchMore, data, variables) {
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isEnd, setIsEnd] = useState(false)

  function loadMore() {
    setIsLoadingMore(true)
    fetchMore({
      variables: {
        ...variables,
        skip: data.list.length,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        setIsLoadingMore(false)
        if (!fetchMoreResult) {
          return previousResult
        }
        // 如果查到列表是空的，设置为isEnd
        if (fetchMoreResult.list.length === 0) {
          setIsEnd(true)
        }
        return {
          ...fetchMoreResult,
          list: [...previousResult.list, ...fetchMoreResult.list],
        }
      },
    })
  }

  return [isLoadingMore, isEnd, loadMore]
}

export function useQuery(schema, variables, options) {
  const { fetchMore, data = {}, ...other } = _useQuery(schema, {
    variables,
    ...options,
  })
  const [isLoadingMore, isEnd, loadMore] = useLoadMore(fetchMore, data, variables)

  return { isLoadingMore, isEnd, loadMore, fetchMore, data, ...other }
}

export function useMutation(schema, variables, options) {
  const [f1, ...other] = _useMutation(schema, { variables, ...options })
  function f2(variables2, opt) {
    return f1({
      variables: { ...variables, ...variables2 },
      ...options,
      ...opt,
    })
  }
  return [f2, ...other]
}

export function useLazyQuery(schema, variables, options) {
  const [f1, ...other] = _useLazyQuery(schema, { variables, ...options })
  function f2(variables2, opt) {
    return f1({
      variables: { ...variables, ...variables2 },
      ...options,
      ...opt,
    })
  }
  return [f2, ...other]
}
