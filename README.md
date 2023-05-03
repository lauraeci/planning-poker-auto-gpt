# Planning Poker App

This is a planning poker app built using Node.js, Apollo GraphQL, TypeScript, and React.

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed on your local machine.

## Installation and Setup

Follow these steps to set up the app using Docker:

1. Clone the repository:

```git clone https://github.com/your-username/planning-poker.git```

clone_path=C:\workdir\Auto-GPT\auto_gpt_workspace repository_url=https://github.com/lauraeci/planning-poker-auto-gpt.git directory=planningPoker

2. Navigate to the `server` folder:

```cd planningPoker/server```


3. Build the Docker image for the server:

```docker build -t planning-poker-server .```


This command will create a Docker image named `planning-poker-server`.

4. Run the Docker container for the server:

```docker run -p 4000:4000 planning-poker-server```



This command will start a Docker container with the server running on port 4000. You can access the GraphQL API at `http://localhost:4000/graphql`.

5. In a new terminal window, navigate to the `client` folder:

cd planning-poker/client


6. Build the Docker image for the client (make sure you have a Dockerfile in the client folder as well):

```docker build -t planning-poker-client .```


This command will create a Docker image named `planning-poker-client`.

7. Run the Docker container for the client:

```docker run -p 3000:3000 planning-poker-client```


This command will start a Docker container with the client running on port 3000. You can access the app in your browser at `http://localhost:3000`.

Now you have the planning poker app running locally on your machine using Docker. Enjoy using the app!

Without docker

Start the server
1.	
      npm install
2.	Build the server:
   
      npm run build
      This command compiles the TypeScript files into JavaScript and places the output in the dist directory.
3.	Run the server:

      npm run serve

Start the client
1.   
      npm install
2. npm run build

## User Requirements

The planning poker app aims to provide an interactive and efficient way for Agile teams to estimate their work items. The app should meet the following user requirements:

1. **Planning Poker Sessions:**
    - Users should be able to start a planning poker session.
    - A unique link should be generated for each planning poker session.
    - Anyone with the link should be able to join the planning poker session without needing to sign up or log in.
    - Users should be able to see a list of available planning poker cards with common values (e.g., 0, 1/2, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?, and ∞).
    - Users should be able to select a card to represent their estimate for the work item being discussed.
    - After all participants have chosen a card, the chosen cards should be revealed to everyone.
    - If there's no consensus on the estimate, the team should be able to discuss and repeat the voting process until a consensus is reached.
    - The final estimate should be saved and displayed in the session history.

2. **Real-time Updates:**
    - The app should provide real-time updates to all participants during a planning poker session, ensuring that everyone sees the same information simultaneously.

3. **History:**
    - Users should be able to view the history of past planning poker sessions, including the estimates given for each work item.

4. **Responsive Design:**
    - The app should be accessible and responsive on various devices, such as desktops, tablets, and smartphones.

5. **Security and Data Privacy:**
    - The app should store user data securely and comply with data privacy regulations.
