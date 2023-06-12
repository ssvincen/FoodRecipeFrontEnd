import React, { useEffect, useState } from 'react'
import { Masonry } from '@mui/lab'
import { CardActions, CardMedia, Card, CardContent } from '@mui/material';
import { Typography, Container, Button, Box } from '@mui/material';
import { APIService } from '../../Utility/APIEndpoint';


const RecipePage = () => {
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 6 });
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                APIService.FoodRecipeEndPoint.get(`Recipes/GetRecipe?pageNumber=${pagination.pageIndex}&pageSize=${pagination.pageSize}`)
                .then(res => {
                    setData(res.data)
                })
                .catch(error => {
                    console.log("Error")
                })
            } catch (error) {
                console.error('Error fetching Food Recipe:', error);
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
                                        {item.title}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">View</Button>
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