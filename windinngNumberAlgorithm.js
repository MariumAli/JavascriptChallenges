/**
 * Returns whether a point is in a polygon using a winding number test
 *
 * Algorithm by Dan Sunday: http://geomalgorithms.com/a03-_inclusion.html
 *
 * @param point {Array} should be a 2-item array of coordinates
 * @param polygon {Array} should be an array of 2-item arrays of coordinates.
 * @return {boolean} true if inside, false if outside
 */
function pointInPolyWindingNumber(point, polygon) {
	if (polygon.length === 0) {
		return false;
	}

	var n = polygon.length;
	var newPoints = polygon.slice(0);
	newPoints.push(polygon[0]);
	var wn = 0; // wn counter

	// loop through all edges of the polygon
	for (var i = 0; i < n; i++) {
		if (newPoints[i][1] <= point[1]) { // polygon edge point .y <= point.y
			if (newPoints[i + 1][1] > point[1]) { // next polygon edge point .y > point.y (AN UPWARD CROSSING)
				if (isLeft(newPoints[i], newPoints[i + 1], point) > 0) { // within a lines segment's 2 edge points y intercept
					wn++; //VALID UP INTERSECT
				}
			}
		} else {
			if (newPoints[i + 1][1] <= point[1]) {
				if (isLeft(newPoints[i], newPoints[i + 1], point) < 0) {
					wn--; // VALID DOWN INNTERSECT
				}
			}
		}
	}
	// the point is outside only when this winding number wn===0, otherwise it's inside
	return wn !== 0;
}

/**
 * Tests if a point is Left|On|Right of an infinite line.
 *
 * See http://geomalgorithms.com/a01-_area.html
 *
 * @param p0 {object} x,y point
 * @param p1 {object} x,y point
 * @param p2 {object} x,y point
 * @returns {number}
 *  >0 for P2 left of the line through P0 and P1,
 *  =0 for P2  on the line,
 *  <0 for P2  right of the line
 */
function isLeft(p0, p1, p2) {
    //Counnter clock wise test. i.e. cross product of line p0p1 and pop2
	return ( (p1[0] - p0[0]) * (p2[1] - p0[1]) ) -
		((p2[0] - p0[0]) * (p1[1] - p0[1]) );
}