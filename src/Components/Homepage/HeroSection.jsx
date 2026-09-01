import { Card, Chip, Label, ListBox, Select, Separator } from "@heroui/react";
import React from "react";
import { CgDollar } from "react-icons/cg";
import { FaOpencart, FaRegUser } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SiConvertio } from "react-icons/si";
import SalesOverview from "./SalesOverview";
import TopCategories from "./TopCategories";
import RecentOrders from "./RecentOrders";
import TopCustomer from "./TopCustomer";

const HeroSection = () => {
  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long", // "Tuesday"
    year: "numeric", // "2024"
    month: "long", // "October"
    day: "numeric", // "24"
  });
  const filter = (
    <>
      <ListBox.Item id="today" textValue="today">
        Today
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="week" textValue="Week">
        This week
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="month" textValue="Month">
        This month
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="year" textValue="Year">
        This Year
        <ListBox.ItemIndicator />
      </ListBox.Item>
    </>
  );
  return (
    <div className="w-11/12 mx-auto my-5">
      <p>{formattedDate}</p>
      <p>Welcome USER</p>
      <div className="flex items-center justify-between gap-4">
        <p>This is what happening in your store today.</p>
        <Select className="w-[256px]" placeholder="Filter">
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>{filter}</ListBox>
          </Select.Popover>
        </Select>
      </div>

      <div className="flex items-center justify-start gap-4 ">
        <Card className="w-full" variant="default">
          <Card.Header>
            <Card.Title>
              <CgDollar />
              Total Revenue
            </Card.Title>
            <Card.Description className="flex items-end justify-between gap-2">
              <span>
                <CgDollar />
                2,000
              </span>
              <Chip className="bg-green-900 text-white">
                <FaArrowTrendUp />
                +20%
              </Chip>
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p>Compared to $74,830 last month</p>
          </Card.Content>
        </Card>
        <Card className="w-full" variant="default">
          <Card.Header>
            <Card.Title>
              <FaOpencart />
              Total Orders
            </Card.Title>
            <Card.Description className="flex items-end justify-between gap-2">
              <span>1429</span>
              <Chip className="bg-green-900 text-white">
                <FaArrowTrendUp />
                +2%
              </Chip>
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p>Compared to 1,320 last month</p>
          </Card.Content>
        </Card>
        <Card className="w-full" variant="default">
          <Card.Header>
            <Card.Title>
              <FaRegUser />
              Active Customers
            </Card.Title>
            <Card.Description className="flex items-end justify-between gap-2">
              <span>8739</span>
              <Chip className="bg-green-900 text-white">
                <FaArrowTrendUp />
                +8.4%
              </Chip>
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p>Compared to 8,172 last month</p>
          </Card.Content>
        </Card>
        <Card className="w-full" variant="default">
          <Card.Header>
            <Card.Title>
              <SiConvertio />
              Conversion Rate
            </Card.Title>
            <Card.Description className="flex items-end justify-between gap-2">
              <span>3.24%</span>
              <Chip className="bg-green-900 text-white">
                <FaArrowTrendUp />
                -3.5%
              </Chip>
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p>Compared to 3.30% last month</p>
          </Card.Content>
        </Card>
      </div>
      <Separator className="my-8" />
      <div className="grid grid-cols-5 gap-4">
        <SalesOverview />
        <TopCategories />
        <RecentOrders />
        <TopCustomer />
      </div>
    </div>
  );
};

export default HeroSection;
