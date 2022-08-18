import React from 'react'

export declare interface Route {
  path: string
  component: React.LazyExoticComponent<any>
  index?: boolean
  name?: string
}
