import React from 'react';

const ArtworksForm = ({ artwork, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Title:</label>
        <input type="text"
          id="title"
          name="title"
          placeholder="Title of artwork"
          value={artwork.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Image:</label>
        <input type="text"
          id="image"
          name="image"
          placeholder="Image of artwork"
          value={artwork.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Price:</label>
        <input type="text"
          id="price"
          name="price"
          placeholder="Price of artwork"
          value={artwork.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Description:</label>
        <input type="text"
          id="description"
          name="description"
          placeholder="Description of artwork"
          value={artwork.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default ArtworksForm;
