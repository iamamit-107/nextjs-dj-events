import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import { API_URL } from "@/config/index";
const PER_PAGE = 1;

export default function EventsPage({ events, page, total }) {
  return (
    <Layout>
      <h1>All Events</h1>

      {events.length === 0 && <h2>No events found</h2>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      <Pagination page={page} total={total} PER_PAGE={PER_PAGE} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;
  const res = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const events = await res.json();

  // Find total
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();

  return {
    props: {
      events,
      page: +page,
      total,
    },
  };
}
