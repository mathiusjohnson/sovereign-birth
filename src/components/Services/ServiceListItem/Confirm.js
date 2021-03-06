import React from 'react'

export default function Confirm (props) {
	return (
		<main className="appointment__card appointment__card--confirm">
			<h1 className="text--semi-bold">Delete the appointment?</h1>
			<section className="appointment__actions">
				<div 
					onClick={props.onCancel}
					danger="true"
				>
				Cancel
				</div>
				<div 
					onClick={props.onConfirm}	
					danger="true"
				>
				Confirm
				</div>
  		</section>
		</main>
	)
}