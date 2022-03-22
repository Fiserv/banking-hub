# Get Address - Implementation Notes

This section describes the service provider implementation notes applicable for the Get Address API.

<!--
type: tab
titles: Premier, Precision
-->

## Implementation Notes Premier
  <table cellspacing="0">
            <col style="width : 426px;" />
            <col style="width : 69.75px;" />
            <col style="width : 71.25px;" />
            <col style="width : 426px;" />
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
                    <td><code>RecCtrlOut.SentRecCount </code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This implementation will return one address record, which can include Primary and Seasonal address and any relationships to Party(s) and Account(s).</td>
                </tr>
                <tr>
                    <td><code>AddrSel.AddrId </code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Unique address record identifier.Refers to Address Id in Premier.For Premier Primary address and Seasonal addresses share the same identifier, therefore this service will return both,- Primary and Seasonal address, if applicable.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.AddrRelRef </code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This aggregate provides information on how selected address is related to a party(s) and/or account(s).</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.AddrRelRef.PartyKeys</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Identifies Party to which address is related to.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.AddrRelRef.AcctKeys</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Identifies Account to which address is related to.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.AddrRelRef.AddrUse</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Premier suppports the following Address Uses for a Party :
Home,
Personal,
Business,
Tax
User define values.Premier suppports the following Address Uses for an Account :
Inquiry
Mailing
MultipleMailer
Beneficiary
Miscellaneous
Tickler
Indirect
Closed
1098Tax 
1099ATax  
1099BTax
1099DIVTax 
1099INTTax  
1099MISCTax 
1099OIDTax 
1099RTax 
1099STax 
5498Tax 
TaxBNotice 
1099CTax 
1099ETax 
1042STax 
NoteCosigner 
NoteEscrow 
NoteTaxEscrow 
NoteInsuranceEscrow 
FinancialPropertyStmt
LineCosigner 
LineCommitment

</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr </code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Address record in Premier can consist of two addresses,- Primary address and a Seasonal address.Primary and Seasonal addresses are considerred as one record in Premier, therefore they share the same address identifier.If Primary address record has Seasonal address related to it, ESF displays them as a separate Postal Address instances.Seasonal address will always have a time frame.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.RelationshipMgr.RelationshipRole</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Officer refers to Responsibility Code; 
Referral Officer refers to Referral Responsibility Code.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.OriginatingBranch</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Branch Region associated to the address record.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.ResponsibleBranch</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Accounting Branch associated to the address record.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.AddrFormatType</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Premier supports Label address format.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.Addr1</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Required to be provided if a new address record is being created.Dependent on Name and Address Length Option defined under Miscellaneous specification in Premier, First Address Line can be either 30 or 40 characters long.Name and Address Length Option values available in Premier:
"0" indicates names and addresses up to 30 characters in length can be entered."1" indicates names and addresses up to 40 characters in length can be entered."2" indicates names and addresses up to 30 characters may be entered, and that two address lines are available."3" indicates names and addresses up to 40 characters may be entered, and that two address lines are available.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.Addr2</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Address Line 2 is supported if enabled under Address and Name Length Option in Miscellaneous specification in Premier.Preceding also defines the length of Address Line 2, which can be either 40 or 30 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.PostalCode</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Postal Code provides information about the ZIP code, if Address is a United States address.It also provides Postal Code information, if address is a non-US address.The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code.The four additional digits are optional and when not present they are will be displayed as 0000.Examples: 32714-1234 or 32714-0000 

Postal codes for non-US addresses are simply a  string of characters.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.AddrType</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Address record in Premier, can consist of two addresses.The main address, called Primary address in ESF, and a Seasonal address.Primary and Seasonal are considerred as one record in Premier therefore they share the same address identifier.ESF displays these two addresses as a separate Postal Address aggregates.Seasonal address will always have a time frame.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.TimeFrame.StartDt</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Applicable for Seasonal Address Type only.The Seasonal address begins on the same Start date and ends on the same End date every year.ESF response displays year as 9999  for Seasonal address Start year.The month and the day of the month will show the actual Seasonal address  start date.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.TimeFrame.EndDt</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Applicable for Seasonal Address Type only.The Seasonal address begins on the same Start date and ends on the same End date every year.ESF response displays year as 9999  for Seasonal address End year.The month and the day of the month will show the actual Seasonal address end date.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.Retention</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>If indicated not to retain Address record, Premier automatically  deletes it when no accounts, tax addenda, or any other relationships exist for the address record.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.CensusTract</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>The number assigned by the U.S.Census Bureau used to identify a geographic location.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.CensusBlock</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Delivery Point.The number  assigned by the U.S.Postal Service used to uniquely identify each carrier delivery point.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.HandlingCode</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Indicates special routing information for customer correspondence.Values are client-defined.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.HandlingCodeOption</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.MSACode</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Code that identifies a Metropolitan Statistical Area for postal delivery purposes.</td>
                </tr>
                <tr>
                    <td><code>AddrSel </code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>
If both Addr1 and Street are populated both will be sent to Premier.However, Premier gives precedence to Address and will return matching records for only the value in Addr1.</td>
                </tr>
                <tr>
                    <td><code>AddrSel.Street </code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Premier Stores the Address information in Upper Case (Capital Letters).While searching the address by street, the calling application is required to provide the full/partial Street Name in capital letters (upper case) to fetch matching address records.In case the consumer sends the Street Name in lower case, no address records would be returned by ESF.</td>
                </tr>
                <tr>
                    <td><code>AddrRec </code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This search only returns information about  primary addresses.To get additional information about an address, use AddrInq_ByAddrId.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.RelationshipMgr.RelationshipRole</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Officer refers to Responsibility Code; Referral Officer refers to Referral Responsibility Code.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.OriginatingBranch</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Branch Region.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.AddrFormatType</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Address format on Premier is always label.</td>
                </tr>
            </tbody>
        </table>

<!-- type: tab -->

## Implementation Notes Precision

  <table cellspacing="0">
            <col style="width : 426px;" />
            <col style="width : 69.75px;" />
            <col style="width : 71.25px;" />
            <col style="width : 426px;" />
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
                    <td><code>AddrSel </code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Use this service to get the details for a single address for the customer.To get all the customer's addresses, use the PartyInq service.</td>
                </tr>
                <tr>
                    <td><code>AddrSel.PartyKeys.PartyId </code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Customer Name, the value that uniquely identifies the customer associated with the address.</td>
                </tr>
                <tr>
                    <td><code>AddrSel.AddressIdent </code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td> Refers to Alternate Address Code (01-99).Send the value that identifies the customer's alternate address.If you want to inquire on the customer's primary address, send 0.If no value is sent, the system will return the customer's primary address.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.AddressIdent</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Alternate Address Code.AddressIdent 1-99 = additional (alternate) addresses for the customer.0 or empty tag indicates the customer's primary address.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.AddrFormatType</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td> Precision uses Label format only.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.FullName1</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This field would replace Addr2 in future releases.Refers to Name/Address, supplementary information for the legal name or address.This line prints below the primary name and above the mailing address.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.Addr1</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>The street address, rural route or box number where customer correspondence is mailed.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.Addr2</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>It is advisable that instead of Addr2, the FullName1 field be used by the consumer within the PostAddr.aggregate as Addr2 field would not be supported in the future ESF Releases.It serves the same purpose as FullName1.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.County</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Applies for US state of Indiana only.Used by the Primary address record only.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.StateProv</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Two character US state abbreviation.Values are client-defined.Precision requires a state for US addresses.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.PostalCode</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>If ForeignFlag is true, then Precision accepts any value up to 10 characters.If ForeignFlag is false, then Precision accepts either  5 character zip or 10 character zip+4 (for example 32715-1234).Precision requires a zip code for US addresses and postal code for non-US addresses</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.CountryCode.CountryCodeSource</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to the country code source standard used by the Finanical institution.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.CountryCode.CountryCodeValue</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>For international non-US addresses.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.AddrType</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Primary refers to the CIF Mailing Address.Only one Primary address is allowed.Secondary refers to Alternate Address.Seasonal refers to a Scheduled Alternate Address with a start and end date.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.TimeFrame.StartDt</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>date format MM/DD/YYYY</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.TimeFrame.EndDt</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>date format MM/DD/YYYY</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.ExpDt</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>date format MM/DD/YYYY</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.MoveInDt</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Date at Current Address.Applies only to the current Primary address.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.ContactMethod</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Address Change.Method used to notify the Financial Institution of the address change.Values are client-defined.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.UpDt</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Date Last Address Change.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.Comment</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Comments about the address.Up to 25 characters.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.CensusTract</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to GEO code.This field is available only for the customer's primary address.Precision Graphical displays this information separate from address information.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.ForeignFlag</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Foreign Address which indicates if the address is outside the United States.</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.MaintDt</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This field is available only for the customer's alternate addresses (Secondary and Seasonal).</td>
                </tr>
                <tr>
                    <td><code>AddrRec.AddrInfo.PostAddr.PhoneNum.Phone</code>
                    </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>US phone will have 10 digits and always excludes the +IntlDialCode; International phone may have up to 15 digits.Phone extension is valid for work (business) phone only.</td>
                </tr>
            </tbody>
        </table>



<!-- type: tab-end -->
