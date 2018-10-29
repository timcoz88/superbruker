import { Theme } from "@material-ui/core";

const drawerWidth = 240;

export const styles = (theme: Theme) => ({
    root: {
      flexGrow: 1,
      height: '100vh',
      minHeight: '100%',
      zIndex: 1,
            // tslint:disable-next-line:object-literal-sort-keys
      overflow: 'hidden',
      position: 'relative',
            // tslint:disable-next-line:object-literal-sort-keys
      display: 'flex',
      width: '100%',
      backgroundColor: theme.palette.background.default,
    },
    // tslint:disable-next-line:object-literal-sort-keys
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      // tslint:disable-next-line:object-literal-sort-keys
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        // tslint:disable-next-line:object-literal-sort-keys
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.up('md')]: {
        width: `100%`,
      },
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      // tslint:disable-next-line:object-literal-sort-keys
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        // tslint:disable-next-line:object-literal-sort-keys  
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawerPaper: {
      position: 'relative',
      top: 0,
      whiteSpace: 'nowrap',
      width: drawerWidth,
      // tslint:disable-next-line:object-literal-sort-keys
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        // tslint:disable-next-line:object-literal-sort-keys
        duration: theme.transitions.duration.enteringScreen,
      })
  
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        // tslint:disable-next-line:object-literal-sort-keys
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9,
      },
    },
    toolbar: {
      display: 'flex',
      // tslint:disable-next-line:object-literal-sort-keys
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      // tslint:disable-next-line:object-literal-sort-keys
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      minHeight: '100%',
      height: '100%',
      flex: '1 1 auto',
      overflowY: 'scroll'
    },
    button: {
      margin: theme.spacing.unit,
    },
    link: {
      textDecoration: 'none',
    },
    current: {
      color: 'red !important',
    },
    notifications: {
      overflowX: 'hidden'
    },
    fillSpace: {
      flex: '1 1 auto'
    }
  });