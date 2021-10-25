/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logoutAction} from "../actions/login"

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container">
					<di className="navbar-brand" href="/">
						<Link to="/">TokoS3blah</Link>
					</di>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Kategori <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<form>
									<div class="input-group mb-3 my-auto">
										<input
											type="text"
											class="form-control pt-0"
											placeholder="Cari Barang"
											aria-label="Recipient's username"
											aria-describedby="button-addon2"
										/>
										<button
											class="btn btn-success text-lg"
											type="button"
											id="button-addon2"
										>
											cari
										</button>
									</div>
								</form>
							</li>
						</ul>
						{this.props.role ? (
							<div className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle text-white"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Pages
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to="/user">
										Profile {this.props.fullname}
									</Link>
									<Link className="dropdown-item" to="/cart">
										Cart
									</Link>
									{this.props.role == "admin" && (
										<Link className="dropdown-item" to="/admin">
											Admin
										</Link>
									)}
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" onClick={this.props.logoutAction}  href="#">
										Logout
									</a>
								</div>
							</div>
						) : (
							<div>
								<a
									className="btn btn-outline-success btn-sm my-2 ml-2 text-white rounded"
									href="/login"
								>
									Login
								</a>
								|
								<Link
									style={{ textDecoration: "none" }}
									to="/register"
									className="btn btn-success btn-sm my-2 ml-2"
								>
									Register
								</Link>
							</div>
						)
						}
					</div>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state.authReducer);
	return {
		fullname: state.authReducer.fullname,
		role: state.authReducer.role,
	};
};

const mapDispatchToProps = {
	logoutAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
