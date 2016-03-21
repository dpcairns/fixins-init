import React from "react"

export default class ReviewList extends React.Component{
	render(){
		let reviewNodes = this.props.allReviews.map(function(review){
			return(
				<li key={review._id}>
					<ul>
						<li>Name: {review.reviewed_item_name}</li>
						<li>Type: {review.reviewed_item_type}</li>
						<li>Stars: {review.stars}</li>
						<li>Words: {review.words}</li>
					</ul>
				</li>
				)
		})
	return(
		<div>
			<ol>
			{reviewNodes}
			</ol>
		</div>

		)

	}

}