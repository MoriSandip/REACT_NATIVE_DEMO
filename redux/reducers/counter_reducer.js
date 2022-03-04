const initialState = {
    counter : 0,
    nameData : "Hello user",
    edit: 'EDITTEXT',
    movies: [],
    sem : 'Sem - 1'
  };
  const counter_reducer = (state = initialState, action,text) => {
    switch(action.type){
      case "increment": {
        return {...state,counter:state.counter + 1};
      }
      case "decrement": {
        return {...state,counter:state.counter - 1};
      }
      case "multi": {
        return {...state,counter:state.counter * 5};
      }
      case "devide": {
        return {...state,counter:state.counter / 2};
      }
      case "name": {
        return {...state,nameData:state.nameData = "Sandip"  };
      }
      case "fullname": {
        return {...state,nameData:state.nameData="Sandip Mori"  };
      }
      case "toDo": {
        return {...state,edit:state.edit=text };
      }
      case "sem": {
        return {...state,sem:state.sem= "Sem 1 to 8" };
      }
      case "GET_MOVIES":
        return {...state, movies: action.payload};  
      default: {
        return state;
      }
    }
  }
  export default counter_reducer;