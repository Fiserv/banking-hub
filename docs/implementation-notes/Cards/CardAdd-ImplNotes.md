# Implementation Notes for Add Card
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`||  |
|`PartyCardRelInfo`||***Required**<br>Multiple PartyCardRelInfo aggregates can be provided in the request, if multiple parties are to be associated to the card. A card can be created with multiple card owners.|
|`PartyCardRelInfo.PartyRef`||  |
|`PartyCardRelInfo.PartyRef.PartyKeys`||  |
|`PartyCardRelInfo.PartyRef.PartyKeys.PartyId`||***Required**<br>This field refers to unique identifier of party associated to an account.|
|`PartyCardRelInfo.CardRef`||This aggregate is used to provide the portfolio number of existing clients that are consuming this service and had onboarded prior to ESF 9.2 release.|
|`PartyCardRelInfo.CardRef.CardKeys`||  |
|`PartyCardRelInfo.CardRef.CardKeys.CardIdent`||  |
|`PartyCardRelInfo.CardRef.CardKeys.CardIdent.CardIdentType`|PORT|This field refers to portfolio number.|
|`PartyCardRelInfo.CardRef.CardKeys.CardIdent.CardIdentValue`||  |
|`PartyCardRelInfo.PartyCardRelType`|Owner<br>Signer<br>OwnerSigner<br>JointTenancy<br>Executor<br>Trustee<br>Borrower<br>CoBorrower<br>Custodian<br>DoingBusinessAs|***Required**<br>Financial Institutions can create user defined relationship types.<br>OwnerSigner relationship is most commonly used for party to card relationship.|
|`PartyCardRelInfo.PartyCardRelOrder`|First<br>Second<br>Third<br>Other|Parties having first, second and third relationship order are considered to be the main names and, only one party can be associated with first/second/third relationship order on the card. Relationship order value of 'Other' is commonly used for relationships other than OwnerSigner, Signer and Owner. One party can have multiple 'Other' type of relationship orders on card. If Mailing Name Option parameter is set up at financial institution, then first, second and third names can be used for inquiry or account related mailing purpose. If Mailing Name Option parameter is set to Y, a card can have up to 3 names for mailing purpose which can be provided in Postal Address aggregate.|
|`PartyCardRelInfo.OwnerInd`|true<br>false|ESF has introduced a new data element - PartyAcctRelOrder to identify first 3 names displayed on the account. This element is available in ESF release prior to 9.2 and will be deprecated in future.|
|`PartyCardRelInfo.TaxReportingOwnerInd`|true<br>false|At least one tax relationship is required to create a card and, there cannot be more than one tax relationships associated to an account.|
|`CardInfo`||  |
|`CardInfo.CardNum`||This field does not include the ISO.<br>It can be provided if, known/obtained prior to opening a new card. If not provided, account number for new card will be generated.|
|`CardInfo.CardSeqNum`||Member number on debit card is incremented by 1 each time a card is re-issued (up to 8), or is incremented by 2 each time a debit card is force re-issued.<br>This field can be provided only if supported by CardType.|
|`CardInfo.CardType`||***Required**<br>This field refers to the client-defined debit card type code, and established in debit card type specifications, that includes the type of card to be produced for the account (For example, Standard Debit Card/VISA).|
|`CardInfo.ProductIdent`||***Required**<br>This field refers to product number.|
|`CardInfo.CardIdent`||  |
|`CardInfo.CardIdent.CardIdentType`|PORT|This field refers to portfolio number and used to provide the portfolio number for ESF 9.2 version. If portfolio number is not provided, ESF will create new portfolio.|
|`CardInfo.CardIdent.CardIdentValue`||  |
|`CardInfo.RelationshipMgr`||  |
|`CardInfo.RelationshipMgr.RelationshipMgrIdent`||Referral responsibility code identifies the employee who referred the customer to the institution.<br>Only one officer and one referral officer per card is supported.|
|`CardInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|  |
|`CardInfo.CardDtlStatus`|Active<br>ActiveNoRenew<br>NoWithdrawal<br>HotCard|***Required**<br>Values indicate following:<br>Active (0): Indicates an active card which will be re-issued when it is activated.<br>Do Not Renew (1): Indicates an active card which will not be re-issued when it expires.<br>No Withdrawal (7): Indicates that withdrawals are not allowed.<br>Hot Card (8): Indicates a hot card which will be captured if an ATM has the card capture feature.|
|`CardInfo.CardFee`||If CardInfo/CardPeriodData/CardAmtType is provided in request, then FeePlan provided for ForeignFee is overridden by the CardAmtType. To use the FeePlan provided in CardFee aggregate, CardInfo/CardPeriodData/CardAmtType should not be sent in request.|
|`CardInfo.CardFee.CardFeeType`|CardFee<br>ForeignFee|  |
|`CardInfo.CardFee.FeePlan`||If CardFeeType is CardFee, then charge code indicates one of the 20 charges from debit card charge specifications that is to be assessed on the debit card account. Debit card charge code specifications can be configured by Bank/FI.<br><br>If CardFeeType is ForeignFee, then FeePlan indicates the surcharge option i.e., assessment type for foreign ATM fee transactions. This is only applicable while using the ITI on-line ATM system.<br>Value of FeePlan is not transformed by ESF and is passed as-is between core and application.|
|`CardInfo.CardFee.TimeFrame`||  |
|`CardInfo.CardFee.TimeFrame.RecurRule`||  |
|`CardInfo.CardFee.TimeFrame.RecurRule.RecurType`|Cycle|  |
|`CardInfo.CardFee.TimeFrame.RecurRule.RecurInterval`||  |
|`CardInfo.ChargeFeeAcct`||  |
|`CardInfo.ChargeFeeAcct.AcctId`||  |
|`CardInfo.ChargeFeeAcct.AcctType`|DDA<br>SDA|  |
|`CardInfo.OpenDt`||***Required**<br>This field is required to be provided.|
|`CardInfo.ExpDt`||***Required**<br>This field is required to be provided.|
|`CardInfo.NextIssueDt`||***Required**<br>This field is required to be provided.|
|`CardInfo.CardCategory`|Personal<br>Business|***Required**<br>This field is required to be provided.|
|`CardInfo.PersonEmbossingName`||This aggregate can be used to provide the FirstName (GivenName) and LastName (FamilyName) of the CardHolder. FirstName can include the middle initial. Total field length of up to 15 characters is supported for FirstName and LastName.|
|`CardInfo.PersonEmbossingName.FamilyName`||  |
|`CardInfo.PersonEmbossingName.GivenName`||  |
|`CardInfo.PersonEmbossingName.NamePrefix`||  |
|`CardInfo.EmbossingName`||***Required**<br>Total field length of 26 characters is supported.|
|`CardInfo.SecondaryEmbossingName`||***Required**<br>Total field length of 26 characters is supported.|
|`CardInfo.PostAddr`||Card can have one primary, one secondary and two seasonal addresses associated to it.<br>Seasonal address cannot exist as a single address record and is related to either primary or secondary address. Therefore, seasonal address shares AddressIdent and AddrUse fields with primary and secondary address.<br>Value of AddrUse for primary and related seasonal address is 'Inquiry'.<br>Value of AddrUse for secondary and related seasonal address is 'Mailing'.<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if card can have different inquiry and mailing address/ names.<br>- If parameter is set to N, both inquiry and mailing addresses are same therefore, only primary address type and AddrUse as Inquiry is to be provided.<br>- If parameter is set to Y, both inquiry and mailing addresses can be different therefore, secondary address type and AddrUse as Mailing and Names is to be provided.<br>If existing address is to be linked to a card then, AddressIdent including AddrType, AddrUse and AdddrFormatType are required to be provided.<br>If new address is to be created for a card, address details including AddrType, AddrUse and AdddrFormatType is required to be provided.|
|`CardInfo.PostAddr.OpenDt`||This field is not applicable for seasonal address type.|
|`CardInfo.PostAddr.RelationshipMgr`||  |
|`CardInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`||This field is user-defined and not applicable for seasonal address type.|
|`CardInfo.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to responsibility code whereas, Referral Officer refers to referral responsibility code.|
|`CardInfo.PostAddr.OriginatingBranch`||This field refers to the branch region and values are user-defined. Not applicable for seasonal address type.|
|`CardInfo.PostAddr.ResponsibleBranch`||This field refers to the accounting branch associated to address record and does not apply to seasonal address type. Values are user-defined. |
|`CardInfo.PostAddr.NameIdent`||This field is applicable if AddrType is secondary and AddrUse is mailing.<br>Only up to 3 name identifiers can be provided if financial institution is configured to use different Primary/Inquiry and Secondary/Mailing addresses and names. If provided for Primary/Inquiry address it will be ignored as name relationships for inquiry are established using information provided in PartyCardRelInfo.<br>Not applicable for Seasonal Address type.<br>Only names which have a relationship to the card or card portfolio can be associated to the new card for mailing purpose.<br>|
|`CardInfo.PostAddr.AddressIdent`||***Conditionally Required**<br>This field refers to unique address identifier shared by primary and related seasonal address, whereas secondary and related seasonal address.<br>Required to be provided if existing address is to be added to the new card.<br>Do not provide this field if new address is to be created for for a card.|
|`CardInfo.PostAddr.AddrUse`|Inquiry<br>Mailing|***Required**<br>AddrUse for primary and related seasonal address is 'Inquiry', whereas for secondary and related seasonal address is 'Mailing'. This field is required to be provided if, new or existing address is to be linked to a card.<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if card can have different inquiry and mailing address/names.<br>- If parameter is set to N, both inquiry and mailing addresses are same therefore, primary/inquiry address information is supported.<br>- If parameter is set to Y, then secondary/mailing and primary/inquiry addresses are supported whereas, inquiry and mailing address data can be provided in request.<br>AddrUse for seasonal address is always same as primary/secondary address|
|`CardInfo.PostAddr.AddrFormatType`|Label<br>|***Required**<br>Label address format is supported.|
|`CardInfo.PostAddr.Addr1`||***Conditionally Required**<br>This field is required to be provided if new address record is to be created.<br>Value is dependent on address and name Length option defined under miscellaneous specification. Field length can be either 30 or 40 characters long.|
|`CardInfo.PostAddr.Addr2`||This field is supported if enabled under address and name length option defined under miscellaneous specification. Length can be either 40 or 30 characters.|
|`CardInfo.PostAddr.City`||***Conditionally Required**<br>This field is required to be provided if a new address record is to be created.<br>Field length is 20 characters long (including spaces). It is recommended for consumer to abbreviate the value sent in the EFX request to prevent truncation (For example, City name "Rancho Santa Margarita" exceeds 20 characters and can be abbreviated to "Rancho S Margarita" to avoid truncation). Total length of 40 characters is supported for city, StateProv and PostalCode (appended together) including spaces.<br>|
|`CardInfo.PostAddr.StateProv`||***Conditionally Required**<br>This field is required to be provided if, a new address record is to be created with country as United States.|
|`CardInfo.PostAddr.PostalCode`||***Conditionally Required**<br>This field is required to be provided if, a new address record is to be created with country as United States.<br><br>Postal Code provides information about the ZIP code if, address is from United States and, provides information about postal code if, address is not from United States.  This field provides the information in ZIP Code (5 Digit)-Additional Code (4 Digit) format. Additional code of four digits is optional and provides a more specific location within a given ZIP code. If additional code is not provided, it can be represented with value as '0000'. For example, 32714-1234 or 32714-0000.<br><br>Postal codes are string of characters for non-US addresses.|
|`CardInfo.PostAddr.CountryCode`||  |
|`CardInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`CardInfo.PostAddr.CountryCode.CountryCodeValue`||Values of this field are user-defined.|
|`CardInfo.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|***Conditionally Required**<br>This field is required to be provided if, new or existing address is to be linked to the card.<br>Card can have one primary, one secondary and two seasonal addresses. <br>However, seasonal address cannot exist as a single address record hence, it is always related to a primary/secondary address. Therefore, seasonal address always shares AddressIdent and AddrUse with primary or the secondary address.<br>In order to relate the primary/secondary address with seasonal address, present the seasonal address right after the primary/secondary address.<br>It is required to provide the TimeFrame for seasonal address.|
|`CardInfo.PostAddr.TimeFrame`||***Conditionally Required**<br>This field is required to be provided if AddrType is seasonal.|
|`CardInfo.PostAddr.TimeFrame.StartDt`||This field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`CardInfo.PostAddr.TimeFrame.EndDt`||This field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`CardInfo.PostAddr.Retention`|true<br>false|Retention code indicates if the address record is to be retained, or deleted if no accounts, tax addenda or any other relationship exists on an address record.<br>If new address record is to be created during account opening process with retention code as true, and if account opening process fails due to an error, ESF does not delete the new address record from system (If new address was created prior to an error). Address record remains in the system even if the account is not created due to an error.|
|`CardInfo.PostAddr.CensusTract`||  |
|`CardInfo.PostAddr.CensusBlock`||  |
|`CardInfo.PostAddr.ForeignFlag`|true<br>false|  |
|`CardInfo.PostAddr.HandlingCode`||This field indicates the special routing information for customer correspondence. Values in this field are client-defined.|
|`CardInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>|This field identifies type of correspondence that will print the handling messages, as defined by HandlingCode.|
|`CardInfo.PostAddr.MSACode`||  |
|`CardInfo.CardTrnLimit`||This is an optional aggregate and used to set a limit, based on the type and source of transaction.|
|`CardInfo.CardTrnLimit.TrnTypeValue`|Debit<br>Credit<br>Withdrawal<br>|This field is used in combination with transaction service and CardTrnLimit to identify, the amount of limit defined for a card.|
|`CardInfo.CardTrnLimit.TrnSubType`||  |
|`CardInfo.CardTrnLimit.TrnSrc`|ATM<br>POS<br>|OnLine/OffLine terms refer to the two distinct ways of processing debit payments i.e. Online/Offline. Customers need to endorse payments by submitting their personal identification numbers (PINs) at the point of sale in case of online debit transaction, whereas shoppers need to sign the sales receipts in case of offline transactions. POS refers to withdrawal of funds through a point-of-sale transaction (typically a cash or debit card purchase). ATM refers to withdrawal of funds using an ATM machine.|
|`CardInfo.CardTrnLimit.LimitType`|DailyMax<br>TrnMax|  |
|`CardInfo.CardTrnLimit.CurAmt`||  |
|`CardInfo.CardTrnLimit.CurAmt.Amt`||  |
|`CardInfo.CardTrnLimit.CurAmt.CurCode`|Field added|  |
|`CardInfo.CardTrnLimit.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`CardInfo.CardTrnLimit.CurAmt.CurCode.CurCodeValue`|USD|Only US dollars is supported, and consumer application is expected to send only USD in the request.|
|`CardInfo.MaxCreditLimitAmt`||This aggregate is optional and provides maximum withdrawal limit per day on a debit card.|
|`CardInfo.MaxCreditLimitAmt.Amt`||Credit card limit refers to the maximum amount a customer can withdraw in a 24-hour period (midnight to midnight), using the debit card as a credit card.|
|`CardInfo.MaxCreditLimitAmt.CurCode`|Field added|  |
|`CardInfo.MaxCreditLimitAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`CardInfo.MaxCreditLimitAmt.CurCode.CurCodeValue`|USD|Only US dollars is supported, and consumer application is expected to send only USD in the request.|
|`CardInfo.GenerateCardOrder`|ReplaceCard<br>NewCard<br>DoNotGenerate|  |
|`CardInfo.GeneratePINMailer`|GeneratePINMailer<br>DoNotGenerate|  |
|`CardInfo.CardPref`||  |
|`CardInfo.CardPref.Language`||  |
|`CardInfo.CardVerifyData`|ValidateCard<br>DoNotValidateCard|  |
|`CardInfo.OriginatingBranch`||This field refers to the two-digit branch number to which the card is assigned.|
|`CardInfo.ResponsibleBranch`||This field refers to client-defined accounting branch for similar accounting, processing and integration into the general ledger. Accounting Branch can also be used to group accounts for reporting.|
|`CardInfo.CardPeriodData`||  |
|`CardInfo.CardPeriodData.CardAmtType`|ForeignFeeWaived<br>ForeignFee|  |
|`CardInfo.CardPeriodData.CardPeriodType`|MTD|This field indicates the period in which data is reported. For example, month to date (MTD), life to date (LTD), etc. Only MTD value is supported.|
|`CardInfo.CardPeriodData.Amt`||  |
|`CardInfo.CardPeriodData.Count`||  |
|`CardInfo.DocDistributionOption`||Values of this field are client-defined.|
|`CardInfo.NicknameOption`|Printed<br>NotPrinted|  |
|`CardInfo.Nickname`||Field length of 40 characters is supported.|
|`CardInfo.ReportGroupCode`||Values of this field are client-defined.|
|`CardInfo.HandlingCode`||This field refers to the handling code to indicate the handling message printed in customer name and address area on all special forms. Values can be defined as data descriptions.|
|`CardInfo.PINOffset`||This field refers to a number, used with an algorithm specified in the institution specification file, to yield the personal identification number of a card holder.|
|`CardInfo.PINOffsetResetInd`|true<br>false|  |
|`CardInfo.PINInvalidEntryAllowedNum`||  |
|`CardInfo.AcctLinkData`||Multiple accounts can be associated to a new card by passing multiple occurrences of this aggregate in request. If the aggregate is provided then, values of  AcctRef/AcctKeys/AcctId and AcctRef/AcctKeys/AcctType should be sent to link with the card. Maximum 10 accounts can be linked to the card (for all account types). Time accounts cannot be linked to the card. Maximum number of accounts that can be linked to the card can be controlled with card specifications file by Financial Institution (FI). CardAcctRelInq operation can be used to fetch the accounts linked to the card.|
|`CardInfo.AcctLinkData.AcctRef`||  |
|`CardInfo.AcctLinkData.AcctRef.AcctKeys`||  |
|`CardInfo.AcctLinkData.AcctRef.AcctKeys.AcctId`||This field identifies the account which needs to be linked to the card.|
|`CardInfo.AcctLinkData.AcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>LOAN|This field identifies the type of account to be linked to the card. Account types DDA, SDA or LOAN can be linked to the card. Multiple accounts of same account type can be linked to a card. AcctType uniquely identify the account that is linked to the card.|
|`CardInfo.AcctLinkData.Nickname`||Nickname of the accountholder on an account can be updated by providing this field in request. Maximum field length of 18 characters is supported. This field is an account-level detail and cannot be amended as a standalone field therefore, AcctId and AcctType of account linked with the card should be provided corresponding to the Nickname to be updated.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`CardStatusRec`||  |
|`CardStatusRec.CardKeys`||  |
|`CardStatusRec.CardKeys.CardId`||Card account number reference to the card of 6-10 digit is returned in the response. PAN number of 16-digit is not available through the core interface due to PCI compliance restrictive norms hence, CardId returned in response should be used as key to call ESF CardInq operation to fetch the details of card.|
|`CardStatusRec.CardStatus`||  |
|`CardStatusRec.CardStatus.CardStatusCode`|Valid|  |
|`CardStatusRec.CardStatus.EffDt`||  |
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
