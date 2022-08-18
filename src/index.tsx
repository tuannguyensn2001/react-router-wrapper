import * as React from 'react'
import styles from './styles.module.css'
import RouteWrapper from './components/RouteWrapper'
import Link from './components/Link'
import { Route } from './types/route'
import useRouter from './hooks/useRouter'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component abc: {text}</div>
}

export { RouteWrapper, Link, Route, useRouter }
