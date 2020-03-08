import React from "react";
import Router, { withRouter } from "next/router";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import { DYNAMIC_DETAIL, REMOVE_DYNAMIC } from "@/graphql/schema/dynamic";
import { USERINFO } from "@/graphql/schema/user";
import { ZAN } from "@/graphql/schema/zan";
import { useQuery, useMutation } from "@/hooks/graphql";
import Loading from "@/components/Loading";
import { getTimeAgo } from "@/utils/common";
import InfoButton from "@/components/Button/Info";
import CreateComment from "@/container/Comment/Create";
import CommentList from "@/container/Comment/List";
import Snackbar from "@/components/Snackbar";
import Pictures from "@/container/Dynamic/components/Pictures";
import Iframe from "@/container/Dynamic/components/Iframe";
import Popper from "@/components/Popper";
import Avatar from "@/components/Avatar";
import PageError from "@/components/Error/error";
import Page404 from "@/components/Error/404";
import { text2html, topics2Html } from "../utils";
import useStyles from "./styles";

function DynamicDetail({ router }) {
  const classes = useStyles();
  const { data, error, loading, refetch } = useQuery(
    DYNAMIC_DETAIL,
    router.query
  );
  const { data: userInfoData, loading: userInfoLoading } = useQuery(USERINFO);

  // 赞状态异常
  const [zan] = useMutation(ZAN);
  const [deleteDynamic] = useMutation(REMOVE_DYNAMIC);

  function del(_id) {
    deleteDynamic(
      { _id },
      {
        update: (
          store,
          {
            data: {
              result: { status: code, message }
            }
          }
        ) => {
          if (code === 200) {
            Router.push("/");
          } else {
            Snackbar.error(message);
          }
        }
      }
    );
  }

  if (loading || userInfoLoading) return <Loading />;

  if (error) return <PageError />;

  const {
    data: {
      user,
      iframe,
      pictures,
      content,
      createdAt,
      topics = [],
      _id,
      zanCount,
      zanStatus,
      commentCount
    }
  } = data;

  if (!_id) return <Page404 />;

  const userInfo = userInfoData ? userInfoData.userInfo : {};

  const html = topics2Html(text2html(content), topics);

  function edit() {
    Router.push(`/dynamic/edit?_id=${_id}`);
  }

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Box style={{ width: "100%" }} maxWidth={600}>
          <Card>
            <Box p={3} pb={1}>
              <CardHeader
                className={classes.header}
                avatar={
                  <Avatar
                    size={48}
                    nickname={user.nickname}
                    avatarUrl={user.avatarUrl}
                  />
                }
                // action={(<IconButton aria-label="Settings"><MoreVertIcon /></IconButton>)}
                action={
                  <Popper
                    placement="bottom-end"
                    content={
                      <Paper elevation={2}>
                        <MenuList>
                          {userInfo && user._id === userInfo._id && (
                            <>
                              <MenuItem
                                className={classes.MenuItem}
                                onClick={edit}
                              >
                                编辑
                              </MenuItem>
                              <MenuItem
                                className={classes.MenuItem}
                                onClick={() => {
                                  del(_id);
                                }}
                              >
                                删除
                              </MenuItem>
                            </>
                          )}
                          <MenuItem
                            className={classes.MenuItem}
                            onClick={() => {
                              alert("coming soon...");
                            }}
                          >
                            举报
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    }
                  >
                    <IconButton aria-label="Settings">
                      <MoreVertIcon />
                    </IconButton>
                  </Popper>
                }
                title={
                  <Typography variant="h6" className={classes.nickname}>
                    {user.nickname}
                  </Typography>
                }
                subheader={getTimeAgo(createdAt)}
              />

              <Box ml={8}>
                {html && (
                  <Box my={1.5}>
                    <Typography variant="body1" component="div">
                      <div
                        className={classes.html}
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    </Typography>
                  </Box>
                )}

                <Pictures pictures={pictures} />

                {iframe && (
                  <>
                    <Box
                      my={1.5}
                      style={{ boxShadow: "0 10px 20px 0 rgba(0,0,0,0.3)" }}
                    >
                      <Iframe iframe={iframe} />
                    </Box>
                  </>
                )}

                <Box my={2.5} display="flex" style={{ color: "#999" }}>
                  <InfoButton
                    label={commentCount || null}
                    icon={ChatBubbleOutlineIcon}
                    // onClick={() => { toogleShow(); }}
                  />
                  <Box mr={5} />
                  <InfoButton
                    label={zanCount || null}
                    icon={zanStatus ? ThumbUpIcon : ThumbUpOutlinedIcon}
                    onClick={() => {
                      zan(
                        { _id },
                        {
                          optimisticResponse: {
                            result: {
                              status: zanStatus ? 201 : 200,
                              message: "创建成功",
                              __typename: "Result"
                            }
                          },
                          update: (
                            store,
                            {
                              data: {
                                result: { status: code, message }
                              }
                            }
                          ) => {
                            if (code === 200 || code === 201) {
                              const temp = store.readQuery({
                                query: DYNAMIC_DETAIL,
                                variables: router.query
                              });
                              const num = { 200: 1, 201: -1 };
                              const sta = { 200: true, 201: false };
                              temp.data.zanCount += num[code];
                              temp.data.zanStatus = sta[code];
                              store.writeQuery({
                                query: DYNAMIC_DETAIL,
                                data: temp,
                                variables: router.query
                              });
                            } else {
                              Snackbar.error(message);
                            }
                          }
                        }
                      );
                    }}
                    className={zanStatus ? classes.primary : ""}
                  />
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box p={3} mt={1}>
              <Box ml={8}>
                <CreateComment
                  session={_id}
                  update={store => {
                    const temp = store.readQuery({
                      query: DYNAMIC_DETAIL,
                      variables: router.query
                    });
                    temp.data.commentCount += 1;
                    store.writeQuery({
                      query: DYNAMIC_DETAIL,
                      data: temp,
                      variables: router.query
                    });
                  }}
                />
                <Box my={3} />
                <Divider />
              </Box>
              <CommentList session={_id} />
            </Box>
          </Card>
        </Box>
      </Box>
    </div>
  );
}

export default withRouter(DynamicDetail);
