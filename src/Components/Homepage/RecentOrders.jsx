"use client";
import { Pagination, Table } from "@heroui/react";
import Link from "next/link";
import React from "react";

const RecentOrders = () => {
  const totalPages = 5;
  const [page, setPage] = React.useState(4);
  return (
    <div className="col-span-3 border rounded-lg p-4">
      <h4>Recent Orders</h4>
      <div className="flex items-center justify-between">
        <p>Track your latest transactions</p>
        <Link href="#" className="underline">
          View All
        </Link>
      </div>
      <div className="mt-4">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-full">
              <Table.Header>
                <Table.Column isRowHeader>Name</Table.Column>
                <Table.Column>Role</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Email</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Kate Moore</Table.Cell>
                  <Table.Cell>CEO</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
                  <Table.Cell>kate@acme.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>John Smith</Table.Cell>
                  <Table.Cell>CTO</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
                  <Table.Cell>john@acme.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Sara Johnson</Table.Cell>
                  <Table.Cell>CMO</Table.Cell>
                  <Table.Cell>On Leave</Table.Cell>
                  <Table.Cell>sara@acme.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Michael Brown</Table.Cell>
                  <Table.Cell>CFO</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
                  <Table.Cell>michael@acme.com</Table.Cell>
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
