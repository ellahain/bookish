import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <ImageList variant="masonry" cols={6} gap={20} sx={{ overflow: 'visible' }}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              borderRadius: 2, // Keep the rounded corners
              overflow: 'hidden', // Prevent overflow during hover
              position: 'relative', // Positioning the items relative to the container
              '&:hover': {
                transform: 'scale(1.1)', // Scale up the entire card
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Add shadow effect
                zIndex: 1, // Make sure it appears above other items
              },
            }}
            component={Link}  // Use Link as the component for the ImageListItem
            to={`/bookish/reviews/${item.title}`}  // Updated path to match the desired structure
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: '8px', 
                width: '150px', height: '200px', // Maintain aspect ratio
                objectFit: 'cover', // Cover the area without stretching or distortion
              }}
            />
            <ImageListItemBar
              position="below"
              title={item.author}
              sx={{
                color: 'white',
                backgroundColor: 'transparent', // Optional: Makes background transparent
                textAlign: 'center', // Optional: Center-aligns the label
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://m.media-amazon.com/images/I/91+O6MTeBkL._UF1000,1000_QL80_.jpg',
    title: 'Blood & Steel',
    author: 'Helen B. Scheuerer',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1710664241i/204593914.jpg',
    title: 'Phantasma',
    author: 'Kaylie Smith',
  },
  {
    img: 'https://m.media-amazon.com/images/I/91GUu7WQtdL.jpg',
    title: 'Flawless',
    author: 'Elsie Silver',
  },
  {
    img: 'https://m.media-amazon.com/images/I/91GaYe7NJAL._UF1000,1000_QL80_.jpg',
    title: 'Zodiac Academy 6: Fated Throne',
    author: 'Caroline Peckham',
    author2: 'Susanne Valenti',
  },
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1684911482l/127280062._SX98_.jpg',
    title: 'Ruthless Vows',
    author: 'Rebecca Ross',
  },
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1615486938l/55987278._SX98_.jpg',
    title: 'Once Upon a Broken Heart',
    author: 'Stephanie Garber',
  },
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1659411218l/58340706._SX98_.jpg',
    title: 'One Dark Window',
    author: 'Rachel Gillig',
  },
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1689809645l/52857700._SX98_.jpg',
    title: 'House of Flame and Shadow',
    author: 'Sarah J. Maas',
  },
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1695345234l/199070596._SX98_.jpg',
    title: 'Love Redesigned',
    author: 'Lauren Asher',
  },
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1593147576l/53968496._SX98_.jpg',
    title: 'The Prison Healer',
    author: 'Lynette Noni',
  },
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1682369367l/136470356._SX98_.jpg',
    title: 'Nocticadia',
    author: 'Keri Lake',
  },
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618150545l/55710822._SX98_.jpg',
    title: 'Better than the Movies',
    author: 'Lynn Painter',
  },
];
