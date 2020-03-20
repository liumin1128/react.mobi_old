import { useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Snippet,
  Menu,
  connectRefinementList,
} from 'react-instantsearch-dom';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import dynamicFile from 'dynamic-file';

import MenuSelect from './MenuSelect';
import Search from './Search';
import MyHits from './Hits';

const searchClient = algoliasearch(
  'Q6DDFKJ5FE',
  '6d250c8976c7fc0a9f3600df94ea4f29',
);
// searchClient.search({
//   facets: [ 'author', 'categories', 'publisher' ],
// });


const Hit = ({ hit }) => (
  <ListItem button>
    <ListItemIcon>
      <Avatar alt="Remy Sharp" src={hit.cover} />
    </ListItemIcon>
    <ListItemText
      primary={(
        <Highlight
          attribute="title"
          hit={hit}
          tagName="mark"
        />
      )}
      secondary={(

        <Snippet
          attribute="content"
          hit={hit}
          tagName="mark"
        />
      )}
    />
  </ListItem>
);

function App() {
//   useEffect(() => {
//     dynamicFile([
//       'https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css',
//       'https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css',
//     ]);
//   }, []);

  return (
    <InstantSearch indexName="test_test" searchClient={searchClient}>
      {/* <SearchBox /> */}

      <Search />
      <List>
        <Hits hitComponent={Hit} />
      </List>
      <style jsx global>
        {`
            .ais-Hits-list {
                margin: 0;
                padding: 0;
            }
            .ais-Hits-list li {
                list-style: none;
            }
        `}
      </style>
      {/* <MenuSelect /> */}

      {/* <Box>
      </Box>
      <br />
      <Menu
        attribute="categories"
        showMore
        translations={{
          showMore: 'Voir plus',
        }}
      />
      <Box>
        <RefinementListWithSearchBox attribute="categories" />
        <Hits hitComponent={Hit} />
      </Box> */}
    </InstantSearch>
  );
}

export default App;
