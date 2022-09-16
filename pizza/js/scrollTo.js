(function () {
   var body = document.querySelector("body");

   var closesAttr = function (item, attr) {
      var node = item;
      while (node) {
         var attrValue = node.getAttribute(attr);
         if (attrValue) {
            return attrValue;
         }
         node = node.parentElement;
      }
      return null;
   };
   var scroll = function (target) {
      var targetTop = target.getBoundingClientRect().top;
      var scrollTop = window.pageYOffset;
      var targetOffsetTop = targetTop + scrollTop;
      var headerOffset = document.querySelector(".header-page").clientHeight;
      window.scrollTo(0, targetOffsetTop - headerOffset);
   };
   body.addEventListener("click", function (e) {
      var target = e.target;
      var scrollTotemClass = closesAttr(target, "data-scroll-to");
      if (scrollTotemClass === null) {
         return;
      }
      e.preventDefault();
      var scrollTotem = document.querySelector("." + scrollTotemClass);
      if (scrollTotem) {
         scroll(scrollTotem);
      }
   });
})();
