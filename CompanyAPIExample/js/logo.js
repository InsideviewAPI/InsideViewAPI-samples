function doOperation() {
    $('#company-submit')
        .click(
            function (e) {
                $('#loader').show();
                e.preventDefault();
                var company = '';
                var cdata = '';
                var companyId = $('#companyId').val();
                var xhr = new XMLHttpRequest();
                var token = $('#token').val();
                // Use JSFiddle logo as a sample image to avoid complicating
                // this example with cross-domain issues.
                xhr.open("GET", "https://api.insideview.com/api/v1/company/" + companyId + "/logos/200", true);
                xhr.setRequestHeader('accessToken', token);
                // Ask for the result as an ArrayBuffer.
                xhr.responseType = "arraybuffer";

                xhr.onload = function (e) {
                    // Obtain a blob: URL for the image data.
                    var arrayBufferView = new Uint8Array(this.response);
                    var blob = new Blob([arrayBufferView], {
                        type: "image/png"
                    });
                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(blob);
                    var img = document.querySelector("#photo");
                    img.src = imageUrl;
                };

                xhr.send();

            })
}