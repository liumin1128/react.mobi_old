import Link from "next/link";
import { News } from "@/graphql/news";

interface Props {
  data?: News[];
}

export default function NewsList({ data }: Props) {
  return (
    <div>
      {data?.map((i) => {
        return (
          <div key={i._id}>
            <Link href={"/news/detail?_id=" + i._id}>{i._id}</Link>
            <p>{i.title}</p>
          </div>
        );
      })}
    </div>
  );
}
