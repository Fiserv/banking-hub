# Implementation Notes for Add Addr
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`|||
|`AddrInfo`|||
|`AddrInfo.AddrRelRef`||Use this aggregate to add a new address record to existing party/parties. The address record can be added as a secondary address only.|
|`AddrInfo.AddrRelRef.PartyKeys`|||
|`AddrInfo.AddrRelRef.PartyKeys.PartyId`|||
|`AddrInfo.AddrRelRef.AddrUse`|Home<br>Personal<br>Business<br>|  |
|`AddrInfo.PostAddr`||This aggregate is used to modify the address record either primary or seasonal address.|
|`AddrInfo.PostAddr.OpenDt`||***Conditionally Required**<br>This field is required to be provided when creating new address record. However, this is not applicable for the Seasonal Address type.|
|`AddrInfo.PostAddr.RelationshipMgr`|||
|`AddrInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`||This field is not applicable for the Seasonal Address type|
|`AddrInfo.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`AddrInfo.PostAddr.OriginatingBranch`||*** Conditionally Required**<br>Originating Branch refers to Branch Region and is required to be provided when creating new Address record. This field is not applicable for the Seasonal Address type.|
|`AddrInfo.PostAddr.ResponsibleBranch`||Responsible Branch refers to accounting branch. This field is not applicable for the Seasonal Address type.|
|`AddrInfo.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`AddrInfo.PostAddr.Addr1`||***Conditionally Required**<br>This field is required when a new address record is created. Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values defined under the Miscellaneous specification.<br><br>"0" indicates names and addresses length up to 30 characters<br>"1" indicates names and addresses length up to 40 characters<br>"2" indicates names and addresses length up to 30 characters and two address lines are available<br>"3" indicates names and addresses length up to 40 characters and two address lines are available|
|`AddrInfo.PostAddr.Addr2`||This field is required if it is enabled under the Address and Name Length Option under  Miscellaneous specification.<br><br>Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values defined under the Miscellaneous  specification.<br><br>"0" indicates names and addresses length up to 30 characters<br>"1" indicates names and addresses length up to 40 characters<br>"2" indicates names and addresses length up to 30 characters and two address lines are available<br>"3" indicates names and addresses length up to 40 characters and two address lines are available|
|`AddrInfo.PostAddr.City`||Maximum allowed character length is 20 (including spaces). For longer city name, you can use abbreviate the city name to fit the criteria. For example, city name "Rancho Santa Margarita" can be abbreviated as "Rancho Santa Mrgrta" or "Rancho S Margarita"<br><br>Note: A total length of 40 characters for City, StateProv and PostalCode appended together (including spaces) is acceptable.|
|`AddrInfo.PostAddr.StateProv`||***Conditionally Required**<br>This field is required if country is United States. |
|`AddrInfo.PostAddr.PostalCode`||If address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 |
|`AddrInfo.PostAddr.CountryCode`|||
|`AddrInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode||
|`AddrInfo.PostAddr.CountryCode.CountryCodeValue`||  |
|`AddrInfo.PostAddr.AddrType`|Primary<br>Seasonal|This field specify the type of address. In the core address record can have Primary address and Seasonal address, both forms one address record therefore shares same address identifier.<br>Primary address is required when creating a new address record where seasonal address is optional and if needed always related to the primary address.|
|`AddrInfo.PostAddr.TimeFrame`|||
|`AddrInfo.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore core only stores Start month and Start Day. Year can be provided as "9999".|
|`AddrInfo.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as "9999".|
|`AddrInfo.PostAddr.Retention`|true<br>false|  |
|`AddrInfo.PostAddr.CensusTract`||  |
|`AddrInfo.PostAddr.CensusBlock`||  |
|`AddrInfo.PostAddr.ForeignFlag`|true<br>false||
|`AddrInfo.PostAddr.HandlingCode`||  |
|`AddrInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>|  |
|`AddrInfo.PostAddr.MSACode`||  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`AddrStatusRec`|||
|`AddrStatusRec.AddrKeys`|||
|`AddrStatusRec.AddrKeys.AddrId`|||
|`AddrStatusRec.AddrStatus`|||
|`AddrStatusRec.AddrStatus.AddrStatusCode`|Valid||
|`AddrStatusRec.AddrStatus.EffDt`|||


<!-- type: tab -->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`|||
|`AddrInfo`||Service is used to add new alternate address (physical, seasonal and secondary) that can be used by customer.<br>Use AddrMod service to modify an existing primary address.<br>Use PartyMod or AcctMod service to set up an address as address to use for customer/account corrspondence/customers physical address.|
|`AddrInfo.AddrRelRef`|||
|`AddrInfo.AddrRelRef.PartyKeys`|||
|`AddrInfo.AddrRelRef.PartyKeys.PartyId`||***Required**<br>Alternate address of the party is stored as part of customer record.|
|`AddrInfo.PostAddr`|||
|`AddrInfo.PostAddr.AddressIdent`||***Required**<br>Field refers to alternate address code and used to identify new alternate address. AddressIdent value (1-99) is to be sent for each alternate address and it is not required for values to be sequential.|
|`AddrInfo.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`AddrInfo.PostAddr.Addr1`||Field refers to mailing address line i.e., street address, rural route or box number where customer correspondence is mailed. Maximum length of this field is 40 characters.|
|`AddrInfo.PostAddr.FullName1`||Field refers to Name/Address line and would replace Addr2 in future releases. Line for this field is optional and is printed below the name and above mailing address (Addr1) on correspondence.<br>Maximum length of this field is 40 characters.<br>Client application should send either FullName1 or Addr2 in single ESF request.|
|`AddrInfo.PostAddr.Addr2`||FullName1 and Addr2, both fields serve same purpose and, it is recommended to use FullName1 instead of Addr2, as Addr2 can be eliminated in future ESF releases.<br>Client application should send either FullName1 or Addr2 in single ESF request.|
|`AddrInfo.PostAddr.City`||Maximum length of this field is 26 characters.<br>|
|`AddrInfo.PostAddr.StateProv`||Field refers to two-character abbreviation of a state in US. State is required for US address.|
|`AddrInfo.PostAddr.PostalCode`||If address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits<br>Examples: 32714-1234 or 32714-0000<br>If ForeignFlag is true, any value up to 10 characters is accepted.<br>If ForeignFlag is false, format of ZIP code consists of 5 or 10 characters of ZIP code, a hyphen, and 4 additional characters. For example, 32714-1234.<br>ZIP code for US address and postal code for non-US address is required.<br>|
|`AddrInfo.PostAddr.CountryCode`|||
|`AddrInfo.PostAddr.CountryCode.CountryCodeSource`||XREF rule LMXRL0001529 can be configured in ESF studio to indicate country code source standard used by a financial institution and client application.|
|`AddrInfo.PostAddr.CountryCode.CountryCodeValue`||Field is applicable for international (non-US) address.|
|`AddrInfo.PostAddr.AddrType`|Secondary<br>Seasonal|Secondary address is physical address that is different from primary address. Alternate address with a TimeFrame (start and end date) is a seasonal address.|
|`AddrInfo.PostAddr.TimeFrame`|||
|`AddrInfo.PostAddr.TimeFrame.StartDt`|||
|`AddrInfo.PostAddr.TimeFrame.EndDt`|||
|`AddrInfo.PostAddr.ExpDt`||***Conditionally Required**<br>Field is required to be provided if TimeFrame from PostAddr aggregate is sent in  the request. Date in this field refers to the date when schedule of alternate address expires.|
|`AddrInfo.PostAddr.ContactMethod`||Field refers to the method used to notify the financial institution about the address change. Values of this field are client-defined.|
|`AddrInfo.PostAddr.Comment`||Field refers to the comments above address. Maximum 25 characters are accepted.|
|`AddrInfo.PostAddr.ForeignFlag`||Field refers to foreign address i.e., non-US address.|
|`AddrInfo.PostAddr.MaintDt`|||
|`AddrInfo.PostAddr.PhoneNum`|||
|`AddrInfo.PostAddr.PhoneNum.PhoneType`|ContactPhone||
|`AddrInfo.PostAddr.PhoneNum.PhoneIdent`||Field is applicable for the secondary address only and identifies the phone numbers of a customer that are used for secondary address. Phone record should should be available for a customer.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`AddrStatusRec`|||
|`AddrStatusRec.AddrKeys.PartyKeys`||AddressIdent along with PartyId identifies the alternate address record.|
|`AddrStatusRec.AddrKeys.PartyKeys.PartyId`|||
|`AddrStatusRec.AddrKeys.AddressIdent`||Field refers to alternate address code.|
|`AddrStatusRec.AddrStatus`|||
|`AddrStatusRec.AddrStatus.AddrStatusCode`|||
|`AddrStatusRec.AddrStatus.EffDt`|||


<!-- type: tab -->

#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
