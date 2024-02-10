import { Box, Grid, Typography } from '@mui/material';
import NotFoundSVG from '/public/404.svg'
import Link from 'next/link';
const NotFound = () => {
    return(
        <Grid sx= {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh', width: '100vw'
    }}container spacing={{ xs: 2, md: 0 }} columns={{ xs: 1, sm: 8, md: 12 }}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '2rem', }}>
                <Typography
                sx={{fontFamily: 'inter', fontWeight: '900', fontSize: '2rem', }}>
                    صفحه مورد نظر پیدا نشد
                </Typography>
                <Link href='/' className="text-[var(--primary-blue)]"> 
                صفحه اصلی</Link>
                <NotFoundSVG/>
            </Box>
        </Grid>
    )
}
export default  NotFound;