import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  Menu as MenuIcon,
  ShoppingCart as cart,
} from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";


import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import DraftsIcon from '@material-ui/icons/Drafts';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerIcon from '@material-ui/icons/Power';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const estructura = [
  { 
    id: 0, label: "Punto de venta", 
    link: "/app/puntodeventa", 
    icon: <ShoppingCartIcon /> 
},
  {
    id: 1,
    label: "Emitidos",
    link: "/app/emitidos",
    icon: <InsertDriveFileIcon />,
  },
  { 
    id: 2, 
    label: "Recibidos", 
    link: "/app/recibidos", 
    icon: <CallReceivedIcon /> },
  {
    id: 3,
    label: "Borradores",
    link: "/app/borradores",
    icon: <DraftsIcon />,
  },
   {
    id: 4,
    label: "Stock",
    link: "/app/stock",
    icon: <HomeWorkIcon />,
  },
  {
    id: 5,
    label: "Envios",
    link: "/app/envios",
    icon: <LocalShippingIcon />,
  },
  { id: 10, type: "divider" },
  { id: 11, type: "title", label: "Registros"},
  {
    id: 12,
    label: "Ventas",
    link: "/app/ventas",
    icon: <MonetizationOnIcon />,
  },
  {
    id: 13,
    label: "Compras",
    link: "/app/compras",
    icon: <ShoppingBasketIcon/>,
  },
  {
    id: 14,
    label: "Guias de despacho",
    link: "/app/despacho",
    icon: <EmojiTransportationIcon />,
  },
  {
    id: 15,
    label: "Analitica",
    link: "/app/analitica",
    icon: <AssessmentIcon />,
  },
  {
    id: 16,
    label: "Configuración",
    link: "/app/configuracion",
    icon: <SettingsIcon />,
  },

];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  var layoutState = useLayoutState();
  
 


  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />


          
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {estructura.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
        
      </List>

       <IconButton
          style={{color: "black"}}
         
          className={classNames(
            classes.headerMenuButtonSandwich,
            classes.headerMenuButtonCollapse,
          )}
        >
          {layoutState.isSidebarOpened ? (
            <Button variant="contained" color="primary" className={classes.boton}>
        <PowerIcon/>Integraciones
        </Button>
          ) : (
           <Button variant="contained" color="primary" className={classes.boton}>
        <PowerIcon/>
        </Button>
          )}
        </IconButton>


        <IconButton
          style={{color: "black"}}
         
          className={classNames(
            classes.headerMenuButtonSandwich,
            classes.headerMenuButtonCollapse,
          )}
        >
          {layoutState.isSidebarOpened ? (
            <Button variant="contained" className={classes.boton1}>
        <HelpIcon/>Contactar con Soporte
        </Button>
          ) : (
          <Button variant="contained" className={classes.boton1}>
        <HelpIcon/>
        </Button>
          )}
        </IconButton>
  <div><hr/></div>
   <IconButton
          style={{color: "black"}}
         
          className={classNames(
            classes.headerMenuButtonSandwich,
            classes.headerMenuButtonCollapse,
          )}
        >
          {layoutState.isSidebarOpened ? (
            <div >
        <ExitToAppIcon/>Cerrar sesión
        </div>
          ) : (
          <div >
        <ExitToAppIcon/>
        </div>
          )}
        </IconButton>
   

      

        
  
   
    </Drawer>
  );


  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);