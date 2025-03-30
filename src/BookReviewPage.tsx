import  { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

// Dynamically import the book review components
const reviews = {
  'Blood & Steel': lazy(() => import('./BookReviews/Blood & Steel')),
  'Phantasma': lazy(() => import('./BookReviews/Phantasma')),
  'Zodiac Academy: Sorrow and Starlight': lazy(() => import('./BookReviews/Zodiac Academy: Sorrow and Starlight')),
  'Zodiac Academy: Beyond the Veil': lazy(() => import('./BookReviews/Zodiac Academy: Beyond the Veil')),
  'Zodiac Academy: Restless Stars': lazy(() => import('./BookReviews/Zodiac Academy: Restless Stars')),
  'Half a Soul': lazy(() => import('./BookReviews/Half a Soul')),
  'Personalities on the Plate': lazy(() => import('./BookReviews/Personalities on the Plate')),
  //'Flawless': lazy(() => import('./Flawless')), // Create this component too
  // Add more reviews here as necessary
};

const BookReviewPage = () => {
  const { title } = useParams(); // Extract the book title from the URL

  // Find the review component for the given title
  const ReviewComponent = reviews[title as keyof typeof reviews];

  if (!ReviewComponent) {
    return <h1 style={{color: "white"}}>Review not found!</h1>; // If no review is found for the given title
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ReviewComponent />
      </Suspense>
    </div>
  );
};

export default BookReviewPage;
