# Social-Network-API


## Table of Contents

1. [Description](#description)
2. [Installation](#install)
3. [Usage Instructions](#usage)
4. [Questions](#questions)

## <a id="description"></a>Description 

This project is a back-end demonstration of an API that utilizes the NoSQL document database MongoDB, along with the ODM library Mongoose. This API is designed to simulate a social media web application, with CRUD routes for users, their "thoughts" (posts), and "reactions" (comments).

## <a id="install"></a>Installation 

First, ensure you have MongoDB installed on your local machine. Then, you can 'npm install' from the root directory to aquire all the needed node_modules. Finally, you can use 'npm run start' to run the server, and make your own HTTP requests using a product like Insomnia.

## <a id="usage"></a>Usage Instructions 

Since there is no seed data included with this demo, you'll need to start by using POST routes (which can be found in the 'routes' folder) to create a user. Once your user is created, you can use that user's id to create thoughts. Once a thought has been created, you can use the thought's id to create reactions. You can also use these respective ids to read, update, and delete as you see fit.

## <a id="questions"></a>Questions 

Any questions or concerns regarding the project, you can contact me via my email: zserafin@hotmail.com

For more of my work, visit my GitHub: https://github.com/zacharydserafin
