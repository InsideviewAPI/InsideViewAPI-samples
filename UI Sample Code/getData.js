function doOperation() {
	$('#enrich-submit')
			.click(
					function(e) {
						$('#loader').show();
						e.preventDefault();
						var email = $('#email').val();
                        var token = $('#token').val();
						$
								.ajax({
									url : 'https://api.insideview.com/api/v1/enrich',
									headers : {
										'accessToken' : token,
										'Accept' : 'application/json'
									},
									type : 'POST',
									crossDomain : true,
									data : {
										email : email
									},
									success : function(ob) {
										$('#loader').hide();
										$('#headerEnrich').show();
										$('#enrichDetails').show();
										console.log('success');
										full = ob;
										company = ob.company;
										contact = ob.contact;
										console.log(ob.company.companyId);

										if (contact == null) {
											$('#contact-details-text').text("");
										}
										$('#company-details-text').text(JSON.stringify(company,null, 4));
										$('#contact-details-text').text(JSON.stringify(contact,null, 4));

										if (company != undefined) {
											$('#companyId').text(company.companyId);
											$('#city').text(company.city);
											$('#companyStatus').text(company.companyStatus);
											$('#companyType').text(company.companyType);
											$('#country').text(company.country);
											$('#employees').text(company.employees);
											$('#fax').text(company.fax);
											$('#financialYearEnd').text(company.financialYearEnd);
											$('#industry').text(company.industry);
											$('#naics').text(company.naics);
											$('#naicsDescription').text(company.naicsDescription);
											$('#name').text(company.name);
											$('#phone').text(company.phone);
											$('#revenue').text(company.revenue);
											$('#sic').text(company.sic);
											$('#sicDescription').text(company.sicDescription);
											$('#state').text(company.state);
											$('#street').text(company.street);
											$('#subIndustry').text(company.subIndustry);
											$('#zip').text(company.zip);
											$('#revenueCurrency').text(company.revenueCurrency);
											$('#industryCode').text(company.industryCode);
											$('#subIndustryCode').text(company.subIndustryCode);
											$('#britishSics').text(JSON.stringify(company.britishSics));
											$('#sources').text(company.sources);
											$('#websites').text(company.websites);
											$('#fortuneRanking').text(company.fortuneRanking);
											$('#mostRecentQuarter').text(company.mostRecentQuarter);
											$('#ultimateParentCompanyId').text(company.ultimateParentCompanyId);
											$('#tickers').text(company.tickers);
											$('#parentCompanyId').text(company.parentCompanyId);
											$('#equifaxId').text(company.equifaxId);
											$('#description').text(company.description);
										}
										if (contact != undefined) {
											$('#contactId').text(contact.contactId);
											$('#email').text(contact.email);
											$('#facebookProfile').text(contact.facebookProfile);
											$('#firstName').text(contact.firstName);
											$('#middleName').text(contact.middleName);
											$('#lastName').text(contact.lastName);
											$('#linkedInProfile').text(contact.linkedInProfile);
											$('#phone').text(contact.phone);
											$('#titles').text(contact.titles);
											$('#twitterProfile').text(contact.twitterProfile);
											$('#sources').text(contact.sources);
											$('#description').text(contact.description);
											$('#educations').text(contact.educations);
											$('#imageUrl').text(contact.imageUrl);
										}

										

									},
									error : function() {
										console.log('failure');
									}
								});

					})
}