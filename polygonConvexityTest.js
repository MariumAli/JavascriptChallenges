function calculateAllCrossProduct(points) {
    var lastSign = null;

    for (var i = 2; i < points.length; i++) {
        //calculate crossproduct from 3 consecutive points
        var crossproduct = calculateCrossProduct(points[i - 2], points[i - 1], points[i]);
		console.log(i + ". crossproduct from ("+ points[i - 2].x +" "+points[i - 1].x +" "+points[i].x +"): " + crossproduct);
        var currentSign = Math.sign(crossproduct);
        if (lastSign == null) {
        	//last sign init
        	lastSign = currentSign;
	}

        console.log("Last sign: " + lastSign + " current sign: "+currentSign);
        
        var checkResult = checkCrossProductSign(lastSign, currentSign);
        if (checkResult == false) {
            //different sign in cross products,no need to check the remaining points --> concave polygon --> return function
            return false;
        }
        lastSign = currentSign;
    }

    //first point must check between second and last point, this is the last 3 points that can break convexity
    var crossproductFirstPoint = calculateCrossProduct(points[points.length - 2], points[0], points[1]);
    
    console.log("cross product first point: ", crossproductFirstPoint);
    
    return checkCrossProductSign(lastSign, Math.sign(crossproductFirstPoint));
}

function checkCrossProductSign(lastSign, newSign) {
    if (lastSign !== newSign) {
        //checked sign differs from the previous one --> concave polygon
        return false;
    }
    return true;
}

function calculateCrossProduct(p1, p2, p3) {

    var dx1 = p2.x - p1.x;
    var dy1 = p2.y - p1.y;
    var dx2 = p3.x - p2.x;
    var dy2 = p3.y - p2.y;

    var zcrossproduct = dx1 * dy2 - dy1 * dx2;
    return zcrossproduct;
}

function isPolygonConvex(points) {    
    return calculateAllCrossProduct(points);
}


var pointsConvexPolygon = [{"x":2117708.7303958,"y":6024264.0003844},{"x":2118950.8321053,"y":6026690.8760321},{"x":2121110.178154,"y":6024187.5633561},{"x":2119361.6811323,"y":6023432.7477018},{"x":2117708.7303958,"y":6024264.0003844}];
var pointsConcavePolygon = [{"x":2119934.9588443,"y":6024579.3031259},{"x":2118950.8321053,"y":6026690.8760321},{"x":2121110.178154,"y":6024187.5633561},{"x":2119361.6811323,"y":6023432.7477018},{"x":2119934.9588443,"y":6024579.3031259}];

console.log(isPolygonConvex(pointsConvexPolygon));
console.log(isPolygonConvex(pointsConcavePolygon));