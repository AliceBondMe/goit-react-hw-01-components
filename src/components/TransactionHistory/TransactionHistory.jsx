import { Table, TableHeader, TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>

      <tbody>
        {transactions.map(transaction => {
          return (
            <TableRow key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};
