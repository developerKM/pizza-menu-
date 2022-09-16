(function () {
   if (typeof ymaps === "undefined") {
      return;
   }

   ymaps.ready(function () {
      var myMap = new ymaps.Map(
            "ymap",
            {
               center: [40.42645500904591, 71.50993532312454],
               zoom: 16,
            },
            {
               searchControlProvider: "yandex#search",
            }
         ),
         myPlacemark = new ymaps.Placemark(
            myMap.getCenter(),
            {
               balloonContent: "г. Москва, Преображенская площадь, 8",
            },
            {
               iconLayout: "default#image",
               iconImageHref: "../img/common/marker.svg",
               iconImageSize: [40, 63.2],
               iconImageOffset: [-50, -38],
            }
         );

      myMap.geoObjects.add(myPlacemark);

      myMap.behaviors.disable("scrollZoom");
   });
})();
