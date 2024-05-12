import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import notFoundSVG from "../assets/page-not-found.svg";
import "./movie.css";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../redux/slice";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Movie = ({ genre, description, year, title, id, img }) => {
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(null);
  const [ratings, setRatings] = useState([]);

  const [notif, setNotif] = useState(false);

  const dispatch = useDispatch();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

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

  const addTowishListHandler = () => {
    dispatch(
      addToWishList({
        id: id,
        genre: genre,
        description: description,
        title: title,
        img: img,
      })
    );
    setNotif(true);
    console.log("notif", notif);
    if (notif) {
      toast.success("Add to wishlist", toastOptions);
    }
  };

  return (
    <>
      <ToastContainer />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img ? img : img} />
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
          <Button variant="primary" onClick={() => addTowishListHandler()}>
            Add to wishlist
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Movie;
