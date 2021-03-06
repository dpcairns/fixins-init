var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var randNum = Math.random

var SpotSchema = new Schema({
	spot_name: {
		type: String,
		required: true
	},
	spot_blurb: {
		type: String,
		default: "default spot blurb"
	},
	spot_address: {
		type: String,
		default: "123 Fake Street Portland OR, 90210"
	},
	spot_coordinates:
	{
		type: Array,
		default: [45.53, -122.67]
	},

	addDate: {
		type: Date,
		default: Date.now
	},
	spot_dishes: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Dish'
			}

	],
	spot_genres: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Genre'
			}
		],
	spot_subNeighborhood:
			{
				type: Schema.Types.ObjectId,
				ref: 'SubNeighborhood'
			},
			approved: {
					type: Boolean,
					default: false
			}
		});


module.exports = mongoose.model('Spot', SpotSchema)
