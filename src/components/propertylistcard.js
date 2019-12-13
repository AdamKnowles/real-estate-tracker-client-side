import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });


const PropertyListCard = props => {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Price per Square Foot</TableCell>
            <TableCell align="right">Days on Market</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.property.map(property => (
            <TableRow >
              <TableCell component="th" scope="row">
                {property.title}
              </TableCell>
              <TableCell align="right">{property.price_with_commas}$</TableCell>
              <TableCell align="right">{property.price_per_square_foot}$</TableCell>
              <TableCell align="right">{property.days_listed}</TableCell>
            </TableRow>
    ))}  
        </TableBody>
      </Table>
    </Paper>
    )
}
    

export default PropertyListCard