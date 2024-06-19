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

## Single Responsibility Principle

The Single Responsibility Principle (SRP) is one of the key principles of object-oriented programming and software design.

It states that a class or module should have only one reason to change, meaning that it should have a single, well-defined responsibility or concern.

The main idea behind the SRP is to promote high cohesion and low coupling in software design. By having each class or module focused on a specific task or responsibility, it becomes easier to understand, maintain, and modify the code.

Single class / module = single responsibility = single reason to change.

This also helps in modularity and testing.

## CSS Libraries and Frameworks as alternatives to CSS

- Sass
- Styled Components
- Less
- BootStrap (popular)
- MUI (Prebuilt Components to import)
- Chakra UI 
- Taiwind CSS (popular utility based classes)
- Ant Design