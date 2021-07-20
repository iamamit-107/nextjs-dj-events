import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function SingleEvent() {
  const router = useRouter();
  return (
    <Layout>
      <h1>{`Single Event Page of ${router.query.slug}`}</h1>
    </Layout>
  );
}
