import React, { Fragment, Component } from "react";

import getConfig from "next/config";
import getAnalytics from "../utils/getAnalytics";

const analytics = getAnalytics();

const FlashMessage = ({ type, message }) => (
	<Fragment>
		<style jsx>{`
			padding: 1rem;
			border: none;
			border-radius: 1rem 1rem 1rem 0;
			color: #eee;
			.error {
				background-color: #eb3e34;
			}
			.success {
				background-color: #586cff;
			}
		`}</style>
		<p className={type}>{message}</p>
	</Fragment>
);

class Contributeform extends Component {
	state = {
		error: null,
		submitted: false,
		loading: false,
		success: null,
		firstName: "",
		lastName: "",
		email: "",
		description: "",
		releases: ""
	};
	handleChange = e => {
		e.preventDefault();
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	handleSubmit = async e => {
		e.preventDefault();

		analytics.logEvent("Click", "Contribute form submit");

		this.setState({ loading: true, error: null, success: null });
		const data = { ...this.state };

		try {
			// console.log('try block')
			const response = await fetch("/api/contributor", {
				method: "post",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			}).then(res => res.json());

			// console.log('past request');

			if (response.error) {
				this.setState({ loading: false, error: response.error });
				analytics.logException(`Contribute form error: ${response.error}`);
			} else {
				this.setState({
					error: null,
					loading: false,
					submitted: true,
					success: "Thank you for your submission!",
					firstName: "",
					lastName: "",
					email: "",
					description: "",
					releases: ""
				});
			}
		} catch (error) {
			// console.log('try catch error');
			this.setState({ loading: false, error });
			analytics.logException(`Contribute form error: ${error}`);
		}
	};
	render() {
		const { loading, submitted } = this.state;
		return (
			<Fragment>
				<style jsx>{`
					.contribute-form__container {
						border: 3px solid #eb3e34;
						border-radius: 1rem 1rem 1rem 0;
						padding: 1rem;
					}
					.contribute-form__grid {
						display: grid;
						grid-gap: 10px;
						grid-template-columns: 1fr;
						grid-template-rows: repeat(6, auto);
						grid-template-areas: "first" "last" "email" "desc" "rel" "submit";
						justify-content: stretch;
					}
					fieldset:disabled {
						opacity: 0.5;
					}
					input,
					textarea {
						border: none;
						padding: 0.5rem;
						margin: 0;
						border-radius: 1rem 1rem 1rem 0;
						max-width: 100%;
						width: 100%;
					}
					textarea {
						margin: 0;
						resize: none;
					}
					*:active,
					*:focus {
						outline: none;
					}
					#first {
						grid-area: first;
					}
					#last {
						grid-area: last;
					}
					#email {
						grid-area: email;
					}
					#desc {
						grid-area: desc;
					}
					#rel {
						grid-area: rel;
					}
					#submit {
						grid-area: submit;
						place-self: start;
					}
					button {
						background-color: #eb3e34;
						color: #eee;
						border: none;
						font-family: Montserrat;
						font-size: 1.2rem;
						border-radius: 1rem 1rem 1rem 0;
						padding: 0.2rem 0.5rem;
						margin-top: 1rem;
						outline: none;
					}
					button:hover {
						transform: translateY(-2px);
					}
					button:active {
						transform: translateY(0);
						border: none;
					}
					button: * {
						outline: none;
					}
					@media (min-width: 576px) {
						.contribute-form__grid {
							grid-template-columns: 1fr 1fr;
							grid-template-rows: repeat(5, auto);
							grid-template-areas: "first last" "email email" "desc desc" "rel rel" "submit submit";
						}
					}
				`}</style>
				<div className="contribute-form__container">
					<form onSubmit={this.handleSubmit} className="contribute-form">
						{this.state.error && (
							<FlashMessage message={this.state.error} type="error" />
						)}
						{this.state.submitted && (
							<FlashMessage message={this.state.success} type="success" />
						)}
						<fieldset disabled={loading}>
							<div className="contribute-form__grid">
								<label htmlFor="firstName" id="first" className="name">
									<input
										type="text"
										id="firstName"
										name="firstName"
										placeholder="First Name"
										required
										value={this.state.firstName}
										onChange={this.handleChange}
									/>
								</label>
								<label htmlFor="lastName" id="last" className="name">
									<input
										type="text"
										id="lastName"
										name="lastName"
										placeholder="Last Name"
										required
										value={this.state.lastName}
										onChange={this.handleChange}
									/>
								</label>

								<label htmlFor="email" id="email">
									<input
										type="email"
										id="email"
										name="email"
										placeholder="Email"
										required
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</label>

								<label htmlFor="description" id="desc">
									<textarea
										id="description"
										name="description"
										placeholder="Tell us about your gaming habits: the types of games you enjoy, the systems you play, etc"
										required
										value={this.state.description}
										onChange={this.handleChange}
									/>
								</label>

								<label htmlFor="releases" id="rel">
									<textarea
										id="releases"
										name="releases"
										placeholder="What upcoming new releases are you looking forward to?"
										required
										value={this.state.releases}
										onChange={this.handleChange}
									/>
								</label>

								<button type="submit" id="submit" disabled={submitted}>
									{submitted
										? "Submitted"
										: loading
										? "Submitting..."
										: "Submit"}
								</button>
							</div>
						</fieldset>
					</form>
				</div>
			</Fragment>
		);
	}
}

export default Contributeform;
