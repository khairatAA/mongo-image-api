<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=mongodb,typescript,postman,nodejs,npm" />
  </a>
</p>
<h1 align="center">MongoDB Image API</h1>

## Overview

This project is a RESTful API built using TypeScript, MongoDB, Node.js, and Express. The API allows users to upload, retrieve, and delete images stored in a MongoDB database. Images are stored in base64 format, and the API supports image formats such as JPG, PNG, and GIF.

## Table of Contents

- <a href="#Features">Features</a>
- <a href="#Getting Started">Getting Started</a>
  - <a href="#prerequisites">Prerequisites</a>
  - <a href="#installation">Installation</a>
  - <a href="#configuration">Configuration</a>
- <a href="#Usage">Usage/Endpoints</a>

## Features

- Upload images in JPG, PNG, and GIF formats.
- Retrieve a list of stored images.
- Retrieve a specific image by ID.
- Delete an image by ID.

## Getting Started

You can interact with the API in two ways by either cloning the repo or using the deployed URL

## Using the Deployed API Method

The API is deployed on Render at <https://mongo-image-api.onrender.com>. You can interact with the API using Postman or any HTTP client.

## Cloning Method

### Prerequisites

Ensure that you have the following installed:

- Node.js
- MongoDB
- npm

### Installation

1. Clone the repository:
   `git clone https://github.com/khairatAA/mongo-image-api.git`

2. Navigate to the project directory:
   `cd mongo-image-api`

3. Install dependencies:
   `npm install`

### Configuration

Create a .env file in the project root and configure the following variables:

```
PORT=3000
MONGODB_URI=mongodb://your-mongodb-uri/image_api
```

## Usage

### Uploading an Image

#### Endpoint: `POST /upload`

Description: Uploads an image to the database.

Usage:

1. Open Postman.
2. Set the request type to POST.
3. Enter the API endpoint URL: <https://mongo-image-api.onrender.com/upload>.
4. Set the request body to form-data.
5. Add a key named image and select a file for the value.
6. Send the request.

### Retrieving Images

#### Endpoint: `GET /get_images`

Description: Retrieves a list of all stored images.

Usage:

1. Open Postman.
2. Set the request type to GET.
3. Enter the API endpoint URL: <https://mongo-image-api.onrender.com/get_images>.
4. Send the request.

#### Endpoint: `GET /get_image/:id`

Description: Retrieves a specific image by ID.

Usage:

1. Open Postman.
2. Set the request type to GET.
3. Enter the API endpoint URL: <https://mongo-image-api.onrender.com/get_image/{image_id}>.
4. Replace `{image_id}` with the actual ID of the image you want to retrieve.
5. Send the request.
6. Save response to a file and add an extension (the value in its content file) e.g .png, .jpeg or .gif

### Deleting an Image

#### Endpoint: `DELETE /delete_images/:id`

Description: Deletes an image by ID.

Usage:

1. Open Postman.
2. Set the request type to DELETE.
3. Enter the API endpoint URL: <https://mongo-image-api.onrender.com/delete_image/{image_id}>.
4. Replace `{image_id}` with the actual ID of the image you want to delete.
5. Send the request.
