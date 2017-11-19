(function (window) {
    "use strict";
    var App = window.App || {};
    //var $ = window.jQuery;

    function FormHandler(selector) {
      if (!selector) {
        throw new Error("No selector provided");
      }

      //this.$formElement = $(selector);
      this.$formElement = document.querySelector(selector);
      if (this.$formElement.length === 0) {
        throw new Error("Can not find selector" + selector);
      }
    }

    FormHandler.prototype.addSubmitHandler = function functionName(fn) {
      console.log("Setting submit handler for form");
      this.$formElement.addEventListener("submit", function(event) {
        event.preventDefault();
        var data = {};

        var coffeeOrderName = document.getElementById("coffeeOrder").name;
        var coffeeOrderValue = document.getElementById("coffeeOrder").value;
        data[coffeeOrderName] = coffeeOrderValue;

        var emailInputName = document.getElementById("emailInput").name;
        var emailInputValue = document.getElementById("emailInput").value;
        data[emailInputName] = emailInputValue;

        var sizeValue;
        if (document.getElementById('size_short').checked) {
          sizeValue = document.getElementById('size_short').value;
        }
        if (document.getElementById('size_tall').checked) {
          sizeValue = document.getElementById('size_tall').value;
        }
        if (document.getElementById('size_grande').checked) {
          sizeValue = document.getElementById('size_grande').value;
        }
        data["size"] = sizeValue;

        var flavorShotName = document.getElementById("flavorShot").name;
        var flavorShotValue = document.getElementById("flavorShot").value;
        data[flavorShotName] = flavorShotValue;

        var strengthLevelName = document.getElementById("strengthLevel").name;
        var strengthLevelValue = document.getElementById("strengthLevel").value;
        data[strengthLevelName] = strengthLevelValue;

        console.log(data);
        fn(data);
        var form = document.querySelector('[data-coffee-order="form"]');
        form.reset();
        form.elements[0].focus();
      });
    };

    App.FormHandler = FormHandler;
    window.App = App;
})(window);
