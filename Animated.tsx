import { Suspense } from 'react';import BookingClient from './BookingClient';
export const metadata={title:'Online Booking'};
export default function Book(){return <section className="temple-pattern py-14"><div className="mx-auto max-w-7xl px-4"><h1 className="sanskrit text-center text-5xl font-black text-maroon">Online Spiritual Booking</h1><p className="mx-auto mb-10 mt-4 max-w-3xl text-center text-maroon/75">कथा, पूजा, यज्ञ और संस्कार बुक करने के लिए विवरण भरें।</p><Suspense><BookingClient/></Suspense></div></section>}
