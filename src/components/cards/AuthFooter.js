// material-ui
import { useMediaQuery, Container, Link, Typography, Stack } from '@mui/material';

// import { GithubOutlined } from '@ant-design/icons';

// icons
// const icons = {
//   GithubOutlined
// };
// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent={matchDownSM ? 'center' : 'space-between'}
        spacing={2}
        textAlign={matchDownSM ? 'center' : 'inherit'}
      >
        <Typography variant="subtitle2" color="secondary" component="span">
          &copy; Praveen Kotipalli,
          <Typography component={Link} variant="subtitle2" href="https://codedthemes.com" target="_blank" underline="hover">
            <>..All rights reserved</>
          </Typography>
        </Typography>

        <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'inherit'}>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://github.com/praveenkotipalli/"
            target="_blank"
            underline="hover"
          >
            GitHub
             
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://www.linkedin.com/in/praveenkumarkotipalli/"
            target="_blank"
            underline="hover"
          >
            LinkedIn
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://www.instagram.com/pr4veennn/"
            target="_blank"
            underline="hover"
          >
            Instagram
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://letterboxd.com/praveenin/"
            target="_blank"
            underline="hover"
          >
            Letterboxd
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://leetcode.com/u/praveen_malik/"
            target="_blank"
            underline="hover"
          >
            LeetCode
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
