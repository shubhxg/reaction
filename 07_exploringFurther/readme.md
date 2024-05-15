## `Monolith Architecture`

- Built as a single, indivisible unit.
- All components of the application (UI, logic, API, Auth, DB, etc.) are tightly coupled and deployed together as a single unit.
- Scaling the application typically involves replicating the entire monolithic instance on multiple servers or virtual machines.
- Changes to any part of the application require rebuilding and redeploying the entire monolith.
- Monolithic architectures are simpler to develop and test initially, but can become more complex and harder to maintain as the application grows in size and complexity.

## `Microservices Architecture`

- The application is decomposed into smaller, independent services or microservices such as backend, UI, auth, DB, sms, more.
- Each microservice is responsible for a specific capability or function and can be developed, deployed, and scaled independently.
- This follows single responsibility principle.
- Microservices communicate with each other through lightweight communication mechanisms, such as HTTP/REST APIs or message queues.
- Individual microservices can be developed using different programming languages, frameworks, and technologies, as long as they adhere to the defined communication protocols.
- Scaling can be achieved by running multiple instances of individual microservices, rather than scaling the entire application.
- Microservices architectures promote modularity and scalability.
- Each microservice can be run on a specific port number.

https://youtu.be/gnS5B90K_YY?si=6mdttU4huZj2PMNB