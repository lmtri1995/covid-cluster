import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'; 

const useStyles  = makeStyles((theme) => ({
  root: {
    color: '#919892;',
    width: '300px',
    padding: '8px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
    height: '50px',
    margin: 'auto',
  },
  closeIcon: {
    marginLeft: 'auto',
    cursor: 'pointer'
  },
  addIcon: {
    color: '#4ad962',
  }
}))

export default function MessageNotification(props) {
  const {handleMessage, message, color} = props
  const styles = useStyles()
  console.log(color)

  return (
    <div className={styles.root} style={{display: `${message === '' ? "none" : "flex"}`, backgroundColor: `${color}` }}>
     
        &nbsp;{}&nbsp;<strong>{message}</strong>
      <CloseIcon className={styles.closeIcon} onClick={handleMessage} />
    </div>
  )

}