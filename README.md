
# Document Management Backend 
This is a backend system for a document management platform, made using express js server.


# Getting Started
## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
## Installation


### 1. Clone the project

```bash
  git clone https://github.com/AmanSingh44/Document-Management-Platform.git
```

Go to the project directory

```bash
  cd project_directory
```



### 2. Install dependencies
```bash
  npm install 
```


### 3. Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`USERNAME(Mailtrap account)`

`PASSWORD(Mailtrap account)`

`FROM(sender's email)`

`TO(receiver's email`



 





## Run Locally

```bash
  npm start
```


## Usage

### File Upload
Users can upload HTML files to the server. Ensure that the file is in HTML format and has a '.html' extension.

Endpoint: POST /document/upload

### HTML to PDF Conversion
Uploaded HTML files are automatically converted to PDF using Puppeteer.

### Email Confirmation
Upon successful file upload and conversion, a confirmation email is sent to the user's registered email address with the generated PDF attached in the mailtrap inbox.
## Screenshots
You can find your mailtrap auth for nodemailer from "My inbox" sectoin
![Mailtrap Auth](https://github.com/AmanSingh44/Document-Management-Platform/blob/main/server/screenshots/mailtrap%20auth.png?raw=true)

To send upload request to the server you can use API clients like postman or thunder client. server request through thunder client will look like this
![APi call](https://github.com/AmanSingh44/Document-Management-Platform/blob/main/server/screenshots/thunder%20client%20post.png?raw=true)

If there is no error, you will receive the html file that you sent in pdf format through an email in your mailtrap inbox. 
![Mailtrap email](https://github.com/AmanSingh44/Document-Management-Platform/blob/main/server/screenshots/received%20email.png?raw=true)

An example with an HTML file as input and its output in pdf format
![Input html file](https://github.com/AmanSingh44/Document-Management-Platform/blob/main/server/screenshots/html%20file.png?raw=true)
![Translated PDF](https://github.com/AmanSingh44/Document-Management-Platform/blob/main/server/screenshots/Downloaded%20pdf.png?raw=true)


## Demo

Link to the demo

https://jam.dev/c/20e2948b-705a-4c73-b7df-5e31114fa6c3
## Contributing

Contributions are always welcome!


