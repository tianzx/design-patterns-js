var agg = (function () {
    var index = 0,
    data = [1, 2, 3, 4, 5],
    length = data.length;

    return {
        next: function () {
            var element;
            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index = index + 2;
            console.log(element);
            return element;
        },

        hasNext: function () {

            return index < length;
        },

        rewind: function () {

            index = 0;
        },

        current: function () {

            return data[index];
        }

    };

} ());
agg.next();