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
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Joe Sanders</div>Nº4256373</div>, <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Visa</div>Credit Card</div>, <div style={{color: "#3A6582"}}><div>Nota de credito electrónica</div>Nº645633</div>, <div style={{color: "#3A6582"}}><PhoneAndroidIcon/> Web</div>,<div style={{color: "white", background: "#1abc9c", borderRadius: "2px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Bob Sanders</div>Nº4256373</div>, <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>,  <div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Master</div>Debit Card</div>, <div style={{color: "#3A6582"}}><div>Boleta electrónica</div>Nº645633</div> ,<div style={{color: "#3A6582"}}><StoreIcon/> Tienda Caracol</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>James Sanders</div>Nº4256373</div>, <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>,  <div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Visa</div>Credit Card</div>, <div style={{color: "#3A6582"}}><div>Nota de credito electrónica</div>Nº645633</div>,<div style={{color: "#3A6582"}}><PhoneAndroidIcon/> Web</div>, <div style={{color: "white", background: "#d20404", borderRadius: "2px"}}>Cancelado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Troi Sanders</div>Nº4256373</div>, <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>,  <div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Paypal</div>Online Payment</div>, <div style={{color: "#3A6582"}}><div>Boleta electrónica</div>Nº645633</div>,<div style={{color: "#3A6582"}}><StoreIcon/> Tienda Caracol</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Samuel Sanders</div>Nº4256373</div>, <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>,  <div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Visa</div>Credit Card</div>, <div style={{color: "#3A6582"}}><div>Nota de credito electrónica</div>Nº645633</div>,<div style={{color: "#3A6582"}}><PhoneAndroidIcon/> Web</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Mike Sanders</div>Nº4256373</div>, <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>,  <div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Master</div>Debit Card</div>, <div style={{color: "#3A6582"}}><div>Nota de credito electrónica</div>Nº645633</div>,<div style={{color: "#3A6582"}}><PhoneAndroidIcon/> Web</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Sonia Sanders</div>Nº4256373</div>, <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>,  <div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Visa</div>Credit Card</div>, <div style={{color: "#3A6582"}}><div>Factura electrónica</div>Nº645633</div>,<div style={{color: "#3A6582"}}><StoreIcon/> Tienda Caracol</div>, <div style={{color: "white", background: "#d20404", borderRadius: "2px"}}>Cancelado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Joe Sanders</div>Nº4256373</div>,<div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Revolut</div>Online Payment</div>, <div style={{color: "#3A6582"}}><div>Nota de credito electrónica</div>Nº645633</div>,<div style={{color: "#3A6582"}}><StoreIcon/> Tienda Caracol</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Joe Sanders</div>Nº4256373</div>, <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Visa</div>Credit Card</div>, <div style={{color: "#3A6582"}}><div>Boleta electrónica</div>Nº645633</div>,<div style={{color: "#3A6582"}}><PhoneAndroidIcon/> Web</div>, <div style={{color: "white", background: "#fbae06", borderRadius: "2px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Joe Sanders</div>Nº4256373</div>, <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>,  <div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Master</div>Debit Card</div>, <div style={{color: "#3A6582"}}><div>Factura electrónica</div>Nº645633</div>,<div style={{color: "#3A6582"}}><PhoneAndroidIcon/> Web</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Joe Sanders</div>Nº4256373</div>, <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>,  <div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Visa</div>Credit Card</div>, <div style={{color: "#3A6582"}}><div>Boleta electrónica</div>Nº645633</div>,<div style={{color: "#3A6582"}}><StoreIcon/> Tienda Caracol</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Joe Sanders</div>Nº4256373</div>, <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>,  <div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Paypal</div>Online Payment</div>,<div style={{color: "#3A6582"}}><div>Boleta electrónica</div>Nº645633</div>,<div style={{color: "#3A6582"}}><PhoneAndroidIcon/> Web</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  
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

export default function Emitidos() {
  const classes = useStyles();
  return (
    <>
        
      <Grid container spacing={4}>
      <Grid item xs={12}>
          
            <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Buscar pedidos</TableCell>
            <TableCell align="right"><CalendarTodayIcon/> Seleccionar fecha <ArrowDropDownIcon/></TableCell>
            <TableCell align="right">Punto de venta <ArrowDropDownIcon/></TableCell>
            <TableCell align="right">Tipo de documento <ArrowDropDownIcon/></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
           
         
        </TableBody>
      </Table>
    </TableContainer>

          
        </Grid>
        <Grid item xs={12} style={{color: "#3A6582"}}>

          <MUIDataTable
            title="Emitidos"
            data={datatableData}
            columns={["Usuarios", "Fecha", "Metodo de pago", "Tipo de dovumento", "Punto de venta", "Estado", "Total"]}
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
