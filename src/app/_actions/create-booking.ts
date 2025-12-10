"use server";

import { db } from "../_lib/prisma";

interface CreateBookingParams {
  serviceId: string;
  userId: string;
  bookingTime: Date;
}

export const createBooking = async ({
  serviceId,
  userId,
  bookingTime,
}: CreateBookingParams) => {
  await db.booking.create({
    data: {
      serviceId,
      userId,
      bookingTime,
    },
  });
};
