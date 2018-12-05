const styles = theme => ({
  root: {
    background: 'none',
    maxWidth: 420,
    padding: 36,
    margin: '0 auto',
  },
  subline: {
    color: '#999',
  },
  head: {
    marginTop: 48,
    marginBottom: 48,
  },
  help: {
    fontSize: 12,
    marginTop: 20,
    marginBottom: 48,
    color: '#666',
    display: 'flex',
    justifyContent: 'space-between',
    '&  a': {
      color: '#666',
      textDecoration: 'none',
    },
  },
});

export default styles;
