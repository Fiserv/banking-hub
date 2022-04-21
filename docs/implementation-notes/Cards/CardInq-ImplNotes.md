# Implementation Notes for Get Card
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> - To view the field descriptions and sample Requests and Responses, please refer the API Explorer section of this API
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`CardSel`||***Required**<br>It is required to provide this aggregate in the request. This aggregate contains CardId which is used to retrieve the details of card that is created using CardAdd operation.|
|`CardSel.CardKeys`||***Required**<br>This aggregate contains key fields that are required for inquiry operation.|
|`CardSel.CardKeys.CardId`||***Required**<br>This field refers to the value returned by CardAdd operation in response. CardId is the card-account number of 6-10 digits and not the 16-digit PAN number. CardId should be provided in the request of CardAcctRelInq operation, to obtain the card-account relationship (details of the accounts linked with the card). Relationship between card and an account is established using CardAcctRelMod operation.|
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`CardRec`||  |
|`CardRec.CardKeys`||  |
|`CardRec.CardKeys.CardId`||  |
|`CardRec.CardInfo`||  |
|`CardRec.CardInfo.CardNum`||This field does not comply with ISO. Value of this field contains card-account number of maximum 10 digits.|
|`CardRec.CardInfo.CardSeqNum`||This field refers to the member number on a debit card and is incremented by 1 each time a card is re-issued (up to 8) and is incremented by 2 each time, if a debit card is force re-issued.|
|`CardRec.CardInfo.CardType`||This field refers to the client-defined code for type of debit card established in debit card type specifications and used to indicate the type of debit card to be produced for an account (Standard Debit Card, VISA etc.).|
|`CardRec.CardInfo.ProductIdent`||Product is established in product specifications.|
|`CardRec.CardInfo.Desc`||  |
|`CardRec.CardInfo.RelationshipMgr`||  |
|`CardRec.CardInfo.RelationshipMgr.RelationshipMgrIdent`||Referral responsibility code identifies the employee who referred the customer to the institution.|
|`CardRec.CardInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|  |
|`CardRec.CardInfo.CardDtlStatus`|Active<br>ActiveNoRenew<br>NoWithdrawal<br>HotCard<br>Closed|Values indicate following:<br>Active (0): Indicates an active card which will be re-issued when it is activated.<br>Do Not Renew (1): Indicates an active card which will not be re-issued when it expires.<br>No Withdrawal (7): Indicates that withdrawals are not allowed.<br>Hot Card (8): Indicates a hot card which will be captured if an ATM has the card capture feature.<br>Closed (9): Indicates a closed card which will be captured if an ATM has the card capture feature.|
|`CardRec.CardInfo.CardDtlStatusEnumDesc`||  |
|`CardRec.CardInfo.CardFee`||  |
|`CardRec.CardInfo.CardFee.CardFeeType`|CardFee<br>ForeignFee|This field identifies the fee type (Card Fee or Foreign Fee).|
|`CardRec.CardInfo.CardFee.FeePlan`||If CardFeeType is CardFee, then charge code indicates one of the 20 charges from debit card charge specifications that is to be assessed on the debit card account. Debit card charge code specifications can be configured by Bank/FI as per requirement.<br>If CardFeeType is ForeignFee, then FeePlan indicates the surcharge option i.e., assessment type for foreign ATM fee transactions. This is only applicable while using the ITI on-line ATM system.<br>Value of FeePlan is not transformed by ESF and is passed as-is between core and application.<br>|
|`CardRec.CardInfo.CardFee.TimeFrame`||  |
|`CardRec.CardInfo.CardFee.TimeFrame.RecurRule`||  |
|`CardRec.CardInfo.CardFee.TimeFrame.RecurRule.RecurType`|Cycle|  |
|`CardRec.CardInfo.CardFee.TimeFrame.RecurRule.RecurInterval`||  |
|`CardRec.CardInfo.ChargeFeeAcct`||  |
|`CardRec.CardInfo.ChargeFeeAcct.AcctId`||This field refers to the DDA or savings account number of account that is debited for debit card service fees.|
|`CardRec.CardInfo.OpenDt`||This field refers to the debit card account opening date.|
|`CardRec.CardInfo.IssueDt`||  |
|`CardRec.CardInfo.ExpDt`||  |
|`CardRec.CardInfo.NextIssueDt`||  |
|`CardRec.CardInfo.CardCategory`|Personal<br>Business|  |
|`CardRec.CardInfo.EmbossingName`||This field refers to the name that appears as raised letters on debit card.|
|`CardRec.CardInfo.SecondaryEmbossingName`||  |
|`CardRec.CardInfo.PostAddr`||  |
|`CardRec.CardInfo.PostAddr.NameIdent`||AddrUse can have up to 3 name identifiers.|
|`CardRec.CardInfo.PostAddr.AddressIdent`||This field refers to unique address identifier that is shared by primary and related seasonal address.|
|`CardRec.CardInfo.PostAddr.AddrUse`|Inquiry<br>Mailing|Value of AddrUse for primary and related seasonal address is 'Inquiry'.<br>Value of AddrUse for secondary and related seasonal address is 'Mailing'.<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if card account can have different inquiry and mailing address/names.<br>- If parameter is set to N, both inquiry and mailing addresses are same therefore, only Inquiry address is returned by ESF.<br>- If parameter is set to Y, both inquiry and mailing addresses can be different therefore, both will be returned by ESF in response.|
|`CardRec.CardInfo.PostAddr.AddrFormatType`|Label|Address is in label format.|
|`CardRec.CardInfo.PostAddr.FullName1`||This field refers to first name of the customer for account mailing or inquiry purpose.|
|`CardRec.CardInfo.PostAddr.FullName2`||This field refers to second name of the customer for account mailing or inquiry purpose.|
|`CardRec.CardInfo.PostAddr.FullName3`||This field refers to third name of the customer for account mailing or inquiry purpose.|
|`CardRec.CardInfo.PostAddr.Addr1`||  |
|`CardRec.CardInfo.PostAddr.Addr2`||This field is supported if enabled in the CIS miscellaneous (Institution) specifications.|
|`CardRec.CardInfo.PostAddr.City`||  |
|`CardRec.CardInfo.PostAddr.StateProv`||  |
|`CardRec.CardInfo.PostAddr.PostalCode`||Postal Code provides information about the ZIP code if, address is from United States and, provides information about postal code if, address is not from United States.  This field provides the information in ZIP Code (5 Digit)-Additional Code (4 Digit) format. Additional code of four digits is optional and provides a more specific location within a given ZIP code. If additional code is not provided, it can be represented with value as '0000'. For example, 32714-1234 or 32714-0000.|
|`CardRec.CardInfo.PostAddr.CountryCode`||  |
|`CardRec.CardInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`CardRec.CardInfo.PostAddr.CountryCode.CountryCodeValue`||  |
|`CardRec.CardInfo.PostAddr.CountryCode.CountryCodeValueEnumDesc`||  |
|`CardRec.CardInfo.PostAddr.AddrType`|Primary<br>Seasonal|Account can have primary and seasonal address type. Seasonal address cannot exist as a single address record and is related to either primary or secondary address. Therefore, seasonal address shares AddressIdent with primary address.|
|`CardRec.CardInfo.PostAddr.TimeFrame`||  |
|`CardRec.CardInfo.PostAddr.TimeFrame.StartDt`||This field is applicable only if AddrType is seasonal. Seasonal address is enabled on same start and end date every year therefore, ESF displays 9999 as the start year in response for schema validation purpose. Actual month and day is shown in start date of seasonal address.|
|`CardRec.CardInfo.PostAddr.TimeFrame.EndDt`||This field is applicable only if AddrType is seasonal. Seasonal address is enabled on same start and end date every year therefore, ESF displays 9999 as the start year in response for schema validation purpose. Actual month and day is shown in start date of seasonal address.|
|`CardRec.CardInfo.PostAddr.Retention`|true<br>false|  |
|`CardRec.CardInfo.PostAddr.CensusTract`||  |
|`CardRec.CardInfo.PostAddr.CensusBlock`||  |
|`CardRec.CardInfo.PostAddr.ForeignFlag`|true<br>false|  |
|`CardRec.CardInfo.PostAddr.HandlingCode`||This field indicates the special routing information for customer correspondence. Values in this field are client-defined.|
|`CardRec.CardInfo.PostAddr.HandlingCodeOption`|Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio<br>StatementsNoticesChecks|This field identifies type of correspondence that will print the handling messages, as defined by HandlingCode.|
|`CardRec.CardInfo.PostAddr.MSACode`||  |
|`CardRec.CardInfo.CardTrnLimit`||  |
|`CardRec.CardInfo.CardTrnLimit.TrnTypeValue`|Debit<br>Credit<br>Withdrawal<br>|This field is used in combination with transaction service and CardTrnLimit to identify, the limit amount defined for a card.|
|`CardRec.CardInfo.CardTrnLimit.TrnSubType`||This field is used in combination with transaction service and CardTrnLimit to identify, the limit amount defined for a card.|
|`CardRec.CardInfo.CardTrnLimit.TrnSrc`|ATM<br>POS<br>|This field is used in combination with transaction service and CardTrnLimit to identify, the limit amount defined for a card.<br>OnLine/OffLine terms refer to the two distinct ways of processing debit payments i.e., Online/Offline. Customers need to endorse payments by submitting their personal identification numbers (PINs) at the point of sale in case of online debit transaction, whereas shoppers need to sign the sales receipts in case of offline transactions.|
|`CardRec.CardInfo.CardTrnLimit.LimitType`|DailyMax<br>TrnMax|This field is used in combination with transaction service and CardTrnLimit to identify, the limit amount defined for a card.|
|`CardRec.CardInfo.CardTrnLimit.CurAmt`||  |
|`CardRec.CardInfo.CardTrnLimit.CurAmt.Amt`||  |
|`CardRec.CardInfo.CardTrnLimit.CurAmt.CurCode`||  |
|`CardRec.CardInfo.CardTrnLimit.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`CardRec.CardInfo.CardTrnLimit.CurAmt.CurCode.CurCodeValue`|USD|  |
|`CardRec.CardInfo.MaxCreditLimitAmt`||  |
|`CardRec.CardInfo.MaxCreditLimitAmt.Amt`||Credit card limit refers to the maximum amount a customer can withdraw in a 24-hour period (midnight to midnight), using the debit card as a credit card.|
|`CardRec.CardInfo.MaxCreditLimitAmt.CurCode`||  |
|`CardRec.CardInfo.MaxCreditLimitAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`CardRec.CardInfo.MaxCreditLimitAmt.CurCode.CurCodeValue`|USD|  |
|`CardRec.CardInfo.AtmPosOverdraft`||  |
|`CardRec.CardInfo.AtmPosOverdraft.AuthLimitOption`|NoAuthorized<br>OptInAtmAuthLimit<br>OptInAtmODLimit<br>OptInAtmPosAuthLimit<br>OptInAtmPosODLimit<br>OptInPosAuthLimit<br>OptInPosODLimit<br>OptOut<br>OptOutCourtesy<br>OptOutNoReply|  |
|`CardRec.CardInfo.GenerateCardOrder`|ReplaceCard<br>NewCard<br>DoNotGenerate|  |
|`CardRec.CardInfo.GeneratePINMailer`|GeneratePINMailer<br>DoNotGenerate|  |
|`CardRec.CardInfo.CardPref`||  |
|`CardRec.CardInfo.CardPref.Language`||  |
|`CardRec.CardInfo.DateData`||  |
|`CardRec.CardInfo.DateData.DateType`|LastFileMaint<br>LastActivity|Value of LastFileMaint relates to generic updates done on files and is referred to 'Last Change Date' in core. This value indicates the date on which last maintenance of files occurred.<br>Value of LastActivity relates to transactions done and refers to 'Last Activity Date in core. This value indicates the most recent date when debit card was used for transaction.<br>|
|`CardRec.CardInfo.DateData.DateValue`||  |
|`CardRec.CardInfo.PreviousExpDt`||  |
|`CardRec.CardInfo.OriginatingBranch`||This field refers to the two-digit branch number to which the card is assigned.|
|`CardRec.CardInfo.ResponsibleBranch`||This field refers to client-defined accounting branch for similar accounting, processing and integration into the general ledger. Accounting Branch can also be used to group accounts for reporting.|
|`CardRec.CardInfo.CardPeriodData`||  |
|`CardRec.CardInfo.CardPeriodData.CardAmtType`|ForeignFeeWaived<br>ForeignFee|  |
|`CardRec.CardInfo.CardPeriodData.CardPeriodType`|MTD|  |
|`CardRec.CardInfo.CardPeriodData.LastOccurInd`|true<br>false|  |
|`CardRec.CardInfo.CardPeriodData.Amt`||  |
|`CardRec.CardInfo.CardPeriodData.Count`||  |
|`CardRec.CardInfo.DocDistributionOption`||  |
|`CardRec.CardInfo.NicknameOption`|Printed<br>NotPrinted|  |
|`CardRec.CardInfo.Nickname`||  |
|`CardRec.CardInfo.ReportGroupCode`||  |
|`CardRec.CardInfo.HandlingCode`||This field refers to the handling code to indicate the handling message printed in customer name and address area on all special forms. Values can be defined as data descriptions.|
|`CardRec.CardInfo.PINOffset`||This field refers to a number, used with an algorithm specified in the institution specification file, to yield the personal identification number of a card holder.|
|`CardRec.CardInfo.PINOffsetResetInd`|true<br>false|  |
|`CardRec.CardInfo.PINInvalidEntryAllowedNum`||  |
|`CardRec.CardStatus`||  |
|`CardRec.CardStatus.CardStatusCode`|Valid|This field is used to indicate current status of debit card.|
|`CardRec.CardStatus.EffDt`||  |
<!-- type: tab-end -->


### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
