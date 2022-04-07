# Implementation Notes for Addr Inq
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->

<!-- 
type: tab 
titles: By AddrId, By StreetAddr 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field descriptions of below listed fields, please refer the API Explorer section of this API.


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`AddrSel`||  |
|`AddrSel.Addr1`|||
|`AddrSel.Street`||Address information is stored in upper case (capital letters), so while searching the address by street the calling application (user) must provide full/partial street name in upper case only to fetch the records.|
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`RecCtrlOut`|||
|`RecCtrlOut.SentRecCount`||This field will return one address record, which can include Primary and Seasonal address and any relationships to Party(s) and Account(s).|
|`RecCtrlOut.Cursor`|||
|`AddrRec`||Search by street returns information about primary address only. To get additional information about an address, search by AddrId.|
|`AddrRec.AddrKeys`|||
|`AddrRec.AddrKeys.AddressIdent`|||
|`AddrRec.AddrKeys.AddrType`|Primary||
|`AddrRec.AddrInfo`|||
|`AddrRec.AddrInfo.PostAddr`||Address record can have Primary address and Seasonal address, both forms one address record therefore shares same address identifier.<br>If Primary address record has Seasonal address related to it, ESF displays them as a separate Postal Address instances. Also seasonal address have a time frame for which they are valid|
|`AddrRec.AddrInfo.PostAddr.OpenDt`|||
|`AddrRec.AddrInfo.PostAddr.RelationshipMgr`|||
|`AddrRec.AddrInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`|||
|`AddrRec.AddrInfo.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`AddrRec.AddrInfo.PostAddr.OriginatingBranch`||Originating Branch refers to Branch region associated to the address record.<br> This field does not apply to Seasonal Address type.|
|`AddrRec.AddrInfo.PostAddr.ResponsibleBranch`||Responsible Branch refers to Accounting branch. This field is not applicable for the Seasonal Address type.|
|`AddrRec.AddrInfo.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`AddrRec.AddrInfo.PostAddr.Addr1`||This field is required when a new address record is created. Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values available in the core:<br>"0" indicates names and addresses length up to 30 characters.<br>"1" indicates names and addresses length up to 40 characters.<br>"2" indicates names and addresses length up to 30 characters with Address line 2 enabled.<br>"3" indicates names and addresses length up to 40 characters with Address line 2 enabled.|
|`AddrRec.AddrInfo.PostAddr.Addr2`||This field is required if enabled under the name and addresses length option. Maximum length for this field is either 30 or 40 characters based upon the option values chosen for Address line 1.|
|`AddrRec.AddrInfo.PostAddr.City`|||
|`AddrRec.AddrInfo.PostAddr.StateProv`|||
|`AddrRec.AddrInfo.PostAddr.PostalCode`||If address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 |
|`AddrRec.AddrInfo.PostAddr.AddrType`|Primary|This field specify the type of address. In the core, address record can have Primary address and Seasonal address, both forms one address record therefore shares same address identifier.<br>Primary address is required when creating a new address record where seasonal address is optional and if needed always related to the primary address.<br>Also seasonal address always have a time frame.|
|`AddrRec.AddrInfo.PostAddr.CensusTract`||  |
|`AddrRec.AddrInfo.PostAddr.CensusBlock`||  |
|`AddrRec.AddrInfo.PostAddr.ForeignFlag`|||
|`AddrRec.AddrInfo.PostAddr.HandlingCode`||  |
|`AddrRec.AddrInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UseDefault|  |
|`AddrRec.AddrInfo.PostAddr.MSACode`||  |
|`AddrRec.AddrStatus`|||
|`AddrRec.AddrStatus.AddrStatusCode`|Valid||
|`AddrRec.AddrStatus.EffDt`|||
<!-- type: tab-end -->

# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`AddrSel`||  |
|`AddrSel.AddrId`||In the core, Primary address and Seasonal addresses share the same address identifier, therefore this service will return both- Primary and Seasonal address, if applicable.|
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`RecCtrlOut`|||
|`RecCtrlOut.SentRecCount`||This field will return one address record, which can include Primary and Seasonal address and any relationships to Party(s) and Account(s).|
|`AddrRec`||Search by street returns information about primary address only. To get additional information about an address, search by AddrId.|
|`AddrRec.AddrKeys`|||
|`AddrRec.AddrKeys.AddrId`|||
|`AddrRec.AddrInfo`|||
|`AddrRec.AddrInfo.AddrRelRef`||This aggregate provides information on how selected address is related to a party(s) and/or account(s).|
|`AddrRec.AddrInfo.AddrRelRef.PartyKeys`||  |
|`AddrRec.AddrInfo.AddrRelRef.PartyKeys.PartyId`|||
|`AddrRec.AddrInfo.AddrRelRef.AcctKeys`||  |
|`AddrRec.AddrInfo.AddrRelRef.AcctKeys.AcctId`|||
|`AddrRec.AddrInfo.AddrRelRef.AcctKeys.AcctType`|CDA<br>CRD<br>DDA<br>LOAN<br>SDA<br>SDB<br>PORT<br>CLOC<br>||
|`AddrRec.AddrInfo.AddrRelRef.AddrUse`|Inquiry<br>Mailing<br>Business<br>Home<br>Personal<br>Physical<br>NonPhysical<br>Tax<br>MultipleMailer<br>Beneficiary<br>Miscellaneous<br>Tickler<br>Indirect<br>Closed<br>1098Tax <br>1099ATax  <br>1099BTax<br>1099DIVTax <br>1099INTTax  <br>1099MISCTax <br>1099OIDTax <br>1099RTax <br>1099STax <br>5498Tax <br>TaxBNotice <br>1099CTax <br>1099ETax <br>1042STax <br>NoteCosigner <br>NoteEscrow <br>NoteTaxEscrow <br>NoteInsuranceEscrow <br>FinancialPropertyStmt<br>LineCosigner <br>LineCommitment<br><br><br>|Following types of Address Uses are supported for a Party :<br>Home<br>Personal<br>Business<br>Tax<br>User define values<br><br>Following types of Address Uses are supported for an Account :<br>Inquiry<br>Mailing<br>MultipleMailer<br>Beneficiary<br>Miscellaneous<br>Tickler<br>Indirect<br>Closed<br>1098Tax <br>1099ATax  <br>1099BTax<br>1099DIVTax <br>1099INTTax  <br>1099MISCTax <br>1099OIDTax <br>1099RTax <br>1099STax <br>5498Tax <br>TaxBNotice <br>1099CTax <br>1099ETax <br>1042STax <br>NoteCosigner <br>NoteEscrow <br>NoteTaxEscrow <br>NoteInsuranceEscrow <br>FinancialPropertyStmt<br>LineCosigner <br>LineCommitment|
|`AddrRec.AddrInfo.PostAddr`||Address record can have Primary address and Seasonal address, both forms one address record therefore shares same address identifier.<br>If Primary address record has Seasonal address related to it, ESF displays them as a separate Postal Address instances. Also seasonal address have a time frame for which they are valid|
|`AddrRec.AddrInfo.PostAddr.OpenDt`|||
|`AddrRec.AddrInfo.PostAddr.RelationshipMgr`|||
|`AddrRec.AddrInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`|||
|`AddrRec.AddrInfo.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`AddrRec.AddrInfo.PostAddr.OriginatingBranch`||Originating Branch refers to Branch region associated to the address record.<br> This field does not apply to Seasonal Address type.|
|`AddrRec.AddrInfo.PostAddr.ResponsibleBranch`||Responsible Branch refers to Accounting branch. This field is not applicable for the Seasonal Address type.|
|`AddrRec.AddrInfo.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`AddrRec.AddrInfo.PostAddr.Addr1`||This field is required when a new address record is created. Maximum length of this field can be either 30 or 40 characters based upon the Name and Address Length Option values available in the core:<br>"0" indicates names and addresses length up to 30 characters.<br>"1" indicates names and addresses length up to 40 characters.<br>"2" indicates names and addresses length up to 30 characters with Address line 2 enabled.<br>"3" indicates names and addresses length up to 40 characters with Address line 2 enabled.|
|`AddrRec.AddrInfo.PostAddr.Addr2`||This field is required if enabled under the name and addresses length option. Maximum length for this field is either 30 or 40 characters based upon the option values chosen for Address line 1.|
|`AddrRec.AddrInfo.PostAddr.City`|||
|`AddrRec.AddrInfo.PostAddr.StateProv`|||
|`AddrRec.AddrInfo.PostAddr.PostalCode`||If address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 |
|`AddrRec.AddrInfo.PostAddr.CountryCode`|||
|`AddrRec.AddrInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode||
|`AddrRec.AddrInfo.PostAddr.CountryCode.CountryCodeValue`|||
|`AddrRec.AddrInfo.PostAddr.CountryCode.CountryCodeValueEnumDesc`|||
|`AddrRec.AddrInfo.PostAddr.AddrType`|Primary<br>Seasonal<br>|This field specify the type of address. In the core, address record can have Primary address and Seasonal address, both forms one address record therefore shares same address identifier.<br>Primary address is required when creating a new address record where seasonal address is optional and if needed always related to the primary address.<br>Also seasonal address always have a time frame.|
|`AddrRec.AddrInfo.PostAddr.TimeFrame`|||
|`AddrRec.AddrInfo.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address Type. Seasonal address begins on the same Start date every year, therefore core only stores Start month and Start Day. Year can be provided as “9999”.|
|`AddrRec.AddrInfo.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as “9999”.|
|`AddrRec.AddrInfo.PostAddr.Retention`|true<br>false|  |
|`AddrRec.AddrInfo.PostAddr.CensusTract`||  |
|`AddrRec.AddrInfo.PostAddr.CensusBlock`||  |
|`AddrRec.AddrInfo.PostAddr.ForeignFlag`|true<br>false||
|`AddrRec.AddrInfo.PostAddr.HandlingCode`||  |
|`AddrRec.AddrInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint|  |
|`AddrRec.AddrInfo.PostAddr.MSACode`||  |
|`AddrRec.AddrStatus`|||
|`AddrRec.AddrStatus.AddrStatusCode`|Valid||
|`AddrRec.AddrStatus.EffDt`|||
<!-- type: tab-end -->
<!-- type: tab-end -->
