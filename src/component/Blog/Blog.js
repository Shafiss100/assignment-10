import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
      <div className='blog-container'>
        <h1>Authorization vs Authentication - </h1>
        <p>
          Authorization means a kind of a permition. In computer sector
          authorization means give someone permission to do somethings. someone
          has logged in to a computer operating system or application, the
          system or application may want to identify what resources the user can
          be given during this session .
        </p>
        <br />
        <h1>Why we use firebase and where we use it?</h1>
        <p>
          Firebase is a realtime database. It provide us collaborative
          applications by allowing secure access to the database directly from
          client-side code. The Realtime Database provides a flexible,
          expression-based rules language, called Firebase Realtime Database
          Security Rules.
        </p>
        <br />
        <h1>The similar Firebase -</h1>
        <li>Parse </li>
        <li>Back4app</li>
        <li>Kinvey</li>
        <li>Backendless </li>
        <li>Kuzzle</li>
        <li>Pubnub</li>
        <li>Kumulos</li>
        <li>Game Sparks</li>
        <li>Hoodie</li>
        <li>Appwrite</li>
      </div>
    );
};

export default Blog;