# Translation API
- System Integration - ITIS 6177 Final Project - Azure AI Translator API

## Introduction
The goal of this project is to create a simplified REST API for text translation using Azure AI Translator https://azure.microsoft.com/en-us/products/ai-services/ai-translator.The aim of this API 
is to provide an accessible and easy to use interface for integrating text translation service with different applications.

## Abstract
Azure Text Translation is a cloud-based REST API feature of the Translator service that uses neural machine translation technology to enable quick and accurate source-to-target text translation in 
real time across all supported languages. However, the service requires users to create and manage Azure resources, and to use the Azure SDKs to interact with the service. To simplify the usage of 
the service, we propose a wrapper API that can translate any text with a single HTTP request. The wrapper API is implemented as a serverless function that invokes the Azure Translation service and 
returns the translated output in JSON format. To use this API, the user does not require any subscription, it is a free service.

## Built Using
- Nodejs
- Express js
- Swagger UI

## Implementation flow <br />
![implementation flow](https://github.com/user-attachments/assets/31af1ba5-d36f-4532-8ef8-0cb81d2931aa)

We are implementing the API by using the HTTP POST method to get the input from a testing tool POSTMAN and present the prepared requested payload in a translated sentence to the user. We have followed the steps to implement the Translation API- <br />
1.	The user will send a request using POSTMAN.<br />
2.	The user’s request will be sent to our API.<br />
3.	Our API will get the user’s request and send it to the Azure Translation API, the Azure Translation API will fulfill the request by generating the response as per the requested payload.<br />
4.	The generated response by Azure Translation API will be sent to our API.<br />
5.	Our API will send the response payload as an output to the user's request.<br />

## Request URL
**Base URL** - http://167.99.225.18:3000

Send a **POST** request to http://167.99.225.18:3000/translate

## Request Header 
The request header should include:
|    Header     |       Description                           |     Accepted Value                |
| :----------:  | :----------------------------------------   | :-------------------------------- |
| Content-Type	| Specifies the content type of the payload.  |  application/json; charset=UTF-8. |

## Request Body 
The body of the request is a JSON array. Each array element is a JSON object with two string properties, one named **Text**, which represents the string to translate and the other named **Language**, which represents the language in which the text needs to be translated.

**Sample Request Body: **
{
  "text": "this is a test",
  "language": "fr"
}

## Response Body 
A successful response is a JSON array with one result for each string in the input array. A result object includes the following properties:

- detectedLanguage: An object describing the detected language through the following properties:
   - language: A string representing the code of the detected language.
   - score: A float value indicating the confidence in the result. The score is between zero and one and a low score indicates a low confidence.

The detectedLanguage property is only present in the result object when language autodetection is requested.

- translations: An array of translation results. The size of the array matches the number of target languages specified through the to query parameter. Each element in the array includes:
  - to: A string representing the language code of the target language.
  - text: A string giving the translated text.

**Sample Response Body**
[
    {
        "detectedLanguage": {"language": "en", "score": 1.0},
        "translations":[
            {"text": "你好, 你叫什么名字？", "to": "zh-Hans"}
        ]
    }
]
 
## Response Codes

| Code | Type                  | Description                                        |
| :--: | :-------------------- | :------------------------------------------------- |
| 200  | OK                    | Successful API call.                               |
| 400  | Bad Request           | The request is malformed or missing required data. |
| 500  | Internal Server Error | An error occurred on the server side.              |

## Instructions for how to use the API

Let's get started with text tarnslation API

## Swagger
Swagger documentation has been set up and can be used to explore the API endpoint -- http://167.99.225.18:3000/docs
![Swagger UI](https://github.com/user-attachments/assets/f33c9316-3d21-4896-a091-5af2c1595e85)

![Swagger Request](https://github.com/user-attachments/assets/be4d0ac7-1d64-4b75-89d1-4e72fa784e18)

![Swagger Response](https://github.com/user-attachments/assets/a7383c38-9cce-4fa1-b159-e903b6a437ca)

## Postman
1.Download Postman. Go to https://www.postman.com/downloads/ and choose your desired platform among Mac, Windows, or Linux. # by using the link https://www.postman.com/downloads/
  a. Open the downloaded file and click on run, it will start the Installation on your system
  b. You can sign up or else it works without signing up. It is a free tool used for testing HTTP methods.
  c. Now you have successfully installed Postman.

2. Create a new request on Postman using the following steps
  a. Open Postman and create 'New Request'
  b. Select POST from the request dropdown.
     ![HTTP method](https://github.com/user-attachments/assets/3530fd63-eb3c-46c2-8d85-1d3180c28bce)

  c. Enter the API URL in the address box as '(http://167.99.225.18:3000/translate)'
     ![API endpoint](https://github.com/user-attachments/assets/6fe81af5-2730-4436-984a-c5e8ad189107)

  d. For building the request body, click on 'raw' and select 'JSON' from the dropdown.
     ![Request setting](https://github.com/user-attachments/assets/ba1237aa-b5f0-4226-ae5e-616eedf487a6)
     
  e. Enter the message into the request body. NOTE-  The language is specified by providing a well-formed BCP 47 language tag. For instance, use the value fr to request names in French or use the value zh-Hant to request names in Chinese Traditional.
     ![Request Body](https://github.com/user-attachments/assets/b98a1afa-3629-4d12-b566-eb95a918fa0f)
 
  f. Make sure the request header has Content-Type as 'application/json'
     ![Request Header](https://github.com/user-attachments/assets/8d87fb08-4e37-4820-b582-5b8d389ed4e7)

**You can also use the following curl in POSTMAN if you are not able to send the request using above steps**
curl -X 'POST' \
  'http://167.99.225.18:3000/translate' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "text": "Hello. My name is Priya",
  "language": "fr"
}'

## Sample response
![Postman Response](https://github.com/user-attachments/assets/de23dcad-79ce-40b9-a0e1-dd76cad00633)




