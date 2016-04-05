import React from "react"
import RemoveButton from "./RemoveButton"

export default class GenresList extends React.Component{
	render(){
		let removeGenre = this.props.removeGenre
		let findAndChangeGenre = this.props.findAndChangeGenre
		let genresNodes = this.props.allGenres.map(function(genre){
			return(
				<tr key={genre._id}>
					<td>Name: {genre.genre_name}</td>
					<td><RemoveButton removeGenre={removeGenre} type="Genre" id={genre._id}/></td>

				</tr>
				)
		})
	return(
		<div>
			<table className="table table-condensed table-bordered table-hover">
				<tbody>
						{genresNodes}
				</tbody>
			</table>
		</div>

		)

	}

}
