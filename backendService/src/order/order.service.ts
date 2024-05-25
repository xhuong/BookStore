import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";
import { CreateOrderDetailDto } from "src/order-detail/dto/create-order-detail.dto";

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createNewOrder(
    request: {
      order: CreateOrderDto;
      order_details: CreateOrderDetailDto[];
      payment_id: number;
    },
    response: Response,
  ) {
    console.log("🚀 ~ OrderService ~ order_details:", request.order_details);
    try {
      // step 1: check the book in list book in order_details is available or not?
      const isAvailable = await this.checkAvailable(request.order_details);
      if (isAvailable) {
        // step 2: insert data to Order table
        console.log("waiting order...");
        const orderData = await this.prisma.order.create({
          data: request.order,
        });
        console.log("waiting orderRel...");

        // step 3: insert data to OrderRelPayment tabel
        const orderRelPaymentData = await this.prisma.orderRelPayment.create({
          data: {
            order_id: orderData.id,
            payment_id: request.payment_id,
          },
        });

        // step 4: insert data to orderDetails table
        const orderDetailsData = await this.prisma.order_detail.createMany({
          data: request.order_details.map((item) => ({
            book_id: item.book_id,
            order_id: orderData.id,
            amount: item.amount,
          })),
        });

        return response.status(200).json({
          status: 200,
          message: "Create new order was successed",
          result: {
            data: orderDetailsData,
          },
        });
      } else {
        return response.status(200).json({
          status: 400,
          message:
            "Some books is not available for now, please check book amount",
          result: {},
        });
      }
    } catch (err) {
      console.log("[Error][CreateNewOrder]", err);
      return {
        status: 400,
        message: "Create new order was failed",
      };
    }
  }

  async create(createOrderDto: CreateOrderDto, response: Response) {
    try {
      const data = await this.prisma.order.create({
        data: createOrderDto,
      });
      return response.status(200).json({
        status: 200,
        message: "Create order successfully",
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Create order faild",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.order.findMany();
      return response.status(200).json({
        status: 200,
        message: "Get all orders successfully",
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: `Get all orders failed`,
      };
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = await this.prisma.order.findUnique({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Get order with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Get order failed`,
      };
    }
  }

  async getAllOrdersByUserId(id: number, response: Response) {
    try {
      const data = await this.prisma.order.findMany({
        where: { user_id: id },
        include: {
          Order_detail: {
            include: { book: true },
          },
          orderRelPayment: {
            include: {
              payment: true,
            },
          },
        },
      });
      return response.status(200).json({
        status: 200,
        message: `Get all orders by user id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Get order failed`,
      };
    }
  }

  async update(id: number, updateOrderDto: UpdateOrderDto, response: Response) {
    try {
      const data = await this.prisma.order.update({
        where: { id },
        data: updateOrderDto,
      });
      return response.status(200).json({
        status: 200,
        message: `Updated order with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: `Update order failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.order.delete({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Remove order with id = ${id} successfully`,
      });
    } catch (error) {
      return {
        status: 400,
        message: `Remove order failed`,
      };
    }
  }

  async checkSpecificBookIsAvailable(orderDetails: {
    book_id: number;
    amount: number;
  }) {
    const data = await this.prisma.book.findFirst({
      where: {
        id: orderDetails.book_id,
        available_quantity: {
          gte: orderDetails.amount,
        },
      },
    });

    if (data && data.name) {
      console.log("found");

      return {
        book_id: data.id,
        name: data.name,
        isAvailable: true,
      };
    } else {
      console.log("not found");

      return {
        book_id: orderDetails.book_id,
        name: "",
        isAvailable: false,
      };
    }
  }

  async checkAvailable(order_details: CreateOrderDetailDto[]) {
    try {
      let books = [];
      let isAvailableBook = true;

      for (const orderDetailItem of order_details) {
        let data = await this.checkSpecificBookIsAvailable(orderDetailItem);
        books.push(data);
      }

      books.forEach((book) => {
        if (!book.isAvailable) {
          isAvailableBook = false;
          return;
        }
      });

      console.log("🚀 ~ OrderService ~ isAvailableBook:", isAvailableBook);
      return isAvailableBook;

      // if (isAvailableBook) {
      //   return response.status(200).json({
      //     status: 200,
      //     message: "Is Available",
      //     result: {},
      //   });
      // }
    } catch (error) {
      // return {
      //   status: 400,
      //   message: "Error when check...",
      // };
    }
  }
}
