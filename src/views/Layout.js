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
    padding: '50px',
    fontSize: '30px'
  },
  addHexa: {
    marginRight: '10px'
  }
}))


const apiClient = new ApiClient()

function Layout() {
  const classes = useStyles()
  const [hexaGridData, setGridData] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    apiClient.api.getAllHexa().then((response) => {
      setGridData(response.data)
    })
  }, [])

  const closeNotification = () => {
    setMessage('')
  }

  const searchHexa = (name) => {
    console.log('search', name)
    apiClient.api.searchHexa(name).then((response) => {
      console.log(response)
    })
  }

  const removeHexa = (name) => {
    apiClient.api.removeHexa(name).then((response) => {
      setMessage(`You 've successfully removed hexagon ${name}`)
    }).catch((error) => {

    })
  }

  const handleAddHexa = (hexa) => {
    apiClient.api.addHexa(hexa).then((response) => {
      
      const newHexa = response.data
      setGridData([...hexaGridData, newHexa])
      setMessage(`You 've successfully added hexagon ${newHexa.name}`)
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
      <div className={classes.root}> There is no hexagon, please add one</div>
    )
  } else {
    hexaGrid = (
      <HexaGrid data={hexaGridData} />
    )
  }

  const isGridEmpty = (Object.keys(hexaGridData).length === 0) ? true : false
  return (
    <>
      <h2>Welcome to Hexaland</h2>
      {hexaGrid}
      <Container>
        <Notification handleMessage={closeNotification} message={message}/>
        <section style={{ justifyContent: 'center', display: 'flex' }} >
          <div className={classes.addHexa}>
            <AddHexa onChange={handleAddHexa} isGridEmpty={isGridEmpty}/>
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
