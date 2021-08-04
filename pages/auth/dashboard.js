import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import parseCookie from "helpers";

export default function DashboardPage({ data }) {
  console.log(data);
  return <Layout></Layout>;
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookie(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
