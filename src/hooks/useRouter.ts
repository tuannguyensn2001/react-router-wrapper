import useRouteContext from '../hooks/useRouteContext'
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams
} from 'react-router-dom'
import { Route } from '../types/route'

export default function useRouter() {
  const { routes } = useRouteContext()

  const navigate = useNavigate()

  const params = useParams()

  const location = useLocation()

  const [searchParams] = useSearchParams()

  const push = (
    to: string | { name: string; params?: Object; query?: Object }
  ) => {
    if (typeof to === 'string') {
      return navigate(to)
    }

    const route: Route | undefined = routes.find(
      (item: Route) => item.name === to?.name
    )
    if (!route) throw new Error('route not valid')

    const newRoute = route.path
      .split('/')
      .map((item) => {
        if (!item.includes(':')) return item

        const split = item?.split(':')

        if (split.length !== 2) throw new Error('route not valid')

        if (typeof to?.params !== 'object') throw new Error('route not valid')

        if (!Object.keys(to?.params).includes(split[1]))
          throw new Error('route not valid')

        const value = to?.params[split[1]]
        if (!value) {
          throw new Error('route not valid')
        }
        return value
      })
      .join('/')
    return navigate(newRoute)
  }

  return {
    push,
    params,
    location,
    searchParams
  }
}
