import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import notFoundSVG from "../assets/page-not-found.svg";
import "./movie.css"
const Movie = ({ genre, description, year, title, id }) => {
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(null);
  const [ratings, setRatings] = useState([]);

  const handleRatingChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 5) {
      setRating(value);
    } else {
      alert("Please enter a rating between 1 and 5");
    }
  };

  const handleRatingSubmit = () => {
    if (rating > 0) {
      setRatings([...ratings, rating]);
      const sum = ratings.reduce((acc, curr) => acc + curr, 0);
      const average = sum / ratings.length;
      setAverageRating(average);
      setRating(0);
    } else {
      alert("Please enter a rating between 1 and 5");
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={notFoundSVG} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Year: {year}</Card.Text>
        <Card.Text>Description: {description}</Card.Text>
        <Card.Text>Genre: {genre}</Card.Text>
        <Form.Group controlId="rating">
          <Form.Label>Rating (1-5):</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleRatingSubmit}>
          Submit Rating
        </Button>
        <div>
          {averageRating !== null ? (
            <p>Average Rating: {averageRating.toFixed(2)}</p>
          ) : (
            <p>No ratings yet</p>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Movie;
