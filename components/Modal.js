import { Fragment } from "react";
import { FaTimesCircle } from "react-icons/fa";

const Modal = ({ handleClose, show, children }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";

	return (
		<Fragment>
			<style jsx>{`
				.modal {
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: rgba(0, 0, 0, 0.6);
					z-index: 100;
				}
				.modal-main {
					position: fixed;
					background: #eb3e34;
					border: none;
					border-radius: 1rem 1rem 1rem 0;
					padding: 1rem;
					max-width: 100%;
					width: auto;
					height: auto;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					display: flex;
					flex-direcion: row;
					z-index: 1000;
				}
				.modal__button {
					background: none;
					border: none;
					outline: none;
					font-size: 45px;
					color: #eee;
					cursor: pointer;
					display: flex;
					padding: 0 1rem;
				}
				.modal__button:hover {
					opacity: 0.75;
				}
				.display-block {
					display: block;
				}
				.display-none {
					display: none;
				}
			`}</style>
			<div className={showHideClassName}>
				<section className="modal-main">
					{children}
					<button className="modal__button" onClick={handleClose}>
						<FaTimesCircle />
					</button>
				</section>
			</div>
		</Fragment>
	);
};

export default Modal;
