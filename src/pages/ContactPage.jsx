import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { CONTACT_EMAIL, LOCATION } from "../config.js";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Opens the visitor's email app with the message filled in
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHeader icon={Mail} title="Contact" subtitle="Questions about the research? Get in touch." />
      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <article className="contact__card">
              <span className="icon-circle icon-circle--green icon-circle--sm"><Mail size={20} /></span>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </article>
            <article className="contact__card">
              <span className="icon-circle icon-circle--green icon-circle--sm"><MapPin size={20} /></span>
              <div>
                <h3>Location</h3>
                <p>{LOCATION}</p>
              </div>
            </article>
          </div>

          <form className="contact__form" onSubmit={submit}>
            <label>
              Your name
              <input required value={form.name} onChange={set("name")} autoComplete="name" />
            </label>
            <label>
              Your email
              <input required type="email" value={form.email} onChange={set("email")} autoComplete="email" />
            </label>
            <label>
              Message
              <textarea required rows={5} value={form.message} onChange={set("message")} />
            </label>
            <button type="submit" className="btn btn--green">
              <Send size={16} /> Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
