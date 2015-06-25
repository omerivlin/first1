var app = {
	
		
	showAlert: function (message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
	},
	
	initialize: function() {
    var self = this;
    this.store = new MemoryStore(function() {
        self.showAlert('Store Initialized', 'Info');
    });
    $('.search-key').on('keyup', $.proxy(this.findByName, this));
	}
	
}; 

app.initialize();