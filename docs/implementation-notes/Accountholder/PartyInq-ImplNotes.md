# Implementation Notes for Inq Party
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
|`PartySel`||This aggregate is used to perform a Party (name) inquiry.|
|`PartySel.PartyKeys`||  |
|`PartySel.PartyKeys.PartyId`||  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`PartyRec`||  |
|`PartyRec.PartyKeys`||  |
|`PartyRec.PartyKeys.PartyId`||  |
|`PartyRec.PersonPartyInfo`||Customer with a verified or unverified EIN  are viewed as Organization Parties.|
|`PartyRec.PersonPartyInfo.PartyPref`||  |
|`PartyRec.PersonPartyInfo.PartyPref.Language`|UseInstitution<br>English<br>Spanish|  |
|`PartyRec.PersonPartyInfo.EstablishedDt`||Refers to creation date of name(party) record.|
|`PartyRec.PersonPartyInfo.OriginatingBranch`||  |
|`PartyRec.PersonPartyInfo.OriginatingBranchEnumDesc`||  |
|`PartyRec.PersonPartyInfo.ResponsibleBranch`||  |
|`PartyRec.PersonPartyInfo.ResponsibleBranchEnumDesc`||  |
|`PartyRec.PersonPartyInfo.LastContactDt`||  |
|`PartyRec.PersonPartyInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>CreditScore<br>|  |
|`PartyRec.PersonPartyInfo.CreditRisk.InternalScore`||  |
|`PartyRec.PersonPartyInfo.RelationshipMgr`||  |
|`PartyRec.PersonPartyInfo.RelationshipMgr.RelationshipMgrIdent`||  |
|`PartyRec.PersonPartyInfo.RelationshipMgr.RelationshipMgrIdentEnumDesc`||  |
|`PartyRec.PersonPartyInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`PartyRec.PersonPartyInfo.OEDCode`||  |
|`PartyRec.PersonPartyInfo.OEDCodeEnumDesc`||  |
|`PartyRec.PersonPartyInfo.ClientDefinedData`||The core requires the meta data to be sent along with the user-entered data. <br>DataClassType supported for : <br>Party or a Loan Account is 'Name' i.e. 50.<br>DDA/SDA/CDA Account Types only is 'Portfolio' i.e. 0. (not used for this operation)|
|`PartyRec.PersonPartyInfo.ClientDefinedData.DataIdent`||This field specifies the value of the Field Code.|
|`PartyRec.PersonPartyInfo.ClientDefinedData.DataType`|Alpha<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol<br>|  |
|`PartyRec.PersonPartyInfo.ClientDefinedData.Value`||  |
|`PartyRec.PersonPartyInfo.ClientDefinedData.DataLength`||  |
|`PartyRec.PersonPartyInfo.ClientDefinedData.ExpDt`||  |
|`PartyRec.PersonPartyInfo.ClientDefinedData.Desc`||Refers to the field label|
|`PartyRec.PersonPartyInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`PartyRec.PersonPartyInfo.ClientDefinedData.SearchFlag`|true<br>false|  |
|`PartyRec.PersonPartyInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty<br>|This field varies from the customer type and signifies the sub type of the customer type.<br>For example: If the customer is an Organization then PartyType 'LimitLiabilityC-Corp' or 'LimitLiabilityS-Corp' would provide information about the nature of Organization. Similarly, in case of a Person, the PartyType would indicate if the Customer is of a type 'Personal-Prospect' (say)|
|`PartyRec.PersonPartyInfo.TaxDataInfo`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.TaxIdentType`|None<br>SSN<br>Foreign<br>ITIN<br>ATIN|This field specify whether the Tax Identification Number is a Social Security Number (SSN), Employer Identification Number (EIN), a foreign tax ID number, an Adoption Taxpayer Identification Number (ATIN), or an Individual Taxpayer Identification Number (ITIN).<br><br>The core allows setup of multiple customers with the same SSN or EIN, therefore does not validate the SSN or EIN sent in the request for duplicity.|
|`PartyRec.PersonPartyInfo.TaxDataInfo.TaxIdent`|| This field is passed through as it is received in the service provider's response. |
|`PartyRec.PersonPartyInfo.TaxDataInfo.TaxIdentVerified`|true<br>false|  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.TaxIdentVerifiedDt`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.TaxIdentVerifiedAttempts`||Refers to Tax ID verification attempts.|
|`PartyRec.PersonPartyInfo.TaxDataInfo.OtherTaxIdent`||This field refers to Foreign Tax Identification Number, that is on IRS Form 1042-S|
|`PartyRec.PersonPartyInfo.TaxDataInfo.BNotice1Dt`||Refers to IRS 1st B Notice.  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.BNotice2Dt`||Refers to IRS 2nd B Notice.  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.ForeignTaxForms`|None<br>1042S<br>W8<br>1042SandW8|This field refers to foreign tax code|
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.IncomeCode`||Values are client defined.|
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.TaxRate`||Value of the tax rate entered is sent in the core but it is compared with the current rates defined for the IRS form 1042-S.|
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.ExemptionCode`||Values are client defined.|
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientStateProv`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode.CountryCodeSource`|IRS|  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode.CountryCodeValue`||This field refers to Country Tax Code|
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry.CountryCodeSource`|IRS|  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry.CountryCodeValue`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientPostalCode`||PostalCode provides the information for the ZIP, as well as the +4 code. The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000.<br><br>Please note postal codes that are not ZIP+4 are simply a string of characters.|
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.ForeignWithholdingType`|None<br>Chapter3<br>Chapter4|  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.Chapter3Status`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.Chapter4FATCAStatus`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientGIIN`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.W8FormType`|None<br>W8-BEN<br>W8-BEN-E<br>W8-ECI<br>W8-EXP<br>W8-IMY|  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.ForeignCertDt`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.ForeignExpDt`||  |
|`PartyRec.PersonPartyInfo.DisclosureData`||  |
|`PartyRec.PersonPartyInfo.DisclosureData.DisclosureDt`||  |
|`PartyRec.PersonPartyInfo.DisclosureData.DisclosureAckType`||This field specify the user-defined value opted by the party for sharing non-public information.|
|`PartyRec.PersonPartyInfo.NAICS`||  |
|`PartyRec.PersonPartyInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`PartyRec.PersonPartyInfo.Retention`|true<br>false|This field refers to the Name Retention code, specifies whether name record (party) retained or deleted if no accounts or tax addenda are attached to the name.|
|`PartyRec.PersonPartyInfo.SecretData`||  |
|`PartyRec.PersonPartyInfo.SecretData.SecretIdent`|MaidenName<br>PlaceOfBirth<br>County<br>FavoriteColor<br>FavoriteNumber<br>FavoriteDate<br>FreeFormMessage<br>FreeFormQuestion<br>FreeFormAnswer|More than one security question may be recorded in the core and if FreeFormQuestion is used, then the answer is provided in a seprate SecretData aggregate.|
|`PartyRec.PersonPartyInfo.SecretData.SecretValue`||  |
|`PartyRec.PersonPartyInfo.LastUpdateDt`||  |
|`PartyRec.PersonPartyInfo.ExemptOFAC`|true<br>false|Refers to suspect exemption. The true value of the field indicates  the customer is exempt from the ORM extract and reporting process, while false indicates the customer is not exempted from the OMR extract and reporting process.|
|`PartyRec.PersonPartyInfo.PartyOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|Up to 5 additional open methods can be client-defined.|
|`PartyRec.PersonPartyInfo.TelebancPswd`||  |
|`PartyRec.PersonPartyInfo.RiskRanking`|None<br>Low<br>Medium<br>High|  |
|`PartyRec.PersonPartyInfo.Reminder`||  |
|`PartyRec.PersonPartyInfo.Reminder.ReminderCategory`|Tickler|  |
|`PartyRec.PersonPartyInfo.Reminder.ReminderInd`|true<br>false|This field refers to Contact Status Next Tickler Date. <br>This field is marked true when this date is present.|
|`PartyRec.PersonPartyInfo.TaxExempt`|NotTaxExempt<br>TaxExempt|This field specify whether tax emption applicable for the party or not.<br>|
|`PartyRec.PersonPartyInfo.PersonData`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PhoneNum`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Modem<br>Other|In the core phone type as other means interanational phone type.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PhoneNum.PhoneIdent`||Up to 10 occurrences of a phone number may be associated to a customer in the core.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PhoneNum.Phone`||Standard format supported by the core: <br>+IntlDialCode-AreaCode-PhoneNumber[+Extn]<br>For example :<br>+91-402-5551212+739<br><br>Please note phone extension is valid for work (business) phone only.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PhoneNum.PreferredPhone`|true<br>false|This field refers to Primary phone indicator.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PhoneNum.PhoneDesc`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr`||Core allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal address share addressIdent with <br>primary or secondary address thus must be correctly related to the primary or secondary address record.<br><br>Also core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/secondary address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.OpenDt`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.RelationshipMgr`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.RelationshipMgr.RelationshipMgrIdent`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.OriginatingBranch`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.ResponsibleBranch`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.AddressIdent`||This field refers to address identifier shared by primary and secondary/ seasonal address related to it.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br>Tax<br><br>|***Conditionally required**<br>This field is required to be provided when adding new address or using existing address for new party.<br>Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Premier uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.AddrUseEnumDesc`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.Addr1`||***Conditionally Required**<br>This field is required when a new address record is created. Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values available in the core:<br>"0" indicates names and addresses length up to 30 characters.<br>"1" indicates names and addresses length up to 40 characters.<br>"2" indicates names and addresses length up to 30 characters with Address line 2 enabled.<br>"3" indicates names and addresses length up to 40 characters with Address line 2 enabled.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.Addr2`||AddrLine2 is required if enabled under the name and addresses length option. Maximum length for this field is either 30 or 40 characters based upon the option values chosen for Address line 1.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.City`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.StateProv`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.PostalCode`||***Conditionally required**<br>This field is required to be provided, if new address record is created for the new party and the address country is United States.<br>Postal Code provides information about the ZIP code, if address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Please note postal codes for non-US/foreign address are simply a string of characters.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.CountryCode`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.CountryCode.CountryCodeValue`||This field in the core have client defined values for postal address|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.CountryCode.CountryCodeValueEnumDesc`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|Core support primary, multiple secondary or seasonal address types. Both primary with seasonal/secondary forms an address record. Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary address. |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.TimeFrame`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as “9999”.<br><br>The month and the day of the month will show the actual Seasonal address start date.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as “9999”.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.Retention`|true<br>false|During the account opening process, new address record is created with retention code as true and if account opening workflow fails due to an error, ESF will be unable to delete the address, if created successfully prior to error and remain on the system even if the account is not created.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.CensusTract`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.CensusBlock`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.ForeignFlag`|true<br>false|  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.HandlingCode`||This field indicate the client defined special rounting information for the customer correspondence. |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|This field identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.MSACode`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.Email`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.Email.EmailIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.Email.EmailType`|Business<br>Person|  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.Email.EmailAddr`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.Email.PreferredEmail`|true<br>false|This field refers to primary contact indicator. |
|`PartyRec.PersonPartyInfo.PersonData.Contact.WebAddr`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.WebAddr.WebAddrIdent`||Upto  10 occurrences of an email address and web URLs combined may be associated to a party.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.WebAddr.WebAddrType`|Work|For Web URLs, the type will always be set to Work.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.WebAddr.WebAddrLink`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.IssuedIdentType`||Values are client defined.|
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.IssuedIdentTypeEnumDesc`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.IssuedIdentId`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.IssuedIdentValue`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.Issuer`||This field refers to Issued By and the values are client-defined|
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.IssuerEnumDesc`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.IssueDt`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.ExpDt`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName.NameType`|Primary<br>Secondary<br>|Core supports one Primary NameType and multiple Secondary NameType for the customer. <br>Secondary NameType also refers as Alternate name.|
|`PartyRec.PersonPartyInfo.PersonData.PersonName.NameIdent`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName.FullName`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName.FamilyName`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName.GivenName`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName.MiddleName`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName.NameSuffix`|II<br>III<br>IV<br>Jr.<br>Sr.<br>|This field refers to Generation Code. The values are client-defined and may change per financial institute.|
|`PartyRec.PersonPartyInfo.PersonData.PersonName.LegalName`||This field refers to IRS Name and is applicable when the NameType is Primary.|
|`PartyRec.PersonPartyInfo.PersonData.PersonName.NameFormat`|None|This field refers to Name Format Code. <br><br>Please note for person party type,  only "None" value is supported by the core. <br>None implies that no special print handling is required.|
|`PartyRec.PersonPartyInfo.BirthDt`||  |
|`PartyRec.PersonPartyInfo.DeceasedDt`||  |
|`PartyRec.PersonPartyInfo.Gender`|Male<br>Female<br>Unknown|  |
|`PartyRec.PersonPartyInfo.ImmigrationStat`||This field refers to Residency Status of a person and values are client defined|
|`PartyRec.PersonPartyInfo.Race`||For this field, core expects single digit numeric client-defined values.|
|`PartyRec.OrgPartyInfo`||  |
|`PartyRec.OrgPartyInfo.PartyPref`||  |
|`PartyRec.OrgPartyInfo.PartyPref.Language`|UseInstitution<br>English<br>Spanish|  |
|`PartyRec.OrgPartyInfo.EstablishedDt`||Refers to creation date of name(party) record.|
|`PartyRec.OrgPartyInfo.OriginatingBranch`||  |
|`PartyRec.OrgPartyInfo.OriginatingBranchEnumDesc`||  |
|`PartyRec.OrgPartyInfo.ResponsibleBranch`||This field refers to Accounting Branch associated to the party record.|
|`PartyRec.OrgPartyInfo.ResponsibleBranchEnumDesc`||  |
|`PartyRec.OrgPartyInfo.LastContactDt`||  |
|`PartyRec.OrgPartyInfo.CreditRisk`||  |
|`PartyRec.OrgPartyInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>CreditScore<br>|  |
|`PartyRec.OrgPartyInfo.CreditRisk.InternalScore`||  |
|`PartyRec.OrgPartyInfo.RelationshipMgr`||  |
|`PartyRec.OrgPartyInfo.RelationshipMgr.RelationshipMgrIdent`||  |
|`PartyRec.OrgPartyInfo.RelationshipMgr.RelationshipMgrIdentEnumDesc`||  |
|`PartyRec.OrgPartyInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`PartyRec.OrgPartyInfo.OEDCode`||  |
|`PartyRec.OrgPartyInfo.OEDCodeEnumDesc`||  |
|`PartyRec.OrgPartyInfo.ClientDefinedData`||  |
|`PartyRec.OrgPartyInfo.ClientDefinedData.DataClassType`|Contact<br>Name|This field specifies application to which the field code belong. Name or Contact flex are retrieved in this opertaion.|
|`PartyRec.OrgPartyInfo.ClientDefinedData.DataIdent`||This field specifies the value of the Field Code.|
|`PartyRec.OrgPartyInfo.ClientDefinedData.DataType`|Alpha<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol<br>|  |
|`PartyRec.OrgPartyInfo.ClientDefinedData.Value`||  |
|`PartyRec.OrgPartyInfo.ClientDefinedData.DataLength`||  |
|`PartyRec.OrgPartyInfo.ClientDefinedData.ExpDt`||  |
|`PartyRec.OrgPartyInfo.ClientDefinedData.Desc`||Refers to the field label|
|`PartyRec.OrgPartyInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`PartyRec.OrgPartyInfo.ClientDefinedData.SearchFlag`|true<br>false|  |
|`PartyRec.OrgPartyInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty|This field varies from the customer type and signifies the sub type of the customer type.<br>For example: If the customer is an Organization then PartyType 'LimitLiabilityC-Corp' or 'LimitLiabilityS-Corp' would provide information about the nature of Organization. Similarly, in case of a Person, the PartyType would indicate if the Customer is of a type 'Personal-Prospect' (say)|
|`PartyRec.OrgPartyInfo.TaxDataInfo`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.TaxIdentType`|EIN|This field specify whether the Tax Identification Number is a Social Security Number (SSN), Employer Identification Number (EIN), a foreign tax ID number, an Adoption Taxpayer Identification Number (ATIN), or an Individual Taxpayer Identification Number (ITIN).<br><br>The core allows setup of multiple customers with the same SSN or EIN, therefore does not validate the SSN or EIN sent in the request for duplicity.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.TaxIdent`|| This field is passed through as it is received in the service provider's response. |
|`PartyRec.OrgPartyInfo.TaxDataInfo.TaxIdentVerified`|true<br>false|  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.TaxIdentVerifiedDt`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.TaxIdentVerifiedAttempts`||Refers to Tax ID verification attempts.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.OtherTaxIdent`||This field refers to Foreign Tax Identification Number, that is on IRS Form 1042-S|
|`PartyRec.OrgPartyInfo.TaxDataInfo.BNotice1Dt`||Refers to IRS 1st B Notice.  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.BNotice2Dt`||Refers to IRS 2nd B Notice.  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.ForeignTaxForms`|None<br>1042S<br>W8<br>1042SandW8|This field refers to foreign tax code|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.IncomeCode`||Values are client defined.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.TaxRate`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.ExemptionCode`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientStateProv`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode.CountryCodeSource`|IRS|  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode.CountryCodeValue`||This field refers to Country Tax Code|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry.CountryCodeSource`|IRS|  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry.CountryCodeValue`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientPostalCode`||PostalCode provides the information for the ZIP, as well as the +4 code. The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000.<br><br>Please note postal codes that are not ZIP+4 are simply a string of characters.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.ForeignWithholdingType`|None<br>Chapter3<br>Chapter4|  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.Chapter3Status`||Values are client defined.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.Chapter4FATCAStatus`||Values are client defined.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientGIIN`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.W8FormType`|None<br>W8-BEN<br>W8-BEN-E<br>W8-ECI<br>W8-EXP<br>W8-IMY|  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.ForeignCertDt`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.ForeignExpDt`||  |
|`PartyRec.OrgPartyInfo.DisclosureData`||  |
|`PartyRec.OrgPartyInfo.DisclosureData.DisclosureDt`||  |
|`PartyRec.OrgPartyInfo.DisclosureData.DisclosureAckType`||This field specify the user-defined value opted by the party for sharing non-public information.|
|`PartyRec.OrgPartyInfo.NAICS`||  |
|`PartyRec.OrgPartyInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`PartyRec.OrgPartyInfo.Retention`|true<br>false|This field refers to the Name Retention code, specifies whether name record (party) retained or deleted if no accounts or tax addenda are attached to the name.|
|`PartyRec.OrgPartyInfo.SecretData`||  |
|`PartyRec.OrgPartyInfo.SecretData.SecretIdent`|MaidenName<br>PlaceOfBirth<br>County<br>FavoriteColor<br>FavoriteNumber<br>FavoriteDate<br>FreeFormMessage<br>FreeFormQuestion<br>FreeFormAnswer|More than one security question may be recorded in the core and if FreeFormQuestion is used, then the answer is provided in a seprate SecretData aggregate.|
|`PartyRec.OrgPartyInfo.SecretData.SecretValue`||  |
|`PartyRec.OrgPartyInfo.LastUpdateDt`||  |
|`PartyRec.OrgPartyInfo.ExemptOFAC`|true<br>false|Refers to suspect exemption. The true value of the field indicates  the customer is exempt from the ORM extract and reporting process, while false indicates the customer is not exempted from the OMR extract and reporting process.|
|`PartyRec.OrgPartyInfo.PartyOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|  |
|`PartyRec.OrgPartyInfo.TelebancPswd`||  |
|`PartyRec.OrgPartyInfo.RiskRanking`|None<br>Low<br>Medium<br>High|  |
|`PartyRec.OrgPartyInfo.Reminder`||  |
|`PartyRec.OrgPartyInfo.Reminder.ReminderCategory`|Tickler|  |
|`PartyRec.OrgPartyInfo.Reminder.ReminderInd`|true<br>false|This field refers to Contact Status Next Tickler Date. <br>This field is marked true when this date is present.|
|`PartyRec.OrgPartyInfo.TaxExempt`|NotTaxExempt<br>NonProfit<br>Government<br>TaxExempt|This field specify whether the party is exempted from tax or not. <br>For person party values used are "TaxExempt" or NonTaxExempt" and for Government Organizations/Bodies and Charitable Trusts with Interests Income values used are  'Government' or 'NonProfit' respectively.|
|`PartyRec.OrgPartyInfo.OrgData`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PhoneNum`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Modem<br>Other|  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PhoneNum.PhoneIdent`||Up to 10 occurrences of a phone number may be associated to a customer in the core.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PhoneNum.Phone`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PhoneNum.PreferredPhone`|true<br>false|This field refers to Primary phone indicator.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PhoneNum.PhoneDesc`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr`||Core allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal addresss share addressIdent with <br>primary or secondary address thus must be correctly related to the primary or secondary address record.<br><br>Also core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.OpenDt`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.RelationshipMgr`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.RelationshipMgr.RelationshipMgrIdent`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.OriginatingBranch`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.ResponsibleBranch`||This field refers to Accounting Branch associated to the party record.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.AddressIdent`||This field refers to address identifier shared by primary and secondary/ seasonal address related to it.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br>Tax<br><br><br>|***Conditionally required**<br>This field is required to be provided when adding new address or using existing address for new party.<br>Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.AddrUseEnumDesc`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.Addr1`||***Conditionally Required**<br>This field is required when a new address record is created. Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values available in the core:<br>"0" indicates names and addresses length up to 30 characters.<br>"1" indicates names and addresses length up to 40 characters.<br>"2" indicates names and addresses length up to 30 characters with Address line 2 enabled.<br>"3" indicates names and addresses length up to 40 characters with Address line 2 enabled.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.Addr2`||AddrLine2 is required if enabled under the name and addresses length option. Maximum length for this field is either 30 or 40 characters based upon the option values chosen for Address line 1.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.City`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.StateProv`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.PostalCode`||***Conditionally required**<br>This field is required to be provided, if new address record is created for the new party and the address country is United States.<br>Postal Code provides information about the ZIP code, if address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Please note postal codes for non-US/foreign address are simply a string of characters.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.CountryCode`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.CountryCode.CountryCodeValue`||This field in the core have client defined values for postal address|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.CountryCode.CountryCodeValueEnumDesc`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|In the core, user can have one primary addres and multiple secondary or seasonal address. Both primary with seasonal or secondary forms an address record. Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary address. Seasonal address always have a time frame.<br><br>In order to correctly relate the seasonal address with primary address or seasonal address with secondary address, seasonal address aggregate is presented right after primary or secondary  address, which it relates to.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.TimeFrame`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as “9999”.<br><br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as “9999”.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.Retention`|true<br>false|During the account opening process, new address record is created with retention code as true and if account opening workflow fails due to an error, ESF will be unable to delete the address, if created successfully prior to error and remain on the system even if the account is not created.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.CensusTract`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.CensusBlock`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.ForeignFlag`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.HandlingCode`||This field indicate the client defined special rounting information for the customer correspondence. |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|This field identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.MSACode`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.Email`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.Email.EmailIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.Email.EmailType`|Business<br>Person|  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.Email.EmailAddr`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.Email.PreferredEmail`|true<br>false|This field refers to primary contact indicator. |
|`PartyRec.OrgPartyInfo.OrgData.Contact.WebAddr`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.WebAddr.WebAddrIdent`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.WebAddr.WebAddrType`|Work|For Web URLs, the type will always be set to Work.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.WebAddr.WebAddrLink`||  |
|`PartyRec.OrgPartyInfo.OrgData.IssuedIdent`||  |
|`PartyRec.OrgPartyInfo.OrgData.IssuedIdent.IssuedIdentType`||Values are client defined.|
|`PartyRec.OrgPartyInfo.OrgData.IssuedIdent.IssuedIdentTypeEnumDesc`||  |
|`PartyRec.OrgPartyInfo.OrgData.IssuedIdent.IssuedIdentId`||  |
|`PartyRec.OrgPartyInfo.OrgData.IssuedIdent.IssuedIdentValue`||  |
|`PartyRec.OrgPartyInfo.OrgData.IssuedIdent.Issuer`||Values are client defined.|
|`PartyRec.OrgPartyInfo.OrgData.IssuedIdent.IssuerEnumDesc`||  |
|`PartyRec.OrgPartyInfo.OrgData.IssuedIdent.IssueDt`||  |
|`PartyRec.OrgPartyInfo.OrgData.IssuedIdent.ExpDt`||  |
|`PartyRec.OrgPartyInfo.OrgData.OrgName`||  |
|`PartyRec.OrgPartyInfo.OrgData.OrgName.NameType`|Primary<br>Secondary<br>|Core supports one Primary NameType and multiple Secondary NameType for the customer. <br>Secondary NameType also refers as Alternate name.|
|`PartyRec.OrgPartyInfo.OrgData.OrgName.NameIdent`||  |
|`PartyRec.OrgPartyInfo.OrgData.OrgName.Name`||  |
|`PartyRec.OrgPartyInfo.OrgData.OrgName.LegalName`||This field refers to IRS Name and is applicable when the NameType is Primary.|
|`PartyRec.OrgPartyInfo.OrgData.OrgName.NameFormat`|None<br>NonPersonal|This field refers to Name Format Code. <br><br>Please note for organisation party type,  only "None" and "NonPersonal" values are supported by the core where None implies that no special print handling is required and  'NonPersonal' implies how the system handles a non-personal name (business name) when performing sound search inquiries. The name is searched by display name, reading left to right, rather than last name, first name.|
|`PartyRec.PartyStatus`||  |
|`PartyRec.PartyStatus.PartyStatusCode`|Valid|  |
|`PartyRec.PartyStatus.EffDt`||  |
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
