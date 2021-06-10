import Link from "next/link";
import { Dynamic } from "@/graphql/dynamic";

interface Props {
  data?: Dynamic[];
}

export default function DynamicList({ data }: Props) {
  return (
    <div>
      {data?.map((i) => {
        return (
          <div key={i._id}>
            <Link href={"/news/detail?_id=" + i._id}>{i._id}</Link>
            <p>{i.content}</p>
          </div>
        );
      })}
    </div>
  );
}
