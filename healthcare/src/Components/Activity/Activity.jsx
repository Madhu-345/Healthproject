import React from "react";
import "./Activity.css";

export default function Activity() {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const appointments = [
    { date: 26, time: "09:00", title: "Dentist", details: "Dr. Cameron Williamson" },
    { date: 28, time: "11:00", title: "Physiotherapy Appointment", details: "Dr. Kevin Djonnes" },
    { date: 30, time: "12:00", title: "", details: "" },
    { date: 31, time: "09:00", title: "", details: "" },
  ];

  const scheduleItems = [
    {
      day: "Thursday",
      items: [
        { title: "Health checkup complete", time: "11:00 AM", icon: "🩺" },
        { title: "Ophthalmologist", time: "14:00 PM", icon: "👀" },
      ],
    },
    {
      day: "Saturday",
      items: [
        { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
        { title: "Neurologist", time: "16:00 PM", icon: "🧠" },
      ],
    },
  ];

  return (
    <div className="activity">

      <header>
        <div className="profile-icon">👨‍⚕️</div>
        <div className="add-button">+</div>
      </header>


      <section className="calendar">
        <h2>October 2021</h2>
        <div className="controls">
          <li className="prev-month"><i class="fa-solid fa-arrow-left-long"></i></li>
          <li className="next-month"><i class="fa-solid fa-arrow-right"></i></li>
        </div>
        <div className="days-of-week">
          {daysOfWeek.map((day) => (
            <div key={day} className="day">{day}</div>
          ))}
        </div>
        <div className="dates">
          {dates.map((date) => (
            <div key={date} className="date">
              <span>{date}</span>
              <div className="appointments">
                {appointments
                  .filter((appointment) => appointment.date === date)
                  .map((appointment, idx) => (
                    <div
                      key={idx}
                      className={`appointment ${appointment.time ? "has-appointment" : ""}`}
                    >
                      {appointment.time || "---"}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="appointments-section">
        <div className="appointment-card">
          <div className="icon">🦷</div>
          <div className="details">
            <h3>Dentist</h3>
            <p>09:00-11:00</p>
            <p>Dr. Cameron Williamson</p>
          </div>
        </div>
        <div className="appointment-card2">
          <div className="icon">🦵</div>
          <div className="details">
            <h3>Physiotherapy Appointment</h3>
            <p>11:00-12:00</p>
            <p>Dr. Kevin Djonnes</p>
          </div>
        </div>
      </section>


      <section className="schedule">
        <h2>The Upcoming Schedule</h2>
        {scheduleItems.map((group, index) => (
          <div key={index} className="schedule-group">
            <h3>{`On ${group.day}`}</h3>
            <div className="schedule-items">
              {group.items.map((item, idx) => (
                <div key={idx} className="schedule-card">
                  <div className="icon">{item.icon}</div>
                  <div className="details">
                    <h3>{item.title}</h3>
                    <p>{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}