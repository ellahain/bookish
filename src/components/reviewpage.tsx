import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <ImageList variant="masonry" cols={4} gap={16} sx={{ overflow: 'visible' }}>
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
                width: '100%', height: '200px', // Maintain aspect ratio
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
    img: 'https://tmm.chicagodistributioncenter.com/IsbnImages/9780226195186.jpg',
    title: 'Personalities on the Plate',
    author: 'Barbara J. King'
  },
  {
    img: 'https://m.media-amazon.com/images/I/71wvIY18yEL._AC_UF1000,1000_QL80_.jpg',
    title: 'Half a Soul',
    author: 'Olivia Atwater'
  },
  {
    img: 'https://m.media-amazon.com/images/I/91cRvRTmW0L._UF1000,1000_QL80_.jpg',
    title: 'Zodiac Academy: Restless Stars',
    author: 'Peckham & Valenti',
    author2: 'Susanne Valenti',
  },
  {
    img: 'https://m.media-amazon.com/images/I/811Hw216KZL._UF1000,1000_QL80_.jpg',
    title: 'Zodiac Academy: Beyond the Veil',
    author: 'Peckham & Valenti',
    author2: 'Susanne Valenti',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664442356i/59808792.jpg',
    title: 'Zodiac Academy: Sorrow and Starlight',
    author: 'Peckham & Valenti',
    author2: 'Valenti',
  },
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
    img: 'https://m.media-amazon.com/images/I/91GaYe7NJAL._UF1000,1000_QL80_.jpg',
    title: 'Zodiac Academy 6: Fated Throne',
    author: 'Caroline Peckham',
    author2: 'Susanne Valenti',
  }
  
];
