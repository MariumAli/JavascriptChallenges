# Find the minimum distance between a point and a line segment.
# Ported from C/JavaScript implementation by Grumdrig
# http://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment
import math

class Point(object):
  def __init__(self, x, y):
    self.x = float(x)
    self.y = float(y)

def square(x):
  return x * x
  
def distance_squared(v, w):
  return square(v.x - w.x) + square(v.y - w.y)

def distance_point_segment_squared(p, v, w):
  # Segment length squared, |w-v|^2
  d2 = distance_squared(v, w) 
  if d2 == 0: 
    # v == w, return distance to v
    return distance_squared(p, v)
  # Consider the line extending the segment, parameterized as v + t (w - v).
  # We find projection of point p onto the line.
  # It falls where t = [(p-v) . (w-v)] / |w-v|^2
  t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / d2;
  if t < 0:
    # Beyond v end of the segment
    return distance_squared(p, v)
  elif t > 1.0:
    # Beyond w end of the segment
    return distance_squared(p, w)
  else:
    # Projection falls on the segment.
    proj = Point(v.x + t * (w.x - v.x), v.y + t * (w.y - v.y))
    # print proj.x, proj.y
    return distance_squared(p, proj)
  
def distance_point_segment(p, v, w):
  return math.sqrt(distance_point_segment_squared(p, v, w))
  
if __name__ == "__main__":
  p = Point(0,0)
  v = Point(-1,1)
  w = Point(1,1)
  assert distance_point_segment(p, v, w) == 1.0

  v = Point(-1,-1)
  w = Point(1,1)
  assert distance_point_segment(p, v, w) == 0.0

  v = Point(0,5)  
  w = Point(10,-5)
  assert distance_point_segment(p, v, w) == math.sqrt(6.25 + 6.25)
  
  v = Point(10,10)
  w = Point(20,20)
  assert distance_point_segment(p, v, w) == math.sqrt(100 + 100)