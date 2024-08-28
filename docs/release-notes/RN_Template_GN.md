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
