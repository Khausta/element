"use strict";var courier=document.querySelector("#courier"),cars=document.querySelector(".corsik_yaDeliveryMap__carsBlock"),manipulator=document.querySelector(".corsik_yaDeliveryMap__manipulators"),manipulatorRadioBtn=document.querySelector("#manipulators"),carRadioBtn=document.querySelector("#cars");courier.addEventListener("change",function(){manipulator.style.display="none",cars.style.display="none"}),manipulatorRadioBtn.addEventListener("change",function(){manipulator.style.display="flex",cars.style.display="none"}),carRadioBtn.addEventListener("change",function(){manipulator.style.display="none",cars.style.display="flex"});
//# sourceMappingURL=car.js.map
