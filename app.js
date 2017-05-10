'use strict';
var dotenv = require('dotenv');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var Realm = require('realm');

dotenv.load();
var root_url = (process.env.ROOT_URL || 'http://localhost');
var port = Number(process.env.PORT || 3000);

/********************************* REALM SETUP ********************************/

const PlayerSchema = {
  name: 'Player',
  properties: {
    name: {type: 'string', optional: true}, // Player's Name
		gender: {type: 'string', optional: true}, // male or female
		picture: {type: 'string', optional: true}, // url
		position: {type: 'string', optional: true}, // string/id or object?
		positions_preferred: {type: 'data', optional: true} // DATA (array)
		//positions_preferred: {type: 'list', objectType: 'Position', optional: true // LIST
  }
};

const GroupingSchema = {
  name: 'Grouping',
	primaryKey: 'id',
  properties: {
		id: {type: 'int', optional: true}, // 1: p/c 2: infield 3: outfield
    name: {type: 'string', optional: true}, // 1: PitcherCatcher 2: infield 3: outfield
		positions: {type: 'list', objectType: 'Position'} // 1, 2 or 3
  }
};

const PositionSchema = {
  name: 'Position',
	primaryKey: 'id',
  properties: {
		id: {type: 'int', optional: true}, // 1-10
    name: {type: 'string', optional: true}, // Pitcher, Left Fielder
		group: {type: 'int', optional: true} // 1, 2 or 3
  }
};

let realm = new Realm({
	schema: [PlayerSchema, PositionSchema, GroupingSchema],
	path: './realm-data/softball.realm'
});

/*let realm = new Realm({
	schema: [ArticleSchema],
	sync: {
    user: Realm.Sync.User.adminUser(process.env.REALM_ADMIN_TOKEN),
    url: 'realm://ec2-54-146-162-14.compute-1.amazonaws.com:9080/articles'
  },
	path: './realm-data/articles.realm'
});*/

/******************************** EXPRESS SETUP *******************************/

var app = express();
app.set('json spaces', 2);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/******************************** EXPRESS ROUTES ******************************/

app.get('/', function (req, res) {
	res.send( 'Hello World' );
});

app.get('/players', function (req, res) {
	let allPlayers = realm.objects('Player');
	res.json(allPlayers);
});

app.get('/positions', function (req, res) {
	let allPositions = realm.objects('Position');
	res.json(allPositions);
});

app.get('/groups', function (req, res) {
	let allGroups = realm.objects('Groups');
	res.json(allGroups);
});

/******************************** SERVER LISTEN *******************************/

app.listen( port, function () {
	console.log( '\nApp server is running on ' + root_url +':' + port + '\n' );
});
