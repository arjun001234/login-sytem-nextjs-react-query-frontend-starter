import { useIsFetching } from 'react-query'
 
const GlobalLoadingIndicator = () => {
  const isFetching = useIsFetching()

  return isFetching ? (
    <div className="transition ease-in-out animate-spin duration-200 h-5 w-5"></div>
  ) : null
}

export default GlobalLoadingIndicator