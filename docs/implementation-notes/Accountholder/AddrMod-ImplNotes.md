# Implementation Notes for Update Addr
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, 
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
|`AddrKeys`|||
|`AddrKeys.AddrId`|||
|`AddrInfo`|||
|`AddrInfo.PostAddr`||Address record can have Primary address and Seasonal address, both forms one address record therefore shares same address identifier.<br><br>This service allow to modify either primary and/or seasonal address details.|
|`AddrInfo.PostAddr.OpenDt`||***Conditionally Required**<br>This field is required to be provided when creating new address record. However, this is not applicable for the Seasonal Address type.|
|`AddrInfo.PostAddr.RelationshipMgr`|||
|`AddrInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`||Not applicable for the Seasonal Address type|
|`AddrInfo.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Values for this field: <br>- Officer refers to responsibility code <br>- Referral Officer refers to referral responsibility code|
|`AddrInfo.PostAddr.OriginatingBranch`||*** Conditionally Required**<br>Branch Region, required to be provided when creating new Address record. <br>This field is not applicable for the seasonal address type.|
|`AddrInfo.PostAddr.ResponsibleBranch`||Accounting branch associated with the address record.<br>Not applicable for the seasonal address type.|
|`AddrInfo.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`AddrInfo.PostAddr.Addr1`||***Conditionally Required**<br>Required when a new address record is created. Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values defined under the Miscellaneous specification.<br><br>"0" indicates names and addresses length up to 30 characters<br>"1" indicates names and addresses length up to 40 characters<br>"2" indicates names and addresses length up to 30 characters and two address lines are available<br>"3" indicates names and addresses length up to 40 characters and two address lines are available|
|`AddrInfo.PostAddr.Addr2`||Required if it is enabled under the Address and Name Length Option under  Miscellaneous specification.<br><br>Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values defined under the Miscellaneous  specification.<br><br>"0" indicates names and addresses length up to 30 characters<br>"1" indicates names and addresses length up to 40 characters<br>"2" indicates names and addresses length up to 30 characters and two address lines are available<br>"3" indicates names and addresses length up to 40 characters and two address lines are available|
|`AddrInfo.PostAddr.City`||Maximum allowed character length is 20 (including spaces). For longer city name, you can use abbreviate the city name to fit the criteria. For example, city name "Rancho Santa Margarita" can be abbreviated as "Rancho Santa Mrgrta" or "Rancho S Margarita"<br><br>Note: A total length of 40 characters for City, StateProv and PostalCode appended together (including spaces) is acceptable.|
|`AddrInfo.PostAddr.StateProv`||***Conditionally Required**<br>Required if country is United States. |
|`AddrInfo.PostAddr.PostalCode`||If address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 |
|`AddrInfo.PostAddr.CountryCode`|||
|`AddrInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode||
|`AddrInfo.PostAddr.CountryCode.CountryCodeValue`||  |
|`AddrInfo.PostAddr.AddrType`|Primary<br>Seasonal|***Conditionally Required**<br>Address record can have Primary address and Seasonal address, both forms one address record therefore shares same address identifier.<br>Primary address is required when creating a new address record where seasonal address is optional and if needed always related to the primary address.|
|`AddrInfo.PostAddr.TimeFrame`|||
|`AddrInfo.PostAddr.TimeFrame.StartDt`||Applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore core only stores Start month and Start Day. Year can be provided as "9999".|
|`AddrInfo.PostAddr.TimeFrame.EndDt`||Applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as "9999".|
|`AddrInfo.PostAddr.Retention`|true<br>false|If indicated not to retain address, service provider automatically deletes it when no accounts, tax addenda, or any other relationships exist for the address record.<br><br>If retention is set to true, address record cannot be deleted.|
|`AddrInfo.PostAddr.CensusTract`||  |
|`AddrInfo.PostAddr.CensusBlock`||  |
|`AddrInfo.PostAddr.ForeignFlag`|true<br>false||
|`AddrInfo.PostAddr.HandlingCode`||  |
|`AddrInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|  |
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


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
