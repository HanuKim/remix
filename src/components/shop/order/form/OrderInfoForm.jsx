import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const cart = [
  {
    productName: "buriburi vinyl sticker",
    quantity: 2,
    price: 100,
  },
  {
    productName: "cat's meow village poster",
    quantity: 1,
    price: 50,
  },
  {
    productName: "sea breeze scented candle",
    quantity: 1,
    price: 250,
  },
];

const OrderInfoForm = () => {
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };
  return (
    <Card className="w-[350px] h-[350px] mt-5 overflow-auto">
      <CardHeader>
        <CardTitle>주문서 작성</CardTitle>
        <CardDescription>
          개인정보 입력 후 구매하실 상품을 확인해주세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-2">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">성함</Label>
              <Input id="name" placeholder="성함을 입력해주세요." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="tel" placeholder="전화번호" />
                <Button type="button">인증</Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Table>
          <TableCaption className="text-[11px]">
            선택 상품 리스트를 확인한 후 다음 단계로 넘어가세요.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[140px]">상품명</TableHead>
              <TableHead className="text-center">개수</TableHead>
              <TableHead className="text-right w-[50px]">총액</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.productName}</TableCell>
                <TableCell className="text-center">{item.quantity}</TableCell>
                <TableCell className="text-right">${item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell className="text-right">${calculateTotal()}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardFooter>
    </Card>
  );
};

export default OrderInfoForm;
