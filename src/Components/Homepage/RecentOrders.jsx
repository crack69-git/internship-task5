"use client";
import { Chip, Pagination, Table } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const RecentOrders = () => {
  const totalPages = 3;
  const [page, setPage] = React.useState(4);
  return (
    <div className="col-span-3 max-md:col-span-5  border rounded-2xl p-4">
      <h4 className="text-xl font-bold">Recent Orders</h4>
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm">Track your latest transactions</p>
        <Link href="#" className="underline flex items-center gap-1">
          View All
          <HiMiniArrowUpRight />
        </Link>
      </div>
      <div className="mt-4">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-full">
              <Table.Header>
                <Table.Column isRowHeader>Order ID</Table.Column>
                <Table.Column>Customer</Table.Column>
                <Table.Column>Date</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Amount</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>#NS-4829</Table.Cell>
                  <Table.Cell>Olivia Lartin</Table.Cell>
                  <Table.Cell>Oct 24,2025</Table.Cell>
                  <Table.Cell>
                    <Chip color="success">Paid</Chip>
                  </Table.Cell>
                  <Table.Cell>$1,200.00</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>#NS-4830</Table.Cell>
                  <Table.Cell>Ethan Walker</Table.Cell>
                  <Table.Cell>Oct 24,2025</Table.Cell>
                  <Table.Cell>
                    <Chip className="bg-yellow-100 text-yellow-700">
                      Pending
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>$1,200.00</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>#NS-4831</Table.Cell>
                  <Table.Cell>Souphia Tuner</Table.Cell>
                  <Table.Cell>Oct 24,2025</Table.Cell>
                  <Table.Cell>
                    <Chip className="bg-blue-100 text-blue-800">Shipped</Chip>
                  </Table.Cell>
                  <Table.Cell>$1,200.00</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>#NS-4832</Table.Cell>
                  <Table.Cell>Noah Williams</Table.Cell>
                  <Table.Cell>Oct 24,2025</Table.Cell>
                  <Table.Cell>
                    <Chip color="success">Paid</Chip>
                  </Table.Cell>
                  <Table.Cell>$1,200.00</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
        <Pagination className="justify-center mt-4">
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous
                isDisabled={page === 1}
                onPress={() => setPage((p) => p - 1)}
              >
                <Pagination.PreviousIcon />
                <span>Previous</span>
              </Pagination.Previous>
            </Pagination.Item>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Pagination.Item key={p}>
                <Pagination.Link
                  isActive={p === page}
                  onPress={() => setPage(p)}
                >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next
                isDisabled={page === totalPages}
                onPress={() => setPage((p) => p + 1)}
              >
                <span>Next</span>
                <Pagination.NextIcon />
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </div>
    </div>
  );
};

export default RecentOrders;
