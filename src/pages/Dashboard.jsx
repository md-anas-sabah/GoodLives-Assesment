import Card from "../components/Card";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Vaccination from "../components/Vaccination";
function Dashboard() {
  return (
    <div className="h-full flex flex-col gap-4">
      <Navbar />
      <div className="flex">
        <div className="flex flex-col px-4">
          <div className="flex gap-4">
            <Card title={"Activity"} filtersNames={"Daily"} percentage={27} />
            <Card title={"Sleep"} filtersNames={"Weekly"} percentage={79} />
            <Card title={"Wellness"} filtersNames={"Weekly"} percentage={52} />
          </div>
          <div>Chart.jsx</div>
        </div>
        <div className="flex flex-col gap-3 w-full mr-10">
          <Vaccination
            title={"Vaccination schedule"}
            filtersNames={"By type"}
          />
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
