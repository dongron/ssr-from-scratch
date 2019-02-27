import fetch from 'isomorphic-fetch';

export default function getFacts() {
    return fetch('https://ssr-react.firebase.com/facts.json')
        .then(response => response.json());
}