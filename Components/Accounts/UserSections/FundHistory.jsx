import React from "react";
import { Table } from "react-bootstrap";
import styles from "./index.module.css";
import moment from "moment";

export default function FundHistory({ transactions }) {
  console.log(transactions);

  return (
    <div>
      <Table striped hover responsive>
        <thead className={styles.customTable}>
          <tr>
            <th className={styles.tableHeader}>#</th>
            <th className={styles.tableHeader}>Campaign Name</th>
            <th className={styles.tableHeader}>Amount</th>
            <th className={styles.tableHeader}>Transaction Hash</th>
            <th className={styles.tableHeader}>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id} className={styles.tableRow}>
              <td>{index + 1}</td>
              <td>{transaction.campaign.name}</td>
              <td className='text-center'>{transaction.amount}</td>
              <td>{transaction.hash}</td>
              <td>
                {moment(transaction.createdAt).calendar(null, {
                  sameDay: "[Today]",
                  lastDay: "[Yesterday]",
                  sameElse: "MMM D, YYYY",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
