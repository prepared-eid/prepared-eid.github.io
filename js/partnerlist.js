/*************************************************************************
 * For loading the partnerlist on individual partner pages.
 * The partnerlist will not work if you open the file directly rather than on a web server.
 *************************************************************************/

(function () {
  "use strict";

  $(function () {
    $(".partnerlist-container").load("partnerlist.html");
  });
})();
