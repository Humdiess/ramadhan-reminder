import AddItem from "@/components/AddItem";
import AppItem from "@/components/AppItem";
import Image from "next/image";

const reminderList = [
  {
    title: "Mengisi daily ramadhan",
    description: "Mengisi daily ramadhan setiap hari",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdeUF9TxytzAY8CAiCVCzZCIocC_6ud-luj6VOt6lQKCMlY4A/formResponse?pli=1",
    time: "05.00"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4 h-fit">
      <div className="item-list flex flex-col lg:flex-row justify-center lg:justify-items-start gap-4 h-fit">
        {reminderList.map((item, index) => (
            <AppItem key={index} title={item.title} url={item.url} description={item.description} />
        ))}
      </div>

      <AddItem />
    </div>
  );
}

