'use strict';

const listUrl
  = 'https://mate-academy.github.io/phone-catalogue-static/api/phones.json';

const getFirstReceivedDetails = () => {
  return new Promise((resolve, reject) => {
    fetch(listUrl)
      .then(response => response.json())
      .then(response => Promise.any(response))
      .then(response => resolve(response));
  });
};

const showFirstPhone = (url) => {
  const div = document.createElement('div');

  div.classList.add('first-received');

  div.insertAdjacentHTML('afterbegin', `
    <h3>First Received</h3>
    <ul>
      <li>${url.id}</li>
    </ul>
  `);

  document.body.append(div);
};

const getAllSuccessfulDetails = () => {
  return new Promise((resolve, reject) => {
    fetch(listUrl)
      .then(response => response.json())
      .then(response => Promise.all(response))
      .then(response => resolve(response));
  });
};

const listOfPhones = (dataFromServer) => {
  const div = document.createElement('div');

  div.classList.add('all-successful');

  div.insertAdjacentHTML('afterbegin', `
    <h3>All Sucessful</h3>
    <ul>
      ${dataFromServer.map(phone => `<li>${phone.id}</li>`).join(' ')}
    </ul>
  `);

  document.body.append(div);
};

getAllSuccessfulDetails()
  .then(listOfPhones);

getFirstReceivedDetails()
  .then(showFirstPhone);
