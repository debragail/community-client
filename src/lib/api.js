import config from 'config';
import store from '../store';
import {getUserBadges, getUserUpdates} from '../actions';

export function apiGetUserBadges(){
  return fetch(`${config.api.endpoint}/api/user/badges`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(handleApiErrors)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => {throw error;});
}

export function apiGetUser(){
  return fetch(`${config.api.endpoint}/api/user`,{
    method: 'GET',
    credentials: 'include'
  })
    .then(resp => {
      if(!resp.ok) window.location.replace(config.login.endpoint);
      return resp;
    })
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => {throw error;});
}


export function apiLogoutUser(){
  return fetch(`${config.api.endpoint}/api/logout`,{
    method: 'GET',
    credentials: 'include'
  })
    .then(handleApiErrors)
    .then(resp => resp.json())
    .then(json => {
      window.location.replace(config.login.endpoint);
    })
    .catch(error => {throw error;});
}

function handleApiErrors(resp){
  if(!resp.ok) throw Error(resp.statusText);
  return resp;
}

export function apiGetUserUpdates(){
  return fetch(`${config.api.endpoint}/api/user/updates`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(handleApiErrors)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => {throw error;});
}

export function apiCreateStation(formData){

  return fetch(`${config.api.endpoint}/api/station`,{
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept':  '*/*',
      'Content-Type': 'application/json',
      'Cache': 'no-cache',
    },
    body: JSON.stringify(formData)
  })
    .then(handleApiErrors)
    .then(resp => {
      console.log(resp);
      return resp.json();
    })
    .then(json => {
      console.log("SUCCESSS");
      console.log(json);
      store.dispatch(getUserBadges());
      store.dispatch(getUserUpdates());
      return json;
    })
    .catch(error => {throw error;});
}
