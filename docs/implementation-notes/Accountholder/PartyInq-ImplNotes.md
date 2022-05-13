# Implementation Notes for Get Party
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
|`PartySel`||Details that are used to perform a Party (name) inquiry.|
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
|`PartyRec.PersonPartyInfo.EstablishedDt`||Creation date of name(party) record.|
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
|`PartyRec.PersonPartyInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Value of Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`PartyRec.PersonPartyInfo.OEDCode`||  |
|`PartyRec.PersonPartyInfo.OEDCodeEnumDesc`||  |
|`PartyRec.PersonPartyInfo.ClientDefinedData`||Service provider requires the meta data to be sent along with the user-entered data. <br>DataClassType supported for : <br>Party or a Loan Account is 'Name' i.e. 50.<br>DDA/SDA/CDA Account Types only is 'Portfolio' i.e. 0. (not used for this operation)|
|`PartyRec.PersonPartyInfo.ClientDefinedData.DataIdent`||Value of the Field Code.|
|`PartyRec.PersonPartyInfo.ClientDefinedData.DataType`|Alpha<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol<br>|  |
|`PartyRec.PersonPartyInfo.ClientDefinedData.Value`||  |
|`PartyRec.PersonPartyInfo.ClientDefinedData.DataLength`||  |
|`PartyRec.PersonPartyInfo.ClientDefinedData.ExpDt`||  |
|`PartyRec.PersonPartyInfo.ClientDefinedData.Desc`||Field label|
|`PartyRec.PersonPartyInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`PartyRec.PersonPartyInfo.ClientDefinedData.SearchFlag`|true<br>false|  |
|`PartyRec.PersonPartyInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty<br>|Customer type, indicating the organization-party relationship with the financial institute.|
|`PartyRec.PersonPartyInfo.TaxDataInfo`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.TaxIdentType`|None<br>SSN<br>Foreign<br>ITIN<br>ATIN|Code that specify whether the Tax Identification Number is a Social Security Number (SSN), Employer Identification Number (EIN), a foreign tax ID number, an Adoption Taxpayer Identification Number (ATIN), or an Individual Taxpayer Identification Number (ITIN).<br>Service provider allows setup of multiple customers with the same SSN or EIN, therefore does not validate the SSN or EIN sent in the request for duplicity.|
|`PartyRec.PersonPartyInfo.TaxDataInfo.TaxIdent`||Tax Id Number, field is passed through as it is received in the service provider's response. |
|`PartyRec.PersonPartyInfo.TaxDataInfo.TaxIdentVerified`|true<br>false|  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.TaxIdentVerifiedDt`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.TaxIdentVerifiedAttempts`||Tax ID verification attempts.|
|`PartyRec.PersonPartyInfo.TaxDataInfo.OtherTaxIdent`||Foreign Tax Identification Number, that is on IRS Form 1042-S|
|`PartyRec.PersonPartyInfo.TaxDataInfo.BNotice1Dt`||IRS 1st B Notice.  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.BNotice2Dt`||IRS 2nd B Notice.  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.ForeignTaxForms`|None<br>1042S<br>W8<br>1042SandW8|Foreign tax form code.|
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.IncomeCode`||Values are client defined.|
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.TaxRate`||Value of the tax rate entered is sent in the core but it is compared with the current rates defined for the IRS form 1042-S.|
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.ExemptionCode`||Values are client defined.|
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientStateProv`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode`||  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode.CountryCodeSource`|IRS|  |
|`PartyRec.PersonPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode.CountryCodeValue`||Country Tax Code|
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
|`PartyRec.PersonPartyInfo.DisclosureData.DisclosureAckType`||User-defined value opted by the party for sharing non-public information.|
|`PartyRec.PersonPartyInfo.NAICS`||  |
|`PartyRec.PersonPartyInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`PartyRec.PersonPartyInfo.Retention`|true<br>false|Name Retention code, specifies whether name record (party) retained or deleted if no accounts or tax addenda are attached to the name.|
|`PartyRec.PersonPartyInfo.SecretData`||  |
|`PartyRec.PersonPartyInfo.SecretData.SecretIdent`|MaidenName<br>PlaceOfBirth<br>County<br>FavoriteColor<br>FavoriteNumber<br>FavoriteDate<br>FreeFormMessage<br>FreeFormQuestion<br>FreeFormAnswer|More than one security question may be recorded in the core and if FreeFormQuestion is used, then the answer is provided in a seprate SecretData aggregate.|
|`PartyRec.PersonPartyInfo.SecretData.SecretValue`||  |
|`PartyRec.PersonPartyInfo.LastUpdateDt`||  |
|`PartyRec.PersonPartyInfo.ExemptOFAC`|true<br>false|Suspect exemption, true value of the field indicates  the customer is exempt from the ORM extract and reporting process, while false indicates the customer is not exempted from the OMR extract and reporting process.|
|`PartyRec.PersonPartyInfo.PartyOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|Up to five additional open methods can be client-defined.|
|`PartyRec.PersonPartyInfo.TelebancPswd`||  |
|`PartyRec.PersonPartyInfo.RiskRanking`|None<br>Low<br>Medium<br>High|Additional values are client-defined.|
|`PartyRec.PersonPartyInfo.Reminder`||  |
|`PartyRec.PersonPartyInfo.Reminder.ReminderCategory`|Tickler|  |
|`PartyRec.PersonPartyInfo.Reminder.ReminderInd`|true<br>false|Contact status next tickler date. <br>This field is marked true when this date is present.|
|`PartyRec.PersonPartyInfo.TaxExempt`|NotTaxExempt<br>TaxExempt|Value that specify whether the party is exempted from tax or not. <br><br>Additional values other than defined static values can be client-defined.<br>Client-defined values passed by the consumer are agreed by the financial institute.|
|`PartyRec.PersonPartyInfo.PersonData`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PhoneNum`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Modem<br>Other|Phone type as "other" means interanational phone type.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PhoneNum.PhoneIdent`||Up to 10 occurrences of a phone number may be associated to a customer.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PhoneNum.Phone`||Standard format supported by the core: <br>+IntlDialCode-AreaCode-PhoneNumber[+Extn]<br>For example :<br>+91-402-5551212+739<br><br>Phone extension is valid for work (business) phone only.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PhoneNum.PreferredPhone`|true<br>false|This field refers to Primary phone indicator.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PhoneNum.PhoneDesc`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr`||Service provider allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal address share addressIdent with <br>primary or secondary address thus must be correctly related to it, ESF displays them as a seprate instances.<br><br>Each of address types can have different uses, example:  Personal, Home, Business and other user defined address uses. <br>Service provider uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/secondary address related to primary address is also home.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.OpenDt`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.RelationshipMgr`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.RelationshipMgr.RelationshipMgrIdent`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Value of Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.OriginatingBranch`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.ResponsibleBranch`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.AddressIdent`||Address identifier shared by primary and secondary/ seasonal address related to it.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br>Tax<br><br>|Relationship Code, additional address use values are client defined.<br>Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Premier uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.AddrUseEnumDesc`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.Addr1`||***Conditionally Required**<br>This field is required when a new address record is created. Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values available in the core:<br>"0" indicates names and addresses length up to 30 characters.<br>"1" indicates names and addresses length up to 40 characters.<br>"2" indicates names and addresses length up to 30 characters with Address line 2 enabled.<br>"3" indicates names and addresses length up to 40 characters with Address line 2 enabled.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.Addr2`||AddrLine2 is required if enabled under the name and addresses length option. Maximum length for this field is either 30 or 40 characters based upon the option values chosen for Address line 1.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.City`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.StateProv`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.PostalCode`||Postal Code provides information about the ZIP code, if address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Postal codes for non-US/foreign address are simply a string of characters.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.CountryCode`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.CountryCode.CountryCodeValue`||Values for postal address are client-defined.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.CountryCode.CountryCodeValueEnumDesc`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|Service provider support primary, multiple secondary or seasonal address types. Both primary with seasonal/secondary forms an address record. Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary address. |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.TimeFrame`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.TimeFrame.StartDt`||Applicable for Seasonal Address type. <br>Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as “9999”.<br>The month and the day of the month will show the actual Seasonal address start date.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.TimeFrame.EndDt`||Applicable for Seasonal Address Type. <br>Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as “9999”.<br>The month and the day of the month will show the actual Seasonal address  end date.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.Retention`|true<br>false|Retention code indicated if Address record should be retained or can be deleted when no accounts, tax addenda, or any other relationships exist for the address record.<br>During the account opening process, new address record is created with retention code as true and if account opening workflow fails due to an error, ESF will be unable to delete the address, if created successfully prior to error and remain on the system even if the account is not created.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.CensusTract`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.CensusBlock`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.ForeignFlag`|true<br>false|  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.HandlingCode`||Code that indicate the client defined special rounting information for the customer correspondence. |
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|Option that identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.PostAddr.MSACode`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.Email`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.Email.EmailIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.Email.EmailType`|Business<br>Person|  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.Email.EmailAddr`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.Email.PreferredEmail`|true<br>false|Primary contact indicator. |
|`PartyRec.PersonPartyInfo.PersonData.Contact.WebAddr`||  |
|`PartyRec.PersonPartyInfo.PersonData.Contact.WebAddr.WebAddrIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a party.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.WebAddr.WebAddrType`|Work|For Web URLs, the type will always be set to Work.|
|`PartyRec.PersonPartyInfo.PersonData.Contact.WebAddr.WebAddrLink`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.IssuedIdentType`||ID type, values are client defined.|
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.IssuedIdentTypeEnumDesc`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.IssuedIdentId`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.IssuedIdentValue`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.Issuer`||Issued By, values are client-defined|
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.IssuerEnumDesc`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.IssueDt`||  |
|`PartyRec.PersonPartyInfo.PersonData.IssuedIdent.ExpDt`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName.NameType`|Primary<br>Secondary<br>|Service provider supports one primary name and multiple instances of secondary name.<br>Secondary refers to alternate name.|
|`PartyRec.PersonPartyInfo.PersonData.PersonName.NameIdent`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName.FullName`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName.FamilyName`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName.GivenName`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName.MiddleName`||  |
|`PartyRec.PersonPartyInfo.PersonData.PersonName.NameSuffix`|II<br>III<br>IV<br>Jr.<br>Sr.<br>|Generation code, values are client-defined and may change as per financial institute.|
|`PartyRec.PersonPartyInfo.PersonData.PersonName.LegalName`||IRS name of a person and is applicable when the NameType is "Primary".|
|`PartyRec.PersonPartyInfo.PersonData.PersonName.NameFormat`|None|Name format code, indicating if the name line is printed on certain mailings for personal customers. <br><br>For person party type,  only "None" value is supported.<br>None implies that no special print handling is required.|
|`PartyRec.PersonPartyInfo.BirthDt`||  |
|`PartyRec.PersonPartyInfo.DeceasedDt`||  |
|`PartyRec.PersonPartyInfo.Gender`|Male<br>Female<br>Unknown|  |
|`PartyRec.PersonPartyInfo.ImmigrationStat`||Residency Status of a person and values are client defined.|
|`PartyRec.PersonPartyInfo.Race`||Service provider expects single digit numeric client-defined values.|
|`PartyRec.OrgPartyInfo`||  |
|`PartyRec.OrgPartyInfo.PartyPref`||  |
|`PartyRec.OrgPartyInfo.PartyPref.Language`|UseInstitution<br>English<br>Spanish|  |
|`PartyRec.OrgPartyInfo.EstablishedDt`||Creation date of name(party) record.|
|`PartyRec.OrgPartyInfo.OriginatingBranch`||Branch Region associated to the customer's name record.<br>Branches are client-defined.|
|`PartyRec.OrgPartyInfo.OriginatingBranchEnumDesc`||  |
|`PartyRec.OrgPartyInfo.ResponsibleBranch`||Accounting Branch associated to the party record.|
|`PartyRec.OrgPartyInfo.ResponsibleBranchEnumDesc`||  |
|`PartyRec.OrgPartyInfo.LastContactDt`||Date of the most recent Contact addenda (the highest numbered contact Addenda Number).|
|`PartyRec.OrgPartyInfo.CreditRisk`||  |
|`PartyRec.OrgPartyInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>CreditScore<br>|  |
|`PartyRec.OrgPartyInfo.CreditRisk.InternalScore`||  |
|`PartyRec.OrgPartyInfo.RelationshipMgr`||  |
|`PartyRec.OrgPartyInfo.RelationshipMgr.RelationshipMgrIdent`||  |
|`PartyRec.OrgPartyInfo.RelationshipMgr.RelationshipMgrIdentEnumDesc`||  |
|`PartyRec.OrgPartyInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Value of Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`PartyRec.OrgPartyInfo.OEDCode`||Values are client defined.|
|`PartyRec.OrgPartyInfo.OEDCodeEnumDesc`||  |
|`PartyRec.OrgPartyInfo.ClientDefinedData`||  |
|`PartyRec.OrgPartyInfo.ClientDefinedData.DataClassType`|Contact<br>Name|Value that specifies application to which the field code belong. <br>Name or Contact flex are retrieved in this opertaion.|
|`PartyRec.OrgPartyInfo.ClientDefinedData.DataIdent`||Value of the Field Code.|
|`PartyRec.OrgPartyInfo.ClientDefinedData.DataType`|Alpha<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol<br>|  |
|`PartyRec.OrgPartyInfo.ClientDefinedData.Value`||  |
|`PartyRec.OrgPartyInfo.ClientDefinedData.DataLength`||  |
|`PartyRec.OrgPartyInfo.ClientDefinedData.ExpDt`||  |
|`PartyRec.OrgPartyInfo.ClientDefinedData.Desc`||Label of the field.|
|`PartyRec.OrgPartyInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`PartyRec.OrgPartyInfo.ClientDefinedData.SearchFlag`|true<br>false|  |
|`PartyRec.OrgPartyInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty|Customer type, indicating the customer's relationship with the financial institute.|
|`PartyRec.OrgPartyInfo.TaxDataInfo`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.TaxIdentType`|EIN|Code that specify whether the Tax Identification Number is a Social Security Number (SSN), Employer Identification Number (EIN), a foreign tax ID number, an Adoption Taxpayer Identification Number (ATIN), or an Individual Taxpayer Identification Number (ITIN).<br><br>Service provider allows setup of multiple customers with the same SSN or EIN, therefore does not validate the SSN or EIN sent in the request for duplicity.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.TaxIdent`||Tax Id number,  passed through as it is received in the service provider's response. |
|`PartyRec.OrgPartyInfo.TaxDataInfo.TaxIdentVerified`|true<br>false|  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.TaxIdentVerifiedDt`||For an unverified tax id, the first date an attempt was made to verify the tax ID number, or for a verified tax id, the date the tax ID number was verified.  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.TaxIdentVerifiedAttempts`||Tax ID verification attempts.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.OtherTaxIdent`||Foreign Tax Identification Number, that is on IRS Form 1042-S|
|`PartyRec.OrgPartyInfo.TaxDataInfo.BNotice1Dt`||IRS 1st B Notice.  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.BNotice2Dt`||IRS 2nd B Notice.  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.ForeignTaxForms`|None<br>1042S<br>W8<br>1042SandW8|Foreign tax code|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.IncomeCode`||Values are client defined.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.TaxRate`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.ExemptionCode`||Values are client defined.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientStateProv`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode.CountryCodeSource`|IRS|  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientCountryCode.CountryCodeValue`||Country Tax Code|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry.CountryCodeSource`|IRS|  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientResidenceCountry.CountryCodeValue`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientPostalCode`||PostalCode provides the information for the ZIP, as well as the +4 code. The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000.<br><br>Postal codes that are not ZIP+4 are simply a string of characters.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.ForeignWithholdingType`|None<br>Chapter3<br>Chapter4|  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.Chapter3Status`||Values are client defined.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.Chapter4FATCAStatus`||Values are client defined.|
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.RecipientGIIN`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.W8FormType`|None<br>W8-BEN<br>W8-BEN-E<br>W8-ECI<br>W8-EXP<br>W8-IMY|  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.ForeignCertDt`||  |
|`PartyRec.OrgPartyInfo.TaxDataInfo.ForeignTaxData.ForeignExpDt`||  |
|`PartyRec.OrgPartyInfo.DisclosureData`||  |
|`PartyRec.OrgPartyInfo.DisclosureData.DisclosureDt`||  |
|`PartyRec.OrgPartyInfo.DisclosureData.DisclosureAckType`||Client-defined code that indicates the customer's preference for sharing non-public information.|
|`PartyRec.OrgPartyInfo.NAICS`||  |
|`PartyRec.OrgPartyInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|Withholding code.|
|`PartyRec.OrgPartyInfo.Retention`|true<br>false|Name Retention code, specifies whether name record (party) retained or deleted if no accounts or tax addenda are attached to the name.|
|`PartyRec.OrgPartyInfo.SecretData`||  |
|`PartyRec.OrgPartyInfo.SecretData.SecretIdent`|MaidenName<br>PlaceOfBirth<br>County<br>FavoriteColor<br>FavoriteNumber<br>FavoriteDate<br>FreeFormMessage<br>FreeFormQuestion<br>FreeFormAnswer|More than one security question may be recorded in the core and if FreeFormQuestion is used, then the answer is provided in a seprate SecretData aggregate.|
|`PartyRec.OrgPartyInfo.SecretData.SecretValue`||  |
|`PartyRec.OrgPartyInfo.LastUpdateDt`||Date Last Changed, the date on which file maintenance last occurred on the name record.|
|`PartyRec.OrgPartyInfo.ExemptOFAC`|true<br>false|Suspect exemption, true value of the field indicates  the customer is exempt from the ORM extract and reporting process, while false indicates the customer is not exempted from the OMR extract and reporting process.|
|`PartyRec.OrgPartyInfo.PartyOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|Up to five additional open methods can be client-defined.|
|`PartyRec.OrgPartyInfo.TelebancPswd`||  |
|`PartyRec.OrgPartyInfo.RiskRanking`|None<br>Low<br>Medium<br>High|Additional values are client-defined.|
|`PartyRec.OrgPartyInfo.Reminder`||  |
|`PartyRec.OrgPartyInfo.Reminder.ReminderCategory`|Tickler|  |
|`PartyRec.OrgPartyInfo.Reminder.ReminderInd`|true<br>false|Contact Status Next Tickler Date. <br>This field is marked true when this date is present.|
|`PartyRec.OrgPartyInfo.TaxExempt`|NotTaxExempt<br>NonProfit<br>Government<br>TaxExempt|Value that specify whether the party is exempted from tax or not. <br>For Government Organizations/Bodies and charitable trusts with interests income values use "Government" or "NonProfit" respectively.<br><br>Additional values other than defined static values can be client-defined.<br>Client-defined values passed by the consumer are agreed by the financial institute.|
|`PartyRec.OrgPartyInfo.OrgData`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PhoneNum`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Modem<br>Other|  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PhoneNum.PhoneIdent`||Up to 10 occurrences of a phone number may be associated to a customer in the core.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PhoneNum.Phone`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PhoneNum.PreferredPhone`|true<br>false|Primary phone indicator.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PhoneNum.PhoneDesc`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr`||Service provider allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal address share addressIdent with <br>primary or secondary address thus must be correctly related to it, ESF displays them as a seprate instances.<br><br>Each of address types can have different uses, example:  Personal, Home, Business and other user defined address uses. <br>Service provider uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/secondary address related to primary address is also home.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.OpenDt`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.RelationshipMgr`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.RelationshipMgr.RelationshipMgrIdent`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Value of Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.OriginatingBranch`||Branch Region associated to the address record.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.ResponsibleBranch`||Accounting Branch associated to the party record.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.AddressIdent`||Address identifier shared by primary and secondary/ seasonal address related to it.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br>Tax<br><br><br>|Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Premier uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.<br>Additional address use values are client defined.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.AddrUseEnumDesc`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.Addr1`||***Conditionally Required**<br>This field is required when a new address record is created. Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values available in the core:<br>"0" indicates names and addresses length up to 30 characters.<br>"1" indicates names and addresses length up to 40 characters.<br>"2" indicates names and addresses length up to 30 characters with Address line 2 enabled.<br>"3" indicates names and addresses length up to 40 characters with Address line 2 enabled.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.Addr2`||AddrLine2 is required if enabled under the name and addresses length option. Maximum length for this field is either 30 or 40 characters based upon the option values chosen for Address line 1.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.City`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.StateProv`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.PostalCode`||Postal Code provides information about the ZIP code, if address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Postal codes for non-US/foreign address are simply a string of characters.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.CountryCode`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.CountryCode.CountryCodeValue`||Values for postal address are client-defined.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.CountryCode.CountryCodeValueEnumDesc`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|Service provider supports one primary address and multiple secondary or seasonal address. <br>Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary address. |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.TimeFrame`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.TimeFrame.StartDt`||Applicable for Seasonal Address type. <br>Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as “9999”.<br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.TimeFrame.EndDt`||Applicable for Seasonal Address Type. <br>Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as “9999”.<br>The month and the day of the month will show the actual Seasonal address  end date.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.Retention`|true<br>false|Retention code indicates if address record should be retained or can be deleted when no accounts, tax addenda, or any other relationships exist for the address record.<br>During the account opening process, new address record is created with retention code as true and if account opening workflow fails due to an error, ESF will be unable to delete the address, if created successfully prior to error and remain on the system even if the account is not created.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.CensusTract`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.CensusBlock`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.ForeignFlag`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.HandlingCode`||Code that indicate the client defined special rounting information for the customer correspondence. |
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|Option that identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.PostAddr.MSACode`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.Email`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.Email.EmailIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyRec.OrgPartyInfo.OrgData.Contact.Email.EmailType`|Business<br>Person|  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.Email.EmailAddr`||  |
|`PartyRec.OrgPartyInfo.OrgData.Contact.Email.PreferredEmail`|true<br>false|Primary contact indicator. |
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
|`PartyRec.OrgPartyInfo.OrgData.OrgName.NameType`|Primary<br>Secondary<br>|Service provider supports one primary name and multiple secondary name instances for the customer. <br>"Secondary" refers to alternate name.|
|`PartyRec.OrgPartyInfo.OrgData.OrgName.NameIdent`||  |
|`PartyRec.OrgPartyInfo.OrgData.OrgName.Name`||  |
|`PartyRec.OrgPartyInfo.OrgData.OrgName.LegalName`||IRS name of a person and is applicable when the NameType is "Primary".|
|`PartyRec.OrgPartyInfo.OrgData.OrgName.NameFormat`|None<br>NonPersonal|Name Format Code. <br><br>For organisation party type,  only "None" and "NonPersonal" values are supported.<br>None implies that no special handling is required and  'NonPersonal' implies that this is a business customer name.|
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
