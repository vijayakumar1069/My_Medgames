import { admin_payments_function } from "@/app/actions/payment_functions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default async function AdminPayments() {
  let payment;
  try {
    const res = await admin_payments_function();

    payment = await res.data;

    if (payment.error) {
      return (
        <div>
          <p>{payment.error.message}</p>
        </div>
      );
    }
  } catch (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="text-center">Image</TableHead> */}
            <TableHead>Email</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>courseTitle</TableHead>
            <TableHead>paymentIntentId</TableHead>
            {/* <TableHead>status</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {payment.length > 0 ? (
            payment.map((item) => (
              <TableRow key={item._id} className="w-full">
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.amount}</TableCell>

                <TableCell>{item.courseTitle}</TableCell>
                <TableCell>{item.paymentIntentId}</TableCell>
                {/* <TableCell>{item.status}</TableCell> */}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                No payments available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
