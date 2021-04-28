import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout} from '../apis/auth';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 0,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  link: {
    textDecoration: 'none',
    color: '#3f3f3f',
  },
}));

const Navbar = ({history}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          onClick={handleDrawerClose}
          className={clsx({
            [classes.hide]: !open,
          })}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
        <List>
          <Link className={classes.link} to="/dashboard">
            <ListItem button>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link className={classes.link} to="/history">
            <ListItem button>
              <ListItemIcon><HistoryIcon /></ListItemIcon>
              <ListItemText primary="History" />
            </ListItem>
          </Link>
          <Link className={classes.link} to="/account">
            <ListItem button>
              <ListItemIcon><AccountBoxIcon /></ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              signout(() => {
                history.push('/');
              });
            }}
          >
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Signout" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default withRouter(Navbar);
