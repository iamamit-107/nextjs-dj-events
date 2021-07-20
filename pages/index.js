import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "../config";

export default function HomePage({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Upcoming Events</h1>

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
      events: events.slice(0, 3),
    },
    revalidate: 1,
  };
}
