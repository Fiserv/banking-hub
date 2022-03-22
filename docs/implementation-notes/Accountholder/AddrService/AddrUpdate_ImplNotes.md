# Update Address - Implementation Notes

This section describes the service provider implementation notes applicable for the Update Address API.


<!--
type: tab
titles: Premier, Precision
-->

## Implementation Notes Premier

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
                <tr style="height : 90px;">
                    <td><code>AddrInfo.PostAddr</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Address record in Premier can consist of two addresses,- Primary address and a Seasonal address. Primary and Seasonal  addresses are considered as one record in Premier therefore they share the same address identifier.


This service allows to modify either Primary and/or Seasonal address  details.

</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.OpenDt</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to the date address record was originally created on Premier.
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
Values are user defined.

Does not apply to Seasonal Address type.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.ResponsibleBranch</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Accounting Branch associated to the address record.
Values are user defined.

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
                    <td>Address record in Premier can have  Primary address and a Seasonal address. Primary and Seasonal are considered as one record in Premier therefore they share the same address identifier.




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
If Retention is set to true, Address record can not be deleted. Address can be deleted only if Retention Code is false or not provided.
</td>
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
                <tr>
                    <td><code>AddrKeys</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Precision stores the Party's primary and alternate addesses as part of the customer record. Both PartyId and AddressIdent are required to identify the address record to modify.</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.PartyKeys.PartyId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Customer Name, the value that uniquely identifies the customer whose address will be modified.
</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.AddressIdent</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Required to modify an alternate customer address. Refers to Alternate Address Code (01-99). Send the value that identifies the customer's alternate address you want to modify. Address must already exist. If you want to modify the customer's primary address, send 0. If no value is sent, the system will modify the primary customer address.
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Send the entire address record in the Mod request. If a field or repeating aggregate is not sent, then the system will delete the data. The system will determine the new, updated, or removed data.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.AddrRelRef.AddrKeys.PartyKeys.PartyId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Customer Name, the value that uniquely identifies the customer who is tied to the PostAddr. This value cannot be modified.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.AddrFormatType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Precision supports Label format.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.FullName1</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This field should be used if a Name needs to be populated in the Name/Address field of Precision.  Using this field will set the Name/Address Indicator to "Name".  Example:  CO John Doe.  Do not send a % sign for Care Of.

You should not send both the FullName1 and Addr2 xpaths.  You need to choose to send only one value based on if it is a name or address.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.Addr1</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Mailing Address line in Precision. The street address, rural route or box number where customer correspondence is mailed. This line is required for an address. Precision accepts up to 40 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.Addr2</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This field should be populated with an address field.  If there is no second address needed for this customer do not populate this field.

If a value is sent in this field the Name/Address Indicator will be set to "Address".

You should not send both the FullName1 and Addr2 xpaths.  You need to choose to send only one value based on if it is a name or address.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.City</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Precision accepts up to 26 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.County</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Applies for US state of Indiana only. Used by the Primary address record only.
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.StateProv</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Two character US state abbreviation. Values are client-defined.
Precision requires a state for US addresses.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.PostalCode</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>If ForeignFlag is true, then Precision accepts any value up to 10 characters. If ForeignFlag is false, then Precision accepts either 5 character zip or 10 character zip+4 (for example 32715-1234).
Precision requires a zip code for US addresses and postal code for non-US addresses.
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.CountryCode.CountryCodeSource</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>The XREF rule LMXRL0001529 in ESF studio can be setup to indicate the Country code source standard used by a Financial Institution and the client application on Precision core. 
If no value is setup in this rule, then the source standard sent in this field will be used to determine the Country code source standard to translate the country code value for the postal address. If the request does not have a valid value in the /PostAddr/CountryCode/CountryCodeSource field, then ESF will pass through the values for /CountryCodeValue field received in the Precision Add/Mod requests. </td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.CountryCode.CountryCodeValue</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Field applies to international (non-US) addresses.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.AddrType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Only one Primary address can exist. Physical address, when different than the Primary address, is a Secondary address. Any alternate address with a TimeFrame (start and end date) is Seasonal.
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.ExpDt</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Requried when PostAddr TimeFrame is sent. Date the alternate address' schedule expires.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.MoveInDt</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Date at Current Address. Applies only to the current Primary address.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.ContactMethod</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Address Change. Method used to notify the Financial Institution of the address change. Values are client-defined.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.Comment</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Comments about the address. Up to 25 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.CensusTract</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to GEO code. EFX presents information along with address details; however, Precision stores a single instance of this information separately from address information. Send the CentrusTract  with the Primary address record only. Precision accepts up to 15 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.ForeignFlag</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Foreign Address which indicates if the address is outside the United States. </td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.PhoneNum.PhoneIdent</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Applies only to Secondary addresses. Phone sequence that identifies which of the customer's phone numbers to use for the Secondary address. Phone record must already exist for the customer.
</td>
                </tr>
            </tbody>
        </table>


<!-- type: tab -->

## Implementation Notes Precision

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
                    <td><code>AddrKeys</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Precision stores the Party's primary and alternate addesses as part of the customer record. Both PartyId and AddressIdent are required to identify the address record to modify.</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.PartyKeys.PartyId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Customer Name, the value that uniquely identifies the customer whose address will be modified.
</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.AddressIdent</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Required to modify an alternate customer address. Refers to Alternate Address Code (01-99). Send the value that identifies the customer's alternate address you want to modify. Address must already exist. If you want to modify the customer's primary address, send 0. If no value is sent, the system will modify the primary customer address.
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Send the entire address record in the Mod request. If a field or repeating aggregate is not sent, then the system will delete the data. The system will determine the new, updated, or removed data.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.AddrRelRef.AddrKeys.PartyKeys.PartyId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Customer Name, the value that uniquely identifies the customer who is tied to the PostAddr. This value cannot be modified.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.AddrFormatType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Precision supports Label format.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.FullName1</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This field should be used if a Name needs to be populated in the Name/Address field of Precision.  Using this field will set the Name/Address Indicator to "Name".  Example:  CO John Doe.  Do not send a % sign for Care Of.

You should not send both the FullName1 and Addr2 xpaths.  You need to choose to send only one value based on if it is a name or address.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.Addr1</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Mailing Address line in Precision. The street address, rural route or box number where customer correspondence is mailed. This line is required for an address. Precision accepts up to 40 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.Addr2</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This field should be populated with an address field.  If there is no second address needed for this customer do not populate this field.

If a value is sent in this field the Name/Address Indicator will be set to "Address".

You should not send both the FullName1 and Addr2 xpaths.  You need to choose to send only one value based on if it is a name or address.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.City</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Precision accepts up to 26 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.County</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Applies for US state of Indiana only. Used by the Primary address record only.
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.StateProv</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Two character US state abbreviation. Values are client-defined.
Precision requires a state for US addresses.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.PostalCode</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>If ForeignFlag is true, then Precision accepts any value up to 10 characters. If ForeignFlag is false, then Precision accepts either 5 character zip or 10 character zip+4 (for example 32715-1234).
Precision requires a zip code for US addresses and postal code for non-US addresses.
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.CountryCode.CountryCodeSource</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>The XREF rule LMXRL0001529 in ESF studio can be setup to indicate the Country code source standard used by a Financial Institution and the client application on Precision core. 
If no value is setup in this rule, then the source standard sent in this field will be used to determine the Country code source standard to translate the country code value for the postal address. If the request does not have a valid value in the /PostAddr/CountryCode/CountryCodeSource field, then ESF will pass through the values for /CountryCodeValue field received in the Precision Add/Mod requests. </td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.CountryCode.CountryCodeValue</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Field applies to international (non-US) addresses.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.AddrType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Only one Primary address can exist. Physical address, when different than the Primary address, is a Secondary address. Any alternate address with a TimeFrame (start and end date) is Seasonal.
</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.ExpDt</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Requried when PostAddr TimeFrame is sent. Date the alternate address' schedule expires.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.MoveInDt</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Date at Current Address. Applies only to the current Primary address.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.ContactMethod</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Address Change. Method used to notify the Financial Institution of the address change. Values are client-defined.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.Comment</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Comments about the address. Up to 25 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.CensusTract</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to GEO code. EFX presents information along with address details; however, Precision stores a single instance of this information separately from address information. Send the CentrusTract  with the Primary address record only. Precision accepts up to 15 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.ForeignFlag</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Foreign Address which indicates if the address is outside the United States. </td>
                </tr>
                <tr>
                    <td><code>AddrInfo.PostAddr.PhoneNum.PhoneIdent</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Applies only to Secondary addresses. Phone sequence that identifies which of the customer's phone numbers to use for the Secondary address. Phone record must already exist for the customer.
</td>
                </tr>
            </tbody>
        </table>


<!-- type: tab-end -->

---        

