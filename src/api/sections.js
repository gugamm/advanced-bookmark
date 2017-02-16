import { stateToAction } from 'redux-api-mapper';
import { getSections, createSection, updateSection, deleteSection, addLink, updateLink, deleteLink } from '../actions/index';

const stringToJsonParser    = (response)    => JSON.parse(response.data);
const dataFilterParser      = (sParamFilter, eParamFilter) => (response) => response.ok ? JSON.parse(response.data)[sParamFilter] : JSON.parse(response.data)[eParamFilter];
const jsonToStringParser    = (body) => (body && typeof body === "object" && JSON.stringify(body)) || (body);
const responseToRequestBody = (response) => response.request.body && JSON.parse(response.request.body) || response.request.body;

const sections = {
  name : 'Sections',
  path : '/sections',
  options : {
    responseParse : stringToJsonParser,
    bodyParse     : jsonToStringParser
  },
  endPoints : [
    {
      name : 'getSections',
      path : '/',
      action : stateToAction(null, getSections)
    },
    {
      name : 'createSection',
      path : '/',
      method : 'post',
      options : {
        responseParse : dataFilterParser('section', 'error')
      },
      action : stateToAction(null, createSection)
    },
    {
      name : 'updateSection',
      path : '/',
      method : 'put',
      options : {
        responseParse : responseToRequestBody
      },
      action : stateToAction(null, updateSection)
    },
    {
      name : 'deleteSection',
      path : '/{id}',
      method : 'delete',
      options : {
        responseParse : (response) => response.request.params.id
      },
      action : stateToAction(null, deleteSection)
    },
    {
      name : 'createLink',
      path : '/{sid}/links',
      method : 'post',
      options : {
        responseParse : (response) => {return {link : dataFilterParser('link', 'error')(response), sid : response.request.params.sid}; }
      },
      action : stateToAction(null, addLink)
    },
    {
      name : 'updateLink',
      path : '/links',
      method : 'put',
      options : {
        responseParse : responseToRequestBody
      },
      action : stateToAction(null, updateLink)
    },
    {
      name : 'deleteLink',
      path : '/links/{id}',
      method : 'delete',
      options : {
        responseParse : (response) => response.request.params.id
      },
      action : stateToAction(null, deleteLink)
    }
  ]
};

export default sections;
