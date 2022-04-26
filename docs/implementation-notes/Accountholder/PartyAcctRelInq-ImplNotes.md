# Implementation Notes for Get-ByPartyINET PartyAcctRel
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, , , Precision, Signature, Cleartouch, DNA, 
-->

<!-- 
type: tab 
titles: By Acct, By Party, By PartyINET
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
|`RecCtrlIn.MaxRecLimit`||If no value is specified for this field, then the maximum of 250 records are sent in the request.|
|`RecCtrlIn.Cursor`||  |
|`PartyAcctRelSel`||  |
|`PartyAcctRelSel.AcctKeys`||  |
|`PartyAcctRelSel.AcctKeys.AcctId`||  |
|`PartyAcctRelSel.AcctKeys.AcctType`|CDA<br>CRD<br>DDA<br>LOAN<br>CLOC<br>SDA<br>SDB<br>PORT<br> |  |
#### Response Schema
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
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  end date.|
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
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  end date.|
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

The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`||  |
|`RecCtrlIn.MaxRecLimit`||If no value is specified for this field, then the maximum of 250 records are sent in the request.|
|`RecCtrlIn.Cursor`||  |
|`PartyAcctRelSel`||  |
|`PartyAcctRelSel.PartyKeys`||  |
|`PartyAcctRelSel.PartyKeys.PartyId`||  |
|`PartyAcctRelSel.ExcludeClosedAcctInd`|true<br>false|By default value is set to 'false' indicating the client application want to include both open and closed accounts to be returned in the response.<br>However if the XREF parameter 'ExcludeClosedLoans' is set up for an FI, then the closed loan accounts will never be returned in the ESF response even when 'ExcludeClosedAccttInd' is set to false or not sent in the request.|
#### Response Schema
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
|`PartyAcctRelRec.PartyAcctRelKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>CRD<br>LOAN<br>CLOC<br>SDB<br>DDL<br>PORT|  |
|`PartyAcctRelRec.PartyAcctRelInfo`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PartyKeys`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PartyKeys.PartyId`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty<br>|This field refers to Customer type, indicating the customers's relationship with the financial institute.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact`||By default, this aggregate wihin each relationship aggregate are returned by the operation. However for performance considerations, the number of contacts can be configured for the institute and maximum number of contacts within each realtionship can be returned as per the requirement.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Other<br>Modem|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.PhoneIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.Phone`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.PreferredPhone`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.PhoneDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr`||Core allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal addresss share addressIdent with <br>primary or secondary address thus must be correctly related to the primary or secondary address record.<br><br>Also core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.AddressIdent`||AddressIdent is shared by Primary and related Secondary/Seasonal Address.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br>Tax|Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.Addr1`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.Addr2`||***Conditionally Required**<br>This field is applicable only when enabled in the CIS Miscellaneous (Institution) specfications.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.City`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.StateProv`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.PostalCode`||If address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Please note postal codes for non-US/foreign address are simply a string of characters.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.CountryCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeValue`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|Core support primary,  multiple secondary or seasonal address types. Both primary with seasonal/secondary forms an address record. Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary address. |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.TimeFrame`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  end date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.Retention`||Refers to Address retention code, indicate if the address record is automatically deleted when no accounts, tax addenda, or relationships are attached to the address record. |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.CensusTract`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.CensusBlock`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.ForeignFlag`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.HandlingCode`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.HandlingCodeOption`||This field identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.MSACode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email.EmailIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email.EmailType`|Business<br>Home|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email.EmailAddr`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email.PreferredEmail`|true<br>false|Refers to the primary contact indicator.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.WebAddr`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.WebAddr.WebAddrIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.WebAddr.WebAddrType`|Work|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.WebAddr.WebAddrLink`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.TaxIdentType`|None<br>SSN<br>EIN<br>Foreign<br>ITIN<br>ATIN|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.TaxIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.OriginatingBranch`||This field refers to Branch Region associated to the party record.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.TelebancPswd`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.NameType`|Primary|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.NameIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.FullName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.FamilyName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.GivenName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.MiddleName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.BirthDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty<br>|This field refers to Customer type, indicating the customers's relationship with the financial institute.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact`||By default, this aggregate wihin each relationship aggregate are returned by the operation. However for performance considerations, the number of contacts can be configured for the institute and maximum number of contacts within each realtionship can be returned as per the requirement.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Other<br>Modem|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.PhoneIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.Phone`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.PreferredPhone`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.PhoneDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr`||Core allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal addresss share addressIdent with <br>primary or secondary address thus must be correctly related to the primary or secondary address record.<br><br>Also core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.AddressIdent`||AddressIdent is shared by Primary and related Secondary/Seasonal Address.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br>Tax|Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.Addr1`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.Addr2`||***Conditionally Required**<br>This field is applicable only when enabled in the CIS Miscellaneous (Institution) specfications.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.City`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.StateProv`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.PostalCode`||If address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Please note postal codes for non-US/foreign address are simply a string of characters.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.CountryCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeValue`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|Core support primary,  multiple secondary or seasonal address types. Both primary with seasonal/secondary forms an address record. Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary address. |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.TimeFrame`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  end date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.Retention`||Refers to Address retention code, indicate if the address record is automatically deleted when no accounts, tax addenda, or relationships are attached to the address record. |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.CensusTract`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.CensusBlock`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.ForeignFlag`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.HandlingCode`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.HandlingCodeOption`||This field identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.MSACode`||  |
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
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OriginatingBranch`||This field refers to Branch Region associated to the party record.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.TelebancPswd`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName.NameType`|Primary|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName.NameIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName.Name`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyAcctRelData`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelType`|DoingBusinessAs<br>CoBorrower<br>Borrower<br>OwnerSigner<br>Owner<br>JointTenancy<br>Custodian<br>Executor<br>Fiduciary<br>Trustee<br>Signer<br>PrimaryPortfolioName<br>SecondaryPortfolioName<br>|Service provider support additional client-defined values for relationship type.<br><br>Please note relationship types as PrimaryPortfolioName and SecondaryPortfolioName applicable for Party to Portfolio relationships only.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelOrder`|First<br>Second<br>Third<br>Other|Party Account Relationship Order as "First", "Second", and "Third" are considered to be main names on the account and most commonly applies to Party Relationship Types as OwnerSigner and Signer, Owner while "other" is used for relationships other then OwnerSigner, Signer, Owner.|
|`PartyAcctRelRec.PartyAcctRelInfo.OwnerPercent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.OwnerInd`||Do not apply to Portfolio relationships.|
|`PartyAcctRelRec.PartyAcctRelInfo.PrimaryOwnerInd`||This field identifies first name on the account.|
|`PartyAcctRelRec.PartyAcctRelInfo.TaxReportingOwnerInd`||Do not apply to Portfolio relationships.|
|`PartyAcctRelRec.PartyAcctRelInfo.Nickname`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef`||This aggregate will be suppressed in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys.AcctId`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys.AcctType`|DDA <br>SDA <br>CDA <br>LOAN <br>CLOC <br>SDB <br>DDL <br>CRD <br>PORT |  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys.AcctIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys.AcctIdent.AcctIdentType`|PORT| The field returns the Portfolio Account Number which is associated to the account.<br>Valid value "Port" refers to Portfolio.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys.AcctIdent.AcctIdentValue`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo`||This aggregate will be suppressed in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctDtlStatus`|Active<br>Dormant<br>Closed<br>Matured<br>Inactive<br>ClientControlled<br>ChargedOff<br>ActiveNoRenew<br>NoWithdrawal<br>HotCard<br>Foreclosure<br>Bankruptcy<br>EarlyCollection<br>ClosedToAdvances<br>|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctDtlStatusEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctDtlStatusDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPref`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPref.Language`|UsePortfolio<br>English<br>Spanish|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ProductIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.Desc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.TaxIncentiveType`|HSAFamily<br>HSAIndividual<br>None<br>IRA|Refers to Special Reporting Code|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.InitialAmount`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.InitialAmount.Amt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.InitialAmount.CurCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.InitialAmount.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.InitialAmount.CurCode.CurCodeValue`|USD|Only USD is supported by the core.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.OpenDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ClosedDt`||This field is applicable for DDA, SDA, CDA, SDA and LOAN account types.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.Term`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.Term.Count`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.Term.TermUnits`|Months<br>Days|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.MaturityDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DateData`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DateData.DateType`|LastFileMaint<br>ChargeOff<br>NonAccrual<br>LastTrn|For this field, LastFileMaint refers to the date on which file maintenance last occurred and<br>LastTrn refers to the date of the last transaction activity.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DateData.DateValue`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.RelationshipMgr`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.RelationshipMgr.RelationshipMgrIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.RelationshipMgr.RelationshipMgrIdentEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer<br>|Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.OriginatingBranch`||This field refers to Branch Region associated to the party record.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.OriginatingBranchEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.NicknameOption`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.Nickname`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctTitleOption`|NotPrinted<br>PrintBefore<br>PrintAfter|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctTitle`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.OEDCode`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ClassCode`||This field will be deprecated in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctTypeCode`||Account Type Code also identifies public funds and special accounts.<br>Values for this field are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ClientDefinedData`||Refers to Flex Data.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ClientDefinedData.DataClassType`|Portfolio|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ClientDefinedData.Value`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ClientDefinedData.Desc`||This field refers to the Flex Data Field Label.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctStmtData`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctStmtData.StmtTimeFrame`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctStmtData.StmtTimeFrame.RecurType`|Cycle|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctStmtData.StmtTimeFrame.RecurInterval`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ProdIntRateId`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.Rate`||For DDA and SDA, the current rate in effect when automatic interest was last posted to the account.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.IntRateData.AccrualFrequency`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.IntRateData.AccrualFrequency.RecurType`|Cycle|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.IntRateData.AccrualFrequency.RecurInterval`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal.BalType`|Avail<br>AvailCredit<br>ChargeOff<br>Current<br>DirectLiability<br>Guaranteed<br>IndirectLiability<br>InterestDue<br>Ledger<br>Memo<br>PartChargeOff<br>PartInterestDue<br>PartPrincipal<br>PastDue<br>PayOffAmt<br>PledgedAmount<br>Principal<br>RentDue<br>Secured<br>Unsecured<br>PmtDue<br>LateFee<br>Hold|For this field, if minimum data is requested and IncAddtlAcctInfoInd is set as false or not provided, following balances are returned :<br>Avail<br>AvailCredit<br>Current<br>PayOffAmt<br>Principal<br>PmtDue<br>where as, if IncAddtlAcctInfoInd is set as true, then, following balances are returned : <br>ChargeOff<br>InterestDue<br>InterestAccrued<br>Ledger<br>RentDue<br>LateFee<br>Hold|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal.CurAmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal.CurAmt.Amt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal.CurAmt.CurCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal.CurAmt.CurCode.CurCodeValue`|USD|Only USD is supported by the core.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.AcctAmtType`|Statement<br>ChkDebit<br>Deposit<br>Debit<br>AvgAvail<br>AvgLedger<br>AvgPrin<br>IntPaid<br>AvgAvail<br>AvgLedger<br>AvgPrin<br>IntPaid<br>IntPaid<br>ForfeitureAmt<br>Rent<br>LoanPmt<br>AdvAmt<br>IntDue<br>|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.AcctPeriodType`|LTD<br>YTD<br>CTD<br>PriorYr|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.LastOccurInd`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.Amt`||Only USD is supported by the core.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.Count`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.Rate`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.LastOccuranceDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr`||This aggregate returns the Primary and Seasonal Address record associated to the party record, if applicable.<br>Core allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal addresss share addressIdent with <br>primary or secondary address thus must be correctly related to the primary or secondary address record.<br>Address Use for both Primary and Seasonal Address is "Inquiry"|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.AddressIdent`||AddressIdent is shared by Primary and related Secondary/Seasonal Address.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.AddrUse`|Inquiry|Address Use for account Primary address and related Seasonal address is "Inquiry"|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.Addr1`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.Addr2`||***Conditionally Required**<br>This field is applicable only when enabled in the CIS Miscellaneous (Institution) specfications.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.City`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.StateProv`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.PostalCode`||If address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Please note postal codes for non-US/foreign address are simply a string of characters.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.CountryCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.CountryCode.CountryCodeValue`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.AddrType`|Primary<br>Seasonal<br>|This field indicates the primary and related seasonal address returned by the service.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.TimeFrame`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  end date.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.Retention`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.CensusTract`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.CensusBlock`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.ForeignFlag`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.HandlingCode`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.HandlingCodeOption`||This field identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.PostAddr.MSACode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ElectronicBankingOpt`|InquiryOnly<br>Enabled<br>Disabled|Refers to Electronic Banking Restriction.<br><br>This field will be deprecated in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ReportGroupCode`||Values for this field ranges from 000 to 999.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DocDistributionOption`||This field will be deprecated in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.RestrictedInd`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.RestrictedDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.NonAccrualInd`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.NonAccrualCode`||Refers to Non-Accrual Code. This field indicates whether the loan will automatically change to non-accrual or not after the specified number of non-accrual days.<br><br>Values for this field is set in the Miscellaneous 6 specfications.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ChargeOffInd`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ChargeOffCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.CardType`||Client-defined values are supported by the service provider|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.IssueDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ExpDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.BoxNum`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt.CompositeCurAmtType`|PmtDue<br>Rent|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt.CurAmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt.CurAmt.Amt`||This field refers to the amount of the current payment due.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt.CurAmt.CurCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeValue`|USD|Only USD is supported by the core.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.DueDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt.CompositeCurAmtType`|LastPmt|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt.CurAmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt.CurAmt.Amt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt.CurAmt.CurCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeValue`|USD|Only USD is supported by the core.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtDt`||  |
|`PartyAcctRelRec.PartyAcctRelStatus`||  |
|`PartyAcctRelRec.PartyAcctRelStatus.PartyAcctRelStatusCode`|Valid|  |
|`PartyAcctRelRec.PartyAcctRelStatus.EffDt`||  |
<!-- type: tab -->

The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`||  |
|`RecCtrlIn.MaxRecLimit`||If no value is specified for this field, then the maximum of 250 records are sent in the request.|
|`RecCtrlIn.Cursor`||  |
|`PartyAcctRelSel`||  |
|`PartyAcctRelSel.PartyKeys`||  |
|`PartyAcctRelSel.PartyKeys.PartyId`||  |
|`PartyAcctRelSel.ExcludeClosedAcctInd`|true<br>false|By default value is set to 'false' indicating the client application want to include both open and closed accounts to be returned in the response.<br>However if the XREF parameter 'ExcludeClosedLoans' is set up for an FI, then the closed loan accounts will never be returned in the ESF response even when 'ExcludeClosedAccttInd' is set to false or not sent in the request.|
|`PartyAcctRelSel.IncPartyInfoInd`|true<br>false|For this field, the default value is set to false.|
|`PartyAcctRelSel.IncAddtlAcctInfoInd`|true<br>false|For this field, the default value is set to false.|
#### Response Schema
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
|`PartyAcctRelRec.PartyAcctRelKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>CRD<br>LOAN<br>CLOC<br>SDB<br>DDL<br>PORT|  |
|`PartyAcctRelRec.PartyAcctRelInfo`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PartyKeys`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PartyKeys.PartyId`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty<br>|This field refers to Customer type, indicating the customers's relationship with the financial institute.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact`||By default, this aggregate wihin each relationship aggregate are returned by the operation. However for performance considerations, the number of contacts can be configured for the institute and maximum number of contacts within each realtionship can be returned as per the requirement.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Other<br>Modem|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.PhoneIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.Phone`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.PreferredPhone`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PhoneNum.PhoneDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr`||Core allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal addresss share addressIdent with <br>primary or secondary address thus must be correctly related to the primary or secondary address record.<br><br>Also core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.AddressIdent`||AddressIdent is shared by Primary and related Secondary/Seasonal Address.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br>Tax|Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.Addr1`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.Addr2`||***Conditionally Required**<br>This field is applicable only when enabled in the CIS Miscellaneous (Institution) specfications.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.City`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.StateProv`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.PostalCode`||If address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Please note postal codes for non-US/foreign address are simply a string of characters.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.CountryCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeValue`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|Core support primary,  multiple secondary or seasonal address types. Both primary with seasonal/secondary forms an address record. Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary address. |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.TimeFrame`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  end date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.PostAddr.ForeignFlag`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email.EmailIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email.EmailType`|Business<br>Home|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email.EmailAddr`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.Contact.Email.PreferredEmail`|true<br>false|Refers to the primary contact indicator.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.TaxIdentType`|None<br>SSN<br>EIN<br>Foreign<br>ITIN<br>ATIN|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.TaxIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.TelebancPswd`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.NameType`|Primary|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.NameIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.FullName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.FamilyName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.GivenName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.PersonName.MiddleName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.PersonPartyListInfo.BirthDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.PartyType`|Unknown<br>Personal-Prospect<br>Business-Prospect<br>Consumer<br>Corporate<br>SoleProprietorship<br>C-Corporation<br>S-Corporation<br>Partnership<br>Trust/Estate<br>LimitLiabilityC-Corp<br>LimitLiabilityS-Corp<br>LimitLiabilityPartnership<br>Other<br>ThirdParty<br>|This field refers to Customer type, indicating the customers's relationship with the financial institute.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact`||By default, this aggregate wihin each relationship aggregate are returned by the operation. However for performance considerations, the number of contacts can be configured for the institute and maximum number of contacts within each realtionship can be returned as per the requirement.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.PhoneType`|Home<br>Work<br>Mobile<br>Fax<br>Pager<br>Other<br>Modem|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.PhoneIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.Phone`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.PreferredPhone`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PhoneNum.PhoneDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr`||Core allows to have one primary address with multiple secondary or seasonal address. Seasonal Address have time frame and cannot exist as a independent address record. The seasonal addresss share addressIdent with <br>primary or secondary address thus must be correctly related to the primary or secondary address record.<br><br>Also core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.AddressIdent`||AddressIdent is shared by Primary and related Secondary/Seasonal Address.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.AddrUse`|Business<br>Home<br>Personal<br>Tax|Each address types can have different address uses like Personal, Home, Business and other user defined address uses.<br>Core uses same address usage for both Primary and secondary or Primary and Seasonal address type. For example if the adress use of Primary address is home, then the address use of seasonal/seconadry address related to primary address is also home.<br>However address use as "Tax" is only applicable for secondary address and only one Tax address can exist for a party.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.AddrFormatType`|Label|Label is the supported address format.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.Addr1`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.Addr2`||***Conditionally Required**<br>This field is applicable only when enabled in the CIS Miscellaneous (Institution) specfications.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.City`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.StateProv`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.PostalCode`||If address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Please note postal codes for non-US/foreign address are simply a string of characters.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.CountryCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.CountryCode.CountryCodeValue`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|Core support primary,  multiple secondary or seasonal address types. Both primary with seasonal/secondary forms an address record. Seasonal address cannot exist as an independent address record and share address identifier with primary address or one of the secondary address. |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.TimeFrame`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.TimeFrame.StartDt`||This field applicable for Seasonal Address type. Seasonal address begins on the same Start date every year, therefore Premier only stores Start month and Start Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  start date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.TimeFrame.EndDt`||This field is applicable for Seasonal Address Type. Seasonal address ends on the same End date every year, therefore core only stores seasonal address End month and End Day. Year can be provided as '9999'.<br><br>The month and the day of the month will show the actual Seasonal address  end date.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.PostAddr.ForeignFlag`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.Email`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.Email.EmailIdent`||Up to 10 occurrences of an email address and web URLs combined may be associated to a customer.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.Email.EmailType`|Business<br>Home|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.Email.EmailAddr`||Refers to the primary contact indicator.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.Contact.Email.PreferredEmail`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.TaxIdentType`|None<br>SSN<br>EIN<br>Foreign<br>ITIN<br>ATIN|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.TaxIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.TelebancPswd`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName.NameType`|Primary|  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName.NameIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyRef.OrgPartyListInfo.OrgName.Name`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyAcctRelData`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelType`|DoingBusinessAs<br>CoBorrower<br>Borrower<br>OwnerSigner<br>Owner<br>JointTenancy<br>Custodian<br>Executor<br>Fiduciary<br>Trustee<br>Signer<br>PrimaryPortfolioName<br>SecondaryPortfolioName<br>|Service provider support additional client-defined values for relationship type.<br><br>Please note relationship types as PrimaryPortfolioName and SecondaryPortfolioName applicable for Party to Portfolio relationships only.|
|`PartyAcctRelRec.PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelOrder`|First<br>Second<br>Third<br>Other|Party Account Relationship Order as "First", "Second", and "Third" are considered to be main names on the account and most commonly applies to Party Relationship Types as OwnerSigner and Signer, Owner while "other" is used for relationships other then OwnerSigner, Signer, Owner.|
|`PartyAcctRelRec.PartyAcctRelInfo.OwnerPercent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.OwnerInd`||Do not apply to Portfolio relationships.|
|`PartyAcctRelRec.PartyAcctRelInfo.PrimaryOwnerInd`||This field identifies first name on the account.|
|`PartyAcctRelRec.PartyAcctRelInfo.TaxReportingOwnerInd`||Do not apply to Portfolio relationships.|
|`PartyAcctRelRec.PartyAcctRelInfo.Nickname`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef`||This aggregate will be suppressed in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys.AcctId`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys.AcctType`|DDA <br>SDA <br>CDA <br>LOAN <br>CLOC <br>SDB <br>DDL <br>CRD <br>PORT |  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys.AcctIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys.AcctIdent.AcctIdentType`|PORT| The field returns the Portfolio Account Number which is associated to the account.<br>Valid value "Port" refers to Portfolio.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctKeys.AcctIdent.AcctIdentValue`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo`||This aggregate will be suppressed in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctDtlStatus`|Active<br>Dormant<br>Closed<br>Matured<br>Inactive<br>ClientControlled<br>ChargedOff<br>ActiveNoRenew<br>NoWithdrawal<br>HotCard<br>Foreclosure<br>Bankruptcy<br>EarlyCollection<br>ClosedToAdvances<br>|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctDtlStatusEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ProductIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.Desc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.TaxIncentiveType`|HSAFamily<br>HSAIndividual<br>None<br>IRA|Refers to Special Reporting Code|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.TaxIncentiveTypeEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.InitialAmount`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.InitialAmount.Amt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.InitialAmount.CurCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.InitialAmount.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.InitialAmount.CurCode.CurCodeValue`|USD|Only USD is supported by the core.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.OpenDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ClosedDt`||This field is applicable for DDA, SDA, CDA, SDA and LOAN account types.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.Term`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.Term.Count`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.Term.TermUnits`|Months<br>Days|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.MaturityDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DateData`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DateData.DateType`|LastFileMaint<br>LastTrn|For this field, LastFileMaint refers to the date on which file maintenance last occurred and<br>LastTrn refers to the date of the last transaction activity.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DateData.DateValue`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.RelationshipMgr`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.RelationshipMgr.RelationshipMgrIdent`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.RelationshipMgr.RelationshipMgrIdentEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer<br>|Officer refers to Responsibility Code and Referral Officer refers to Referral Responsibility Code.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.OriginatingBranch`||This field refers to Branch Region associated to the party record.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.OriginatingBranchEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.Nickname`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctTitle`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.OEDCode`||Values are client-defined.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.OEDCodeEnumDesc`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ClassCode`||This field will be deprecated in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.Rate`||For DDA and SDA, the current rate in effect when automatic interest was last posted to the account.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal.BalType`|Avail<br>AvailCredit<br>ChargeOff<br>Current<br>InterestDue/InterestAccrued<br>Ledger<br>PayOffAmt<br>Principal<br>RentDue<br>PmtDue<br>LateFee<br>Hold|For this field, if minimum data is requested and IncAddtlAcctInfoInd is set as false or not provided, following balances are returned :<br>Avail<br>AvailCredit<br>Current<br>PayOffAmt<br>Principal<br>PmtDue<br>where as, if IncAddtlAcctInfoInd is set as true, then, following balances are returned : <br>ChargeOff<br>InterestDue<br>InterestAccrued<br>Ledger<br>RentDue<br>LateFee<br>Hold|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal.CurAmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal.CurAmt.Amt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal.CurAmt.CurCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctBal.CurAmt.CurCode.CurCodeValue`|USD|Only USD is supported by the core.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.AcctAmtType`|Statement<br>ChkDebit<br>Deposit<br>Debit<br>IntPaid<br>LoanPmt<br>AdvAmt<br>IntDue<br>|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.AcctPeriodType`|LTD<br>YTD<br>CTD<br>PriorYr|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.LastOccurInd`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.Amt`||Only USD is supported by the core.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.Rate`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.AcctPeriodData.LastOccuranceDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ElectronicBankingOpt`|InquiryOnly<br>Enabled<br>Disabled|Refers to Electronic Banking Restriction.<br><br>This field will be deprecated in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DocDistributionOption`||This field will be deprecated in the future. |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.RestrictedInd`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.NonAccrualInd`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.NonAccrualCode`||Refers to Non-Accrual Code. This field indicates whether the loan will automatically change to non-accrual or not after the specified number of non-accrual days.<br><br>Values for this field is set in the Miscellaneous 6 specfications.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ChargeOffInd`|true<br>false|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ChargeOffCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.CardType`||Client-defined values are supported by the service provider|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.ExpDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.BoxNum`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt.CompositeCurAmtType`|PmtDue<br>Rent<br>|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt.CurAmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt.CurAmt.Amt`||This field refers to the amount of the current payment due.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt.CurAmt.CurCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeValue`|USD|Only USD is supported by the core.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.DuePmt.DueDt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt.CompositeCurAmtType`|LastPmt|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt.CurAmt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt.CurAmt.Amt`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt.CurAmt.CurCode`||  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeValue`|USD|Only USD is supported by the core.|
|`PartyAcctRelRec.PartyAcctRelInfo.AcctRef.AcctSummInfo.LastPmt.PmtDt`||  |
|`PartyAcctRelRec.PartyAcctRelStatus`||  |
|`PartyAcctRelRec.PartyAcctRelStatus.PartyAcctRelStatusCode`|Valid|  |
|`PartyAcctRelRec.PartyAcctRelStatus.EffDt`||  |
<!-- type: tab-end -->

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
