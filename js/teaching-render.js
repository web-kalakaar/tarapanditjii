(function () {
  var list = document.getElementById("learnList");
  var data = window.TEACHING || [];
  if (!list) return;

  function esc(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function fee(t) {
    if (t.fee === "" || t.fee == null) return "Fee on enquiry";
    return "₹" + Number(t.fee).toLocaleString("en-IN") + "<small>" + esc(t.feeUnit || "") + "</small>";
  }

  if (!data.length) {
    document.getElementById("learn").hidden = true;
    return;
  }

  list.innerHTML = data.map(function (t) {
    return '<li class="learn-item">' +
      '<div><h3>' + esc(t.title) + '</h3><p class="hi">' + esc(t.titleHi) + '</p></div>' +
      '<div><p>' + esc(t.covers) + '</p><p class="learn-meta">' +
        esc(t.mode) + ' · ' + esc(t.duration) + '</p></div>' +
      '<div class="learn-fee">' + fee(t) + '</div></li>';
  }).join("");
})();
