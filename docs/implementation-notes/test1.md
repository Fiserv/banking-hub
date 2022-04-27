# Implementation Notes for Inq-ByAcct PartyAcctRel
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier,, Precision, Signature, Cleartouch, DNA, 
-->

<!-- 
type: tab 
titles: Tab A, Tab B 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> - To view the field descriptions and sample Requests and Responses, please refer the API Explorer section of this API
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`||  |
|`RecCtrlIn.MaxRecLimit`||If no value is specified for this field, then the maximum of 250 records are sent in the request.|
|`RecCtrlIn.Cursor`||  |
|`PartyAcctRelSel`||  |
|`PartyAcctRelSel.AcctKeys`||  |
|`PartyAcctRelSel.AcctKeys.AcctId`||  |
|`PartyAcctRelSel.AcctKeys.AcctType`|CDA<br>CRD<br>DDA<br>LOAN<br>CLOC<br>SDA<br>SDB<br>PORT<br> |  |
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`||  |
|`RecCtrlOut.SentRecCount`||  |
|`RecCtrlOut.MatchedRecCount`||  |
|`RecCtrlOut.Cursor`||If there are more than 250 posted transactions, ESF will return Cursor tags.|
|`PartyAcctRelRec`||By default, all party-account relationships that exist in core would be returned by the operation. However to improve performance the user has the option to limit the number of associated party-account relationship in the EFX response by updating the configuration set for a FI.|
|`PartyAcctRelRec.PartyAcctRelKeys`||  |
|`PartyAcctRelRec.PartyAcctRelKeys.PartyKeys`||  |
|`PartyAcctRelRec.PartyAcctRelKeys.PartyKeys.PartyId`||  |
|`PartyAcctRelRec.PartyAcctRelKeys.AcctKeys`||  |
|`PartyAcctRelRec.PartyAcctRelKeys.AcctKeys.AcctId`||  |
|`PartyAcctRelRec.PartyAcctRelKeys.AcctKeys.AcctType`|CDA<br>CRD<br>DDA<br>LOAN<br>CLOC<br>SDA<br>SDB|  |
|`PartyAcctRelRec.PartyAcctRelKeys.AcctKeys.AcctIdent`||  |
|`PartyAcctRelRec.PartyAcctRelKeys.AcctKeys.AcctIdent.AcctIdentType`|PORT| The field returns the Portfolio Account Number which is associated to the account.<br>Valid value "Port" refers to Portfolio.|
|`PartyAcctRelRec.PartyAcctRelKeys.AcctKeys.AcctIdent.AcctIdentValue`||  |
|`PartyAcctRelRec.PartyAcctRelInfo`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PartyKeys`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PartyKeys.PartyId`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty<br>|This field refers to Customer type, indicating the customers's relationship with the financial institute.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PartyTypeEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact`||By default, this aggregate wihin each relationship aggregate are returned by the operation. However for performance considerations, the number of contacts can be configured for the institute and maximum number of contacts within each realtionship can be returned as per the requirement.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Other<br>Modem|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.PhoneIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.Phone`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.PreferredPhone`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.PhoneDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr`||Core allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal addresss share addressIdent with <br>primary or secondary address thus must be correctly related to the primary or secondary address record.<br><br>Also core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.AddressIdent`||AddressIdent is shared by Primary and related Secondary/Seasonal Address.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br>Tax<br><br>|Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.Addr1`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.Addr2`||***Conditionally Required**<br>This field is applicable only when enabled in the CIS Miscellaneous (Institution) specfications.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.City`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.StateProv`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.PostalCode`||If address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Please note postal codes for non-US/foreign address are simply a string of characters.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.CountryCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeValue`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeValueEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|Core support primary,  multiple secondary or seasonal address types. Both primary with seasonal/secondary forms an address record. Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary address. |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.TimeFrame`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as �9999�.<br><br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as �9999�.<br><br>The month and the day of the month will show the actual Seasonal address  end date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.ForeignFlag`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email.EmailIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email.EmailType`|Business<br>Home|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email.EmailAddr`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email.PreferredEmail`||Refers to the primary contact indicator.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.WebAddr`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.WebAddr.WebAddrIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.WebAddr.WebAddrType`|Work|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.WebAddr.WebAddrLink`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.TaxIdentType`|None<br>SSN<br>EIN<br>Foreign<br>ITIN<br>ATIN|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.TaxIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.IssuedIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.IssuedIdent.IssuedIdentType`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.IssuedIdent.IssuedIdentTypeEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.IssuedIdent.IssuedIdentId`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.IssuedIdent.IssuedIdentValue`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.IssuedIdent.Issuer`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.IssuedIdent.IssueDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.IssuedIdent.ExpDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.SecretData`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.SecretData.SecretIdent`|MaidenName<br>PlaceOfBirth<br>County<br>FavoriteColor<br>FavoriteNumber<br>FavoriteDate<br>FreeFormMessage<br>FreeFormQuestion<br>FreeFormAnswer|More than one security question may be recorded in the core and if FreeFormQuestion is used, then the answer is provided in a seprate SecretData aggregate.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.SecretData.SecretValue`||More than one security question may be recorded in the core and if FreeFormQuestion is used, then the answer is provided in a seprate SecretData aggregate.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.TelebancPswd`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.NameType`|Primary|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.NameIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.FullName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.FamilyName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.GivenName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.MiddleName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.PreferredName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.LegalName`||This field refers to IRS Name.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.BirthDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty|This field refers to Customer type, indicating the customers's relationship with the financial institute.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.PartyTypeEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact`||By default, this aggregate wihin each relationship aggregate are returned by the operation. However for performance considerations, the number of contacts can be configured for the institute and maximum number of contacts within each realtionship can be returned as per the requirement.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Other<br>Modem|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.PhoneIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.Phone`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.PreferredPhone`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.PhoneDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr`||Core allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal addresss share addressIdent with <br>primary or secondary address thus must be correctly related to the primary or secondary address record.<br><br>Also core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.AddressIdent`||AddressIdent is shared by Primary and related Secondary/Seasonal Address.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br>Tax<br><br><br>|Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.Addr1`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.Addr2`||***Conditionally Required**<br>This field is applicable only when enabled in the CIS Miscellaneous (Institution) specfications.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.City`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.StateProv`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.PostalCode`||If address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Please note postal codes for non-US/foreign address are simply a string of characters.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.CountryCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeValue`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeValueEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|Core support primary,  multiple secondary or seasonal address types. Both primary with seasonal/secondary forms an address record. Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary address. |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.TimeFrame`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as �9999�.<br><br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as �9999�.<br><br>The month and the day of the month will show the actual Seasonal address  end date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.ForeignFlag`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.Email`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.Email.EmailIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.Email.EmailType`|Business<br>Home|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.Email.EmailAddr`||Refers to the primary contact indicator.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.Email.PreferredEmail`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.WebAddr`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.WebAddr.WebAddrIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.WebAddr.WebAddrType`|Work|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.WebAddr.WebAddrLink`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.TaxIdentType`|None<br>SSN<br>EIN<br>Foreign<br>ITIN<br>ATIN|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.TaxIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.IssuedIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.IssuedIdent.IssuedIdentType`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.IssuedIdent.IssuedIdentTypeEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.IssuedIdent.IssuedIdentId`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.IssuedIdent.IssuedIdentValue`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.IssuedIdent.Issuer`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.IssuedIdent.IssueDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.IssuedIdent.ExpDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.SecretData`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.SecretData.SecretIdent`|MaidenName<br>PlaceOfBirth<br>County<br>FavoriteColor<br>FavoriteNumber<br>FavoriteDate<br>FreeFormMessage<br>FreeFormQuestion<br>FreeFormAnswer|More than one security question may be recorded in the core and if FreeFormQuestion is used, then the answer is provided in a seprate SecretData aggregate.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.SecretData.SecretValue`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.TelebancPswd`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName.NameType`|Primary|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName.NameIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName.Name`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName.PreferredName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName.LegalName`||This field refers to IRS Name.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyAcctRelData`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelType`|DoingBusinessAs<br>CoBorrower<br>Borrower<br>OwnerSigner<br>Owner<br>JointTenancy<br>Custodian<br>Executor<br>Fiduciary<br>Trustee<br>Signer<br>Beneficiary<br>MultipleMailing<br>CoSigner<br>PrimaryPortfolioName<br>SecondaryPortfolioName<br>|Service provider support additional client-defined values for relationship type.<br><br>Please note relationship types as PrimaryPortfolioName and SecondaryPortfolioName applicable for Party to Portfolio relationships only.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelOrder`|First<br>Second<br>Third<br>Other|Party Account Relationship Order as "First", "Second", and "Third" are considered to be main names on the account and most commonly applies to Party Relationship Types as OwnerSigner and Signer, Owner while "other" is used for relationships other then OwnerSigner, Signer, Owner.|
|`PartyAcctRelRec.PartyAcctRelInfo.OwnerPercent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.OwnerInd`|true<br>false|Do not apply to Portfolio relationships.|
|`PartyAcctRelRec.PartyAcctRelInfo.PrimaryOwnerInd`|true<br>false|This field identifies first name on the account.|
|`PartyAcctRelRec.PartyAcctRelInfo.TaxReportingOwnerInd`|true<br>false|Do not apply to Portfolio relationships.|
|`PartyAcctRelRec.PartyAcctRelInfo.Nickname`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.Name`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PortHasCreditLineInd`|true<br>false|This field is applicable only for Portfolio account types |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef`||This aggregate will be suppressed in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys.AcctId`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys.AcctType`|CDA<br>CRD<br>DDA<br>LOAN<br>CLOC<br>SDA<br>SDB|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo`||This aggregate will be suppressed in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ClassCode`||This field will be deprecated in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ElectronicBankingOpt`|InquiryOnly<br>Enabled<br>Disable|Refers to Electronic Banking Restriction.<br><br>This field will be deprecated in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DocDistributionOption`||This field will be deprecated in the future. |
|`PartyAcctRelRec.PartyAcctRelStatus`||  |
|`PartyAcctRelRec.PartyAcctRelStatus.PartyAcctRelStatusCode`|Valid|  |
|`PartyAcctRelRec.PartyAcctRelStatus.EffDt`||  |


<!-- type: tab -->

This is my Tab 2 content

<!-- type: tab-end -->

<!-- type: tab -->

### Tab 2
We are working on developing content for this section. Stay tuned for more updates. 

<!-- type: tab -->

### Tab 3
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


### Tab 4
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


### Tab 5
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
