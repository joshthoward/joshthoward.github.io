document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  var elems = document.querySelectorAll('.dropdown-trigger');
  var options = {hover: false, coverTrigger: false, constrainWidth: false}
  var instances = M.Dropdown.init(elems, options);
});
