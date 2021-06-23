# Response Codes

Fiserv Open Banking API returns standard HTTP status code along with the EFX and Service Provider status codes.

## HTTP Status Codes

For every API request, one of the following HTTP status code returns in the response.

| HTTP Status Code          | Description   |
|-------------------|-----------|
| 200  <br> OK           | Successful request   |
| 201  <br> Created      | Successfully created a new resource     |
| 401  <br> Unauthorized | Invalid authentication credentials  |
| 422  <br> Un-processable Entity  | Server is unable to process the request due to semantic errors |
| 500  <br> Internal Server Error  | Server encountered an unexpected error while processing the request  |
| 503  <br> Service Unavailable           | Service is temporarily unavailable due to overloaded or maintenance of the server    |

## EFX and Service Provider Status codes

EFX and Service Provider status codes may vary basis the selected Core configuration. 
Please select the Core from the dropdown below to see the relevant status codes:
<<Dropdown to be added here: Premier, Signature, Precision, Cleartouch, DNA>>

|  HTTP Status Code | EFX StatusCode | EFX Severity | EFX StatusDesc | Service Provider StatusCode | Service Provider Severity | Service Provider StatusDesc | COMMENTS |
|-----------------|--------------|------------|--------------|-----------------------------------|---------------------------|-----------------------------------|--------|
| 200  <br> OK           |         |              |                |                                     |                             |                                     |          |
| 201  <br> Created      |           |              |                |                                     |                             |                                     |          |
| 401  <br> Unauthorized |       |              |                |                                     |                             |                                     |          |
| 422  <br> Un-processable Entity |                |              |                |                                     |                             |                                     |          |
