import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import styles from "./index.module.css";
import moment from "moment";
import { useSelector } from "react-redux";
export default function FundHistory({ transactions }) {
  const state = useSelector((state) => state.user);
  const [npo, setNpo] = useState(state.npo.loggedIn);

  useEffect(() => {
    setNpo(state.npo.loggedIn);
  }, [transactions]);
  console.log(transactions);
  return (
    <div>
      <Table striped hover responsive>
        <thead className={styles.customTable}>
          <tr>
            <th className={styles.tableHeader}>#</th>
            <th className={styles.tableHeader}>
              {npo ? "Order ID" : "Campaign Name"}
            </th>
            <th className={styles.tableHeader}>Amount</th>

            <th className={styles.tableHeader}>Transaction Hash</th>
            {npo && (
              <>
                <th className={styles.tableHeader}>Order Status</th>
              </>
            )}
            <th className={styles.tableHeader}>Date</th>
          </tr>
        </thead>
        <tbody>
          {npo ? (
            <tr className={styles.tableRow}>
              <td>{1}</td>
              <td>
                <a href='www.google.com'>{124}</a>
              </td>
              <td>{40}</td>
              <td>dsada21</td>
              <td>Delivered</td>
              <td>
                {moment(new Date()).calendar(null, {
                  sameDay: "[Today]",
                  lastDay: "[Yesterday]",
                  sameElse: "MMM D, YYYY",
                })}
              </td>
            </tr>
          ) : (
            transactions?.map((transaction, index) => (
              <tr key={transaction.id} className={styles.tableRow}>
                <td>{index + 1}</td>
                <td>{transaction.campaign.name}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.hash}</td>
                <td>
                  {moment(transaction.createdAt).calendar(null, {
                    sameDay: "[Today]",
                    lastDay: "[Yesterday]",
                    sameElse: "MMM D, YYYY",
                  })}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}
