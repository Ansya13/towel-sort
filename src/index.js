
// You should implement your task here.

module.exports = function towelSort(matrix = 0) {
    if (matrix.length == 0 || arguments.length == 0) {
        return []
    } else {
        let a = matrix.concat();
        let c = [];
        a.forEach(function (item, i, a) {
            let b = 0;
            if (!(i % 2 == 0)) {
                item.reverse();
                b = new Map([a]).join(',');
                b = a.join(',');
                return c = b.split(',').map(Number);
            }
        });
return c
    }
}
