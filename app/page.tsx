import AddItem from "@/components/AddItem";
import AppItem from "@/components/AppItem";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex p-8 gap-4">
      <div className="item-list flex p-8 gap-4">
        <AppItem title="Daily Ramadhan" url="https://docs.google.com/forms/d/e/1FAIpQLSdeUF9TxytzAY8CAiCVCzZCIocC_6ud-luj6VOt6lQKCMlY4A/formResponse?pli=1" description="ini adlaah aplikasi untuk setoran kegiatan harian selama bulan ramadhan di smk telkom sidoarjo" />
      </div>

      <AddItem />
    </div>
  );
}
