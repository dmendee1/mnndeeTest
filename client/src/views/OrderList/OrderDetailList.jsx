import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";

import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../component/Grid/GridContainer.jsx"l
import OrderDetail from "../../components/Order/OrderDetail.jsx";
import AddOrder from "../../components/Order/AddOrderDetail.jsx";
import UploadFile from "../../components/UploadFile/UploadFile.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import PropTypes from "prop-types";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function OrderDetailList(props) {
	const { classes } = props;
	return(
		<div>
			<AddOrderDetail />
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<Card>
						<CardHeader color="danger">
							<h4 className={classes.cardTitleWhite}>Order Detail List</h4>
							<p className={classes.cardCategoryWhite}"></p>
						</CardHeader>
						<CardBody>
							<OrderDetail />
							<UploadFile/>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	)
}