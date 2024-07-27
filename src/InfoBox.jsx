import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'


export default function InfoBox({info}){
    const INIT_URL = 
    "https://plus.unsplash.com/premium_photo-1673415819372-e57ae96bb202?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   
    const HOT_URL = " https://plus.unsplash.com/premium_photo-1689298477277-7e488d5ecc10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1509252343815-9762ae8f9414?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwY29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1661715276689-619fb1c79d6f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity> 80 
          ? RAIN_URL:info.temp> 15
          ? HOT_URL : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>
            temperature= {info.temp}&deg;C
          </div>
          <div>
            humidity= {info.humidity}
          </div>
          <div>
            Maximum Temperature= {info.tempMax}&deg;C
          </div>
          <div>
            Minimum Temperature= {info.tempMin}&deg;C
          </div>
          <p>
            The weather can be described as <i>{info.weather} and feels like {info.feelsLike}&deg;C</i>
          </p>
        </Typography>
      </CardContent>
    </Card>
            </div>


        </div>
    )
}