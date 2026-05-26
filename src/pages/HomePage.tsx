import { FavoriteButton } from "../features/favorites/favoriteButton";
import { StarRating } from "../features/ratings/StarRating";
import { WatchListButton } from "../features/watchList/watchListButton";

const HomePage = () => {
    const testMovie = {id: 1, title: 'Inception', poster_path: null}
    return(
        <div>
            <h2 className="text-2xl mb-4">Strona główna</h2>
            <FavoriteButton movie={testMovie}/>
            <WatchListButton movie={testMovie}/>
            <StarRating movieId={testMovie.id}/>
        </div>
    )
}
export default HomePage;