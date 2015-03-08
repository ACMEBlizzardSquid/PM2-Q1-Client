/*
 * PM2-Q1 stub
 */

function PM2Q1() {}

function PM2Q1(uri_) {
this.uri = uri_;
        }

PM2Q1.prototype = {

        uri : 'http://localhost:8080/PM2-Q1/webresources',
        resources : new Array(),
        initialized : false,
        getUri : function() {
return this.uri;
        },
        getResources : function() {
if (!this.initialized)
        this.init();
        return this.resources;
        },
        init : function() {
         this.resources[0] = new Entities_discountcode(this.uri+'/entities.discountcode/');
         this.resources[1] = new Entities_customer(this.uri+'/entities.customer/');
         this.initialized = true;
        },
        flush : function(resources_) {
for (j = 0; j < resources_.length; j++) {
var r = resources_[j];
        r.flush();
        }
},
        getProxy : function() {
        return rjsSupport.getHttpProxy();
},
        setProxy : function(proxy_) {
rjsSupport.setHttpProxy(proxy_);
        },
        toString : function() {
var s = '';
        for (j = 0; j < this.resources.length; j++) {
var c = this.resources[j];
        if (j < this.resources.length - 1)
        s = s + '{"@uri":"' + c.getUri() + '"},';
        else
        s = s + '{"@uri":"' + c.getUri() + '"}';
}
var myObj =
        '{"resources":' +
        '{' +
        s +
        '}' +
        '}';
        return myObj;
}

}
