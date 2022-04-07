# Delete Address - Implementation Notes

This section describes the service provider implementation notes applicable for the Delete Address API.


<!--
type: tab
titles: Signature, Precision
-->

## Implementation Notes Signature
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
                    <td><code>AddrKeys</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>At least one of the address keys; account, party or card must be provided. </td>
                </tr>
                <tr>
                    <td><code>AddrKeys.PartyKeys</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>To delete an alternate address for a Party (Customer) use PartyKeys aggregate. 
Signature supports only one Secondary/ Seasonal address for a Party. 
Primary address can not be deleted in Signature. 


</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.PartyKeys.PartyId</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Customer Permanent Identifier. </td>
                </tr>
                <tr>
                    <td><code>AddrKeys.AcctKeys</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>To delete an address for an Account use AcctKeys aggregate.  Service Provider supports multiple Secondary/ Seasonal addresses for an Account, but only one address can be deleted with one service request.


</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.AcctKeys.AcctId</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Account Id. 

</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.AcctKeys.AcctType</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Account Type is required to properly identify the account.</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.AcctKeys.CardKeys</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>To delete address for a Card use CardKeys aggregate. Signature supports only one Secondary/ Seasonal address for a Card.</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.AcctKeys.CardKeys.CardId</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Card Id includes the ISO and Card Number. PAN (Primary Account Number) which is a maximum of 19 digits in Signature.
</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.AcctKeys.CardKeys.CardSeqNum</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to a Member Number. Member number is a one-digit number and it identifies multiple cards for different customers (for example, a wife’s card might have a 1 following it and the husband’s card might have a 2 following it to differentiate the cards). Only to be provided if Member Number functionality is  supported by Financial Institution. </td>
                </tr>
                <tr>
                    <td><code>AddrKeys.AddressIdent</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Alternate Address Type. It is a required field in Signature to delete the address, but in the case of Party it is always defaulted to Alternate.

Party: 
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
RPAStatementAddl

LOAN valid values:
Alternate
Government
LegalTitle
StatementPrimary
StatementAdditional1...5
</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.AddrType</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>In Signature, to delete an address the address type can either be Secondary or Seasonal. </td>
                </tr>
                <tr>
                    <td><code>AddrStatusRec.AddrKeys.PartyKeys.PartyId</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Customer Permanent Identifier. </td>
                </tr>
                <tr>
                    <td><code>AddrStatusRec.AddrKeys.AcctKeys.AcctId</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Account Id. </td>
                </tr>
                <tr>
                    <td><code>AddrStatusRec.AddrKeys.AcctKeys.CardKeys.CardId</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Card Id includes the ISO and Card Number. PAN (Primary Account Number) which is a maximum of 19 digits in Signature.
</td>
                </tr>
                <tr>
                    <td><code>AddrStatusRec.AddrKeys.AcctKeys.CardKeys.CardSeqNum</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to a Member Number. Will be present only if Member Number functionality is  supported by Financial Institution.
</td>
                </tr>
                <tr>
                    <td><code>AddrStatusRec.AddrKeys.AddressIdent</code></td>
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
                <tr>
                    <td><code>AddrStatusRec.AddrKeys.AddrType</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>In Signature, to delete an address the address type can either be Secondary or Seasonal. </td>
                </tr>
            </tbody>
        </table>

<!-- type: tab -->
## Implementation Notes Precision

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
                    <td><code>AddrKeys</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Use this service to delete an alternate address for the customer. The primary address cannot be deleted.
</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.PartyKeys.PartyId</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Required by Precision. Precision stores the Party's alternate addesses as part of the customer record.</td>
                </tr>
                <tr>
                    <td><code>AddrKeys.AddressIdent</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Required by Precision. Refers to Alternate Address Code. Use this field to identify a  alternate address (1-99) to be deleted.
</td>
                </tr>
                <tr>
                    <td><code>AddrStatusRec.AddrKeys.AddressIdent</code></td>
                    <td>&#160;</td>
                    <td>&#160;</td>
                    <td>Refers to Alternate Address Code.
</td>
                </tr>
            </tbody>
        </table>

<!-- type: tab-end -->
---

