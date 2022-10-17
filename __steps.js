/**
 ------------------------
 BASIC CONTEXT API SETUP
  ------------------------
 1. Context API: Share auth atate with other components(across the application)
 2. create an UserContext
 3. COntextProvider with passed children
 4. set the UserContext in the index.js
 5. to consume the context: export the AuthCOntext from userContext
 6. Now at Header or Home () anywhere else); useUseCOntext hook to get the interface


 ------------------------
 AUTH INTREGATION
 ------------------------
 1. use getAuth by passing the ap from firebase
 2. create a function named createUser to return createUserWithEmailAndPassword
 */
