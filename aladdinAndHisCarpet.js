 /*
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY magic
 *  2. INTEGER_ARRAY dist
 */

function optimalPoint(magic, dist) {
    if (magic.length < 1 || magic.length > 100000) {
        return -1;
    }
    if (magic.length != dist.length) {
        return -1;
    }
    for (var index = 0; index < magic.length; index++) {
        if (magic[index] >= dist[index] ) {
            if (calculateIfWillTravelAround(index, magic, dist)) {
                return index;
            }
        }
    }
    return -1;
}

function calculateIfWillTravelAround(index, magic, dist) {
    var magic_level = magic[index];
    var i=0;
    while (true) {
        if (i == magic.length) {
            break;
        }
        console.log(magic_level >= dist[index]);
        if (magic_level >= dist[index] && isInRange(magic[index]) && isInRange(dist[index])) {
            magic_level = magic_level - dist[index] + (index == magic.length-1 && i < magic.length ? magic[0] : (magic[index+1] === -1 ? 0 : magic[index+1]));
        } else {
            return false;
        }
        if (index == (magic.length-1) && i < magic.length) {
            index = 0;
        } else {
            index++;
        }
        i++;
    }
    return Boolean(magic_level >= 0);
}

function isInRange(x) {
    if (x >= 0 && x <= 10000) {
        return true;
    }
    return false;
}
