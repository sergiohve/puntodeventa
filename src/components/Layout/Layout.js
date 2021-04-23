import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {Box, IconButton, Link} from '@material-ui/core'
import Icon from '@mdi/react'

//icons
import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiGithub as GithubIcon,
} from '@mdi/js'

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Emitidos from "../../pages/emitidos";
import Recibidos from "../../pages/recibidos";
import Stock from "../../pages/stock";
import Envios from "../../pages/envios";
import Ventas from "../../pages/ventas";
import Compras from "../../pages/compras";
import Despacho from "../../pages/despacho";
import Analitica from "../../pages/analitica";
import Configuracion from "../../pages/configuracion";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Borradores from "../../pages/borradores";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";


// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
               
              <Route path="/app/puntodeventa" component={Dashboard} />
              <Route path="/app/emitidos" component={Emitidos} />
              <Route path="/app/recibidos" component={Recibidos} />
              <Route path="/app/borradores" component={Borradores} />
               <Route path="/app/stock" component={Stock} />
               <Route path="/app/envios" component={Envios} />
               <Route path="/app/ventas" component={Ventas} />
               <Route path="/app/compras" component={Compras} />
               <Route path="/app/despacho" component={Despacho} />
                <Route path="/app/analitica" component={Analitica} />
                <Route path="/app/configuracion" component={Configuracion} />
              <Route path="/app/notifications" component={Notifications} />
              <Route exact path="/app/ui" render={() => <Redirect to="/app/ui/icons" />}/>
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>
            
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
