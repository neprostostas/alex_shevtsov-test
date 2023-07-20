$(document).ready(function() {
    // Function to show the modal and overlay with sliding animation from the left
    function showModal() {
        $(".modal").css("display", "unset").animate({ left: 0 }, 300);
        $(".overlay").css("display", "unset");
    }

    // Function to hide the modal and overlay with sliding animation to the left
    function hideModal() {
        $(".modal").animate({ left: "-100%" }, 300, function() {
            $(this).css("display", "none");
        });
        $(".overlay").css("display", "none");
    }

    // When clicking on .buttons-wrap button, show the modal with animation
    $(".buttons-wrap button").on("click", function() {
        showModal();
    });

    // When clicking on .close, hide the modal with animation and reset form elements
    $(".modal .close").on("click", function() {
        hideModal();
        updateFormElements(false);
    });

    // Function to update form elements when the modal is opened or closed
    function updateFormElements(isModalOpen) {
        if (isModalOpen) {
            // Hide elements with class .primary and form.modal-form
            $("h2.primary, form.modal-form").css("display", "none");
            // Show elements with class .secondary
            $(".secondary").css("display", "unset");
        } else {
            // Show elements with class .primary and form.modal-form
            $("h2.primary, form.modal-form").css("display", "unset");
            // Hide elements with class .secondary
            $(".secondary").css("display", "none");
        }
    }

    // When clicking on <button class="second final">, update form elements
    $(".second.final").on("click", function() {
        updateFormElements(true);
    });
});

AOS.init();
