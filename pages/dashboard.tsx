import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Offer from "@/components/Offer";
import Heading from "@/components/Heading";
import Tabs from "@/components/Tabs";
import Cards from "@/components/Cards";
import Chart from "@/components/Chart";
import { getTable } from "./api/table";

const Dashboard = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTable();
        if (data) {
          setTableData(data);
        } else {
          console.error("No data returned from getTable");
        }
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-accent-50 flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Offer />
        <Heading />
        <Tabs />
        <Cards />
        <Chart />
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default Dashboard;
