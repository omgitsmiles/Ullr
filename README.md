
# Ullr

![Homepage](https://github.com/omgitsmiles/Ullr/blob/main/Screenshot%202022-12-29%20at%201.53.52%20PM.png)
## Built with

- React.js
- Ruby On Rails
- Styled by Material UI
- State management with Redux ToolKit
- Unit Testing with React Testing Library & Jest

### Get started

- Fork & Clone this repository
- Run Bundle install in terminal
- Run rails db:migrate
- Run rails db:seed
- Run rails server to start backend server
- Run npm install --prefix client in seperate terminal for frontend
- Run npm start --prefix client to start frontend server

### About Ullr

Taking my love for the Strava application and applied my version of the fitness tracker app with added social media functionality. Along with added your physical acitivites for you and your friends to see, Interactivity can range from celebrating their runs/bike rides, Forming groups of similiar interests, and private messaging between users. Ullr is meant to be a encompassing platform to celebrate and collaborate with other athletes. 

### Models
![Models](https://github.com/omgitsmiles/Ullr/blob/main/Screenshot%202022-12-29%20at%202.05.19%20PM.png)

- Create 7 models putting focus on user.
- User first many-to-many relationship with the Activities model & Gear(shoes or bikes) model
- Users second many-to-many relationship relationship revolving around the Post model and Groups.
- To create the ability to DM another user, the match model was created with references the user_id and assigns a friend_id to another user with a reference attribute on the model, referencing the class User id. 
- Using the match model user & friend ids as identifiers, both users can send and receiving messages with each other. 

### User Experience

- Homepage directs the user straight into a library of books added by previous users
- User can interact with the application by logging in/signing up for an account on the top right nav option
- Once user is logged in, can edit certain attributes of account, as well as view books already left review for
- Can navigate the homepage and view individual books to read other users reviews, as well as leaving a review of your own
- Users have the ability to add a new book to share with the BookEnds community

### Contributors

GoodReads for summaries and book images

### Contact
Paolo Alberca [Email](mailto:paolo.alberca@gmail.com) - [LinkedIn](https://www.linkedin.com/in/paolo-alberca-069384b8/)