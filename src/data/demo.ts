/** Rows for the demo panel in the hero. Invented, and labelled as such on the page. */
export interface Appointment {
  id: string;
  time: string;
  name: string;
  reason: string;
  status: "Confirmed" | "Waiting" | "Cancelled";
}

export const appointments: Appointment[] = [
  { id: "a1", time: "09:15", name: "A. Bello", reason: "Follow-up", status: "Confirmed" },
  { id: "a2", time: "10:00", name: "M. Okonkwo", reason: "First visit", status: "Waiting" },
  { id: "a3", time: "11:30", name: "T. Adeyemi", reason: "Results review", status: "Confirmed" },
  { id: "a4", time: "13:45", name: "K. Yusuf", reason: "Referral", status: "Cancelled" },
];
