import { makeStyles } from "@material-ui/styles";

const drawerWidth = 240;

export default makeStyles(theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 40,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  boton: {
    width: "180px",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "10px"
  },
   boton1: {
    width: "180px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
    color: "blue",
    fontSize: "10px",
    background: "#DCEDF6"
  },
  link: {
    textDecoration: "none",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5px",
    fontSize: "20px",
    color: "#939698",
     "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light,
    },

  },
  icon: {
    
    display: "inline-block",
    
  },


  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  /* sidebarList: {
    marginTop: theme.spacing(6),
  }, */
  mobileBackButton: {
    marginTop: theme.spacing(0.5),
    marginLeft: 18,
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing(0.625),
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
