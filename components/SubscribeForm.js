import React, { Component, Fragment } from "react";
import FlashMessage from "../components/FlashMessage";
import getAnalytics from "../utils/getAnalytics";

const analytics = getAnalytics;

class SubscribeForm extends Component {
	state = {
		loading: false,
		submitted: false,
		error: null,
		success: null,
		email: ""
	};
	handleChange = e => {
		e.preventDefault();
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	handleSubmit = async e => {
		e.preventDefault();
		analytics.logEvent("Click", "Email subscribe form submit");
		this.setState({
			loading: false,
			submitted: false,
			error: null,
			success: ""
		});
		const data = {
			email: this.state.email
		};
		try {
			// console.log('try block')
			const response = await fetch("/api/email", {
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
				analytics.logException(`Email subscribe error: ${response.error}`);
			} else {
				this.setState({
					error: null,
					loading: false,
					submitted: true,
					success: "Thank you for your submission!",
					email: ""
				});
			}
		} catch (error) {
			// console.log('try catch error');
			analytics.logException(`Email subscribe error: ${error}`);
			this.setState({ loading: false, error });
		}
	};
	render() {
		const { submitted, loading } = this.state;
		return (
			<Fragment>
				<style jsx>{`
					.subscribe-form {
						display: flex;
						flex-direction: column;
						max-width: 30rem;
						margin: 0 1rem;
						box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
						border-radius: 1rem 1rem 1rem 0;
					}
					.subscribe-form__container {
						font-family: Montserrat;
						width: 100%;
						text-align: center;
						max-width: 100%;
						margin-top: 2rem;
					}
					.subscribe-form__button,
					.subscribe-form__input {
						margin: 0 0;
						padding: 0.5rem;
						max-width: 100%;
					}
					.subscribe-form__button {
						border-radius: 0 0 1rem 0;
					}
					.subscribe-form__button:focus,
					.subscribe-form__input:focus {
						outline: none;
					}
					.subscribe-form__button {
						background-color: #eb3e34;
						border: none;
						color: #eee;
						font-weight: 500;
					}
					.subscribe-form__button:hover {
						background-color: #d2251b;
						cursor: pointer;
					}
					.subscribe-form__button:active {
						transform: translateY(1px);
					}
					.subscribe-form__input {
						border: none;
						text-align: center;
						border-radius: 1rem 1rem 0 0;
					}
					.subscribe-form__link {
						letter-spacing: 1px;
						font-family: Raleway;
						font-size: 0.8rem;
						margin-top: 0.7rem;
					}
					.subscribe-form__link a {
						color: #eb3e34;
					}
					@media (min-width: 576px) {
						.subscribe-form {
							margin: 0 auto;
						}
					}
				`}</style>
				<form
					className="subscribe-form__container"
					onSubmit={this.handleSubmit}
				>
					{this.state.error && (
						<FlashMessage message={this.state.error} type="error" />
					)}
					{this.state.submitted && (
						<FlashMessage message={this.state.success} type="success" />
					)}
					<fieldset disabled={loading}>
						<div className="subscribe-form">
							<input
								className="subscribe-form__input"
								type="email"
								name="email"
								placeholder="Sign up for Email updates!"
								value={this.state.email}
								onChange={this.handleChange}
							/>
							<button
								type="submit"
								className="subscribe-form__button"
								disabled={submitted}
							>
								{submitted ? "Submitted!" : loading ? "Sending..." : "Submit"}
							</button>
						</div>
					</fieldset>
					<p className="subscribe-form__link">
						If that doesn't work, you can sign up{" "}
						<a href="http://eepurl.com/gbHpl1" target="_blank">
							here
						</a>
					</p>
				</form>
			</Fragment>
		);
	}
}

export default SubscribeForm;
