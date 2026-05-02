/* sticky */
jQuery(document).ready(function () {
    var i = jQuery(window).width();

    function e() {
        jQuery("#sidebar-sticky").stick_in_parent({
            parent: "#wrapper",
            offset_top: 100
        })
    }
    i < 768 ? jQuery("#sidebar-sticky").trigger("sticky_kit:detach") : e(), jQuery(window).resize(function () {
        (i = jQuery(window).width()) < 768 ? jQuery("#sidebar-sticky").trigger("sticky_kit:detach") : e()
    })
});

/* Read More */

document.addEventListener("DOMContentLoaded", function () {

    var adSource = document.getElementById("readmore");
    var postBody = document.querySelector(".post");

    if (!adSource) {
        console.log("Ad source tidak ditemukan");
        return;
    }

    if (!postBody) {
        console.log("Article post tidak ditemukan");
        return;
    }

    // Ambil semua elemen konten
    var elements = postBody.querySelectorAll(
        "p, img, h2, h3, h4, blockquote, ul, ol"
    );

    if (elements.length === 0) {
        console.log("Tidak ada elemen konten");
        return;
    }

    // Hitung posisi tengah
    var middleIndex = Math.floor(elements.length / 2);

    // Clone iklan
    var adClone = adSource.cloneNode(true);

    adClone.style.display = "block";
    adClone.removeAttribute("id");

    // Insert ke tengah
    elements[middleIndex].insertAdjacentElement(
        "afterend",
        adClone
    );

});