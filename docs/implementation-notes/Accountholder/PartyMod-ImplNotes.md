# Implementation Notes for Update Party
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`||  |
|`PartyKeys`||  |
|`PartyKeys.PartyId`||Name identification.|
|`PersonPartyInfo`||  |
|`PersonPartyInfo.PartyPref`||  |
|`PersonPartyInfo.PartyPref.Language`|UseInstitution<br>English<br>Spanish|     |
|`PersonPartyInfo.EstablishedDt`||***Required**<br>Date on which the name or address record was created.|
|`PersonPartyInfo.OriginatingBranch`||***Required**|
|`PersonPartyInfo.ResponsibleBranch`||***Required**|
|`PersonPartyInfo.CreditRisk`||  |
|`PersonPartyInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>CreditScore<br>|  |
|`PersonPartyInfo.CreditRisk.InternalScore`||  |
|`PersonPartyInfo.RelationshipMgr`||  |
|`PersonPartyInfo.RelationshipMgr.RelationshipMgrIdent`||  |
|`PersonPartyInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Value of Officer refers to Responsibility Code, and Referral Officer refers to Referral Responsibility Code.|
|`PersonPartyInfo.OEDCode`||  |
|`PersonPartyInfo.ClientDefinedData`||Metadata should be sent along with the user-entered data. <br>DataClassType supported for:<br>- Party or a Loan Account is 'Name' (50)<br><br>- DDA/SDA/CDA account types is 'Portfolio' (0). (Not used for this operation)|
|`PersonPartyInfo.ClientDefinedData.DataIdent`||Values configured at the time of application integration in the core system for Financial Institution (FI) should be passed in request by application.|
|`PersonPartyInfo.ClientDefinedData.DataType`|Alpha<br>Boolean<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol|  |
|`PersonPartyInfo.ClientDefinedData.Value`||  |
|`PersonPartyInfo.ClientDefinedData.DataLength`||  |
|`PersonPartyInfo.ClientDefinedData.ExpDt`||  |
|`PersonPartyInfo.ClientDefinedData.Desc`||  |
|`PersonPartyInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`PersonPartyInfo.ClientDefinedData.SearchFlag`|true<br>false|  |
|`PersonPartyInfo.ClientDefinedData.GroupNum`||  |
|`PersonPartyInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty<br>|Type of the cutomer and indicates the relationship of customer with financial institution<br>|
|`PersonPartyInfo.TaxDataInfo`||  |
|`PersonPartyInfo.TaxDataInfo.TaxIdentType`|None<br>SSN<br>Foreign<br>ITIN<br>ATIN|Code that indicates whether the Tax Identification Number is a Social Security Number (SSN), Employer Identification Number (EIN), foreign tax ID number, Adoption Taxpayer Identification Number (ATIN), or Individual Taxpayer Identification Number (ITIN).<br><br>Multiple customers with same SSN/EIN can be configured therefore, ESF does not validate the SSN/EIN sent in request for duplicity.|
|`PersonPartyInfo.TaxDataInfo.TaxIdent`||  |
|`PersonPartyInfo.TaxDataInfo.TaxIdentVerified`|true<br>false|  |
|`PersonPartyInfo.TaxDataInfo.TaxIdentVerifiedDt`||  |
|`PersonPartyInfo.TaxDataInfo.TaxIdentVerifiedAttempts`||  |
|`PersonPartyInfo.TaxDataInfo.OtherTaxIdent`||Foreign Tax Identification Number as per IRS Form 1042-S.|
|`PersonPartyInfo.TaxDataInfo.BNotice1Dt`||  |
|`PersonPartyInfo.TaxDataInfo.BNotice2Dt`||  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData`||  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.ForeignTaxForms`|None<br>1042S<br>W8<br>1042SandW8|Foreign tax code|
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.IncomeCode`||  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.TaxRate`||  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.ExemptionCode`||  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientStateProv`||Maximum field length is two characters.|
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode`||  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode.CountryCodeSource`|IRS|  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode.CountryCodeValue`||Country Tax Code|
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry`||  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry.CountryCodeSource`|IRS|  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry.CountryCodeValue`||Foreign country residence code of two characters on IRS Form 1042-S as per the current definitions provided by IRS.|
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientPostalCode`||  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.ForeignWithholdingType`|None<br>Chapter3<br>Chapter4|  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.Chapter3Status`||  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.Chapter4FATCAStatus`||  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientGIIN`||  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.W8FormType`|None<br>W8-BEN<br>W8-BEN-E<br>W8-ECI<br>W8-EXP<br>W8-IMY|  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.ForeignCertDt`||  |
|`PersonPartyInfo.TaxDataInfo.ForeignTaxData.ForeignExpDt`||  |
|`PersonPartyInfo.DisclosureData`||  |
|`PersonPartyInfo.DisclosureData.DisclosureDt`||  |
|`PersonPartyInfo.DisclosureData.DisclosureAckType`||Values are user-defined.|
|`PersonPartyInfo.NAICS`||  |
|`PersonPartyInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`PersonPartyInfo.Retention`|true<br>false|Name retention code to indicate if the name record is retained/deleted if no accounts or tax addenda number are attached to the name.|
|`PersonPartyInfo.SecretData`||  |
|`PersonPartyInfo.SecretData.SecretIdent`|MaidenName<br>PlaceOfBirth<br>County<br>FavoriteColor<br>FavoriteNumber<br>FavoriteDate<br>FreeFormMessage<br>FreeFormQuestion<br>FreeFormAnswer|More than one security question can be recorded and, if FreeFormQuestion is used, then the answer is provided in a seprate SecretData aggregate.|
|`PersonPartyInfo.SecretData.SecretValue`||  |
|`PersonPartyInfo.ExemptOFAC`|true<br>false|Suspect exemption.|
|`PersonPartyInfo.PartyOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|  |
|`PersonPartyInfo.TelebancPswd`||  |
|`PersonPartyInfo.RiskRanking`|None<br>Low<br>Medium<br>High|  |
|`PersonPartyInfo.TaxExempt`|NotTaxExempt<br>TaxExempt|Value that specify whether the party is exempted from tax or not. <br>Additional values other than defined static values can be client-defined.|
|`PersonPartyInfo.PersonData`||  |
|`PersonPartyInfo.PersonData.Contact`||  |
|`PersonPartyInfo.PersonData.Contact.PhoneNum`||Maximum 10 phone numbers can be associated to a party.|
|`PersonPartyInfo.PersonData.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Modem<br>Other|  |
|`PersonPartyInfo.PersonData.Contact.PhoneNum.PhoneIdent`||If PhoneIdent is not provided in the request and other fields are provided then a new phone identifier would be generated and would be associated to the existing Phone and PhoneType<br><br>If existing PhoneIdent is sent in the request then the phone number is updated with the new number provided in the request.<br>A new PhoneIdent is provided to associate new phone/phone type with the party.<br>  |
|`PersonPartyInfo.PersonData.Contact.PhoneNum.Phone`||  |
|`PersonPartyInfo.PersonData.Contact.PhoneNum.PreferredPhone`|true<br>false|Only one phone number can be considered as preferred phone number.|
|`PersonPartyInfo.PersonData.Contact.PhoneNum.PhoneDesc`||  |
|`PersonPartyInfo.PersonData.Contact.PostAddr`||Optional aggregate and a new party can be created without address.<br>New party can be created with existing address or a new address.<br>To link an existing address, below mentioned data should be provided in the request:<br>-AddressIdent<br>-AddressUse<br>-AddressType<br>-AddrFormatType (Always set to label but, required to be provided by EFX schema)<br>To create new address, all the postal address data except AddressIdent should be provided in request.<br>Customer can have one primary, multiple secondary and multiple sesonal address types. Seasonal address cannot exist as an independent record therefore, seasonal address shares AddressIdent with primary/secondary address type.<br>To maintain correct relativity of seasonal address with primary/secondary address type, seasonal address aggregate should be presented right after related primary/secondary address type in request.<br>Timeframe should be provided with seasonal address type.<br>Each adress type can have various AddrUse values. For Example, Personal, Home, Business and other user-defined values.<br>Same AddrUse value should be provided for primary and related seasonal address whereas secondary and related seasonal address. Value of AddrUse as 'Tax' is only applicable for secondary address type.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.OpenDt`||***Conditionally required**<br>This field is required when a new address record is created. |
|`PersonPartyInfo.PersonData.Contact.PostAddr.RelationshipMgr`||Applicable for Primary and Secondary Address. <br>Not required to be provided for Seasonal address type.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.RelationshipMgr.RelationshipMgrIdent`||  |
|`PersonPartyInfo.PersonData.Contact.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Value of Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.OriginatingBranch`||***Conditionally required**<br>This field is required only when adding a new address for the party whether primary or secondary.<br><br>Please note not applicable if the address is seasonal address|
|`PersonPartyInfo.PersonData.Contact.PostAddr.ResponsibleBranch`||***Conditionally required**<br>This field refers to Accounting Branch and is required only when adding a new address for the party whether primary or secondary.<br><br>Please note not applicable if the address is seasonal address|
|`PersonPartyInfo.PersonData.Contact.PostAddr.AddressIdent`||***Conditionally required**<br>AddressId, should be provided if existing address is associated to new party to be created.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br>Tax<br><br>|***Conditionally required**<br>Required to be provided when adding new address or using existing address for new party.<br>Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Premier uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example, if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.AddrFormatType`|Label|Label address format is supported.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.Addr1`||***Conditionally Required**<br>Provide this field to create a new address record. Maximum length of this field can be either 30 or 40 characters based upon the name and address length option.<br>Values of name and address length option indicate following:<br>'0'- indicates names and addresses length up to 30 characters.<br>'1'- indicates names and addresses length up to 40 characters.<br>'2'- indicates names and addresses length up to 30 characters with Address line 2 enabled.<br>'3'- indicates names and addresses length up to 40 characters with Address line 2 enabled.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.Addr2`||AddrLine2 is required if enabled under the name and addresses length option in miscellsneous specificaion. Maximum length for this field is either 30 or 40 characters based upon the option values chosen for Address line 1.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.City`||***Conditionally Required**<br>Provide this field if new address record is created.<br>Maximum allowed character length is 20 (including spaces). For longer city name, you can abbreviate the city name to fit the critera. For example, city name "Rancho Santa Margarita" can be abbreviated as "Rancho Santa Mrgrta" or "Rancho S Margarita"<br><br>A total lenth of 40 characters for City, StateProv and PostalCode appended together (including spaces) is accepted.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.StateProv`||*** Conditionally Required**<br>Provide this field is new address record is to created and country is United States.<br><br>Format of value in this field is not required to be in ISO 3166-2 standard and ESF will pass all the values irrespective of format.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.PostalCode`||***Conditionally Required**<br>It is required to provide this field if, a new address record is to be created with country as United States.<br><br>Postal Code provides information about the ZIP code if, address is from United States and, provides information about postal code if, address is not from United States.  This field provides the information in ZIP Code (5 Digit)-Additional Code (4 Digit) format. Additional code of four digits is optional and provides a more specific location within a given ZIP code. If additional code is not provided, it can be represented with value as '0000'. For example, 32714-1234 or 32714-0000.<br><br>Postal codes are string of characters for non-US addresses.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.CountryCode`||  |
|`PersonPartyInfo.PersonData.Contact.PostAddr.CountryCode.CountryCodeSource`||  |
|`PersonPartyInfo.PersonData.Contact.PostAddr.CountryCode.CountryCodeValue`||Values are user defined.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|***Required**<br>Customer can have one primary, multiple secondary and multiple sesonal address types. Seasonal address cannot exist as an independent record therefore, seasonal address shares AddressIdent with primary/secondary address type.<br>To maintain correct relativity of seasonal address with primary/secondary address type, seasonal address aggregate should be presented right after related primary/secondary address type in request.<br>Timeframe should be provided with seasonal address type.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.TimeFrame`||  |
|`PersonPartyInfo.PersonData.Contact.PostAddr.TimeFrame.StartDt`||Applicable if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.TimeFrame.EndDt`||Applicable if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.Retention`||Retention code indicates if the address record is to be retained, or deleted if no accounts, tax addenda or any other relationship exists on an address record.<br>If new address record is to be created during account opening process with retention code as true, and if account opening process fails due to an error, ESF does not delete the new address record from system (If new address was created prior to an error). Address record remains in the system even if the account is not created due to an error.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.CensusTract`||  |
|`PersonPartyInfo.PersonData.Contact.PostAddr.CensusBlock`||  |
|`PersonPartyInfo.PersonData.Contact.PostAddr.ForeignFlag`||  |
|`PersonPartyInfo.PersonData.Contact.PostAddr.HandlingCode`||Values are user-defined.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio<br>UseDefault|Option to identify the types of customer correspondence that prints handling messages, as defined by the HandlingCode.|
|`PersonPartyInfo.PersonData.Contact.PostAddr.MSACode`||  |
|`PersonPartyInfo.PersonData.Contact.Email`||  |
|`PersonPartyInfo.PersonData.Contact.Email.EmailIdent`||***Conditionally Required**<br>Not required to be provided by the user while adding a new email or web address. However, if EmailIdent is being sent in the request then it must be ensured that the value uniquely identifies each email or web address aggregate record that is being added.<br>If the emailIdent is not sent in the request then the system associate the first available emailIdent with the new email or web address record created.<br>Up to 10 occurrences of an email address and web URLs combined may be associated with the customer.|
|`PersonPartyInfo.PersonData.Contact.Email.EmailType`|Business<br>Person|***Conditionally Required**<br>To be provided to add new email address and identify whether the email is for business or personal use.|
|`PersonPartyInfo.PersonData.Contact.Email.EmailAddr`||***Conditionally Required**<br>Required to add new email record. Maximum length for this field is 60 characters. |
|`PersonPartyInfo.PersonData.Contact.Email.PreferredEmail`|true<br>false|Primary contact indicator. <br>Only one email address can be considered as preferred email.<br>Send the values as 'true' in the request to indicate that email address to be added is preferred email else do not send this field in request.|
|`PersonPartyInfo.PersonData.Contact.WebAddr`||  |
|`PersonPartyInfo.PersonData.Contact.WebAddr.WebAddrIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a party.<br><br>This field is not required to be provided to add an email or web address.<br>If the EmailIdent is not sent in the request then the system would associate the first available EmailIdent with the new record created.<br>However, if the EmailIdent is sent in the request then it must be ensured that the value uniquely identifies each email or web address that is added.<br>|
|`PersonPartyInfo.PersonData.Contact.WebAddr.WebAddrLink`||***Conditionally Required**<br>To be provided to add new web address.<br>Maximum field length is 60 characters.|
|`PersonPartyInfo.PersonData.IssuedIdent`||Maximum two identification aggregates can be provided for a customer.|
|`PersonPartyInfo.PersonData.IssuedIdent.IssuedIdentType`||Calling application need to pass the values configured at the time of application integration in the core system for financial institute.<br><br>Only 1 character code should be passed in the request based on co-ordinated list of IssuedIdentType.<br>For example: <br>"1" for Driving License <br>"2" for Pan Card|
|`PersonPartyInfo.PersonData.IssuedIdent.IssuedIdentId`||***Conditionally Required**<br>Required to be sent in PersonData aggregrate.<br>Valid values for this field are 1 and 2|
|`PersonPartyInfo.PersonData.IssuedIdent.IssuedIdentValue`||  |
|`PersonPartyInfo.PersonData.IssuedIdent.Issuer`||Application should pass the values configured at the time of application integration in the core for financial institute.|
|`PersonPartyInfo.PersonData.IssuedIdent.IssueDt`||  |
|`PersonPartyInfo.PersonData.IssuedIdent.ExpDt`||  |
|`PersonPartyInfo.PersonData.PersonName`||Client application should send either FullName or standalone name elements (GivenName, MiddleName or FamilyName).<br><br>If FullName is not provided, then values of GivenName, MiddleName and FamilyName fields are concatenated with a space and sent as FullName in the request.|
|`PersonPartyInfo.PersonData.PersonName.NameType`|Primary<br>Secondary<br>|One primary and multiple secondary name types are supported for a customer.|
|`PersonPartyInfo.PersonData.PersonName.NameIdent`||NameIdent associated to primary name is same as PartyId generated for customer.<br>For secondary names type, each name record is identified by incremented unique number starting from 1 (1, 2, 3..n).|
|`PersonPartyInfo.PersonData.PersonName.FullName`||Client application should send either FullName or GivenName or FamilyName in the request.<br>Maximum field length is 40 characters|
|`PersonPartyInfo.PersonData.PersonName.FamilyName`||Client application should send either FullName or GivenName or FamilyName in the request.<br><br>Maximum field length is 25 characters|
|`PersonPartyInfo.PersonData.PersonName.GivenName`||Client application must send either FullName or GivenName or FamilyName in the request.<br><br>Maximum field length is 15 characters|
|`PersonPartyInfo.PersonData.PersonName.MiddleName`||Client application must send either FullName or GivenName or FamilyName in the request.<br><br>Maximum field length is one character.|
|`PersonPartyInfo.PersonData.PersonName.NameSuffix`|II<br>III<br>IV<br>Jr.<br>Sr.<br>|Generation Code, values are client-defined and may change as per financial institute.|
|`PersonPartyInfo.PersonData.PersonName.LegalName`||IRS name of the person and is applicable when the NameType is Primary.<br>If NameType is "Secondary" is sent in the request, value is not sent to the system.|
|`PersonPartyInfo.PersonData.PersonName.NameFormat`|None<br>NonPersonal<br>PrintedMailingSeasonal<br>PrintedMailingSeasonalTax<br>PrintedSeasonalOnly<br>PrintedAddressOnly|Name Format Code.<br>For person party type, only "None" value is supported. <br>None implies that no special print handling is required.|
|`PersonPartyInfo.BirthDt`||  |
|`PersonPartyInfo.DeceasedDt`||  |
|`PersonPartyInfo.Gender`|Male<br>Female<br>Unknown|  |
|`PersonPartyInfo.ImmigrationStat`||Values are user-defined.|
|`PersonPartyInfo.Race`||  |
|`OrgPartyInfo`||  |
|`OrgPartyInfo.PartyPref`||  |
|`OrgPartyInfo.PartyPref.Language`|UseInstitution<br>English<br>Spanish|  |
|`OrgPartyInfo.EstablishedDt`||***Required**<br>Date when name/address record is created.|
|`OrgPartyInfo.OriginatingBranch`||***Required**|
|`OrgPartyInfo.ResponsibleBranch`||***Required**|
|`OrgPartyInfo.CreditRisk`||  |
|`OrgPartyInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>CreditScore<br>|  |
|`OrgPartyInfo.CreditRisk.InternalScore`||  |
|`OrgPartyInfo.RelationshipMgr`||  |
|`OrgPartyInfo.RelationshipMgr.RelationshipMgrIdent`||  |
|`OrgPartyInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Value of Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`OrgPartyInfo.OEDCode`||  |
|`OrgPartyInfo.ClientDefinedData`||Service provider requires the meta data to be sent along with the user-entered data. <br>DataClassType supported for: <br>Party or a Loan Account is 'Name' i.e. 50.<br>DDA/SDA/CDA Account Types only is 'Portfolio' i.e. 0. (Not used for this operation)|
|`OrgPartyInfo.ClientDefinedData.DataIdent`||  |
|`OrgPartyInfo.ClientDefinedData.DataType`|Alpha<br>Boolean<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol|  |
|`OrgPartyInfo.ClientDefinedData.Value`||  |
|`OrgPartyInfo.ClientDefinedData.DataLength`||  |
|`OrgPartyInfo.ClientDefinedData.ExpDt`||  |
|`OrgPartyInfo.ClientDefinedData.Desc`||Refers to the field label|
|`OrgPartyInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`OrgPartyInfo.ClientDefinedData.SearchFlag`|true<br>false|  |
|`OrgPartyInfo.ClientDefinedData.GroupNum`||  |
|`OrgPartyInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty<br>|Customer type, indicating the organization-party relationship with the financial institute.|
|`OrgPartyInfo.TaxDataInfo`||  |
|`OrgPartyInfo.TaxDataInfo.TaxIdentType`|EIN|Code that indicate whether the Tax Identification Number is a Social Security Number (SSN), Employer Identification Number (EIN), a foreign tax ID number, an Adoption Taxpayer Identification Number (ATIN), or an Individual Taxpayer Identification Number (ITIN).<br><br>For OrgParty Type, service provider supports only "EIN", therefore client application should only send EIN value. If the value is sent as "None", by default "SSN" value is set for this field. <br><br>Service provider allows setup of multiple customers with the same SSN or EIN, therefore does not validate the SSN or EIN sent in the request for duplicity.|
|`OrgPartyInfo.TaxDataInfo.TaxIdent`||  |
|`OrgPartyInfo.TaxDataInfo.TaxIdentVerified`|true<br>false|  |
|`OrgPartyInfo.TaxDataInfo.TaxIdentVerifiedDt`||  |
|`OrgPartyInfo.TaxDataInfo.TaxIdentVerifiedAttempts`||Tax ID verification attempts.|
|`OrgPartyInfo.TaxDataInfo.OtherTaxIdent`||Foreign Tax Identification Number, that is on IRS Form 1042-S|
|`OrgPartyInfo.TaxDataInfo.BNotice1Dt`||IRS 1st B Notice. |
|`OrgPartyInfo.TaxDataInfo.BNotice2Dt`||IRS 2nd B Notice. |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData`||  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.ForeignTaxForms`|None<br>1042S<br>W8<br>1042SandW8|Foreign tax code|
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.IncomeCode`||  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.TaxRate`||  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.ExemptionCode`||  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientStateProv`||Maximum field length is two characters.|
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode`||  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode.CountryCodeSource`|IRS|  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode.CountryCodeValue`||Country Tax Code|
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry`||  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry.CountryCodeSource`|IRS|  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry.CountryCodeValue`||Foreign country residence code of two characters on IRS Form 1042-S as per the current definitions provided by IRS.|
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientPostalCode`||  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.ForeignWithholdingType`|None<br>Chapter3<br>Chapter4|  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.Chapter3Status`||  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.Chapter4FATCAStatus`||  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientGIIN`||  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.W8FormType`|None<br>W8-BEN<br>W8-BEN-E<br>W8-ECI<br>W8-EXP<br>W8-IMY|  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.ForeignCertDt`||  |
|`OrgPartyInfo.TaxDataInfo.ForeignTaxData.ForeignExpDt`||  |
|`OrgPartyInfo.DisclosureData`||  |
|`OrgPartyInfo.DisclosureData.DisclosureDt`||  |
|`OrgPartyInfo.DisclosureData.DisclosureAckType`||Values are user-defined.|
|`OrgPartyInfo.NAICS`||  |
|`OrgPartyInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`OrgPartyInfo.Retention`|true<br>false|Name Retention code, specifies whether name record (party) retained or deleted if no accounts or tax addenda are attached to the name.|
|`OrgPartyInfo.SecretData`||  |
|`OrgPartyInfo.SecretData.SecretIdent`|MaidenName<br>PlaceOfBirth<br>County<br>FavoriteColor<br>FavoriteNumber<br>FavoriteDate<br>FreeFormMessage<br>FreeFormQuestion<br>FreeFormAnswer|More than one security question may be recorded in the core and if FreeFormQuestion is used, then the answer is provided in a seprate SecretData aggregate.|
|`OrgPartyInfo.SecretData.SecretValue`||  |
|`OrgPartyInfo.ExemptOFAC`|true<br>false|Suspect exemption. <br>|
|`OrgPartyInfo.PartyOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|  |
|`OrgPartyInfo.TelebancPswd`||  |
|`OrgPartyInfo.RiskRanking`|None<br>Low<br>Medium<br>High|  |
|`OrgPartyInfo.TaxExempt`|NotTaxExempt<br>NonProfit<br>Government<br>TaxExempt|Value that specify whether the party is exempted from tax or not. <br>For Government Organizations/Bodies and charitable trusts with interests income values use "Government" or "NonProfit" respectively.<br><br>Additional values other than defined static values can be client-defined.|
|`OrgPartyInfo.OrgData`||  |
|`OrgPartyInfo.OrgData.Contact`||  |
|`OrgPartyInfo.OrgData.Contact.PhoneNum`||  |
|`OrgPartyInfo.OrgData.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Modem<br>Other|  |
|`OrgPartyInfo.OrgData.Contact.PhoneNum.PhoneIdent`||Up to 10 occurrences of a phone number may be associated to a customer in the core.|
|`OrgPartyInfo.OrgData.Contact.PhoneNum.Phone`||  |
|`OrgPartyInfo.OrgData.Contact.PhoneNum.PreferredPhone`|true<br>false|Primary phone indicator.<br>Only one phone number can be preferred phone number of contact.|
|`OrgPartyInfo.OrgData.Contact.PhoneNum.PhoneDesc`||Calling application (user) must need to pass the values configured at the time of application integration in the core for the financial institution.|
|`OrgPartyInfo.OrgData.Contact.PostAddr`||Service provider allows either to add new party with the existing address record or adding the existing party with new address record. <br>If adding the new party with existing address record following must be provided: <br>- AddressIdent;<br>- AddressUse;<br>- AddressType;<br>- AddressFormat (Core supports Label format only)<br>If new address is added to the existing party then except the AddressIdent rest of the postal address data must be provided.<br><br>Service provider allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as an independent address record. The seasonal addresss share addressIdent with <br>primary or secondary address thus must be correctly related to the primary or secondary address record.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.OpenDt`||***Conditionally required**<br>This field is required when a new address record is created. |
|`OrgPartyInfo.OrgData.Contact.PostAddr.RelationshipMgr`||Applicable for Primary and Secondary Address. <br>Not required to be provided for Seasonal address type.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.RelationshipMgr.RelationshipMgrIdent`||  |
|`OrgPartyInfo.OrgData.Contact.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Value of Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.OriginatingBranch`||***Conditionally required**<br>This field is required only when adding a new address for the party whether primary or secondary.<br><br>Please note not applicable if the address is seasonal address|
|`OrgPartyInfo.OrgData.Contact.PostAddr.ResponsibleBranch`||***Conditionally required**<br>Accounting Branch, required only when adding a new address for the party whether primary or secondary.<br><br>Not applicable if the address is seasonal address|
|`OrgPartyInfo.OrgData.Contact.PostAddr.AddressIdent`||***Conditionally required**<br>This field is required if the existing address is being used for the new party.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br>Tax<br><br>|***Conditionally required**<br>Required to be provided when adding new address or using existing address for new party.<br>Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Premier uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example, if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.Addr1`||***Conditionally Required**<br>Required when a new address record is created. Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values available in the core:<br>"0" indicates names and addresses length up to 30 characters.<br>"1" indicates names and addresses length up to 40 characters.<br>"2" indicates names and addresses length up to 30 characters with Address line 2 enabled.<br>"3" indicates names and addresses length up to 40 characters with Address line 2 enabled.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.Addr2`||AddrLine2 is required if enabled under the name and addresses length option. Maximum length for this field is either 30 or 40 characters based upon the option values chosen for Address line 1.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.City`||***Conditionally Required**<br>Maximum allowed character length is 20 (including spaces). For longer city name, you can abbreviate the city name to fit the critera. For example, city name "Rancho Santa Margarita" can be abbreviated as "Rancho Santa Mrgrta" or "Rancho S Margarita"<br><br>This field is required to be provided if new address record is created.<br><br>Note: A total lenth of 40 characters for City, StateProv and PostalCode appended together (including spaces) is acceptable.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.StateProv`||***Conditionally required**<br>Required if new address record is created and the address country is United States.<br><br>The format is not required to be ISO 3166-2 for this field and any value sent in the core will be passed irrespective of the format.<br>For example: FI, VA etc.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.PostalCode`||***Conditionally required**<br>Required to be provided, if new address record is created for the new party and the address country is United States.<br>Postal Code provides information about the ZIP code, if address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Please note postal codes for non-US/foreign address are simply a string of characters.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.CountryCode`||  |
|`OrgPartyInfo.OrgData.Contact.PostAddr.CountryCode.CountryCodeSource`||  |
|`OrgPartyInfo.OrgData.Contact.PostAddr.CountryCode.CountryCodeValue`||Values are user-defined.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|***Required**<br>In the core, user can have one primary addres and multiple secondary or seasonal address. Primary with seasonal or primary with secondary address, forms an address record. Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary addresses. Seasonal address always have a time frame.<br><br>In order to correctly relate the seasonal address with primary address or seasonal address with secondary address, seasonal address aggregate is presented right after primary or secondary address, which it relates to.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.TimeFrame`||  |
|`OrgPartyInfo.OrgData.Contact.PostAddr.TimeFrame.StartDt`||Applicable for Seasonal Address type. <br>Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as “9999”.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.TimeFrame.EndDt`||Applicable for Seasonal Address Type. <br>Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as “9999”.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.Retention`||During the account opening process, new address record is created with retention code as true and if account opening workflow fails due to an error, ESF will be unable to delete the address, if created successfully prior to error and remain on the system even if the account is not created.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.CensusTract`||  |
|`OrgPartyInfo.OrgData.Contact.PostAddr.CensusBlock`||  |
|`OrgPartyInfo.OrgData.Contact.PostAddr.ForeignFlag`||  |
|`OrgPartyInfo.OrgData.Contact.PostAddr.HandlingCode`||  |
|`OrgPartyInfo.OrgData.Contact.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio<br>UseDefault|Option that identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.|
|`OrgPartyInfo.OrgData.Contact.PostAddr.MSACode`||  |
|`OrgPartyInfo.OrgData.Contact.Email`||  |
|`OrgPartyInfo.OrgData.Contact.Email.EmailIdent`||***Conditionally required**<br>Not required to be provided by the user while adding a new email or web address. However, if EmailIdent is being sent in the request then it must be ensured that the value uniquely identifies each email or web address aggregate record that is being added.<br>If the emailIdent is not sent in the request then the system associate the first available emailIdent with the new email or web address record created.<br><br>Please note upto 10 occurrences of an email address and web URLs combined may be associted with the customer|
|`OrgPartyInfo.OrgData.Contact.Email.EmailType`|Business<br>Person|***Conditionally required**<br>Required to be provided when adding a new email address to identify whether the email is for business or personal use.|
|`OrgPartyInfo.OrgData.Contact.Email.EmailAddr`||***Conditionally required**<br>Required when adding a new email record. Maximum length for this field is 60 characters. |
|`OrgPartyInfo.OrgData.Contact.Email.PreferredEmail`|true<br>false|Primary contact indicator. <br>Only one email address can be preffered email.|
|`OrgPartyInfo.OrgData.Contact.WebAddr`||  |
|`OrgPartyInfo.OrgData.Contact.WebAddr.WebAddrIdent`||Upto  10 occurrences of an email address and web URLs combined may be associated to a party.<br><br>This field is not while adding a email or web address.<br>If the EmailIdent is not sent in the request then the system would associate the first available EmailIdent with the new record created.<br>However if the EmailIdent is sent in the request then it must be ensured that the value uniquely identifies each email or web address that is being added.<br>|
|`OrgPartyInfo.OrgData.Contact.WebAddr.WebAddrLink`||***Conditionally required**<br>Required to be provided while adding the new web address.<br>Maximum field length is 60 characters.|
|`OrgPartyInfo.OrgData.IssuedIdent`||Maximum of two identification aggregates are provided for a customer.|
|`OrgPartyInfo.OrgData.IssuedIdent.IssuedIdentType`||Calling application need to pass the values configured at the time of application integration in the core for the financial institute.<br><br>Only 1 character code is passed in the request on the basis of co-ordinated list of IssuedIdentType, configured in the core and are allowed to be used by the institute. <br>For example: <br>"1" for Driving License <br>"2" for Pan Card|
|`OrgPartyInfo.OrgData.IssuedIdent.IssuedIdentId`||***Conditionally required**<br>Required to be sent the PersonData aggregrate.<br>Valid value for this field are 1 and 2|
|`OrgPartyInfo.OrgData.IssuedIdent.IssuedIdentValue`||Up to two identification forms can be send in the request.|
|`OrgPartyInfo.OrgData.IssuedIdent.Issuer`||Calling application need to pass the values configured at the time of application integration in the core for the financial institute.|
|`OrgPartyInfo.OrgData.IssuedIdent.IssueDt`||  |
|`OrgPartyInfo.OrgData.IssuedIdent.ExpDt`||  |
|`OrgPartyInfo.OrgData.OrgName`||  |
|`OrgPartyInfo.OrgData.OrgName.NameType`|Primary<br>Secondary<br>|Service provider supports one Primary NameType and multiple Secondary NameType for the customer |
|`OrgPartyInfo.OrgData.OrgName.NameIdent`||Name identifier is associated to the Primary NameType and would be same as PartyId generated for the party.<br><br>Please note for Secondary NameType, each name record is identified by incrementally unique number starting from 1 (i.e 1,2,3….n) |
|`OrgPartyInfo.OrgData.OrgName.Name`||Maximum field length is forty characters.|
|`OrgPartyInfo.OrgData.OrgName.LegalName`||IRS name of the person and is applicable when the NameType is Primary.<br>If the client application send this field with NameType as "Secondary", then the value for this field is not sent in the core.|
|`OrgPartyInfo.OrgData.OrgName.NameFormat`|None<br>NonPersonal<br>PrintedMailingSeasonal<br>PrintedMailingSeasonalTax<br>PrintedSeasonalOnly<br>PrintedAddressOnly|Name Format Code. <br><br>For organisation party type, only "None" and "NonPersonal" values are supported by the core where None implies that no special print handling is required and  'NonPersonal' implies how the system handles a non-personal name (business name) when performing sound search inquiries. The name is searched by display name, reading left to right, rather than last name, first name.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`PartyStatusRec`||  |
|`PartyStatusRec.PartyKeys`||  |
|`PartyStatusRec.PartyKeys.PartyId`||  |
|`PartyStatusRec.PartyStatus`||  |
|`PartyStatusRec.PartyStatus.PartyStatusCode`|Valid|  |
|`PartyStatusRec.PartyStatus.EffDt`||  |
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
