import React from 'react';

const ArtworksForm = ({ artwork, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form-center">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input className="form-control"
          type="text"
          id="title"
          name="title"
          placeholder="Title of artwork"
          value={artwork.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input className="form-control"
          type="text"
          id="image"
          name="image"
          placeholder="Image of artwork"
          value={artwork.image}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input className="form-control"
          type="text"
          id="price"
          name="price"
          placeholder="Price of artwork"
          value={artwork.price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input className="form-control"
          type="text"
          id="description"
          name="description"
          placeholder="Description of artwork"
          value={artwork.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="btn btn-primary center-block">Submit</button>
      </div>
    </form>
  );
};

export default ArtworksForm;
