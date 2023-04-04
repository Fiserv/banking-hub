# Release Notes 

<details>
<summary><h3>2023_Q1</h3></summary>
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA
-->


<p style="font-size: 24px; font-weight: bold;">What's New </p>

**Add Account `POST /accounts`**


- Something new that was added or introduced like a documents or a services.


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

**Add Account `POST /accounts`**


- Something new that was added or introduced like a documents or a services.


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

**Add Account `POST /accounts`**


- Something new that was added or introduced like a documents or a services.


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

**Add Account `POST /accounts`**


- Something new that was added or introduced like a documents or a services.


**BeneficialOwnerAdd `POST ?/beneficialowner`**


- The BeneficialOwnerAdd service implementation provides the ability to add a beneficial owner to a legal entity or a business customer. Ownership details, such as business title and/or percent allocated, can be set during the creation of this relationship. Only one record is added per service request.


**BeneficialOwnerMod `PUT ?/beneficialowner`**


- The BeneficialOwnerMod service implementation provides the ability to modify the beneficial ownership details of the beneficial owner such as business title and/or percent allocated. The relationship type code cannot be changed using this service operation. Only one record is modified per service request. 


**BeneficialOwnerInq `POST /beneficialowner/secured`**


- The BeneficialOwnerInq service implementation provides the ability to retrieve the details about the beneficial owners associated to a legal entity or a business customer like the full name of the beneficial owner, type of responsibility (control) the beneficial owner has, the percent of direct or indirect equity ownership that the beneficial owner has.


**BeneficialOwnerDel `PUT /beneficialowner/secured`**


- The BeneficialOwnerDel service implementation provides the ability to delete a beneficial owner to a legal entity or a business customer. Only one record is deleted per service request. 


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

**GetAccount `Get/Accounts`**


- As a User client should be able to see  Last Deposit Date , Last Deposit amount , Last Interest Paid Date and Last Interest Paid Amount for DDA and SDA account when the accounts are enquired.


**PartyInq `POST /parties/secured`**


- Enhancement done to return employment details in case of a person party and return business establishment date in case of a business/organization party.


**CardAcctRelInq `POST /cardAccounts/secured`**


- The fix is done to send the AddrType correctly to the Cleartouch core.


**CardInq `POST /cards/secured`**


- Enhancement done to the CardInq service to return card transaction limits for the requested card.


**PartyAcctRelInq_ByAcct `POST /partyacctrel/secured`**


- Enhancement done to the PartyAcctRelInq_ByAcct service to return issued identification information for person or organization Customers.


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

**AcctTrnInq `Get/Accounts`**


- As the Existing AcctTrnInq_LOANs was not working when client was trying to provide the CLA accounts to retrieve the transaction history which was fixed as a part of this Defect


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

**Add Account `POST /accounts`**


- Something new that was added or introduced like a documents or a services.


<!-- type: tab-end -->
</details>

<details>
  <summary> <h3>2022_Q3</h3> </summary>
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA
-->


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

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
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

**Update Party `PUT /Parties`**


- ESF now provides ability to map both TIN and Foreign TaxId by implementing a new field "OtherTaxIent" for Foreign TaxId.


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

**Get Party Account Relationship `POST /PartyAcctRel/Secured`**


- When the party has both TIN and Foreign TaxId available, Then preference is given to TIN to map to EFX field /TaxIdent in the PartyAcctRelInq response.


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

**Add Account `POST /accounts`**


- Something new that was added or introduced like a documents or a services.


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

**Add Account `POST /accounts`**


- Something new that was added or introduced like a documents or a services.


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

**Get Party Account Relationship `POST /partyacctrel/secured`**


- The search by account was changed to check for a numeric MSAcode prior to returning the MSACode and the MSACodeEnumDesc.  If MSACode is not numeric, neither the MSACode or the MSACodeEnumDesc will be returned. 


**Get PartyInq `POST /parties/secured`**


- This service was changed to check for a numeric MSAcode prior to returning the MSACode and the MSACodeEnumDesc.  If MSACode is not numeric, neither the MSACode or the MSACodeEnumDesc will be returned. 


<!-- type: tab-end -->

</details>
