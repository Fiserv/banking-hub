# Add Address - Implementation Notes

This section provides the provider-specific request schema and implementation notes applicable for Add Address API.


<!--
type: tab
titles: Premier, Cleartouch
-->

The following table lists the provider-specific fields and describes the implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

<table cellspacing="0">
            <col style="width : 283.5px;" />
            <col style="width : 55.5px;" />
            <col style="width : 57px;" />
            <col style="width : 108.75px;" />
            <tbody>
                <tr>
                    <td>Field Name</td>
                    <td>Core Usage</td>
                    <td>Core length</td>
                    <td>Implementation Note</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>OvrdExceptionData</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrInfo</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrInfo.AddrRelRef</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>This aggregate to be used if it is intended to associate new address to existing Party(s).
New address can be added to the Party as a Secondary address only.</td>
                </tr>
                <tr>
                    <td>AddrInfo.AddrRelRef.PartyKeys</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrInfo.AddrRelRef.PartyKeys.PartyId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrInfo.AddrRelRef.AddrUse</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Identifies what new address will be used for.
Other values can be user defined.
</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.OpenDt</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Premier requires  date to be provided when creating new Address record.
Does not apply to Seasonal Address type.
Format YYYY-MM-DD.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.RelationshipMgr</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Does not apply to Seasonal Address type.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.RelationshipMgr.RelationshipRole</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Officer refers to Responsibility Code; Referral Officer refers to Referral Responsibility Code.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.OriginatingBranch</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to a Branch Region.
Premier requires Originating Branch to be provided when creating new Address record.
Values are user defined.

Does not apply to Seasonal Address type.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.ResponsibleBranch</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Accounting Branch.

Does not apply to Seasonal Address type.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.AddrFormatType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Premier supports Label Address format.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.Addr1</td>
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
                    <td>AddrInfo.PostAddr.Addr2</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Address Line 2 is supported if enabled under Address and Name Length Option in Miscellaneous specification in Premier. Preceding also defines the length of Address Line 2, which can be either 40 or 30 characters.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.City</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>City' field in Premier is 20 characters (including spaces). It is recommended that the Consumer abbreviate the 'City' being sent in the EFX Request. E.g. City "Rancho Santa Margarita" exceeds 20 characters. Abbreviation "Rancho Santa Mrgrta" or "Rancho S Margarita" can be used.
Premier accepts a total length of 40 characters for City, StateProv and PostalCode appended together, including spaces.
Required to be provided.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.StateProv</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Required to be provided, if country is United States.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.PostalCode</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Postal Code provides information about the ZIP code, if Address is a United States address. It also provides Postal Code information, if address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they are will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 

Postal codes for non-US addresses are simply a  string of characters.

Required to be provided, if address country is United States.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.CountryCode</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.CountryCode.CountryCodeSource</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.CountryCode.CountryCodeValue</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Values are user defined.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.AddrType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Address record in Premier can have  Primary address and a Seasonal address.  Seasonal Address record can not exist as a single address record for Premier. Seasonal address is always related to a Primary Address record, therefore Seasonal address can not be created without Primary address.

Primary address type is required when creating address record. Seasonal Address is optional.
Timeframe is required for Seasonal Address Type.



</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.TimeFrame</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.TimeFrame.StartDt</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Applicable for Seasonal Address Type only.   The Seasonal address begins on the same Start date and ends on the same End date every year, therefore Premier only stores Seasonal Address Start month and Start day. Year can be provided as 9999</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.TimeFrame.EndDt</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Applicable for Seasonal Address Type only.   The Seasonal address begins on the same Start date and ends on the same End date every year, therefore Premier only stores seasonal address End month and End day. Year can be provided as 9999.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.Retention</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>If indicated not to retain Address record, Premier automatically  deletes it when no accounts, tax addenda, or any other relationships exist for the address record.
If Retention is set to true, Address record can not be deleted. Address can be deleted only if Retention Code is false or not provided.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.CensusTract</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>The number assigned by the U.S. Census Bureau used to identify a geographic location.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.CensusBlock</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Delivery Point. The number  assigned by the U.S. Postal Service used to uniquely identify each carrier delivery point.

If Census Block Is provided. ZipCode is expected to be provided in XXXXX-XXXX format.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.ForeignFlag</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.HandlingCode</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Values are client-defined. Indicates special routing information for customer correspondence.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.HandlingCodeOption</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Identifies the types of customer correspondence that will print handling messages, as defined by the Handling Code.</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.MSACode</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Code that identifies a Metropolitan Statistical Area for postal delivery purposes.</td>
                </tr>
                <tr>
                    <td>AddrStatusRec</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrStatusRec.AddrKeys</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrStatusRec.AddrKeys.AddrId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrStatusRec.AddrStatus</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrStatusRec.AddrStatus.AddrStatusCode</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrStatusRec.AddrStatus.EffDt</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
            </tbody>
</table>

---

<!-- type: tab -->

The following table lists the provider-specific fields and describes the implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

 <table cellspacing="0">
            <col style="width : 213.75px;" />
            <col style="width : 57px;" />
            <col style="width : 59.25px;" />
            <col style="width : 378px;" />
            <col style="width : 164.25px;" />
            <col />
            <tbody>
                <tr>
                    <td>Field Name</td>
                    <td>Core Usage</td>
                    <td>Core length</td>
                    <td>Implementation Note</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AcctAddrRelInfo</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AcctAddrRelInfo/AcctRef</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AcctAddrRelInfo.AcctRef.AcctKeys</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Either the party keys or the account keys  (not both) should be included in the request. </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr style="height : 30px;">
                    <td>AcctAddrRelInfo.AcctRef.AcctKeys.AcctId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>First occurrence will be for Primary Account and additional occurence will be for other Linked Accounts.</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr style="height : 45px;">
                    <td>AcctAddrRelInfo.AcctRef.AcctKeys.AcctType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>First occurrence will be for Primary Account and additional occurence will be for other Linked Accounts. 
Commercial loans are not supported for this service. </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr style="height : 30px;">
                    <td>AddrInfo.PostAddr.AddrUse</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Address Use is not required for Seasonal addresses. 
</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrInfo.PostAddr.County</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to 3 digit County code in Cleartouch. </td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr style="height : 45px;">
                    <td>AddrInfo.PostAddr.PhoneNum</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>The Phone number aggregate is only applicable to Seasonal addresses and is required by Cleartouch when the address type is Seasonal. 
</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrInfo/PostAddr/PhoneNum/PhoneType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr style="height : 150px;">
                    <td>AddrInfo.PostAddr.PhoneNum.Phone</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Cleartouch does not support International phone number or Phone Extension in this service. 

EFX Phone field follows format:
+IntlDialCode-AreaCode-PhoneNum
Client application must send the phone number in the above format. 
E.g. 

+1-800-5551212

</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrStatusRec/AddrKeys/AcctKeys</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrStatusRec/AddrKeys/AcctKeys/AcctId</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
                <tr>
                    <td>AddrStatusRec/AddrKeys/AcctKeys/AcctType</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                </tr>
            </tbody>
        </table>

---        

<!-- type: tab-end -->

