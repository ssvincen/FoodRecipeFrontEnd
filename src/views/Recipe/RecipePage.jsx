import React, { useEffect, useState } from 'react'
import { Masonry } from '@mui/lab'
import { CardActions, CardMedia, Card, CardContent } from '@mui/material';
import { Typography, Container, Button, Box } from '@mui/material';


const RecipePage = () => {
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 6 });
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                } else {
                    console.error('Failed to fetch products:', response.status);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <Box m="0.5rem 1rem">
            <Container>
                <Masonry columns={3} spacing={2}>
                    {data.map((item) => (
                        <div key={item.id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.image}
                                    title="green iguana" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))}

                </Masonry>
            </Container>
        </Box>
    )
}

export default RecipePage