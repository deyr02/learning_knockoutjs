function ItemsListViewModel() {
   var self = this;

   self.items = ko.observableArray([
      //Starts empty...
      //"Example Item 1", "Example Item 2"
   ]);
   
   self.fetchItems = function(callback) {
      console.log("fetch items!")
      setTimeout(function() {
         var MOCK_RESPONSE = {
            items: [
               "I", "Found", "Some", "Items",
            ]
         }
         callback(MOCK_RESPONSE.items)
      }, 2000)   
   }
   
   self.onNewItems = function(newItems) {
      self.items(newItems)
   }
   
}

ko.components.register("loading-button", {
   template: [ 
      '<button data-bind="click: onClick, css: {loading: isLoading }" class="LoadingButton">',
         '<span data-bind="text: buttonText"></span>',
      '</button>'
   ].join(''),
   viewModel: function(params) {
      var self = this;
      self.buttonText = ko.observable(params.buttonText);
      self.isLoading = ko.observable(false);
      
      self.onClick = function() {
         self.isLoading(true)
         params.action(function(data) {
            self.isLoading(false)
            params.onDone(data)
         });
      }
   }
})

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new ItemsListViewModel(), knockoutApp);











































