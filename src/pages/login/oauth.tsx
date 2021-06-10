import React, { useEffect } from "react";
import { useRouter, NextRouter } from "next/router";
import { setStorage, removeStorage, getStorage } from "@/utils/store";
import { PATH_BEFORELOGIN, USER_TOKEN } from "@/config/base";

async function handleLogin(router: NextRouter, token: string) {
  let path = await getStorage(PATH_BEFORELOGIN);
  if (path) {
    await removeStorage(PATH_BEFORELOGIN);
  } else {
    path = "/";
  }
  await setStorage(USER_TOKEN, token);
  console.log("xxxxxx");
  router.push(path);
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    console.log("router");
    console.log(router);
    const { token } = router.query;

    console.log("token", token);

    if (typeof token === "string") {
      handleLogin(router, token);
    }
  }, []);

  return <div>login success</div>;
}
