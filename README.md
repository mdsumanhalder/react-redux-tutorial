# What is redux:

- It is state container.It means it stores the state of our application.

## We can use two hooks alternative to redux

1. useContext
2. useReducer

- why then use redux, not react hooks: Redux released 2015 when these hooks was not available.

# what is react-redux:

- React-redux is a library that provides bindings to use React and redux together in an application.

## Three Core Concepts of redux

1. shop= store: hold the state of our application
2. Intentions to BUY_CAKE = Action : describes what happened or tell what to do
3. shopkeeper= Reducer : Ties the store adn actions together or tell how to do

## Three Principles of redux

1. First principle:

- The state of our whole application is stored in an object tree within a single store.
- Maintain our application state in a single object which would be managed by the Redux store.

2. Second principle:

- The only way to change the state is to emit an action, an object describing what happened.
- To update the state of our app, we need to let Redux know about that with an action
- Not allowed to directly update the state object

3. Third principle:

- To specify how the state tree is transformed by actions, you write pure reducers or pure javascript functions.
## Store
- only 1 store for one app.Store is readonly, for updating store, we can only do it through reduce
## Actions:

- The only way our application can interact with the store
- Carry some information from your app to the redux store
- Action is plain javascript objects and action creator is a pure javascript function which return action
- Have a 'type' property that indicates the type of action being performed.
- Action creator is a function which create the action

## Reducers

- Specify how the app's state changes in response to actions sent to the store
- Function that accepts state and action as arguments and returns the next state of the application .
- (previousState,action)=> newState
- combineReducers function: it helps to use multiple reducers in redux store

## Middleware

- It is suggested way to extend Redux custom functionality.
- Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
- Use middleware for logging, crash reporting, performing asynchronous tasks etc.

## Async Actions

- To use API call to fetch data from an end point
- redux-thunk: it helps us to make async code.

1. It helps us to return a function instated of default action creator return object

- note: the redux-thunk function doesn't need to be a pure function.This function also can dispatch action.The function receives dispatch method as it's argument

- Way to make async action creators

1. install axios: Request to an API end point
2. install redux-thunk: To define async action creators which is a middleware

## Redux store

### Responsibilities:

- Holds application state
- Allows access to state via getState()
- Allows state to be updated via dispatch(action)
- Registers listener via subscribe(listener).I figured subscribe wasn't really necessary if I was using React-Redux and connect
- Handles unregistering of listeners via the function returned by subscribe(listener)

## connect:

- it helps to connect redux with react component. it has two function parameters (mapStateToProps, mapDispatchToProps)
- If we want to use only mapDispatchToProps, then we can pass 'null' value as another argument in connect function

## Redux hooks: these are alternative to connect.Subscribe to store and dispatch actions without connect()

- useSelector(): it is equivalent to mapStateToProps
- useDispatch(): it is equivalent to mapDispatchToProps
- note: need to explore more to know

## redux-logger: it helps to see the state changes

## redux-thunk

## redux-axios-middleware, redux-persist npm packages: need to have a look

# Questions:

- why need ...state like this and mean why need to copy
- is actions creator payload necessary or when and why use payload in action creator
- How redux-thunk dispatch method works as an argument or Can I name different:yes
- different ways to write initial state in reducers such as object, array, string etc.
- if I define initial state as object will I my array become object of array
- why need to call arrow function and what is prevState
- need to know about switch case condition well
- why need to write arrow function to call function inside jsx in react
- How ownProps works in mapStateToProps and mapDispatchToProps in connect function

# Questions for interview in react:

- conditional rendering and List rendering

1. what is the significant of having the key prop when rendering a list of elements
2. what is the potential bug that you can introduce when using index as a key?

- Class component's lifecycle methods

1. legacy code
2. Order of invocation and a brief description of when you'd use each one of them

- Context API
- React hooks : why need hooks

1. useState,useEffect and useContext
2. useEffect: how it works with class lifecycle methods

- Optimization : prevent unnecessary re-render in app

1. Pure components
2. memo
3. useMemo and useCallback

- How share logic across components?

1. Higher order components
2. Render props pattern
3. Custom hooks

- what are some of the packages that you use along with React or React ecosystem?

1. Styling
2. Routing
3. Form handling
4. State management
5. create-react-app or Custom webpack config

# Questions for interview in redux:

- what is redux?
- How do you decide whether to choose Context API or Redux?
- explain different parts of redux such as store,action, action-creator, reducers
- How the control flows between these different parts?
- What exactly does the connect function do from the react-redux library?
- what mapStateToProps and mapDispatchToProps actually do?
- In a reducer, why should you return a new object as state and not modify the existing state?

# redux practical:

- link:https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8

- link: https://dev.to/singhanuj620/react-redux-learn-the-redux-easily-with-project-aji
