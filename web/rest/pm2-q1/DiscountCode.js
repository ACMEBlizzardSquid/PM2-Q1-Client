/*
 * Support js for DiscountCode
 */

function DiscountCode(ref_) {
    this.ref = ref_;
}
function DiscountCode(ref_, uri_) {
    this.ref = ref_;
    this.uri = uri_;
}


DiscountCode.prototype = {
    getUri: function() {
        return this.uri;
    },
    toString: function() {
        return this.asString(this.ref);
    },
    asString: function(param) {
        if (param == undefined) {
            return '';
        }
        var result = '';
        if (!(param instanceof Array)) {
            if ('object' == typeof(param)) {
                result = '{';
                var count = 0;
                for (var prop in param) {
                    count++;
                }
                var i = 0;
                for (var prop in param) {
                    result = result + '"' + prop + '":' + this.asString(param[prop]);
                    if (i < count - 1) {
                        result = result + ',';
                    }
                    i++;
                }
                result = result + '}';
            }
            else {
                result = '"' + param + '"';
            }
            return result;
        }
        else {
            result = '[';
            var j = 0;
            for (j = 0; j < param.length; j++) {
                result = result + this.asString(param[j]);
                if (j != param.length - 1) {
                    result = result + ',';
                }
            }
            result = result + ']';
            return result;
        }
    }
    
}
