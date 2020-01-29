/* finds if a point is inside polygon using ray casting algorithm */
/* AUTHOR: MARIUM ALI */

var rayIntersectsSegment = function(point, pointA, pointB) {

    //line segment AB = point B - point A 
    // Takes input of a point P and edge defined by line AB (i.e. point A annd point B)

    // 1. Point B should lie above point A; if not interchange both of them
    const EPSILON = 0.000001;
    if (pointA.y > pointB.y) {
        pointA, pointB = pointB, pointA;
    }
    // 2. If Point lies on either A or B's y coordinate (i.e. there is chance that it might get detected outside though it lies on the line seg) 
    // so add a very small value of epsilon to it
    if (point.y === pointA.y || point.y === pointB.y) {
        point.y = point.y + EPSILON; 
    }

    // 3. If point P is out of bounds of line segment . then the ray emitted from that point cannnot intersect the line segment of polygon
    if (point.x > Math.max(pointA.x, pointB.x) || point.y < pointA.y || point.y > pointB.y) {
        return false;
    }

    if (point.x < Math.min(pointA.x, pointB.x)) {
        return true;
    }

    let intersect = false;
    let slopeAB = Infinity;
    let slopeAP = Infinity;
    if (Math.abs(pointB.x - pointA.x) > -Infinity) {
        slopeAB = (pointB.y - pointA.y)/(pointB.x - pointA.x);
    } 
    if (Math.abs(point.x - pointA.x) > -Infinity) {
        slopeAP = (point.y - pointA.y)/(point.x - pointA.x);
    } 
    intersect = slopeAP > slopeAB;
    return intersect;
};

function isPointInPolygon(point, polygon) {
    let s = 0;
    for (edge of polygon.edges) {
        s += rayIntersectsSegment(point, edge.a, edge.b);
    }
    if (s % 2 === 1) {
        return true;
    }
    return false;
}

let polygon1 = {
    edges: [
        {
            a: {
                x: 0, y: 0
            },
            b: {
                x: 10, y: 0
            }
        },
        {
            a: {
                x: 10, y: 0
            },
            b: {
                x: 10, y: 10
            }
        },
        {
            a: {
                x: 10, y: 10
            },
            b: {
                x: 0, y: 10
            }
        },
        {
            a: {
                x: 0, y: 10
            },
            b: {
                x: 0, y: 0
            }
        }
    ]
};
// console.log(polygon1);
// for (edge of polygon1.edges) {
//     console.log(edge);
//     console.log(edge.a);
//     console.log(edge.a.x);
//     console.log(edge.a.y);
//     console.log(edge.b);
//     console.log(edge.b.x);
//     console.log(edge.b.y);
// }
let polygon2 = {
    edges: [
        {
            a: {
                x: 0, y: 0
            },
            b: {
                x: 10, y: 0
            }
        },
        {
            a: {
                x: 10, y: 0
            },
            b: {
                x: 10, y: 10
            }
        },
        {
            a: {
                x: 10, y: 10
            },
            b: {
                x: 0, y: 10
            }
        },
        {
            a: {
                x: 0, y: 10
            },
            b: {
                x: 0, y: 0
            }
        },
        {
            a: {
                x: 2.5, y: 2.5
            },
            b: {
                x: 7.5, y: 2.5
            }
        },
        {
            a: {
                x: 7.5, y: 2.5
            },
            b: {
                x: 7.5, y: 7.5
            }
        },
        {
            a: {
                x: 7.5, y: 7.5
            },
            b: {
                x: 2.5, y: 7.5
            }
        },
        {
            a: {
                x: 2.5, y: 7.5
            },
            b: {
                x: 2.5, y: 2.5
            }
        }
    ]
};

let polygon3 = {
    edges: [
        {
            a: {
                x: 0, y: 0
            },
            b: {
                x: 2.5, y: 2.5
            }
        },
        {
            a: {
                x: 2.5, y: 2.5
            },
            b: {
                x: 0, y: 10
            }
        },
        {
            a: {
                x: 0, y: 10
            },
            b: {
                x: 2.5, y: 7.5
            }
        },
        {
            a: {
                x: 2.5, y: 7.5
            },
            b: {
                x: 7.5, y: 7.5
            }
        },
        {
            a: {
                x: 7.5, y: 7.5
            },
            b: {
                x: 10, y: 10
            }
        },
        {
            a: {
                x: 10, y: 10
            },
            b: {
                x: 10, y: 0
            }
        },
        {
            a: {
                x: 10, y: 0
            },
            b: {
                x: 2.5, y: 2.5
            }
        }
    ]
};

const testpoints = [ {x: 5, y:5}, {x: 5, y:8}];
console.log(isPointInPolygon(testpoints[0], polygon1));
console.log(isPointInPolygon(testpoints[1], polygon2));
