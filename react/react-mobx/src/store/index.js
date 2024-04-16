import React from 'react'
import { observer } from 'mobx-react-lite';
import counter from './counterStore'
import movie from './movieStore'

class RootStore {
  constructor() {
    this.couterStore = counter
    this.movieStore = movie
  }
}
const rootStore = new RootStore()

const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore, observer } 