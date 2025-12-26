import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {
    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    return (
        <div >
            <div className='InfoBox'>
            <Card className='info-card' sx={{ width:500, height:420 }}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={
                        info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography className='city' gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography className='Info' variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                       <span className='temp'>{info.temp}&deg;C</span>
                       <br />
                       <span className='weather'>{info.weather}</span>
                       <div className='option'>
                        <p> <i class="fa-solid fa-droplet"></i> &nbsp;  Humidity  {info.humidity}</p>
                        <p> <i class="fa-solid fa-temperature-arrow-down"></i> &nbsp; Temp_min {info.tempMin}&deg;C</p>
                       </div>
                       <div className='option'>
<p> <i class="fa-solid fa-temperature-arrow-up"></i> &nbsp; Temp_max {info.tempMax}&deg;C</p>
                        <p> <i class="fa-solid fa-thermometer-half"></i> &nbsp; Feels Like {info.feelsLike}&deg;C</p>
                       </div>
                        
                        
                    </Typography>
                </CardContent>
               
            </Card>
            </div>
        </div>
    )
}