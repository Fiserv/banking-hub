# Release Notes 
### 2023_Q1
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


**BeneficialOwnerAdd `POST /beneficialowner`**


- The BeneficialOwnerAdd service implementation provides the ability to add a beneficial owner to a legal entity or a business customer. Ownership details, such as business title and/or percent allocated, can be set during the creation of this relationship. Only one record is added per service request.


**BeneficialOwnerMod `PUT /beneficialowner`**


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
