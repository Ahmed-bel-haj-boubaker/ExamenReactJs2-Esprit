import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Movies from "./Movies/Movies";
import NotFound from "./NotFound/NotFound";
import MovieDetails from "./MovieDetails/MovieDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/movies">
          <Route
            path=""
            element={
              <Layout>
                <Movies />
              </Layout>
            }
          />
          <Route
            path="movie-details/:id"
            element={
              <Layout>
                <MovieDetails />
              </Layout>
            }
          />
          <Route />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
