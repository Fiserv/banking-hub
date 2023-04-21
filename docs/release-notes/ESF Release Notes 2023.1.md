# Release Notes 
### 2023_Q1
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA
-->


<p style="font-size: 24px; font-weight: bold;">What's New </p>

**Get Indirect Liability  `POST /indirectLiability/secured`**


- Added new API in Indirect Liability service.


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

**Add Account `POST /accounts`**


Deleted below mapping fields as they were incorrectly mapped:
- PartyAcctRelInfo/AcctRef/AcctKeys/AcctIdent
- PartyAcctRelInfo/AcctRef/AcctKeys/AcctIdent/AcctIdentType
- PartyAcctRelInfo/AcctRef/AcctKeys/AcctIdent/AcctIdentValue

Updated the flow to include the case PORT/CreditLine are created using values sent in the request.

Added new call GetPortfolio to implement functionality when bank pass their sequenced number in Portfolio number field.



**Add Account `POST /accounts`**


Mapped new fields to introduce functionality to add rate adjuster, Credit Bureau, PaymentSplitOverride and Final Payment Amount to a loan account.
- LoanAcctInfo/RateChangeData/RateVarianceTwo
- LoanAcctInfo/CreditBureauAcctData/BureauAcctType
- LoanAcctInfo/CreditBureauAcctData/BureauStatus
- LoanAcctInfo/LoanPmtOption
- LoanAcctInfo/LateFee/FinalPmtLateFeeInd
- LoanAcctInfo/LateFee/SchedPmtLateFeeInd
- LoanAcctInfo/LateFee/IntPmtLateFeeInd


**Add Account `POST /accounts`**


- Mapped new aggregate LoanAccctInfo/DishonoredFee to support adding Dishonored Fee through AcctAdd_Loan message.


**Add Account `POST /accounts`**


Mapped new fields to add Deferral Addenda record:
- LoanAcctInfo/DeferredFee/DeferredLoanRate
- LoanAcctInfo/DeferredFee/DeferredFirstPmtDt
- LoanAcctInfo/DeferredFee/DeferredPmtFreq


**Add Account `POST /accounts`**


Mapped new fields to add record for AutoDraftAmount and AutoPymtDraftDate fields through AcctAdd_Loan message:
- LoanAcctInfo/LoanBilling/AutoPmtDraftAmtOption
- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt
- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/Amt
- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/CurCode
- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/CurCode/CurCodeType
- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/CurCode/CurCodeValue
- LoanAcctInfo/LoanBilling/NextAutoPmtDraftDt


**Add Account `POST /accounts`**


- Mapped LoanAcctInfo/StatedAPR field to add record for Stated APR field through AcctAdd_Loan message  


**Add Account `POST /accounts`**


- Mapped new fieldLoanAcctInfo/OriginationFee/AdvanceOption to support advance option through AcctAdd_Loan message. 


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

**BeneficialOwnerAdd `POST /beneficialowner`**


- The BeneficialOwnerAdd service implementation provides the ability to add a beneficial owner to a legal entity or a business customer. Ownership details, such as business title and/or percent allocated, can be set during the creation of this relationship. Only one record is added per service request.


**BeneficialOwnerMod `PUT /beneficialowner`**


- The BeneficialOwnerMod service implementation provides the ability to modify the beneficial ownership details of the beneficial owner such as business title and/or percent allocated. The relationship type code cannot be changed using this service operation. Only one record is modified per service request. 


**BeneficialOwnerInq `POST /beneficialowner/secured`**


- The BeneficialOwnerInq service implementation provides the ability to retrieve the details about the beneficial owners associated to a legal entity or a business customer like the full name of the beneficial owner, type of responsibility (control) the beneficial owner has, the percent of direct or indirect equity ownership that the beneficial owner has.


**BeneficialOwnerDel `PUT /beneficialowner/secured`**


- The BeneficialOwnerDel service implementation provides the ability to delete a beneficial owner to a legal entity or a business customer. Only one record is deleted per service request. 


**AddrMod_Party `PUT partyacctsvc/address`**


- The AddrMod for Party service implementation for Cleartouch core provides the ability to update an existing address for a party. Only one address can be updated per request. This service allows to update Primary, Secondary, Seasonal or PrimaryPending (future primary) address for a party. 


**AddrMod_Acct `PUT partyacctsvc/address`**


- The AddrMod for Account service implementation for Cleartouch core provides the ability to update an existing address for an account. Only one address can be updated per request. This service allows to update only Secondary and Seasonal address for an account having address usage as Dividend, Stmt, 1099Tax, Check, Property, Alternate. 


**AddrInq_Party `POST partyacctsvc/address/secured`**


- The AddrInq for Party service implementation retrieves all of the addresses associated with the requested customer including Primary, Secondary, Seasonal or PrimaryPending (future primary). 


**AddrInq_Acct `POST partyacctsvc/address/secured`**


- The AddrInq for Account service implementation retrieves Secondary and Seasonal addresses associated with the requested account having address usage as Dividend, Statement, 1099Tax, Check, Property, Alternate.


**AddrDel_Party `PUT partyacctsvc/address/secured`**


- The AddrDel for Party service supports the ability to delete an address tied to customer. Only one address can be deleted per request. Only Secondary, Seasonal or a future Primary (PrimaryPending) addresses can be deleted. 


**AddrDel_Acct `PUT partyacctsvc/address/secured`**


- The AddrDel for Account service supports the ability to delete an address tied to an account. Only one address can be deleted per request. Only Secondary and Seasonal addresses can be deleted. 


**CollateralAdd `POST /collateral/collateral`**


- CollateralAdd service provides the ability to add new collateral record and link parties and addresses to the collateral being created. Several types of collateral are supported and the relevant information may differ based on the type of collateral being added.<br>
- Note: The service currently supports CollateralType as Property


**AcctAdd_Deposits `POST /acctmgmt/accounts`**


- AcctAdd service allows to create new Certificate of Deposit , Demand Depoist , Savings , money market , passbook accounts and relate it to a one or multiple Parties.<br>
- This service allows to add Postal address which will be account specific


**AcctAdd_LOC `POST /acctmgmt/accounts`**


- AcctAdd service allows to create new Line of Credit account and relate it to a one or multiple Parties.<br>
- This service allows to add Postal address which will be account specific


**MultiAcctInq `POST /accounts/list/secured`**


- This is an interface that allows multiple accounts to be inquired from Cleartouch. The service in turn calls ESF AcctInq service for DDA/SDA/CDA/ILA/MLA account types. ESF service CardInq for CRD or SafeDepositInq is invoked  for SDB Account Types.


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
