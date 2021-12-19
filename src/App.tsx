import React from 'react';
import Header from './Components/Header';
import './App.css';
import { Stack, Box, AppBar, IconButton, Toolbar, Typography, Button, Container, Card, CardContent, Grid, CardMedia, CardActions } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header></Header>
            <Stack direction="row" spacing={5}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '15%',
                    }}
                    image="https://i.ibb.co/WsVT1Vh/h005L.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Номер стандарт
                    </Typography>
                    <Typography>
                    Уютный однокомнатный номер с одной двуспальной кроватью и рабочей зоной. По запросу возможно предоставление дополнительного места (пуф-кровать). Площадь номера: 30 кв.м.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small">Узнать актуальную цену</Button>
                  </CardActions>
                </Card>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '15%',
                    }}
                    image="https://i.ibb.co/HhFBQG7/hotel-1627-6.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Номер комфорт
                    </Typography>
                    <Typography>
                    Номер повышенной комфортности с кондиционером и широкой двуспальной кроватью. Гостям предоставляются тапочки и халаты. Площадь номера: 40 кв.м.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small">Узнать актуальную цену</Button>
                  </CardActions>
                </Card>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '15%',
                    }}
                    image="https://i.ibb.co/qBJTB2x/komfort001.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Номер Люкс
                    </Typography>
                    <Typography>
                    Просторный двухкомнатный номер с уютной спальней и гостиной. В каждой комнате установлены кондиционеры и LCD телевизоры. Номера с душевой кабиной и ванной. Площадь номера: 100 кв.м.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Узнать актуальную цену</Button>
                  </CardActions>
                </Card>
          </Stack>
        </Box>
    );
}

export default App;
