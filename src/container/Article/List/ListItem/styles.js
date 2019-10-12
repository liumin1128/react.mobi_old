
export default (theme) => ({
  header: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
  },
  content: {
    cursor: 'pointer',
  },
  nickname: {
    fontSize: 14,
  },
  fixed: {
    position: 'fixed',
    bottom: 0,
    boxShadow: '0 0px 12px 0px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'box-shadow 1s',
  },
  toolbar: {
    background: '#fff',
    height: 64,
  },
  minWidth0: {
    minWidth: 0,
  },

  likeBtn: {
    paddingRight: theme.spacing(1.5),
  },
  dislikeBtn: {
    padding: theme.spacing(0.5),
  },
  btn: {
    minWidth: 0,
    color: '#999',
    fontSize: 12,
  },
  btnIcon: {
    width: 16,
    marginRight: theme.spacing(0.5),
  },
});
