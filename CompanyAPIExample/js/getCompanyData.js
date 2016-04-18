function doOperation() {
    $('#company-submit')
        .click(
            function (e) {
                $('#loader').show();
                $(".companyTable tbody").empty();
                e.preventDefault();
                var companyId = '';
                var company = '';
                var cdata = '';
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
                            var companies = ob.companies;
                            console.log(companies);
                            var html = '';
                            var table = $(".companyTable tbody");
                            $.each(companies, function (idx, obj) {
                                companyId = obj.companyId;
                                table.append("<tr><td>+</td><td>" + obj.companyId + "</td><td>" + obj.name + "</td><td>" + obj.city + "</td><td>" + obj.state + "</td><td>" + obj.country + "</td></tr>");
                                table.append("<tr><td colspan=\"12\"><p id='demo-" + obj.companyId + "'></p></td></tr>");
                                getCompanyInfo();

                            });
                        },
                        error: function () {
                            $('#loader').hide();
                            console.log('failure');
                        }
                    });

                function getCompanyInfo() {
                    var ref = this;
                    //console.log(companyId);
                    $
                        .ajax({
                            url: 'https://api.insideview.com/api/v1/company/' + companyId,
                            headers: {
                                'accessToken': 'NfGB333jerP209f1E9bAOdzp5WVswVmiZyTKBuYaMejijjQHqveTCsHt6/8GYsg5BIglpDCQXWUYa7H9Z43CU0A41QnHSyNX9P3kSiIH6bTaZt4L7hKlBU62/XqO8y+FbGsRzCXvYBqMe+sOVa0Urnc2lx1yWUwwLhl51AWM6YM=.eyJmZWF0dXJlcyI6IntcIk9yaWdpblwiOlwiKlwiLFwiaXBBZGRyZXNzXCI6XCIxNzIuMTkuMi4zMVwifSIsImNsaWVudElkIjoiY3Qwc2Fzam9iNzRwbGlucnFpcXUiLCJncmFudFR5cGUiOiJjcmVkIiwidHRsIjoiMzE1MzYwMDAiLCJpYXQiOiIxNDQzNjA3MDQ0IiwianRpIjoiMzRiYzU5YmYtNjcyOS00ODlkLWIyMmEtN2U2NTQxNWU5ODNiIn0=',
                                'Accept': 'application/json'
                            },
                            type: 'GET',
                            crossDomain: true,
                            success: function (data) {
                                //console.log(data);
                                cdata = "<ui><li> Company Status : " + data.companyStatus + "</li>" +
                                    "<li> Company Type : " + data.companyType + "</li>" +
                                    "<li> Company Industry Type : " + data.industry + "</li>" +
                                    "<li> Company Naics Description : " + data.naicsDescription + "</li>" +
                                    "<li> Company SIC Description : " + data.sicDescription + "</li>" +
                                    "<li> Company Revenue : " + data.revenue + "</li>" +
                                    "<li> Company Revenue Currency : " + data.revenueCurrency + "</li>" +
                                    "<li> Company Sub Industry Type : " + data.subIndustry + "</li>" +
                                    "<li> Company Number of Employees : " + data.employees + "</li>" +
                                    "<li> Company Fax :" + data.fax + "</li>" + "</ui>";
                                //console.log(cdata);
                                var table = $(".companyTable tbody");
                                table.find('#demo-' + data.companyId).html(cdata);


                            },
                            error: function () {
                                return "";
                            }
                        });
                    return cdata;
                }
            })
}