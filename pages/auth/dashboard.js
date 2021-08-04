import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import parseCookie from "helpers";
import styles from "@/styles/Dashboard.module.css";
import DashboardEvent from "@/components/DashboardEvent";

export default function DashboardPage({ events }) {
  const handleDelete = () => {};
  return (
    <Layout title="User Dashboard">
      <div className={styles.dashboard}>
        <h1>Dashboard</h1>
        <h3>My Events</h3>

        {events &&
          events.map((evt) => (
            <DashboardEvent
              key={evt.id}
              evt={evt}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </Layout>
  );
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
      events: data,
    },
  };
}
