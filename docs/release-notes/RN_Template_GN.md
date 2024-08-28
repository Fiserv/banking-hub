### Merchant Attributes

* **Description**: List of fields grouped under logical **Domains** and stored as key-value(s) pair as attributes.
  * Example of a **Domain**: chargebackConfig is a **domain** that groups all fields called as **Attributes** those configures chargeback related processing for a merchant. Example of some attributes are:
    * Chargeback Address code indicating where chargeback related information sent
    * Chargeback Pre-note Days
  * See [list of Domains](#list-of-domains)
* **API section**: merchantAttributes
* **Table Name**: UMM.MERCHANT_ATTRIBUTES
* **How to Retrieve attributes from Snowflake Data tables?**:
  * Master Tables: Attributes are defined using two Master tables in UMM
    * UMM.DOMAIN_MASTER : Contains the definition of the Domain
    * UMM.ATTRIBUTE_MASTER: Contains the definition of the attributes and tied to Domain
  * UMM.MERCHANT_ATTRIBUTES stores the ID of the UMM.ATTRIBUTE_MASTER for each attributes
  * Sample Query to pull the attributes:

  ```text
  
   SELECT
    DM.DOMAIN,
    DM.DESCRIPTION as DOMAIN_DESCRIPTION,
    ATTRMASTER.NAME,
    ATTRMASTER.DESCRIPTION as ATTR_DESCRIPTION,
    MA.VALUE
  FROM UMMPRODDB.UMM.MERCHANT_ATTRIBUTES MA
  INNER JOIN UMM.ATTRIBUTE_MASTER ATTRMASTER ON MA.ATTRIBUTE_ID = ATTRMASTER.ID
  INNER JOIN UMM.DOMAIN_MASTER DM ON DM.ID = ATTRMASTER.DOMAIN_ID
  WHERE MA.MERCHANT_ID = '208201019881'
    AND MA.PLATFORM_CODE = 'NORTH'
    AND DM.DOMAIN = 'chargebackConfig'
    AND EFFECTIVE_END_DATE is NULL;

  ```

## List of Fields

### MERCHANT_ID

* Description: Backend unique identifier for a merchant.
* API field: merchantId
* Field Specification:

<!-- type: tab 
titles: UMM, North, South, GMA 
-->

| Type   | Minimum Length | Max Length | Inquiry |  Create  |  Update  |
|--------|:--------------:|:----------:|:-------:|:--------:|:--------:|
| String |  BE specific   |     50     |   N/A   | Optional | Optional |

<!-- type: tab -->

| Type   | Minimum Length | Max Length | Inquiry |  Create  |  Update  |
|--------|:--------------:|:----------:|:-------:|:--------:|:--------:|
| String |       12       |     12     |   N/A   | Optional | Optional |

<!-- type: tab -->

| Type   | Minimum Length | Max Length | Inquiry |  Create  |  Update  |
|--------|:--------------:|:----------:|:-------:|:--------:|:--------:|
| String |       11       |     11     |   N/A   | Optional | Optional |

<!-- type: tab -->

| Type   | Minimum Length | Max Length | Inquiry |  Create  |  Update  |
|--------|:--------------:|:----------:|:-------:|:--------:|:--------:|
| String |       11       |     11     |   N/A   | Optional | Optional |

<!-- type: tab-end -->

---

### PLATFORM_CODE

* Description: Backend platform identifier e.g. North, South etc.
* API field: platformCode
* Field Specification: See supported platform and values of the enum [here](?path=docs/specification/supportedPlatforms.md)

<!-- type: tab-end -->

---

### ATTRIBUTE_ID

* Description: UMM defined attribute ID. See the query above for further details.
* API field: Not applicable - domain and attribute name along with respective descriptions are returned. Sample payload shows the domain  and the list of attributes under that domain.
  * Please see [List of Domains](#list-of-domains) for available domains and attributes.

```text

"merchantAttributes": {
                "chargebackConfig": {
                    "domainDescription": "chargeback Configuration",
                    "holdChargebackIndicator": {
                        "attributeDescription": "Hold Chargebacks Indicator ",
                        "values": [
                             "0"
                        ]
                    },
                    "chargebackPrenoteIndicator": {
                        "attributeDescription": "Indicates if the merchants recieves pre-notification before receiving a charge back",
                        "values": [
                            "NO"
                        ]
                    },
                    "excessiveChargebackIndicator": {
                        "attributeDescription": "Excessive Chargeback Indicator",
                        "values": [
                            "NO"
                        ]
                    },
                    "disputeDispositionCode": {
                        "attributeDescription": "Indicates the disposition option for chargeback disputes",
                        "values": [
                            "CORE_BUSSINESS_RULES"
                        ]
                    },
                    "chargebackPrenoteDays": {
                        "attributeDescription": "Chargeback Prenote Days",
                        "values": [
                            "0"
                        ]
                    },
                    "chargebackAddressCode": {
                        "attributeDescription": "Indicates where the chargeback advice is directed",
                        "values": [
                            "DBA_ADDR_ONLY"
                        ]
                    },
                    "mediaRetrievalCode": {
                        "attributeDescription": "Code determining how the bank retrieval and chargeback retrieval advice or requests are processed",
                        "values": [
                            "EIDS"
                        ]
                    },
                    "mediaFaxNumber": {
                        "attributeDescription": "Media Fax Number",
                        "values": [
                            ""
                        ]
                    },
                    "chargebackReportDestinationCode": {
                        "attributeDescription": "Chargeback Report Destination Code",
                        "values": [
                            "CURRENT_LEVEL"
                        ]
                    }
                }
            }                 

```

* Field Specification:

<!-- type: tab 
titles: UMM
-->

| Type    | Minimum Length | Max Length | Inquiry | Create | Update |
|---------|:--------------:|:----------:|:-------:|:------:|:------:|
| Numeric |      N/A       |     6      |   N/A   |  N/A   |  N/A   |

<!-- type: tab-end -->

---

### VALUE

* Description: Value of the Attribute
* API field: values[0]
* Field Specification:

<!-- type: tab 
titles: UMM
-->

| Type   | Minimum Length | Max Length | Inquiry | Create | Update |
|--------|:--------------:|:----------:|:-------:|:------:|:------:|
| String |      N/A       |    200     |   N/A   |  N/A   |  N/A   |

<!-- type: tab-end -->

---

## List of Domains

### acknowledgementFilePreference

---

tags: [acknowledgementFilePreference]

---

* Description: Acknowledgement File Preference

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| ackFilePreference            | Acknowledgement File Preference                   | NORMAL        | Normal                                                    |Available | Optional | Allowed  |    NA    |
|                              |                                                   | MASK          | Mask                                                      |Available | Optional | Allowed  |    NA    |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| ackFilePreference            | Acknowledgement File Preference                   | NORMAL        | Normal                                                    |Available | Optional | Allowed  |    NA    |
|                              |                                                   | MASK          | Mask                                                      |Available | Optional | Allowed  |    NA    |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### additionalBusinessInfo

---

tags: [additionalBusinessInfo]

---

* Description: Acknowledgement File Preference

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Valid Values  | Value Description                                         | Inquiry  | Create | Update | Delete |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:------:|:------:|:------:|
| rccCode| Merchant Retailer Category        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Valid Values  | Value Description                                         | Inquiry  | Create | Update | Delete |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:------:|:------:|:------:|
| rccCode| Merchant Retailer Category        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab-end -->

### additionalTaxInfo

---

tags: [additionalTaxInfo]

---

* Description: Additional Tax Information

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| incomeTaxCode                | Income Tax Code                                   |               |                                                           | Available| Optional | Allowed  |    NA    |
| secondaryTaxId               | Secondary Tax ID                                  |               |                                                           | Available| Optional | Allowed  |    NA    |
| vatTaxCode                   | VAT Tax Code                                      |               |                                                           | Available| Optional | Allowed  |    NA    |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| incomeTaxCode                | Income Tax Code                                   |               |                                                           | Available| Optional | Allowed  |    NA    |
| secondaryTaxId               | Secondary Tax ID                                  |               |                                                           | Available| Optional | Allowed  |    NA    |
| vatTaxCode                   | VAT Tax Code                                      |               |                                                           | Available| Optional | Allowed  |    NA    |

<!-- type: tab-end -->

### adrp

---

tags: [adrp]

---

* Description: Auto Decision Refund Process

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| adrpCumulativeLimitAmount| Cumulative refund amount on the same card in the past 30 or 60 days         |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| adrpCumulativeLimitCount | ADRP cumulative limit count         |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| adrpLimitAmount| A dollar limit defined for credits with no offsets         |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| adrpCumulativeLimitAmount| Cumulative refund amount on the same card in the past 30 or 60 days         |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| adrpCumulativeLimitCount | ADRP cumulative limit count         |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| adrpLimitAmount| A dollar limit defined for credits with no offsets         |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### authMatchExclusion

---

tags: [authMatchExclusion]

---

* Description: Auth Match Exclusion

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| southAuthMatchExclusion| South Auth Match Exclusion        |    ROOT_LEVEL_MATCHING   |   Root Level Matching        |    Available     | Optional     | Allowed |    NA |
|                        |                                   |    FULL_MID_MATCHING   |   Full Mid Matching        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| southAuthMatchExclusion| South Auth Match Exclusion        |    ROOT_LEVEL_MATCHING   |   Root Level Matching        |    Available     | Optional     | Allowed |    NA |
|                        |                                   |    FULL_MID_MATCHING   |   Full Mid Matching        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### authSettings

---

tags: [authSettings]

---

* Description: Auth Settings

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| authTypeCode| Auth Type Code        |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|             |                       |    PRE_AUTHORIZATION   |   Pre Authorization        |    Available     | Optional     | Allowed |    NA |
|             |                       |    FINAL_AUTHORIZATION   |   Final Authorization        |    Available     | Optional     | Allowed |    NA |
| transactionCurrency| Transaction Currency         |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| authTypeCode| Auth Type Code        |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|             |                       |    PRE_AUTHORIZATION   |   Pre Authorization        |    Available     | Optional     | Allowed |    NA |
|             |                       |    FINAL_AUTHORIZATION   |   Final Authorization        |    Available     | Optional     | Allowed |    NA |
| transactionCurrency| Transaction Currency         |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### avsControl

---

tags: [avsControl]

---

* Description: AVS Control

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| avsAddressIndicator| Address verification service address indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                    |                                                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsExactIndicator| Address verification service exact indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                    |                                                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsNoIndicator| Address verification service no indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                    |                                              |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| avsRetryIndicator| Address verification service retry indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                    |                                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| avsServiceIndicator| Address verification service indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsUnavailableIndicator| Address verification service unavailable indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsWholeZipIndicator| Address verification service whole zip indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| avsYesIndicator| Address verification service Yes indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsZipIndicator| Address verification service zip indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |  
|                |                                                   |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |  
<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| avsAddressIndicator| Address verification service address indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                    |                                                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsExactIndicator| Address verification service exact indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                    |                                                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsNoIndicator| Address verification service no indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                    |                                              |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| avsRetryIndicator| Address verification service retry indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                    |                                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| avsServiceIndicator| Address verification service indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsUnavailableIndicator| Address verification service unavailable indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsWholeZipIndicator| Address verification service whole zip indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| avsYesIndicator| Address verification service Yes indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsZipIndicator| Address verification service zip indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |  
|                |                                                   |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |  

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### bamsDissolutionHoldingsStatus

---

tags: [bamsDissolutionHoldingsStatus]

---

* Description: Bams Dissolution Holdings Status

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    FISERV   |   Fiserv        |    Available     | Optional     | Allowed |    NA |
|             |                      |    OTHER_ASSIGNED   |   Other Assigned        |    Available     | Optional     | Allowed |    NA |
|             |                      |    BANK_OF_AMERICA   |   Bank Of America        |    Available     | Optional     | Allowed |    NA |
| status       | Program Status        |    ALLOCATED   |   Allocated        |    Available     | Optional     | Allowed |    NA |
|             |                      |    DORMANT_CANCELLED   |   Dormant Cancelled        |    Available     | Optional     | Allowed |    NA |
|             |                      |    RESERVED_ATTACHED   |   Reserved Attached        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    FISERV   |   Fiserv        |    Available     | Optional     | Allowed |    NA |
|             |                      |    OTHER_ASSIGNED   |   Other Assigned        |    Available     | Optional     | Allowed |    NA |
|             |                      |    BANK_OF_AMERICA   |   Bank Of America        |    Available     | Optional     | Allowed |    NA |
| status       | Program Status        |    ALLOCATED   |   Allocated        |    Available     | Optional     | Allowed |    NA |
|             |                      |    DORMANT_CANCELLED   |   Dormant Cancelled        |    Available     | Optional     | Allowed |    NA |
|             |                      |    RESERVED_ATTACHED   |   Reserved Attached        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### billingConfig

---

tags: [billingConfig]

---

* Description: Billing cofiguration

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| billSuppliesIndicator| Bill Supplies Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| billSuppliesShippingIndicator| Bill supplies shipping and handling indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| delayedBillingEffectiveDate| Delayed billing effective date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| managementFeeDate| Date that management fee will be charged        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| membershipFeeDate| Date that membership fees will be charged  |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| retailerRateCode| Retailer rate code specific client usage        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| zeroInterchangeIndicator| Zero interchange indicator reserved for international banks only        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          |             |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          |             |    MASTERCARD_ONLY   |   Mastercard Only   |    Available     | Optional     | Allowed |    NA |
|          |             |    VISA_ONLY   |   Visa Only   |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| billSuppliesIndicator| Bill Supplies Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| billSuppliesShippingIndicator| Bill supplies shipping and handling indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| delayedBillingEffectiveDate| Delayed billing effective date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| managementFeeDate| Date that management fee will be charged        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| membershipFeeDate| Date that membership fees will be charged  |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| retailerRateCode| Retailer rate code specific client usage        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| zeroInterchangeIndicator| Zero interchange indicator reserved for international banks only        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|             |                      |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### billmatrix

---

tags: [billmatrix]

---

* Description: Billmatrix

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    NOT_ACCEPTED   |   Not Accepted        |    Available     | Optional     | Allowed |    NA |
|        | Program Status        |    ACCEPTED   |   Accepted        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    NOT_ACCEPTED   |   Not Accepted        |    Available     | Optional     | Allowed |    NA |
|        | Program Status        |    ACCEPTED   |   Accepted        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### boardingAdditionalInfo

---

tags: [boardingAdditionalInfo]

---

* Description: Merchant Boarding Additional Information

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| descriptionOfGoods| Description of goods and services sold by the merchant        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| homeBasedBusiness| Defines if the merchants business location is the same as his home location        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| wisoSalesRepId| Sales rep id of the wholesale iso employee        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| salesLead| Name or description of the sales lead | STRING | String | Available  | Optional | Allowed | NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| descriptionOfGoods| Description of goods and services sold by the merchant        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| homeBasedBusiness| Defines if the merchants business location is the same as his home location        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| wisoSalesRepId| Sales rep id of the wholesale iso employee        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| salesLead| Name or description of the sales lead | STRING | String | Available  | Optional | Allowed | NA |

<!-- type: tab-end -->

### cardbrandPassThruFees

---

tags: [cardbrandPassThruFees]---

* Description: Cardbrand Pass Thru Fees

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### cardconnect

---

tags: [cardconnect]

---

* Description: Cardconnect File Identifier

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|       |                       |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|       |                       |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### cashAdvance

---

tags: [cashAdvance]

---

* Description: Cash Advance

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| cashAdvanceLimitAmount| Cash advance Limit Amount        |    REJECT_IF_GTE_100000 - Reject if greater than or equal to 100000  |   Reject If Gte 100000 - Reject If Greater Than Or Equal To 100000        |    Available     | Optional     | Allowed |    NA |
| splitFundingAdvanceAmount| Split Funding Advance Amount        |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| splitFundingParticipationCode| Split Funding Participation Code        |    ADV_REPAID   |   Adv Repaid        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    NOT_USED   |   Not Used        |    Available     | Optional     | Allowed |    NA |
|             |                 |                                           ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|        |       |  SPLIT_FUNDING   |   Split Funding        |    Available     | Optional     | Allowed |    NA   |
|        |       |  RAPID_ADVANCE   |   Rapid Advance        |    Available     | Optional     | Allowed |    NA   |
|        |       |  MERCHANT_CAPITAL_SRC   |   Merchant Capital Source  |  Available  | Optional     | Allowed |    NA   |
| splitFundingPayToMerchantId| Split funding pay to merchant number        |    STRING - Digits only - MERCHANT ID   |   String - Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| splitFundingPercent| Split Funding Percentage        |    STRING - Digits only - no decimal (max length - 3, min - 1)   |   String - Digits Only - No Decimal (Max Length: 3, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| splitFundingVendorCode| Split funding cash advance vendor code        |    MER_ADV_FUNDING   |   Mer Adv Funding        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    FDMCA   |   Fdmca        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    RAPID_ADV   |   Rapid Adv        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    FUND_TREE   |   Fund Tree        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    ADV_ME   |   Adv Me        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    ADV_ME_INC   |   Adv Me Inc        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    BIZ2_CREDIT   |   Biz2 Credit        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| cashAdvanceLimitAmount| Cash advance Limit Amount        |    REJECT_IF_GTE_100000 - Reject if greater than or equal to 100000  |   Reject If Gte 100000 - Reject If Greater Than Or Equal To 100000        |    Available     | Optional     | Allowed |    NA |
| splitFundingAdvanceAmount| Split Funding Advance Amount        |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| splitFundingParticipationCode| Split Funding Participation Code        |    ADV_REPAID   |   Adv Repaid        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    NOT_USED   |   Not Used        |    Available     | Optional     | Allowed |    NA |
|             |                 |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|        |       |  SPLIT_FUNDING   |   Split Funding        |    Available     | Optional     | Allowed |    NA   |
|        |       |  RAPID_ADVANCE   |   Rapid Advance        |    Available     | Optional     | Allowed |    NA   |
|        |       |  MERCHANT_CAPITAL_SRC   |   Merchant Capital Source  |  Available  | Optional     | Allowed |    NA   |
| splitFundingPayToMerchantId| Split funding pay to merchant number        |    STRING - Digits only - MERCHANT ID   |   String - Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| splitFundingPercent| Split Funding Percentage        |    STRING - Digits only - no decimal (max length - 3, min - 1)   |   String - Digits Only - No Decimal (Max Length: 3, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| splitFundingVendorCode| Split funding cash advance vendor code        |    MER_ADV_FUNDING   |   Mer Adv Funding        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    FDMCA   |   Fdmca        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    RAPID_ADV   |   Rapid Adv        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    FUND_TREE   |   Fund Tree        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    ADV_ME   |   Adv Me        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    ADV_ME_INC   |   Adv Me Inc        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    BIZ2_CREDIT   |   Biz2 Credit        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### cashAdvanceProgram

---

tags: [cashAdvanceProgram]

---

* Description: Cash Advance Gl Funding Program

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|       |                      |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|       |                      |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### channelLevelDiscoverPromotionalPvi

---

tags: [channelLevelDiscoverPromotionalPvi]

---

* Description: Discover Promotional Program Verification Identifier - Channel Level

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    FD_DISCOVER_PROMO   |   Fd Discover Promo        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CLIENT_DISCOVER_PRO   |   Client Discover Pro        |    Available     | Optional     | Allowed |    NA |
| status      | Program Status       |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    FD_DISCOVER_PROMO   |   Fd Discover Promo        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CLIENT_DISCOVER_PRO   |   Client Discover Pro        |    Available     | Optional     | Allowed |    NA |
| status      | Program Status       |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->


### chargebackConfig

---

tags: [chargebackConfig]

---

* Description: chargeback Configuration

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| chargebackAddressCode| Indicates where the chargeback advice is directed        |    DBA_ADDR_BILLTO_ADDR   |   Dba Addr Billto Addr        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BILLTO_ADDR_ONLY   |   Billto Addr Only        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DBA_ADDR_ONLY   |   Dba Addr Only        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BILLTO_ADDR_DBA_ADDR   |   Billto Addr Dba Addr        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| chargebackPrenoteDays| Chargeback Prenote Days        |    STRING having digits only   |   String Having Digits Only        |    Available     | Optional     | Allowed |    NA |
| chargebackPrenoteIndicator| Indicates if the merchants recieves pre-notification before receiving a charge back        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| chargebackReportDestinationCode| Chargeback Report Destination Code        |    CHAIN   |   Chain        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    OUTLET   |   Outlet        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    CORP   |   Corp        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BUSINESS   |   Business        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    AGENT   |   Agent        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BANK   |   Bank        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    CURRENT_LEVEL   |   Current Level        |    Available     | Optional     | Allowed |    NA |
| disputeDispositionCode| Indicates the disposition option for chargeback disputes        |    DOC_FOLLOW_DEBIT   |   Doc Follow Debit        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DOC_WITH_DEBIT   |   Doc With Debit        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    CORE_BUSSINESS_RULES   |   Core Bussiness Rules        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DOC_DEBIT_REP   |   Doc Debit Rep        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DOC_FOLLOWS_DEBIT_WITH_REP   |   Doc Follows Debit With Rep        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DEBIT_NO_DOC_WITH_REP   |   Debit No Doc With Rep        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DEBIT_NO_DOC   |   Debit No Doc        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DROP_TO_QUEUE   |   Drop To Queue        |    Available     | Optional     | Allowed |    NA |
| email| email        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| excessiveChargebackIndicator| Excessive Chargeback Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| holdChargebackIndicator| Hold Chargebacks Indicator         |    PROCESS_MONTHLY   |   Process Monthly        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    PROCESS_DAILY   |   Process Daily        |    Available     | Optional     | Allowed |    NA |
| mediaFaxNumber| Media Fax Number        |    STRING having digits only   |   String Having Digits Only        |    Available     | Optional     | Allowed |    NA |
| mediaRetrievalCode| Code determining how the bank retrieval and chargeback retrieval advice or requests are processed        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| chargebackAddressCode| Indicates where the chargeback advice is directed        |    DBA_ADDR_BILLTO_ADDR   |   Dba Addr Billto Addr        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BILLTO_ADDR_ONLY   |   Billto Addr Only        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DBA_ADDR_ONLY   |   Dba Addr Only        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BILLTO_ADDR_DBA_ADDR   |   Billto Addr Dba Addr        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| chargebackPrenoteDays| Chargeback Prenote Days        |    STRING having digits only   |   String Having Digits Only        |    Available     | Optional     | Allowed |    NA |
| chargebackPrenoteIndicator| Indicates if the merchants recieves pre-notification before receiving a charge back        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| chargebackReportDestinationCode| Chargeback Report Destination Code        |    CHAIN   |   Chain        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    OUTLET   |   Outlet        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    CORP   |   Corp        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BUSINESS   |   Business        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    AGENT   |   Agent        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BANK   |   Bank        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    CURRENT_LEVEL   |   Current Level        |    Available     | Optional     | Allowed |    NA |
| disputeDispositionCode| Indicates the disposition option for chargeback disputes        |    DOC_FOLLOW_DEBIT   |   Doc Follow Debit        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DOC_WITH_DEBIT   |   Doc With Debit        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    CORE_BUSSINESS_RULES   |   Core Bussiness Rules        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DOC_DEBIT_REP   |   Doc Debit Rep        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DOC_FOLLOWS_DEBIT_WITH_REP   |   Doc Follows Debit With Rep        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DEBIT_NO_DOC_WITH_REP   |   Debit No Doc With Rep        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DEBIT_NO_DOC   |   Debit No Doc        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DROP_TO_QUEUE   |   Drop To Queue        |    Available     | Optional     | Allowed |    NA |
| email| email        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| excessiveChargebackIndicator| Excessive Chargeback Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| holdChargebackIndicator| Hold Chargebacks Indicator         |    PROCESS_MONTHLY   |   Process Monthly        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    PROCESS_DAILY   |   Process Daily        |    Available     | Optional     | Allowed |    NA |
| mediaFaxNumber| Media Fax Number        |    STRING having digits only   |   String Having Digits Only        |    Available     | Optional     | Allowed |    NA |
| mediaRetrievalCode| Code determining how the bank retrieval and chargeback retrieval advice or requests are processed        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

