/*
 * Support js for Entities_customer
 */

function Entities_customer(uri_) {
    this.uri = uri_;
}

Entities_customer.prototype = {
    getUri: function() {
        return this.uri;
    },
    /* Method remove with HTTP request metod DELETE and path : {id}  */
    remove: function(uri_) {
        var url = "";
        if (uri_ != null && uri_ != undefined) {
            url = uri_;
        }
        var remote = new Entities_customerRemote(this.uri);
        var c = remote.deleteJson_(url);
        if (c == -1) {
            return -1;
        }
    },
    getEntities: function(search) {
        return this.findAll(search);
    },
    /* Method findAll with HTTP request metod GET, its return type is array of Customer  */
    findAll: function(uri_) {
        var url = "";
        if (uri_ != null && uri_ != undefined) {
            url = uri_;
        }
        var remote = new Entities_customerRemote(this.uri);
        var c = remote.getJson_(url);
        if (c == -1) {
            return -1;
        }
        var myObj = eval('(' + c + ')');
        var result = new Array();
        for (var prop in myObj) {
            var ref = myObj[prop];
            result.push(new Customer(ref, this.uri + ref.customerId));
        }
        return result;
    },
    /* Method edit with HTTP request metod PUT and path : {id}, its parameter type is Customer  */
    edit: function(uri_, param) {
        var url = "";
        if (uri_ != null && uri_ != undefined) {
            url = uri_;
        }
        var remote = new Entities_customerRemote(this.uri);
        var c = remote.putJson_(url, this.asString(param));
        if (c == -1) {
            return -1;
        }
    },
    /* Method create with HTTP request metod POST, its parameter type is Customer  */
    create: function(uri_, param) {
        var url = "";
        if (uri_ != null && uri_ != undefined) {
            url = uri_;
        }
        var remote = new Entities_customerRemote(this.uri);
        var c = remote.postJson_(url, this.asString(param));
        if (c == -1) {
            return -1;
        }
    },
    /* Method findRange with HTTP request metod GET and path : {from}/{to}, its return type is array of Customer  */
    findRange: function(uri_) {
        var url = "";
        if (uri_ != null && uri_ != undefined) {
            url = uri_;
        }
        var remote = new Entities_customerRemote(this.uri);
        var c = remote.getJson_(url);
        if (c == -1) {
            return -1;
        }
        var myObj = eval('(' + c + ')');
        var result = new Array();
        for (var prop in myObj) {
            var ref = myObj[prop];
            var j = 0;
            for (j = 0; j < ref.length; j++) {
                if (ref[j]['@uri'] != null && ref[j]['@uri'] != undefined) {
                    result[j] = new Customer(ref[j], ref[j]['@uri']);
                }
                else {
                    result[j] = new Customer(ref[j]);
                }
            }
        }
        return result;
    },
    /* Method find with HTTP request metod GET and path : {id}, its return type is Customer  */
    find: function(uri_) {
        var url = "";
        if (uri_ != null && uri_ != undefined) {
            url = uri_;
        }
        var remote = new Entities_customerRemote(this.uri);
        var c = remote.getJson_(url);
        if (c == -1) {
            return -1;
        }
        var myObj = eval('(' + c + ')');
        if (myObj['@uri'] != null && myObj['@uri'] != undefined) {
            return new Customer(myObj, myObj['@uri']);
        }
        else {
            return new Customer(myObj);
        }
    },
    toString: function() {
        var myObj =
                '{' +
                '"@uri":"' + this.uri + '"' +
                '}';
        return myObj;
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

function Entities_customerRemote(uri_) {
    this.uri = uri_;
}

Entities_customerRemote.prototype = {
    /* Default getJson_() method . Do not remove. */
    getJson_: function(uri_) {
        return rjsSupport.get(this.uri + uri_, 'application/json');
    },
    /* Default putJson_() method . Do not remove. */
    putJson_: function(uri_, content) {
        return rjsSupport.put(this.uri + uri_, 'application/json', content);
    },
    /* Default postJson_() method . Do not remove. */
    postJson_: function(uri_, content) {
        return rjsSupport.post(this.uri + uri_, 'application/json', content);
    },
    /* Default deleteJson_() method . Do not remove. */
    deleteJson_: function(uri_, content) {
        return rjsSupport.delete_(this.uri + uri_, 'application/json', content);
    },
    postXml: function(uri_, content) {
        return rjsSupport.post(this.uri + uri_, 'application/xml', content);
    },
    postJson: function(uri_, content) {
        return rjsSupport.post(this.uri + uri_, 'application/json', content);
    },
    putXml: function(uri_, content) {
        return rjsSupport.put(this.uri + uri_, 'application/xml', content);
    },
    putJson: function(uri_, content) {
        return rjsSupport.put(this.uri + uri_, 'application/json', content);
    },
    delete: function(uri_, content) {
        return rjsSupport.delete(this.uri + uri_, 'application/xml', content);
    },
    getXml: function(uri_) {
        return rjsSupport.get(this.uri + uri_, 'application/xml');
    },
    getJson: function(uri_) {
        return rjsSupport.get(this.uri + uri_, 'application/json');
    },
    get: function(uri_) {
        return rjsSupport.get(this.uri + uri_, 'text/plain');
    }
}
