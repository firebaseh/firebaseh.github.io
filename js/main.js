jQuery(document).ready(function () {

    function initSticky() {

        var width = jQuery(window).width();

        if (width < 768) {
            jQuery("#sidebar-sticky").trigger("sticky_kit:detach");
        } else {
            jQuery("#sidebar-sticky").stick_in_parent({
                parent: "body",   // <- FIX paling penting
                offset_top: 100
            });
        }
    }

    initSticky();

    jQuery(window).on("resize", function () {
        initSticky();
    });

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