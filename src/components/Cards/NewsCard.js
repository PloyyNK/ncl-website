import '../styles/NewsCard.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom'



export default function NewsCard({header, description, pic, id, category}) {
    
    const navigate = useNavigate()
    const navigateNews = () => {
        navigate(`/news-events-ncl/${category}/${id}`)
    }
    
    return (
        <Card className='card-ctn' sx={{ maxWidth: 250, maxHeight: 350}}>
            <CardActionArea onClick={navigateNews}>
                <CardMedia
                    component="img"
                    height="140"
                    image={pic}
                    alt="header"
                />
                <CardContent>
                    <Typography gutterBottom variant="body2" component="div">
                        {header}
                    </Typography>
                    <Typography variant="p" color="text.secondary" fontSize={'12px'}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={navigateNews}>
                    Read more
                </Button>
            </CardActions>
        </Card>
    )
}