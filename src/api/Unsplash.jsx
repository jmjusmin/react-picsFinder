import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2pOv9dQBp3ANTuo-ClG4SSbML7cmUn2kig2M1yOMuA8',
  },
});
