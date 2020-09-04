export function getTotalOrderQuantity(orderlines) {
  let count = 0;

  for (let order of orderlines) {
    if (order.orderQuantity) {
      count = count + order.orderQuantity;
    } else if (order.quantity) {
      count = count + order.quantity;
    }
  }

  return count.toString();
}
