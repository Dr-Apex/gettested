import {API} from '../../backend';

// report calls
// create
export const createReport = (userId, token, report) => {
  return fetch(`${API}/report/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(report)
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
};

// get all reports
export const getReports = () => {
  return fetch(`${API}/reports`, {
    method: 'GET'
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
};

// get a report
export const getReport = reportId => {
  return fetch(`${API}/report/${reportId}`, {
    method: 'GET'
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
};

// update report
export const updateReport = (reportId, userId, token, report) => {
  return fetch(`${API}/report/${reportId}/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(report)
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
};
