# Add Address - Implementation Notes

This section provides the provider-specific request schema and implementation notes applicable for Add Address API.


<!--
type: tab
titles: Premier, Signature, Cleartouch, Precision
-->

## Request Body

 The following table lists the provider-specific fields and describes the implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

 <table >
            <col  />
            <col />
            <col />
            <col />
            <thead>
                <tr>
                    <th>Field Name</th>
                    <th>Core Usage</th>
                    <th>Core length</th>
                    <th>Implementation Note</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>AddrInfo.AddrRelRef</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This aggregate to be used if it is intended to associate new address to existing Party(s).
New address can be added to the Party as a Secondary address only.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.AddrRelRef.AddrUse</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Identifies what new address will be used for.
Other values can be user defined.
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.OpenDt</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Premier requires  date to be provided when creating new Address record.
Does not apply to Seasonal Address type.
Format YYYY-MM-DD.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Does not apply to Seasonal Address type.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.RelationshipMgr.RelationshipRole</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Officer refers to Responsibility Code; Referral Officer refers to Referral Responsibility Code.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.OriginatingBranch</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to a Branch Region.
Premier requires Originating Branch to be provided when creating new Address record.
Values are user defined.

Does not apply to Seasonal Address type.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.ResponsibleBranch</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Accounting Branch.

Does not apply to Seasonal Address type.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.AddrFormatType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Premier supports Label Address format.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.Addr1</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Required to be provided if a new address record is being created.
Dependent on Name and Address Length Option defined under Miscellaneous specification in Premier, First Address Line can be either 30 or 40 characters long.
Name and Address Length Option values available in Premier:
"0" indicates names and addresses up to 30 characters in length can be entered.
"1" indicates names and addresses up to 40 characters in length can be entered.
"2" indicates names and addresses up to 30 characters may be entered, and that two address lines are available.
"3" indicates names and addresses up to 40 characters may be entered, and that two address lines are available.
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.Addr2</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Address Line 2 is supported if enabled under Address and Name Length Option in Miscellaneous specification in Premier. Preceding also defines the length of Address Line 2, which can be either 40 or 30 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.City</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>City' field in Premier is 20 characters (including spaces). It is recommended that the Consumer abbreviate the 'City' being sent in the EFX Request. E.g. City "Rancho Santa Margarita" exceeds 20 characters. Abbreviation "Rancho Santa Mrgrta" or "Rancho S Margarita" can be used.
Premier accepts a total length of 40 characters for City, StateProv and PostalCode appended together, including spaces.
Required to be provided.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.StateProv</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Required to be provided, if country is United States.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.PostalCode</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Postal Code provides information about the ZIP code, if Address is a United States address. It also provides Postal Code information, if address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they are will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 

Postal codes for non-US addresses are simply a  string of characters.

Required to be provided, if address country is United States.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.CountryCode.CountryCodeValue</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Values are user defined.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.AddrType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Address record in Premier can have  Primary address and a Seasonal address.  Seasonal Address record can not exist as a single address record for Premier. Seasonal address is always related to a Primary Address record, therefore Seasonal address can not be created without Primary address.

Primary address type is required when creating address record. Seasonal Address is optional.
Timeframe is required for Seasonal Address Type.



</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.TimeFrame.StartDt</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Applicable for Seasonal Address Type only.   The Seasonal address begins on the same Start date and ends on the same End date every year, therefore Premier only stores Seasonal Address Start month and Start day. Year can be provided as 9999</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.TimeFrame.EndDt</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Applicable for Seasonal Address Type only.   The Seasonal address begins on the same Start date and ends on the same End date every year, therefore Premier only stores seasonal address End month and End day. Year can be provided as 9999.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.Retention</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>If indicated not to retain Address record, Premier automatically  deletes it when no accounts, tax addenda, or any other relationships exist for the address record.
If Retention is set to true, Address record can not be deleted. Address can be deleted only if Retention Code is false or not provided.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.CensusTract</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>The number assigned by the U.S. Census Bureau used to identify a geographic location.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.CensusBlock</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Delivery Point. The number  assigned by the U.S. Postal Service used to uniquely identify each carrier delivery point.

If Census Block Is provided. ZipCode is expected to be provided in XXXXX-XXXX format.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.HandlingCode</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Values are client-defined. Indicates special routing information for customer correspondence.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.HandlingCodeOption</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.MSACode</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Code that identifies a Metropolitan Statistical Area for postal delivery purposes.</td>
                </tr>
            </tbody>
        </table>


<!-- type: tab -->


## Request Body

 The following table lists the provider-specific fields and describes the implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

 <table >
            <col />
            <col />
            <col />
            <col />
            <thead>
                <tr>
                    <th>Field Name</th>
                    <th>Core Usage</th>
                    <th>Core length</th>
                    <th>Implementation Note</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>PartyAddrRelInfo</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>To add an alternate address for a Party (Customer), use PartyAddrRelInfo aggregate. 
Signature supports only one Secondary/ Seasonal address for a Party.
</td>
                </tr>
                <tr>
                    <td><code>PartyAddrRelInfo.PartyRef.PartyKeys.PartyId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Customer Permanent Identifier. </td>
                </tr>
                <tr>
                    <td><code>AcctAddrRelInfo.AcctRef.AcctKeys.CardKeys</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>To add address for a Card, use AcctAddrRelInfo/AcctRef/AcctKeys/CardKeys aggregate. Signature supports only one Secondary/ Seasonal address for a Card. 
</td>
                </tr>
                <tr>
                    <td><code>AcctAddrRelInfo.AcctRef.AcctKeys.CardKeys.CardId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Card Id includes the ISO and Card Number. PAN (Primary Account Number) which is a maximum of 19 digits in Signature.
</td>
                </tr>
                <tr>
                    <td><code>AcctAddrRelInfo.AcctRef.AcctKeys.CardKeys.CardSeqNum</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to a Member Number. Member number is a one-digit number and it identifies multiple cards for different customers (for example, a wife’s card might have a 1 following it and the husband’s card might have a 2 following it to differentiate the cards). Only to be provided if Member Number functionality is  supported by Financial Institution. </td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.ApartmentNum</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Field is used when the address format type is Parsed and the client application is NOT using the Standardized address format. 

Signature supports only 15 characters. 

At least one element of a parsed address is required when address format type is Parsed. 
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.ApartmentNumType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Field is used when the address format type is Parsed and the client application is NOT using the Standardized address format.  

This field is used to identify contents of Apt Number field . It would appear before Apt Number in the printed address. 

</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.HouseNum</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Field is used when the address format type is Parsed and the client application is NOT using the Standardized address format. 

Signature supports only 10 characters. 

At least one element of a parsed address is required when address format type is Parsed.


</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.Street</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Field is used when the address format type is Parsed and the client application is NOT using the Standardized address format. 

At least one element of a parsed address is required when address format type is Parsed.

Client application should send a value in either  POBox field or the Street field but not both.   

</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.AddrDefinedData.DataIdent</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Field is used when the address format type is Parsed.

Refers to the Identifier of the Optional Information. This new tag will be used to identify contents of Optional Information Line.  Based selection an abbreviation could appear before the Optional Information. This field will appear above the recipient line in the printed address. 



</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.AddrDefinedData.Value</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Field is used when the address format type is Parsed.

Refers to Optional Information Field. 
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.District</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Field is used when the address format type is Parsed. At least one element of a parsed address is required when address format type is Parsed.

Signature supports only 24 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.MilitaryRegion</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Field is used when the address format type is Parsed.

For a Military address, this field should be used instead of the State or City fields. </td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.POBox</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Field is used when the address format type is Parsed.

Refers to PO Box Number. Client application should send a value in either  POBox field or the Street field but not both.  

Post Office Box addresses are output as PO BOX NNNNNN in the printed address.

</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.RevertToPartyAddr</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Revert to Primary customer address flag (that is Revert customer N/A field in Signature) and is only valid for the Account level alternate address, that is when the AddressIdent = 'Alternate' for an account. 

Client application should not send this field as 'true' when the address type is Seasonal OR when the address type is Secondary and Time Frame (Start date and End date) is not provided in the request. 



</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.UpdateContactCode</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to the Update customer contact flag.
 
When adding and alternate address in Parsed format, Signature supports option to update last contact date to the current system date for the Party. 
If value of 'Party' is sent in this field, then the Party's last contact date will be updated. 
If value of 'None' is sent in this field, then the last contact date will not be updated for the Party. 
If no value is sent in this field, then Signature updates the last contact date for Party. 
</td>
                </tr>
                <tr>
                    <td><code>AddrStatusRec.AddrKeys.PartyKeys.PartyId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Customer permanent identifier. </td>
                </tr>
                <tr>
                    <td><code>AddrStatusRec.AddrKeys.AcctKeys.CardKeys.CardId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Card Id includes the ISO and Card Number. PAN (Primary Account Number) which is a maximum of 19 digits in Signature.
</td>
                </tr>
                <tr>
                    <td><code>AddrStatusRec.AddrKeys.AcctKeys.CardKeys.CardSeqNum</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to a Member Number. Will be present only if Member Number functionality is  supported by Financial Institution.
</td>
                </tr>
                <tr>
                    <td><code>AddrStatusRec.AddrKeys.AddressIdent</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Alternate address type in Signature. 

Card and Safe deposit box valid values: 
Alternate

DDA, SDA, and CDA valid values: 
Alternate
Government
LegalTitle
Check
StatementPrimary
StatementAdditional1...5

RPA DDA accounts (formerly CAMPlus) valid additional statement values:
RPAStatementAddtl1...5 
RPAStatementAddtl

LOAN valid values:
Alternate
Government
LegalTitle
StatementPrimary
StatementAdditional1...5

For Party, this field does not apply. 






</td>
                </tr>
            </tbody>
        </table>


<!-- type: tab -->

## Request Body

 The following table lists the provider-specific fields and describes the implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

 <table>
            <col />
            <col />
            <col />
            <col />
            <thead>
                <tr>
                    <th>Field Name</th>
                    <th>Core Usage</th>
                    <th>Core length</th>
                    <th>Implementation Note</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>AcctAddrRelInfo.AcctRef.AcctKeys</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Either the party keys or the account keys  (not both) should be included in the request. </td>
                </tr>
                <tr>
                    <td><code>AcctAddrRelInfo.AcctRef.AcctKeys.AcctId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>First occurrence will be for Primary Account and additional occurence will be for other Linked Accounts.</td>
                </tr>
                <tr>
                    <td><code>AcctAddrRelInfo.AcctRef.AcctKeys.AcctType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>First occurrence will be for Primary Account and additional occurence will be for other Linked Accounts. 
Commercial loans are not supported for this service. </td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.AddrUse</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Address Use is not required for Seasonal addresses. 
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.County</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to 3 digit County code in Cleartouch. </td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.PhoneNum</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>The Phone number aggregate is only applicable to Seasonal addresses and is required by Cleartouch when the address type is Seasonal. 
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.PhoneNum.Phone</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Cleartouch does not support International phone number or Phone Extension in this service. 

EFX Phone field follows format:
+IntlDialCode-AreaCode-PhoneNum
Client application must send the phone number in the above format. 
E.g. 

+1-800-5551212

</td>
                </tr>
            </tbody>
        </table>


<!-- type: tab -->

## Request Body

 The following table lists the provider-specific fields and describes the implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

 <table>
            <col />
            <col />
            <col />
            <col />
            <thead>
                <tr>
                    <th>Field Name</th>
                    <th>Core Usage</th>
                    <th>Core length</th>
                    <th>Implementation Note</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>AddrInfo.PostAddr.AddressIdent</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Required by Precision. Refers to Alternate Address Code. Use this field to identify a new alternate address. Send a unique AddressIdent value (1-99) for each alternate address. The  AddressIdent values do not have to be sequential.
					</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.FullName1</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This field would replace Addr2 in future releases. Refers to Name/Addres line in Precision. This line prints below the name and above the  Mailing Address (Addr1) on Precision correspondence. This line is optional. Precision accepts up to 40 characters. 
						Client application should only send either (not both) FullName1 or Addr2 field in a single ESF request. 
					</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.ExpDt</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Requried when PostAddr TimeFrame is sent. Date the alternate address' schedule expires.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.ContactMethod</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Address Change. Method used to notify the Financial Institution of the address change. Values are client-defined.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.Comment</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Comments about the address. Up to 25 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.PhoneNum.PhoneIdent</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Applies only to Secondary addresses. Phone sequence that identifies which of the customer's phone numbers to use for the Secondary address. Phone record must already exist for the customer.</td>
                </tr>
            </tbody>
        </table>


<!-- type: tab-end -->

---   
