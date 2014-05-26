var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shiplogic');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // todo
});

var address = mongoose.Schema({
	street1: String,
	street2: String,
	street3: String,
	city: String,
	county: String,
	state: String,
	postalCode: String
});

var item = mongoose.Schema({
	itemDescription: String,
	SKUnumner: String,
	Weight: Number,
	Dimensions: Number
});

var fourmeSchema = mongoose.Schema({
    firstName: String,
    middleInitial: String,
    lastName: String,
    shipperAddress: [address],
    recipientAddress: [address],
    items : [[item]],
    orderSummary: String,
    numberOfItems: Number,
    OrderValue: Number,
    ServiceType: String
});
