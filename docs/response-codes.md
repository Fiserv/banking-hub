# Response Codes

Fiserv Open Banking API returns standard HTTP status code along with the EFX status code.

## HTTP Status Codes

For every API request, one of the following HTTP status codes is returned with the response.

| HTTP Status Code          | Description   |
|-------------------|-----------|
| `200  OK `      | Successful request   |
| `201  Created `     | Successfully created a new resource     |
| `401  Unauthorized` | Invalid authentication credentials  |
| `422  Un-processable Entity`  | Server is unable to process the request due to semantic errors |
| `500  Internal Server Error ` | Server encountered an unexpected error while processing the request  |
| `503  Service Unavailable  `        | Service is temporarily unavailable due to overload or maintenance activity    |

## EFX Status Codes

The following table lists EFX status codes and their descriptions related to the HTTP status codes:
        <table style="width: 100%;">
            <col />
            <col />
            <col />
            <col />
            <thead>
                <tr>
                    <th> HTTP Status Code </th>
                    <th> EFX Status Code </th>
                    <th> EFX Severity</th>
                    <th> EFX Status Description</t>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="background-color: #fff;" rowspan="3">`200 OK`</td>
                    <td>`1080`</td>
                    <td>Warning</td>
                    <td>Unchanged</td>
                </tr>
                <tr>
                    <td>`1120`</td>
                    <td>Info</td>
                    <td>No records match the selection criteria</td>
                </tr>
                <tr>
                    <td>`1140`</td>
                    <td>Warning</td>
                    <td>Details not available</td>
                </tr>
                <tr>
                    <td rowspan="2" style="background-color: #fff;" >`201 Created`</td>
                    <td>`0`</td>
                    <td>Info</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>`50`</td>
                    <td>Warning</td>
                    <td>General warning</td>
                </tr>
                <tr>
                    <td rowspan="8" style="background-color: #fff;">`401 Unauthorized`</td>
                    <td>`1700`</td>
                    <td>Error</td>
                    <td>Security violation</td>
                </tr>
                <tr>
                    <td>`1740`</td>
                    <td>Error</td>
                    <td>Authentication failed</td>
                </tr>
                <tr>
                    <td>`1760`</td>
                    <td>Error</td>
                    <td>Authentication failed</td>
                </tr>
                <tr>
                    <td>`1910`</td>
                    <td>Error</td>
                    <td>Password expired</td>
                </tr>
                <tr>
                    <td>`1970`</td>
                    <td>Error</td>
                    <td>General data error</td>
                </tr>
                 <tr>
                    <td>`2380`</td>
                    <td>Error</td>
                    <td>Unauthorized account</td>
                </tr>
                 <tr>
                    <td>`2395`</td>
                    <td>Error</td>
                    <td>Party not permitted to perform the action</td>
                </tr>
                <tr>
                    <td>`3700`</td>
                    <td>Error</td>
                    <td>Invalid object type</td>
                </tr>
                <tr>
                    <td rowspan="39" style="background-color: #fff;" >`422 Un-processable Entity`</td>
                    <td>`50`</td>
                    <td>Warning</td>
                    <td>General warning</td>
                </tr>
                <tr>
                    <td>`200`</td>
                    <td>Error</td>
                    <td>General data error</td>
                </tr>
                <tr>
                    <td>`1020`</td>
                    <td>Error</td>
                    <td>Required Element Not Included
</td>
                </tr>
                <tr>
                    <td>`1030`</td>
                    <td>Error</td>
                    <td>Value out of range</td>
                </tr>
                <tr>
                    <td>`1045`</td>
                    <td>Error</td>
                    <td>Request denied</td>
                </tr>
                <tr>
                    <td>`1070`</td>
                    <td>Error</td>
                    <td>Invalid Format
</td>
                </tr>
                <tr>
                    <td>`1080`</td>
                    <td>Error</td>
                    <td>Invalid field size</td>
                </tr>
                <tr>
                    <td>`1090`</td>
                    <td>Error</td>
                    <td>Invalid value</td>
                </tr>
                <tr>
                    <td>`1121`</td>
                    <td>Error</td>
                    <td>No records found</td>
                </tr>
                <tr>
                    <td>`1421`</td>
                    <td>Error</td>
                    <td>Invalid party reference</td>
                </tr>
                <tr>
                    <td>`1500`</td>
                    <td>Error</td>
                    <td>Invalid address</td>
                </tr>
                <tr>
                    <td>`1726`</td>
                    <td>Error</td>
                    <td>Error occurred due to included override exceptions in the `AdditionalStatus` field</td>
                </tr>
                <tr>
                    <td>`2020`</td>
                    <td>Error</td>
                    <td>Amount too small</td>
                </tr>
                <tr>
                    <td>`2030`</td>
                    <td>Error</td>
                    <td>Amount too large</td>
                </tr>
                <tr>
                    <td>`2050`</td>
                    <td>Error</td>
                    <td>Invalid amount value</td>
                </tr>
                <tr>
                    <td>`2120`</td>
                    <td>Error</td>
                    <td>Invalid date-time range</td>
                </tr>
                <tr>
                    <td>`2130`</td>
                    <td>Error</td>
                    <td>Date expired</td>
                </tr>
                <tr>
                    <td>`2140`</td>
                    <td>Error</td>
                    <td>Date-time value is less than the accepted limit</td>
                </tr>
                <tr>
                    <td>`2150`</td>
                    <td>Error</td>
                    <td>Date-time value is greater than the accepted limit</td>
                </tr>
                <tr>
                    <td>`2180`</td>
                    <td>Error</td>
                    <td>Request is too late to process the ACH transaction for the current day</td>
                </tr>
                <tr>
                    <td>`2320`</td>
                    <td>Error</td>
                    <td>Account not for party</td>
                </tr>
                <tr>
                    <td>`2350`</td>
                    <td>Error</td>
                    <td>Account closed</td>
                </tr>
                <tr>
                    <td>`2360`</td>
                    <td>Error</td>
                    <td>Restricted access</td>
                </tr>
                <tr>
                    <td>`2365`</td>
                    <td>Error</td>
                    <td>Request denied due to Account Status</td>
                </tr>
                <tr>
                    <td>`2380`</td>
                    <td>Error</td>
                    <td>Unauthorized account</td>
                </tr>
                <tr>
                    <td>`2421`</td>
                    <td>Error</td>
                    <td>Account not eligible for the transaction</td>
                </tr>
                <tr>
                    <td>`2441`</td>
                    <td>Error</td>
                    <td>Invalid account type to process the transaction</td>
                </tr>
                <tr>
                    <td>`2600`</td>
                    <td>Error</td>
                    <td>Invalid check number</td>
                </tr>
                <tr>
                    <td>`2610`</td>
                    <td>Error</td>
                    <td>Request is too late - check has been paid</td>
                </tr>
                <tr>
                    <td>`2740`</td>
                    <td>Error</td>
                    <td>Invalid currency code</td>
                </tr>
                <tr>
                    <td>`2940`</td>
                    <td>Error</td>
                    <td>Insufficient funds</td>
                </tr>
                <tr>
                    <td>`3060`</td>
                    <td>Error</td>
                    <td>Usage limit exceeded</td>
                </tr>
                <tr>
                    <td>`3080`</td>
                    <td>Error</td>
                    <td>Withdrawal limit exceeded</td>
                </tr>
                <tr>
                    <td>`3380`</td>
                    <td>Error</td>
                    <td>Expired card</td>
                </tr>
                <tr>
                    <td>`3960`</td>
                    <td>Error</td>
                    <td>Stop payment match</td>
                </tr>
                <tr>
                    <td>`5130`</td>
                    <td>Error</td>
                    <td>Card not linked to the account</td>
                </tr>
                <tr>
                    <td>`6335`</td>
                    <td>Warning</td>
                    <td>Original transaction has been reversed</td>
                </tr>
                <tr>
                    <td>`6350`</td>
                    <td>Error</td>
                    <td>Posting session cannot be back-dated.</td>
                </tr>
                <tr>
                    <td>`6410`</td>
                    <td>Error</td>
                    <td>Duplicate value</td>
                </tr>
                <tr>
                    <td style="background-color: #fff;" rowspan="24">`500 Internal Server Error`</td>
                    <td>`10`</td>
                    <td>Error</td>
                    <td>Additional action needed</td>
                </tr>
                <tr>
                    <td>`50`</td>
                    <td>Warning</td>
                    <td>General warning</td>
                </tr>
                <tr>
                    <td>`100`</td>
                    <td>Error</td>
                    <td>General error</td>
                </tr>
                <tr>
                    <td>`200`</td>
                    <td>Error</td>
                    <td>General data error</td>
                </tr>
                <tr>
                    <td>`300`</td>
                    <td>Error</td>
                    <td>System not available</td>
                </tr>
                <tr>
                    <td>`400`</td>
                    <td>Error</td>
                    <td>Unavailable function</td>
                </tr>
                <tr>
                    <td>`500`</td>
                    <td>Error</td>
                    <td>Unsupported service</td>
                </tr>
                <tr>
                    <td>`600`</td>
                    <td>Error</td>
                    <td>Unsupported message</td>
                </tr>
                <tr>
                    <td>`700`</td>
                    <td>Error</td>
                    <td>Unsupported function</td>
                </tr>
                <tr>
                    <td>`810`</td>
                    <td>Error</td>
                    <td>Message cannot be reversed</td>
                </tr>
                <tr>
                    <td>`999`</td>
                    <td>Error</td>
                    <td>Unspecified error</td>
                </tr>
                <tr>
                    <td>`1020`</td>
                    <td>Error</td>
                    <td>Required element not included</td>
                </tr>
                <tr>
                    <td>`1060`</td>
                    <td>Error</td>
                    <td>Element cannot be modified</td>
                </tr>
                <tr>
                    <td>`1070`</td>
                    <td>Error</td>
                    <td>Invalid format</td>
                </tr>
                <tr>
                    <td>`1090`</td>
                    <td>Error</td>
                    <td>Invalid value</td>
                </tr>
                <tr>
                    <td>`1220`</td>
                    <td>Error</td>
                    <td>Invalid identifier</td>
                </tr>
                <tr>
                    <td>`1800`</td>
                    <td>Error</td>
                    <td>Service not enabled</td>
                </tr>
                <tr>
                    <td>`1820`</td>
                    <td>Error</td>
                    <td>Customer session already in progress</td>
                </tr>
                <tr>
                    <td>`2380`</td>
                    <td>Error</td>
                    <td>Unauthorized account</td>
                </tr>
                <tr>
                    <td>`2400`</td>
                    <td>Error</td>
                    <td>Account unavailable</td>
                </tr>
                <tr>
                    <td>`3060`</td>
                    <td>Error</td>
                    <td>Usage limit exceeded</td>
                </tr>
                <tr>
                    <td>`6000`</td>
                    <td>Error</td>
                    <td>Terminal not configured</td>
                </tr>
                <tr>
                    <td>`6100`</td>
                    <td>Error</td>
                    <td>Message not permitted from terminal</td>
                </tr>
                <tr>
                    <td>`6130`</td>
                    <td>Error</td>
                    <td>Function not available to user</td>
                </tr>
                <tr>
                    <td style="background-color: #fff;">`503 Service Unavailable`</td>
                    <td>`300`</td>
                    <td>Error</td>
                    <td>System not available</td>
                </tr>
            </tbody>
        </table>
