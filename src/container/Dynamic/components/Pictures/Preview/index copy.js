import React from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { getSmallImg } from '@/utils/common';
import useStyles from './styles';

function Pictures({ pictures, onShow }) {
  const classes = useStyles();

  function wiewPicture(idx) {
    onShow(idx);
  }

  if (pictures.length === 1) {
    return (
      <CardMedia
        className={[ classes.item, classes.item_1_1 ]}
        image={pictures[0]}
        onClick={() => {
          wiewPicture(0);
        }}
      />
    );
  }

  if (pictures.length === 2) {
    return (
      <Box display="flex" m={-0.25}>
        <Box p={0.25} width={1 / 2}>
          <CardMedia
            className={[ classes.item, classes.item_1_2 ]}
            image={pictures[0]}
            onClick={() => {
              wiewPicture(0);
            }}
          />
        </Box>
        <Box p={0.25} width={1 / 2}>
          <CardMedia
            className={[ classes.item, classes.item_1_2 ]}
            image={pictures[1]}
            onClick={() => {
              wiewPicture(1);
            }}
          />
        </Box>
      </Box>
    );
  }

  if (pictures.length === 3) {
    return (
      <Box display="flex" m={-0.25}>
        <Box p={0.25} width={1 / 2}>
          <CardMedia
            className={[ classes.item, classes.item_1_2 ]}
            image={getSmallImg(pictures[0], 500, 1000)}
            onClick={() => {
              wiewPicture(0);
            }}
          />
        </Box>

        <Box width={1 / 2}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[1]}
              image={getSmallImg(pictures[1], 500, 500)}
              onClick={() => {
                wiewPicture(1);
              }}
            />
          </Box>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[2]}
              image={getSmallImg(pictures[2], 500, 500)}
              onClick={() => {
                wiewPicture(2);
              }}
            />
          </Box>
        </Box>
      </Box>
    );
  }

  if (pictures.length === 4) {
    return (
      <Box display="flex" m={-0.25} flexWrap="wrap">
        <Box width={2 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_2_3 ]}
              // image={pictures[0]}
              image={getSmallImg(pictures[0], 1000, 1500)}
              onClick={() => {
                wiewPicture(0);
              }}
            />
          </Box>

        </Box>

        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[1]}
              image={getSmallImg(pictures[1], 500, 500)}
              onClick={() => {
                wiewPicture(1);
              }}
            />
          </Box>

          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[2]}
              image={getSmallImg(pictures[2], 500, 500)}
              onClick={() => {
                wiewPicture(2);
              }}
            />
          </Box>

          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[3]}
              image={getSmallImg(pictures[3], 500, 500)}
              onClick={() => {
                wiewPicture(3);
              }}
            />

          </Box>
        </Box>


      </Box>
    );
  }

  if (pictures.length === 5) {
    return (
      <Box display="flex" flexWrap="wrap" m={-0.25}>
        <Box width={2 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[0]}
              image={getSmallImg(pictures[0], 700, 700)}
              onClick={() => {
                wiewPicture(0);
              }}
            />
          </Box>

        </Box>

        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_2 ]}
              // image={pictures[1]}
              image={getSmallImg(pictures[1], 350, 700)}
              onClick={() => {
                wiewPicture(1);
              }}
            />
          </Box>
        </Box>
        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[2]}
              image={getSmallImg(pictures[2], 350, 350)}
              onClick={() => {
                wiewPicture(2);
              }}
            />
          </Box>
        </Box>
        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[3]}
              image={getSmallImg(pictures[3], 350, 350)}
              onClick={() => {
                wiewPicture(3);
              }}
            />
          </Box>
        </Box>
        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[4]}
              image={getSmallImg(pictures[4], 350, 350)}
              onClick={() => {
                wiewPicture(4);
              }}
            />
          </Box>
        </Box>
      </Box>
    );
  }

  if (pictures.length === 6) {
    return (
      <Box display="flex" m={-0.25} flexWrap="wrap">
        <Box width={2 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[0]}
              image={getSmallImg(pictures[0], 700, 700)}
              onClick={() => {
                wiewPicture(0);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[1]}
              image={getSmallImg(pictures[1], 300, 300)}
              onClick={() => {
                wiewPicture(1);
              }}
            />
          </Box>

          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[2]}
              image={getSmallImg(pictures[2], 300, 300)}
              onClick={() => {
                wiewPicture(2);
              }}
            />
          </Box>
        </Box>


        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[3]}
              image={getSmallImg(pictures[3], 300, 300)}
              onClick={() => {
                wiewPicture(3);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[4]}
              image={getSmallImg(pictures[4], 300, 300)}
              onClick={() => {
                wiewPicture(4);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[5]}
              image={getSmallImg(pictures[5], 300, 300)}
              onClick={() => {
                wiewPicture(5);
              }}
            />
          </Box>
        </Box>


      </Box>
    );
  }

  if (pictures.length === 7) {
    return (
      <Box display="flex" m={-0.25} flexWrap="wrap">
        <Box width={2 / 3} display="flex">

          <Box width={1 / 2}>
            <Box p={0.25}>
              <CardMedia
                className={[ classes.item, classes.item_1_2 ]}
                // image={pictures[0]}
                image={getSmallImg(pictures[0], 300, 700)}
                onClick={() => {
                  wiewPicture(0);
                }}
              />
            </Box>
          </Box>

          <Box width={1 / 2}>
            <Box p={0.25}>
              <CardMedia
                className={[ classes.item, classes.item_1_2 ]}
                // image={pictures[1]}
                image={getSmallImg(pictures[1], 300, 700)}
                onClick={() => {
                  wiewPicture(1);
                }}
              />
            </Box>
          </Box>

        </Box>

        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[2]}
              image={getSmallImg(pictures[2], 300, 300)}
              onClick={() => {
                wiewPicture(2);
              }}
            />
          </Box>

          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[3]}
              image={getSmallImg(pictures[3], 300, 300)}
              onClick={() => {
                wiewPicture(3);
              }}
            />
          </Box>
        </Box>


        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[4]}
              image={getSmallImg(pictures[4], 300, 300)}
              onClick={() => {
                wiewPicture(4);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[5]}
              image={getSmallImg(pictures[5], 300, 300)}
              onClick={() => {
                wiewPicture(5);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[6]}
              image={getSmallImg(pictures[6], 300, 300)}
              onClick={() => {
                wiewPicture(6);
              }}
            />
          </Box>
        </Box>


      </Box>
    );
  }

  if (pictures.length === 8) {
    return (
      <Box display="flex" m={-0.25} flexWrap="wrap">
        <Box width={2 / 3} display="flex">

          <Box width={1 / 2}>
            <Box p={0.25}>
              <CardMedia
                className={[ classes.item, classes.item_1_2 ]}
                // image={pictures[0]}
                image={getSmallImg(pictures[0], 300, 700)}
                onClick={() => {
                  wiewPicture(0);
                }}
              />
            </Box>
          </Box>

          <Box width={1 / 2}>
            <Box p={0.25}>
              <CardMedia
                className={[ classes.item, classes.item_1_1 ]}
                // image={pictures[1]}
                image={getSmallImg(pictures[1], 300, 300)}
                onClick={() => {
                  wiewPicture(1);
                }}
              />
            </Box>

            <Box p={0.25}>
              <CardMedia
                className={[ classes.item, classes.item_1_1 ]}
                // image={pictures[2]}
                image={getSmallImg(pictures[2], 300, 300)}
                onClick={() => {
                  wiewPicture(2);
                }}
              />
            </Box>
          </Box>

        </Box>

        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[3]}
              image={getSmallImg(pictures[3], 300, 300)}
              onClick={() => {
                wiewPicture(3);
              }}
            />
          </Box>

          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[4]}
              image={getSmallImg(pictures[4], 300, 300)}
              onClick={() => {
                wiewPicture(4);
              }}
            />
          </Box>
        </Box>


        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[5]}
              image={getSmallImg(pictures[5], 300, 300)}
              onClick={() => {
                wiewPicture(5);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[6]}
              image={getSmallImg(pictures[6], 300, 300)}
              onClick={() => {
                wiewPicture(6);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={pictures[7]}
              image={getSmallImg(pictures[7], 300, 300)}
              onClick={() => {
                wiewPicture(7);
              }}
            />
          </Box>
        </Box>


      </Box>
    );
  }

  return (
    <Box
      m={-0.25}
      display="flex"
      flexWrap="wrap"
    >
      {pictures.map((i, idx) => (
        <Box width={1 / 3} key={i}>
          <Box p={0.25}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              // image={i}
              image={getSmallImg(i, 300, 300)}
              onClick={() => {
                wiewPicture(idx);
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Pictures;
