import { useMutation } from "@/hooks/graphql";
import { DYNAMIC_LIST, REMOVE_DYNAMIC } from "@/graphql/schema/dynamic";
import { ZAN } from "@/graphql/schema/zan";
import { FOLLOW } from "@/graphql/schema/follow";
import Snackbar from "@/components/Snackbar";

export function useZan() {
  const [zan] = useMutation(ZAN);

  function onZan(_id, zanStatus) {
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
            const temp = store.readQuery({ query: DYNAMIC_LIST });
            const num = { 200: 1, 201: -1 };
            const sta = { 200: true, 201: false };
            const idx = temp.list.findIndex(i => i._id === _id);
            temp.list[idx].zanCount += num[code];
            temp.list[idx].zanStatus = sta[code];
            store.writeQuery({ query: DYNAMIC_LIST, data: temp });
          } else {
            Snackbar.error(message);
          }
        }
      }
    );
  }
  return onZan;
}

export function useFollow() {
  const [follow] = useMutation(FOLLOW);

  function onFollow(_id, followStatus) {
    follow(
      { _id },
      {
        optimisticResponse: {
          result: {
            status: followStatus ? 201 : 200,
            message: "关注成功",
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
          } else {
            Snackbar.error(message);
          }
        }
      }
    );
  }
  return onFollow;
}

export function useDelete() {
  const [deleteDynamic] = useMutation(REMOVE_DYNAMIC);

  function onDelete(_id) {
    deleteDynamic(
      { _id },
      {
        optimisticResponse: {
          result: { status: 200, message: "删除成功", __typename: "Result" }
        },
        update: (
          store,
          {
            data: {
              result: { status: code, message }
            }
          }
        ) => {
          if (code === 200) {
            const temp = store.readQuery({ query: DYNAMIC_LIST });
            const idx = temp.list.findIndex(i => i._id === _id);
            temp.list.splice(idx, 1);
            store.writeQuery({ query: DYNAMIC_LIST, data: temp });
          } else {
            Snackbar.error(message);
          }
        }
      }
    );
  }
  return onDelete;
}
