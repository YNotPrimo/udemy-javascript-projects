const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const router = express.Router();

const url =
	"mongodb+srv://primo:en11sz1JjeBnente@cluster0.lsvxz.mongodb.net/locations?retryWrites=true&w=majority";

const dbName = "locations";

const client = MongoClient(url);

const locationStorage = {
	locations: [],
};

router.post("/add-location", (req, res, next) => {
	const id = Math.random();
	client.connect(function (err, client) {
		// assert.equal(null, err);
		// console.log("Connected correctly to server");

		const db = client.db(dbName);

		// Insert a single document
		db.collection("user-locations").insertOne(
			{
				address: req.body.address,
				coords: { lat: req.body.lat, lng: req.body.lng },
			},
			function (err, r) {
				console.log(r);
				res.json({ message: "Stored location", locId: id });
			}
		);
	});
});
locationStorage.locations.push({
	id,
	address: req.body.address,
	coords: { lat: req.body.lat, lng: req.body.lng },
});
res.json({ message: "Stored location!", locId: id });

router.get("/location/:lid", (req, res, next) => {
	const locationId = req.params.lid;
	const location = locationStorage.locations.find(loc => loc.id === locationId);

	if (!location) {
		return res.status(404).json({ message: "Not found!" });
	}

	res.json({ address: location.address, coordinates: location.coords });
});

module.exports = router;
