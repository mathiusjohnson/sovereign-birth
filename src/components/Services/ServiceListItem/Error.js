import React from 'react'

export default function Error (props) {
	return (
		<main className="">
			<section className="">
				<h1 className="text--semi-bold">Error</h1>
				<h3 className="text--light">{props.message}</h3>
			</section>
			{/* <img
				className=""
				src="images/close.png"
				alt="Close"
				onClick={props.onClose}
			/> */}
		</main>
	)
}