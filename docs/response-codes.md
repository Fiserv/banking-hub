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

| HTTP Status Code            | EFX Status Code | EFX Severity                                                                       | EFX Status Description   |
|-----------------------------|-----------------|------------------------------------------------------------------------------------|--------------------------|
| `200 OK`                    | `1080`          | Warning                                                                            | Unchanged                |
| `1120`                      | Info            | No records match the selection criteria                                            |
| `1140`                      | Warning         | Details not available                                                              |
| `201 Created`               | `0`             | Info                                                                               | Success                  |
| `50`                        | Warning         | General warning                                                                    |
| `401 Unauthorized`          | `1700`          | Error                                                                              | Security violation       |
| `1740`                      | Error           | Authentication failed                                                              |
| `1760`                      | Error           | Authentication failed                                                              |
| `1910`                      | Error           | Password expired                                                                   |
| `1970`                      | Error           | General data error                                                                 |
| `2380`                      | Error           | Unauthorized account                                                               |
| `2395`                      | Error           | Party not permitted to perform the action                                          |
| `3700`                      | Error           | Invalid object type                                                                |
| `422 Un-processable Entity` | `50`            | Warning                                                                            | General warning          |
| `200`                       | Error           | General data error                                                                 |
| `1020`                      | Error           | Required Element Not Included                                                      |
| `1030`                      | Error           | Value out of range                                                                 |
| `1045`                      | Error           | Request denied                                                                     |
| `1070`                      | Error           | Invalid Format                                                                     |
| `1080`                      | Error           | Invalid field size                                                                 |
| `1090`                      | Error           | Invalid value                                                                      |
| `1121`                      | Error           | No records found                                                                   |
| `1421`                      | Error           | Invalid party reference                                                            |
| `1500`                      | Error           | Invalid address                                                                    |
| `1726`                      | Error           | Error occurred due to included override exceptions in the `AdditionalStatus` field |
| `2020`                      | Error           | Amount too small                                                                   |
| `2030`                      | Error           | Amount too large                                                                   |
| `2050`                      | Error           | Invalid amount value                                                               |
| `2120`                      | Error           | Invalid date-time range                                                            |
| `2130`                      | Error           | Date expired                                                                       |
| `2140`                      | Error           | Date-time value is less than the accepted limit                                    |
| `2150`                      | Error           | Date-time value is greater than the accepted limit                                 |
| `2180`                      | Error           | Request is too late to process the ACH transaction for the current day             |
| `2320`                      | Error           | Account not for party                                                              |
| `2350`                      | Error           | Account closed                                                                     |
| `2360`                      | Error           | Restricted access                                                                  |
| `2365`                      | Error           | Request denied due to Account Status                                               |
| `2380`                      | Error           | Unauthorized account                                                               |
| `2421`                      | Error           | Account not eligible for the transaction                                           |
| `2441`                      | Error           | Invalid account type to process the transaction                                    |
| `2600`                      | Error           | Invalid check number                                                               |
| `2610`                      | Error           | Request is too late - check has been paid                                          |
| `2740`                      | Error           | Invalid currency code                                                              |
| `2940`                      | Error           | Insufficient funds                                                                 |
| `3060`                      | Error           | Usage limit exceeded                                                               |
| `3080`                      | Error           | Withdrawal limit exceeded                                                          |
| `3380`                      | Error           | Expired card                                                                       |
| `3960`                      | Error           | Stop payment match                                                                 |
| `5130`                      | Error           | Card not linked to the account                                                     |
| `6335`                      | Warning         | Original transaction has been reversed                                             |
| `6350`                      | Error           | Posting session cannot be back-dated.                                              |
| `6410`                      | Error           | Duplicate value                                                                    |
| `500 Internal Server Error` | `10`            | Error                                                                              | Additional action needed |
| `50`                        | Warning         | General warning                                                                    |
| `100`                       | Error           | General error                                                                      |
| `200`                       | Error           | General data error                                                                 |
| `300`                       | Error           | System not available                                                               |
| `400`                       | Error           | Unavailable function                                                               |
| `500`                       | Error           | Unsupported service                                                                |
| `600`                       | Error           | Unsupported message                                                                |
| `700`                       | Error           | Unsupported function                                                               |
| `810`                       | Error           | Message cannot be reversed                                                         |
| `999`                       | Error           | Unspecified error                                                                  |
| `1020`                      | Error           | Required element not included                                                      |
| `1060`                      | Error           | Element cannot be modified                                                         |
| `1070`                      | Error           | Invalid format                                                                     |
| `1090`                      | Error           | Invalid value                                                                      |
| `1220`                      | Error           | Invalid identifier                                                                 |
| `1800`                      | Error           | Service not enabled                                                                |
| `1820`                      | Error           | Customer session already in progress                                               |
| `2380`                      | Error           | Unauthorized account                                                               |
| `2400`                      | Error           | Account unavailable                                                                |
| `3060`                      | Error           | Usage limit exceeded                                                               |
| `6000`                      | Error           | Terminal not configured                                                            |
| `6100`                      | Error           | Message not permitted from terminal                                                |
| `6130`                      | Error           | Function not available to user                                                     |
| `503 Service Unavailable`   | `300`           | Error                                                                              | System not available     |
