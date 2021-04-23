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
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Joe Sanders</div>Nº4256373</div>,  <div style={{color: "#3A6582"}}><div>Nota de credito electrónica</div>Nº645633</div>,   <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>,<div style={{color: "white", background: "#1abc9c", borderRadius: "2px", width: "75px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Bob Sanders</div>Nº4256373</div>,    <div style={{color: "#3A6582"}}><div>Boleta electrónica</div>Nº645633</div> ,  <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px", width: "75px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>James Sanders</div>Nº4256373</div>,    <div style={{color: "#3A6582"}}><div>Nota de credito electrónica</div>Nº645633</div>,  <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "white", background: "#d20404", borderRadius: "2px", width: "75px"}}>Cancelado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Troi Sanders</div>Nº4256373</div>,    <div style={{color: "#3A6582"}}><div>Boleta electrónica</div>Nº645633</div>,  <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px", width: "75px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Samuel Sanders</div>Nº4256373</div>,    <div style={{color: "#3A6582"}}><div>Nota de credito electrónica</div>Nº645633</div>,  <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px", width: "75px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Mike Sanders</div>Nº4256373</div>,    <div style={{color: "#3A6582"}}><div>Nota de credito electrónica</div>Nº645633</div>,  <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px", width: "75px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Sonia Sanders</div>Nº4256373</div>,   <div style={{color: "#3A6582"}}><div>Factura electrónica</div>Nº645633</div>,  <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "white", background: "#d20404", borderRadius: "2px", width: "75px"}}>Cancelado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Joe Sanders</div>Nº4256373</div>,  <div style={{color: "#3A6582"}}><div>Nota de credito electrónica</div>Nº645633</div>,  <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px", width: "75px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Joe Sanders</div>Nº4256373</div>,  <div style={{color: "#3A6582"}}><div>Boleta electrónica</div>Nº645633</div>,  <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "white", background: "#fbae06", borderRadius: "2px", width: "75px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Joe Sanders</div>Nº4256373</div>,  <div style={{color: "#3A6582"}}><div>Factura electrónica</div>Nº645633</div>,  <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px", width: "75px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Joe Sanders</div>Nº4256373</div>,  <div style={{color: "#3A6582"}}><div>Boleta electrónica</div>Nº645633</div>,  <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px", width: "75px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  [<div style={{color: "#3A6582"}}><div style={{fontWeight: "bold"}}>Joe Sanders</div>Nº4256373</div>, <div style={{color: "#3A6582"}}><div>Boleta electrónica</div>Nº645633</div>,  <div style={{color: "#3A6582"}}><div>25 de enero 2021</div>17:15</div>, <div style={{color: "white", background: "#1abc9c", borderRadius: "2px", width: "75px"}}>Aprobado</div>, <div style={{color: "#3A6582"}}>349,60</div>],
  
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

export default function Recibidos() {
  const classes = useStyles();
  return (
    <>
        
      <Grid container spacing={4}>
      <Grid item xs={12}>
          
            <TableContainer component={Paper} className="table table-bordered" >
      <Table className={classes.table} size="small" aria-label="a dense table" style={{margin: "15px", width: "98%", textAlign: "center"}}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Buscar pedidos</TableCell>
            <TableCell align="center"><CalendarTodayIcon/> Seleccionar fecha <ArrowDropDownIcon/></TableCell>
            
            <TableCell align="center">Tipo de documento <ArrowDropDownIcon/></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
           
         
        </TableBody>
      </Table>
      <div style={{marginLeft: "15px"}}>357 Recibidos<div style={{marginRight: "15px", float: "right"}}>Borrar filtros</div></div>
    </TableContainer>



    

          
        </Grid>
        <Grid item xs={12} style={{color: "#3A6582"}}>

          <MUIDataTable
            title="Emitidos"
            data={datatableData}
            columns={["Usuarios", "Tipo de documento", "Punto de venta", "Estado", "Total"]}
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
