<script>
(function($) {
    $(document).ready(function() {
        let iti; // Declare iti

        // Function to initialize input fields outside of popup
        function initializeInputFields() {
            const inputs = document.querySelectorAll("#form-field-phoneInput");
            // Loop through each input field and initialize intlTelInput
            inputs.forEach((input) => {
                iti = window.intlTelInput(input, {
                    initialCountry: "auto",
                    geoIpLookup: function(callback) {
                        $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                            const countryCode = (resp && resp.country) ? resp.country : "tr";
                            callback(countryCode);
                        });
                    },
                    allowDropdown: true,
                    separateDialCode: true,
                    showSelectedDialCode: true,
                    countrySearch: true,
                });
            });
        }

        // Function to initialize input fields within the popup
        function initializeInputPopUpFields() {
            const inputs = document.querySelectorAll("#form-field-popUpTel");
            // Loop through each input field and initialize intlTelInput
            inputs.forEach((input) => {
                iti = window.intlTelInput(input, {
                    initialCountry: "auto",
                    geoIpLookup: function(callback) {
                        $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                            const countryCode = (resp && resp.country) ? resp.country : "tr";
                            callback(countryCode);
                        });
                    },
                    allowDropdown: true,
                    separateDialCode: true,
                    showSelectedDialCode: true,
                    countrySearch: true,
                });
                // Set default country code for the popup form
                setDefaultCountryCode('#popUpEmailForm', '#form-field-popUpCountryCode');
            });
        }

        // Initialize input fields on DOMContentLoaded event
        initializeInputFields();

        // Re-initialize input fields within the popup when it's shown
        $(document).on('elementor/popup/show', function(event) {
            // Execute initializeInputPopUpFields when a popup is shown
            initializeInputPopUpFields();
        });

        // Define a common function to handle country change
        function handleCountryChange(selector, targetInput) {
            $(document).on("countrychange", selector, function(e, countryData) {
                const countryCode = $(this).find('.iti__selected-flag .iti__a11y-text').text();
                $(targetInput).val(countryCode);
            });
        }

        // Set default country code on document ready
        function setDefaultCountryCode(selector, targetInput) {
            const defaultCountryCode = $(selector).find('.iti__selected-flag .iti__a11y-text').text();
            $(targetInput).val(defaultCountryCode);
        }

        // Call the common function for each form
        handleCountryChange('#popUpEmailForm', '#form-field-popUpCountryCode');
        handleCountryChange('#emailFormHeader', '#form-field-headerCountryCode');
        handleCountryChange('#emailFormFooter', '#form-field-footerCountryCode');

        // Set default country code for each form
        setDefaultCountryCode('#popUpEmailForm', '#form-field-popUpCountryCode');
        setDefaultCountryCode('#emailFormHeader', '#form-field-headerCountryCode');
        setDefaultCountryCode('#emailFormFooter', '#form-field-footerCountryCode');
    });
})(jQuery);
</script>