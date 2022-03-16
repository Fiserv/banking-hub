# Extended markdown syntax

Developer Studio Markdown extends standard Markdown with inline comment annotations.
The value inside of the annotations is one or more key-value pairs, and the annotation affects the Markdown block right after it in the document.

## Image centering
To center an image annotate `align` wrapped in a comment:

<!-- align: center -->
![Image centering](../assets/images/md/align_image.png "Image centering")


## Callouts, themed blockquotes

Callouts are MD blockquotes with optional annotation to indicate intent.
There are four blockquote themes: the default (no annotation required), success, warning, and danger.

![Themes](../assets/images/md/theme_syntax.png "Blockquote Themes")

> Blockquotes in default color.
<!-- theme: success -->
> Blockquotes in success theme.
<!-- theme: warning -->
> Blockquotes in warning theme.
<!-- theme: danger -->
> Blockquotes in danger theme.


## Cards & rows of cards
A `card` has a border and optional values for a title, a description, and a link.
To have a number of cards in a row, use `row` & `row-end` annotation before and after card(s) to be in a row.

![Row of Cards](../assets/images/md/card_syntax.png "Row of cards")

<!-- type: row -->

<!-- type: card
title: Card One
description: About...
link: ?path=docs/about-developer-studio.md
-->

<!-- type: card
title: Second Card
description: About...
link: ?path=docs/about-developer-studio.md
-->

<!-- type: row-end -->


## Tabsets
To organize content in tabs, indicate `titles` within the first `tab` annotation, followed by the tab content, and closed by a final `tab-end` annotation.
> Users of Stoplight Flavored Markdown, need to include additional `title` annotation for each tab.

![Tab sets](../assets/images/md/tab_syntax.png "Tabsets")

### Example

<!--
type: tab
titles: First Tab, Second Tab
-->

tab content

<!--
type: tab
-->

second tab content:

<!-- type: tab-end -->


### Additional tabset example

Bellow example of a tabset contains a table and a code block.

<!--
type: tab
titles: additionalDataCommon, JSON Example
-->


The below table identifies the parameters in the `additionalDataCommon` object.


| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `additionalData` | *object* | N/A | Used to identify specific data based on transaction requirements. |
| `installments` | *object* | N/A | Used in [installment bill payments](?path=docs/Resources/Guides/Bill-Payments/Installment-Payment.md) |
| `recurring` | *object* | N/A | Used in [recurring bill payments](?path=docs/Resources/Guides/Bill-Payments/Recurring-Payment.md) |
| `amountComponents` | *object* | N/A | Used in transactions where additional [amount](?path=docs/Resources/Master-Data/Amount-Components.md) fields such as tax, surcharge, fees are required as part of the request. |
| `billPaymentType` | *string* | 12 | Indicates the type of [bill payment](#bill-payment-indicator). Required for Charges, Cancel and Capture transactions where a bill payment is being processed. | 
| `deferredPayments` | *object* | N/A | Used in [defferred bill payments](?path=docs/Resources/Guides/Bill-Payments/Deferred-Payment.md) |
| `directedRouting` | *object* | N/A | Required in Directed Routing transactions. |
| `subMerchant` | *object* | N/A | Required in transaction initiated by a [Payment Facilitator](?path=docs/Resources/Guides/Industry-Verticals/Payment-Faciliator.md) to identify the sub-merchant information. |
| `privateLabel` | *object* | N/A | Used to process [Private Label](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md) payment cards. |
| `customFields` | *array* | N/A | Used to submit merchant custom fields used in terminal processing such as Key Value Pair. |


---

<!-- type: tab -->

JSON string format for `additionalDataCommon`:

```json
{
   "additionalDataCommon":{
      "additionalData":{
         "baiFlag": "PERSON_TO_PERSON",
         "ecomURL":"https://www.somedomain.com",
         "requestedTestResponseCode":"NO_CONNECTION_AVAILABLE",
         "emvParameterDownloadIndicator":true
      }
   }
}
```

<!-- type: tab-end -->

---
