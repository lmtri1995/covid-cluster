import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import HexaGrid from '../components/HexaGrid'
import SearchHexa from '../components/SearchHexa'
import AddHexa from '../components/AddHexa'
import Notification from '../components/Notification'
import { ApiClient } from '../apis' 


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

  return (
    <>
      <h2>Welcome to Hexaland</h2>
      <HexaGrid data={hexaGridData} />
      <Container>
        <Notification hexName={hexName} handleMessage={closeNotification}/>
        <section style={{ justifyContent: 'center', display: 'flex' }}>
          <div className={classes.addHexa}>
            <AddHexa />
          </div>
          <div>
            <SearchHexa />
          </div>
        </section>
        </Container>
    </>
  );
}

export default Layout
