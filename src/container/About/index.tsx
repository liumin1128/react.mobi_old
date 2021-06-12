import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Image from "@/components/Image";
import { useStyles } from "./styles";

interface RouteItem {
  title: string;
  pathname: string;
}

interface Props {
  routes: RouteItem[];
  title: string;
  onChange?: (pathname: string) => void;
}

function SimpleTabs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Image
            src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p07/p07-s02-img.jpg"
            style={{ paddingTop: "85%", borderRadius: 20 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            height="100%"
          >
            <Box maxWidth={506}>
              <Typography variant="h6" color="primary">
                What's Dowch?
              </Typography>
              <Box p={2} />
              <Typography variant="h2">Here is Our Definition</Typography>
              <Box p={2} />

              <Typography variant="body1">
                Shenzhen Dowch Electronics Co. ,Ltd. is an innovative form of
                E-commerce supply chain solution provider. We help growing
                entrepreneurs and small businesses source products from China,
                ensuring the best quality.
              </Typography>
              <Box p={2} />

              <Typography variant="body1">
                Whether you use one of our individual services for just one-time
                projects, or you hire us to manage your whole supply chain on a
                full-time basis, we’re committed to making all aspects of
                sourcing simple, consistent and reliable.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box p={6} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            height="100%"
          >
            <Box maxWidth={506}>
              <Typography variant="h2">
                Our Story: A Determined Identity Shift
              </Typography>
              <Box p={2} />

              <Typography variant="body1">
                Back in 2011, Dowch was among you as an E-commerce seller,
                experiencing the booming of such platforms as Taobao, Ebay,
                Amazon and the like.
              </Typography>
              <Box p={2} />

              <Typography variant="body1">
                We shared all your concern and worried about our sales every
                day. Yet no one company could offer the way out. Thus we made a
                shift from a seller to a solution provider, serving all our old
                fellows.
              </Typography>
              <Box p={2} />

              <Typography variant="body1">
                Our past role in the industry enables us to know all the
                struggles of small businesses. And that's why we can constantly
                bring perfect solutions and business success to our clients.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p07/p07-s03-img.jpg"
            style={{ paddingTop: "85%", borderRadius: 20 }}
          />
        </Grid>
      </Grid>
      <Box p={6} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Image
            src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p07/p07-s04-img.jpg"
            style={{ paddingTop: "85%", borderRadius: 20 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            height="100%"
          >
            <Box maxWidth={506}>
              <Typography variant="h6" color="primary">
                Shenzhen, China
              </Typography>
              <Box p={1} />
              <Typography variant="h2">Benefits of Our Location</Typography>
              <Box p={2} />
              <Typography variant="body1">
                Rich and high quality suppliers & manufacturers
              </Typography>
              <Box p={1} />
              <Typography variant="body1">
                Harbor of technology innovation and talents
              </Typography>
              <Box p={1} />
              <Typography variant="body1">
                Reduced freight costs with convenient ports
              </Typography>
              <Box p={1} />
              <Typography variant="body1">
                Shorter turnaround time from Dowch to the destination
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box p={6} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            height="100%"
          >
            <Box maxWidth={550}>
              <Typography variant="h6" color="primary">
                At the Core of Everything We Do:
              </Typography>
              <Box p={2} />

              <Typography variant="h2">Integrity and Accountability</Typography>
              <Box p={2} />

              <Typography variant="body1">
                We love to address and tackle the most challenging problems in
                managing the supply chain, combining our expertise and past
                experience to augment human intelligence.
              </Typography>
              <Box p={2} />

              <Typography variant="body1">
                We shared all your concern and worried about our sales every
                day. Yet no one company could offer the way out. Thus we made a
                shift from a seller to a solution provider, serving all our old
                fellows.
              </Typography>
              <Box p={2} />

              <Typography variant="body1">
                What is important to you is also important to us. Working
                together with thousands of businesses, we aim to build the
                future of commerce.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p07/p07-s05-img.jpg"
            style={{ paddingTop: "85%", borderRadius: 20 }}
          />
        </Grid>
      </Grid>
      <Box p={6} />
      <Divider />
      <Box p={6} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h2">Our Mission</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1">
            <b>
              To grow ourselves as the supply chain for all E-Commerce sellers.
            </b>
            Dowch's strategy of growing is based on the perfect solutions we
            provide to our clients. Starting from building a strong supply
            chain, we expect boosted sales. And with the boosted sales, we are
            able to further our exploration in supply chain. We will, as always,
            prioritize our clients' needs and spare no effort to satisfy and
            help grow their businesses.
          </Typography>
        </Grid>
      </Grid>
      <Box p={6} />
      <Divider />
      <Box p={6} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box maxWidth={490}>
            <Typography variant="h2">Our Mission</Typography>
            <Box p={2} />

            <Typography variant="body1">
              Both you and Dowch can't afford to go wrong at any single stage of
              supply chain. A successful project depends greatly on the people
              who are involved in the process.
            </Typography>
            <Box p={2} />

            <Typography variant="body1">
              We know this and that's why we employ only the smartest people
              here in Dowch. We are now in a rapid growth with highly
              functioning teams, which include: sales, engineering, supply
              chain, finance, manufacturing and warehousing.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Image
                src="https://www.dowch.com/wp-content/uploads/2019/11/p07-s07-img-1.jpg"
                style={{ paddingTop: "125%", borderRadius: 10 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Image
                src="https://www.dowch.com/wp-content/uploads/2019/11/p07-s07-img-2.jpg"
                style={{ paddingTop: "125%", borderRadius: 10 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box p={8} />
    </div>
  );
}

export default SimpleTabs;
