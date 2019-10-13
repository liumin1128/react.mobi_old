
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
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    background: '#fff',
    height: 64,
  },
  minWidth0: {
    minWidth: 0,
    height: 34,
  },

  likeBtn: {
    // paddingRight: theme.spacing(1.5),
    minWidth: 80,
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  dislikeBtn: {
    height: 34,
    width: 34,
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
