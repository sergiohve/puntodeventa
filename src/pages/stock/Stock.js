import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import StoreIcon from '@material-ui/icons/Store';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// components

import Widget from "../../components/Widget";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


// data
import mock from "../dashboard/mock";

const datatableData = [
  [<div style={{color: "#3A6582"}}>Primitive 8.0</div>,  <div style={{color: "#3A6582"}}>1512834647</div>,   <div style={{color: "#3A6582"}}>535.500</div>, <div style={{color: "#3A6582"}}>$605.990</div>, <div style={{color: "#3A6582"}}>$350.000</div>],
  [<div style={{color: "#3A6582"}}>Tabla morada 33"</div>,    <div style={{color: "#3A6582"}}>1512834647</div> ,  <div style={{color: "#3A6582"}}>535.500</div>,<div style={{color: "#3A6582"}}>$605.990</div>, <div style={{color: "#3A6582"}}>$350.000</div>],
  [<div style={{color: "#3A6582"}}>Camara fotografica</div>,    <div style={{color: "#3A6582"}}>1512834647</div>,  <div style={{color: "#3A6582"}}>535.500</div>, <div style={{color: "#3A6582"}}>$605.990</div>, <div style={{color: "#3A6582"}}>$350.000</div>],
  [<div style={{color: "#3A6582"}}>Auto retro</div>,    <div style={{color: "#3A6582"}}>1512834647</div>,  <div style={{color: "#3A6582"}}>535.500</div>, <div style={{color: "#3A6582"}}>$605.990</div>, <div style={{color: "#3A6582"}}>$350.000</div>],
  [<div style={{color: "#3A6582"}}>Pluman red</div>,    <div style={{color: "#3A6582"}}>1512834647</div>,  <div style={{color: "#3A6582"}}>535.500</div>, <div style={{color: "#3A6582"}}>$605.990</div>, <div style={{color: "#3A6582"}}>$350.000</div>],
  [<div style={{color: "#3A6582"}}>Lápiz Azul</div>,    <div style={{color: "#3A6582"}}>1512834647</div>,  <div style={{color: "#3A6582"}}>535.500</div>, <div style={{color: "#3A6582"}}>$605.990</div>, <div style={{color: "#3A6582"}}>$350.000</div>],
  [<div style={{color: "#3A6582"}}>Primite deck 8.0"</div>,   <div style={{color: "#3A6582"}}>1512834647</div>,  <div style={{color: "#3A6582"}}>535.500</div>, <div style={{color: "#3A6582"}}>$605.990</div>, <div style={{color: "#3A6582"}}>$350.000</div>],
  [<div style={{color: "#3A6582"}}>Primite deck plus retro armor 8.0"</div>,  <div style={{color: "#3A6582"}}>1512834647</div>,  <div style={{color: "#3A6582"}}>535.500</div>, <div style={{color: "#3A6582"}}>$605.990</div>, <div style={{color: "#3A6582"}}>$350.000</div>],
  [<div style={{color: "#3A6582"}}>Primitive 8.0</div>,  <div style={{color: "#3A6582"}}>1512834647</div>,  <div style={{color: "#3A6582"}}>535.500</div>, <div style={{color: "#3A6582"}}>$605.990</div>, <div style={{color: "#3A6582"}}>$350.000</div>],
  [<div style={{color: "#3A6582"}}>Primitive dec plus retro armor 8.0"</div>,  <div style={{color: "#3A6582"}}>1512834647</div>,  <div style={{color: "#3A6582"}}>535.500</div>, <div style={{color: "#3A6582"}}>$605.990</div>, <div style={{color: "#3A6582"}}>$350.000</div>],
  [<div style={{color: "#3A6582"}}>Primitive 8.0</div>,  <div style={{color: "#3A6582"}}>1512834647</div>,  <div style={{color: "#3A6582"}}>535.500</div>, <div style={{color: "#3A6582"}}>$605.990</div>, <div style={{color: "#3A6582"}}>$350.000</div>],
  [<div style={{color: "#3A6582"}}>Primitive 8.0</div>, <div style={{color: "#3A6582"}}>1512834647</div>,  <div style={{color: "#3A6582"}}>535.500</div>, <div style={{color: "#3A6582"}}>$605.990</div>, <div style={{color: "#3A6582"}}>$350.000</div>],
  
];
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  },
   table: {
    minWidth: 650,
  },
}))

export default function Stock() {
  const classes = useStyles();
  return (
    <>
        
      <Grid container spacing={4}>
      <Grid item xs={12}>
          
            <TableContainer component={Paper} className="table table-bordered" >
      <Table className={classes.table} size="small" aria-label="a dense table" style={{margin: "15px", width: "98%", textAlign: "center"}}>
        <TableHead>
          <TableRow>
           <div className="input-group" style={{paddingRight: "10px", height: "40px"}}>
  <input type="search" className="form-control rounded"  style={{ height: "40px"}} placeholder="Buscar productos o servicios" aria-label="Search"
    aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary">Buscar</button>
</div>
            <TableCell align="center"><CalendarTodayIcon/>Sucursal<ArrowDropDownIcon/></TableCell>
            
            <TableCell align="center">Estado <ArrowDropDownIcon/></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
           
         
        </TableBody>
      </Table>
      <div style={{marginLeft: "15px"}}>Total de productos 357 </div>
    </TableContainer>



    

          
        </Grid>
        <Grid item xs={12} style={{color: "#3A6582"}}>

          <MUIDataTable
            title="Emitidos"
            data={datatableData}
            columns={["Producto", "Sku", "Stock", "Precio venta", "Costo por unidad", "Estado", "", ""]}
            options={{
              filterType: "checkbox",
            }}
            style={{color: "#3A6582"}}
          />
        </Grid>
      
      </Grid>
    </>
  );
}
