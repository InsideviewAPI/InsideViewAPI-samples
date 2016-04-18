function doOperation() {
    $('#company-submit')
        .click(
            function (e) {
                $('#loader').show();
                e.preventDefault();
                var companyName = $('#companyName').val();
                var token = $('#token').val();
                $
                    .ajax({
                        url: 'https://api.insideview.com/api/v1/companies',
                        headers: {
                            'accessToken': token,
                            'Accept': 'application/json'
                        },
                        type: 'GET',
                        crossDomain: true,
                        data: {
                            name: companyName
                        },
                        success: function (ob) {
                            console.log('success');
                            console.log(ob);
                            $('#example').DataTable({
                                "ajax": ob,
                                "columns": [
                                    {
                                        "data": "id"
                                    },
                                    {
                                        "data": "name"
                                    },
                                    {
                                        "data": "city"
                                    },
                                    {
                                        "data": "state"
                                    },
                                    {
                                        "data": "country"
                                    }
        ]
                            });
                        },
                        error: function () {
                            $('#loader').hide();
                            console.log('failure');
                        }
                    });

            })
}