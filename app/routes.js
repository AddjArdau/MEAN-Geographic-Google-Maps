/** Requiring Factories **/
var MarkerFactory     = require('./factories/marker.factory.js');
var LinestringFactory = require('./factories/linestring.factory.js');
var PolygonFactory    = require('./factories/polygon.factory.js');

// Opens App Routes
module.exports = function(app) {

    /** Getting all the markers **/
    app.get('/markers', function(req, res) {
        MarkerFactory.getMarkers().then( function (markers) {
            return res.json(markers);
        }, function (error) {
            res.json(error);
        });
    });

    /** Posting a new marker **/
    app.post('/markers', function(req, res) {
        MarkerFactory.postMarker(req).then( function (marker) {
            res.json(marker);
        });
    });

    // Retrieves JSON records for all points near a given distance from a certain point
    app.post('/find-neighbours', function(req, res) {
        MarkerFactory.findNeighbours(req).then( function (neighbours) {
            return res.json(neighbours);
        }, function (error) {
            return res.json(error);
        })
    });

    /** Getting all the linestrings **/
    app.get('/linestrings', function(req, res) {
        LinestringFactory.getLinestrings().then( function (linestrings) {
            res.json(linestrings);
        }, function (error) {
            res.json(error);
        });
    });

    /** Posting a new linestring **/
    app.post('/linestrings', function(req, res) {
        LinestringFactory.postLinestring(req).then( function (linestring) {
            return res.json(linestring);
        }, function (error) {
            res.json(error);
        });
    });

    // Retrieves JSON records for all linestrings intersecting a given one
    app.post('/find-poly-intersection', function(req, res) {
        LinestringFactory.findIntersections(req).then( function (linestrings) {
            return res.json(linestrings);
        }, function (error) {
            return res.json(error);
        })
    });

    /** Getting all the polygon **/
    app.get('/polygons', function(req, res) {
        PolygonFactory.getPolygons().then( function (polygons) {
            res.json(polygons);
        }, function (error) {
            res.json(error);
        });
    });

    /** Posting a new polygon **/
    app.post('/polygons', function(req, res) {
        PolygonFactory.postPolygon(req).then( function (polygon) {
            return res.json(polygon);
        }, function (error) {
            res.json(error);
        });
    });

    // Retrieves JSON records for all polygons intersecting a given one
    app.post('/find-polygon-intersections', function(req, res) {
        PolygonFactory.findIntersections(req).then( function (polygons) {
            return res.json(polygons);
        }, function (error) {
            return res.json(error);
        })
    });

    // Retrieves JSON records for all points inside a given polygon
    app.post('/find-points-inside-polygon', function(req, res) {
        PolygonFactory.findPointsInsidePolygon(req).then( function (points) {
            return res.json(points);
        }, function (error) {
            return res.json(error);
        })
    });

};
