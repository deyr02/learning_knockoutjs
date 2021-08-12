




function CounterViewModel() {
    var self = this;
    self.userName = ko.observable("Wayne");
    self.count = ko.observable(0);

    self.increase = function () {
        var currentValue = self.count();
        self.count(self.count() + 1);
    }

    self.decrease = function () {
        var currentValue = self.count();
        if (currentValue > 0) {
            self.count(currentValue - 1);
        }
    }

    self.dogStatus = ko.computed(function () {
        if (self.count() === 1) {
            return "UNDERWHELMED."
        }
        if (self.count() === 2) {
            return "LISTENING..."
        }
        if (self.count() > 2) {
            return "THRILLED!"
        }
        return "UPSET."
    });


}

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new CounterViewModel(), knockoutApp);
