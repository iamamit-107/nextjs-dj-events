import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function EventsPage({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>All Events</h1>

      {events.length === 0 && <h2>No events found</h2>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events,
    },
    revalidate: 1,
  };
}
