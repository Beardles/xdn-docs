import { makeStyles } from '@material-ui/core'
import React from 'react'
import MoovwebXDN from './icons/moovweb-xdn-white.svg'

const useStyles = makeStyles(theme => ({
  logo: {
    height: 48,
    marginBottom: -4,
    width: 220,
    backgroundSize: 250,
    [theme.breakpoints.down('xs')]: {
      width: 150,
    },
  },
}))

export default ({ style }) => {
  const classes = useStyles()
  return <MoovwebXDN className={classes.logo} style={style} />
}
