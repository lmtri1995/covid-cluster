import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import HexaGrid from '../components/HexaGrid'
import SearchRemoveHexa from '../components/SearchRemoveHexa'
import AddHexa from '../components/AddHexa'
import Notification from '../components/Notification'
import { ApiClient } from '../apis' 
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(() => ({
	root: {
		width: '300px'
  },
  addHexa: {
    marginRight: '10px'
  }
}))


const apiClient = new ApiClient()

function Layout() {
  const classes = useStyles()
  const [hexName, setHexName] = useState('')
  const [hexaGridData, setGridData] = useState({})

  useEffect(() => {
    apiClient.api.getAllHexa().then((response) => {
      setGridData(response.data)
    })
  })

  const closeNotification = () => {
    setHexName('')
  }

  const searchHexa = (name) => {
    console.log('search', name)
    apiClient.api.searchHexa(name).then((response) => {
      console.log(response)
    })
  }

  const removeHexa = (name) => {
    console.log('remove', name)
    apiClient.api.removeHexa(name).then((response) => {
      console.log(response)
    })
  }

  const handleAddHexa = (hexa) => {
    console.log(hexa)
    apiClient.api.addHexa(hexa).then((response) => {
      console.log(response)
    })
  }

  const handleSearchRemoveHexa = (hexa) => {
    if(hexa.action === 'search') {
      searchHexa(hexa.name)
    } else if(hexa.action === 'remove') {
      removeHexa(hexa.name)
    }
  }

  let hexaGrid
  if(Object.keys(hexaGridData).length === 0){
    hexaGrid = (
      <CircularProgress />
    )
  } else {
    hexaGrid = (
      <HexaGrid data={hexaGridData} />
    )
  }

  return (
    <>
      <h2>Welcome to Hexaland</h2>
      {hexaGrid}
      <Container>
        <Notification hexName={hexName} handleMessage={closeNotification} />
        <section style={{ justifyContent: 'center', display: 'flex' }} >
          <div className={classes.addHexa}>
            <AddHexa onChange={handleAddHexa} />
          </div>
          <div>
            <SearchRemoveHexa onChange={handleSearchRemoveHexa} />
          </div>
        </section>
        </Container>
    </>
  );
}

export default Layout
