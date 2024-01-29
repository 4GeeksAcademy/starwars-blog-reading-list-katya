import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	actions.changeToSingleView();

	return (
		<div></div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
