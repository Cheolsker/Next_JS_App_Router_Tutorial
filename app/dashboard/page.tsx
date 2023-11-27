import CardWrapper, { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import {
  CardSkeleton,
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/app/ui/skeletons";
import { fetchCardData } from "../lib/data";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page.",
};

export default async function Page() {
  /* 개별적으로 카드를 불러온다면 ? */
  // const {
  //   numberOfCustomers,
  //   numberOfInvoices,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();

  /* Parallel 요청 */
  // const [
  //   revenue,
  //   latestInvoices,
  //   {
  //     numberOfCustomers,
  //     numberOfInvoices,
  //     totalPaidInvoices,
  //     totalPendingInvoices,
  //   },
  // ] = await Promise.all([
  //   fetchRevenue(),
  //   fetchLatestInvoices(),
  //   fetchCardData(),
  // ]);

  /* Waterfall 요청 */
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  // const {
  //   numberOfCustomers,
  //   numberOfInvoices,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Course */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>

        {/* 개별적으로 Suspense를 단다면? */}
        {/* <Suspense fallback={<CardSkeleton />}>
          <Card title="Collected" value={totalPaidInvoices} type="collected" />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Card title="Pending" value={totalPendingInvoices} type="pending" />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Card
            title="Total Invoices"
            value={numberOfInvoices}
            type="invoices"
          />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Card
            title="Total Customers"
            value={numberOfCustomers}
            type="customers"
          />
        </Suspense> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
