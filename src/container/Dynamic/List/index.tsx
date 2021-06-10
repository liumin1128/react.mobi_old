import Button from "@material-ui/core/Button";
import DynamicList from "@/components/Dynamic/List";
import { DynamicsQuery, DynamicsResult } from "@/graphql/dynamic";
import { useQuery } from "@apollo/client";

export default function DynamicListContainer() {
  const { data, loading, error } = useQuery<DynamicsResult>(DynamicsQuery);
  // console.log("data, loading, error");
  // console.log(data, loading, error);

  if (loading) return "loading";
  if (error) return "error";

  return (
    <div>
      <DynamicList data={data?.dynamics} />
    </div>
  );
}
