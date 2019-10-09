import React from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { getSmallImg } from '@/utils/common';
import useStyles from './styles';

const spacing = 0.25;

const w = 150;

function Pictures({ pictures, onShow }) {
  const classes = useStyles();

  function wiewPicture(idx) {
    onShow(idx);
  }

  if (pictures.length === 1) {
    return (
      <CardMedia
        className={[ classes.item, classes.item_1_1 ]}
        image={getSmallImg(pictures[0], w * 3, w * 3)}
        onClick={() => {
          wiewPicture(0);
        }}
      />
    );
  }

  if (pictures.length === 2) {
    return (
      <Box display="flex" m={-spacing}>
        <Box p={spacing} width={1 / 2}>
          <CardMedia
            className={[ classes.item, classes.item_1_2 ]}
            image={getSmallImg(pictures[0], w * 1.5, w * 3)}
            onClick={() => {
              wiewPicture(0);
            }}
          />
        </Box>
        <Box p={spacing} width={1 / 2}>
          <CardMedia
            className={[ classes.item, classes.item_1_2 ]}
            image={getSmallImg(pictures[1], w * 1.5, w * 3)}
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
      <Box display="flex" m={-spacing}>
        <Box p={spacing} width={1 / 2}>
          <CardMedia
            className={[ classes.item, classes.item_1_2 ]}
            image={getSmallImg(pictures[0], w * 1.5, w * 3)}
            onClick={() => {
              wiewPicture(0);
            }}
          />
        </Box>

        <Box width={1 / 2}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[1], w * 1.5, w * 1.5)}
              onClick={() => {
                wiewPicture(1);
              }}
            />
          </Box>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[2], w * 1.5, w * 1.5)}
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
      <Box display="flex" m={-spacing} flexWrap="wrap">
        <Box width={2 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_2_3 ]}
              image={getSmallImg(pictures[0], w * 2, w * 3)}
              onClick={() => {
                wiewPicture(0);
              }}
            />
          </Box>

        </Box>

        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[1], w, w)}
              onClick={() => {
                wiewPicture(1);
              }}
            />
          </Box>

          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[2], w, w)}
              onClick={() => {
                wiewPicture(2);
              }}
            />
          </Box>

          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[3], w, w)}
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
      <Box display="flex" flexWrap="wrap" m={-spacing}>
        <Box width={2 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[0], w * 2, w * 2)}
              onClick={() => {
                wiewPicture(0);
              }}
            />
          </Box>

        </Box>

        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_2 ]}
              image={getSmallImg(pictures[1], w, w * 2)}
              onClick={() => {
                wiewPicture(1);
              }}
            />
          </Box>
        </Box>
        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[2], w, w)}
              onClick={() => {
                wiewPicture(2);
              }}
            />
          </Box>
        </Box>
        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[3], w, w)}
              onClick={() => {
                wiewPicture(3);
              }}
            />
          </Box>
        </Box>
        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[4], w, w)}
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
      <Box display="flex" m={-spacing} flexWrap="wrap">
        <Box width={2 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[0], w * 2, w * 2)}
              onClick={() => {
                wiewPicture(0);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[1], w, w)}
              onClick={() => {
                wiewPicture(1);
              }}
            />
          </Box>

          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[2], w, w)}
              onClick={() => {
                wiewPicture(2);
              }}
            />
          </Box>
        </Box>


        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[3], w, w)}
              onClick={() => {
                wiewPicture(3);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[4], w, w)}
              onClick={() => {
                wiewPicture(4);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[5], w, w)}
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
      <Box display="flex" m={-spacing} flexWrap="wrap">
        <Box width={2 / 3} display="flex">

          <Box width={1 / 2}>
            <Box p={spacing}>
              <CardMedia
                className={[ classes.item, classes.item_1_2 ]}
                image={getSmallImg(pictures[0], w, w * 2)}
                onClick={() => {
                  wiewPicture(0);
                }}
              />
            </Box>
          </Box>

          <Box width={1 / 2}>
            <Box p={spacing}>
              <CardMedia
                className={[ classes.item, classes.item_1_2 ]}
                image={getSmallImg(pictures[1], w, w * 2)}
                onClick={() => {
                  wiewPicture(1);
                }}
              />
            </Box>
          </Box>

        </Box>

        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[2], w, w)}
              onClick={() => {
                wiewPicture(2);
              }}
            />
          </Box>

          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[3], w, w)}
              onClick={() => {
                wiewPicture(3);
              }}
            />
          </Box>
        </Box>


        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[4], w, w)}
              onClick={() => {
                wiewPicture(4);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[5], w, w)}
              onClick={() => {
                wiewPicture(5);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[6], w, w)}
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
      <Box display="flex" m={-spacing} flexWrap="wrap">
        <Box width={2 / 3} display="flex">

          <Box width={1 / 2}>
            <Box p={spacing}>
              <CardMedia
                className={[ classes.item, classes.item_1_2 ]}
                image={getSmallImg(pictures[0], w, w * 2)}
                onClick={() => {
                  wiewPicture(0);
                }}
              />
            </Box>
          </Box>

          <Box width={1 / 2}>
            <Box p={spacing}>
              <CardMedia
                className={[ classes.item, classes.item_1_1 ]}
                image={getSmallImg(pictures[1], w, w)}
                onClick={() => {
                  wiewPicture(1);
                }}
              />
            </Box>

            <Box p={spacing}>
              <CardMedia
                className={[ classes.item, classes.item_1_1 ]}
                image={getSmallImg(pictures[2], w, w)}
                onClick={() => {
                  wiewPicture(2);
                }}
              />
            </Box>
          </Box>

        </Box>

        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[3], w, w)}
              onClick={() => {
                wiewPicture(3);
              }}
            />
          </Box>

          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[4], w, w)}
              onClick={() => {
                wiewPicture(4);
              }}
            />
          </Box>
        </Box>


        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[5], w, w)}
              onClick={() => {
                wiewPicture(5);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[6], w, w)}
              onClick={() => {
                wiewPicture(6);
              }}
            />
          </Box>
        </Box>

        <Box width={1 / 3}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(pictures[7], w, w)}
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
      m={-spacing}
      display="flex"
      flexWrap="wrap"
    >
      {pictures.map((i, idx) => (
        <Box width={1 / 3} key={i}>
          <Box p={spacing}>
            <CardMedia
              className={[ classes.item, classes.item_1_1 ]}
              image={getSmallImg(i, w, w)}
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
