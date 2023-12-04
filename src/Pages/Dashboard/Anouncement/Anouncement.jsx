import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AnnouncementCard from "./AnnouncementCard";

const Anouncement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const handleAnnouncementSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const message = form.message.value;
    const announcement = { title, message };
    axios
      .post(
        "https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/make-announcement",
        announcement
      )
      .then((data) => {
        if (data.data.insertedId) {
          toast.success("Create Successfully");
          form.title.value = "";
          form.message.value = "";
          axios
            .get(
              "https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/announcements"
            )
            .then((res) => {
              setAnnouncements(res.data);
            })
            .catch((err) => console.error(err));
        }
      })
      .catch((err) => console.error(err));
    console.log(announcement);
  };

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter((item) => item._id !== id));
  };

  useEffect(() => {
    axios
      .get(
        "https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/announcements"
      )
      .then((res) => {
        setAnnouncements(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(announcements);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5 p-5 rounded-md bg-slate-700 text-white">
        Announcement
      </h1>
      {/* Create a Announcement */}
      <div className="">
        <form
          onSubmit={handleAnnouncementSubmit}
          className="flex flex-col gap-5"
        >
          <input
            className="border-2 outline-none border-slate-500 rounded-sm p-3"
            type="text"
            name="title"
            required
            placeholder="Enter your title..."
          />
          <textarea
            className="border-2 outline-none border-slate-500 rounded-sm p-3"
            name="message"
            required
            placeholder="Enter you message..."
            cols="30"
            rows="5"
          ></textarea>

          <input
            className="p-3 text-white bg-primary rounded-md textarea-lg font-bold "
            type="submit"
            value="Create"
          />
        </form>
      </div>
      {/* Show all announcement */}
      <div className="h-[calc(100vh-450px)]   mt-5 overflow-auto">
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement?._id}
            announcement={announcement}
            onDelete={handleDeleteAnnouncement}
          />
        ))}
      </div>
    </div>
  );
};

export default Anouncement;
