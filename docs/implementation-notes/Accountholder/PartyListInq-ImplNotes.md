# Implementation Notes for Get Party List
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
|`RecCtrlIn`||  |
|`RecCtrlIn.MaxRecLimit`||  |
|`RecCtrlIn.Cursor`||  |
|`PartyListSel`||  |
|`PartyListSel.Name`||This field enable search by name using one of the NameSearchCode methods.<br>For any of these methods, the user may enter as many characters as in the name. <br>Please note the name characters in the field should be sent in Upper case to fetch the records.|
|`PartyListSel.NameSearchCode`|SoundexName<br>ExactName<br>PartialName|To search the party records based on NameSearchCode, below option can be used :<br><br>For Person Party: <br>Soundex Name : searches by family name (refers to short last name)<br>ExactName: searches by exact Full Name( refers to Name )<br>Partial Name : searches by exact Given Name (refers to short first name)<br><br>For Organisation Party: <br>Soundex Name : searches by Full name ( refers to Name) <br>Exact Name and Partial Name : searches by exact full name (refers to  Name)|
|`PartyListSel.ClientDefinedSearch`||  |
|`PartyListSel.ClientDefinedSearch.DataIdent`||This field refers to NameFlex field uesd as search criteria|
|`PartyListSel.ClientDefinedSearch.Value`||  |
|`PartyListSel.TaxIdent`||To search the records through TaxIdent, provide full Tax ID or last four digits of the ID.<br>Please note core allows multiple customers to have the same Tax ID|
|`PartyListSel.Phone`||Standard format supported by the core: <br>+IntlDialCode-AreaCode-PhoneNumber[+Extn]<br>For example :<br>+91-402-5551212+739<br><br>Please note phone extension is valid for work (business) phone only.|
|`PartyListSel.EmailAddr`||***Conditionally required**<br>This field is required if searching, party records on the basis of email address. <br>To retrieve the party records, the complete email address (for example:  JoeySmith@email.com) must be provided. The core supports partial search only  if the starting values of the email address are used. For example, using  email address JoeySmith@email.com. If the user enters Joey as the search criteria, core return customers who have email starting with Joey. If the user enters Smith, core return customers who have email starting with Smith but the customer with JoeySmith@email.com would not be returned in the scenario.|
|`PartyListSel.City`||If this field is used as a search criteria for the party records, then Name or TaxIdent fields must also be provided.|
|`PartyListSel.StateProv`||If this field is used to search the party records, then Name and TaxIdent fields must also be supplied in the field.<br>|
|`PartyListSel.PostalCode`||If this field is used to search the party records, then the Name or TaxIdent fields must also be supplied.<br>|
|`PartyListSel.BirthDt`||If this field is used as a search criteria for the party records, then Name or TaxIdent fields must also be provided.|
|`PartyListSel.OEDCode`||when searching through OED Code, Name or TaxIdentType field must also be supplied.|
|`PartyListSel.OriginatingBranch`||When searching through branch name, Name or TaxIdentType field must also be supplied.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`||  |
|`RecCtrlOut.SentRecCount`||  |
|`RecCtrlOut.Cursor`||  |
|`PartyListRec`||  |
|`PartyListRec.PartyKeys`||  |
|`PartyListRec.PartyKeys.PartyId`||  |
|`PartyListRec.PersonPartyListInfo`||  |
|`PartyListRec.PersonPartyListInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty|This field varies from the customer type and signifies the sub type of the customer type.<br>For example: If the customer is an Organization then PartyType 'LimitLiabilityC-Corp' or 'LimitLiabilityS-Corp' would provide information about the nature of Organization. Similarly, in case of a Person, the PartyType would indicate if the Customer is of a type 'Personal-Prospect' (say)|
|`PartyListRec.PersonPartyListInfo.Contact`||  |
|`PartyListRec.PersonPartyListInfo.Contact.PhoneNum`||  |
|`PartyListRec.PersonPartyListInfo.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Other<br>Modem|  |
|`PartyListRec.PersonPartyListInfo.Contact.PhoneNum.PhoneTypeEnumDesc`||  |
|`PartyListRec.PersonPartyListInfo.Contact.PhoneNum.PhoneIdent`||  |
|`PartyListRec.PersonPartyListInfo.Contact.PhoneNum.Phone`||Standard format supported by the core: <br>+IntlDialCode-AreaCode-PhoneNumber[+Extn]<br>For example :<br>+91-402-5551212+739<br><br>Please note phone extension is valid for work (business) phone only.|
|`PartyListRec.PersonPartyListInfo.Contact.PhoneNum.PreferredPhone`|true<br>false|  |
|`PartyListRec.PersonPartyListInfo.Contact.PhoneNum.PhoneDesc`||  |
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr`||Core allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal addresss share addressIdent with <br>primary or secondary address thus must be correctly related to the primary or secondary address record.<br><br>Also core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.AddressIdent`||This field refers to address identifier shared by primary and secondary/ seasonal address related to it.|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br><br><br>|***Conditionally required**<br>This field is required to be provided when adding new address or using existing address for new party.<br>Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.Addr1`||***Conditionally Required**<br>This field is required when a new address record is created. Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values available in the core:<br>"0" indicates names and addresses length up to 30 characters.<br>"1" indicates names and addresses length up to 40 characters.<br>"2" indicates names and addresses length up to 30 characters with Address line 2 enabled.<br>"3" indicates names and addresses length up to 40 characters with Address line 2 enabled.|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.Addr2`||AddrLine2 is required if enabled under the name and addresses length option. Maximum length for this field is either 30 or 40 characters based upon the option values chosen for Address line 1.|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.City`||  |
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.StateProv`||  |
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.PostalCode`||***Conditionally required**<br>This field is required to be provided, if new address record is created for the new party and the address country is United States.<br>Postal Code provides information about the ZIP code, if address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Please note postal codes for non-US/foreign address are simply a string of characters.|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.CountryCode`||  |
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeValue`||This field in the core have client defined values for postal address|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|In the core, user can have one primary addres and multiple secondary or seasonal address. Both primary with seasonal or secondary forms an address record. Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary address.|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.TimeFrame`||  |
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as "9999".<br><br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as "9999".|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.Retention`|true<br>false|During the account opening process, new address record is created with retention code as true and if account opening workflow fails due to an error, ESF will be unable to delete the address, if created successfully prior to error and remain on the system even if the account is not created.|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.CensusTract`||  |
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.CensusBlock`||  |
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.ForeignFlag`|true<br>false|  |
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.HandlingCode`||This field indicate the client defined special rounting information for the customer correspondence. |
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|This field identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.|
|`PartyListRec.PersonPartyListInfo.Contact.PostAddr.MSACode`||  |
|`PartyListRec.PersonPartyListInfo.Contact.Email`||  |
|`PartyListRec.PersonPartyListInfo.Contact.Email.EmailIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyListRec.PersonPartyListInfo.Contact.Email.EmailType`|Business<br>Home|  |
|`PartyListRec.PersonPartyListInfo.Contact.Email.EmailAddr`||  |
|`PartyListRec.PersonPartyListInfo.Contact.Email.PreferredEmail`|true<br>false|This field refers to primary contact indicator. |
|`PartyListRec.PersonPartyListInfo.Contact.WebAddr`||  |
|`PartyListRec.PersonPartyListInfo.Contact.WebAddr.WebAddrIdent`||Upto  10 occurrences of an email address and web URLs combined may be associated to a party.|
|`PartyListRec.PersonPartyListInfo.Contact.WebAddr.WebAddrType`|Work|For Web URLs, the type will always be set to Work.|
|`PartyListRec.PersonPartyListInfo.Contact.WebAddr.WebAddrLink`||  |
|`PartyListRec.PersonPartyListInfo.TaxIdentType`|None<br>SSN<br>EIN<br>Foreign<br>ITIN<br>ATIN|  |
|`PartyListRec.PersonPartyListInfo.TaxIdent`||  |
|`PartyListRec.PersonPartyListInfo.OriginatingBranch`||  |
|`PartyListRec.PersonPartyListInfo.PersonName`||  |
|`PartyListRec.PersonPartyListInfo.PersonName.NameType`|Primary<br>|The service provides only Primary NameType information.|
|`PartyListRec.PersonPartyListInfo.PersonName.NameIdent`||  |
|`PartyListRec.PersonPartyListInfo.PersonName.FullName`||  |
|`PartyListRec.PersonPartyListInfo.PersonName.FamilyName`||  |
|`PartyListRec.PersonPartyListInfo.PersonName.GivenName`||  |
|`PartyListRec.PersonPartyListInfo.PersonName.MiddleName`||  |
|`PartyListRec.PersonPartyListInfo.PersonName.LegalName`||This field refers to IRS Name |
|`PartyListRec.PersonPartyListInfo.BirthDt`||  |
|`PartyListRec.OrgPartyListInfo`||  |
|`PartyListRec.OrgPartyListInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty<br>|This field varies from the customer type and signifies the sub type of the customer type.<br>For example: If the customer is an Organization then PartyType 'LimitLiabilityC-Corp' or 'LimitLiabilityS-Corp' would provide information about the nature of Organization. Similarly, in case of a Person, the PartyType would indicate if the Customer is of a type 'Personal-Prospect' (say)|
|`PartyListRec.OrgPartyListInfo.Contact`||  |
|`PartyListRec.OrgPartyListInfo.Contact.PhoneNum`||  |
|`PartyListRec.OrgPartyListInfo.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Other<br>Modem|  |
|`PartyListRec.OrgPartyListInfo.Contact.PhoneNum.PhoneIdent`||  |
|`PartyListRec.OrgPartyListInfo.Contact.PhoneNum.Phone`||Standard format supported by the core: <br>+IntlDialCode-AreaCode-PhoneNumber[+Extn]<br>For example :<br>+91-402-5551212+739<br><br>Please note phone extension is valid for work (business) phone only.|
|`PartyListRec.OrgPartyListInfo.Contact.PhoneNum.PreferredPhone`||  |
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr`||Core allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal addresss share addressIdent with <br>primary or secondary address thus must be correctly related to the primary or secondary address record.<br><br>Also core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.AddressIdent`||This field refers to address identifier shared by primary and secondary/ seasonal address related to it.|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br><br><br>|***Conditionally required**<br>This field is required to be provided when adding new address or using existing address for new party.<br>Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.Addr1`||***Conditionally Required**<br>This field is required when a new address record is created. Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values available in the core:<br>"0" indicates names and addresses length up to 30 characters.<br>"1" indicates names and addresses length up to 40 characters.<br>"2" indicates names and addresses length up to 30 characters with Address line 2 enabled.<br>"3" indicates names and addresses length up to 40 characters with Address line 2 enabled.|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.Addr2`||AddrLine2 is required if enabled under the name and addresses length option. Maximum length for this field is either 30 or 40 characters based upon the option values chosen for Address line 1.|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.City`||  |
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.StateProv`||  |
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.PostalCode`||***Conditionally required**<br>This field is required to be provided, if new address record is created for the new party and the address country is United States.<br>Postal Code provides information about the ZIP code, if address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Please note postal codes for non-US/foreign address are simply a string of characters.|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.CountryCode`||  |
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeValue`||This field in the core have client defined values for postal address|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|In the core, user can have one primary addres and multiple secondary or seasonal address. Both primary with seasonal or secondary forms an address record. Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary address. Seasonal address always have a time frame.<br><br>In order to correctly relate the seasonal address with primary address or seasonal address with secondary address, seasonal address aggregate is presented right after primary or secondary  address, which it relates to.|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.TimeFrame`||  |
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as "9999".<br><br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as "9999".|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.Retention`|true<br>false|During the account opening process, new address record is created with retention code as true and if account opening workflow fails due to an error, ESF will be unable to delete the address, if created successfully prior to error and remain on the system even if the account is not created.|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.CensusTract`||  |
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.CensusBlock`||  |
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.ForeignFlag`|true<br>false|  |
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.HandlingCode`||This field indicate the client defined special rounting information for the customer correspondence. |
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|This field identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.|
|`PartyListRec.OrgPartyListInfo.Contact.PostAddr.MSACode`||  |
|`PartyListRec.OrgPartyListInfo.Contact.Email`||  |
|`PartyListRec.OrgPartyListInfo.Contact.Email.EmailIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyListRec.OrgPartyListInfo.Contact.Email.EmailType`|Business<br>Home|  |
|`PartyListRec.OrgPartyListInfo.Contact.Email.EmailAddr`||  |
|`PartyListRec.OrgPartyListInfo.Contact.Email.PreferredEmail`|true<br>false|This field refers to primary contact indicator. |
|`PartyListRec.OrgPartyListInfo.Contact.WebAddr`||  |
|`PartyListRec.OrgPartyListInfo.Contact.WebAddr.WebAddrIdent`||Upto  10 occurrences of an email address and web URLs combined may be associated to a party.|
|`PartyListRec.OrgPartyListInfo.Contact.WebAddr.WebAddrType`|Work|For Web URLs, the type will always be set to Work.|
|`PartyListRec.OrgPartyListInfo.Contact.WebAddr.WebAddrLink`||  |
|`PartyListRec.OrgPartyListInfo.TaxIdentType`|None<br>SSN<br>EIN<br>Foreign<br>ITIN<br>ATIN|  |
|`PartyListRec.OrgPartyListInfo.TaxIdent`||  |
|`PartyListRec.OrgPartyListInfo.OriginatingBranch`||  |
|`PartyListRec.OrgPartyListInfo.OrgName`||  |
|`PartyListRec.OrgPartyListInfo.OrgName.NameType`|Primary<br>Secondary|  |
|`PartyListRec.OrgPartyListInfo.OrgName.NameIdent`||  |
|`PartyListRec.OrgPartyListInfo.OrgName.Name`||  |
|`PartyListRec.OrgPartyListInfo.OrgName.LegalName`||This field refers to IRS Name |
|`PartyListRec.PartyStatus`||  |
|`PartyListRec.PartyStatus.PartyStatusCode`|Valid|  |
|`PartyListRec.PartyStatus.EffDt`||  |
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
