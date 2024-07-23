# Release Notes 
### 2022_Q3
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA
-->


<p style="font-size: 22px;">Enhancements </p>

**Add Account `POST /accounts`**


- User can now add the combined statement relationship to PRM account using  field "StmtGroup"  which is implemented for this change.


**Get Account `POST /accounts/secured`**


- User can inquire the combined statement relationship for PRM account using  field "StmtGroup"  which is implemented for this change.


**Update Party `PUT /party`**


- User can now modify the combined statement relationship to PRM account using  field "StmtGroup"  which is implemented for this change.


**Add Transfer `POST /transfers`**


- This service was changed to modify how the EffDt is used when posting a transaction. The EffDt will be the Posting Date in Premier unless the EffDt is older than the TMS System processing date; then, the TMS System processing date will be the Posting Date.  


**Get Party Account Relationship `POST /PartyAcctRel/Secured`**


- The service provides the ability to return Secondary and Seasonal addresses of the party in the PartyAcctRelInq response


<!-- type: tab -->
<p style="font-size: 22px;">Enhancements </p>

**Update Party `PUT /Parties`**


- ESF now provides ability to map both TIN and Foreign TaxId by implementing a new field "OtherTaxIent" for Foreign TaxId.


<p style="font-size: 22px;">Fixed </p>

**Get Party Account Relationship `POST /PartyAcctRel/Secured`**


- When the party has both TIN and Foreign TaxId available, Then preference is given to TIN to map to EFX field /TaxIdent in the PartyAcctRelInq response.


<!-- type: tab -->
<p style="font-size: 22px;">What's New </p>

**Add Account `POST /accounts`**


- Something new that was added or introduced like a documents or a services.


<!-- type: tab -->
<p style="font-size: 22px;">What's New </p>

**Add Account `POST /accounts`**


- Something new that was added or introduced like a documents or a services.


<!-- type: tab -->
<p style="font-size: 22px;">Enhancements </p>

**Get Party Account Relationship `POST /partyacctrel/secured`**


- The search by account was changed to check for a numeric MSAcode prior to returning the MSACode and the MSACodeEnumDesc.  If MSACode is not numeric, neither the MSACode or the MSACodeEnumDesc will be returned. 


**Get PartyInq `POST /parties/secured`**


- This service was changed to check for a numeric MSAcode prior to returning the MSACode and the MSACodeEnumDesc.  If MSACode is not numeric, neither the MSACode or the MSACodeEnumDesc will be returned. 


<!-- type: tab-end -->
