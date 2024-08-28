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

### commercialCardInterchangeService

---

tags: [commercialCardInterchangeService]

---

* Description: Commercial Card Interchange Service

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| ccisMerchantIncome| Commercial Card Interchange Service Merchant Income        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| ccisMerchantIncome| Commercial Card Interchange Service Merchant Income        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### compassOnNorth

---

tags: [compassOnNorth]

---

* Description: Compass Podb Functionality On North

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| forcedDeposit| Eligible For Force Deposits        |    FORCE_DEPOSITS   |   Force Deposits        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    NO_FORCE_DEPOSITS   |   No Force Deposits        |    Available     | Optional     | Allowed |    NA |
| partialReversals| Eligible For Partial Reversals        |    NO_PARTIAL_REVERSALS   |   No Partial Reversals        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    PARTIAL_REVERSALS   |   Partial Reversals        |    Available     | Optional     | Allowed |    NA |
| reauthorizations     |  Eligible For Re-Authorizations  |    NO_REAUTHORIZATIONS   |   No Reauthorizations        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    EXTENDED_AUTH_NO_REAUT   |   Extended Auth No Reaut        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    REAUTHORIZATIONS   |   Reauthorizations        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    ACTIVE_COMPASS_ON_NORTH   |   Active Compass On North        |    Available     | Optional     | Allowed |    NA |
|       |                       |    CANCEL_COMPASS_ON_NORTH   |   Cancel Compass On North        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| forcedDeposit| Eligible For Force Deposits        |    FORCE_DEPOSITS   |   Force Deposits        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    NO_FORCE_DEPOSITS   |   No Force Deposits        |    Available     | Optional     | Allowed |    NA |
| partialReversals| Eligible For Partial Reversals        |    NO_PARTIAL_REVERSALS   |   No Partial Reversals        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    PARTIAL_REVERSALS   |   Partial Reversals        |    Available     | Optional     | Allowed |    NA |
| reauthorizations     |  Eligible For Re-Authorizations  |    NO_REAUTHORIZATIONS   |   No Reauthorizations        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    EXTENDED_AUTH_NO_REAUT   |   Extended Auth No Reaut        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    REAUTHORIZATIONS   |   Reauthorizations        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    ACTIVE_COMPASS_ON_NORTH   |   Active Compass On North        |    Available     | Optional     | Allowed |    NA |
|       |                       |    CANCEL_COMPASS_ON_NORTH   |   Cancel Compass On North        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### compassSpecialFeatures

---

tags: [compassSpecialFeatures]

---

* Description: Compass Front End Generated Refund Auths

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| amexOnlineRefund| Amex Online Refund        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                 |                           |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| compassFrontendGenreFauth| Compass frontend Gen Ref Auth        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                 |                           |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| visaToleranceCheckInd| Visa Tolerance Check Ind        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                 |                           |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| amexOnlineRefund| Amex Online Refund        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                 |                           |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| compassFrontendGenreFauth| Compass frontend Gen Ref Auth        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                 |                           |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| visaToleranceCheckInd| Visa Tolerance Check Ind        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                 |                           |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### conditionalApprovalProgram

---

tags: [conditionalApprovalProgram]

---

* Description: Conditional Approval Program

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    MISSING_CREDIT_DATA   |   Missing Credit Data        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CREDIT_RISK_REVIEW   |   Credit Risk Review        |    Available     | Optional     | Allowed |    NA |
|             |                      |    APP_INCONSISTENCIES   |   App Inconsistencies        |    Available     | Optional     | Allowed |    NA |
|             |                      |    REMOVED_FRM_COND_APP   |   Removed Frm Cond App        |    Available     | Optional     | Allowed |    NA |
|             |                      |    MISS_CRED_DATA_MPA   |   Miss Cred Data Mpa        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CRED_DATA_RISK_REV   |   Cred Data Risk Rev        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CRED_RISK_REV_MPA   |   Cred Risk Rev Mpa        |    Available     | Optional     | Allowed |    NA |
|             |                      |    INACTIVE   |   Inactive        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    MISSING_CREDIT_DATA   |   Missing Credit Data        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CREDIT_RISK_REVIEW   |   Credit Risk Review        |    Available     | Optional     | Allowed |    NA |
|             |                      |    APP_INCONSISTENCIES   |   App Inconsistencies        |    Available     | Optional     | Allowed |    NA |
|             |                      |    REMOVED_FRM_COND_APP   |   Removed Frm Cond App        |    Available     | Optional     | Allowed |    NA |
|             |                      |    MISS_CRED_DATA_MPA   |   Miss Cred Data Mpa        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CRED_DATA_RISK_REV   |   Cred Data Risk Rev        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CRED_RISK_REV_MPA   |   Cred Risk Rev Mpa        |    Available     | Optional     | Allowed |    NA |
|             |                      |    INACTIVE   |   Inactive        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### contract

---

tags: [contract]

---

* Description: Contract

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| clientRegion | Client Region Index for Omnipay |    BIN_OVERRIDE_123018   |   Bin Override 123018        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    CANADA   |   Canada        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    UNITEDKINGDOM   |   Unitedkingdom        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123008   |   Bin Override 123008        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    SINGAPORE   |   Singapore        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    AUSTRALIA   |   Australia        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123013   |   Bin Override 123013        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123019   |   Bin Override 123019        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123009   |   Bin Override 123009        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123007   |   Bin Override 123007        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123014   |   Bin Override 123014        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    HONG_KONG   |   Hong Kong        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123016   |   Bin Override 123016        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123005   |   Bin Override 123005        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123015   |   Bin Override 123015        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BY_TRANSACTION   |   By Transaction        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123006   |   Bin Override 123006        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123012   |   Bin Override 123012        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BY_TRAN_REJECTS   |   By Tran Rejects        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BY_COUNTRY   |   By Country        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123011   |   Bin Override 123011        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123010   |   Bin Override 123010        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123017   |   Bin Override 123017        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123004   |   Bin Override 123004        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123002   |   Bin Override 123002        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123020   |   Bin Override 123020        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123001   |   Bin Override 123001        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    EUROPEAN_UNION   |   European Union        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123003   |   Bin Override 123003        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    JAPAN   |   Japan        |    Available     | Optional     | Allowed |    NA |
| clientTariff | This the merchant tariff assigned to the merchant  |    PF_TARIFF_1   |   When PF wants to bill the submerchant a Authorization, Chargeback and Retrevial Fees  |    Available     | Optional     | Allowed |    NA  |
| - | - |   PF_TARIFF_2    |     When PF wants to bill the submerchant Authorization and Wire Fees      |    Available     | Optional     | Allowed |    NA   |
| - | - |  STANDARD_4    |    Non PFAC Account Fees Tariff       |    Available     | Optional     | Allowed |    NA    |
| - | - |    PF_TARIFF_3   |    When PF wants to bill the submerchant for all Account Fees       |    Available     | Optional     | Allowed |    NA    |
| - | - |    PF_TARIFF_4   |    When no override at merchant level is possible       |    Available     | Optional     | Allowed |    NA    |
| postingMethod| The posting method assigned to the merchant        |    GRS_999_USD   |   Grs 999 Usd        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GMA_ZAR_999   |   Gma Zar 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    NA_HK_999   |   Na Hk 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    ALL_TO_HUF   |   All To Huf        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_GBP   |   Grs 999 Gbp        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REG5_EU_999   |   Reg5 Eu 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GMA_NOK_999   |   Gma Nok 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_USD_MSC   |   Pf Usd Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REG1_SG_999   |   Reg1 Sg 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_CHF_MSC   |   Pf Chf Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_NZD_MSC   |   Pf Nzd Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_EUR   |   Grs 999 Eur        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_AUD   |   Grs 999 Aud        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GMA_SEK_999   |   Gma Sek 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_SEK   |   Grs 999 Sek        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_SGD_MSC   |   Pf Sgd Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_GBP_MSC   |   Pf Gbp Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_SEK_MSC   |   Pf Sek Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_JPY   |   Grs 999 Jpy        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_CAD   |   Grs 999 Cad        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REGULAR_2   |   Regular 2        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_EUR_MSC   |   Pf Eur Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_NOK   |   Grs 999 Nok        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    NA_EU_999   |   Na Eu 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REGULAR_6   |   Regular 6        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_DKK   |   Grs 999 Dkk        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_HKD_MSC   |   Pf Hkd Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_CHF   |   Grs 999 Chf        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GMA_CHF_999   |   Gma Chf 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REGULAR_4   |   Regular 4        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_CAD_MSC   |   Pf Cad Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_NOK_MSC   |   Pf Nok Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    NA   |   Na        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GMA_DKK_999   |   Gma Dkk 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    ALL_TO_1EUR   |   All To 1Eur        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_JPY_MSC   |   Pf Jpy Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_NZD   |   Grs 999 Nzd        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    ALL_TO_CZK   |   All To Czk        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REGULAR_1   |   Regular 1        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    TARIFF_15   |   Tariff 15        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    ALL_TO_SGD   |   All To Sgd        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REG6_SG_999   |   Reg6 Sg 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REG3_EU_999   |   Reg3 Eu 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_ZAR_MSC   |   Pf Zar Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_DKK_MSC   |   Pf Dkk Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_HKD   |   Grs 999 Hkd        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_ZAR   |   Grs 999 Zar        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    TR15_JP_999   |   Tr15 Jp 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GMA_NZD_999   |   Gma Nzd 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_SGD   |   Grs 999 Sgd        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REGULAR_3   |   Regular 3        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_AUD_MSC   |   Pf Aud Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    ALL_TO_GBP   |   All To Gbp        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REGULAR_8   |   Regular 8        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    ALL_TO_PLN   |   All To Pln        |    Available     | Optional     | Allowed |    NA |
| protectAgainstFXChange| Indicate if the Merchant is protected against currency fluctuations on the event the transaction is disputed        |    FALSE   |   False        |    Available     | Optional     | Allowed |    NA |
| salesLead| Secondary Tax ID        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| serviceContractIndex| Service contract defines the processing rules for a merchant        |    SERVICE_CONTRACT_1   |   Service Contract 1        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| clientRegion | The selected client region will determine how the transactions are settled to the scheme. | BY_TRANSACTION | Client region by transaction | Available | Optional | Allowed | NA |
|    |    | BY_TRANSACTION | Client region by transaction | Available | Optional | Allowed | NA |
|    |    |    CANADA   |   Canada        |    Available     | Optional     | Allowed |    NA |
|    |    |    UNITEDKINGDOM   |   Unitedkingdom        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123008   |   Bin Override 123008        |    Available     | Optional     | Allowed |    NA |
|    |    |    SINGAPORE   |   Singapore        |    Available     | Optional     | Allowed |    NA |
|    |    |    AUSTRALIA   |   Australia        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123013   |   Bin Override 123013        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123019   |   Bin Override 123019        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123009   |   Bin Override 123009        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123007   |   Bin Override 123007        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123014   |   Bin Override 123014        |    Available     | Optional     | Allowed |    NA |
|    |    |    HONG_KONG   |   Hong Kong  |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123016   |   Bin Override 123016        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123005   |   Bin Override 123005        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123015   |   Bin Override 123015        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123006   |   Bin Override 123006        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123012   |   Bin Override 123012        |    Available     | Optional     | Allowed |    NA |
|    |    |    BY_TRAN_REJECTS   |   By Tran Rejects        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123011   |   Bin Override 123011        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123010   |   Bin Override 123010        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123017   |   Bin Override 123017        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123004   |   Bin Override 123004        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123002   |   Bin Override 123002        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123020   |   Bin Override 123020        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123001   |   Bin Override 123001        |    Available     | Optional     | Allowed |    NA |
|    |    |    EUROPEAN_UNION   |   European Union        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123003   |   Bin Override 123003        |    Available     | Optional     | Allowed |    NA |
|    |    |    JAPAN   |   Japan        |    Available     | Optional     | Allowed |    NA |
| clientTariff | This the merchant tariff assigned to the merchant  |    PF_TARIFF_1   |   When PF wants to bill the submerchant a Authorization, Chargeback and Retrevial Fees  |    Available     | Optional     | Allowed |    NA  |
| - | - |   PF_TARIFF_2    |     When PF wants to bill the submerchant Authorization and Wire Fees      |    Available     | Optional     | Allowed |    NA   |
| - | - |  STANDARD_4    |    Non PFAC Account Fees Tariff       |    Available     | Optional     | Allowed |    NA    |
| - | - |    PF_TARIFF_3   |    When PF wants to bill the submerchant for all Account Fees       |    Available     | Optional     | Allowed |    NA    |
| - | - |    PF_TARIFF_4   |    When no override at merchant level is possible       |    Available     | Optional     | Allowed |    NA    |
| postingMethod | The posting method assigned to the merchant        |    GRS_999_USD   |   Grs 999 Usd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMA_ZAR_999   |   Gma Zar 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NA_HK_999   |   Na Hk 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TO_HUF   |   All To Huf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_GBP   |   Grs 999 Gbp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REG5_EU_999   |   Reg5 Eu 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMA_NOK_999   |   Gma Nok 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_USD_MSC   |   Pf Usd Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REG1_SG_999   |   Reg1 Sg 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_CHF_MSC   |   Pf Chf Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_NZD_MSC   |   Pf Nzd Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_EUR   |   Grs 999 Eur        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_AUD   |   Grs 999 Aud        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMA_SEK_999   |   Gma Sek 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_SEK   |   Grs 999 Sek        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_SGD_MSC   |   Pf Sgd Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_GBP_MSC   |   Pf Gbp Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_SEK_MSC   |   Pf Sek Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_JPY   |   Grs 999 Jpy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_CAD   |   Grs 999 Cad        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REGULAR_2   |   Regular 2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_EUR_MSC   |   Pf Eur Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_NOK   |   Grs 999 Nok        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NA_EU_999   |   Na Eu 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REGULAR_6   |   Regular 6        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_DKK   |   Grs 999 Dkk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_HKD_MSC   |   Pf Hkd Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_CHF   |   Grs 999 Chf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMA_CHF_999   |   Gma Chf 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REGULAR_4   |   Regular 4        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_CAD_MSC   |   Pf Cad Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_NOK_MSC   |   Pf Nok Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NA   |   Na        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMA_DKK_999   |   Gma Dkk 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TO_1EUR   |   All To 1Eur        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_JPY_MSC   |   Pf Jpy Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_NZD   |   Grs 999 Nzd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TO_CZK   |   All To Czk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REGULAR_1   |   Regular 1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TARIFF_15   |   Tariff 15        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TO_SGD   |   All To Sgd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REG6_SG_999   |   Reg6 Sg 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REG3_EU_999   |   Reg3 Eu 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_ZAR_MSC   |   Pf Zar Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_DKK_MSC   |   Pf Dkk Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_HKD   |   Grs 999 Hkd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_ZAR   |   Grs 999 Zar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TR15_JP_999   |   Tr15 Jp 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMA_NZD_999   |   Gma Nzd 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_SGD   |   Grs 999 Sgd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REGULAR_3   |   Regular 3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_AUD_MSC   |   Pf Aud Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TO_GBP   |   All To Gbp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REGULAR_8   |   Regular 8        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TO_PLN   |   All To Pln        |    Available     | Optional     | Allowed |    NA |
| protectAgainstFXChange | Indicate if the Merchant is protected against currency fluctuations on the event the transaction is disputed  |  FALSE   |   False  |  Available  | Optional | Allowed |  NA |
| protectAgainstFXChange | Indicate if the Merchant is protected against currency fluctuations on the event the transaction is disputed  |  TRUE   |   True  |  Available  | Optional  | Allowed |  NA |
| salesLead | Secondary Tax ID  |  STRING   |   String  |  Available   | Optional | Allowed |  NA |
| serviceContractIndex | Service contract defines the processing rules for a merchant |  SERVICE_CONTRACT_1 |  Service Contract 1  |  Available  | Optional | Allowed |  NA |

<!-- type: tab-end -->

### contractExpirationDate

---

tags: [contractExpirationDate]

---

* Description: Contract Expiration Date Notifications/Flag

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| contractExpirationDate| Contract Expiration Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| gcid| Global Client Id        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| contractExpirationDate| Contract Expiration Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| gcid| Global Client Id        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### conversionInformation

---

tags: [conversionInformation]

---

* Description: Conversion  Account Source System Data

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| contractDate| Contract Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| salesmanCode| Salesman Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|       |                       |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| contractDate| Contract Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| salesmanCode| Salesman Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|       |                       |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### creditSettings

---

tags: [creditSettings]

---

* Description: Credit Settings

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| creditBinInclusionIndicator| Credit BIN Inclusion Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| creditLimitAmount| Credit Limit Amount        |    REJECT_IF_GTE_30000   |   Reject If Gte 30000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_70000   |   Reject If Gte 70000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_7500   |   Reject If Gte 7500        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_60000   |   Reject If Gte 60000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_15000   |   Reject If Gte 15000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_100000   |   Reject If Gte 100000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_50   |   Reject If Gte 50        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_3000   |   Reject If Gte 3000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_40000   |   Reject If Gte 40000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_200000   |   Reject If Gte 200000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_600000   |   Reject If Gte 600000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_300000   |   Reject If Gte 300000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_50000   |   Reject If Gte 50000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_150000   |   Reject If Gte 150000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    UNLIMITED   |   Unlimited        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_500000   |   Reject If Gte 500000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_400000   |   Reject If Gte 400000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_10000   |   Reject If Gte 10000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_130000   |   Reject If Gte 130000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_2   |   Reject If Gte 2        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_25000   |   Reject If Gte 25000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_2000   |   Reject If Gte 2000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_5000   |   Reject If Gte 5000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_250   |   Reject If Gte 250        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_20000   |   Reject If Gte 20000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_120000   |   Reject If Gte 120000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_100   |   Reject If Gte 100        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_500   |   Reject If Gte 500        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_110000   |   Reject If Gte 110000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_1000   |   Reject If Gte 1000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_1   |   Reject If Gte 1        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_800000   |   Reject If Gte 800000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_80000   |   Reject If Gte 80000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_140000   |   Reject If Gte 140000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_700000   |   Reject If Gte 700000        |    Available     | Optional     | Allowed |    NA |
| cumulativeCreditLimitAmount| Cumulative Credit Limit Amount        |    REJECT_IF_GTE_300000   |   Reject If Gte 300000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_700000   |   Reject If Gte 700000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_400000   |   Reject If Gte 400000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_60000   |   Reject If Gte 60000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_140000   |   Reject If Gte 140000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_2   |   Reject If Gte 2        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_25000   |   Reject If Gte 25000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_150000   |   Reject If Gte 150000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_50   |   Reject If Gte 50        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_1000   |   Reject If Gte 1000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_2000   |   Reject If Gte 2000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_110000   |   Reject If Gte 110000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_7500   |   Reject If Gte 7500        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_20000   |   Reject If Gte 20000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_130000   |   Reject If Gte 130000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_1   |   Reject If Gte 1        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_500000   |   Reject If Gte 500000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_15000   |   Reject If Gte 15000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_800000   |   Reject If Gte 800000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_120000   |   Reject If Gte 120000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_5000   |   Reject If Gte 5000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_600000   |   Reject If Gte 600000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_80000   |   Reject If Gte 80000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_40000   |   Reject If Gte 40000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_200000   |   Reject If Gte 200000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_500   |   Reject If Gte 500        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_30000   |   Reject If Gte 30000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_250   |   Reject If Gte 250        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    UNLIMITED   |   Unlimited        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_3000   |   Reject If Gte 3000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_10000   |   Reject If Gte 10000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_70000   |   Reject If Gte 70000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_100000   |   Reject If Gte 100000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_100   |   Reject If Gte 100        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_50000   |   Reject If Gte 50000        |    Available     | Optional     | Allowed |    NA |
| cumulativeSalesLimitAmount| Cumulative Sales Limit Amount        |    REJECT_IF_GTE_1000   |   Reject If Gte 1000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_120000   |   Reject If Gte 120000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_400000   |   Reject If Gte 400000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_200000   |   Reject If Gte 200000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_300000   |   Reject If Gte 300000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_100000   |   Reject If Gte 100000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_800000   |   Reject If Gte 800000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_50000   |   Reject If Gte 50000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    UNLIMITED   |   Unlimited        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_20000   |   Reject If Gte 20000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_70000   |   Reject If Gte 70000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_110000   |   Reject If Gte 110000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_30000   |   Reject If Gte 30000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_500   |   Reject If Gte 500        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_80000   |   Reject If Gte 80000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_60000   |   Reject If Gte 60000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_40000   |   Reject If Gte 40000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_1   |   Reject If Gte 1        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_25000   |   Reject If Gte 25000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_100   |   Reject If Gte 100        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_3000   |   Reject If Gte 3000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_2000   |   Reject If Gte 2000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_7500   |   Reject If Gte 7500        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_5000   |   Reject If Gte 5000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_2   |   Reject If Gte 2        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_500000   |   Reject If Gte 500000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_50   |   Reject If Gte 50        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_600000   |   Reject If Gte 600000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_250   |   Reject If Gte 250        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_10000   |   Reject If Gte 10000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_700000   |   Reject If Gte 700000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_130000   |   Reject If Gte 130000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_15000   |   Reject If Gte 15000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_140000   |   Reject If Gte 140000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_150000   |   Reject If Gte 150000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_90000   |   Reject If Gte 90000        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| creditBinInclusionIndicator| Credit BIN Inclusion Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| creditLimitAmount| Credit Limit Amount        |    REJECT_IF_GTE_30000   |   Reject If Gte 30000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_70000   |   Reject If Gte 70000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_7500   |   Reject If Gte 7500        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_60000   |   Reject If Gte 60000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_15000   |   Reject If Gte 15000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_100000   |   Reject If Gte 100000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_50   |   Reject If Gte 50        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_3000   |   Reject If Gte 3000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_40000   |   Reject If Gte 40000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_200000   |   Reject If Gte 200000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_600000   |   Reject If Gte 600000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_300000   |   Reject If Gte 300000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_50000   |   Reject If Gte 50000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_150000   |   Reject If Gte 150000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    UNLIMITED   |   Unlimited        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_500000   |   Reject If Gte 500000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_400000   |   Reject If Gte 400000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_10000   |   Reject If Gte 10000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_130000   |   Reject If Gte 130000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_2   |   Reject If Gte 2        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_25000   |   Reject If Gte 25000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_2000   |   Reject If Gte 2000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_5000   |   Reject If Gte 5000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_250   |   Reject If Gte 250        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_20000   |   Reject If Gte 20000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_120000   |   Reject If Gte 120000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_100   |   Reject If Gte 100        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_500   |   Reject If Gte 500        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_110000   |   Reject If Gte 110000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_1000   |   Reject If Gte 1000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_1   |   Reject If Gte 1        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_800000   |   Reject If Gte 800000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_80000   |   Reject If Gte 80000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_140000   |   Reject If Gte 140000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_700000   |   Reject If Gte 700000        |    Available     | Optional     | Allowed |    NA |
| cumulativeCreditLimitAmount| Cumulative Credit Limit Amount        |    REJECT_IF_GTE_300000   |   Reject If Gte 300000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_700000   |   Reject If Gte 700000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_400000   |   Reject If Gte 400000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_60000   |   Reject If Gte 60000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_140000   |   Reject If Gte 140000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_2   |   Reject If Gte 2        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_25000   |   Reject If Gte 25000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_150000   |   Reject If Gte 150000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_50   |   Reject If Gte 50        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_1000   |   Reject If Gte 1000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_2000   |   Reject If Gte 2000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_110000   |   Reject If Gte 110000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_7500   |   Reject If Gte 7500        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_20000   |   Reject If Gte 20000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_130000   |   Reject If Gte 130000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_1   |   Reject If Gte 1        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_500000   |   Reject If Gte 500000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_15000   |   Reject If Gte 15000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_800000   |   Reject If Gte 800000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_120000   |   Reject If Gte 120000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_5000   |   Reject If Gte 5000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_600000   |   Reject If Gte 600000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_80000   |   Reject If Gte 80000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_40000   |   Reject If Gte 40000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_200000   |   Reject If Gte 200000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_500   |   Reject If Gte 500        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_30000   |   Reject If Gte 30000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_250   |   Reject If Gte 250        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    UNLIMITED   |   Unlimited        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_3000   |   Reject If Gte 3000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_10000   |   Reject If Gte 10000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_70000   |   Reject If Gte 70000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_100000   |   Reject If Gte 100000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_100   |   Reject If Gte 100        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_50000   |   Reject If Gte 50000        |    Available     | Optional     | Allowed |    NA |
| cumulativeSalesLimitAmount| Cumulative Sales Limit Amount        |    REJECT_IF_GTE_1000   |   Reject If Gte 1000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_120000   |   Reject If Gte 120000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_400000   |   Reject If Gte 400000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_200000   |   Reject If Gte 200000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_300000   |   Reject If Gte 300000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_100000   |   Reject If Gte 100000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_800000   |   Reject If Gte 800000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_50000   |   Reject If Gte 50000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    UNLIMITED   |   Unlimited        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_20000   |   Reject If Gte 20000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_70000   |   Reject If Gte 70000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_110000   |   Reject If Gte 110000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_30000   |   Reject If Gte 30000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_500   |   Reject If Gte 500        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_80000   |   Reject If Gte 80000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_60000   |   Reject If Gte 60000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_40000   |   Reject If Gte 40000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_1   |   Reject If Gte 1        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_25000   |   Reject If Gte 25000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_100   |   Reject If Gte 100        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_3000   |   Reject If Gte 3000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_2000   |   Reject If Gte 2000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_7500   |   Reject If Gte 7500        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_5000   |   Reject If Gte 5000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_2   |   Reject If Gte 2        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_500000   |   Reject If Gte 500000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_50   |   Reject If Gte 50        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_600000   |   Reject If Gte 600000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_250   |   Reject If Gte 250        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_10000   |   Reject If Gte 10000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_700000   |   Reject If Gte 700000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_130000   |   Reject If Gte 130000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_15000   |   Reject If Gte 15000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_140000   |   Reject If Gte 140000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_150000   |   Reject If Gte 150000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_90000   |   Reject If Gte 90000        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### crossBorderAcquiring

---

tags: [crossBorderAcquiring]

---

* Description: Cross Border Acquiring

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| viSingleMerchantId| Visa Single Merchant Id        |    Digits only - MERCHANT ID   |   Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| viSmiActivationInd| Visa Smi Activation Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                   |                                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| viSingleMerchantId| Visa Single Merchant Id        |    Digits only - MERCHANT ID   |   Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| viSmiActivationInd| Visa Smi Activation Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                   |                                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### dccForIab

---

tags: [dccForIab]

---

* Description: Dynamic Currency Conversion For International Agent Bank

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    DCC   |   Dcc        |    Available     | Optional     | Allowed |    NA |
|             |                      |    DYNAMIC_PRICING   |   Dynamic Pricing        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    DCC   |   Dcc        |    Available     | Optional     | Allowed |    NA |
|             |                      |    DYNAMIC_PRICING   |   Dynamic Pricing        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### depositRequirement

---

tags: [depositRequirement]

---

* Description: Deposit Requirement

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| programGuideVersion| Program Guide Version        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| programGuideVersion| Program Guide Version        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### disregardedEntity

---

tags: [disregardedEntity]

---

* Description: Disregarded Entity

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|       |                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|       |                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### earlyTerminationFee

---

tags: [earlyTerminationFee]

---

* Description: Early Termination Fee

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| earlyTermDate| Early termination date applicable to charging an associated fee        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| earlyTermFeeAmount| Early termination fee amount        |    STRING - Digits only - no decimal (max length - 4, min - 1)   |   String - Digits Only - No Decimal (Max Length: 4, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| earlyTermFeeIndicator| Early termination fee indicator        |    NO_TERMINATION_FEE   |   No Termination Fee        |    Available     | Optional     | Allowed |    NA |
|                      |                                        |    CARS_DFAULT_FEE   |   Cars Dfault Fee        |    Available     | Optional     | Allowed |    NA |
|                      |                                        |    USER_DEFINED_FEE   |   User Defined Fee        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| earlyTermDate| Early termination date applicable to charging an associated fee        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| earlyTermFeeAmount| Early termination fee amount        |    STRING - Digits only - no decimal (max length - 4, min - 1)   |   String - Digits Only - No Decimal (Max Length: 4, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| earlyTermFeeIndicator| Early termination fee indicator        |    NO_TERMINATION_FEE   |   No Termination Fee        |    Available     | Optional     | Allowed |    NA |
|                      |                                        |    CARS_DFAULT_FEE   |   Cars Dfault Fee        |    Available     | Optional     | Allowed |    NA |
|                      |                                        |    USER_DEFINED_FEE   |   User Defined Fee        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### electronicTicketCapture

---

tags: [electronicTicketCapture]

---

* Description: Electronic Ticket Capture

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| etcBypassEditsIndicator| TellS the edit programs if the Merchant wishes to let all his ETC transactions process        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                        |                                                                                               |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| etcCutoffTimeCode| Code indicating what time electronic ticket capture processing is terminated for the day        |    6PM_CST   |   6Pm Cst        |    Available     | Optional     | Allowed |    NA |
|                  |       |    10PM_EST   |   10Pm Est        |    Available     | Optional     | Allowed |    NA |
|                  |       |    12AM_CST   |   12Am Cst        |    Available     | Optional     | Allowed |    NA |
|                  |           |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                  |       |    FDMS_DEFAULT   |   FDMS Default  |    Available     |    Optional  | Allowed |    NA   |
| etcOptionCode| Code identifying the type of electronic ticket capture processing used        |    None   |   None        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_VOICE_BKP   |   Etc Voice Bkp        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    NON_ETC   |   Non Etc        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_VOICE_BK_W_CLS_BAT   |   Etc Voice Bk W Cls Bat        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_ELECTRONIC_ONLY   |   Etc Electronic Only        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    HOST_OUT_OF_BALANCE   |   Host Out Of Balance        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_PLUS   |   Etc Plus        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_PLUS_DEBIT   |   Etc Plus Debit        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    HOST_MUST_BALANCE   |   Host Must Balance        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_ELC_W_CLS_BAT   |   Etc Elc W Cls Bat        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| etcBypassEditsIndicator| TellS the edit programs if the Merchant wishes to let all his ETC transactions process        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                        |                                                                                               |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| etcCutoffTimeCode| Code indicating what time electronic ticket capture processing is terminated for the day        |    6PM_CST   |   6Pm Cst        |    Available     | Optional     | Allowed |    NA |
|                  |                                                                                                 |    10PM_EST   |   10Pm Est        |    Available     | Optional     | Allowed |    NA |
|                  |                                                                                                 |    12AM_CST   |   12Am Cst        |    Available     | Optional     | Allowed |    NA |
|                  |                                                                                                 |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                  |       |    FDMS_DEFAULT   |   FDMS Default  |    Available     |    Optional  | Allowed |    NA   |
| etcOptionCode| Code identifying the type of electronic ticket capture processing used        |    None   |   None        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_VOICE_BKP   |   Etc Voice Bkp        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    NON_ETC   |   Non Etc        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_VOICE_BK_W_CLS_BAT   |   Etc Voice Bk W Cls Bat        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_ELECTRONIC_ONLY   |   Etc Electronic Only        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    HOST_OUT_OF_BALANCE   |   Host Out Of Balance        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_PLUS   |   Etc Plus        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_PLUS_DEBIT   |   Etc Plus Debit        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    HOST_MUST_BALANCE   |   Host Must Balance        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_ELC_W_CLS_BAT   |   Etc Elc W Cls Bat        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

