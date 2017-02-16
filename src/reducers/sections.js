import { GET_SECTIONS, CREATE_SECTION, UPDATE_SECTION, DELETE_SECTION, ADD_LINK, UPDATE_LINK, DELETE_LINK } from '../actions/types';

const defaultState = [];

function sections(prevState = defaultState, action) {
  switch (action.type) {
    case GET_SECTIONS   : return action.payload;
    case CREATE_SECTION : return [...prevState, action.payload];
    case UPDATE_SECTION : return prevState.map(section => (section.id === action.payload.id) ? Object.assign({}, section, action.payload) : section);
    case DELETE_SECTION : return prevState.filter(section => section.id !== action.payload);
    case ADD_LINK       : {
      return prevState.map(section => {
        if (section.id === action.payload.sid)
          return {...section, links : [...section.links, action.payload.link]};
        return section;
      });
    }
    case UPDATE_LINK : {
      return prevState.map(section => {
        return {...section, links : section.links.map(link => (link.id === action.payload.id) ? Object.assign({}, link, action.payload) : link)};
      });
    }
    case DELETE_LINK : {
      return prevState.map(section => {
        return {...section, links : section.links.filter(link => link.id !== action.payload)};
      });
    }
  }

  return prevState;
}

export default sections;