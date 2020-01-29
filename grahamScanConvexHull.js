
/*
The first step in this algorithm is to find the point with the lowest y-coordinate. 
If the lowest y-coordinate exists in more than one point in the set, 
the point with the lowest x-coordinate out of the candidates should be chosen. Call this point P. 
This step takes O(n), where n is the number of points in question.

Next, the set of points must be sorted in increasing order of the angle they and the point P make with the x-axis. 
Any general-purpose sorting algorithm is appropriate for this, for example heapsort (which is O(n log n)).

Sorting in order of angle does not require computing the angle. It is possible to use any function of the angle which 
is monotonic in the interval [0,\pi] . The cosine is easily computed using the dot product, 
or the slope of the line may be used. If numeric precision is at stake, the comparison function used by the 
sorting algorithm can use the sign of the cross product to determine relative angles.

The algorithm proceeds by considering each of the points in the sorted array in sequence. 
For each point, it is first determined whether traveling from the two points immediately preceding this 
point constitutes making a left turn or a right turn. If a right turn, the second-to-last point is not 
part of the convex hull, and lies 'inside' it. The same determination is then made for the set of the 
latest point and the two points that immediately precede the point found to have been inside the hull, 
and is repeated until a "left turn" set is encountered, at which point the algorithm moves on to the next 
point in the set of points in the sorted array minus any points that were found to be inside the hull; 
there is no need to consider these points again. (If at any stage the three points are collinear, 
one may opt either to discard or to report it, since in some applications it is required to 
find all points on the boundary of the convex hull.)

Again, determining whether three points constitute a "left turn" or a "right turn" 
does not require computing the actual angle between the two line segments, 
and can actually be achieved with simple arithmetic only (Cross product). 

This process will eventually return to the point at which it started, 
at which point the algorithm is completed and the stack now contains the points on the convex hull in counterclockwise order.
*/


function graham_scan(points) {
    // The enveloppe is the points themselves
    if (points.length <= 3) return points;
    
    // Find the pivot
    // pivot will be the point with lowest y coordinnate. if both y coordinnates are same then point with lowest x coordinate among them.
    var pivot = points[0];
    for (var i=0; i<points.length; i++) {
      if (points[i][1] < pivot[1] || (points[i][1] === pivot[1] && points[i][0] < pivot[0]))
        pivot = points[i];
    }

    // calculate anngle for each point P and pivot Pi makes w.r.t x axis
    // this angle is calculated via atan2(P.y - Pi.y, P.x - Pi.x)
    // Attribute an angle to the points
    for (var i=0; i<points.length; i++) {
      points[i]._graham_angle = Math.atan2(points[i][1] - pivot[1], points[i][0] - pivot[0]);
    }

    // now sort all points in increasing order with respect to angle calculated.
    points.sort(function(a, b){return a._graham_angle === b._graham_angle
                                          ? a[0] - b[0] // if poinnts are colinear use x coordinate
                                          : a._graham_angle - b._graham_angle});
  
    // Adding points to the result if they "turn left"
    var result = [points[0]], len=2;
    result.push(points[1]);
    for(var i=1; i<points.length; i++){
      var a = result[len-2],
          b = result[len-1],
          c = points[i];
      while (
          (len === 1 && b[0] === c[0] && b[1] === c[1]) ||
          (len > 1 && (b[0]-a[0]) * (c[1]-a[1]) <= (b[1]-a[1]) * (c[0]-a[0]))) {
          len--;
          b = a;
          a = result[len-2];
      }
      // if points make a left turn add to result.
      result[len++] = c;
    }
    result.length = len;
    return result;
  }